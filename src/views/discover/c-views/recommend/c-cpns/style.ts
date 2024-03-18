import { styled } from "styled-components";

export const SwiperWrapper = styled.div`
  .swiper {
    height: 285px;
    display: flex;
    position: relative;
  }
`;

export const SwiperLeft = styled.div`
  position: relative;
  width: 730px;
  .swiper-item {
    overflow: hidden;
    height: 284px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    > li {
      margin: 0 2px;
      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require("@/assets/img/banner_sprite.png")}) 3px -343px;
        cursor: pointer;
        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`;

export const SwiperRight = styled.div`
  background: url(${require("@/assets/img/download.png")});
  position: absolute;
  top: 0;
  z-index: 20;
  right: -1px;
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

export const SwiperControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;

// import styled from "styled-components";

// interface BannerProps {
//   bgImage?: string;
// }
// export const BannerWrapper = styled.div<BannerProps>`
//   background: url(${(props) => props.bgImage}) center center/6000px;
//   .banner {
//     height: 270px;
//     display: flex;
//     position: relative;
//   }
// `;

// export const BannerLeft = styled.div`
//   position: relative;
//   width: 730px;
//   .banner-list {
//     position: relative;
//   }
//   .banner-item {
//     position: absolute;
//     left: 0;
//     top: 0;
//     overflow: hidden;
//     height: 270px;
//     .image {
//       width: 100%;
//     }
//   }

//   .fade-exit {
//     opacity: 1;
//   }

//   .fade-exit-active {
//     opacity: 0.2;
//     transition: opacity 1s ease-out;
//   }

//   .dots {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: 0 auto;
//     display: flex;
//     justify-content: center;

//     > li {
//       margin: 0 2px;
//       .item {
//         display: inline-block;
//         width: 20px;
//         height: 20px;
//         background: url(${require("@/assets/img/banner_sprite.png")}) 3px -343px;
//         cursor: pointer;
//         &:hover,
//         &.active {
//           background-position: -16px -343px;
//         }
//       }
//     }
//   }
// `;

// export const BannerRight = styled.a.attrs({
//   href: "https://music.163.com/#/download",
//   target: "_blank"
// })`
//   width: 254px;
//   height: 270px;
//   background: url(${require("@/assets/img/download.png")});
// `;

// export const BannerControl = styled.div`
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 50%;
//   transform: translateY(-50%);
//   .btn {
//     position: absolute;
//     width: 37px;
//     height: 63px;
//     background-image: url(${require("@/assets/img/banner_sprite.png")});
//     background-color: transparent;
//     cursor: pointer;
//     &:hover {
//       background-color: rgba(0, 0, 0, 0.1);
//     }
//   }
//   .left {
//     left: -68px;
//     background-position: 0 -360px;
//   }
//   .right {
//     right: -68px;
//     background-position: 0 -508px;
//   }
// `;
