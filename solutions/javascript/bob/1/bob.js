//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (silence(message)) return 'Fine. Be that way!';
  if (yelling(message) && question(message)) return "Calm down, I know what I'm doing!";
  if (yelling(message)) return 'Whoa, chill out!';
  if (question(message)) return 'Sure.';
  return 'Whatever.';
};

const question = (message) => {
  return message.trim().endsWith('?');
}

const yelling = (message) => {
  const hasLetters = /[a-zA-Z]/.test(message);
  return hasLetters && message === message.toUpperCase();
}

const silence = (message) => {
  return message === null || message.trim().length === 0;
}
