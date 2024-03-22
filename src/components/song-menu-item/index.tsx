import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { IHotRecommends } from "@/store/modules/recommend/type";
import { SongItemWrapper } from "./style";
import { formartImg, formatCount } from "@/utils/formart";

interface IProps {
  children?: ReactNode;
  itemData: IHotRecommends;
}

const SongMenuItem: FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <SongItemWrapper>
      <div className="top">
        <img src={formartImg(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <p className="bottom">{itemData.name}</p>
    </SongItemWrapper>
  );
};

export default memo(SongMenuItem);
