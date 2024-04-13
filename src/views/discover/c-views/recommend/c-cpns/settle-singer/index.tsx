import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { SettleWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";
import { useAppSelector, useAppShallowEqual } from "@/store";
import { formartImg } from "@/utils/formart";

interface IProps {
  children?: ReactNode;
}

const SettleSinger: FC<IProps> = () => {
  const { artists } = useAppSelector(
    (state) => ({
      artists: state.recommend.artists
    }),
    useAppShallowEqual
  );
  return (
    <SettleWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部 &gt;"
        moreLink="#/discover/artist"
      />
      <div className="list">
        {artists.map((artist) => {
          return (
            <a
              href={"/user/home?id=" + artist.id}
              className="artist"
              key={artist.id}
            >
              <img src={formartImg(artist.picUrl, 62)}></img>
              <div className="info">
                <h4>{artist.name}</h4>
                <p>{artist.alias.join(" ")}</p>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="">申请成为网易音乐人</a>
      </div>
    </SettleWrapper>
  );
};

export default memo(SettleSinger);
