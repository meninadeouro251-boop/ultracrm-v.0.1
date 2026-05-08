type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

function getMinLevel(): LogLevel {
  if (import.meta.env.PROD) return 'warn';
  return 'debug';
}

function shouldLog(level: LogLevel): boolean {
  return LOG_LEVELS[level] >= LOG_LEVELS[getMinLevel()];
}

const logger = {
  debug(...args: unknown[]) {
    if (shouldLog('debug')) console.debug('[DEBUG]', ...args);
  },
  info(...args: unknown[]) {
    if (shouldLog('info')) console.info('[INFO]', ...args);
  },
  warn(...args: unknown[]) {
    if (shouldLog('warn')) console.warn('[WARN]', ...args);
  },
  error(...args: unknown[]) {
    if (shouldLog('error')) console.error('[ERROR]', ...args);
  },
};

export default logger;
