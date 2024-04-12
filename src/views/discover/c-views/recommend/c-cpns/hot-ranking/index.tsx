import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { HotRankWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import RankMenuItem from "@/components/rank-menu-item";
import { useAppSelector, useAppShallowEqual } from "@/store";

interface IProps {
  children?: ReactNode;
}

const HotRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings
    }),
    useAppShallowEqual
  );
  return (
    <HotRankWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return <RankMenuItem itemData={item} key={item.id} />;
        })}
      </div>
    </HotRankWrapper>
  );
};

export default memo(HotRanking);
