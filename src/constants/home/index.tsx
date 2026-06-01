import {
  IContact,
  IExperience,
  ILearn,
  IProject,
  ISkillWithCategory,
} from '@/types/home';
import { Github, Mail } from 'lucide-react';
import {
  SiAmazonec2,
  SiClaude,
  SiCypress,
  SiDocker,
  SiGithubcopilot,
  SiJavascript,
  SiMaterialdesign,
  SiMedium,
  SiNextdotjs,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRecoil,
  SiRedux,
  SiReduxsaga,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

const CursorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}>
    <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
  </svg>
);

export const HOME_CONSTANT = Object.freeze({
  SKILLS: [
    {
      category: 'Language',
      skills: [
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      ],
    },
    {
      category: 'Libraries / Frameworks',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
      ],
    },
    {
      category: 'Testing',
      skills: [
        { name: 'Cypress', icon: SiCypress, color: '#17202C' },
        { name: 'Storybook', icon: SiStorybook, color: '#FF4785' },
      ],
    },
    {
      category: 'State Management',
      skills: [
        { name: 'React Query', icon: SiReactquery, color: '#FF4154' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
        { name: 'Redux-Saga', icon: SiReduxsaga, color: '#b5b5b5' },
        { name: 'Recoil', icon: SiRecoil, color: '#1f6dff' },
        { name: 'React Hook Form', icon: SiReacthookform, color: '#EC5990' },
      ],
    },
    {
      category: 'Styling',
      skills: [
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        {
          name: 'Styled Components',
          icon: SiStyledcomponents,
          color: '#DB7093',
        },
        { name: 'Material UI', icon: SiMaterialdesign, color: '#3178C6' },
        { name: 'Radix UI', icon: SiRadixui, color: '#161618' },
      ],
    },
    {
      category: 'Cloud / DevOps',
      skills: [
        { name: 'AWS EC2', icon: SiAmazonec2, color: '#e87909' },
        { name: 'Docker', icon: SiDocker, color: '#1f6dff' },
      ],
    },
    {
      category: 'AI',
      skills: [
        { name: 'Claude Code', icon: SiClaude, color: '#D97757' },
        { name: 'Cursor', icon: CursorIcon, color: '#000000' },
        { name: 'GitHub Copilot', icon: SiGithubcopilot, color: '#000000' },
      ],
    },
  ] as ISkillWithCategory[],

  EXPERIENCES: [
    {
      company: '북아이피스',
      period: '2025.06 - 재직중',

      role: '프론트엔드팀',
      description: (
        <>
          쏠북 - 교사와 학생이 학습자료(문제집, 모의고사 등)를 사고 팔 수 있는
          교육 콘텐츠 마켓플레이스
          <br />
          쏠북 파트너 - 학습자료를 등록·판매하는 파트너(저자·교사)가 자료와 정산
          내역을 셀프 서비스로 관리할 수 있는 대시보드
        </>
      ),
      projects: [
        '쏠북 마켓 개편작업 및 운영',
        '쏠북 파트너 신규개발 및 운영',
        '쏠북 디자인 시스템(@bookips/sds) v2 구축 및 운영',
      ],
    },
    {
      company: '브랜드엑스피트니스',
      period: '2021.07 - 2024.10 (3년 3개월)',

      role: '프론트엔드팀',
      description: (
        <>
          웰니스북 - 운동 전문가 MD들이 직접 검증한 고품질 운동 프로그램을
          큐레이션하여 제공하는 부티크 운동 예약 플랫폼
          <br />
          국민피티 - 사용자의 위치를 기반으로 주변의 다양한 운동 시설과 전문
          강사를 연결해주는 O2O 플랫폼
        </>
      ),
      projects: [
        '웰니스북 백오피스 신규개발',
        '웰니스북 웹뷰 신규개발',
        '국민피티 웹 사이트 신규개발',
        '국민피티 파트너 사이트 신규개발',
        '국민피티 웹뷰 개발 및 운영',
        '국민피티 백오피스 개발 및 운영',
      ],
    },
  ] as IExperience[],

  COMPANY_PROJECTS: [
    {
      id: 'solvook-market',
      name: '쏠북 마켓',
      period: '2025.09 - 재직중',
      description:
        '교사와 학생이 학습자료(문제집, 모의고사 등)를 사고 팔 수 있는 교육 콘텐츠 마켓플레이스',
      link: 'https://solvook.com',
      techStack: [
        'React',
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'Zustand',
        'React Query',
        'Radix UI',
        '@bookips/sds',
        'Sentry',
      ],
      summary: [
        '레거시 상태관리(MobX)를 Zustand로 교체하여 보일러플레이트와 학습 비용 절감',
        'Ant Design 기반 UI를 사내 디자인 시스템(@bookips/sds) 및 Tailwind CSS로 마이그레이션하여 디자인 일관성 확보',
        '결제 게이트웨이를 Toss PG로 교체하여 결제 안정성과 사용자 경험 개선',
        '운영 중인 마켓플레이스에서 점진적 마이그레이션 전략으로 서비스 중단 없이 코드베이스 현대화',
      ],
      background: [
        '쏠북 마켓은 이미 운영 중인 교육 콘텐츠 마켓플레이스로, 기존 코드베이스는 MobX 기반 상태관리와 Ant Design 기반 UI, 그리고 레거시 결제 모듈을 사용하고 있었습니다. 사내 디자인 시스템(@bookips/sds)이 도입되면서 다른 사내 앱들과 디자인 일관성을 맞춰야 했고, 상태관리·UI·결제 영역에서 점진적인 현대화가 필요한 상황이었습니다.',
        '운영 중인 서비스인 만큼 한 번에 전체를 교체하기보다는 영역을 쪼개어 단계적으로 마이그레이션해야 했고, 실서비스에 영향을 주지 않으면서 코드베이스를 현대화하는 것이 가장 큰 과제였습니다.',
      ],
      meaning: [
        {
          title: 'MobX에서 Zustand로 상태관리 마이그레이션',
          description: [
            '기존 MobX는 데코레이터·옵저버 패턴과 클래스 기반 스토어 구조로 인해 보일러플레이트가 많고, 함수형 컴포넌트 및 React Query와 결합되는 환경에서는 어색한 부분이 많았습니다. 또한 새로 합류하는 팀원의 학습 비용도 적지 않았습니다.',
            'Zustand는 함수형 API와 작은 번들 크기를 가지고 있어 도메인 스토어를 하나씩 옮기는 점진적 마이그레이션에 적합했습니다. 영역 단위로 전환을 진행한 결과 상태관리 코드량이 줄고, 컴포넌트와의 결합도가 낮아져 유지보수성이 향상되었습니다.',
          ],
        },
        {
          title: 'Ant Design을 사내 디자인 시스템(@bookips/sds) + Tailwind CSS로 교체',
          description: [
            'Ant Design은 컴포넌트 자체는 풍부하지만 사내 디자인 시스템과 결이 달라 같은 화면에서 두 디자인 언어가 섞이는 문제가 있었고, 커스터마이징 한계로 인해 디자이너 의도를 정확히 구현하기도 어려웠습니다.',
            '한 번에 전부 교체하지 않고 페이지 단위로 작업을 쪼개, 신규 화면은 처음부터 @bookips/sds + Tailwind CSS로 작성하고 기존 화면은 점진적으로 교체하는 방식을 택했습니다. 마이그레이션 도중 디자인 시스템에 누락된 컴포넌트나 케이스를 발견할 때마다 디자인 시스템에도 반영해, 마켓의 마이그레이션이 곧 디자인 시스템의 안정화로 이어지는 선순환을 만들었습니다.',
          ],
        },
        {
          title: '결제 게이트웨이를 Toss PG로 교체',
          description: [
            '기존 결제 모듈은 안정성과 운영상의 이슈가 누적되어 있어 운영팀의 CS 대응 부담이 컸습니다. Toss PG는 결제 안정성이 높고 사용자 입장에서도 익숙한 UX를 제공한다는 점에서 교체 후보로 적합했습니다.',
            '결제는 실패 시 곧바로 매출과 사용자 신뢰에 영향을 주는 영역이라 결제 흐름을 처음부터 끝까지 다시 점검하면서 교체했고, 결제 실패·중복 결제 같은 엣지 케이스를 검증한 뒤 전환을 진행했습니다. 교체 이후 결제 관련 CS가 줄었고, 결제 모듈 자체의 유지보수 비용도 낮아졌습니다.',
          ],
        },
      ],
      contributionPercentage: '100%',
      technicalContributions: [
        'MobX → Zustand 상태관리 마이그레이션',
        'Ant Design → @bookips/sds + Tailwind CSS UI 마이그레이션',
        '결제 게이트웨이 Toss PG 교체',
        '디자인 시스템(@bookips/sds) 적용 및 누락 컴포넌트 피드백',
        '레거시 페이지 점진적 리팩토링 및 운영',
      ],
    },
    {
      id: 'solvook-partner',
      name: '쏠북 파트너',
      period: '2025.06 - 재직중',
      description:
        '학습자료를 등록·판매하는 파트너(저자·교사)가 자료와 정산 내역을 셀프 서비스로 관리할 수 있는 파트너 대시보드',
      link: 'https://partner.solvook.com',
      techStack: [
        'React',
        'TypeScript',
        'Vite',
        'React Router',
        'Tailwind CSS',
        'React Hook Form',
        'React Query',
        'Zustand',
        'Radix UI',
        '@bookips/sds',
      ],
      summary: [
        '파트너가 학습자료를 등록·수정·관리할 수 있는 셀프 서비스 대시보드를 자료 도메인 전반에서 신규 개발',
        '같은 라이센스로 여러 자료를 만드는 저자 패턴을 지원하기 위한 자료 그룹 도메인과 자료 복사 기능 신규 도입',
        'URL 쿼리스트링을 단일 진실원으로 한 필터·검색·페이지네이션 동기화 훅(useUrlParams)을 만들어 새로고침·뒤로가기에서도 상태 유지',
        '401/419 응답 시 자동 토큰 refresh + 원본 요청 재시도하는 Axios 인터셉터로 다수 동시 쿼리 환경에서도 안전한 인증 흐름 확보',
      ],
      background: [
        '쏠북 마켓에서 학습자료를 판매하는 파트너들은 자료 등록·수정·정산 조회를 별도 채널(엑셀, 메일)로 운영팀에 요청해야 했고, 운영팀이 수작업으로 처리하는 구조였습니다. 파트너 수가 늘어나면서 이 흐름은 더 이상 지속 가능하지 않게 되었고, 파트너가 직접 자료를 등록·수정하고 정산 내역을 조회할 수 있는 셀프 서비스 대시보드가 필요했습니다.',
        '정산 기능은 이전 작업자가 구축한 후 떠난 상태였고, 이후 합류해 자료(handout) 도메인 전반과 인증·라우팅·@bookips/sds 마이그레이션 등 정산 외 모든 영역을 신규 개발 및 운영했습니다. 자료는 PDF·이미지 등 여러 파일을 함께 다루어야 했고, 화면마다 다중 필터·검색·페이지네이션 상태가 복잡하게 얽혀 있어 견고한 상태 관리가 핵심 과제였습니다.',
      ],
      meaning: [
        {
          title: '자료 그룹과 자료 복사 — 같은 라이센스 기반 다중 자료 생성 흐름 지원',
          description: [
            '학습자료를 만드는 저자(파트너)들은 동일한 라이센스를 기반으로 여러 자료를 만드는 패턴이 잦았는데, 자료마다 매번 라이센스 정보와 비슷한 메타데이터를 반복 입력해야 해서 업무 효율이 떨어지는 문제가 있었습니다.',
            '이를 해결하기 위해 자료를 묶을 수 있는 "자료 그룹" 도메인을 신규 도입하여 라이센스를 한 번 등록하면 그 안에서 여러 자료를 함께 관리할 수 있도록 하고, 그룹 내에서는 기존 자료를 복사해 새 자료를 만드는 기능을 추가했습니다. 자료 복사 시에는 파일·이미지·메타데이터를 자동으로 채워두되 단원·작품 정보처럼 자료별로 달라지는 항목은 비워두어, 저자가 변경할 부분만 손보면 새 자료가 완성되도록 흐름을 설계했습니다.',
          ],
        },
        {
          title: 'useUrlParams — 필터·페이지 상태 URL 동기화',
          description: [
            '자료 목록은 데이터타입·출처·상태 등 다중 선택 필터가 7~8개에 달했고, 컴포넌트 메모리에만 상태를 두면 새로고침이나 뒤로가기 시 필터가 모두 초기화되어 운영팀과 사용자 모두 불편을 호소했습니다.',
            'useUrlParams 훅을 만들어 URL 쿼리스트링을 단일 진실원으로 사용하고, getStringArray로 다중 선택 파라미터(?datatype=1&datatype=2)를 타입 안전하게 파싱하며, updateUrlParams로 배열 값을 우아하게 append/remove 하도록 설계했습니다. 결과적으로 필터 상태가 새로고침·브라우저 백/포워드에서 모두 유지되었고, 동일한 훅을 자료 목록·필터·검색 등 6곳의 화면에서 재사용할 수 있게 되었습니다.',
          ],
        },
        {
          title: '401/419 토큰 만료를 자동 복구하는 Axios 인터셉터',
          description: [
            '자료 목록 같은 화면은 한 페이지에 다수의 쿼리가 동시에 발사되는데, 토큰이 만료되면 모든 요청이 동시에 401을 받아 각자 refresh를 시도해 토큰 갱신이 중복 호출되고 일부 요청이 누락되는 문제가 있었습니다.',
            'Axios 인터셉터에서 refresh 요청을 단일 promise로 큐잉하고, 이미 진행 중인 refresh가 있으면 그것을 기다린 뒤 원본 요청을 자동 재시도하도록 구현했습니다. refresh 요청 자체가 실패하는 경우는 무한 루프를 막기 위해 별도로 가드해, 다수 동시 쿼리에서도 안전한 인증 흐름이 보장됩니다.',
          ],
        },
      ],
      contributionPercentage: '100%',
      technicalContributions: [
        '자료(handout) 등록·수정·관리 기능 신규 개발',
        '자료 그룹 도메인 및 자료 복사 기능 신규 도입',
        'useUrlParams 훅 기반 필터·페이지 상태 URL 동기화',
        '401/419 자동 토큰 refresh Axios 인터셉터',
        '페이지 이탈 방지 (usePreventLeave)',
        '@bookips/sds 도입 및 레거시 컴포넌트 마이그레이션',
        'Mixpanel 이벤트 트래킹 설계',
      ],
    },
    {
      id: 'solvook-design-system',
      name: '쏠북 디자인 시스템 v2',
      period: '2025.06 - 재직중',
      description:
        '쏠북 마켓·쏠북 파트너 등 사내 다수 앱이 공통으로 사용하는 React 컴포넌트 라이브러리. v1 운영 경험을 바탕으로 아키텍처를 새로 설계해 v2로 완전히 재구축',
      link: 'https://main.d47rk977vpmon.amplifyapp.com/?path=/story/components-button--sizes',
      techStack: [
        'React',
        'TypeScript',
        'Rollup',
        'Tailwind CSS v4',
        'CVA',
        'Radix UI',
        'Storybook',
        'SVGR',
      ],
      summary: [
        '사내 다수 앱(쏠북 마켓·파트너)이 공통으로 의존하는 React 컴포넌트 라이브러리를 v1 운영 경험을 토대로 v2로 완전 재구축',
        'Tailwind v4 CSS Variables + CVA + Radix Headless 조합으로 variant 기반 일관 API 설계',
        '레거시 Select/Menu를 단일/다중 모드 통합 API(SelectV2, MenuV2)로 리팩토링하여 소비 앱의 의사결정 비용 절감',
        'Rollup ESM 번들과 GitHub Packages 배포 파이프라인 구축, Storybook addon-interactions로 시각·상호작용 검증 환경 마련',
      ],
      background: [
        '쏠북의 v1 디자인 시스템은 Material UI 위에 사내 디자인을 입히는 방식으로 구축되어 있었습니다. 그러나 MUI는 자체 디자인 언어가 강하고 내부 구조가 복잡해 사내 디자인 토큰을 그대로 표현하기 어려웠고, 작은 스타일 변경에도 깊은 테마 오버라이드가 필요한 경우가 잦았습니다. 결과적으로 디자이너가 의도한 토큰·동작·접근성을 정확히 구현하기 어려운 사례가 반복적으로 나타났습니다.',
        '이런 한계를 점진적으로 패치하기보다는 MUI에 묶이지 않은 새 아키텍처로 처음부터 다시 만드는 것이 장기적으로 옳다는 결론에 도달했고, "v2"라는 명목으로 디자인 시스템을 새로 설계해 단독으로 구축하게 되었습니다.',
      ],
      meaning: [
        {
          title: 'MUI에 묶이지 않은 Tailwind v4 + CVA + Radix 기반 v2 아키텍처 설계',
          description: [
            'Material UI 기반의 v1은 사내 디자인 토큰을 MUI의 테마 시스템 위에 우겨넣어 쓰는 구조라 미세한 스타일 변경에도 깊은 테마 오버라이드가 필요했고, MUI 내부 구현의 제약 때문에 디자이너가 의도한 동작과 다른 결과가 나오는 경우가 잦았습니다.',
            'v2에서는 Tailwind v4의 CSS Variables로 테마를, CVA(class-variance-authority)로 variant 매트릭스를, Radix Headless로 동작과 접근성을 명확히 분리하는 아키텍처를 채택했습니다. 결과적으로 Button 한 컴포넌트가 5개 variant prop과 compound variant로 9가지 조합을 표현하면서도 스타일 코드는 한곳에 모이고, Radix가 키보드·스크린 리더 동작을 담당해 접근성도 동시에 확보되었습니다.',
          ],
        },
        {
          title: 'SelectV2 / MenuV2 — 단일/다중 모드를 하나의 API로 통합',
          description: [
            '레거시 Select(단일 전용)와 Menu(다중 전용)는 비슷한 UX를 다른 컴포넌트로 노출하고 있어 소비 앱이 매번 두 컴포넌트 중 어느 것을 쓸지 결정해야 했고, 두 컴포넌트의 키보드 동작이 미세하게 달라 사용자 경험에도 영향이 있었습니다.',
            'Radix Popover 기반으로 둘을 통합한 SelectV2/MenuV2를 새로 설계해 single·multi 모드를 동일한 props 형태로 노출하고, ComplexTreeSelect 같은 컴포지션 패턴도 지원하도록 만들었습니다. 결과적으로 소비 앱의 컴포넌트 선택 비용이 사라졌고, 키보드 동작과 접근성도 두 모드에서 동일하게 보장됩니다.',
          ],
        },
        {
          title: '여러 소비 앱이 서로 다른 버전으로 의존하는 라이브러리 운영',
          description: [
            '쏠북 마켓과 파트너는 자신들의 일정에 맞춰 디자인 시스템을 업그레이드하기 때문에 두 앱이 항상 동일한 sds 버전에 머무는 것은 현실적으로 불가능했고, breaking change·신규 컴포넌트 노출 시점·문서화 책임을 정리해야 했습니다.',
            'Rollup ESM 번들 + GitHub Packages를 통한 정기 릴리즈 파이프라인을 만들고, JSDoc 주석을 Storybook story description과 같이 관리해 소비 앱 개발자가 패키지 업그레이드 없이도 변경 사항을 확인할 수 있도록 했습니다. 그 결과 두 소비 앱이 각자의 일정으로 안전하게 마이그레이션할 수 있는 안정적인 릴리즈 운영 체계가 자리잡았습니다.',
          ],
        },
      ],
      contributionPercentage: '100%',
      technicalContributions: [
        'v2 아키텍처 설계 및 구현',
        '28종 컴포넌트 설계·개발·문서화',
        'SelectV2 / MenuV2 통합 API 리팩토링',
        'IconV2 시스템 도입 (SVG viewBox 보존, variant 안전성 보강)',
        'Tailwind v4 테마(color/typo/spacing/z-layer/animation) 정의',
        'Rollup ESM 번들 + GitHub Packages 배포 파이프라인 구축',
        'Storybook 8 + addon-interactions 환경 구성',
      ],
    },
    {
      id: 'wellness-admin',
      name: '웰니스북 백오피스',
      period: '2023.11 - 2024.10',
      description:
        '운동 전문가 MD들이 직접 상품(프로그램)을 등록하고 관리할 수 있도록 개발된 백오피스',
      techStack: [
        'React',
        'Typescript',
        'Next.js',
        'React-query',
        'Recoil',
        'React-hook-form',
        'Material UI',
      ],
      media: [
        { type: 'image', url: '../projects/wellnessbook/backoffice/01.png' },
        { type: 'image', url: '../projects/wellnessbook/backoffice/02.png' },
        { type: 'video', url: '../projects/wellnessbook/backoffice/03.mp4' },
        { type: 'image', url: '../projects/wellnessbook/backoffice/04.png' },
        { type: 'image', url: '../projects/wellnessbook/backoffice/05.png' },
        { type: 'image', url: '../projects/wellnessbook/backoffice/06.png' },
        { type: 'image', url: '../projects/wellnessbook/backoffice/07.png' },
        { type: 'image', url: '../projects/wellnessbook/backoffice/08.png' },
      ],
      summary: [
        '웰니스북은 운동 전문가 MD들이 직접 운동 프로그램을 큐레이션하여 제공하는 운동 예약 플랫폼',
        'MD를 위한 상품(프로그램) 관리 시스템 개발 요청',
        '서비스에 최적화된 에디터를 위해 기존 에디터(tiptap) 커스터마이징',
        'FullCalendar를 활용한 일정 관리 시스템 개발(스케줄 등록, 반복 일정, 폐강 기능)',
        '서비스 운영을 위한 기능(결제, 정산, CS 관리 등) 개발',
      ],
      background: [
        '웰니스북은 운동 전문가들이 검증한 운동 프로그램을 제공하는 플랫폼입니다. 기존에는 판매자가 상품을 등록하고 관리할 수 있는 별도의 인터페이스가 없었습니다. 그로 인해 운영팀이 수기로 상품등록 및 일정 관리를 전담해야 했고, 이를 위해 판매자가 직접 상품을 관리할 수 있는 환경이 필요했습니다.',
        '또한, 타 오픈마켓에서 상품을 등록할 때 필요한 기본적인 옵션과 서비스에 맞는 옵션까지 모두 구현해야 했습니다. 빠르게 개발해야 하는 기능이었기에 해결해야 할 과제가 많았지만, 그만큼 배울 점도 많다고 생각했습니다.',
      ],
      meaning: [
        {
          title: '판매자가 직접 상품을 등록할 수 있는 시스템 개발',
          description: [
            '상품(운동 프로그램) 특성상 다양한 이미지 사이즈가 필요했고, 통일된 타이포가 필요했기 때문에 기존 에디터들 중에서 저희 서비스와 핏한 에디터는 찾아볼 수 없었습니다. 그래서 여러 에디터를 비교해서 tiptap이라는 에디터를 찾아냈고, 해당 에디터를 커스텀하여 상품을 등록할 때 저희 서비스에 맞는 다양한 옵션을 제공했습니다.',
            '상품의 스케줄을 등록할 수 있도록 FullCalendar를 사용해 반복 일정, 모집인원, 폐강 기능을 지원하여 운영 편의성을 개선했습니다.',
          ],
        },
        {
          title: '서비스 운영을 위한 관리 기능 개발',
          description: [
            '운영팀이 매출 데이터를 쉽게 관리할 수 있도록 결제 및 정산 시스템 구현했고, 각 기능마다 운영팀이 원하는 도구(엑셀)로 데이터를 다운로드 받을 수 있게하여 데이터 관리를 편리하게 할 수 있도록 지원하였습니다.',
          ],
        },
        {
          title: '일정의 객관화',
          description: [
            '타이트한 일정과 많은 기능이 들어가는 프로젝트라서 일정 관리가 굉장히 중요했습니다. 다양한 기능들의 일정을 조율하다 보니, 시간이 지날수록 기능을 개발하는데 걸리는 시간을 보다 정확하게 예상할 수 있게 되었고 개발속도와 작업량에 대한 자기 객관화 능력이 향상되었습니다.',
          ],
        },
      ],
      contributionPercentage: '100%',
      technicalContributions: [
        '상품 등록/관리',
        '주문, 결제, 정산 관리',
        '회원 관리',
        '앱 내 컨텐츠 관리',
        '푸시 알림 관리',
        'CS 관리',
      ],
    },
    {
      id: 'wellness-webview',
      name: '웰니스북 웹뷰',
      period: '2023.11 - 2024.10',
      description:
        '업데이트가 잦은 앱 화면(웹뷰)과 앱 미설치 고객이 상품 공유 링크를 통해 바로 접근할 수 있는 웹 공유용 랜딩 페이지',
      techStack: [
        'React',
        'Typescript',
        'Next.js',
        'React-query',
        'Styled-components',
        'React-hook-form',
      ],
      media: [
        { type: 'image', url: '../projects/wellnessbook/webview/01.png' },
        { type: 'image', url: '../projects/wellnessbook/webview/02.png' },
        { type: 'image', url: '../projects/wellnessbook/webview/03.png' },
      ],
      summary: [
        '이벤트 화면이 앱 심사 지연으로 인해 이벤트 시작 일시를 놓치는 문제 발생',
        '변경이 잦은 화면(선물함, 쿠폰함 등)을 웹뷰로 제작해 빠르게 배포할 수 있도록 구성',
        '웹뷰와 앱의 동일한 기능과 데이터 전달을 위한 자바스크립트 인터페이스 기반의 브릿지 개발',
        '앱 미설치 고객을 위한 웹 공유용 랜딩페이지 구현',
      ],
      background: [
        '웰니스북은 모바일 앱으로 제공되는 서비스입니다. 그렇다보니 변경이 잦은 화면 또는 이벤트와 같이 정확한 일시에 시작해야 하는 기능의 경우 앱 심사가 길어지면 시작 일시를 놓치는 문제가 발생했습니다. 이러한 이유로 웹뷰로 만들어야 하는 화면이 필요해졌습니다.',
        '기존에는 사용자가 상품을 공유 받으면 앱을 설치한 사용자만 상품 정보를 확인할 수 있었습니다. 이로 인해 앱을 설치하지 않은 사용자는 상품 링크를 공유받았을 때 앱을 설치하지 않고 이탈하는 문제가 발생했습니다.',
      ],
      meaning: [
        {
          title:
            '웹 - 앱 데이터 전달을 위한 자바스크립트 인터페이스 기반의 브릿지(Bridge) 개발',
          description: [
            '웹뷰에서 앱과 데이터를 주고받거나 앱 기능을 웹에서 활용해야 하는 경우가 많아, 자바스크립트 인터페이스 기반의 브릿지를 개발했습니다. 기존 국민피티(네이티브 앱)에서는 Android와 iOS의 메시지 함수를 각각 따로 설정해야 했지만, 웰니스북(Flutter 앱)에서는 이를 하나의 메시지 함수로 통합하는 방법을 고민했습니다. 결과적으로 postMessage를 활용해 앱과의 데이터 송수신을 일관된 방식으로 구현할 수 있었습니다.',
          ],
        },
        {
          title: '앱 미설치 고객을 위한 랜딩 페이지 개발',
          description: [
            '앱 미설치 고객도 상품을 확인할 수 있도록 랜딩 페이지를 구현했습니다. 이 과정에서 딥링크(Deeplink) 설정 방법을 학습하게 되었으며, 기존 국민피티(네이티브 앱)에서는 Android와 iOS의 링크 설정이 따로 필요했던 반면, 웰니스북(Flutter 앱)에서는 하나의 URL 스킴으로 통합할 수 있었습니다. 이를 통해 앱 미설치 고객은 랜딩 페이지로, 설치된 경우 앱 내 상품 화면으로 자연스럽게 연결되도록 구현했습니다.',
          ],
        },
      ],
      contributionPercentage: '100%',
      technicalContributions: [
        '등급 관리',
        '혜택/쿠폰 관리',
        'CS 관리(1:1 문의, FAQ 등)',
        '앱 내 주소 검색을 위한 페이지(웹뷰)',
        '상품(프로그램) 공유용 랜딩 페이지',
      ],
    },
    {
      id: 'kookminpt-web',
      name: '국민피티 웹',
      period: '2021.07 - 2023.10',
      description:
        '국민피티 서비스 소개 및 앱 내 일부 기능 지원을 위한 웹사이트',
      techStack: [
        'React',
        'Typescript',
        'Next.js',
        'Redux',
        'Redux-saga',
        'Styled-components',
        'Storybook',
      ],
      media: [
        { type: 'image', url: '../projects/kookminpt/web/01.png' },
        { type: 'image', url: '../projects/kookminpt/web/02.png' },
        { type: 'image', url: '../projects/kookminpt/web/03.png' },
        { type: 'image', url: '../projects/kookminpt/web/04.jpg' },
        { type: 'image', url: '../projects/kookminpt/web/05.png' },
        { type: 'image', url: '../projects/kookminpt/web/06.png' },
        { type: 'image', url: '../projects/kookminpt/web/07.png' },
        { type: 'image', url: '../projects/kookminpt/web/08.png' },
        { type: 'image', url: '../projects/kookminpt/web/09.png' },
        { type: 'image', url: '../projects/kookminpt/web/10.png' },
        { type: 'image', url: '../projects/kookminpt/web/11.png' },
        { type: 'image', url: '../projects/kookminpt/web/12.png' },
      ],
      summary: [
        '국민피티는 사용자의 위치 기반으로 운동 시설과 강사를 연결하는 O2O 플랫폼',
        '기존 앱 중심에서 일부 기능을 웹 플랫폼으로 구축 필요',
        '디자인 시스템과 스토리북 도입으로 UI/UX 일관성 및 개발 생산성 향상',
        'SEO 최적화 및 로딩 속도 개선으로 검색 노출 및 사용자 경험 향상 (LCP 2.5초 ⇒ 1.5초)',
        'GA와 페이스북 픽셀을 적용해 사용자 행동 분석 및 서비스 개선',
        '웹에서도 OAuth 로그인(구글, 카카오, 애플) 및 회원가입을 구현하여 앱 일부 기능 지원',
      ],
      background: [
        '국민피티 서비스는 기존에 앱 중심으로 운영 되었지만 웹을 통해서도 사용자들이 정보를 얻고 서비스를 이용할 수 있도록, 본격적인 웹 플랫폼을 구축할 필요가 있었습니다. 초기 국민피티 웹 사이트는 UI가 일관되지 않았고, 새로운 기능을 추가할 때마다 디자인 요소가 중구난방으로 적용되는 문제가 있었습니다. 또한, 메인 페이지는 서비스 소개를 위해 큰 이미지를 많이 포함하고 있어 페이지 로딩 속도가 느려지는 문제도 있었습니다.',
      ],
      meaning: [
        {
          title: '디자인 일관성을 위한 디자인 시스템 도입',
          description: [
            '페이지마다 디자인이 다르게 적용되는 문제를 디자이너 분들과 함께 고민했고, 그 결과로 UI 일관성을 위해 디자인 시스템을 도입하기로 결정했습니다. 디자인 시스템 구축 초반에는 디자이너 분들과 의논해야할 부분이 많아서 많은 시간을 쏟아야 했지만 구축 후에는 개발 시간 현저히 단축되었고, 특히 QA를 하는 시간이 많이 단축되었습니다.',
            '디자인 시스템을 구축하면서, 컴포넌트의 동작과 사용 사례 등을 구체적으로 정의하고 문서화의 필요성을 느꼈습니다. 이를 위해 컴포넌트 문서화 기능이 있는 스토리북을 도입하였고, 스토리북을 통해 디자이너와 화면을 보며 피드백을 주고받을 수 있었습니다. 또한, 디자이너들이 각 컴포넌트를 자세히 검토할 수 있는 기회를 가지게 되어 협업을 더 원활하게 진행할 수 있었습니다.',
          ],
        },

        {
          title: '메인 페이지 성능 및 검색 최적화',
          description: [
            '서비스 소개를 위한 이미지가 많은 메인 페이지의 로딩 속도를 개선하기 위해, Next.js의 이미지 태그와 레이지 로딩 기능을 활용했습니다. 개선 전에는 레이아웃 쉬프트가 빈번하고 LCP가 2.5초였으나, 개선 후에는 레이아웃 쉬프트가 완전히 사라졌으며, LCP를 1.5초로 단축할 수 있었습니다.',
            '검색 노출을 원활하게 하기 위해 SEO 최적화를 진행했습니다. 이를 위해 이미지의 alt 속성, 메타 태그, 정적 페이지 생성 등을 적용하여 검색 엔진 노출을 강화하였습니다.',
          ],
        },

        {
          title: '사용자 행동 분석을 위한 데이터 수집',
          description: [
            '향후 서비스 방향 및 개선점을 위한 사용자 행동 분석이 필요했기 때문에, 이를 위해 GA(Google Analytics)와 페이스북 픽셀을 삽입하여 데이터를 수집하고 분석할 수 있도록 하였습니다.',
          ],
        },
        {
          title: '앱의 일부 기능을 웹에서도 지원',
          description: [
            '웹에서도 OAuth 로그인(구글, 카카오, 애플) 및 회원가입을 구현하여, 앱에서 제공되는 일부 기능(강사등록, 회원정보 수정 등)을 웹에서도 사용할 수 있도록 하여 사용자 편의성을 강화했습니다.',
          ],
        },
      ],
      contributionPercentage: '70%',
      technicalContributions: [
        '디자인 시스템 구축',
        '메인 페이지',
        '로그인(일반, 소셜)/회원가입',
      ],
    },
    {
      id: 'kookminpt-partner',
      name: '국민피티 파트너',
      period: '2021.07 - 2023.10',
      description:
        '개인 운동 강사와 운동 센터가 파트너 입점 신청을 통해 지역 기반으로 고객을 매칭받고, 운동 관련 사업을 운영 및 관리할 수 있도록 지원하는 웹 사이트(국민피티 파트너)',
      techStack: [
        'React',
        'Typescript',
        'Next.js',
        'Redux',
        'Redux Toolkit(RTK)',
        'Redux-saga',
        'Styled-components',
        'React-hook-form',
      ],
      media: [
        { type: 'image', url: '../projects/kookminpt/partner/01.png' },
        { type: 'image', url: '../projects/kookminpt/partner/02.jpg' },
        { type: 'image', url: '../projects/kookminpt/partner/03.jpeg' },
        { type: 'image', url: '../projects/kookminpt/partner/04.jpg' },
        { type: 'image', url: '../projects/kookminpt/partner/05.jpg' },
        { type: 'image', url: '../projects/kookminpt/partner/06.jpg' },
        { type: 'image', url: '../projects/kookminpt/partner/07.jpg' },
        { type: 'image', url: '../projects/kookminpt/partner/08.jpg' },
        { type: 'image', url: '../projects/kookminpt/partner/09.jpg' },
        { type: 'image', url: '../projects/kookminpt/partner/10.jpg' },
        { type: 'image', url: '../projects/kookminpt/partner/11.jpg' },
      ],
      summary: [
        '국민피티에 파트너 관리 시스템 부재, 파트너 웹 플랫폼 구축 필요',
        '리덕스 보일러플레이트 코드의 복잡함을 해결하기 위해 Redux Toolkit(RTK)을 도입하여 상태 관리 코드를 간결하게 개선',
        '복잡한 폼 관리 위해 react-hook-form 도입을 통한 폼 상태 관리 간소화 및 개발 시간 단축',
        '피드형 콘텐츠를 위해 Intersection Observer로 무한 스크롤 구현',
      ],
      background: [
        '국민피티 서비스에는 파트너(개인 운동 강사, 운동 센터)를 위한 관리 시스템이 존재하지 않아, 운영팀이 모든 입점 및 센터 관리를 수작업으로 진행해야 했습니다. 이러한 이유로 파트너가 플랫폼을 통해 입점 신청을 하고 센터를 관리할 수 있는 시스템이 필요했습니다.',
        '리덕스에서 하나의 기능을 추가할 때마다 반복적으로 작성해야 하는 보일러플레이트 코드(액션 생성자, 리듀서, 상태 업데이트 로직) 때문에 코드의 복잡도가 증가하고 생산성이 저하되는 문제가 발생했습니다.',
        '센터 관련 정보를 입력해야 하는 여러 페이지(입점 신청, 센터 정보 입력 등)에서 다양한 폼 형태가 요구되었고, 이로 인해 폼 상태 관리가 복잡해져 이 상태들을 쉽게 관리할 수 있는 방법을 고민하게 되었습니다.',
      ],
      meaning: [
        {
          title:
            '리덕스 보일러플레이트 코드의 복잡함을 해결하기 위해 Redux Toolkit(RTK)을 도입',
          description: [
            '반복적인 보일러플레이트 코드 작성을 개선하기 위해 Redux Toolkit(RTK)을 도입하여 createSlice와 같은 내장 도구를 활용해 코드 작성량을 줄이고, 상태 관리 로직을 자동화했습니다. 덕분에 코드의 가독성과 유지보수성이 개선되었으며, 비동기 처리와 상태 업데이트가 더욱 직관적으로 이루어졌습니다.',
          ],
        },
        {
          title: '복잡한 폼 상태 관리를 위한 react-hook-form 도입',
          description: [
            '복잡한 상태 관리를 위해 여러 가지 방법을 찾아보다가 react-hook-form이라는 라이브러리를 알게 되었고, 이를 도입하게 되었습니다. 초반에는 모든 폼을 마이그레이션해야 해서 많은 시간이 소요되었지만, 점차 폼 상태를 더 쉽게 관리할 수 있었고, isValid, isDirty 등 제공되는 다양한 기능 덕분에 개발 시간이 단축되었습니다.',
          ],
        },
        {
          title: 'Intersection Observer를 활용한 무한 스크롤 구현',
          description: [
            '센터 관리 기능 중 하나인 "센터 새소식"은 피드형 콘텐츠로, 무한 스크롤 기능이 포함된 페이지였습니다. 무한 스크롤 구현을 위한 여러 방법을 학습한 후, 라이브러리 없이 Intersection Observer를 활용하여 무한 스크롤을 구현할 수 있었습니다.',
          ],
        },
      ],
      contributionPercentage: '50%',
      technicalContributions: [
        '입점 신청',
        '센터 관련 기능(센터 소개, 강사 관리, FAQ 관리, 리뷰 관리 등)',
      ],
    },
    {
      id: 'kookminpt-webview',
      name: '국민피티 웹뷰',
      period: '2021.07 - 2023.10',
      description:
        '업데이트가 잦은 앱 화면(웹뷰)과 앱 미설치 고객이 상품 공유 링크를 통해 바로 접근할 수 있는 웹 공유용 랜딩 페이지',
      techStack: [
        'React',
        'Typescript',
        'Next.js',
        'Redux',
        'Redux-saga',
        'Styled-components',
        'React-query',
      ],
      media: [
        { type: 'image', url: '../projects/kookminpt/webview/01.png' },
        { type: 'image', url: '../projects/kookminpt/webview/02.png' },
        { type: 'image', url: '../projects/kookminpt/webview/03.png' },
        { type: 'image', url: '../projects/kookminpt/webview/04.png' },
        { type: 'image', url: '../projects/kookminpt/webview/05.png' },
        { type: 'image', url: '../projects/kookminpt/webview/06.png' },
        { type: 'image', url: '../projects/kookminpt/webview/07.png' },
        { type: 'image', url: '../projects/kookminpt/webview/08.png' },
      ],
      summary: [
        '딥링크(Deeplink)를 사용하여 앱 설치 고객은 앱 내 화면으로, 미설치 고객은 랜딩 페이지로 유도',
        'React Query를 도입하여 UI와 비즈니스 로직을 분리시켜 코드의 가독성과 유지보수성 향상',
        '앱 내 업데이트가 많은 화면을 웹뷰로 제작하여 사용자 경험 강화',
      ],
      background: [
        '기존에는 앱 내에서 센터나 강사를 공유할 수 있는 기능이 있었지만, 앱을 설치한 사용자만 이 기능을 이용할 수 있었습니다. 이로 인해 앱을 미설치한 고객의 이탈률이 높아지는 문제가 발생했습니다.',
        '서버 상태 관리 로직이 UI 컴포넌트와 결합되어 코드가 복잡해지고, 서버 데이터가 변경될 때 클라이언트 상태와의 일관성을 맞추는 작업이 번거로웠습니다.',
        '국민피티는 모바일 앱을 통해 제공되는 서비스로, 변경이 빈번한 화면을 앱으로 구현하면 앱 심사 과정이 길어짐에 따라 정확한 시간에 맞춰 시작해야 하는 미션, 이벤트 기능의 시작 일시가 지연되는 문제가 발생했습니다. 따라서 이러한 화면을 웹뷰로 구현할 필요성이 생겼습니다.',
      ],
      meaning: [
        {
          title: '앱 미설치 고객을 위한 랜딩 페이지 및 딥링크 구현',
          description: [
            '앱 미설치 고객을 위한 랜딩 페이지를 새로 구현하였고, 랜딩 페이지에서 앱 설치 여부에 따라 분기하는 기능을 구현하기 위해 딥링크를 학습했습니다. 안드로이드와 iOS에서 각각 앱링크와 유니버셜 링크를 사용하여 딥링크를 구현했습니다.',
          ],
        },
        {
          title: 'React Query를 도입하여 UI와 비즈니스 로직을 분리',
          description: [
            'React Query를 도입하여 서버 상태를 UI와 분리하고, 데이터를 요청하는 로직을 컴포넌트 외부로 분리시켰습니다. 또한 React Query를 사용하여 서버 상태를 자동으로 동기화하고, 로컬 상태와 일관성을 유지하면서 데이터 변경 시 UI를 즉시 업데이트할 수 있도록 하여 유지보수성과 확장성을 향상시켰습니다.',
          ],
        },
        {
          title: '웹뷰 구현 및 앱과의 데이터 연동',
          description: [
            '자주 업데이트되는 화면을 웹뷰로 구현하고, 웹뷰와 앱 간의 데이터 전달 및 동일한 기능(토스트 팝업, 얼럿, 화면 열기/닫기 등)을 지원하기 위해 앱팀과 협업하여 필요한 action과 데이터 타입을 정의했습니다. 이를 통해 앱 내에서 웹뷰의 기능을 원활하게 연동할 수 있었습니다.',
          ],
        },
      ],
      contributionPercentage: '60%',
      technicalContributions: [
        '센터, 강사, 마이 공유용 랜딩 페이지',
        '선물함, 쿠폰함, 등급 관리, 미션 관리, 혜택 살펴보기(웹뷰)',
      ],
    },
    {
      id: 'kookminpt-admin',
      name: '국민피티 백오피스',
      period: '2021.07 - 2023.10',
      description:
        '데이터 시각화를 위한 대시보드와 서비스 운영을 위한 회원, 센터(파트너), 앱 내 콘텐츠, CS 등을 관리할 수 있도록 개발된 백오피스',
      techStack: [
        'React',
        'Typescript',
        'Next.js',
        'Redux',
        'Redux-saga',
        'TailwindCSS',
        'React-hook-form',
      ],
      summary: [
        'OTP 기반 2단계 인증 도입으로 보안 강화',
        '회원 관리용 채팅에서 useRef를 활용해 불필요한 렌더링을 방지하여 성능을 최적화',
        'DAU, MAU 등 활동률 대시보드 개발 (Recharts 사용)',
        '서비스 운영을 위한 관리자 도구 개발',
      ],
      background: [
        '국민피티 백오피스는 사용자 개인정보와 센터 정보 등 민감한 데이터를 다루고 있기 때문에, 보안에 대한 우려가 있었습니다. 특히, 계정 탈취나 비밀번호 유출 등의 보안 위협에 대한 위험이 커짐에 따라, 단순한 비밀번호 입력만으로는 충분한 보안을 제공할 수 없었습니다.',
        '회원 관리용 채팅을 개발한 후, 웹소켓을 통해 하트비트(Heartbeat) 메시지를 주고받을 때마다 컴포넌트가 불필요하게 다시 렌더링되는 문제가 있었습니다.',
        '국민피티 서비스의 관리 및 운영을 위한 시스템이 부재하여 특히 회원, 센터(파트너), 콘텐츠 및 CS 관리가 비효율적이었습니다. 이에 따라 효율적인 관리와 데이터 분석을 위한 시스템 개발이 필요했습니다.',
      ],
      meaning: [
        {
          title: 'OTP 기반 2단계 인증을 통한 계정 보안 강화',
          description: [
            '사용자 계정 보호 강화를 위해 OTP 기반의 2단계 인증을 도입하였으며, 실시간으로 생성된 6자리 숫자와 비밀번호를 모두 입력해야만 계정에 접속할 수 있도록 하여 보안을 강화했습니다.',
          ],
        },
        {
          title: '실시간 채팅 시스템 구현 및 UI/비즈니스 로직 분리의 중요성',
          description: [
            '회원 관리를 위해 실시간 채팅을 구현하였고, 고객 문의에 신속하게 대응할 수 있도록 했습니다. 다만, 채팅을 구현할 때 구조적으로 UI와 비즈니스 로직을 명확히 구분하지 못해 코드의 가독성과 유지보수성이 떨어지는 아쉬움이 있었습니다. 이 경험을 바탕으로 이후의 프로젝트에서는 보다 구조적인 설계를 고민하게 되는 계기가 되었습니다.',
          ],
        },
        {
          title: 'useState 대신 useRef를 사용하여 타이머 값을 관리하도록 변경',
          description: [
            '하트비트(Heartbeat) 메시지를 주고받을 때마다 컴포넌트가 불필요하게 다시 렌더링되는 문제를 해결하기 위해, useState 대신 useRef를 사용하여 타이머 값을 관리하도록 변경했습니다. 이를 통해 불필요한 렌더링을 방지하고 성능을 최적화할 수 있었습니다.',
          ],
        },
        {
          title: '대시보드 개발을 통한 서비스 지표 시각화',
          description: [
            '대시보드를 통해 DAU, MAU 등 핵심 지표와 유저 세그먼트 별 활동률을 시각적으로 확인할 수 있게 구현하여 서비스 운영 및 마케팅 전략을 지원할 수 있도록 하였습니다.',
          ],
        },
      ],
      contributionPercentage: '60%',
      technicalContributions: [
        'OTP 기반 2단계 인증 로그인',
        '대시보드',
        '계정, 권한 관리',
        '앱 내 컨텐츠 관리',
        'CS 관리(채팅)',
        '파트너 관리',
      ],
    },
  ] as IProject[],

  PERSONAL_PROJECTS: [
    {
      id: 'friends',
      name: '친구하자',
      period: '2024.12 ~',
      description:
        '비슷한 관심사를 가진 사람들과 소통하고 친구를 추천받을 수 있는 실시간 채팅 및 커뮤니티 기반 웹 사이트',
      techStack: [
        'React',
        'TypeScript',
        'Vite',
        'React-query',
        'Recoil',
        'React-hook-form',
        'Styled Components',
      ],
      members: [
        {
          team: '프론트엔드',
          size: 3,
        },
        {
          team: '백엔드',
          size: 2,
        },
        {
          team: '디자이너',
          size: 2,
        },
      ],
      media: [
        { type: 'image', url: '../projects/friends/01.png' },
        { type: 'video', url: '../projects/friends/02.mp4' },
        { type: 'image', url: '../projects/friends/03.png' },
        { type: 'image', url: '../projects/friends/04.png' },
        { type: 'image', url: '../projects/friends/05.png' },
        { type: 'image', url: '../projects/friends/06.png' },
        { type: 'image', url: '../projects/friends/07.png' },
      ],
      summary: [
        '채팅 기능에서 아쉬운 점을 보완하고 개선하기 위해 해당 프로젝트에 참여',
        '하나의 웹소켓으로 채팅방별 메시지 수신 핸들러를 효율적으로 처리하도록 설계',
        '채팅방 친구 초대 기능에서 useTransition을 적용해 검색 시 UI가 멈추지 않도록 최적화',
        '프론트엔드 팀장으로서 컨벤션 문서화와 팀 리딩을 맡아, 팀원들과 협력하여 프로젝트를 원활하게 진행',
      ],
      background: [
        '이전에 채팅 기능을 구현한 경험이 있었지만, 비즈니스 로직과 UI 로직이 제대로 분리되지 않아 코드의 가독성과 유지보수성이 떨어지는 문제가 있었습니다. \n이 문제를 해결하기 위해 보다 효율적인 구조를 고민하게 되었고, 이를 실현하고자 채팅 관련 프로젝트에 참여하게 되었습니다.',
      ],

      meaning: [
        {
          title: '새로운 웹소켓 연결방식에 대한 고민',
          description: [
            '친구하자 프로젝트에서는 사이드바에서 참여한 채팅방 목록을 유지하면서, 각 채팅방의 새로운 메시지를 실시간으로 업데이트해야 했습니다.',
            '위 문제를 해결하기 위해 하나의 웹소켓을 통해 입장한 채팅방과 참여 중인 채팅방의 메시지를 모두 수신하는 방식을 채택했습니다. 이 과정에서 각 채팅방의 메시지를 구분하여 적절히 처리할 수 있도록 웹소켓 메시지 이벤트가 발생할 때 구독된 모든 콜백 함수가 실행되는 구조를 설계했고, 입장한 채팅방과 참여 중인 채팅방의 메시지를 동시에 수신하고 처리할 수 있도록 구현했습니다.',
          ],
        },
        {
          title:
            '채팅방 친구 초대 시 닉네임 검색 최적화: useTransition을 활용한 UI 성능 개선',
          description: [
            '채팅방에서 닉네임을 검색해 친구를 초대할 때, 서버에서 키워드에 맞는 친구 데이터를 받아오는 과정에서 UI가 잠시 멈추는 문제가 발생했으며, 이를 해결하기 위해 useTransition을 적용하여 상태 업데이트를 비동기 처리함으로써 입력 지연 없이 부드럽게 동작하도록 개선하였습니다.',
          ],
        },
        {
          title: '실시간 알림 기능의 필요성 및 개선 방향',
          description: [
            '웹소켓을 활용해 실시간 알림 기능을 구현했지만, 현재 알림이 필요한 상황은 친구 요청과 채팅방 초대 두 가지 뿐이었습니다. 참여한 채팅방의 메세지는 사이드바에서 실시간으로 업데이트되었기 때문에 "알림이 실시간으로 필요할까?" 라는 생각이 들었습니다.',
            '이에 따라 실시간 알림이 더 필요한 기능, 예를 들어 게시판 좋아요나 댓글 알림 등의 추가적인 알림 기능을 확장하는 방향으로 개선할 필요성을 느꼈고, 이를 고려한 고도화를 계획 중입니다.',
          ],
        },
        {
          title: '프로젝트 리딩 경험과 협업 개선 과정',
          description: [
            '프론트엔드 팀장으로서, 컨벤션을 문서화하고 팀을 리딩하는 역할을 맡았습니다. 초반에는 팀원들과의 의견 조율이나 프로젝트 진행 상황을 맞추는 데 어려움이 있었지만, 점차 팀원들과 협력이 잘 이루어져 프로젝트의 방향성을 잡고 원활하게 진행할 수 있었습니다.',
          ],
        },
      ],
      contributionPercentage: '60%',
      technicalContributions: [
        '소셜 로그인(구글, 네이버)',
        '사이드 바(검색, 친구 및 참여중인 채팅방)',
        '실시간 채팅(웹 소켓)',
        '실시간 알림(웹 소켓)',
        'CI/CD 구축: GitHub Actions와 Docker를 활용하여 AWS EC2에 자동 배포 환경 구성',
      ],
    },
  ] as IProject[],

  LEARNING: [
    {
      title: 'CS Sharing',
      period: '2025.08 - 2026.02',
      type: '사내 스터디',
      description: '컴퓨터 구조와 운영체제를 주차별로 학습하는 사내 CS 스터디',
      url: 'https://bookips.notion.site/CS-Sharing-246ba496d7b880ca9346e1e53c9c5b53',
      operations: [
        '매주 주제·범위 선정 후 주차별 자료 정리',
        '2명이 매주 번갈아 발표하며 문제 출제·풀이로 지식 공유',
        '컴퓨터 구조 파트: CPU 동작 원리·성능, 메모리·캐시, 보조기억장치, 입출력장치',
        '운영체제 파트: 프로세스/스레드, CPU 스케줄링, 동기화, 교착상태, 가상 메모리, 파일 시스템',
      ],
    },
    {
      title: '모던 리액트 Deep Dive',
      period: '2024.11',
      type: '스터디',
      description: '월간 CS 스터디 그룹',
      url: 'https://github.com/monthly-cs/2024-11-modern-react-deep-dive',
      operations: [
        '매주 새로운 주제 선정 및 학습',
        '매일 GitHub를 통한 학습 내용 정리 및 공유',
        '주간 미팅을 통한 지식 공유',
        '실무 적용 사례 공유 및 토론',
      ],
    },
    {
      title: '패스트캠퍼스 프론트엔드 과정',
      period: '2020.10 - 2021.04',
      type: '교육',
      description: '패스트캠퍼스 프론트엔드 과정 18기',
      url: 'https://github.com/iamkjw77/TIL',
      operations: [
        '수업 복습 및 TIL 작성',
        '수업을 바탕으로 진행되는 응용 퀴즈',
        '러버덕(타인에게 설명) 및 해커톤 진행',
        '팀원들과 역할 분담하여 팀 프로젝트 진행',
      ],
    },
  ] as ILearn[],

  CONTACT: [
    {
      icon: Mail,
      label: 'Email',
      value: 'iamkjw77@naver.com',
      href: 'mailto:iamkjw77@naver.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/iamkjw77',
      href: 'https://github.com/iamkjw77',
    },
    {
      icon: SiMedium,
      label: 'Blog',
      value: 'medium.com/@iamkjw',
      href: 'https://medium.com/@iamkjw',
    },
  ] as IContact[],
});
