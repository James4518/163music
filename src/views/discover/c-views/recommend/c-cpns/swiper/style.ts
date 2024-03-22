import { styled } from "styled-components";

export const SwiperWrapper = styled.div`
  height: 284px;
  position: relative;
  display: flex;
  justify-content: center;
  .slick-next {
    right: -273px;
  }
`;
export const SwiperRight = styled.div`
  background: url(${require("@/assets/img/download.png")});
  position: relative;
  left: -1px;
  width: 254px;
  height: 284px;
  a {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background-position: 0 9999px;
    text-indent: -9999px;
  }
  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }
  .shadow {
    width: 20px;
    display: block;
    position: absolute;
    top: -1px;
    height: 285px;
  }
  .shadowL {
    left: -20px;
    background-position: -1px 0;
  }
  .shadowR {
    right: -20px;
    background-position: -20px 0;
  }
`;
