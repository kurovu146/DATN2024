const text = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;

export function generateStreamKey(): string {
  let randomText = '';
  for (let i = 0; i < 16; i++) {
    randomText += text[Math.floor(Math.random() * text.length)];
  }
  return randomText;
}