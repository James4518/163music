import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { RankMenuWrapper } from "./style";
import { IPlayList } from "@/store/modules/recommend/type";
import { formartImg } from "@/utils/formart";

interface IProps {
  children?: ReactNode;
  itemData: IPlayList;
}

const RankMenuItem: FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <RankMenuWrapper>
      <div className="top">
        <div className="left">
          <img src={formartImg(itemData.coverImgUrl, 80)} />
          <a href="/" className="sprite_cover"></a>
        </div>
        <div className="right">
          <a href={"/discover/toplist?id=" + itemData.id}>{itemData.name}</a>
          <div className="btns">
            <a href="" className="btn sprite_02 play"></a>
            <a href="" className="btn sprite_02 favour"></a>
          </div>
        </div>
      </div>
      <div className="list">
        {itemData.tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <span className="number">{index + 1}</span>
              <div className="info">
                <a href="" className="name">
                  {item.name}
                </a>
                <div className="operation">
                  <button className="btn icon_play2 play"></button>
                  <button className="btn icon_add"></button>
                  <button className="btn icon_favour"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottom">
        <a href="#/discover/ranking">查看全部 &gt;</a>
      </div>
    </RankMenuWrapper>
  );
};

export default memo(RankMenuItem);
