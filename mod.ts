const emojis: { [key: string]: string } = {
  "handshake": "🤝",
};

export function toUtf8(text: string): string {
  return text.replace(/:(\w+):/gi, (match, name) => {
    return emojis[name] || match;
  });
}
