import styled, { keyframes } from 'styled-components';
import { theme } from '../../theme';

const bgShift = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.95; }
`;

const particleFloat = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(-50px, -50px); }
`;

const iconFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

const titleShine = keyframes`
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
`;

const lightBlink = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); filter: brightness(1); }
  50% { opacity: 0.4; transform: scale(0.9); filter: brightness(0.7); }
`;

const winPulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 0 8px ${theme.colors.gold}, 0 0 80px rgba(230, 184, 0, 0.2);
  }
  50% { 
    box-shadow: 0 0 0 8px ${theme.colors.gold}, 0 0 120px rgba(230, 184, 0, 0.35);
  }
`;

const reelSpin = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(var(--final-translate)); }
`;

const ballReveal = keyframes`
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

/* Layout */
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

/* Background */
export const BgGradient = styled.div`
  position: fixed;
  inset: 0;
  background: 
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(120, 80, 200, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 20%, rgba(230, 184, 0, 0.08) 0%, transparent 40%),
    radial-gradient(ellipse 60% 40% at 20% 80%, rgba(230, 100, 80, 0.06) 0%, transparent 40%),
    linear-gradient(180deg, #0a0a12 0%, #12121f 30%, #0d0d18 70%, #0a0a12 100%);
  z-index: 0;
  animation: ${bgShift} 15s ease-in-out infinite;
`;

export const BgGlow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(230, 184, 0, 0.03) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
`;

export const BgParticles = styled.div`
  position: fixed;
  inset: 0;
  background-image: 
    radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.15), transparent),
    radial-gradient(2px 2px at 40% 70%, rgba(255,255,255,0.1), transparent),
    radial-gradient(2px 2px at 60% 20%, rgba(255,255,255,0.12), transparent),
    radial-gradient(2px 2px at 80% 60%, rgba(255,255,255,0.08), transparent);
  background-size: 200px 200px;
  animation: ${particleFloat} 20s linear infinite;
  pointer-events: none;
  z-index: 0;
`;

/* Title */
export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const TitleIcon = styled.span`
  font-size: 2.5rem;
  filter: drop-shadow(0 0 20px rgba(255, 200, 50, 0.6));
  animation: ${iconFloat} 3s ease-in-out infinite;
`;

export const TitleText = styled.span`
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #fff 0%, #f5d547 30%, #f5d547 70%, #fff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  animation: ${titleShine} 4s linear infinite;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

/* Slot Machine Body */
export const MachineBody = styled.div<{ $showWin: boolean }>`
  position: relative;
  background: 
    linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 15%),
    linear-gradient(180deg, #2d2d44 0%, #1e1e32 30%, #15152a 70%, #1a1a2e 100%);
  border-radius: ${theme.borderRadius.xxl}px;
  padding: 2rem;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.15),
    0 0 0 4px ${theme.colors.gold},
    0 0 0 6px rgba(230, 184, 0, 0.3),
    0 0 60px rgba(230, 184, 0, 0.15),
    ${theme.shadows.card},
    inset 0 2px 0 rgba(255,255,255,0.2),
    inset 0 -2px 0 rgba(0,0,0,0.3);
  transition: box-shadow 0.6s ease;
  ${({ $showWin }) => $showWin && `animation: ${winPulse} 4s ease-in-out infinite;`}

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

export const MachineTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const LightRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Light = styled.span<{ $delay: number }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${theme.colors.gold};
  box-shadow: 0 0 20px ${theme.colors.gold},
              0 0 40px rgba(230, 184, 0, 0.6),
              inset 0 0 6px rgba(255, 255, 255, 0.8);
  animation: ${lightBlink} 1.2s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

export const Badge = styled.span`
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.25em;
  color: ${theme.colors.gold};
  padding: 0.4rem 1rem;
  border: 2px solid ${theme.colors.gold};
  border-radius: ${theme.borderRadius.sm}px;
  background: rgba(230, 184, 0, 0.08);
  box-shadow: ${theme.shadows.goldGlow}, inset 0 1px 0 rgba(255, 255, 255, 0.2);
`;

/* Reels */
export const ReelsContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  padding: 1rem;
  background: linear-gradient(180deg, #0a0a12 0%, #080812 100%);
  border-radius: ${theme.borderRadius.xl}px;
  border: 3px solid ${theme.colors.dark.border};
  box-shadow: 
    inset 0 6px 30px rgba(0, 0, 0, 0.8),
    inset 0 0 0 1px rgba(255,255,255,0.15),
    0 4px 0 rgba(0,0,0,0.3);

  @media (max-width: 480px) {
    gap: 0.4rem;
    padding: 0.75rem;
  }
`;

export const ReelWrapper = styled.div`
  flex: 1;
  min-width: 52px;

  @media (max-width: 480px) {
    min-width: 42px;
  }
`;

export const ReelFrame = styled.div`
  background: linear-gradient(90deg, #1e1e32 0%, #252538 20%, #2a2a3e 50%, #252538 80%, #1e1e32 100%);
  border-radius: ${theme.borderRadius.md}px;
  padding: 5px;
  border: 2px solid ${theme.colors.dark.borderLight};
  box-shadow: ${theme.shadows.inset}, inset 0 -1px 0 rgba(255, 255, 255, 0.05), 0 2px 0 rgba(0,0,0,0.2);
`;

export const ReelWindow = styled.div`
  height: 56px;
  overflow: hidden;
  border-radius: ${theme.borderRadius.sm}px;
  background: #050508;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6);

  @media (max-width: 480px) {
    height: 48px;
  }
`;

export const ReelStrip = styled.div<{
  $isSpinning: boolean;
  $finalTranslate: number;
  $duration: number;
  $delay: number;
}>`
  display: flex;
  flex-direction: column;
  will-change: transform;
  --final-translate: ${({ $finalTranslate }) => $finalTranslate}px;

  ${({ $isSpinning, $duration, $delay }) =>
    $isSpinning &&
    `
    animation: ${reelSpin} ${$duration}ms cubic-bezier(0.17, 0.67, 0.12, 0.99) ${$delay}ms forwards;
  `}
`;

export const ReelCell = styled.div<{ $bgColor: string }>`
  height: 56px;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  font-weight: 800;
  color: white;
  background-color: ${({ $bgColor }) => $bgColor};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    height: 48px;
    min-height: 48px;
    font-size: 1.1rem;
  }
`;

export const ReelCellNum = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
`;

/* Result Display */
export const MachineBottom = styled.div`
  margin-top: 1.25rem;
`;

export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem;
  background: linear-gradient(180deg, #0a0a12 0%, #080812 100%);
  border-radius: ${theme.borderRadius.lg}px;
  border: 2px solid ${theme.colors.dark.border};
  min-height: 64px;
  box-shadow: inset 0 4px 20px rgba(0, 0, 0, 0.6), 0 2px 0 rgba(0,0,0,0.2);
`;

export const ResultBall = styled.div<{
  $bgColor: string;
  $animationDelay: number;
}>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 800;
  color: white;
  background-color: ${({ $bgColor }) => $bgColor};
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.4),
    0 4px 20px ${({ $bgColor }) => $bgColor}40,
    inset 0 2px 6px rgba(255, 255, 255, 0.3);
  animation: ${ballReveal} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)
    ${({ $animationDelay }) => $animationDelay}s backwards;

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }
`;

export const ResultPlaceholder = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.dark.textMuted};
  background: linear-gradient(180deg, #1a1a2e 0%, #12121f 100%);
  border: 2px dashed ${theme.colors.dark.borderLight};

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }
`;

export const PlaceholderText = styled.span`
  font-size: 1.1rem;
  color: ${theme.colors.dark.text};
  letter-spacing: 0.25em;
  font-weight: 600;
`;

/* Buttons */
export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SpinButton = styled.button<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1.1rem 2.75rem;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: 0.25em;
  color: #1a1a2e;
  background: linear-gradient(180deg, #f5d547 0%, #e6b800 30%, #c99a00 70%, #e6b800 100%);
  border: none;
  border-radius: ${theme.borderRadius.lg}px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.85 : 1)};
  box-shadow:
    0 6px 0 ${theme.colors.goldShadow},
    0 8px 30px rgba(0, 0, 0, 0.4),
    inset 0 2px 0 rgba(255, 255, 255, 0.5);
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    transform: translateY(2px);
    box-shadow:
      0 4px 0 ${theme.colors.goldShadow},
      0 6px 25px rgba(0, 0, 0, 0.35),
      inset 0 2px 0 rgba(255, 255, 255, 0.5);
  }

  &:active:not(:disabled) {
    transform: translateY(5px);
    box-shadow:
      0 1px 0 ${theme.colors.goldShadow},
      0 3px 15px rgba(0, 0, 0, 0.3),
      inset 0 2px 0 rgba(255, 255, 255, 0.2);
  }
`;

export const Spinner = styled.span`
  width: 22px;
  height: 22px;
  border: 3px solid rgba(26, 26, 46, 0.2);
  border-top-color: #1a1a2e;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

export const SecondaryButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1.4rem;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.md}px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
`;

export const CopyButton = styled(BaseButton)<{ $success: boolean }>`
  color: ${({ $success }) => ($success ? 'white' : '#1a1a2e')};
  background: ${({ $success }) =>
    $success
      ? `linear-gradient(180deg, ${theme.colors.successLight} 0%, ${theme.colors.success} 100%)`
      : 'linear-gradient(180deg, #fff 0%, #f0f0f0 100%)'};
  border: 2px solid
    ${({ $success }) => ($success ? theme.colors.success : 'rgba(255, 255, 255, 0.6)')};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #fff;
    border-color: ${theme.colors.gold};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(230, 184, 0, 0.3);
  }
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1.4rem;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.md}px;
  color: ${theme.colors.gold};
  background: transparent;
  border: 2px solid ${theme.colors.gold};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;

  &:hover {
    background: rgba(230, 184, 0, 0.12);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(230, 184, 0, 0.2);
  }
`;

export const InfoText = styled.p`
  font-size: 0.8125rem;
  color: ${theme.colors.dark.text};
`;
