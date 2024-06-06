export const formatDuration = (durationInMinutes) => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  const hoursStr = hours > 0 ? `${hours}h ` : "";
  const minutesStr = `${minutes}min`;

  return `${hoursStr}${minutesStr}`;
};
