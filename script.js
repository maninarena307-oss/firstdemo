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

// ── 결과 렌더링 ───────────────────────────────────────────────
function renderResult(data) {
  const { stem, branch, zodiac, element, age, birthYear, birthMonth, birthDay, levels, luckyColor, luckyNum, luckyDir, adviceIdx, todayStr, name } = data;

  document.getElementById('saju-info').innerHTML = `
    <strong>${name}</strong>님 · ${birthYear}년 ${birthMonth}월 ${birthDay}일생 · ${age}세<br>
    ${stem}${branch}년생 · 오행: ${element}(${element === '목' ? '🌳' : element === '화' ? '🔥' : element === '토' ? '🌏' : element === '금' ? '⚡' : '💧'}) · 띠: ${zodiac.name} ${zodiac.emoji}
  `;

  document.getElementById('result-title').textContent = `${todayStr} 운세`;

  // 카드 렌더링
  const categories = ['total', 'wealth', 'love', 'health', 'work'];
  categories.forEach(cat => {
    document.getElementById(`stars-${cat}`).textContent = getStars(levels[cat]);
    document.getElementById(`text-${cat}`).textContent = FORTUNE_TEXTS[cat][levels[cat]];
  });

  // 행운 카드
  document.getElementById('text-lucky').innerHTML = `
    🎨 행운의 색: <strong style="color:#ffd700">${luckyColor}</strong><br>
    🔢 행운의 숫자: <strong style="color:#ffd700">${luckyNum}</strong><br>
    🧭 행운의 방향: <strong style="color:#ffd700">${luckyDir}</strong>
  `;

  // 오늘의 조언
  document.getElementById('advice-box').innerHTML = `
    <strong style="color:#ffd700; display:block; margin-bottom:8px;">📿 오늘의 조언</strong>
    ${ADVICE_TEXTS[adviceIdx]}
  `;
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
