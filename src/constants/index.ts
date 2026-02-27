/** 앱 전역 상수 */

export const LOTTO = {
  MIN: 1,
  MAX: 45,
  COUNT: 6,
  REEL_COUNT: 6,
} as const;

export const ANIMATION = {
  REEL_SPIN_DURATION: 800,
  REEL_STAGGER: 180,
  COPY_FEEDBACK_DURATION: 2000,
} as const;

export const REEL = {
  CELL_HEIGHT: 56,
  NUM_REPEATS: 25,
  STOP_OCCURRENCE: 20,
} as const;

export const EXTERNAL_LINKS = {
  DONGHAENG: 'https://www.dhlottery.co.kr/',
} as const;
