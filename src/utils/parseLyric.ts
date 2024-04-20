export interface ILyric {
  time: number;
  text: string;
}

const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})]/;
export function parseLyric(lyricStr: string) {
  const lines: string[] = lyricStr.split("\n");
  const lyric: ILyric[] = [];
  for (const line of lines) {
    const result = timeRegExp.exec(line);
    if (!result) continue;
    const minute = Number(result[1]) * 60 * 1000;
    const second = Number(result[2]) * 1000;
    const millisecond =
      result[3].length === 2 ? Number(result[3]) * 10 : Number(result[2]);
    const time = minute + second + millisecond;
    const text = line.replace(timeRegExp, "");
    console.log(time, text);
    lyric.push({ time, text });
  }
  return lyric;
}
