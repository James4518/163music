import { IBanner } from "@/store/modules/recommend/type";
import hyRequest from "..";
import { IHotRecommendsRes } from "./type";

export function getBanners(): Promise<{ banners: IBanner[] }> {
  return hyRequest.get({
    url: "/banner"
  });
}
export function getHotRecommend(limit = 30): Promise<IHotRecommendsRes> {
  return hyRequest.get({
    url: "/personalized",
    params: {
      limit
    }
  });
}
