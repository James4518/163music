export function formartImg(url: string, width: number, height: number = width) {
  return url + `?param=${width}x${height}`;
}
