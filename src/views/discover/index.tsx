import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import hyRequest from "@/network";

interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  useEffect(() => {
    const res = hyRequest.get({
      url: "/banner"
    });
    console.log(res);
  });
  return <div>Discover</div>;
};

export default memo(Discover);
