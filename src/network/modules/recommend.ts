import { IBanner } from "@/store/modules/recommend/type";
import hyRequest from "..";

export function getBanners(): Promise<{ banners: IBanner[] }> {
  return hyRequest.get({
    url: "/banner"
  });
}
