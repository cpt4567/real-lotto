/**
 * 한국 로또 6/45 번호 생성 유틸리티
 * 1~45 중 중복 없이 6개 선택
 */

const LOTTO_MIN = 1;
const LOTTO_MAX = 45;
const LOTTO_COUNT = 6;

/** Fisher-Yates 셔플 기반 무작위 번호 생성 */
export function generateLottoNumbers(): number[] {
  const pool = Array.from({ length: LOTTO_MAX - LOTTO_MIN + 1 }, (_, i) => LOTTO_MIN + i);
  
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  
  return pool.slice(0, LOTTO_COUNT).sort((a, b) => a - b);
}

/** 번호별 색상 (한국 로또 공식 구간 색상) */
export function getNumberColor(num: number): string {
  const n = Math.floor(Number(num));
  if (!Number.isFinite(n) || n < 1 || n > 45) return '#FBC02D';
  if (n <= 9) return '#FBC02D';   // 1-9: 노랑
  if (n <= 19) return '#1976D2';  // 10-19: 파랑
  if (n <= 29) return '#D32F2F';  // 20-29: 빨강
  if (n <= 39) return '#212121';  // 30-39: 검정
  return '#388E3C';                // 40-45: 초록
}
