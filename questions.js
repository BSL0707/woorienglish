window.GRADE_LABEL = {
  m1: "중1", m2: "중2", m3: "중3",
  h1: "고1", h2: "고2", h3: "고3"
};

/*
  어휘 출처
  - 2015·2022 영어과 교육과정 기본 어휘(초등 800 / 중+고1 1200 / 고2·고3 1000 권장 묶음)
  - 교육과정은 중1·중2·중3을 따로 쪼개지 않음. 학년 배치는 중·고 교과서에서
    실제로 다루는 주제 순서(학교생활→경험·문화→환경·사회→공통영어→영어I→수능 학술).
  - 같은 단어는 한 학년에만 냄. 중은 그 학년 핵심, 상은 같은 학년 심화 신출.

  문법
  - 중1~3: EBS 중학영문법 3800 / MY GRAMMAR COACH 학년 목차 (시제→조동사→비교·to부정사→현재완료·관계사·가정법)
  - 고1: 공통영어 교과서 문법(사역, 가주어 it, 동명사 주어, that 동격)
  - 고2: 교육청 학력평가 어법(수일치, 분사구문, 도치, 가정법 과거완료)
  - 고3: 수능·학력평가 빈출 어법(the number of, despite, 상관비교, suggest that)

  독해
  - 중학: 교과서·EBS Reading 수준 (짧은 이야기→요지)
  - 고1: 교육청 학력평가 요지·세부정보
  - 고2·고3: 영어Ⅰ·수능형 함축·주장 (지문은 원문 복제가 아니라 같은 난이도로 새로 씀)
*/
const VOCAB_SEED = [
  // 중1: 학교생활·취미·일상 (교과서 1학년 단원)
  ["m1","mid","favorite","가장 좋아하는",["유명한","바쁜","어려운"]],
  ["m1","mid","subject","과목",["과목 선생님","숙제","교실"]],
  ["m1","mid","hobby","취미",["직업","숙제","규칙"]],
  ["m1","mid","classmate","반 친구",["선생님","교장","손님"]],
  ["m1","mid","introduce","소개하다",["따라하다","잊어버리다","숨기다"]],
  ["m1","mid","practice","연습하다",["포기하다","복사하다","빌려주다"]],
  ["m1","mid","remember","기억하다",["잊어버리다","상상하다","비교하다"]],
  ["m1","mid","uniform","교복",["가방","운동화","칠판"]],
  ["m1","mid","gym","체육관",["도서관","식당","보건실"]],
  ["m1","mid","usually","보통, 대개",["절대","갑자기","드물게"]],
  ["m1","mid","festival","축제",["시험","숙제","회의"]],
  ["m1","mid","famous","유명한",["낯선","조용한","평범한"]],
  ["m1","high","nervous","긴장한",["편한","배고픈","지루한"]],
  ["m1","high","volunteer","자원봉사하다",["구경하다","명령하다","경쟁하다"]],
  ["m1","high","tradition","전통",["유행","사고","숙제"]],
  ["m1","high","interview","면접, 인터뷰",["숙제","축제","운동"]],
  ["m1","high","hometown","고향",["수도","공항","도서관"]],
  ["m1","high","opinion","의견",["명령","소문","규칙"]],
  ["m1","high","prepare","준비하다",["미루다","숨기다","버리다"]],
  ["m1","high","information","정보",["소문","숙제","장난"]],
  ["m1","high","exciting","신나는",["지루한","슬픈","무서운"]],
  ["m1","high","situation","상황",["장소","사람","과목"]],

  // 중2: 경험·여행·발명·문화 입문
  ["m2","mid","experience","경험",["상상","규칙","소문"]],
  ["m2","mid","adventure","모험",["숙제","휴식","수업"]],
  ["m2","mid","invent","발명하다",["복사하다","숨기다","빌리다"]],
  ["m2","mid","travel","여행하다",["이사하다","기다리다","공부하다"]],
  ["m2","mid","culture","문화",["날씨","숙제","운동"]],
  ["m2","mid","custom","관습",["유행","사고","시험"]],
  ["m2","mid","respect","존경하다",["무시하다","따라하다","숨기다"]],
  ["m2","mid","succeed","성공하다",["실패하다","시작하다","멈추다"]],
  ["m2","mid","effort","노력",["운","숙제","규칙"]],
  ["m2","mid","goal","목표",["실수","규칙","소문"]],
  ["m2","mid","future","미래",["과거","어제","수업"]],
  ["m2","mid","create","만들어 내다",["부수다","복사하다","숨기다"]],
  ["m2","high","ancient","고대의",["현대의","유명한","간단한"]],
  ["m2","high","modern","현대의",["고대의","위험한","작은"]],
  ["m2","high","generation","세대",["학년","직업","국가"]],
  ["m2","high","community","공동체",["개인","건물","숙제"]],
  ["m2","high","opportunity","기회",["위험","실수","규칙"]],
  ["m2","high","challenge","도전",["휴식","숙제","놀이"]],
  ["m2","high","career","직업, 진로",["취미","과목","방학"]],
  ["m2","high","performance","공연",["숙제","시험","회의"]],
  ["m2","high","audience","청중",["배우","작가","심판"]],
  ["m2","high","explore","탐험하다",["숨다","복사하다","기다리다"]],

  // 중3: 환경·세계·미디어·사회 입문
  ["m3","mid","environment","환경",["날씨","교실","숙제"]],
  ["m3","mid","pollution","오염",["청소","재활용","운동"]],
  ["m3","mid","recycle","재활용하다",["버리다","숨기다","사다"]],
  ["m3","mid","climate","기후",["기분","규칙","과목"]],
  ["m3","mid","resource","자원",["쓰레기","숙제","소문"]],
  ["m3","mid","global","세계의, 지구적인",["지역적인","개인적인","임시의"]],
  ["m3","mid","issue","문제, 쟁점",["정답","축제","취미"]],
  ["m3","mid","solution","해결책",["원인","실수","규칙"]],
  ["m3","mid","cause","원인",["결과","예시","장소"]],
  ["m3","mid","effect","영향, 결과",["원인","시작","과목"]],
  ["m3","mid","technology","기술",["예술","체육","음악"]],
  ["m3","mid","communication","의사소통",["침묵","숙제","여행"]],
  ["m3","high","renewable","재생 가능한",["일회용의","위험한","비싼"]],
  ["m3","high","species","(생물) 종",["개인","국가","과목"]],
  ["m3","high","habitat","서식지",["교실","공항","도서관"]],
  ["m3","high","conservation","보존",["파괴","유행","숙제"]],
  ["m3","high","stereotype","고정관념",["사실","규칙","취미"]],
  ["m3","high","prejudice","편견",["존경","관심","전통"]],
  ["m3","high","equality","평등",["경쟁","규칙","숙제"]],
  ["m3","high","identity","정체성",["직업","과목","날씨"]],
  ["m3","high","democracy","민주주의",["축제","숙제","운동"]],
  ["m3","high","extinct","멸종한",["유명한","건강한","빠른"]],

  // 고1: 공통영어 — 설명·전개 기본 학술 어휘
  ["h1","mid","advantage","이점, 장점",["단점","규칙","소문"]],
  ["h1","mid","require","요구하다",["거절하다","숨기다","빌려주다"]],
  ["h1","mid","provide","제공하다",["빼앗다","숨기다","미루다"]],
  ["h1","mid","consider","고려하다",["무시하다","복사하다","자랑하다"]],
  ["h1","mid","describe","묘사하다",["숨기다","명령하다","빌리다"]],
  ["h1","mid","develop","발달하다, 개발하다",["멈추다","복사하다","버리다"]],
  ["h1","mid","increase","증가하다",["줄어들다","숨다","시작하다"]],
  ["h1","mid","decrease","감소하다",["늘어나다","고정하다","여행하다"]],
  ["h1","mid","purpose","목적",["실수","장소","과목"]],
  ["h1","mid","method","방법",["결과","원인","사람"]],
  ["h1","mid","essential","필수적인",["선택적인","유명한","작은"]],
  ["h1","mid","result","결과",["원인","시작","취미"]],
  ["h1","high","arrange","배열하다, 마련하다",["부수다","숨기다","거절하다"]],
  ["h1","high","occur","발생하다",["사라지다","복사하다","기다리다"]],
  ["h1","high","contribute","기여하다",["방해하다","숨다","빌리다"]],
  ["h1","high","appreciate","진가를 알다, 감사하다",["무시하다","비웃다","숨기다"]],
  ["h1","high","reluctant","꺼리는, 마지못한",["열정적인","유명한","간단한"]],
  ["h1","high","inevitable","불가피한",["선택적인","드문","비밀의"]],
  ["h1","high","benefit","이익, 혜택",["손실","소문","규칙"]],
  ["h1","high","constant","끊임없는",["잠깐의","유명한","작은"]],
  ["h1","high","familiar","익숙한",["낯선","위험한","공식적인"]],
  ["h1","high","improve","향상시키다",["악화하다","복사하다","숨기다"]],

  // 고2: 영어Ⅰ — 독해 구조·추론 어휘
  ["h2","mid","analyze","분석하다",["암기하다","숨기다","복사하다"]],
  ["h2","mid","conclude","결론 내리다",["시작하다","숨다","자랑하다"]],
  ["h2","mid","indicate","나타내다",["숨기다","부정하다","빌리다"]],
  ["h2","mid","suggest","시사하다, 제안하다",["명령하다","숨다","복사하다"]],
  ["h2","mid","claim","주장하다",["사과하다","숨기다","빌리다"]],
  ["h2","mid","evidence","증거",["소문","의견","취미"]],
  ["h2","mid","argument","논증, 주장",["농담","축제","숙제"]],
  ["h2","mid","context","맥락",["제목","과목","날씨"]],
  ["h2","mid","factor","요인",["결과만","사람","장소"]],
  ["h2","mid","process","과정",["결과만","실수","과목"]],
  ["h2","mid","theory","이론",["소문","규칙","취미"]],
  ["h2","mid","research","연구",["숙제","놀이","여행"]],
  ["h2","high","substantial","상당한, 실질적인",["사소한","임시의","모호한"]],
  ["h2","high","ambiguous","모호한",["명백한","신속한","공손한"]],
  ["h2","high","compromise","타협",["경쟁","명령","예측"]],
  ["h2","high","diminish","줄어들다",["확대하다","고정하다","증명하다"]],
  ["h2","high","plausible","그럴듯한",["불가능한","성급한","공손한"]],
  ["h2","high","perspective","관점",["과목","장소","규칙"]],
  ["h2","high","significant","중요한, 상당한",["사소한","유명한","작은"]],
  ["h2","high","interpret","해석하다",["암기하다","숨기다","복사하다"]],
  ["h2","high","implication","함축, 시사점",["제목","과목","소문"]],
  ["h2","high","assumption","가정",["증거","규칙","축제"]],

  // 고3: 영어Ⅱ·수능 빈출 학술 어휘
  ["h3","mid","emphasize","강조하다",["숨기다","무시하다","빌리다"]],
  ["h3","mid","maintain","유지하다",["버리다","숨다","복사하다"]],
  ["h3","mid","obtain","얻다",["잃다","숨기다","거절하다"]],
  ["h3","mid","establish","확립하다",["부수다","숨다","미루다"]],
  ["h3","mid","demonstrate","보여 주다, 입증하다",["숨기다","부정하다","빌리다"]],
  ["h3","mid","reveal","드러내다",["숨기다","복사하다","기다리다"]],
  ["h3","mid","recognize","인식하다",["무시하다","숨다","빌리다"]],
  ["h3","mid","evaluate","평가하다",["암기하다","숨기다","자랑하다"]],
  ["h3","mid","influence","영향을 미치다",["따라가다","숨다","복사하다"]],
  ["h3","mid","attitude","태도",["과목","장소","규칙"]],
  ["h3","mid","phenomenon","현상",["소문","숙제","취미"]],
  ["h3","mid","strategy","전략",["실수","축제","과목"]],
  ["h3","high","scrutinize","면밀히 살피다",["대충 보다","빠르게 지나다","가볍게 웃다"]],
  ["h3","high","compensate","보상하다",["빼앗다","숨기다","비웃다"]],
  ["h3","high","controversy","논쟁",["축제","합의","숙제"]],
  ["h3","high","deteriorate","악화되다",["좋아지다","멈추다","복사하다"]],
  ["h3","high","legitimate","정당한, 합법적인",["불법의","유명한","작은"]],
  ["h3","high","prevalent","널리 퍼진",["드문","비밀의","임시의"]],
  ["h3","high","subsequent","그 이후의",["이전의","유명한","작은"]],
  ["h3","high","undermine","약화시키다",["강화하다","숨기다","복사하다"]],
  ["h3","high","vulnerable","취약한",["튼튼한","유명한","빠른"]],
  ["h3","high","arbitrary","임의의, 독단적인",["합리적인","유명한","작은"]]
];

const VOCAB_EXTRA = [
  { id:"vx-m1-01", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? He eats ____ at 12 o’clock.", choices:["lunch","library","teacher","uniform"], answer:0, comment:"lunch는 ‘점심’. 학교생활 기본 어휘입니다." },
  { id:"vx-m1-02", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? We borrow books from the ____.", choices:["library","gym","festival","interview"], answer:0, comment:"library는 ‘도서관’." },
  { id:"vx-m1-03", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? My English ____ is kind.", choices:["teacher","classmate","uniform","hobby"], answer:0, comment:"teacher는 ‘선생님’." },
  { id:"vx-m1-04", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? I do my ____ after dinner.", choices:["homework","festival","opinion","situation"], answer:0, comment:"homework는 ‘숙제’." },
  { id:"vx-m1-05", grades:["m1"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? She is good at soccer.", choices:["잘하다","싫어하다","가르치다","그만두다"], answer:0, comment:"be good at은 ‘잘하다’." },
  { id:"vx-m1-06", grades:["m1"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? Please turn off the TV.", choices:["끄다","켜다","고치다","팔다"], answer:0, comment:"turn off는 ‘끄다’." },
  { id:"vx-m1-07", grades:["m1"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? This map is ____ for travelers.", choices:["useful","nervous","famous","quiet"], answer:0, comment:"useful는 ‘유용한’." },
  { id:"vx-m1-08", grades:["m1"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? Let’s work ____ on the project.", choices:["together","usually","nervous","famous"], answer:0, comment:"together는 ‘함께’." },
  { id:"vx-m1-09", grades:["m1"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? Please ____ your work before you leave.", choices:["finish","invite","share","prepare"], answer:0, comment:"finish는 ‘끝내다’. prepare와 구분합니다." },
  { id:"vx-m1-10", grades:["m1"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? She will ____ her friends to the party.", choices:["invite","introduce","remember","volunteer"], answer:0, comment:"invite는 ‘초대하다’." },
  { id:"vx-m1-11", grades:["m1"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? This is a special day.", choices:["특별한","평범한","위험한","짧은"], answer:0, comment:"special은 ‘특별한’." },
  { id:"vx-m1-12", grades:["m1"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? We have enough time.", choices:["충분한","부족한","비싼","늦은"], answer:0, comment:"enough는 ‘충분한’." },
  { id:"vx-m1-13", grades:["m1"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? Please share the cake.", choices:["나누다","숨기다","버리다","사다"], answer:0, comment:"share는 ‘나누다’." },
  { id:"vx-m1-14", grades:["m1"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The classroom is quiet.", choices:["조용한","시끄러운","더운","어두운"], answer:0, comment:"quiet는 ‘조용한’." },

  { id:"vx-m2-01", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? We stayed at a ____ near the beach.", choices:["hotel","career","audience","custom"], answer:0, comment:"hotel은 ‘호텔’. 여행 단원 기본 어휘입니다." },
  { id:"vx-m2-02", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? He kept a ____ of the trip.", choices:["diary","goal","effort","future"], answer:0, comment:"diary는 ‘일기’." },
  { id:"vx-m2-03", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? They crossed the ____ by boat.", choices:["river","culture","career","audience"], answer:0, comment:"river는 ‘강’." },
  { id:"vx-m2-04", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? The ____ leaves at 3 p.m.", choices:["train","invent","respect","succeed"], answer:0, comment:"train은 ‘기차’." },
  { id:"vx-m2-05", grades:["m2"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? I ran into an old friend.", choices:["우연히 만나다","달려 피하다","일부러 피하다","크게 싸우다"], answer:0, comment:"run into는 ‘우연히 만나다’." },
  { id:"vx-m2-06", grades:["m2"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? The tickets were sold out.", choices:["매진된","할인된","무료인","연기된"], answer:0, comment:"sold out은 ‘매진된’." },
  { id:"vx-m2-07", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? She made a ____ to study abroad.", choices:["decision","generation","community","performance"], answer:0, comment:"make a decision은 ‘결정을 내리다’." },
  { id:"vx-m2-08", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? We should ____ electricity at home.", choices:["save","explore","invent","create"], answer:0, comment:"save는 ‘아끼다, 절약하다’." },
  { id:"vx-m2-09", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? His idea was ____, not copied.", choices:["original","ancient","modern","famous"], answer:0, comment:"original은 ‘독창적인’." },
  { id:"vx-m2-10", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? The museum shows ____ tools.", choices:["historical","nervous","exciting","quiet"], answer:0, comment:"historical은 ‘역사적인’." },
  { id:"vx-m2-11", grades:["m2"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The rule is strict.", choices:["엄격한","느슨한","유명한","간단한"], answer:0, comment:"strict는 ‘엄격한’." },
  { id:"vx-m2-12", grades:["m2"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? She overcame the difficulty.", choices:["극복하다","피하다","숨기다","포기하다"], answer:0, comment:"overcome은 ‘극복하다’." },
  { id:"vx-m2-13", grades:["m2"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The book is available online.", choices:["구할 수 있는","금지된","비싼","짧은"], answer:0, comment:"available은 ‘구할 수 있는’." },
  { id:"vx-m2-14", grades:["m2"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? He is proud of his work.", choices:["자랑스러워하다","부끄러워하다","싫어하다","무시하다"], answer:0, comment:"be proud of는 ‘자랑스러워하다’." },

  { id:"vx-m3-01", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? We should ____ the use of plastic bags.", choices:["reduce","recycle","pollute","cause"], answer:0, comment:"reduce는 ‘줄이다’. recycle과 구분합니다." },
  { id:"vx-m3-02", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? The news spread quickly on social ____.", choices:["media","climate","habitat","species"], answer:0, comment:"media는 ‘매체’." },
  { id:"vx-m3-03", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? The two countries signed an ____.", choices:["agreement","pollution","stereotype","identity"], answer:0, comment:"agreement는 ‘합의, 협정’." },
  { id:"vx-m3-04", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? This is a ____ problem, not a small one.", choices:["serious","famous","quiet","ancient"], answer:0, comment:"serious는 ‘심각한’." },
  { id:"vx-m3-05", grades:["m3"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? We must take action now.", choices:["조치를 취하다","구경하다","포기하다","숨기다"], answer:0, comment:"take action은 ‘조치를 취하다’." },
  { id:"vx-m3-06", grades:["m3"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? The result was unexpected.", choices:["예상 밖의","당연한","유명한","간단한"], answer:0, comment:"unexpected는 ‘예상 밖의’." },
  { id:"vx-m3-07", grades:["m3"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? The new law will ____ this right.", choices:["protect","pollute","recycle","extinct"], answer:0, comment:"protect는 ‘보호하다’." },
  { id:"vx-m3-08", grades:["m3"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? The project needs public ____.", choices:["support","prejudice","habitat","climate"], answer:0, comment:"support는 ‘지지, 지원’." },
  { id:"vx-m3-09", grades:["m3"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? We ____ too much energy at home.", choices:["consume","recycle","protect","reduce"], answer:0, comment:"consume은 ‘소비하다’." },
  { id:"vx-m3-10", grades:["m3"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? She ____ a question in class.", choices:["raised","extinct","global","equal"], answer:0, comment:"raise a question은 ‘문제를 제기하다’." },
  { id:"vx-m3-11", grades:["m3"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The claim is biased.", choices:["편향된","공정한","유명한","짧은"], answer:0, comment:"biased는 ‘편향된’." },
  { id:"vx-m3-12", grades:["m3"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The policy is sustainable.", choices:["지속 가능한","일회용의","불법의","비밀의"], answer:0, comment:"sustainable은 ‘지속 가능한’." },
  { id:"vx-m3-13", grades:["m3"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? Plastic waste harms the ocean.", choices:["해치다","돕다","숨기다","측정하다"], answer:0, comment:"harm은 ‘해치다’." },
  { id:"vx-m3-14", grades:["m3"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The two groups should cooperate.", choices:["협력하다","경쟁하다","무시하다","분리하다"], answer:0, comment:"cooperate는 ‘협력하다’." },

  { id:"vx-h1-01", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? Please ____ the main idea in one sentence.", choices:["explain","require","increase","arrange"], answer:0, comment:"explain은 ‘설명하다’. describe와 가깝지만 여기서는 뜻을 밝히는 쓰임입니다." },
  { id:"vx-h1-02", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? We need to ____ this problem first.", choices:["solve","occur","improve","provide"], answer:0, comment:"solve는 ‘해결하다’." },
  { id:"vx-h1-03", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? The box ____ old letters.", choices:["contains","decreases","requires","benefits"], answer:0, comment:"contain은 ‘포함하다’." },
  { id:"vx-h1-04", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? This example is ____ of the pattern.", choices:["typical","reluctant","inevitable","constant"], answer:0, comment:"typical은 ‘전형적인’." },
  { id:"vx-h1-05", grades:["h1"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? The two ideas are related.", choices:["관련된","반대의","비밀의","임시의"], answer:0, comment:"related는 ‘관련된’." },
  { id:"vx-h1-06", grades:["h1"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? She offered a reason.", choices:["제시하다","거절하다","숨기다","취소하다"], answer:0, comment:"offer는 여기서 ‘제시하다’." },
  { id:"vx-h1-07", grades:["h1"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? The change was ____, not sudden.", choices:["gradual","famous","nervous","ancient"], answer:0, comment:"gradual은 ‘점진적인’." },
  { id:"vx-h1-08", grades:["h1"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? They failed to ____ the safety rule.", choices:["follow","occur","arrange","appreciate"], answer:0, comment:"follow a rule은 ‘규칙을 지키다’." },
  { id:"vx-h1-09", grades:["h1"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? The report is based on ____.", choices:["data","opinion","uniform","festival"], answer:0, comment:"data는 ‘자료, 데이터’." },
  { id:"vx-h1-10", grades:["h1"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? His role in the project is ____.", choices:["primary","reluctant","famous","quiet"], answer:0, comment:"primary는 ‘주된, 일차적인’." },
  { id:"vx-h1-11", grades:["h1"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The effect is temporary.", choices:["일시적인","영원한","유명한","불법의"], answer:0, comment:"temporary는 ‘일시적인’." },
  { id:"vx-h1-12", grades:["h1"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? We should remain objective.", choices:["객관적인","감정적인","유명한","임시의"], answer:0, comment:"objective는 ‘객관적인’." },
  { id:"vx-h1-13", grades:["h1"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The finding is consistent.", choices:["일관된","모순된","비밀의","사소한"], answer:0, comment:"consistent는 ‘일관된’." },
  { id:"vx-h1-14", grades:["h1"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? She rejected the offer.", choices:["거절하다","수락하다","숨기다","복사하다"], answer:0, comment:"reject는 ‘거절하다’." },

  { id:"vx-h2-01", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? The writer tries to ____ the reader.", choices:["persuade","analyze","diminish","invent"], answer:0, comment:"persuade는 ‘설득하다’." },
  { id:"vx-h2-02", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? This is a key ____ in the chapter.", choices:["concept","audience","uniform","festival"], answer:0, comment:"concept는 ‘개념’." },
  { id:"vx-h2-03", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? We should ____ the two sources.", choices:["compare","pollute","invite","recycle"], answer:0, comment:"compare는 ‘비교하다’." },
  { id:"vx-h2-04", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? The two patterns are ____.", choices:["similar","ancient","nervous","quiet"], answer:0, comment:"similar는 ‘비슷한’." },
  { id:"vx-h2-05", grades:["h2"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? The data support the claim.", choices:["뒷받침하다","부정하다","숨기다","복사하다"], answer:0, comment:"support는 여기서 ‘뒷받침하다’." },
  { id:"vx-h2-06", grades:["h2"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? The point is relevant.", choices:["관련 있는","무관한","유명한","임시의"], answer:0, comment:"relevant는 ‘관련 있는’." },
  { id:"vx-h2-07", grades:["h2"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? The conclusion is still ____.", choices:["tentative","famous","ancient","quiet"], answer:0, comment:"tentative는 ‘잠정적인’." },
  { id:"vx-h2-08", grades:["h2"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? The experiment did not ____ the variable.", choices:["control","invite","recycle","travel"], answer:0, comment:"control은 ‘통제하다’." },
  { id:"vx-h2-09", grades:["h2"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? We should ____ the study’s limits.", choices:["acknowledge","pollute","invent","hide"], answer:0, comment:"acknowledge는 ‘인정하다’." },
  { id:"vx-h2-10", grades:["h2"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? The comparison is ____.", choices:["misleading","famous","kind","short"], answer:0, comment:"misleading은 ‘오해하게 하는’." },
  { id:"vx-h2-11", grades:["h2"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The difference is negligible.", choices:["무시할 만한","중대한","유명한","불법의"], answer:0, comment:"negligible은 ‘무시할 만한’." },
  { id:"vx-h2-12", grades:["h2"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The argument is flawed.", choices:["결함 있는","완벽한","유명한","짧은"], answer:0, comment:"flawed는 ‘결함 있는’." },
  { id:"vx-h2-13", grades:["h2"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? She cited a recent study.", choices:["인용하다","숨기다","부정하다","복사만 하다"], answer:0, comment:"cite는 ‘인용하다’." },
  { id:"vx-h2-14", grades:["h2"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The tone is ironic.", choices:["반어적인","문자 그대로의","친절한","공식적인"], answer:0, comment:"ironic은 ‘반어적인’." },

  { id:"vx-h3-01", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? The policy may ____ the gap.", choices:["widen","recycle","invite","travel"], answer:0, comment:"widen은 ‘넓히다’." },
  { id:"vx-h3-02", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? We need a clear ____ for scoring.", choices:["criterion","festival","uniform","hobby"], answer:0, comment:"criterion은 ‘기준’ (복수 criteria)." },
  { id:"vx-h3-03", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? The new study ____ earlier findings.", choices:["confirms","hides","invites","pollutes"], answer:0, comment:"confirm은 ‘확인하다, 입증하다’." },
  { id:"vx-h3-04", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 단어는? This is an ____ case, not a typical one.", choices:["extreme","famous","quiet","kind"], answer:0, comment:"extreme은 ‘극단적인’." },
  { id:"vx-h3-05", grades:["h3"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? The trend looks irreversible.", choices:["되돌릴 수 없는","일시적인","유명한","간단한"], answer:0, comment:"irreversible은 ‘되돌릴 수 없는’." },
  { id:"vx-h3-06", grades:["h3"], difficulty:"mid", prompt:"밑줄 친 부분의 의미는? He dismissed the criticism.", choices:["일축하다","수용하다","숨기다","복사하다"], answer:0, comment:"dismiss는 여기서 ‘일축하다’." },
  { id:"vx-h3-07", grades:["h3"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? The evidence is ____ for that claim.", choices:["insufficient","famous","ancient","kind"], answer:0, comment:"insufficient는 ‘불충분한’." },
  { id:"vx-h3-08", grades:["h3"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? They tried to ____ the risk.", choices:["minimize","invite","recycle","travel"], answer:0, comment:"minimize는 ‘최소화하다’." },
  { id:"vx-h3-09", grades:["h3"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? The distinction is ____.", choices:["crucial","nervous","quiet","ancient"], answer:0, comment:"crucial은 ‘결정적으로 중요한’." },
  { id:"vx-h3-10", grades:["h3"], difficulty:"high", prompt:"빈칸에 알맞은 단어는? The outcome was ____.", choices:["unintended","famous","kind","short"], answer:0, comment:"unintended는 ‘의도하지 않은’." },
  { id:"vx-h3-11", grades:["h3"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The claim is unfounded.", choices:["근거 없는","확실한","유명한","짧은"], answer:0, comment:"unfounded는 ‘근거 없는’." },
  { id:"vx-h3-12", grades:["h3"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The system is obsolete.", choices:["낡은, 쓸모없는","최신의","유명한","불법의"], answer:0, comment:"obsolete는 ‘낡은, 폐기된’." },
  { id:"vx-h3-13", grades:["h3"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? She advocated the reform.", choices:["옹호하다","반대하다","숨기다","복사하다"], answer:0, comment:"advocate는 ‘옹호하다’." },
  { id:"vx-h3-14", grades:["h3"], difficulty:"high", prompt:"밑줄 친 부분의 의미는? The cost is prohibitive.", choices:["감당하기 어려운","아주 싼","유명한","비밀의"], answer:0, comment:"prohibitive는 가격이 ‘엄두를 못 낼 정도인’." }
];

window.QUESTION_BANK = {
  vocab: VOCAB_SEED.map((row, i) => {
    const [grade, difficulty, word, meaning, distractors] = row;
    return {
      id: "v" + String(i + 1).padStart(3, "0"),
      grades: [grade],
      difficulty,
      prompt: word + " 의 뜻은?",
      choices: [meaning].concat(distractors),
      answer: 0,
      comment: word + "는 ‘" + meaning + "’입니다. " + window.GRADE_LABEL[grade] + "에서 다루는 어휘입니다."
    };
  }).concat(VOCAB_EXTRA),
  grammar: [
    { id:"g-m1-1", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? She ____ soccer every Sunday.", choices:["play","plays","playing","played"], answer:1, comment:"중1 핵심: 3인칭 단수 현재는 동사에 -s를 붙입니다. EBS 중학 문법 1학년 기본 시제." },
    { id:"g-m1-2", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? There ____ a book on the desk.", choices:["is","are","be","am"], answer:0, comment:"중1: there is + 단수. a book이 단수이므로 is." },
    { id:"g-m1-3", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? I ____ TV now.", choices:["watch","watches","am watching","watched"], answer:2, comment:"중1: 지금(now)이면 현재진행 be + v-ing." },
    { id:"g-m1-4", grades:["m1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? He ____ like spicy food.", choices:["don't","doesn't","isn't","aren't"], answer:1, comment:"중1 심화: 일반동사 부정은 doesn't + 원형 (3인칭 단수)." },
    { id:"g-m1-5", grades:["m1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? ____ I use your pencil?", choices:["Do","Does","Can","Am"], answer:2, comment:"중1 조동사 can: 허가·가능. Can I ~? 가 자연스럽습니다." },
    { id:"g-m1-6", grades:["m1"], difficulty:"high", prompt:"어법상 옳은 것은?", choices:["She can sings well.","She can sing well.","She cans sing well.","She can to sing well."], answer:1, comment:"조동사 뒤에는 동사원형. can sing." },
    { id:"g-m1-7", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? They ____ my classmates.", choices:["is","am","are","be"], answer:2, comment:"중1 be동사: 복수 주어 they → are." },
    { id:"g-m1-8", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? I ____ breakfast at 7.", choices:["eats","eat","eating","am eat"], answer:1, comment:"중1 일반동사: I/you/we/they + 원형." },
    { id:"g-m1-9", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? We ____ soccer last Sunday.", choices:["play","plays","played","playing"], answer:2, comment:"중1 과거 기초: last Sunday → played." },
    { id:"g-m1-10", grades:["m1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? ____ she like music?", choices:["Do","Does","Is","Are"], answer:1, comment:"3인칭 단수 의문문 Does + 원형." },
    { id:"g-m1-11", grades:["m1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? There ____ two cats in the room.", choices:["is","are","am","be"], answer:1, comment:"there are + 복수." },
    { id:"g-m1-12", grades:["m1"], difficulty:"high", prompt:"어법상 옳은 것은?", choices:["He don't play tennis.","He doesn't play tennis.","He doesn't plays tennis.","He not play tennis."], answer:1, comment:"doesn't + 동사원형." },
    { id:"g-m1-13", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? This is ____ umbrella.", choices:["a","an","the two","some"], answer:1, comment:"umbrella는 모음 소리로 시작하므로 an." },
    { id:"g-m1-14", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? The bag is ____ the chair.", choices:["under","under to","into","at"], answer:0, comment:"위치 전치사 under." },
    { id:"g-m1-15", grades:["m1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? ____ is that man over there?", choices:["Who","Where","What time","How many"], answer:0, comment:"사람을 물을 때는 Who." },
    { id:"g-m1-16", grades:["m1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? I have two ____.", choices:["child","childs","children","childrens"], answer:2, comment:"child의 복수형은 children." },
    { id:"g-m1-17", grades:["m1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? She sits ____ me.", choices:["next","next to","next of","next from"], answer:1, comment:"next to + 명사." },
    { id:"g-m1-18", grades:["m1"], difficulty:"high", prompt:"어법상 옳은 것은?", choices:["This are my books.","These is my books.","These are my books.","This is my books."], answer:2, comment:"복수 지시어 these + are." },

    { id:"g-m2-1", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? I ____ a movie yesterday.", choices:["watch","watches","watched","watching"], answer:2, comment:"중2: yesterday가 있으면 과거시제. EBS 중2 문법 기본시제." },
    { id:"g-m2-2", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? This box is ____ than that one.", choices:["heavy","heavier","heaviest","more heavier"], answer:1, comment:"중2 비교급: 짧은 형용사는 -er. more heavier는 중복입니다." },
    { id:"g-m2-3", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? I want ____ English.", choices:["learn","to learn","learning","learned"], answer:1, comment:"중2 to부정사: want to + 동사원형." },
    { id:"g-m2-4", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? You ____ finish your homework.", choices:["should","should to","shoulding","to should"], answer:0, comment:"중2 조동사 should + 원형. 충고·의무." },
    { id:"g-m2-5", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? The window ____ by Tom.", choices:["broke","was broken","is break","breaking"], answer:1, comment:"중2 수동태 입문: be + p.p. was broken." },
    { id:"g-m2-6", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? I enjoy ____ soccer.", choices:["play","to play","playing","played"], answer:2, comment:"중2 동명사: enjoy + v-ing." },
    { id:"g-m2-7", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? She ____ when I called.", choices:["cooks","cooked","was cooking","is cook"], answer:2, comment:"중2 과거진행: ~하고 있던 중 was/were + v-ing." },
    { id:"g-m2-8", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? I ____ visit my grandma tomorrow.", choices:["will","wills","am will","going"], answer:0, comment:"중2 미래: will + 원형." },
    { id:"g-m2-9", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? This is the ____ building in town.", choices:["tall","taller","tallest","more tall"], answer:2, comment:"중2 최상급: the + -est." },
    { id:"g-m2-10", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? You ____ wear a helmet.", choices:["must","must to","musting","to must"], answer:0, comment:"조동사 must + 원형." },
    { id:"g-m2-11", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? I went home ____ I was tired.", choices:["because","so that","despite","during"], answer:0, comment:"이유 접속사 because + 절." },
    { id:"g-m2-12", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? English ____ in many countries.", choices:["speaks","is spoken","is speak","speaking"], answer:1, comment:"중2 수동태: is + p.p." },
    { id:"g-m2-13", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? This road is as ____ as that one.", choices:["wide","wider","widest","more wide"], answer:0, comment:"동등 비교 as + 원급 + as." },
    { id:"g-m2-14", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? I will text you ____ I get home.", choices:["when","during","despite","so that"], answer:0, comment:"접속사 when + 절." },
    { id:"g-m2-15", grades:["m2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? The movie was ____.", choices:["interested","interesting","interest","interests"], answer:1, comment:"사물이 주어이면 interesting." },
    { id:"g-m2-16", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? ____ it rained, we still played.", choices:["Although","Despite","During","Because of"], answer:0, comment:"although + 절. despite는 명사." },
    { id:"g-m2-17", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? The box is too heavy ____.", choices:["lift","to lift","lifting","lifted"], answer:1, comment:"too + 형 + to부정사." },
    { id:"g-m2-18", grades:["m2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? He is not as tall ____ his brother.", choices:["than","as","to","from"], answer:1, comment:"not as + 원급 + as." },

    { id:"g-m3-1", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? They have ____ here since 2020.", choices:["live","lived","living","lives"], answer:1, comment:"중3 현재완료: have/has + p.p. since와 자주 씁니다." },
    { id:"g-m3-2", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? This is the house ____ I was born.", choices:["which","who","where","what"], answer:2, comment:"중3 관계부사: 장소 선행사에는 where." },
    { id:"g-m3-3", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? The letter ____ by millions of people.", choices:["reads","read","was read","has read"], answer:2, comment:"중3 수동태: was read." },
    { id:"g-m3-4", grades:["m3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? If I ____ rich, I would travel more.", choices:["am","was","were","been"], answer:2, comment:"중3 가정법 과거: If + were, would + 원형." },
    { id:"g-m3-5", grades:["m3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? I look forward to ____ from you.", choices:["hear","hearing","heard","hears"], answer:1, comment:"look forward to + 동명사. to가 전치사입니다." },
    { id:"g-m3-6", grades:["m3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? The boy ____ we met is my cousin.", choices:["which","who","where","what"], answer:1, comment:"사람 선행사 관계대명사는 who (목적격 whom도 가능, 내신에선 who)." },
    { id:"g-m3-7", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? Have you ____ been to Busan?", choices:["never","ever","yet","already"], answer:1, comment:"현재완료 경험: Have you ever ~?" },
    { id:"g-m3-8", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? The man ____ lives next door is a doctor.", choices:["which","who","where","what"], answer:1, comment:"주격 관계대명사 who." },
    { id:"g-m3-9", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? This movie is worth ____.", choices:["watch","to watch","watching","watched"], answer:2, comment:"be worth + v-ing." },
    { id:"g-m3-10", grades:["m3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? He asked me ____ I was ready.", choices:["that","if","what","which"], answer:1, comment:"간접의문 yes/no → if/whether." },
    { id:"g-m3-11", grades:["m3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? The book ____ on the table is mine.", choices:["lying","lies","to lie","lied"], answer:0, comment:"현재분사 수식: the book lying ~." },
    { id:"g-m3-12", grades:["m3"], difficulty:"high", prompt:"어법상 옳은 것은?", choices:["I don't know where does he live.","I don't know where he lives.","I don't know where he live.","I don't know where lives he."], answer:1, comment:"간접의문: 의문사 + 주어 + 동사 (도치 없음)." },
    { id:"g-m3-13", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? She has ____ finished the test.", choices:["just","since","for","ago"], answer:0, comment:"현재완료 + just." },
    { id:"g-m3-14", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? I know the girl ____ bag was lost.", choices:["who","whose","which","where"], answer:1, comment:"소유격 관계대명사 whose." },
    { id:"g-m3-15", grades:["m3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? This is the movie ____ we watched.", choices:["who","where","which","what"], answer:2, comment:"사물 선행사 which/that." },
    { id:"g-m3-16", grades:["m3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? If I ____ you, I would apologize.", choices:["am","was being","were","been"], answer:2, comment:"가정법 과거 If I were." },
    { id:"g-m3-17", grades:["m3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? This is the song I ____ yesterday.", choices:["hear","heard","hearing","to hear"], answer:1, comment:"목적격 관계대명사 생략: the song (that) I heard." },
    { id:"g-m3-18", grades:["m3"], difficulty:"high", prompt:"어법상 옳은 것은?", choices:["The letter written by she.","The letter was written by her.","The letter was wrote by her.","The letter written her."], answer:1, comment:"수동태 be + p.p. + by + 목적격." },

    { id:"g-h1-1", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? The teacher made us ____ the text twice.", choices:["read","to read","reading","reads"], answer:0, comment:"고1 공통영어: 사역동사 make + O + 원형. 능률 등 교과서 1과 계열." },
    { id:"g-h1-2", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? ____ is important to sleep well.", choices:["That","It","This","There"], answer:1, comment:"고1 가주어 It is + 형 + to부정사." },
    { id:"g-h1-3", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? ____ English is fun.", choices:["Learn","Learning","Learned","To learning"], answer:1, comment:"고1 동명사 주어: Learning ~ is fun." },
    { id:"g-h1-4", grades:["h1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? The fact ____ she was late surprised us.", choices:["what","which","that","where"], answer:2, comment:"고1 동격 that절: the fact that." },
    { id:"g-h1-5", grades:["h1"], difficulty:"high", prompt:"어법상 옳은 것은?", choices:["I saw a dog ran in the park.","I saw a dog running in the park.","I saw a dog to run in the park.","I saw a dog runs in the park."], answer:1, comment:"지각동사 see + O + v-ing (진행 동작)." },
    { id:"g-h1-6", grades:["h1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? This is the book ____ I told you about.", choices:["who","where","which","what"], answer:2, comment:"사물 선행사 관계대명사 which/that. 전치사 about의 목적어." },
    { id:"g-h1-7", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? Let him ____ first.", choices:["go","to go","going","goes"], answer:0, comment:"사역동사 let + O + 원형." },
    { id:"g-h1-8", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? I decided ____ the club.", choices:["join","to join","joining","joined"], answer:1, comment:"decide + to부정사." },
    { id:"g-h1-9", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? The girl ____ in the corner is my sister.", choices:["sit","sitting","sat","to sitting"], answer:1, comment:"현재분사 수식 sitting." },
    { id:"g-h1-10", grades:["h1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? I had my bike ____ yesterday.", choices:["repair","repaired","repairing","to repair"], answer:1, comment:"사역 have + O + p.p. (남이 해 줌)." },
    { id:"g-h1-11", grades:["h1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? He is the student ____ won the prize.", choices:["which","who","where","what"], answer:1, comment:"사람 + who 주격." },
    { id:"g-h1-12", grades:["h1"], difficulty:"high", prompt:"어법상 옳은 것은?", choices:["It is easy learn English.","It is easy to learn English.","It is easy learning English to.","Easy is to learn English it."], answer:1, comment:"It is + 형 + to-v." },
    { id:"g-h1-13", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? I am ____ tired that I cannot study.", choices:["so","too","enough","such"], answer:0, comment:"so + 형 + that 절." },
    { id:"g-h1-14", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? Look at the picture ____ by a child.", choices:["draw","drawn","drawing","to draw"], answer:1, comment:"과거분사 수식: the picture drawn by ~." },
    { id:"g-h1-15", grades:["h1"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? Can you help me ____ this box?", choices:["carry","carries","carried","to carrying"], answer:0, comment:"help + O + 동사원형 (to 생략 가능)." },
    { id:"g-h1-16", grades:["h1"], difficulty:"high", prompt:"어법상 틀린 것은?", choices:["He made me cry.","He made me to cry.","Let him go.","I heard her sing."], answer:1, comment:"사역동사 make + O + 원형. to cry가 틀립니다." },
    { id:"g-h1-17", grades:["h1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? This is the town ____ I grew up.", choices:["which","who","where","what"], answer:2, comment:"장소 선행사 where." },
    { id:"g-h1-18", grades:["h1"], difficulty:"high", prompt:"빈칸에 알맞은 것은? ____ the window, I saw a bird.", choices:["Open","Opening","Opened","To opened"], answer:1, comment:"분사구문 Opening the window, ..." },

    { id:"g-h2-1", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? Not only the teacher but also the students ____ ready.", choices:["is","are","be","was"], answer:1, comment:"고2: not only A but also B는 B에 수 일치. students → are. 교육청 학력평가 어법 유형." },
    { id:"g-h2-2", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? Walking along the street, ____ a wallet.", choices:["a wallet was found","I found","was found","it found"], answer:1, comment:"분사구문의 의미상 주어는 주절 주어와 같아야 합니다. I found." },
    { id:"g-h2-3", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? He worked hard ____ he could pass the test.", choices:["so that","despite","however","during"], answer:0, comment:"목적: so that + 절." },
    { id:"g-h2-4", grades:["h2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? If I ____ harder, I would have passed.", choices:["study","studied","had studied","have studied"], answer:2, comment:"가정법 과거완료: If + had p.p., would have p.p." },
    { id:"g-h2-5", grades:["h2"], difficulty:"high", prompt:"어법상 옳은 것은?", choices:["Hardly he had arrived when it rained.","Hardly had he arrived when it rained.","Hardly he has arrived when it rained.","Hardly did he had arrived when it rained."], answer:1, comment:"부정어 도치: Hardly had + 주어 + p.p." },
    { id:"g-h2-6", grades:["h2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? I will give you ____ you need.", choices:["that","what","which","who"], answer:1, comment:"선행사 없는 관계사 what = the thing that." },
    { id:"g-h2-7", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? Neither the coach nor the players ____ happy.", choices:["is","are","be","was"], answer:1, comment:"neither A nor B는 B에 일치. players → are." },
    { id:"g-h2-8", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? ____ from the hill, the town looked small.", choices:["See","Seen","Seeing","Saw"], answer:1, comment:"과거분사 분사구문: (Being) seen from ~." },
    { id:"g-h2-9", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? She left early ____ catch the train.", choices:["so that","in order to","despite","because of"], answer:1, comment:"in order to + 원형. so that은 절." },
    { id:"g-h2-10", grades:["h2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? Only then ____ the truth.", choices:["he realized","did he realize","he did realize","realized he"], answer:1, comment:"Only then 도치: did + 주어 + 원형." },
    { id:"g-h2-11", grades:["h2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? I wish I ____ taller.", choices:["am","were","will be","have been"], answer:1, comment:"I wish + 가정법 과거 were." },
    { id:"g-h2-12", grades:["h2"], difficulty:"high", prompt:"어법상 옳은 것은?", choices:["Whoever calls, tell them I'm out.","Who ever calls, tell them I'm out.","Whomever call, tell them I'm out.","Whoever call, tell them I'm out."], answer:0, comment:"복합관계대명사 whoever + 단수 동사." },
    { id:"g-h2-13", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? The coach as well as the players ____ here.", choices:["is","are","be","were"], answer:0, comment:"A as well as B는 A에 수 일치. the coach → is." },
    { id:"g-h2-14", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? It was the rain ____ delayed the game.", choices:["who","which","that","what"], answer:2, comment:"강조 구문 It was ~ that." },
    { id:"g-h2-15", grades:["h2"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? I would rather ____ home tonight.", choices:["stay","to stay","staying","stayed"], answer:0, comment:"would rather + 동사원형." },
    { id:"g-h2-16", grades:["h2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? Not until midnight ____ home.", choices:["he returned","did he return","he did return","returned he"], answer:1, comment:"Not until 도치: did + 주어 + 원형." },
    { id:"g-h2-17", grades:["h2"], difficulty:"high", prompt:"빈칸에 알맞은 것은? ____ the work, she went home.", choices:["Finish","Having finished","Have finished","To finished"], answer:1, comment:"완료 분사구문 Having finished ~." },
    { id:"g-h2-18", grades:["h2"], difficulty:"high", prompt:"어법상 틀린 것은?", choices:["One of my friends is late.","One of my friend is late.","Each of the students has a book.","The number of cars is rising."], answer:1, comment:"one of + 복수명사. friends." },

    { id:"g-h3-1", grades:["h3"], difficulty:"mid", prompt:"다음 중 어법상 틀린 것을 고르면?", choices:["The number of students is large.","A number of students are late.","The number of students are large.","There are a number of books."], answer:2, comment:"수능·학력평가 수일치: the number of + 복수 → 단수 동사 is." },
    { id:"g-h3-2", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? Despite ____ tired, she kept working.", choices:["she was","being","to be","she is"], answer:1, comment:"despite + 명사/동명사. 절이 오면 although." },
    { id:"g-h3-3", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? The more you practice, ____ you get.", choices:["the better","better","the best","more better"], answer:0, comment:"상관비교: the + 비교급, the + 비교급." },
    { id:"g-h3-4", grades:["h3"], difficulty:"high", prompt:"어법상 옳은 것은?", choices:["He suggested me to go.","He suggested that I go.","He suggested going I.","He suggested I to going."], answer:1, comment:"suggest that + (should) 동사원형. 수능 빈출 어법." },
    { id:"g-h3-5", grades:["h3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? Neither of the answers ____ correct.", choices:["are","is","be","were"], answer:1, comment:"neither of + 복수명사도 단수 취급이 정석(내신·수능)." },
    { id:"g-h3-6", grades:["h3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? ____ the rain, the game continued.", choices:["Although","Despite","Because","So"], answer:1, comment:"despite + 명사. although는 절을 이끕니다." },
    { id:"g-h3-7", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? Each of the students ____ a laptop.", choices:["have","has","are","were"], answer:1, comment:"each of + 복수 → 단수 동사 has." },
    { id:"g-h3-8", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? I prefer tea ____ coffee.", choices:["than","to","rather","from"], answer:1, comment:"prefer A to B." },
    { id:"g-h3-9", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? He is used to ____ early.", choices:["get","getting","got","gets"], answer:1, comment:"be used to + v-ing (익숙하다)." },
    { id:"g-h3-10", grades:["h3"], difficulty:"high", prompt:"어법상 틀린 것은?", choices:["One of the books is missing.","The police are looking into it.","News are spreading fast.","Mathematics is difficult."], answer:2, comment:"news는 단수 취급. News is spreading." },
    { id:"g-h3-11", grades:["h3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? No sooner ____ the bell than the students stood up.", choices:["rang","had the bell rung","the bell had rung","did the bell had rung"], answer:1, comment:"No sooner had + 주어 + p.p. than ~." },
    { id:"g-h3-12", grades:["h3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? I have fewer books ____ you think.", choices:["as","than","that","what"], answer:1, comment:"비교 than. fewer는 가산명사." },
    { id:"g-h3-13", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? ____ happens, stay calm.", choices:["Whatever","However","Whenever what","What ever"], answer:0, comment:"복합관계사 whatever + 동사." },
    { id:"g-h3-14", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? Both the teacher and the student ____ present.", choices:["is","are","be","was"], answer:1, comment:"both A and B → 복수 동사 are." },
    { id:"g-h3-15", grades:["h3"], difficulty:"mid", prompt:"빈칸에 알맞은 것은? He talks as if he ____ everything.", choices:["knows","knew","know","has know"], answer:1, comment:"as if + 가정법 과거." },
    { id:"g-h3-16", grades:["h3"], difficulty:"high", prompt:"어법상 틀린 것은?", choices:["Although he was tired, we went.","Despite being tired, we went.","Despite he was tired, we went.","Although tired, we went."], answer:2, comment:"despite 뒤에는 명사·동명사. 절이면 although." },
    { id:"g-h3-17", grades:["h3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? ____ I known, I would have helped.", choices:["If","Had","Have","Did"], answer:1, comment:"If I had known의 생략 도치: Had I known." },
    { id:"g-h3-18", grades:["h3"], difficulty:"high", prompt:"빈칸에 알맞은 것은? Little ____ that he was wrong.", choices:["he knew","did he know","he did know","knew he"], answer:1, comment:"부정어 Little 도치: did + 주어 + 원형." },
  ],
  reading: [
    { id:"r-m1-m", grades:["m1"], difficulty:"mid",
      passage:"Mina walks to school. She likes the quiet morning. Today she saw a small cat under a tree. The cat looked hungry, so Mina gave it some milk. After that, she smiled all the way to class.",
      items:[
        { id:"r-m1-m1", prompt:"Mina는 학교에 어떻게 가나요?", choices:["걸어간다","버스로 간다","자전거를 탄다","뛰어간다"], answer:0, comment:"세부 정보: walks to school. 중1 교과서형 짧은 이야기." },
        { id:"r-m1-m2", prompt:"고양이는 어디에 있었나요?", choices:["교실","나무 아래","버스 안","집 옥상"], answer:1, comment:"under a tree." },
        { id:"r-m1-m3", prompt:"Mina가 고양이를 본 뒤 한 일은?", choices:["그냥 지나쳤다","우유를 주었다","사진을 찍었다","선생님께 알렸다"], answer:1, comment:"gave it some milk." }
      ]},
    { id:"r-m1-h", grades:["m1"], difficulty:"high",
      passage:"Our school festival is next Friday. Students can join a band, a science booth, or a food stand. Jun wants to play the guitar. Sora will sell homemade cookies. The teacher says, “Do your best, and have fun.”",
      items:[
        { id:"r-m1-h1", prompt:"축제는 언제인가요?", choices:["다음 금요일","오늘","다음 달","어제"], answer:0, comment:"next Friday. 중1 학교생활 소재." },
        { id:"r-m1-h2", prompt:"Jun이 하고 싶은 것은?", choices:["쿠키 팔기","기타 치기","과학 부스","안내 방송"], answer:1, comment:"play the guitar." },
        { id:"r-m1-h3", prompt:"선생님의 말에 가까운 것은?", choices:["조용히 해라","최선을 다하고 즐겨라","일찍 가라","숙제를 내라"], answer:1, comment:"Do your best, and have fun." }
      ]},
    { id:"r-m1-m2", grades:["m1"], difficulty:"mid",
      passage:"Minho’s favorite subject is science. After school he goes to the gym with his classmates. They practice basketball. He is not famous, but he is happy when the team shares a win.",
      items:[
        { id:"r-m1-m2a", prompt:"민호의 가장 좋아하는 과목은?", choices:["수학","과학","영어","체육"], answer:1, comment:"favorite subject is science." },
        { id:"r-m1-m2b", prompt:"방과 후 민호는 어디에 가나요?", choices:["도서관","체육관","식당","보건실"], answer:1, comment:"goes to the gym." },
        { id:"r-m1-m2c", prompt:"민호가 기쁠 때는?", choices:["혼자 이길 때","팀이 승리를 나눌 때","숙제를 안 할 때","유명해질 때"], answer:1, comment:"when the team shares a win." }
      ]},
    { id:"r-m1-h2", grades:["m1"], difficulty:"high",
      passage:"Hana is nervous before the interview for the volunteer club. She practices her self-introduction many times. At last she smiles and says, “I want to help people in my hometown.”",
      items:[
        { id:"r-m1-h2a", prompt:"하나는 왜 긴장했나요?", choices:["시험 때문에","봉사 동아리 면접 때문에","여행 때문에","체육 대회 때문에"], answer:1, comment:"nervous before the interview for the volunteer club." },
        { id:"r-m1-h2b", prompt:"하나가 연습한 것은?", choices:["노래","자기소개","요리","축구"], answer:1, comment:"practices her self-introduction." },
        { id:"r-m1-h2c", prompt:"하나가 말하고 싶은 것은?", choices:["유명해지고 싶다","고향 사람들을 돕고 싶다","이사를 가고 싶다","면접을 피하고 싶다"], answer:1, comment:"help people in my hometown." }
      ]},
    { id:"r-m1-c", grades:["m1"], difficulty:"mid",
      passage:"Tom has lunch with his teacher on Fridays. After lunch they go to the library. Tom finishes his homework there because it is quiet. Then he invites a classmate to walk home together.",
      items:[
        { id:"r-m1-c1", prompt:"톰은 금요일에 누구와 점심을 먹나요?", choices:["부모님","선생님","교장","손님"], answer:1, comment:"lunch with his teacher." },
        { id:"r-m1-c2", prompt:"점심 뒤에 어디에 가나요?", choices:["체육관","도서관","식당","보건실"], answer:1, comment:"go to the library." },
        { id:"r-m1-c3", prompt:"톰이 숙제를 도서관에서 하는 이유는?", choices:["시끄러워서","조용해서","축제가 있어서","면접이 있어서"], answer:1, comment:"because it is quiet." }
      ]},
    { id:"r-m1-d", grades:["m1"], difficulty:"high",
      passage:"Mia wants to share her lunch, but she does not have enough. Her friend gives her an apple. Mia says the apple is special today. They eat together and the classroom feels quiet and warm.",
      items:[
        { id:"r-m1-d1", prompt:"미아가 처음 걱정한 것은?", choices:["점심이 부족하다","숙제가 많다","비가 온다","축제가 없다"], answer:0, comment:"does not have enough." },
        { id:"r-m1-d2", prompt:"친구가 준 것은?", choices:["책","사과","교복","지도"], answer:1, comment:"gives her an apple." },
        { id:"r-m1-d3", prompt:"마지막에 교실 분위기는?", choices:["시끄럽다","조용하고 따뜻하다","어둡다","긴장된다"], answer:1, comment:"quiet and warm." }
      ]},
    { id:"r-m2-m", grades:["m2"], difficulty:"mid",
      passage:"Last summer, Hana traveled to Jeju with her family. She tried snorkeling for the first time. At first she was afraid, but her brother helped her. After the trip, she wrote in her diary, “I want to travel again next year.”",
      items:[
        { id:"r-m2-m1", prompt:"하니는 어디에서 여행했나요?", choices:["서울","제주","부산","강릉"], answer:1, comment:"traveled to Jeju. 중2 경험·여행 단원." },
        { id:"r-m2-m2", prompt:"처음 스노클링을 했을 때 하니의 기분은?", choices:["자신 있었다","두려웠다","지루했다","화가 났다"], answer:1, comment:"At first she was afraid." },
        { id:"r-m2-m3", prompt:"여행 후 하니의 생각은?", choices:["다시는 안 간다","내년에도 여행하고 싶다","수영을 그만둔다","일기를 안 쓴다"], answer:1, comment:"I want to travel again next year." }
      ]},
    { id:"r-m2-h", grades:["m2"], difficulty:"high",
      passage:"Many inventions start with a small problem. For example, a student wanted a bag that was easy to find in the dark. He put a tiny light on it. The idea was simple, but it helped many people. Good inventors look at everyday life carefully.",
      items:[
        { id:"r-m2-h1", prompt:"글의 요지로 가장 가까운 것은?", choices:["발명은 거대한 실험실에서만 나온다","작은 문제에서 발명이 시작되기도 한다","가방은 무거워야 한다","어둠은 위험하다"], answer:1, comment:"Many inventions start with a small problem. 중2 발명·창의 주제." },
        { id:"r-m2-h2", prompt:"그 학생은 가방에 무엇을 달았나요?", choices:["종","작은 불빛","카메라","시계"], answer:1, comment:"a tiny light." },
        { id:"r-m2-h3", prompt:"좋은 발명가의 태도로 나온 것은?", choices:["일상을 주의 깊게 본다","남의 아이디어를 베낀다","큰 돈만 생각한다","실험을 피한다"], answer:0, comment:"look at everyday life carefully." }
      ]},
    { id:"r-m2-m2", grades:["m2"], difficulty:"mid",
      passage:"Joon’s goal is to succeed as a cook. He makes an effort every morning. Last year he failed a contest, but the experience helped him. He says culture and food are similar: both need respect.",
      items:[
        { id:"r-m2-m2a", prompt:"준의 목표는?", choices:["가수","요리사로 성공","선생님","선수"], answer:1, comment:"succeed as a cook." },
        { id:"r-m2-m2b", prompt:"작년에 준이 겪은 일은?", choices:["대회에서 떨어졌다","여행을 갔다","발명을 했다","학교를 옮겼다"], answer:0, comment:"he failed a contest." },
        { id:"r-m2-m2c", prompt:"준이 문화와 음식을 비교한 이유는?", choices:["둘 다 돈이 든다","둘 다 존중이 필요하다","둘 다 빠르다","둘 다 쉽다"], answer:1, comment:"both need respect." }
      ]},
    { id:"r-m2-h2", grades:["m2"], difficulty:"high",
      passage:"An ancient custom in one village is still alive in modern times. Young people and the older generation sit together once a year. It is a chance to share stories. The community says this meeting is not a performance; it is a real conversation.",
      items:[
        { id:"r-m2-h2a", prompt:"글의 소재로 맞는 것은?", choices:["스포츠 경기","마을의 오래된 관습","숙제","발명품"], answer:1, comment:"An ancient custom ... is still alive." },
        { id:"r-m2-h2b", prompt:"누가 함께 앉나요?", choices:["선수만","젊은 세대와 기성세대","선생님만","관광객만"], answer:1, comment:"Young people and the older generation." },
        { id:"r-m2-h2c", prompt:"모임에 대한 마을의 생각은?", choices:["공연이다","진짜 대화다","숙제다","대회다"], answer:1, comment:"not a performance; it is a real conversation." }
      ]},
    { id:"r-m2-c", grades:["m2"], difficulty:"mid",
      passage:"Sumin wrote a diary on the train. The river outside the window looked wide. At the hotel she made a decision: she would save money for the next trip. The tickets for the show were sold out, so she walked by the water instead.",
      items:[
        { id:"r-m2-c1", prompt:"수민은 어디에서 일기를 썼나요?", choices:["호텔","기차","박물관","무대"], answer:1, comment:"wrote a diary on the train." },
        { id:"r-m2-c2", prompt:"호텔에서 수민이 한 결정은?", choices:["공연을 취소한다","다음 여행을 위해 돈을 아낀다","일기를 그만둔다","기차를 타지 않는다"], answer:1, comment:"save money for the next trip." },
        { id:"r-m2-c3", prompt:"공연 표가 매진되자 수민은?", choices:["화를 냈다","물가를 걸었다","바로 집에 갔다","다른 표를 샀다"], answer:1, comment:"walked by the water instead." }
      ]},
    { id:"r-m2-d", grades:["m2"], difficulty:"high",
      passage:"A historical tool in the museum looks simple, but it is original. The guide is strict about touching it. Visitors who overcome the long line still look proud at the end. The museum says the past is available to anyone who walks in.",
      items:[
        { id:"r-m2-d1", prompt:"글의 요지로 가까운 것은?", choices:["도구는 만져야 한다","오래된 것도 누구나 와서 볼 수 있다","줄은 무의미하다","가이드는 필요 없다"], answer:1, comment:"the past is available to anyone who walks in." },
        { id:"r-m2-d2", prompt:"가이드가 엄격한 이유는?", choices:["만지는 것 때문에","표가 매진돼서","일기를 써서","강을 건너서"], answer:0, comment:"strict about touching it." },
        { id:"r-m2-d3", prompt:"줄을 이긴 방문객의 기분은?", choices:["부끄럽다","자랑스럽다","지루하다","화난다"], answer:1, comment:"look proud at the end." }
      ]},
    { id:"r-m3-m", grades:["m3"], difficulty:"mid",
      passage:"Our class started a recycling project. We put bottles, paper, and cans in different boxes. At first, some students forgot. Then we made simple signs. After one month, the trash in the classroom became much less. Small habits can change a school.",
      items:[
        { id:"r-m3-m1", prompt:"반이 시작한 활동은?", choices:["운동회","재활용 프로젝트","축제","시험"], answer:1, comment:"recycling project. 중3 환경 단원." },
        { id:"r-m3-m2", prompt:"학생들이 처음 잊자 반이 한 일은?", choices:["프로젝트를 그만뒀다","간단한 표지판을 만들었다","벌을 주었다","박스를 치웠다"], answer:1, comment:"we made simple signs." },
        { id:"r-m3-m3", prompt:"한 달 뒤 결과는?", choices:["쓰레기가 늘었다","교실 쓰레기가 줄었다","표지판이 사라졌다","상자를 더 샀다"], answer:1, comment:"the trash ... became much less." }
      ]},
    { id:"r-m3-h", grades:["m3"], difficulty:"high",
      passage:"People often think a group is all the same. That idea is a stereotype. For example, some say, “Teenagers only like games.” However, many teenagers read, volunteer, or play music. When we meet a person, we should look at the person, not the label.",
      items:[
        { id:"r-m3-h1", prompt:"글의 요지로 가장 가까운 것은?", choices:["청소년은 게임만 한다","고정관념 대신 개인을 봐야 한다","음악이 제일 중요하다","모임을 피해야 한다"], answer:1, comment:"look at the person, not the label. 중3 사회·다양성." },
        { id:"r-m3-h2", prompt:"However의 역할은?", choices:["예시","대조","원인","시간"], answer:1, comment:"앞 고정관념을 뒤집습니다." },
        { id:"r-m3-h3", prompt:"stereotype의 예로 나온 것은?", choices:["청소년은 게임만 좋아한다","개인을 봐야 한다","자원봉사를 하자","음악을 배우라"], answer:0, comment:"Teenagers only like games." }
      ]},
    { id:"r-m3-m2", grades:["m3"], difficulty:"mid",
      passage:"Climate change is a global issue. One cause is pollution from cars and factories. A simple solution is to recycle and to save energy. Technology can help, but communication between countries is also necessary.",
      items:[
        { id:"r-m3-m2a", prompt:"글에서 climate change를 무엇이라고 하나요?", choices:["취미","세계적 문제","축제","과목"], answer:1, comment:"a global issue." },
        { id:"r-m3-m2b", prompt:"원인으로 나온 것은?", choices:["재활용","자동차·공장 오염","의사소통","숙제"], answer:1, comment:"pollution from cars and factories." },
        { id:"r-m3-m2c", prompt:"기술 외에 필요하다고 한 것은?", choices:["더 많은 공장","나라 사이 소통","더 많은 차","더 적은 학교"], answer:1, comment:"communication between countries." }
      ]},
    { id:"r-m3-h2", grades:["m3"], difficulty:"high",
      passage:"Some animals lose their habitat and become extinct. Conservation is not only about famous species. It is also about equality: people who live near forests should have a voice. Prejudice says “nature is far from us.” In fact, our identity is linked to the land.",
      items:[
        { id:"r-m3-h2a", prompt:"동물이 멸종하는 이유로 나온 것은?", choices:["서식지를 잃어서","너무 유명해서","평등이 많아서","소통이 많아서"], answer:0, comment:"lose their habitat and become extinct." },
        { id:"r-m3-h2b", prompt:"conservation에 대한 글의 입장은?", choices:["유명한 종만 지키면 된다","숲 근처 사람들의 목소리도 필요하다","자연은 멀리 있다","정체성과 무관하다"], answer:1, comment:"people who live near forests should have a voice." },
        { id:"r-m3-h2c", prompt:"글이 비판하는 편견은?", choices:["자연은 우리와 멀리 있다","기술은 필요하다","소통이 중요하다","서식지가 중요하다"], answer:0, comment:"Prejudice says nature is far from us." }
      ]},
    { id:"r-m3-c", grades:["m3"], difficulty:"mid",
      passage:"Our school tried to reduce plastic bottles. Students signed an agreement to bring cups. At first the result was unexpected: some cups were left in class. Then the class took action and the mess became smaller. A serious problem started to look manageable.",
      items:[
        { id:"r-m3-c1", prompt:"학교가 줄이려 한 것은?", choices:["숙제","플라스틱 병","수업 시간","운동회"], answer:1, comment:"reduce plastic bottles." },
        { id:"r-m3-c2", prompt:"처음에 예상 밖이었던 일은?", choices:["컵이 교실에 남았다","병이 늘었다","협정을 안 했다","표지판이 사라졌다"], answer:0, comment:"some cups were left in class." },
        { id:"r-m3-c3", prompt:"반이 조치를 취한 뒤는?", choices:["더 지저분해졌다","문제가 다루기 쉬워 보였다","프로젝트를 그만뒀다","병을 더 샀다"], answer:1, comment:"the mess became smaller ... manageable." }
      ]},
    { id:"r-m3-d", grades:["m3"], difficulty:"high",
      passage:"A biased claim on social media said the new law would harm shops. In fact the law was written to protect small stores. Public support grew after people read the full text. The writer asked readers to cooperate, not to consume only short headlines.",
      items:[
        { id:"r-m3-d1", prompt:"글의 요지로 가까운 것은?", choices:["짧은 제목만 보면 된다","편향된 주장 대신 내용을 확인해야 한다","법은 항상 해롭다","가게는 필요 없다"], answer:1, comment:"read the full text ... not consume only short headlines." },
        { id:"r-m3-d2", prompt:"법이 하려던 일은?", choices:["가게를 해치는 것","작은 가게를 보호하는 것","매체를 없애는 것","지지를 숨기는 것"], answer:1, comment:"protect small stores." },
        { id:"r-m3-d3", prompt:"글쓴이가 독자에게 바란 것은?", choices:["제목만 소비하기","협력하기","법을 무시하기","편향을 퍼뜨리기"], answer:1, comment:"cooperate, not to consume only short headlines." }
      ]},
    { id:"r-h1-m", grades:["h1"], difficulty:"mid",
      passage:"Many first-year high school students try to study for long hours. However, research on learning shows that short, regular review is often more effective. If you study the same material the next day, you remember it better. The goal is not to sit longer, but to return to the material in time.",
      items:[
        { id:"r-h1-m1", prompt:"글의 요지는?", choices:["오래 앉아 있을수록 좋다","짧고 규칙적인 복습이 더 효과적일 수 있다","복습은 필요 없다","고등학교는 잠을 줄여야 한다"], answer:1, comment:"고1 학력평가형 요지. short, regular review is often more effective." },
        { id:"r-h1-m2", prompt:"다음 날 같은 내용을 보면?", choices:["기억이 나빠진다","기억이 더 잘 난다","의미가 없다","시험이 쉬워진다"], answer:1, comment:"you remember it better." },
        { id:"r-h1-m3", prompt:"글이 말하는 목표는?", choices:["더 오래 앉기","제때 다시 보기","친구와 경쟁","밤에만 공부"], answer:1, comment:"return to the material in time." }
      ]},
    { id:"r-h1-h", grades:["h1"], difficulty:"high",
      passage:"Cities plant trees to reduce heat. Trees provide shade, and they also release water vapor that cools the air. The effect is strongest along streets with continuous canopies. A single isolated tree, by contrast, changes the temperature only slightly. Urban planning should think in lines of trees, not in one tree at a time.",
      items:[
        { id:"r-h1-h1", prompt:"도시가 나무를 심는 이유로 나온 것은?", choices:["소음을 늘리려고","열을 줄이려고","관광 사진용","토양을 말리려고"], answer:1, comment:"to reduce heat. 고1 설명문·세부정보." },
        { id:"r-h1-h2", prompt:"냉각 효과가 가장 큰 경우는?", choices:["나무 한 그루","끊긴 가로수","이어진 수관","실내 화분"], answer:2, comment:"continuous canopies." },
        { id:"r-h1-h3", prompt:"글의 주장에 가까운 것은?", choices:["나무는 한 그루면 충분하다","가로수를 줄 단위로 생각해야 한다","그늘은 필요 없다","수증기는 해가 된다"], answer:1, comment:"think in lines of trees." }
      ]},
    { id:"r-h1-m2", grades:["h1"], difficulty:"mid",
      passage:"Teachers often require students to describe a process, not just a result. When you provide the method, others can consider your purpose. An essential advantage of clear steps is that mistakes decrease. If the method is hidden, the same error may increase next time.",
      items:[
        { id:"r-h1-m2a", prompt:"선생님이 요구하는 것은?", choices:["결과만","과정을 설명할 것","더 긴 숙제","더 적은 단어"], answer:1, comment:"describe a process, not just a result. 고1 설명 어휘." },
        { id:"r-h1-m2b", prompt:"방법을 밝히면?", choices:["실수가 늘 수 있다","다른 사람이 목적을 고려할 수 있다","목적이 사라진다","과정이 숨겨진다"], answer:1, comment:"others can consider your purpose." },
        { id:"r-h1-m2c", prompt:"방법이 숨겨지면?", choices:["실수가 다시 늘 수 있다","실수가 반드시 없다","목적이 분명해진다","과정이 쉬워진다"], answer:0, comment:"the same error may increase." }
      ]},
    { id:"r-h1-h2", grades:["h1"], difficulty:"high",
      passage:"Some changes look sudden, but they occur after a constant effort. People who appreciate small improvements contribute more than those who wait for a perfect plan. Benefit does not always arrive at once. It is often the result of work that felt ordinary.",
      items:[
        { id:"r-h1-h2a", prompt:"글의 요지는?", choices:["변화는 항상 한순간에 온다","작은 향상을 알아보는 노력이 변화를 만든다","완벽한 계획만 필요하다","노력은 무의미하다"], answer:1, comment:"constant effort ... small improvements." },
        { id:"r-h1-h2b", prompt:"누가 더 기여한다고 하나요?", choices:["완벽한 계획만 기다리는 사람","작은 향상을 알아보는 사람","변화를 거부하는 사람","결과를 숨기는 사람"], answer:1, comment:"appreciate small improvements contribute more." },
        { id:"r-h1-h2c", prompt:"benefit에 대한 글의 설명은?", choices:["항상 한 번에 온다","흔히 평범한 일의 결과다","절대 오지 않는다","계획과 무관하다"], answer:1, comment:"the result of work that felt ordinary." }
      ]},
    { id:"r-h1-c", grades:["h1"], difficulty:"mid",
      passage:"A typical lab report explains the method before the result. If the box contains mixed samples, you cannot solve the question of cause. Related steps should be written in order. Teachers offer this format so other students can follow the same path.",
      items:[
        { id:"r-h1-c1", prompt:"글의 요지는?", choices:["결과는 방법보다 먼저다","방법을 순서대로 밝혀야 원인을 따질 수 있다","샘플은 섞을수록 좋다","형식은 필요 없다"], answer:1, comment:"explains the method before the result ... follow the same path." },
        { id:"r-h1-c2", prompt:"샘플이 섞이면?", choices:["원인을 묻기 어렵다","방법이 자동으로 드러난다","결과가 항상 맞다","순서가 필요 없다"], answer:0, comment:"cannot solve the question of cause." },
        { id:"r-h1-c3", prompt:"선생님이 이 형식을 주는 이유는?", choices:["다른 학생이 같은 길을 따라가게","숙제를 늘리려고","데이터를 숨기려고","변화를 막으려고"], answer:0, comment:"so other students can follow the same path." }
      ]},
    { id:"r-h1-d", grades:["h1"], difficulty:"high",
      passage:"Gradual change is easy to miss because each day looks familiar. People who reject small data often wait for a primary shock. Temporary noise is not the same as a consistent trend. Stay objective: follow the numbers, not the mood of one afternoon.",
      items:[
        { id:"r-h1-d1", prompt:"글의 주장에 가까운 것은?", choices:["하루의 기분으로 판단하라","작은 자료를 거부하고 큰 충격만 기다려라","일관된 숫자를 객관적으로 보라","변화는 항상 한순간에 온다"], answer:2, comment:"follow the numbers, not the mood." },
        { id:"r-h1-d2", prompt:"점진적 변화를 놓치기 쉬운 이유는?", choices:["매일 익숙해 보여서","데이터가 없어서","규칙이 없어서","학교가 싫어서"], answer:0, comment:"each day looks familiar." },
        { id:"r-h1-d3", prompt:"temporary noise와 consistent trend의 관계는?", choices:["같다","다르다","둘 다 기분이다","둘 다 충격이다"], answer:1, comment:"not the same as a consistent trend." }
      ]},
    { id:"r-h2-m", grades:["h2"], difficulty:"mid",
      passage:"When we read only headlines, we often miss the writer’s real point. A headline is designed to catch attention, not to present the full argument. Therefore, readers should check the evidence in the body of the text. If the evidence is weak, confidence in the headline should also be weak.",
      items:[
        { id:"r-h2-m1", prompt:"글의 요지는?", choices:["제목만 읽으면 된다","본문의 증거를 확인해야 한다","자신감이 곧 진실이다","기사는 항상 옳다"], answer:1, comment:"고2 영어Ⅰ: 함축·전개. check the evidence." },
        { id:"r-h2-m2", prompt:"헤드라인의 목적으로 나온 것은?", choices:["전체 논증을 보여 주는 것","관심을 끄는 것","증거를 숨기는 것","독자를 시험하는 것"], answer:1, comment:"catch attention, not ... the full argument." },
        { id:"r-h2-m3", prompt:"증거가 약하면?", choices:["제목을 더 믿어야 한다","제목에 대한 확신도 약해야 한다","본문을 건너뛴다","댓글을 본다"], answer:1, comment:"confidence in the headline should also be weak." }
      ]},
    { id:"r-h2-h", grades:["h2"], difficulty:"high",
      passage:"Some online comments look confident but rest on weak evidence. A useful habit is to ask what would disprove the claim. If nothing could count as counter-evidence, the claim is not scientific. Confidence and accuracy are not the same thing.",
      items:[
        { id:"r-h2-h1", prompt:"글이 권하는 습관은?", choices:["주장만 반복하기","반증이 뭔지 묻기","자신감을 키우기","증거를 숨기기"], answer:1, comment:"what would disprove the claim. 고2 추론형." },
        { id:"r-h2-h2", prompt:"반증이 불가능한 주장에 대한 글의 입장은?", choices:["과학적이다","과학적이지 않다","항상 참이다","감정적으로 옳다"], answer:1, comment:"not scientific." },
        { id:"r-h2-h3", prompt:"마지막 문장의 의미는?", choices:["자신감이 곧 정확함이다","자신감과 정확함은 다르다","댓글은 모두 거짓이다","증거는 필요 없다"], answer:1, comment:"Confidence and accuracy are not the same thing." }
      ]},
    { id:"r-h2-m2", grades:["h2"], difficulty:"mid",
      passage:"To analyze a text, look at the claim and the evidence together. A theory is not proven by repetition. Research should indicate how the data were collected. If the process is unclear, readers cannot interpret the result fairly.",
      items:[
        { id:"r-h2-m2a", prompt:"텍스트를 분석할 때 함께 보라는 것은?", choices:["제목과 날짜","주장과 증거","저자와 출판사","분량과 속도"], answer:1, comment:"the claim and the evidence together. 고2 독해 구조." },
        { id:"r-h2-m2b", prompt:"이론이 증명되지 않는 방법은?", choices:["데이터","반복만으로","연구","해석"], answer:1, comment:"not proven by repetition." },
        { id:"r-h2-m2c", prompt:"과정이 불분명하면?", choices:["결과를 공정히 해석하기 어렵다","주장이 자동으로 참이다","증거가 필요 없다","분석이 끝난다"], answer:0, comment:"cannot interpret the result fairly." }
      ]},
    { id:"r-h2-h2", grades:["h2"], difficulty:"high",
      passage:"A substantial change in one factor can look small from another perspective. The implication is that we should not assume a single measurement tells the whole story. Ambiguous graphs often hide the context. A plausible reading still needs a significant check against the original data.",
      items:[
        { id:"r-h2-h2a", prompt:"글의 요지는?", choices:["측정 하나면 충분하다","한 지표만으로 전체를 단정하지 마라","그래프는 항상 명확하다","맥락은 필요 없다"], answer:1, comment:"should not assume a single measurement tells the whole story." },
        { id:"r-h2-h2b", prompt:"모호한 그래프가 숨기는 것은?", choices:["색","맥락","제목","저자"], answer:1, comment:"hide the context." },
        { id:"r-h2-h2c", prompt:"그럴듯한 해석에도 필요한 것은?", choices:["원데이터와의 점검","더 예쁜 그림","더 짧은 글","더 큰 글씨"], answer:0, comment:"a significant check against the original data." }
      ]},
    { id:"r-h2-c", grades:["h2"], difficulty:"mid",
      passage:"A concept is not proven just because two graphs look similar. Writers may try to persuade by placing them side by side. Readers should compare the scales and ask whether the point is relevant. Support must come from the same kind of evidence, not from a convenient picture.",
      items:[
        { id:"r-h2-c1", prompt:"글의 요지는?", choices:["그래프가 비슷하면 충분하다","비슷한 그림만으로 설득되면 안 된다","척도는 무시하라","개념은 그림이다"], answer:1, comment:"not proven just because two graphs look similar." },
        { id:"r-h2-c2", prompt:"독자가 비교해야 할 것은?", choices:["저자 나이","척도(scale)","글씨 색깔","페이지 수"], answer:1, comment:"compare the scales." },
        { id:"r-h2-c3", prompt:"support가 나와야 할 곳은?", choices:["편리한 그림","같은 종류의 증거","제목만","댓글"], answer:1, comment:"the same kind of evidence." }
      ]},
    { id:"r-h2-d", grades:["h2"], difficulty:"high",
      passage:"A tentative conclusion is not a failure. It is a way to acknowledge what the study could not control. A misleading title can make a flawed design look solid. When a writer cites only the strongest chart, the tone may turn ironic: confidence without a check.",
      items:[
        { id:"r-h2-d1", prompt:"글의 요지로 가까운 것은?", choices:["잠정 결론은 실패다","한계를 인정하는 결론이 더 정직하다","제목만 보면 된다","강한 차트면 충분하다"], answer:1, comment:"acknowledge what the study could not control." },
        { id:"r-h2-d2", prompt:"오해하게 만드는 제목이 하는 일은?", choices:["결함 있는 설계를 튼튼해 보이게 한다","한계를 드러낸다","척도를 고친다","인용을 없앤다"], answer:0, comment:"make a flawed design look solid." },
        { id:"r-h2-d3", prompt:"마지막 문장의 함축은?", choices:["자신감이 곧 점검이다","점검 없는 자신감은 공허하다","차트는 필요 없다","결론은 숨겨라"], answer:1, comment:"confidence without a check." }
      ]},
    { id:"r-h3-m", grades:["h3"], difficulty:"mid",
      passage:"Companies often reward speed, but speed without a check can create costly errors. A short review step looks slow in the moment. In the long run, however, it saves time because workers do not repeat the same mistake. Efficiency is not only how fast we start; it is how rarely we must start over.",
      items:[
        { id:"r-h3-m1", prompt:"글의 요지로 가장 가까운 것은?", choices:["무조건 빨리 시작하는 것이 효율이다","짧은 점검이 장기적으로 시간을 줄인다","실수는 보상해야 한다","검토는 항상 낭비다"], answer:1, comment:"고3·학력평가 요지형. a short review ... saves time." },
        { id:"r-h3-m2", prompt:"however의 앞뒤 관계는?", choices:["예시","대조","정의","열거"], answer:1, comment:"당장은 느려 보이지만 장기적으로는 이득." },
        { id:"r-h3-m3", prompt:"글에서 말하는 효율은?", choices:["시작 속도만","다시 시작하지 않는 빈도","야근 시간","직원 수"], answer:1, comment:"how rarely we must start over." }
      ]},
    { id:"r-h3-h", grades:["h3"], difficulty:"high",
      passage:"A map is not the land itself; it is a useful reduction. When students treat a summary as complete knowledge, they stop asking what was left out. The danger is not using summaries, but forgetting that they hide detail on purpose. Good readers return to the source when a decision depends on the missing parts.",
      items:[
        { id:"r-h3-h1", prompt:"글의 주장으로 가장 가까운 것은?", choices:["요약이면 충분하다","요약의 한계를 알고 원문을 다시 봐야 할 때가 있다","지도는 쓸모없다","세부 사항은 항상 빼야 한다"], answer:1, comment:"수능형 주장. return to the source when a decision depends on the missing parts." },
        { id:"r-h3-h2", prompt:"요약의 위험으로 나온 것은?", choices:["너무 길다","빠진 것이 있다는 사실을 잊는 것","지도가 정확하다","원문이 없다"], answer:1, comment:"forgetting that they hide detail on purpose." },
        { id:"r-h3-h3", prompt:"지도를 비유한 이유는?", choices:["여행 홍보","축소된 표현임을 보이려고","시험을 어렵게 하려고","지명을 외우려고"], answer:1, comment:"A map is not the land itself; it is a useful reduction." }
      ]},
    { id:"r-h3-m2", grades:["h3"], difficulty:"mid",
      passage:"Leaders often emphasize a strategy, but they fail to evaluate whether people can maintain it. An attitude that only rewards new ideas will not recognize slow, careful work. Influence grows when a team can demonstrate the same quality twice, not once.",
      items:[
        { id:"r-h3-m2a", prompt:"글이 지적하는 문제는?", choices:["전략이 너무 많다","전략을 유지할 수 있는지 평가하지 않는 것","아이디어가 없다","팀이 너무 크다"], answer:1, comment:"fail to evaluate whether people can maintain it." },
        { id:"r-h3-m2b", prompt:"새 아이디어만 보상하면?", choices:["느리고 꼼꼼한 일을 알아보지 못한다","품질이 두 배가 된다","영향력이 바로 커진다","평가가 쉬워진다"], answer:0, comment:"will not recognize slow, careful work." },
        { id:"r-h3-m2c", prompt:"영향력이 커지는 조건은?", choices:["한 번만 잘하면 된다","같은 품질을 두 번 보여 줄 때","아이디어만 많을 때","전략 문구가 길 때"], answer:1, comment:"demonstrate the same quality twice, not once." }
      ]},
    { id:"r-h3-h2", grades:["h3"], difficulty:"high",
      passage:"A prevalent claim can still be arbitrary. Subsequent events may undermine it, especially when the most vulnerable groups pay the cost. To compensate after the fact is weaker than to scrutinize the claim before it becomes controversy. Legitimate policy starts with that earlier look.",
      items:[
        { id:"r-h3-h2a", prompt:"글의 주장으로 가장 가까운 것은?", choices:["널리 퍼진 주장은 항상 옳다","퍼진 뒤가 아니라 그전에 주장을 살펴야 한다","보상만 하면 충분하다","취약 집단은 관련 없다"], answer:1, comment:"scrutinize the claim before it becomes controversy." },
        { id:"r-h3-h2b", prompt:"나중에 보상이 약한 이유는?", choices:["돈이 없어서","이미 논쟁이 된 뒤이기 때문","주장이 없어서","사건이 없어서"], answer:1, comment:"weaker than to scrutinize ... before." },
        { id:"r-h3-h2c", prompt:"legitimate policy의 출발은?", choices:["여론","그 앞선 검토","보상금","유행"], answer:1, comment:"starts with that earlier look." }
      ]},
    { id:"r-h3-c", grades:["h3"], difficulty:"mid",
      passage:"A single criterion can widen a gap if it rewards only speed. Confirming last year’s ranking does not prove the test is fair. An extreme score may look impressive, yet the trend behind it can be irreversible only in appearance. Dismissing slow students by one number is a cheap kind of evaluation.",
      items:[
        { id:"r-h3-c1", prompt:"글의 요지는?", choices:["속도만 보면 공정하다","한 기준·한 숫자로 학생을 자르면 안 된다","극단 점수는 항상 옳다","순위는 바꿀 수 없다"], answer:1, comment:"Dismissing slow students by one number." },
        { id:"r-h3-c2", prompt:"작년 순위를 확인하는 것만으로?", choices:["시험이 공정하다고 증명되지 않는다","속도가 증명된다","기준이 많아진다","평가가 끝난다"], answer:0, comment:"does not prove the test is fair." },
        { id:"r-h3-c3", prompt:"글이 싸구려 평가라고 한 것은?", choices:["여러 자료로 보는 것","한 숫자로 느린 학생을 일축하는 것","기준을 설명하는 것","추세를 의심하는 것"], answer:1, comment:"Dismissing slow students by one number." }
      ]},
    { id:"r-h3-d", grades:["h3"], difficulty:"high",
      passage:"Insufficient data can still look complete when the missing parts are minimized on the slide. A crucial distinction—what was measured versus what was claimed—gets lost. Unintended readers then treat an unfounded number as fact. Advocates of a policy should say when the cost is prohibitive, not when the chart is pretty. An obsolete model survives only if nobody asks that question.",
      items:[
        { id:"r-h3-d1", prompt:"글의 주장으로 가장 가까운 것은?", choices:["예쁜 차트면 충분하다","측정과 주장을 구분하고, 빠진 자료를 말해야 한다","오래된 모형은 항상 옳다","비용은 숨겨라"], answer:1, comment:"what was measured versus what was claimed." },
        { id:"r-h3-d2", prompt:"근거 없는 숫자가 사실이 되는 이유는?", choices:["독자가 빠진 부분을 못 봐서","자료가 충분해서","비용이 싸서","모형이 최신이어서"], answer:0, comment:"missing parts are minimized ... unfounded number as fact." },
        { id:"r-h3-d3", prompt:"obsolete model이 남는 조건은?", choices:["그 질문을 아무도 안 할 때","차트가 예쁠 때","비용이 클 때","주장이 많을 때"], answer:0, comment:"survives only if nobody asks that question." }
      ]}
  ]
};
