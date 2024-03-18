import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import Swiper from "./c-cpns/swiper";
import { fetchBannersDataAction } from "@/store/modules/recommend";
import { useAppDispatch } from "@/store";

interface IProps {
  children?: ReactNode;
}

const Recommand: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBannersDataAction());
  }, []);
  return (
    <div>
      <Swiper />
    </div>
  );
};

export default memo(Recommand);
