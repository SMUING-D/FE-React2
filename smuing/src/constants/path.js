const BROWSER_PATH = {
  BASE: '/',
  // 경로 추가해주세요
  // App.jsx에서, path 추가할때 사용하시면 됩니다. 예시코드 9번줄
  // 질문 페이지
  FAQS: {
    BASE: '/faqs'
  },
  // 공지사항 페이지
  NOTICES: {
    BASE: '/notices'
  },
  // 프로젝트 페이지
  PROJECTS: {
    BASE: '/projects',
    DETAIL: '/projects/:id'
  },
  MEMBERS: {
    BASE: '/members',
    DETAIL: '/members/:id',
    ACTIVE: '/members/active',
    ALL: '/members/all'
  }
};

const API_PATH = {};

export { BROWSER_PATH, API_PATH };
