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
  SiCypress,
  SiDocker,
  SiJavascript,
  SiMaterialdesign,
  SiMedium,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiRecoil,
  SiRedux,
  SiReduxsaga,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

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
      ],
    },
    {
      category: 'Cloud / DevOps',
      skills: [
        { name: 'AWS EC2', icon: SiAmazonec2, color: '#e87909' },
        { name: 'Docker', icon: SiDocker, color: '#1f6dff' },
      ],
    },
  ] as ISkillWithCategory[],

  EXPERIENCES: [
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
        { type: 'video', url: './projects/wellnessbook/backoffice/01.mp4' },
        { type: 'image', url: './projects/wellnessbook/backoffice/02.png' },
        { type: 'image', url: './projects/wellnessbook/backoffice/03.png' },
        { type: 'image', url: './projects/wellnessbook/backoffice/04.png' },
        { type: 'image', url: './projects/wellnessbook/backoffice/05.png' },
        { type: 'image', url: './projects/wellnessbook/backoffice/06.png' },
        { type: 'image', url: './projects/wellnessbook/backoffice/07.png' },
        { type: 'image', url: './projects/wellnessbook/backoffice/08.png' },
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
        { type: 'image', url: './projects/wellnessbook/webview/01.png' },
        { type: 'image', url: './projects/wellnessbook/webview/02.png' },
        { type: 'image', url: './projects/wellnessbook/webview/03.png' },
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
        { type: 'image', url: './projects/kookminpt/web/01.png' },
        { type: 'image', url: './projects/kookminpt/web/02.png' },
        { type: 'image', url: './projects/kookminpt/web/03.png' },
        { type: 'image', url: './projects/kookminpt/web/04.jpg' },
        { type: 'image', url: './projects/kookminpt/web/05.png' },
        { type: 'image', url: './projects/kookminpt/web/06.png' },
        { type: 'image', url: './projects/kookminpt/web/07.png' },
        { type: 'image', url: './projects/kookminpt/web/08.png' },
        { type: 'image', url: './projects/kookminpt/web/08.png' },
        { type: 'image', url: './projects/kookminpt/web/10.png' },
        { type: 'image', url: './projects/kookminpt/web/11.png' },
        { type: 'image', url: './projects/kookminpt/web/12.png' },
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
        { type: 'image', url: './projects/kookminpt/partner/01.png' },
        { type: 'image', url: './projects/kookminpt/partner/02.jpg' },
        { type: 'image', url: './projects/kookminpt/partner/03.jpeg' },
        { type: 'image', url: './projects/kookminpt/partner/04.jpg' },
        { type: 'image', url: './projects/kookminpt/partner/05.jpg' },
        { type: 'image', url: './projects/kookminpt/partner/06.jpg' },
        { type: 'image', url: './projects/kookminpt/partner/07.jpg' },
        { type: 'image', url: './projects/kookminpt/partner/08.jpg' },
        { type: 'image', url: './projects/kookminpt/partner/09.jpg' },
        { type: 'image', url: './projects/kookminpt/partner/10.jpg' },
        { type: 'image', url: './projects/kookminpt/partner/11.jpg' },
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
        { type: 'image', url: './projects/kookminpt/webview/01.png' },
        { type: 'image', url: './projects/kookminpt/webview/02.png' },
        { type: 'image', url: './projects/kookminpt/webview/03.png' },
        { type: 'image', url: './projects/kookminpt/webview/04.png' },
        { type: 'image', url: './projects/kookminpt/webview/05.png' },
        { type: 'image', url: './projects/kookminpt/webview/06.png' },
        { type: 'image', url: './projects/kookminpt/webview/07.png' },
        { type: 'image', url: './projects/kookminpt/webview/08.png' },
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
      name: '국민피티 어드민',
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
        '회원 관리를 위한 실시간 채팅 기능 개발',
        'DAU, MAU 등 활동률 대시보드 개발 (Recharts 사용)',
        '서비스 운영을 위한 관리자 도구 개발',
      ],
      background: [
        '국민피티 백오피스는 사용자 개인정보와 센터 정보 등 민감한 데이터를 다루고 있기 때문에, 보안에 대한 우려가 있었습니다. 특히, 계정 탈취나 비밀번호 유출 등의 보안 위협에 대한 위험이 커짐에 따라, 단순한 비밀번호 입력만으로는 충분한 보안을 제공할 수 없었습니다.',
        '초기에는 고객 서비스(CS) 관리를 위한 시스템이 부족하여 이메일이나 전화 등의 방법으로 고객을 대응해야 했습니다. 이로 인해 고객 대응속도가 느리고, 피드백을 실시간으로 처리하는 데 어려움이 있었습니다.',
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
            '고객 서비스(CS) 관리를 위해 실시간으로 소통할 수 있는 채팅 시스템을 구현하였고, 고객 문의에 신속하게 대응할 수 있도록 했습니다. 다만, 채팅을 구현할 때 구조적으로 UI와 비즈니스 로직을 명확히 구분하지 못해 코드의 가독성과 유지보수성이 떨어지는 아쉬움이 있었습니다. 이 경험을 바탕으로 이후의 프로젝트에서는 보다 구조적인 설계를 고민하게 되는 계기가 되었습니다.',
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
      link: 'https://friends77.com',
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
        { type: 'video', url: './projects/friends/01.mp4' },
        { type: 'image', url: './projects/friends/02.png' },
        { type: 'image', url: './projects/friends/03.png' },
        { type: 'image', url: './projects/friends/04.png' },
        { type: 'image', url: './projects/friends/05.png' },
        { type: 'image', url: './projects/friends/06.png' },
        { type: 'image', url: './projects/friends/07.png' },
      ],
      summary: [
        '채팅 기능에서 아쉬운 점을 보완하고 개선하기 위해 해당 프로젝트에 참여',
        '하나의 웹소켓으로 채팅방별 메시지 수신 핸들러를 효율적으로 처리하도록 설계',
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
