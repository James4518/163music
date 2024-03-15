import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { NavWrapper } from "./style";
import { discoverMenu } from "@/assets/data/local";
import { NavLink } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

const Navbar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="wrap-v1">
        <div className="nav">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.link}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </NavWrapper>
  );
};

export default memo(Navbar);
