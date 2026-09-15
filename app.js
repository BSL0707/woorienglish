const GOOGLE_FORM = {
  action: "https://docs.google.com/forms/d/e/1FAIpQLSf7EbX1YUUtDStCHFo6wEsrArD-wmrwAVm63umbxhCwjqobcA/formResponse",
  entries: {
    name: "entry.1245555301",
    grade: "entry.990029295",
    phone: "entry.426226895",
    difficulty: "entry.418205851",
    score: "entry.1142044975",
    vocab: "entry.504730274",
    grammar: "entry.1101151890",
    reading: "entry.566222995"
  },
  otherKeys: ["vocab", "grammar"]
};

const GRADE_FLAP = { m1: "MID 1", m2: "MID 2", m3: "MID 3", h1: "HIGH 1", h2: "HIGH 2", h3: "HIGH 3" };
const SECTION_FLAP = { vocab: "VOCAB", grammar: "GRAMMAR", reading: "READING" };

const state = {
  name: "",
  grade: "",
  difficulty: "mid",
  items: [],
  index: 0,
  answers: []
};

function shuffle(list) {
  const arr = list.slice();
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function uniqueById(list) {
  const seen = new Set();
  return list.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 :/-.";
const DIGITS = "0123456789";
const HANGUL = "가나다라마바사아자차카타파하우리학원진단평가";
const HANGUL_RE = /[\uAC00-\uD7A3]/;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const boards = new WeakMap();
let audioCtx;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function displayChar(ch) {
  return ch === " " ? "\u00a0" : ch;
}

function clickSound() {
  try {
    audioCtx = audioCtx || new AudioContext();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "square";
    osc.frequency.value = 1400 + Math.random() * 900;
    gain.gain.value = 0.035;
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.028);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.03);
  } catch (_err) { /* ignore */ }
}

const FLIP_MS = 200;

class FlapCell {
  constructor(el) {
    this.el = el;
    this.current = " ";
    this.token = 0;
    this.el.innerHTML = `
      <div class="half back-top"><span>\u00a0</span></div>
      <div class="half back-bot"><span>\u00a0</span></div>
      <div class="half flip top"><span>\u00a0</span></div>
      <div class="half flip bot"><span>\u00a0</span></div>
      <div class="hinge"></div>
    `;
    this.backTop = this.el.querySelector(".back-top span");
    this.backBot = this.el.querySelector(".back-bot span");
    this.flipTop = this.el.querySelector(".flip.top");
    this.flipBot = this.el.querySelector(".flip.bot");
    this.flipTopSpan = this.flipTop.querySelector("span");
    this.flipBotSpan = this.flipBot.querySelector("span");
  }

  paint(ch) {
    const glyph = displayChar(ch);
    this.backTop.textContent = glyph;
    this.backBot.textContent = glyph;
    this.current = ch;
  }

  flipOnce(next) {
    if (next === this.current) return Promise.resolve();
    if (reduceMotion) {
      this.paint(next);
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      const from = displayChar(this.current);
      const to = displayChar(next);
      this.backTop.textContent = to;
      this.flipTopSpan.textContent = from;
      this.flipBotSpan.textContent = to;
      this.el.classList.add("go");
      this.flipTop.classList.remove("go");
      this.flipBot.classList.remove("go");
      void this.flipTop.offsetWidth;
      this.flipTop.classList.add("go");
      clickSound();
      let done = false;
      const end = () => {
        if (done) return;
        done = true;
        this.el.classList.remove("go");
        this.flipTop.classList.remove("go");
        this.flipBot.classList.remove("go");
        this.paint(next);
        resolve();
      };
      const finishTop = () => {
        this.flipTop.removeEventListener("animationend", finishTop);
        this.backBot.textContent = to;
        this.flipBot.classList.add("go");
        this.flipBot.addEventListener("animationend", end, { once: true });
      };
      this.flipTop.addEventListener("animationend", finishTop);
      setTimeout(end, FLIP_MS + 20);
    });
  }

  play(target, { delay = 0, minSpins = 0 } = {}) {
    this.token += 1;
    const token = this.token;
    const run = async () => {
      if (delay) await wait(delay);
      if (token !== this.token) return;
      if (this.current === target && minSpins <= 0) return;
      const hangul = HANGUL_RE.test(target) || HANGUL_RE.test(this.current);
      const set = hangul
        ? Array.from(HANGUL)
        : (DIGITS.includes(this.current) && DIGITS.includes(target) ? DIGITS : CHARS);
      const hops = this.current === target ? Math.min(minSpins, 3) : minSpins;
      for (let i = 0; i < hops; i += 1) {
        if (token !== this.token) return;
        let rnd = set[Math.floor(Math.random() * set.length)];
        if (rnd === this.current) rnd = set[(Math.max(0, set.indexOf(rnd)) + 1) % set.length];
        await this.flipOnce(rnd);
      }
      if (token !== this.token) return;
      if (this.current !== target) await this.flipOnce(target);
    };
    return run();
  }
}

function ensureBoard(el, width, hangul) {
  let board = boards.get(el);
  if (!board || board.width !== width) {
    el.innerHTML = "";
    board = { width, cells: [] };
    for (let i = 0; i < width; i += 1) {
      const cell = document.createElement("div");
      cell.className = hangul ? "sf ko" : "sf";
      el.appendChild(cell);
      board.cells.push(new FlapCell(cell));
    }
    boards.set(el, board);
  }
  return board;
}

function setFlap(el, text, width, opts = {}) {
  const chars = Array.from(String(text)).map((ch) => (
    /[a-z]/.test(ch) ? ch.toUpperCase() : ch
  ));
  const w = width ?? chars.length;
  const padded = chars.concat(Array(Math.max(0, w - chars.length)).fill(" ")).slice(0, w);
  const hangul = padded.some((ch) => HANGUL_RE.test(ch));
  const board = ensureBoard(el, w, hangul);
  let stagger = opts.stagger ?? 40;
  let minSpins = opts.minSpins ?? 0;
  if (opts.duration) {
    const lastIdx = Math.max(0, w - 1);
    const hops = Math.max(2, Math.round((opts.duration - lastIdx * stagger) / FLIP_MS));
    minSpins = Math.max(1, hops - 1);
  }
  padded.forEach((ch, i) => {
    board.cells[i].play(ch, { delay: i * stagger, minSpins });
  });
}

let clockArmed = false;
function tickClock() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const text = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  setFlap(document.getElementById("clock-board"), text, 8, clockArmed
    ? { minSpins: 0, stagger: 0 }
    : { duration: 2000, stagger: 35 });
  clockArmed = true;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => {
    const on = screen.id === id;
    screen.hidden = !on;
    screen.classList.toggle("is-on", on);
  });
}

function withChoicesShuffled(question) {
  const order = shuffle(question.choices.map((_, i) => i));
  return {
    ...question,
    choices: order.map((i) => question.choices[i]),
    answer: order.indexOf(question.answer)
  };
}

function pickFrom(bank, grade, difficulty, n, strictGrade, mixDiff) {
  const tagged = mixDiff
    ? bank.filter((q) => q.grades.includes(grade))
    : bank.filter((q) => q.grades.includes(grade) && q.difficulty === difficulty);
  const sameGrade = bank.filter((q) => q.grades.includes(grade));
  const pool = uniqueById(strictGrade ? tagged.concat(sameGrade) : tagged.concat(sameGrade, bank));
  return shuffle(pool).slice(0, n);
}

function buildExam(grade, difficulty) {
  const vocab = pickFrom(window.QUESTION_BANK.vocab, grade, difficulty, 10, true, true).map((q) => ({
    ...withChoicesShuffled(q),
    section: "vocab"
  }));
  const grammar = pickFrom(window.QUESTION_BANK.grammar, grade, difficulty, 3, true, true).map((q) => ({
    ...withChoicesShuffled(q),
    section: "grammar"
  }));
  const passages = pickFrom(window.QUESTION_BANK.reading, grade, difficulty, 1, true, true);
  const passage = passages[0];
  const reading = passage.items.map((item) => ({
    ...withChoicesShuffled(item),
    section: "reading",
    passage: passage.passage
  }));
  return vocab.concat(grammar, reading);
}

function currentItem() {
  return state.items[state.index];
}

function renderQuiz() {
  const item = currentItem();
  const n = String(state.index + 1).padStart(2, "0");
  setFlap(document.getElementById("progress-board"), `${n}/16`, 5, { minSpins: 3, stagger: 30 });
  setFlap(document.getElementById("section-board"), SECTION_FLAP[item.section], 8, { minSpins: 6, stagger: 35 });
  const passage = document.getElementById("passage");
  if (item.passage) {
    passage.hidden = false;
    passage.textContent = item.passage;
  } else {
    passage.hidden = true;
    passage.textContent = "";
  }
  document.getElementById("prompt").textContent = item.prompt;
  const box = document.getElementById("choices");
  box.innerHTML = "";
  item.choices.forEach((label, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice";
    btn.style.animationDelay = `${80 + i * 70}ms`;
    btn.textContent = `${String.fromCharCode(65 + i)}.  ${label}`;
    btn.addEventListener("click", () => choose(i));
    box.appendChild(btn);
    requestAnimationFrame(() => btn.classList.add("in"));
  });
}

function choose(choiceIndex) {
  state.answers[state.index] = choiceIndex;
  if (state.index < state.items.length - 1) {
    state.index += 1;
    renderQuiz();
    return;
  }
  renderResult();
}

function tally() {
  const by = { vocab: { ok: 0, n: 0 }, grammar: { ok: 0, n: 0 }, reading: { ok: 0, n: 0 } };
  const wrong = [];
  state.items.forEach((item, i) => {
    by[item.section].n += 1;
    const ok = state.answers[i] === item.answer;
    if (ok) by[item.section].ok += 1;
    else wrong.push({ item, picked: state.answers[i] });
  });
  const raw = 16 - wrong.length;
  return { by, wrong, raw, percent: Math.round((raw / 16) * 100) };
}

function renderResult() {
  showScreen("screen-result");
  const { by, wrong, raw, percent } = tally();
  setFlap(document.getElementById("score-board"), String(percent).padStart(3, "0"), 3, { minSpins: 14, stagger: 90 });
  document.getElementById("score-sub").textContent =
    `${window.GRADE_LABEL[state.grade]} · ${raw}/16`;
  document.getElementById("section-scores").innerHTML = `
    <div class="pill"><span>어휘</span><b>${by.vocab.ok}/${by.vocab.n}</b></div>
    <div class="pill"><span>문법</span><b>${by.grammar.ok}/${by.grammar.n}</b></div>
    <div class="pill"><span>독해</span><b>${by.reading.ok}/${by.reading.n}</b></div>
  `;
  const comments = document.getElementById("comments");
  if (wrong.length === 0) {
    comments.innerHTML = `<article class="comment"><p class="q">틀린 문항이 없습니다.</p></article>`;
  } else {
    comments.innerHTML = wrong.map(({ item, picked }) => `
      <article class="comment">
        <div class="tag">${SECTION_FLAP[item.section]} · WRONG</div>
        <p class="q">${item.prompt}</p>
        <p class="a">정답 ${String.fromCharCode(65 + item.answer)}. ${item.choices[item.answer]}
          ${picked == null ? "" : ` · 선택 ${String.fromCharCode(65 + picked)}. ${item.choices[picked]}`}</p>
        <p class="c">${item.comment}</p>
      </article>
    `).join("");
  }
  fillReport(by, raw, percent);
  document.getElementById("consult-name").value = state.name;
  document.getElementById("consult-grade").value = window.GRADE_LABEL[state.grade];
  document.getElementById("consult-phone").value = "";
  document.getElementById("consult-msg").hidden = true;
}

function isWeak(section, by) {
  if (section === "vocab") return by.vocab.ok < 5;
  if (section === "grammar") return by.grammar.ok < 2;
  return by.reading.ok < 2;
}

function reportComment(by) {
  const weak = ["vocab", "grammar", "reading"].filter((key) => isWeak(key, by));
  const key = weak.slice().sort().join("+");
  const lines = {
    "": "전 영역 기본기가 안정적이라, 이제는 난도 높은 문제로 실력을 끌어올릴 단계입니다.",
    vocab: "문법과 독해는 무난하지만, 어휘력이 부족해 풀이가 어려운 상황입니다.",
    grammar: "어휘와 독해는 무난하지만, 문법은 지금 정확히 짚고 넘어가야 합니다.",
    reading: "어휘와 문법은 괜찮지만, 독해에서 문장 흐름을 읽는 힘이 더 필요합니다.",
    "grammar+vocab": "독해는 괜찮지만, 어휘와 문법 기초가 약해 정확도부터 끌어올려야 합니다.",
    "reading+vocab": "문법은 괜찮지만, 어휘 부족이 독해까지 이어져 어휘 공부가 시급합니다.",
    "grammar+reading": "어휘는 괜찮지만, 문법 이해가 약해 독해 정확도가 떨어지고 있습니다.",
    "grammar+reading+vocab": "세 영역 모두 기본기가 부족해, 당장은 진도보다 기초를 다시 다지는 게 우선입니다."
  };
  return lines[key] || "기본기가 한쪽에 치우쳐 있어, 약한 영역부터 순서 있게 보완해야 합니다.";
}

function fillReport(by, raw, percent) {
  const now = new Date();
  const date = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")}`;
  document.getElementById("report-date").textContent = date;
  document.getElementById("report-name").textContent = state.name;
  document.getElementById("report-grade").textContent = window.GRADE_LABEL[state.grade];
  const digits = String(percent).padStart(3, "0").split("");
  document.getElementById("report-digits").innerHTML = digits
    .map((d) => `<span class="report-digit">${d}</span>`)
    .join("");
  document.getElementById("report-raw").textContent = `${raw}/16`;
  document.getElementById("report-sections").textContent =
    `어휘 ${by.vocab.ok}/${by.vocab.n}  ·  문법 ${by.grammar.ok}/${by.grammar.n}  ·  독해 ${by.reading.ok}/${by.reading.n}`;
  document.getElementById("report-comment").textContent = reportComment(by);
}

async function saveReport() {
  const btn = document.getElementById("btn-save-report");
  const card = document.getElementById("report-card");
  if (typeof html2canvas !== "function") {
    btn.textContent = "저장 기능을 불러오지 못했습니다.";
    return;
  }
  const prev = btn.textContent;
  btn.disabled = true;
  btn.textContent = "저장 중...";
  try {
    const canvas = await html2canvas(card, {
      backgroundColor: "#0b0a08",
      scale: 2,
      useCORS: true
    });
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    const file = new File([blob], "우리학원-진단지.png", { type: "image/png" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file], title: "우리학원 영어 진단평가" });
    } else {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(a.href);
    }
  } catch (err) {
    btn.textContent = "저장에 실패했습니다.";
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = prev;
    }, 1600);
    return;
  }
  btn.disabled = false;
  btn.textContent = prev;
}

function startTest() {
  const name = document.getElementById("input-name").value.trim();
  const error = document.getElementById("start-error");
  if (!name) {
    error.hidden = false;
    error.textContent = "이름을 입력하세요.";
    return;
  }
  if (!state.grade) {
    error.hidden = false;
    error.textContent = "학년을 고르세요.";
    return;
  }
  error.hidden = true;
  state.name = name;
  state.difficulty = "mix";
  state.items = buildExam(state.grade, state.difficulty);
  state.index = 0;
  state.answers = [];
  showScreen("screen-quiz");
  renderQuiz();
}

function submitConsult(event) {
  event.preventDefault();
  const name = document.getElementById("consult-name").value.trim();
  const grade = document.getElementById("consult-grade").value.trim();
  const phone = document.getElementById("consult-phone").value.trim();
  const msg = document.getElementById("consult-msg");
  if (!name || !phone) {
    msg.hidden = false;
    msg.style.color = "var(--bad)";
    msg.textContent = "이름과 번호를 확인하세요.";
    return;
  }
  const { by, raw, percent } = tally();
  const payload = {
    name,
    grade,
    phone,
    difficulty: "중·상 혼합",
    score: `${percent} (${raw}/16)`,
    vocab: `${by.vocab.ok}/${by.vocab.n}`,
    grammar: `${by.grammar.ok}/${by.grammar.n}`,
    reading: `${by.reading.ok}/${by.reading.n}`
  };
  if (GOOGLE_FORM.action) {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = GOOGLE_FORM.action;
    form.target = "gform-iframe";
    Object.entries(payload).forEach(([key, value]) => {
      const entry = GOOGLE_FORM.entries[key];
      if (!entry) return;
      if ((GOOGLE_FORM.otherKeys || []).includes(key)) {
        const choice = document.createElement("input");
        choice.type = "hidden";
        choice.name = entry;
        choice.value = "__other_option__";
        form.appendChild(choice);
        const other = document.createElement("input");
        other.type = "hidden";
        other.name = `${entry}.other_option_response`;
        other.value = value;
        form.appendChild(other);
        return;
      }
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = entry;
      input.value = value;
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
    form.remove();
  } else {
    console.log("상담 신청(구글 폼 연결 전)", payload);
  }
  msg.hidden = false;
  msg.style.color = "var(--ok)";
  msg.textContent = "접수됐습니다. 창을 닫아도 됩니다.";
}

function bindStart() {
  document.addEventListener("pointerdown", () => {
    try {
      audioCtx = audioCtx || new AudioContext();
      audioCtx.resume();
    } catch (_err) { /* ignore */ }
  }, { once: true });

  document.querySelectorAll(".grade-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".grade-btn").forEach((el) => el.classList.remove("is-on"));
      btn.classList.add("is-on");
      btn.classList.remove("is-flipping");
      void btn.offsetWidth;
      btn.classList.add("is-flipping");
      state.grade = btn.dataset.grade;
      clickSound();
    });
  });
  document.getElementById("btn-enter").addEventListener("click", enterLobby);
  document.getElementById("btn-start").addEventListener("click", startTest);
  document.getElementById("consult-form").addEventListener("submit", submitConsult);
  document.getElementById("btn-save-report").addEventListener("click", saveReport);
  tickClock();
  setInterval(tickClock, 1000);
  setFlap(document.getElementById("welcome-hello"), "WELCOME", 7, { duration: 3000, stagger: 50 });
  setFlap(document.getElementById("welcome-academy"), "우리학원", 4, { duration: 3000, stagger: 70 });
  setFlap(document.getElementById("welcome-english"), "ENGLISH", 7, { duration: 3000, stagger: 55 });
}

function enterLobby() {
  document.querySelector(".station").classList.remove("is-welcome");
  showScreen("screen-start");
  setFlap(document.getElementById("title-board"), "진단평가", 4, { duration: 2000, stagger: 50 });
  setFlap(document.getElementById("status-board"), "우리학원", 4, { duration: 2000, stagger: 55 });
}

bindStart();
