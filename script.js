// ── 사주 데이터 ──────────────────────────────────────────────
const HEAVENLY_STEMS = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
const EARTHLY_BRANCHES = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];
const ZODIAC_KR = ['쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양', '원숭이', '닭', '개', '돼지'];
const ZODIAC_EMOJI = ['🐭', '🐮', '🐯', '🐰', '🐲', '🐍', '🐴', '🐑', '🐵', '🐔', '🐶', '🐷'];
const FIVE_ELEMENTS = ['목', '목', '화', '화', '토', '토', '금', '금', '수', '수'];
const LUCKY_COLORS = ['빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색', '분홍색', '금색', '흰색'];
const LUCKY_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const LUCKY_DIRECTIONS = ['동쪽', '서쪽', '남쪽', '북쪽', '동남쪽', '동북쪽', '서남쪽', '서북쪽'];

// ── 운세 텍스트 ───────────────────────────────────────────────
const FORTUNE_TEXTS = {
  total: [
    '오늘은 에너지가 다소 낮은 날입니다. 무리한 계획보다는 내면을 정비하는 시간을 가지세요.',
    '평온한 하루가 될 것입니다. 작은 것에 감사하며 꾸준히 나아가면 좋은 결과가 따릅니다.',
    '보통의 기운이 흐르는 날입니다. 긍정적인 마음가짐이 하루를 좌우합니다.',
    '좋은 기운이 가득한 날입니다. 자신감을 가지고 도전하면 뜻밖의 성과를 얻을 수 있습니다.',
    '최고의 운세가 펼쳐지는 날입니다! 오랫동안 기다려 온 일이 드디어 풀릴 조짐이 보입니다.',
  ],
  wealth: [
    '지출에 신경 써야 할 날입니다. 불필요한 소비를 줄이고 절약에 집중하세요.',
    '큰 변화는 없지만 안정적인 재물운입니다. 저축이 미래의 행운을 부릅니다.',
    '소소한 수익의 기회가 있을 수 있습니다. 충동구매는 피하는 것이 좋겠습니다.',
    '재물이 들어오는 좋은 날입니다. 투자나 협상에서 유리한 결과를 기대해 볼 수 있습니다.',
    '재물운이 매우 강한 날입니다! 예상치 못한 곳에서 금전적 이득이 생길 수 있습니다.',
  ],
  love: [
    '감정 기복이 있을 수 있는 날입니다. 혼자만의 시간을 가지며 마음을 정리해 보세요.',
    '잔잔한 사랑의 기운이 흐릅니다. 가까운 사람에게 따뜻한 말 한마디를 건네보세요.',
    '인연의 실마리가 보이는 날입니다. 새로운 만남에 열린 마음을 가지세요.',
    '사랑하는 사람과 특별한 순간을 만들기 좋은 날입니다. 표현을 아끼지 마세요.',
    '최고의 애정운! 솔로라면 운명적인 만남이, 커플이라면 더 깊은 유대가 기다립니다.',
  ],
  health: [
    '피로가 쌓이기 쉬운 날입니다. 충분한 수면과 수분 섭취에 신경 쓰세요.',
    '특별한 이상은 없으나 가벼운 스트레칭을 권합니다. 몸의 신호에 귀를 기울이세요.',
    '전반적으로 양호한 건강 상태입니다. 규칙적인 생활 습관이 중요합니다.',
    '활력이 넘치는 날입니다. 새로운 운동이나 건강 루틴을 시작하기 좋은 시점입니다.',
    '건강운이 최상입니다! 오랫동안 미뤄온 건강 관리를 지금 시작하면 큰 효과를 볼 수 있습니다.',
  ],
  work: [
    '업무에서 예상치 못한 변수가 생길 수 있습니다. 유연하게 대처하는 자세가 필요합니다.',
    '꾸준함이 빛을 발하는 날입니다. 화려함보다 성실함으로 신뢰를 쌓으세요.',
    '창의적인 아이디어가 떠오르기 좋은 날입니다. 메모해 두면 나중에 큰 도움이 됩니다.',
    '직업운이 상승하는 날입니다. 중요한 프레젠테이션이나 협의가 있다면 자신 있게 임하세요.',
    '직업운 대길! 오늘 내린 결정이 커리어의 중요한 전환점이 될 수 있습니다.',
  ],
};

const ADVICE_TEXTS = [
  '오늘은 혼자 조용히 생각을 정리하는 것이 좋습니다. 서두르지 말고 한 걸음씩 나아가세요. 작은 실천이 큰 변화를 만들어냅니다.',
  '긍정적인 말 한마디가 오늘의 운세를 바꿀 수 있습니다. 주변 사람들에게 밝은 에너지를 나눠주면 그 기운이 배가 되어 돌아옵니다.',
  '오늘은 평소와 다른 길을 걸어보세요. 익숙함에서 벗어날 때 새로운 기회가 보입니다. 변화를 두려워하지 마세요.',
  '계획을 세우고 차분히 실행하는 것이 오늘의 핵심입니다. 감정에 휘둘리지 말고 이성적으로 판단하면 좋은 결과를 얻을 수 있습니다.',
  '오늘은 평소에 감사했지만 표현하지 못했던 것들을 말로 전해보세요. 진심 어린 감사는 더 큰 행운을 불러옵니다.',
];

// ── 사주 계산 데이터 ──────────────────────────────────────────
// 천간/지지의 오행
const STEM_ELEMENT  = ['목','목','화','화','토','토','금','금','수','수'];
const BRANCH_ELEMENT = ['수','토','목','목','토','화','화','토','금','금','토','수'];
// 월지: 1월=축(1), 2월=인(2), ..., 12월=자(0) 순서
const MONTH_BRANCH_IDX = [1,2,3,4,5,6,7,8,9,10,11,0];
// 인월(2월) 시작 월간: 갑기년→병(2), 을경년→무(4), 병신년→경(6), 정임년→임(8), 무계년→갑(0)
const MONTH_STEM_START  = [2,4,6,8,0,2,4,6,8,0];

// 일간별 사주 기질 해석
const DAY_STEM_INFO = {
  '갑': { element:'목', emoji:'🌳', keyword:'개척자',
    personality:'리더십이 강하고 직선적인 성격으로, 새로운 일을 시작하는 데 탁월합니다. 독립심이 강하며 남에게 의지하기보다 스스로 길을 개척합니다.',
    strength:'추진력, 용기, 솔직함',
    weakness:'고집, 융통성 부족, 급한 성미',
    life:'큰 뜻을 품고 성장하는 나무처럼, 꾸준한 노력이 결국 높은 성취를 만들어냅니다. 협력과 유연성을 기르면 더 큰 성공이 따릅니다.' },
  '을': { element:'목', emoji:'🌿', keyword:'유연함',
    personality:'부드럽고 감수성이 풍부하며 상대방의 마음을 잘 헤아립니다. 예술적 감각이 뛰어나고 적응력이 강해 어떤 환경에서도 자리를 잡습니다.',
    strength:'공감 능력, 예술성, 적응력',
    weakness:'우유부단, 의존성, 소심함',
    life:'넝쿨처럼 주변과 조화를 이루며 성장합니다. 인간관계에서 진가를 발휘하며, 꾸준한 노력이 쌓여 단단한 결실을 맺게 됩니다.' },
  '병': { element:'화', emoji:'☀️', keyword:'열정가',
    personality:'밝고 열정적이며 사교성이 뛰어납니다. 창의적이고 표현력이 풍부하여 주변 사람들에게 활력을 불어넣는 존재입니다.',
    strength:'창의성, 사교성, 표현력',
    weakness:'충동적, 지속력 부족, 자기중심적',
    life:'태양처럼 주변을 밝히는 삶을 삽니다. 화려한 재능으로 많은 이들에게 영향을 미치지만, 내면의 꾸준함을 기를수록 더 큰 빛을 발합니다.' },
  '정': { element:'화', emoji:'🕯️', keyword:'지혜자',
    personality:'섬세하고 지혜로우며 원칙을 중시합니다. 조용하지만 강한 내면의 불꽃으로 목표를 향해 흔들리지 않고 나아갑니다.',
    strength:'집중력, 원칙, 섬세함',
    weakness:'완고함, 감정 기복, 예민함',
    life:'촛불처럼 작지만 강한 빛으로 주변을 밝힙니다. 깊은 내면의 지혜가 어두운 상황에서도 길을 찾게 해주는 힘이 됩니다.' },
  '무': { element:'토', emoji:'⛰️', keyword:'포용자',
    personality:'믿음직하고 포용력이 넓습니다. 안정감을 주는 존재로 주변 사람들의 의지처가 됩니다. 신중하고 책임감이 강합니다.',
    strength:'신뢰감, 포용력, 안정감',
    weakness:'보수적, 느린 결정, 변화 거부',
    life:'큰 산처럼 변함없이 주변을 감싸안는 삶입니다. 시간이 지날수록 쌓이는 신뢰와 덕으로 많은 이들의 버팀목이 됩니다.' },
  '기': { element:'토', emoji:'🌾', keyword:'봉사자',
    personality:'세심하고 실용적이며 남을 위해 헌신합니다. 꼼꼼한 성격으로 맡은 일을 끝까지 해내며, 보이지 않는 곳에서 빛나는 사람입니다.',
    strength:'성실함, 세심함, 배려심',
    weakness:'자기주장 부족, 우유부단, 지나친 걱정',
    life:'비옥한 대지처럼 조용히 모든 것을 품고 키워냅니다. 꾸준한 성실함이 결국 풍성한 결실로 돌아오는 삶입니다.' },
  '경': { element:'금', emoji:'⚔️', keyword:'결단가',
    personality:'결단력이 강하고 의리와 원칙을 중요하게 여깁니다. 강인한 의지력으로 역경을 헤쳐나가며 목표를 반드시 이루고야 맙니다.',
    strength:'결단력, 의리, 추진력',
    weakness:'완고함, 타협 어려움, 강압적',
    life:'단단한 금속처럼 어떤 압력에도 굴하지 않는 강인함을 지닙니다. 정의감과 실행력으로 큰 일을 이루지만, 유연성을 기르면 더욱 빛납니다.' },
  '신': { element:'금', emoji:'💎', keyword:'완벽주의자',
    personality:'날카로운 감각과 완벽을 추구하는 성향을 지녔습니다. 심미안이 뛰어나고 섬세하며, 높은 기준으로 자신과 주변을 대합니다.',
    strength:'완벽주의, 감수성, 분석력',
    weakness:'예민함, 비판적, 자기 검열 과다',
    life:'정교하게 세공된 보석처럼 빛나는 재능을 지닙니다. 높은 이상과 섬세한 감각으로 자신만의 영역을 구축하는 삶입니다.' },
  '임': { element:'수', emoji:'🌊', keyword:'탐구자',
    personality:'지혜롭고 자유로우며 새로운 것에 대한 탐구심이 강합니다. 융통성이 뛰어나 어떤 상황에도 적응하며, 넓은 시야를 지녔습니다.',
    strength:'지혜, 자유로움, 적응력',
    weakness:'주관 없음, 변덕, 실행력 부족',
    life:'큰 강처럼 막힘 없이 흘러가는 삶입니다. 풍부한 지혜와 넓은 시야로 많은 것을 담아내며, 결국 큰 바다에 이르게 됩니다.' },
  '계': { element:'수', emoji:'🌧️', keyword:'직관가',
    personality:'깊은 감성과 뛰어난 직관력을 지녔습니다. 신중하고 사려 깊으며 타인의 감정을 민감하게 파악합니다. 내면세계가 풍부합니다.',
    strength:'직관력, 감수성, 신중함',
    weakness:'소극적, 우울 경향, 결단력 부족',
    life:'이슬처럼 조용하지만 깊이 있는 삶입니다. 풍부한 감성과 직관이 예술·학문·상담 분야에서 크게 빛을 발합니다.' },
};

const ELEMENT_COLOR = { '목':'#4caf50', '화':'#f44336', '토':'#ff9800', '금':'#9e9e9e', '수':'#2196f3' };
const ELEMENT_EMOJI = { '목':'🌳', '화':'🔥', '토':'🌏', '금':'⚡', '수':'💧' };

// ── 사주 기둥 계산 함수 ───────────────────────────────────────
function getMonthPillar(year, month) {
  const yearStemIdx  = ((year - 4) % 10 + 10) % 10;
  const branchIdx    = MONTH_BRANCH_IDX[month - 1];
  const startStem    = MONTH_STEM_START[yearStemIdx];
  const monthsFromIn = (branchIdx - 2 + 12) % 12;
  const stemIdx      = (startStem + monthsFromIn) % 10;
  return { stem: HEAVENLY_STEMS[stemIdx], branch: EARTHLY_BRANCHES[branchIdx], stemIdx, branchIdx };
}

function getDayPillar(year, month, day) {
  // 기준: 2000-01-01 = 戊辰일 (stem=4 무, branch=4 진)
  const ref  = new Date(2000, 0, 1);
  const diff = Math.round((new Date(year, month - 1, day) - ref) / 86400000);
  const stemIdx   = ((4 + diff) % 10 + 10) % 10;
  const branchIdx = ((4 + diff) % 12 + 12) % 12;
  return { stem: HEAVENLY_STEMS[stemIdx], branch: EARTHLY_BRANCHES[branchIdx], stemIdx, branchIdx };
}

// 오행 카운트 (년주+월주+일주 각 천간·지지 = 총 6글자)
function countElements(yP, mP, dP) {
  const count = { '목':0, '화':0, '토':0, '금':0, '수':0 };
  [yP, mP, dP].forEach(p => {
    count[STEM_ELEMENT[p.stemIdx]]++;
    count[BRANCH_ELEMENT[p.branchIdx]]++;
  });
  return count;
}

// ── 사주풀이 HTML 생성 ────────────────────────────────────────
function buildSajuReading(birthYear, birthMonth, birthDay, name) {
  const yearStemIdx   = ((birthYear - 4) % 10 + 10) % 10;
  const yearBranchIdx = ((birthYear - 4) % 12 + 12) % 12;
  const yP = { stem: HEAVENLY_STEMS[yearStemIdx], branch: EARTHLY_BRANCHES[yearBranchIdx], stemIdx: yearStemIdx, branchIdx: yearBranchIdx };
  const mP = getMonthPillar(birthYear, birthMonth);
  const dP = getDayPillar(birthYear, birthMonth, birthDay);

  const info    = DAY_STEM_INFO[dP.stem];
  const elCount = countElements(yP, mP, dP);
  const maxEl   = Math.max(...Object.values(elCount));
  const dominant = Object.keys(elCount).filter(e => elCount[e] === maxEl);
  const missing  = Object.keys(elCount).filter(e => elCount[e] === 0);

  // 사주 팔자표
  const table = `
    <div class="saju-table-wrap">
      <div class="saju-col">
        <div class="saju-col-label">일주 (나)</div>
        <div class="saju-stem">${dP.stem}</div>
        <div class="saju-branch">${dP.branch}</div>
        <div class="saju-el" style="color:${ELEMENT_COLOR[STEM_ELEMENT[dP.stemIdx]]}">${STEM_ELEMENT[dP.stemIdx]}</div>
      </div>
      <div class="saju-col">
        <div class="saju-col-label">월주 (부모·형제)</div>
        <div class="saju-stem">${mP.stem}</div>
        <div class="saju-branch">${mP.branch}</div>
        <div class="saju-el" style="color:${ELEMENT_COLOR[STEM_ELEMENT[mP.stemIdx]]}">${STEM_ELEMENT[mP.stemIdx]}</div>
      </div>
      <div class="saju-col">
        <div class="saju-col-label">년주 (조상·사회)</div>
        <div class="saju-stem">${yP.stem}</div>
        <div class="saju-branch">${yP.branch}</div>
        <div class="saju-el" style="color:${ELEMENT_COLOR[STEM_ELEMENT[yP.stemIdx]]}">${STEM_ELEMENT[yP.stemIdx]}</div>
      </div>
    </div>`;

  // 오행 균형 바
  const elBar = Object.entries(elCount).map(([el, cnt]) => `
    <div class="el-row">
      <div class="el-name">${ELEMENT_EMOJI[el]} ${el}</div>
      <div class="el-bar-wrap">
        <div class="el-bar" style="width:${(cnt/6)*100}%;background:${ELEMENT_COLOR[el]}"></div>
      </div>
      <div class="el-cnt">${cnt}</div>
    </div>`).join('');

  const dominantStr = dominant.map(e => `${ELEMENT_EMOJI[e]}${e}`).join(', ');
  const missingStr  = missing.length ? missing.map(e => `${ELEMENT_EMOJI[e]}${e}`).join(', ') : '없음 (균형)';

  return `
    <div class="saju-reading">
      <div class="sr-section">
        <div class="sr-title">📋 사주 팔자표</div>
        <div class="sr-desc">천간(위)은 하늘의 기운, 지지(아래)는 땅의 기운을 나타냅니다.</div>
        ${table}
      </div>

      <div class="sr-section">
        <div class="sr-title">${info.emoji} 일간 분석 — ${dP.stem}(${info.element}) · ${info.keyword}</div>
        <div class="sr-personality">${info.personality}</div>
        <div class="sr-tags">
          <span class="sr-tag good">강점 · ${info.strength}</span>
          <span class="sr-tag caution">약점 · ${info.weakness}</span>
        </div>
      </div>

      <div class="sr-section">
        <div class="sr-title">⚖️ 오행 균형</div>
        <div class="el-bars">${elBar}</div>
        <div class="el-summary">
          강한 기운: <span style="color:#ffd700">${dominantStr}</span> &nbsp;|&nbsp;
          부족한 기운: <span style="color:#a89070">${missingStr}</span>
        </div>
      </div>

      <div class="sr-section">
        <div class="sr-title">🔮 종합 사주 해석</div>
        <div class="sr-life">${info.life}</div>
        ${missing.length ? `<div class="sr-tip">💡 부족한 <strong>${missingStr}</strong> 기운을 보완하면 더욱 균형 잡힌 삶을 살 수 있습니다.</div>` : '<div class="sr-tip">💡 오행이 고르게 분포되어 전반적으로 균형 잡힌 사주입니다.</div>'}
      </div>
    </div>`;
}

// ── 유틸리티 ──────────────────────────────────────────────────
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getDailyIndex(seed, max) {
  const today = new Date();
  const todayStr = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
  return simpleHash(seed + todayStr) % max;
}

function getStars(level) {
  return '★'.repeat(level + 1) + '☆'.repeat(4 - level);
}

function getStemBranch(year) {
  const stem = HEAVENLY_STEMS[(year - 4) % 10];
  const branch = EARTHLY_BRANCHES[(year - 4) % 12];
  return { stem, branch };
}

function getZodiac(year) {
  const idx = ((year - 4) % 12 + 12) % 12;
  return { name: ZODIAC_KR[idx], emoji: ZODIAC_EMOJI[idx] };
}

function getFiveElement(year) {
  return FIVE_ELEMENTS[(year - 4) % 10];
}

function getAge(birthYear) {
  return new Date().getFullYear() - birthYear + 1;
}

// ── 별 배경 생성 ──────────────────────────────────────────────
function createStars() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      --duration: ${Math.random() * 3 + 2}s;
      animation-delay: ${Math.random() * 3}s;
    `;
    container.appendChild(star);
  }
}

// ── 메인 운세 생성 ────────────────────────────────────────────
function generateFortune(name, birthdate) {
  const date = new Date(birthdate);
  const birthYear = date.getFullYear();
  const birthMonth = date.getMonth() + 1;
  const birthDay = date.getDate();
  const seed = `${name}${birthYear}${birthMonth}${birthDay}`;

  const { stem, branch } = getStemBranch(birthYear);
  const zodiac = getZodiac(birthYear);
  const element = getFiveElement(birthYear);
  const age = getAge(birthYear);

  // 오늘 날짜 기반으로 카테고리별 레벨 결정 (0~4)
  const levels = {
    total:  getDailyIndex(seed + 'total', 5),
    wealth: getDailyIndex(seed + 'wealth', 5),
    love:   getDailyIndex(seed + 'love', 5),
    health: getDailyIndex(seed + 'health', 5),
    work:   getDailyIndex(seed + 'work', 5),
  };

  // 행운 정보
  const luckyColor  = LUCKY_COLORS[getDailyIndex(seed + 'color', LUCKY_COLORS.length)];
  const luckyNum    = LUCKY_NUMBERS[getDailyIndex(seed + 'num', LUCKY_NUMBERS.length)];
  const luckyDir    = LUCKY_DIRECTIONS[getDailyIndex(seed + 'dir', LUCKY_DIRECTIONS.length)];
  const adviceIdx   = getDailyIndex(seed + 'advice', ADVICE_TEXTS.length);

  // 오늘 날짜 포맷
  const today = new Date();
  const todayStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return { stem, branch, zodiac, element, age, birthYear, birthMonth, birthDay, levels, luckyColor, luckyNum, luckyDir, adviceIdx, todayStr, name };
}

// ── 게이지 SVG 생성 ──────────────────────────────────────────
const GAUGE_COLORS  = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#ffd700'];
const GAUGE_GLOWS   = ['rgba(231,76,60,0.6)', 'rgba(230,126,34,0.6)', 'rgba(241,196,15,0.6)', 'rgba(46,204,113,0.6)', 'rgba(255,215,0,0.8)'];
const LEVEL_NAMES   = ['하', '중하', '중', '중상', '대길'];
const CAT_META = [
  { key: 'total',  label: '총운',  icon: '🌟' },
  { key: 'wealth', label: '재물운', icon: '💰' },
  { key: 'love',   label: '애정운', icon: '💕' },
  { key: 'health', label: '건강운', icon: '🌿' },
  { key: 'work',   label: '직업운', icon: '💼' },
];

function buildGauge(level) {
  const R = 42, cx = 60, cy = 56;
  const startX = cx - R, endX = cx + R;
  const arcLen  = Math.PI * R;
  const dash    = ((level + 1) / 5) * arcLen;
  const color   = GAUGE_COLORS[level];
  const glow    = GAUGE_GLOWS[level];
  const lName   = LEVEL_NAMES[level];
  const filterId = `glow-${Math.random().toString(36).slice(2)}`;

  return `
    <svg class="gauge-svg" viewBox="0 0 120 68">
      <defs>
        <filter id="${filterId}" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <path class="gauge-track"
        d="M ${startX} ${cy} A ${R} ${R} 0 0 1 ${endX} ${cy}" />
      <path class="gauge-fill"
        d="M ${startX} ${cy} A ${R} ${R} 0 0 1 ${endX} ${cy}"
        stroke="${color}"
        style="--dash:${dash};--total:${arcLen};filter:url(#${filterId})"
        stroke-dasharray="${dash} ${arcLen}" />
      <text class="gauge-level-text" x="${cx}" y="${cy - 8}"
        text-anchor="middle" fill="${color}">${lName}</text>
    </svg>`;
}

// ── 결과 렌더링 ───────────────────────────────────────────────
function renderResult(data) {
  const { stem, branch, zodiac, element, age, birthYear, birthMonth, birthDay,
          levels, luckyColor, luckyNum, luckyDir, adviceIdx, todayStr, name } = data;

  const elEmoji = { '목':'🌳', '화':'🔥', '토':'🌏', '금':'⚡', '수':'💧' };

  // 헤더
  document.getElementById('result-header').innerHTML =
    `<strong>${name}</strong>님의 ${todayStr} 운세<br>
     ${stem}${branch}년 · ${elEmoji[element]} ${element}(${element}) · ${zodiac.emoji} ${zodiac.name}띠 · ${age}세`;

  // 게이지 그리드
  document.getElementById('gauge-grid').innerHTML = CAT_META.map(({ key, label, icon }) => `
    <div class="gauge-item">
      ${buildGauge(levels[key])}
      <div class="gauge-icon">${icon}</div>
      <div class="gauge-label">${label}</div>
    </div>`).join('');

  // 간단 조언
  document.getElementById('advice-simple').textContent = ADVICE_TEXTS[adviceIdx];

  // 자세히 보기 내용
  const detailCards = CAT_META.map(({ key, label, icon }) => `
    <div class="detail-card">
      <div class="detail-card-icon">${icon}</div>
      <div class="detail-card-label">${label}</div>
      <div class="detail-card-text">${FORTUNE_TEXTS[key][levels[key]]}</div>
    </div>`).join('');

  const luckyBox = `
    <div class="detail-lucky">
      🎨 행운의 색&nbsp;<span>${luckyColor}</span>
      &nbsp;·&nbsp;
      🔢 행운의 숫자&nbsp;<span>${luckyNum}</span>
      &nbsp;·&nbsp;
      🧭 행운의 방향&nbsp;<span>${luckyDir}</span>
    </div>`;

  const sajuReading = buildSajuReading(birthYear, birthMonth, birthDay, name);

  document.getElementById('detail-content').innerHTML =
    `<div class="detail-today-title">오늘의 운세 상세</div>` +
    detailCards + luckyBox +
    `<div class="detail-saju-title">나의 사주풀이</div>` +
    sajuReading;
}

// ── 커스텀 달력 피커 ──────────────────────────────────────────
const MONTHS_KR = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
const WEEKDAYS_KR = ['일','월','화','수','목','금','토'];

class DatePicker {
  constructor() {
    this.popup     = document.getElementById('calendar-popup');
    this.display   = document.getElementById('birthdate-display');
    this.hidden    = document.getElementById('birthdate');
    this.yearBtn   = document.getElementById('cal-year-btn');
    this.monthBtn  = document.getElementById('cal-month-btn');
    this.body      = document.getElementById('cal-body');
    this.prevBtn   = document.getElementById('cal-prev');
    this.nextBtn   = document.getElementById('cal-next');

    const now = new Date();
    this.viewYear  = now.getFullYear() - 25; // 기본 보기: 25년 전
    this.viewMonth = now.getMonth();          // 0-indexed
    this.selYear   = null;
    this.selMonth  = null;
    this.selDay    = null;
    this.mode      = 'day'; // 'day' | 'month' | 'year'
    this.yearPageStart = Math.floor(this.viewYear / 16) * 16;

    this.bind();
  }

  bind() {
    this.display.addEventListener('click', (e) => { e.stopPropagation(); this.open(); });
    this.prevBtn.addEventListener('click', (e) => { e.stopPropagation(); this.prev(); });
    this.nextBtn.addEventListener('click', (e) => { e.stopPropagation(); this.next(); });
    this.yearBtn.addEventListener('click',  (e) => { e.stopPropagation(); this.setMode('year'); });
    this.monthBtn.addEventListener('click', (e) => { e.stopPropagation(); this.setMode('month'); });
    document.addEventListener('click', () => this.close());
    this.popup.addEventListener('click', (e) => e.stopPropagation());
  }

  open() {
    this.mode = 'day';
    this.render();
    this.popup.classList.add('open');
  }

  close() {
    this.popup.classList.remove('open');
  }

  setMode(m) {
    this.mode = m;
    this.render();
  }

  prev() {
    if (this.mode === 'day') {
      this.viewMonth--;
      if (this.viewMonth < 0) { this.viewMonth = 11; this.viewYear--; }
    } else if (this.mode === 'month') {
      this.viewYear--;
    } else {
      this.yearPageStart -= 16;
    }
    this.render();
  }

  next() {
    if (this.mode === 'day') {
      this.viewMonth++;
      if (this.viewMonth > 11) { this.viewMonth = 0; this.viewYear++; }
    } else if (this.mode === 'month') {
      this.viewYear++;
    } else {
      this.yearPageStart += 16;
    }
    this.render();
  }

  render() {
    this.yearBtn.textContent  = `${this.viewYear}년`;
    this.monthBtn.textContent = MONTHS_KR[this.viewMonth];

    if (this.mode === 'year')  { this.renderYearGrid();  return; }
    if (this.mode === 'month') { this.renderMonthGrid(); return; }
    this.renderDayGrid();
  }

  renderDayGrid() {
    const today = new Date();
    const firstDay = new Date(this.viewYear, this.viewMonth, 1).getDay();
    const daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();

    let html = `<div class="cal-weekdays">`;
    WEEKDAYS_KR.forEach(d => { html += `<div class="cal-weekday">${d}</div>`; });
    html += `</div><div class="cal-days">`;

    // 빈 칸
    for (let i = 0; i < firstDay; i++) html += `<div class="cal-day empty"></div>`;

    for (let d = 1; d <= daysInMonth; d++) {
      const dow = (firstDay + d - 1) % 7;
      const isToday  = today.getFullYear() === this.viewYear && today.getMonth() === this.viewMonth && today.getDate() === d;
      const isSel    = this.selYear === this.viewYear && this.selMonth === this.viewMonth && this.selDay === d;
      const cls = [
        'cal-day',
        dow === 0 ? 'sun' : dow === 6 ? 'sat' : '',
        isToday ? 'today' : '',
        isSel   ? 'selected' : '',
      ].filter(Boolean).join(' ');
      html += `<button class="${cls}" data-day="${d}">${d}</button>`;
    }
    html += `</div>`;
    this.body.innerHTML = html;

    this.body.querySelectorAll('.cal-day[data-day]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selYear  = this.viewYear;
        this.selMonth = this.viewMonth;
        this.selDay   = parseInt(btn.dataset.day);
        this.commit();
      });
    });
  }

  renderMonthGrid() {
    let html = `<div class="cal-month-grid">`;
    MONTHS_KR.forEach((m, i) => {
      const isSel = this.selYear === this.viewYear && this.selMonth === i;
      html += `<button class="cal-month-item${isSel ? ' selected' : ''}" data-month="${i}">${m}</button>`;
    });
    html += `</div>`;
    this.body.innerHTML = html;

    this.body.querySelectorAll('.cal-month-item').forEach(btn => {
      btn.addEventListener('click', () => {
        this.viewMonth = parseInt(btn.dataset.month);
        this.mode = 'day';
        this.render();
      });
    });
  }

  renderYearGrid() {
    const endYear = this.yearPageStart + 15;
    let html = `<div class="cal-year-nav"><span>${this.yearPageStart} – ${endYear}</span></div><div class="cal-year-grid">`;
    for (let y = this.yearPageStart; y <= endYear; y++) {
      const isSel = this.selYear === y;
      html += `<button class="cal-year-item${isSel ? ' selected' : ''}" data-year="${y}">${y}</button>`;
    }
    html += `</div>`;
    this.body.innerHTML = html;

    this.body.querySelectorAll('.cal-year-item').forEach(btn => {
      btn.addEventListener('click', () => {
        this.viewYear = parseInt(btn.dataset.year);
        this.mode = 'month';
        this.render();
      });
    });
  }

  commit() {
    const m = String(this.selMonth + 1).padStart(2, '0');
    const d = String(this.selDay).padStart(2, '0');
    this.hidden.value  = `${this.selYear}-${m}-${d}`;
    this.display.value = `${this.selYear}년 ${this.selMonth + 1}월 ${this.selDay}일`;
    this.close();
  }
}

// ── 이벤트 바인딩 ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  new DatePicker();

  document.getElementById('fortune-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthdate').value; // hidden input

    if (!name) {
      alert('이름을 입력해 주세요.');
      return;
    }
    if (!birthdate) {
      alert('생년월일을 입력해 주세요.');
      return;
    }

    const data = generateFortune(name, birthdate);
    renderResult(data);

    document.querySelector('.form-section').style.display = 'none';
    const result = document.getElementById('result');
    result.style.display = 'block';
    result.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('retry-btn').addEventListener('click', () => {
    document.getElementById('result').style.display = 'none';
    document.querySelector('.form-section').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
