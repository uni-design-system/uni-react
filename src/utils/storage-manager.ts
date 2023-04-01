export interface StorageManager<T> {
  type: 'cookie' | 'localStorage';
  ssr?: boolean;
  get(init?: T): T | undefined;
  set(value: T): void;
}

export function createLocalStorageManager<T>(key: string): StorageManager<T> {
  return {
    ssr: false,
    type: 'localStorage',
    get(init?) {
      if (!globalThis?.document) return init;
      let value: any;
      try {
        value = localStorage.getItem(key) || init;
      } catch (e) {
        // no op
      }

      return JSON.parse(value) || init;
    },
    set(value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        // no op
      }
    },
  };
}

// Usage
// export const localStorageManager = createLocalStorageManager(STORAGE_KEY);

function parseCookie<T>(cookie: string, key: string): T | undefined {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  return match?.[2] as T | undefined;
}

export function createCookieStorageManager<T>(key: string, cookie?: string): StorageManager<T> {
  return {
    ssr: !!cookie,
    type: 'cookie',
    get(init?): T | undefined {
      if (cookie) return parseCookie(cookie, key);
      if (!globalThis?.document) return init;
      return parseCookie(document.cookie, key) || init;
    },
    set(value) {
      document.cookie = `${key}=${value}; max-age=31536000; path=/`;
    },
  };
}

// Usage
// export const cookieStorageManager = createCookieStorageManager(STORAGE_KEY);

// export const cookieStorageManagerSSR = (cookie: string) => createCookieStorageManager(STORAGE_KEY, cookie);
