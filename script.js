// ── 한자 데이터 ──────────────────────────────────────────────
const HANJA_MAP = {
  '가':[ {h:'佳',m:'아름다울'},{h:'嘉',m:'아름다울'},{h:'可',m:'옳을'},{h:'家',m:'집'} ],
  '강':[ {h:'強',m:'강할'},{h:'江',m:'강'},{h:'康',m:'편안할'},{h:'剛',m:'굳셀'} ],
  '건':[ {h:'建',m:'세울'},{h:'健',m:'건강할'},{h:'乾',m:'하늘'} ],
  '경':[ {h:'敬',m:'공경할'},{h:'慶',m:'경사'},{h:'景',m:'볕'},{h:'京',m:'서울'},{h:'炅',m:'빛날'} ],
  '계':[ {h:'桂',m:'계수나무'},{h:'溪',m:'시내'},{h:'啓',m:'열'} ],
  '고':[ {h:'高',m:'높을'},{h:'古',m:'옛'},{h:'固',m:'굳을'} ],
  '관':[ {h:'官',m:'벼슬'},{h:'寬',m:'너그러울'},{h:'觀',m:'볼'} ],
  '광':[ {h:'光',m:'빛'},{h:'廣',m:'넓을'},{h:'珖',m:'옥피리'} ],
  '교':[ {h:'敎',m:'가르칠'},{h:'橋',m:'다리'} ],
  '구':[ {h:'九',m:'아홉'},{h:'球',m:'공'},{h:'久',m:'오랠'} ],
  '국':[ {h:'國',m:'나라'},{h:'菊',m:'국화'} ],
  '규':[ {h:'奎',m:'별'},{h:'圭',m:'규'},{h:'珪',m:'홀'} ],
  '근':[ {h:'根',m:'뿌리'},{h:'勤',m:'부지런할'} ],
  '기':[ {h:'基',m:'터'},{h:'起',m:'일어날'},{h:'棋',m:'바둑'},{h:'琦',m:'아름다운 옥'} ],
  '길':[ {h:'吉',m:'길할'},{h:'佶',m:'건장할'} ],
  '나':[ {h:'那',m:'어찌'},{h:'娜',m:'아름다울'} ],
  '남':[ {h:'南',m:'남쪽'},{h:'楠',m:'녹나무'} ],
  '다':[ {h:'多',m:'많을'},{h:'茶',m:'차'} ],
  '단':[ {h:'丹',m:'붉을'},{h:'端',m:'끝'},{h:'旦',m:'아침'} ],
  '대':[ {h:'大',m:'클'},{h:'代',m:'대신할'},{h:'戴',m:'일'} ],
  '덕':[ {h:'德',m:'덕'},{h:'悳',m:'덕'} ],
  '도':[ {h:'道',m:'길'},{h:'都',m:'도읍'},{h:'度',m:'법도'} ],
  '동':[ {h:'東',m:'동쪽'},{h:'動',m:'움직일'},{h:'桐',m:'오동나무'} ],
  '라':[ {h:'羅',m:'벌일'},{h:'蘿',m:'쑥'} ],
  '래':[ {h:'來',m:'올'},{h:'萊',m:'명아주'} ],
  '련':[ {h:'蓮',m:'연꽃'},{h:'煉',m:'달굴'} ],
  '령':[ {h:'嶺',m:'고개'},{h:'令',m:'영'},{h:'玲',m:'옥소리'} ],
  '로':[ {h:'路',m:'길'},{h:'盧',m:'검을'} ],
  '류':[ {h:'柳',m:'버드나무'},{h:'流',m:'흐를'} ],
  '리':[ {h:'利',m:'이로울'},{h:'理',m:'다스릴'},{h:'李',m:'오얏'} ],
  '림':[ {h:'林',m:'수풀'},{h:'琳',m:'아름다운 옥'} ],
  '마':[ {h:'馬',m:'말'},{h:'麻',m:'삼'} ],
  '만':[ {h:'萬',m:'일만'},{h:'滿',m:'찰'},{h:'晩',m:'늦을'} ],
  '매':[ {h:'梅',m:'매화'},{h:'妹',m:'손아래 누이'} ],
  '명':[ {h:'明',m:'밝을'},{h:'命',m:'목숨'},{h:'鳴',m:'울'} ],
  '모':[ {h:'模',m:'본보기'},{h:'茅',m:'띠'} ],
  '무':[ {h:'武',m:'굳셀'},{h:'茂',m:'무성할'},{h:'務',m:'힘쓸'} ],
  '문':[ {h:'文',m:'글'},{h:'門',m:'문'},{h:'汶',m:'물이름'} ],
  '미':[ {h:'美',m:'아름다울'},{h:'微',m:'작을'},{h:'薇',m:'장미'} ],
  '민':[ {h:'民',m:'백성'},{h:'敏',m:'민첩할'},{h:'旻',m:'하늘'},{h:'玟',m:'옥돌'},{h:'珉',m:'옥'} ],
  '박':[ {h:'朴',m:'순박할'},{h:'珀',m:'호박'} ],
  '배':[ {h:'培',m:'북돋울'},{h:'裵',m:'성씨'} ],
  '범':[ {h:'凡',m:'무릇'},{h:'範',m:'법'},{h:'梵',m:'범어'} ],
  '병':[ {h:'炳',m:'빛날'},{h:'丙',m:'남쪽'} ],
  '보':[ {h:'寶',m:'보배'},{h:'甫',m:'클'},{h:'輔',m:'도울'} ],
  '복':[ {h:'福',m:'복'},{h:'馥',m:'향기로울'} ],
  '부':[ {h:'富',m:'부자'},{h:'扶',m:'도울'} ],
  '사':[ {h:'思',m:'생각할'},{h:'史',m:'역사'},{h:'士',m:'선비'} ],
  '산':[ {h:'山',m:'산'},{h:'珊',m:'산호'} ],
  '상':[ {h:'相',m:'서로'},{h:'尙',m:'오히려'},{h:'祥',m:'상서로울'} ],
  '서':[ {h:'瑞',m:'상서로울'},{h:'書',m:'글'},{h:'西',m:'서쪽'},{h:'緖',m:'실마리'} ],
  '선':[ {h:'善',m:'착할'},{h:'仙',m:'신선'},{h:'宣',m:'베풀'},{h:'先',m:'먼저'} ],
  '성':[ {h:'誠',m:'정성'},{h:'成',m:'이룰'},{h:'星',m:'별'},{h:'盛',m:'성할'} ],
  '세':[ {h:'世',m:'세상'},{h:'歲',m:'해'},{h:'洗',m:'씻을'} ],
  '소':[ {h:'素',m:'흴'},{h:'昭',m:'밝을'},{h:'小',m:'작을'} ],
  '수':[ {h:'秀',m:'빼어날'},{h:'洙',m:'물가'},{h:'壽',m:'목숨'},{h:'修',m:'닦을'},{h:'水',m:'물'} ],
  '순':[ {h:'順',m:'순할'},{h:'純',m:'순수할'},{h:'舜',m:'임금 순'} ],
  '승':[ {h:'承',m:'이을'},{h:'勝',m:'이길'},{h:'昇',m:'오를'} ],
  '시':[ {h:'詩',m:'시'},{h:'施',m:'베풀'},{h:'時',m:'때'} ],
  '신':[ {h:'信',m:'믿을'},{h:'新',m:'새'},{h:'神',m:'귀신'},{h:'晨',m:'새벽'} ],
  '아':[ {h:'雅',m:'우아할'},{h:'娥',m:'아름다울'} ],
  '안':[ {h:'安',m:'편안할'},{h:'岸',m:'언덕'} ],
  '양':[ {h:'陽',m:'볕'},{h:'洋',m:'큰바다'},{h:'良',m:'어질'} ],
  '연':[ {h:'姸',m:'고울'},{h:'燕',m:'제비'},{h:'延',m:'늘일'},{h:'演',m:'펼'} ],
  '영':[ {h:'榮',m:'영화로울'},{h:'英',m:'꽃부리'},{h:'映',m:'비칠'},{h:'瑛',m:'물빛 옥'} ],
  '예':[ {h:'叡',m:'밝을'},{h:'藝',m:'재주'},{h:'禮',m:'예도'} ],
  '오':[ {h:'悟',m:'깨달을'},{h:'五',m:'다섯'} ],
  '옥':[ {h:'玉',m:'구슬'},{h:'鈺',m:'보배'} ],
  '용':[ {h:'龍',m:'용'},{h:'勇',m:'날쌜'},{h:'鎔',m:'녹일'} ],
  '우':[ {h:'宇',m:'집'},{h:'禹',m:'임금 우'},{h:'佑',m:'도울'},{h:'祐',m:'도울'} ],
  '원':[ {h:'元',m:'으뜸'},{h:'源',m:'근원'},{h:'遠',m:'멀'},{h:'苑',m:'동산'} ],
  '유':[ {h:'有',m:'있을'},{h:'裕',m:'넉넉할'},{h:'柔',m:'부드러울'},{h:'唯',m:'오직'} ],
  '윤':[ {h:'尹',m:'성씨'},{h:'允',m:'진실로'},{h:'潤',m:'불을'},{h:'胤',m:'이을'} ],
  '은':[ {h:'銀',m:'은'},{h:'恩',m:'은혜'},{h:'殷',m:'성할'} ],
  '의':[ {h:'義',m:'옳을'},{h:'意',m:'뜻'},{h:'毅',m:'굳셀'} ],
  '이':[ {h:'怡',m:'기쁠'},{h:'彛',m:'떳떳할'} ],
  '인':[ {h:'仁',m:'어질'},{h:'寅',m:'공경할'},{h:'引',m:'이끌'} ],
  '일':[ {h:'日',m:'날'},{h:'一',m:'하나'},{h:'逸',m:'편안할'} ],
  '자':[ {h:'子',m:'아들'},{h:'慈',m:'사랑할'},{h:'紫',m:'자줏빛'} ],
  '장':[ {h:'長',m:'길'},{h:'章',m:'글'},{h:'壯',m:'씩씩할'},{h:'莊',m:'엄숙할'} ],
  '재':[ {h:'才',m:'재주'},{h:'在',m:'있을'},{h:'宰',m:'주관할'},{h:'載',m:'실을'} ],
  '전':[ {h:'全',m:'온전할'},{h:'田',m:'밭'},{h:'典',m:'법'} ],
  '정':[ {h:'正',m:'바를'},{h:'貞',m:'곧을'},{h:'靜',m:'고요할'},{h:'晶',m:'맑을'} ],
  '조':[ {h:'照',m:'비칠'},{h:'造',m:'지을'},{h:'祚',m:'복'} ],
  '주':[ {h:'珠',m:'구슬'},{h:'柱',m:'기둥'},{h:'周',m:'두루'},{h:'住',m:'살'} ],
  '준':[ {h:'俊',m:'준걸'},{h:'峻',m:'높을'},{h:'晙',m:'밝을'},{h:'浚',m:'깊을'} ],
  '지':[ {h:'智',m:'슬기로울'},{h:'志',m:'뜻'},{h:'知',m:'알'},{h:'池',m:'못'} ],
  '진':[ {h:'眞',m:'참'},{h:'珍',m:'보배'},{h:'振',m:'떨칠'},{h:'進',m:'나아갈'} ],
  '찬':[ {h:'贊',m:'도울'},{h:'燦',m:'빛날'},{h:'璨',m:'구슬빛'} ],
  '채':[ {h:'彩',m:'빛'},{h:'蔡',m:'성씨'} ],
  '천':[ {h:'天',m:'하늘'},{h:'千',m:'일천'},{h:'泉',m:'샘'} ],
  '철':[ {h:'哲',m:'밝을'},{h:'徹',m:'통할'},{h:'鐵',m:'쇠'} ],
  '청':[ {h:'靑',m:'푸를'},{h:'淸',m:'맑을'},{h:'晴',m:'갤'} ],
  '초':[ {h:'初',m:'처음'},{h:'草',m:'풀'},{h:'楚',m:'초나라'} ],
  '춘':[ {h:'春',m:'봄'},{h:'椿',m:'참죽나무'} ],
  '태':[ {h:'太',m:'클'},{h:'泰',m:'클'},{h:'台',m:'별'} ],
  '하':[ {h:'夏',m:'여름'},{h:'河',m:'강'},{h:'賀',m:'하례할'},{h:'荷',m:'연꽃'} ],
  '한':[ {h:'漢',m:'한나라'},{h:'韓',m:'나라 이름'},{h:'翰',m:'편지'} ],
  '해':[ {h:'海',m:'바다'},{h:'亥',m:'돼지'},{h:'解',m:'풀'} ],
  '향':[ {h:'香',m:'향기'},{h:'鄕',m:'고향'} ],
  '현':[ {h:'賢',m:'어질'},{h:'鉉',m:'솥귀'},{h:'玄',m:'검을'},{h:'炫',m:'빛날'} ],
  '혜':[ {h:'惠',m:'은혜'},{h:'慧',m:'슬기로울'} ],
  '호':[ {h:'浩',m:'넓을'},{h:'昊',m:'하늘'},{h:'虎',m:'범'},{h:'好',m:'좋을'} ],
  '홍':[ {h:'洪',m:'넓을'},{h:'弘',m:'넓을'},{h:'紅',m:'붉을'} ],
  '화':[ {h:'和',m:'화할'},{h:'華',m:'빛날'},{h:'花',m:'꽃'} ],
  '환':[ {h:'桓',m:'굳셀'},{h:'煥',m:'빛날'},{h:'歡',m:'기쁠'} ],
  '효':[ {h:'孝',m:'효도'},{h:'曉',m:'새벽'} ],
  '훈':[ {h:'勳',m:'공'},{h:'薰',m:'향기'},{h:'熏',m:'연기'} ],
  '희':[ {h:'熙',m:'빛날'},{h:'姬',m:'아름다울'},{h:'喜',m:'기쁠'} ],
};

// ── 한자 패널 로직 ────────────────────────────────────────────
function initHanjaPanel() {
  const nameInput  = document.getElementById('name');
  const hanjaPanel = document.getElementById('hanja-panel');
  if (!nameInput || !hanjaPanel) return;

  // 각 음절별 선택된 한자 저장
  const selected = {};

  nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();
    if (!name) { hanjaPanel.classList.remove('visible'); return; }

    // 한자가 있는 음절만 추출
    const syllables = [...name].filter(ch => HANJA_MAP[ch]);
    if (!syllables.length) { hanjaPanel.classList.remove('visible'); return; }

    // 패널 렌더
    let html = '';
    syllables.forEach(ch => {
      const chips = HANJA_MAP[ch].map(({ h, m }) => {
        const isSel = selected[ch] === h;
        return `<button class="hanja-chip${isSel ? ' selected' : ''}"
          data-syllable="${ch}" data-hanja="${h}"
          onclick="selectHanja('${ch}','${h}',this)">
          ${h}<span class="chip-meaning">${m} ${ch}</span>
        </button>`;
      }).join('');
      html += `<div class="hanja-row">
        <span class="hanja-syllable">${ch}</span>
        <div class="hanja-chips">${chips}</div>
      </div>`;
    });

    // 선택된 한자 조합 표시
    const combo = [...name].map(ch => selected[ch] || ch).join('');
    const hasSelection = Object.keys(selected).some(k => [...name].includes(k));
    if (hasSelection) {
      html += `<div class="hanja-result">선택한 한자명: <strong>${combo}</strong></div>`;
    }

    hanjaPanel.innerHTML = html;
    hanjaPanel.classList.add('visible');
  });

  // 외부 클릭 시 닫기
  document.addEventListener('click', e => {
    if (!nameInput.contains(e.target) && !hanjaPanel.contains(e.target)) {
      hanjaPanel.classList.remove('visible');
    }
  });

  nameInput.addEventListener('focus', () => {
    if (nameInput.value.trim()) hanjaPanel.classList.add('visible');
  });

  // 전역 선택 함수
  window.selectHanja = (syllable, hanja, btn) => {
    if (selected[syllable] === hanja) {
      delete selected[syllable];
    } else {
      selected[syllable] = hanja;
    }
    // 패널 갱신 트리거
    nameInput.dispatchEvent(new Event('input'));
  };
}

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

// ── 보안: XSS 방지용 입력값 소독 ─────────────────────────────
function sanitize(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
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
    `<strong>${sanitize(name)}</strong>님의 ${todayStr} 운세<br>
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
  new DatePicker();

  document.getElementById('fortune-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthdate').value; // hidden input

    if (!name) {
      alert('이름을 입력해 주세요.');
      return;
    }
    if (!/^[가-힣a-zA-Z\s]{1,10}$/.test(name)) {
      alert('이름은 한글 또는 영문만 입력해 주세요. (최대 10자)');
      return;
    }
    if (!birthdate) {
      alert('생년월일을 입력해 주세요.');
      return;
    }

    const data = generateFortune(name, birthdate);
    renderResult(data);

    document.getElementById('main-form').style.display = 'none';
    const result = document.getElementById('result');
    result.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('retry-btn').addEventListener('click', () => {
    document.getElementById('result').style.display = 'none';
    document.getElementById('main-form').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  initHanjaPanel();
});
