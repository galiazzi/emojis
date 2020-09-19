const emojis: { [key: string]: string } = {
  "handshake": "🤝",
  "clap": "👏",
  "thumbsup": "👍'",
  "thumbsdown": "👎",
  "punch": "👊",
  "grinning": "😃",
  "grin": "😄",
  "joy": "😂",
  "face_with_raised_eyebrow": "🤨"
};

export function toUtf8(text: string): string {
  return text.replace(/:(\w+):/gi, (match, name) => {
    return emojis[name] || match;
  });
}
