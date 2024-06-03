export const getRandomColor = () => {
  const getRandomHex = () => {
    const hex = Math.floor(Math.random() * 256).toString(16);
    return hex.padStart(2, "0");
  };

  const red = getRandomHex();
  const green = getRandomHex();
  const blue = getRandomHex();

  return `#${red}${green}${blue}`;
};
