import { useState, useCallback } from 'react';
import { ANIMATION } from '../constants';

/**
 * 클립보드 복사 + 피드백 상태 훅
 */
export function useCopyToClipboard() {
  const [isSuccess, setIsSuccess] = useState(false);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), ANIMATION.COPY_FEEDBACK_DURATION);
      return true;
    } catch {
      // fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (success) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), ANIMATION.COPY_FEEDBACK_DURATION);
      }
      return success;
    }
  }, []);

  return { copy, isSuccess };
}
