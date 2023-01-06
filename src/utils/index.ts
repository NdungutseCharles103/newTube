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
        .filter((v, i) => v !== '00' || i > 0)
        .join(':');
    return time;
}
