import React, { Fragment, memo } from "react";
import type { FC, ReactNode } from "react";
import { footerIcon, footerLinks } from "../../assets/data/local";
import { FooterWrapper, LiWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}
interface FooterIconItem {
  title: string;
  link: string;
  position: string;
  active: string;
}
const FooterIcon = ({ item }: { item: FooterIconItem }) => {
  return (
    <LiWrapper key={item.title} item={item}>
      <a className="icon" href={item.link} target="_blank" rel="noreferrer"></a>
      <span className="title">{item.title}</span>
    </LiWrapper>
  );
};
const AppFooter: FC<IProps> = () => {
  return (
    <FooterWrapper className=".wrap-v1">
      <div className="icons">
        <ul>
          {footerIcon.map((item) => {
            return <FooterIcon item={item} key={item.title} />;
          })}
        </ul>
      </div>
      <div className="wrap-v2 content">
        <div className="link">
          {footerLinks.map((item) => {
            return (
              <Fragment key={item.title}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
                <span className="line">|</span>
              </Fragment>
            );
          })}
        </div>
        <p>
          不良信息举报邮箱: 51jubao@service.netease.com 客服热线：95163298
          <br />
          互联网宗教信息服务许可证：浙（2022）0000120
          增值电信业务经营许可证：浙B2-20150198 粤B2-20090191-18
          工业和信息化部备案管理系统网站
          <br />
          网易公司版权所有©1997-2024杭州乐读科技有限公司运营：浙网文[2021]
          1186-054号 浙公网安备 33010802013307号
        </p>
      </div>
    </FooterWrapper>
  );
};

export default memo(AppFooter);
