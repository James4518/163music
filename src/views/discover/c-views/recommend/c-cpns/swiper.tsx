import React, {
  ElementRef,
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import type { FC, ReactNode } from "react";
import { SwiperControl, SwiperLeft, SwiperRight, SwiperWrapper } from "./style";
import { Carousel } from "antd";
import { useAppSelector, useAppShallowEqual } from "@/store";
import classNames from "classnames";

interface IProps {
  children?: ReactNode;
}

const Swiper: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    useAppShallowEqual
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImg, setBgImg] = useState("");
  const swiperRef = useRef<ElementRef<typeof Carousel>>(null);
  const handlePrevClick = () => {
    swiperRef.current?.prev();
  };
  const handleNextClick = () => {
    swiperRef.current?.next();
  };
  const handleAfterChange = (current: number) => {
    setCurrentIndex(current);
    updateBgImg(current);
  };
  const updateBgImg = (current: number) => {
    if (current >= 0 && banners.length > 0) {
      const imgUrl = banners[current].imageUrl + "?imageView&blur=40x20";
      setBgImg(imgUrl);
    }
  };
  const handleDotsClick = (current: number) => {
    setCurrentIndex(current);
    updateBgImg(current);
    swiperRef.current?.goTo(current);
  };
  useLayoutEffect(() => {
    updateBgImg(currentIndex);
  }, [currentIndex, banners]);
  useEffect(() => {
    if (currentIndex >= 0 && banners.length > 0) {
      updateBgImg(currentIndex);
    }
  }, [currentIndex, banners]);
  return (
    <SwiperWrapper
      style={{
        background: `url('${bgImg}') center center / 6000px`
      }}
    >
      <div className="swiper wrap-v2">
        <SwiperLeft>
          <Carousel
            autoplay
            dots={false}
            autoplaySpeed={3000}
            effect="fade"
            ref={swiperRef}
            afterChange={(current) => handleAfterChange(current)}
          >
            {banners?.map((item) => {
              return (
                <div className="swiper-item" key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
          <div className="dots">
            {banners?.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames("item", {
                      active: index === currentIndex
                    })}
                    onClick={() => handleDotsClick(index)}
                  ></span>
                </li>
              );
            })}
          </div>
        </SwiperLeft>
        <SwiperRight>
          <a href="/download">下载客户端</a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          <span className="banner_sprite shadow shadowL"></span>
          <span className="banner_sprite shadow shadowR"></span>
        </SwiperRight>
        <SwiperControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </SwiperControl>
      </div>
    </SwiperWrapper>
  );
};
export default memo(Swiper);

// import React, { memo, useEffect, useRef, useState } from "react";
// import type { FC, ReactNode } from "react";
// import { useAppSelector } from "@/store";
// import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style";
// // import { Carousel } from 'antd'
// import { shallowEqual } from "react-redux";
// import classNames from "classnames";
// import { SwitchTransition, CSSTransition } from "react-transition-group";

// interface IProps {
//   children?: ReactNode;
// }

// const Swiper: FC<IProps> = () => {
//   /** 定义组件内部的数据 */
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [dotIndex, setDotIndex] = useState(0);
//   const [bgImage, setBgImage] = useState<string>();
//   const indexRef = useRef(currentIndex);
//   const timerRef = useRef<ReturnType<typeof setInterval>>();

//   /** redux中获取数据 */
//   const { banners } = useAppSelector(
//     (state) => ({
//       banners: state.recommend.banners
//     }),
//     shallowEqual
//   );
//   useEffect(() => {
//     if (!banners.length) return;
//     setBgImage(banners[currentIndex].imageUrl + "?imageView&blur=40x20");
//   }, [banners]);

//   /** 事件监听的方法 */
//   function handleChangeClick(isNext: boolean) {
//     let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
//     if (newIndex > banners.length - 1) newIndex = 0;
//     if (newIndex < 0) newIndex = banners.length - 1;
//     setCurrentIndex(newIndex);
//     indexRef.current = newIndex;
//     setDotIndex(-1);
//   }

//   // function handleBeforeChange() {}
//   function handleAfterChange() {
//     setBgImage(banners[indexRef.current].imageUrl + "?imageView&blur=40x20");
//     setDotIndex(indexRef.current);
//   }

//   let imageUrl = "";
//   if (banners.length) {
//     imageUrl = banners[currentIndex].imageUrl;
//   }

//   /** 定时器 */
//   if (timerRef.current) clearInterval(timerRef.current);
//   timerRef.current = setInterval(() => {
//     handleChangeClick(true);
//   }, 5000);

//   return (
//     <BannerWrapper bgImage={bgImage}>
//       <div className="banner wrap-v2">
//         <BannerLeft>
//           <div className="banner-list">
//             <SwitchTransition mode="out-in">
//               <CSSTransition
//                 classNames="fade"
//                 timeout={1000}
//                 key={currentIndex}
//                 onExited={() => handleAfterChange()}
//               >
//                 <div className="banner-item">
//                   <img className="image" src={imageUrl} />
//                 </div>
//               </CSSTransition>
//             </SwitchTransition>
//           </div>
//           <ul className="dots">
//             {banners.map((item, index) => {
//               return (
//                 <li key={item.imageUrl}>
//                   <span
//                     className={classNames("item", {
//                       active: dotIndex === index
//                     })}
//                   ></span>
//                 </li>
//               );
//             })}
//           </ul>
//         </BannerLeft>
//         <BannerRight></BannerRight>
//         <BannerControl>
//           <button
//             className="btn left"
//             onClick={() => handleChangeClick(false)}
//           ></button>
//           <button
//             className="btn right"
//             onClick={() => handleChangeClick(true)}
//           ></button>
//         </BannerControl>
//       </div>
//     </BannerWrapper>
//   );
// };

// export default memo(Swiper);
