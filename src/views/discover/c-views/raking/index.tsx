import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Raking: FC<IProps> = () => {
  return <div>raking</div>;
};

export default memo(Raking);
