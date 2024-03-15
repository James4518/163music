import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
import headerTitles, { IHeaderTitles } from "@/assets/data/headerTitles";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  const showItem = (item: IHeaderTitles) => {
    if (item.type === "path") {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      );
    }
  };
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div className="search">
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="anthor">
            <a href="#">创作者中心</a>
          </div>
          <div className="login">
            <a href="#">登录</a>
          </div>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
