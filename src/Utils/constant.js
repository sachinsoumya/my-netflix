export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
export const USER_ICON =
  "https://occ-0-8284-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXSR25u2XRPTi6AgkfJ4w3FcrNCA316cdzfpppcKJObwDgcSvlN3UJOZ1x-rktlH2aRLsZCgsUwhCso2YeWQDPwDoRFGYsE.png?r=85b";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer"+" "+process.env.REACT_APP_TMDB_KEY ,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES_LIST = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPEN_AI_KEY = "sk-proj-4BMKxJxOS5wVkLPtmRAJT3BlbkFJTDdYO9QWoZNWDn9us7vH"
