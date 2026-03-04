import { useState, useCallback } from "react";
import { generateLottoNumbers, getNumberColor } from "../../utils/lotto";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { LOTTO, ANIMATION, EXTERNAL_LINKS } from "../../constants";
import { SlotReel } from "./SlotReel";
import {
  Container,
  Content,
  BgGradient,
  BgGlow,
  BgParticles,
  Title,
  TitleIcon,
  TitleText,
  MachineBody,
  MachineTop,
  LightRow,
  Light,
  Badge,
  ReelsContainer,
  MachineBottom,
  Display,
  ResultBall,
  ResultPlaceholder,
  PlaceholderText,
  ActionButtons,
  SpinButton,
  Spinner,
  SecondaryButtons,
  CopyButton,
  LinkButton,
  InfoText,
} from "./styles";

const LIGHT_DELAYS = [0, 0.15, 0.3, 0.45, 0.6];

export default function LottoRoulette() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [reelStates, setReelStates] = useState<number[]>(
    Array(LOTTO.REEL_COUNT).fill(0),
  );
  const [showWin, setShowWin] = useState(false);
  const { copy, isSuccess: copySuccess } = useCopyToClipboard();

  const handleCopy = useCallback(async () => {
    if (numbers.length !== LOTTO.COUNT) return;
    try {
      await copy(numbers.join(", "));
    } catch {
      /* ignore copy errors */
    }
  }, [numbers, copy]);

  const handleSpin = useCallback(() => {
    if (isSpinning) return;

    try {
      setIsSpinning(true);
      setNumbers([]);
      setReelStates(Array(LOTTO.REEL_COUNT).fill(0));
      setShowWin(false);

      const newNumbers = generateLottoNumbers();

      newNumbers.forEach((num, index) => {
        setTimeout(() => {
          setReelStates((prev) => {
            const next = [...prev];
            next[index] = num;
            return next;
          });
        }, index * ANIMATION.REEL_STAGGER);
      });

      setNumbers(newNumbers);

      const totalDuration =
        ANIMATION.REEL_STAGGER * (LOTTO.REEL_COUNT - 1) +
        ANIMATION.REEL_SPIN_DURATION +
        400;

      setTimeout(() => {
        setIsSpinning(false);
        setShowWin(true);
      }, totalDuration);
    } catch (err) {
      console.error("Spin error:", err);
      setIsSpinning(false);
    }
  }, [isSpinning]);

  const hasAnyResult = reelStates.some((n) => n > 0);
  const hasAllResults = reelStates.every((n) => n > 0);

  return (
    <Container>
      <BgGradient />
      <BgGlow />
      <BgParticles />

      <Content>
        <Title>
          <TitleIcon>🎰</TitleIcon>
          <TitleText>리얼 당첨 로또</TitleText>
        </Title>

        <MachineBody $showWin={showWin}>
          <MachineTop>
            <LightRow>
              {LIGHT_DELAYS.map((delay, i) => (
                <Light key={i} $delay={delay} />
              ))}
            </LightRow>
            <Badge>LOTTO 6/45</Badge>
            <LightRow>
              {LIGHT_DELAYS.map((delay, i) => (
                <Light key={i} $delay={delay} />
              ))}
            </LightRow>
          </MachineTop>

          <ReelsContainer>
            {Array.from({ length: LOTTO.REEL_COUNT }, (_, index) => (
              <SlotReel
                key={index}
                targetNumber={reelStates[index] || null}
                isSpinning={isSpinning}
                delay={index * ANIMATION.REEL_STAGGER}
              />
            ))}
          </ReelsContainer>

          <MachineBottom>
            <Display>
              {hasAnyResult ? (
                reelStates.map((num, i) => {
                  if (num <= 0) {
                    return (
                      <ResultPlaceholder key={`ph-${i}`}>?</ResultPlaceholder>
                    );
                  }
                  const color = getNumberColor(num);
                  return (
                    <ResultBall key={`ball-${i}-${num}`} $bgColor={color}>
                      {num}
                    </ResultBall>
                  );
                })
              ) : (
                <PlaceholderText>??? ??? ??? ??? ??? ???</PlaceholderText>
              )}
            </Display>
          </MachineBottom>
        </MachineBody>

        <ActionButtons>
          <SpinButton
            type="button"
            $disabled={isSpinning}
            onClick={handleSpin}
            disabled={isSpinning}
          >
            {isSpinning ? (
              <>
                <Spinner />릴 회전 중...
              </>
            ) : (
              <>
                <span>🎲</span>
                PULL
              </>
            )}
          </SpinButton>

          {hasAllResults && (
            <SecondaryButtons>
              <CopyButton
                type="button"
                $success={copySuccess}
                onClick={handleCopy}
                title="번호 복사"
              >
                {copySuccess ? "✓ 복사됨" : "📋 번호 복사"}
              </CopyButton>
              <LinkButton
                href={EXTERNAL_LINKS.DONGHAENG}
                target="_blank"
                rel="noopener noreferrer"
                title="동행복권 사이트"
              >
                🎫 동행복권 구매
              </LinkButton>
            </SecondaryButtons>
          )}
        </ActionButtons>

        <InfoText>한국 로또 6/45 · 1~45 중 6개 무작위 추첨</InfoText>
      </Content>
    </Container>
  );
}
