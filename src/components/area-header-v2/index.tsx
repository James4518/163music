import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { HeaderV2Wrapper } from "./style";

interface IProps {
  children?: ReactNode;
  title: string;
  moreText?: string;
  moreLink: string;
}

const AreaHeaderV2: FC<IProps> = (props) => {
  const { title, moreText, moreLink } = props;
  return (
    <HeaderV2Wrapper>
      <h3>{title}</h3>
      <a href={moreLink}>{moreText}</a>
    </HeaderV2Wrapper>
  );
};

export default memo(AreaHeaderV2);
