import hyRequest from "../..";
import { ISongRes, ILyricRes } from "./type";
export function getSongDetail(ids: number): Promise<ISongRes> {
  return hyRequest.get({
    url: "/song/detail",
    params: {
      ids
    }
  });
}

export function getSongLyric(id: number): Promise<ILyricRes> {
  return hyRequest.get({
    url: "/lyric",
    params: {
      id
    }
  });
}
