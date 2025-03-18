export const base64ToNormalImage = (base64: string) => {
  return `data:image/png;base64,${base64}`;
};
