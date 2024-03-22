import { IHotRecommends } from "@/store/modules/recommend/type";

export interface IHotRecommendsRes {
  hasTaste: boolean;
  code: number;
  category: number;
  result: IHotRecommends[];
}
