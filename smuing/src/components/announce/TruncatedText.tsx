export const TruncatedText: React.FC<{ text: string; maxLength: number }> = ({ text, maxLength }) => {
  return text.length > maxLength ? <>{text.slice(0, maxLength)}...</> : text
}
