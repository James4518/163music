import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { LoginWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const UserLogin: FC<IProps> = () => {
  return (
    <LoginWrapper className="sprite_02">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <button className="sprite_02">用户登录</button>
    </LoginWrapper>
  );
};

export default memo(UserLogin);
