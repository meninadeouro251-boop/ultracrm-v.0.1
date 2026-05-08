export function postParent(event: string, data?: any) {
  try {
    window.parent?.postMessage(
      `ultra-widget:${JSON.stringify({ event, data })}`,
      '*',
    );
  } catch {
    // silenciosamente ignora erros de serialização/postMessage
  }
}
