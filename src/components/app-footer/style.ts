import { styled } from "styled-components";
import foot_enter_new2 from "@/assets/img/foot_enter_new2.png";

interface LiWrapperProps {
  item: {
    position: string;
    active: string;
  };
}

export const FooterWrapper = styled.footer`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    right: 100px;
    margin-top: 33px;
  }
  .icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  }
  .content {
    position: relative;
    left: 100px;
    top: 50px;
    margin: 0;
    text-align: center;
    .link {
      a {
        color: #999;
      }
      .line {
        margin: 0 10px;
        color: #999;
      }
      .line:last-child {
        display: none;
      }
    }
    p {
      margin-top: 10px;
      line-height: 24px;
    }
  }
`;
export const LiWrapper = styled.li<LiWrapperProps>`
  width: 45px;
  margin-left: 90px;
  text-align: center;
  color: #666;
  a {
    /* background-image: ${(props) => `url(${props.item})`}; */
    background: url(${foot_enter_new2}) no-repeat;
    background-size: 220px 220px;
    display: inline-block;
    width: 45px;
    height: 45px;
    background-position: ${(props) => `${props.item.position}`};
  }
  a:hover {
    background-position: ${(props) => `${props.item.active}`};
  }
  .title {
    display: inline-block;
    width: 100px;
    margin-top: 10px;
    margin-left: -27.5px;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }
`;
LiWrapper.shouldForwardProp = (prop) => prop !== "item";
