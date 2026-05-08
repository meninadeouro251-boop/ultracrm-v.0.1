import { useEffect, useCallback } from 'react';

/**
 * Hook to handle global keyboard shortcuts.
 *
 * @param key The key to listen for (e.g., '/', 'Escape')
 * @param callback The function to call when the key is pressed
 */
export function useKeyboardShortcut(key: string, callback: () => void) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Don't trigger if the user is typing in an input, textarea, or contentEditable element
      const target = event.target as HTMLElement;
      const isTyping =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      if (event.key === key && !isTyping) {
        event.preventDefault();
        callback();
      }
    },
    [key, callback]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}
