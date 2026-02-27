import { memo } from "react";
import { getNumberColor } from "../../utils/lotto";
import { REEL, ANIMATION } from "../../constants";
import type { SlotReelProps } from "../../types";
import {
  ReelWrapper,
  ReelFrame,
  ReelWindow,
  ReelStrip,
  ReelCell,
  ReelCellNum,
} from "./styles";

const REEL_CELLS = Array.from(
  { length: 45 * REEL.NUM_REPEATS },
  (_, i) => (i % 45) + 1,
);

function SlotReelComponent({ targetNumber, isSpinning, delay }: SlotReelProps) {
  const stopIndex =
    REEL.STOP_OCCURRENCE * 45 + Math.max(0, (targetNumber ?? 1) - 1);
  const finalTranslate = -(stopIndex * REEL.CELL_HEIGHT);

  return (
    <ReelWrapper>
      <ReelFrame>
        <ReelWindow>
          <ReelStrip
            $isSpinning={Boolean(isSpinning && targetNumber)}
            $finalTranslate={finalTranslate}
            $duration={ANIMATION.REEL_SPIN_DURATION}
            $delay={delay}
          >
            {REEL_CELLS.map((num, i) => (
              <ReelCell key={i} $bgColor={getNumberColor(num)}>
                <ReelCellNum>{num}</ReelCellNum>
              </ReelCell>
            ))}
          </ReelStrip>
        </ReelWindow>
      </ReelFrame>
    </ReelWrapper>
  );
}

export const SlotReel = memo(SlotReelComponent);
