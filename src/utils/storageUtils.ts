export const localStorageNames = {
  token: "token",
  role: "role",
  photo: "photo",
};

export const getExistedOne = (...args: string[] | number[] | object[]) => {
  const existed = args.find((val) => val);
  return existed;
};

export const setLocalStorage = (
  key: string,
  value: object | number | string | boolean
) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  try {
    return item ? JSON.parse(item) : null;
  } catch (e: unknown) {
    console.error(e);
    return item;
  }
};

export const setSessionStorage = (
  key: string,
  value: object | number | string | boolean
) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = (key: string) => {
  if (!sessionStorage.getItem(key)) return null;
  return JSON.parse(sessionStorage.getItem(key) as string);
};
