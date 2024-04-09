import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { AlbumItemWrapper } from "./style";
import { IAlbum } from "@/store/modules/recommend/type";
import { formartImg } from "@/utils/formart";

interface IProps {
  children?: ReactNode;
  itemData: IAlbum;
}

const AlbumItem: FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <AlbumItemWrapper className="sprite_02">
      <div className="top">
        <img src={formartImg(itemData.picUrl, 100)} alt="" />
        <a href="" className="sprite_cover cover"></a>
        <button className="icon_play play"></button>
      </div>
      <div className="bottom">
        <span className="name">{itemData.name}</span>
        <span className="artist">{itemData.artist.name}</span>
      </div>
    </AlbumItemWrapper>
  );
};

export default memo(AlbumItem);
