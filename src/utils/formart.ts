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
