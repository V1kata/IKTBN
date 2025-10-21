function randomPasswordGenerator(length = 12, options = {}) {
  const opt = { lowercase: true, uppercase: true, numbers: true, symbols: true, ...options };
  const chars = [
    opt.lowercase && 'abcdefghijklmnopqrstuvwxyz',
    opt.uppercase && 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    opt.numbers && '0123456789',
    opt.symbols && '!@#$%^&*()_+-=[]{}|;:,.<>?'
  ].filter(Boolean).join('');
  
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}