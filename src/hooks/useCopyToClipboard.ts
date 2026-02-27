import { useState, useCallback } from 'react';
import { ANIMATION } from '../constants';

/**
 * 클립보드 복사 + 피드백 상태 훅
 */
export function useCopyToClipboard() {
  const [isSuccess, setIsSuccess] = useState(false);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), ANIMATION.COPY_FEEDBACK_DURATION);
        return true;
      }
    } catch {
      /* clipboard API failed, try fallback */
    }

    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';
      textarea.setAttribute('readonly', '');
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (success) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), ANIMATION.COPY_FEEDBACK_DURATION);
      }
      return success;
    } catch {
      return false;
    }
  }, []);

  return { copy, isSuccess };
}
