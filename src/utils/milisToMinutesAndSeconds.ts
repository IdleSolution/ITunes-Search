const milisToMinutesAndSeconds = (miliseconds: number): string => {
    let minutes = Math.floor(miliseconds / (1000 * 60)) % 60;
    let seconds = Math.floor(miliseconds / 1000) % 60;

    let minutesStr = minutes < 10 ? "0" + minutes : "" + minutes;
    let secondsStr = seconds < 10 ? "0" + seconds : "" + seconds;

    return `${minutesStr}:${secondsStr}`;
}

export default milisToMinutesAndSeconds;