export function formartImg(url: string, width: number, height: number = width) {
  return url + `?param=${width}y${height}`;
}

export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + "万";
  } else {
    return count;
  }
}

export function formartTime(time: number) {
  const millisecond = time / 1000;
  const minute = Math.floor(millisecond / 60);
  const second = Math.floor(millisecond) % 60;
  const formartM = String(minute).padStart(2, "0");
  const formartS = String(second).padStart(2, "0");
  return `${formartM}: ${formartS}`;
}

export function formartSongUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
