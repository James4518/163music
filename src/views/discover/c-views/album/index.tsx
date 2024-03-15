import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const alblum: FC<IProps> = () => {
  return <div>alblum</div>;
};

export default memo(alblum);
