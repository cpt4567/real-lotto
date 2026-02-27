# 🎰 리얼 당첨 로또

슬롯머신 스타일의 한국 로또 6/45 번호 생성기입니다.

## 특징

- **슬롯머신 UI**: 6개의 릴이 순차 회전하며 번호 공개
- **한국 로또 규칙**: 1~45 중 6개 무작위 추첨
- **공식 색상**: 번호 구간별 색상 (노랑/파랑/빨강/검정/초록)
- **번호 복사**: 클립보드 복사 + 동행복권 링크

## 실행

```bash
npm install
npm run dev
```

## 기술 스택

- React 18 + TypeScript
- Vite 5 + styled-components

## GitHub Pages 배포

1. **GitHub 저장소 생성**
   - [GitHub](https://github.com/new)에서 새 저장소 생성
   - 저장소 이름: `real-lotto` (다른 이름 사용 시 `vite.config.ts`의 `base` 수정)

2. **원격 저장소 연결 및 푸시**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/real-lotto.git
   git push -u origin main
   ```

3. **GitHub Pages 설정**
   - 저장소 → Settings → Pages
   - Source: **GitHub Actions**
   - 저장 후 자동 배포 (첫 푸시 후 1~2분 소요)

4. **배포 URL**
   - `https://YOUR_USERNAME.github.io/real-lotto/`
