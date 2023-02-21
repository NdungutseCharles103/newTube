export const formatTime = (input: number) => {
  const decDays = input / 86400;
  const days = Math.floor(decDays);
  const decH = (decDays - days) * 24;
  const hours = Math.floor(decH);
  const decMin = (decH - hours) * 60;
  const minutes = Math.floor(decMin);
  const decSec = (decMin - minutes) * 60;
  const seconds = Math.floor(decSec);
  const time = [hours, minutes, seconds]
    .map((v) => (v < 10 ? `0${v}` : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
  return time;
};

export const formatNumber = (input: number) => {
  // format number as 1.2K, 1.2M, 1.2B
  if (input < 1000) {
    return input;
  }
  const exp = Math.floor(Math.log(input) / Math.log(1000));
  const suffix = "KMB"[exp - 1];
  return `${(input / 1000 ** exp).toFixed(1)}${suffix}`;
};
