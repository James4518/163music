// import React, { memo } from "react";
// import type { FC, ReactNode } from "react";
// import { AlbumWrapper } from "./style";
// import AreaHeaderV1 from "@/components/area-header-v1";
// import { useAppSelector, useAppShallowEqual } from "@/store";
// import BoxList from "@/base-ui/box-list";
// import NewAlbumItem from "@/components/new-album-item";

// interface IProps {
//   children?: ReactNode;
// }

// const NewAlbum: FC<IProps> = () => {
//   const { albums } = useAppSelector(
//     (state) => ({
//       albums: state.recommend.albums
//     }),
//     useAppShallowEqual
//   );
//   return (
//     <AlbumWrapper>
//       <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"></AreaHeaderV1>
//       <div className="content">
//         <BoxList pageNum={5} totalNum={10}>
//           <div>
//             {albums.slice(0, 10).map((item) => {
//               return (
//                 <NewAlbumItem itemData={item} key={item.picUrl}></NewAlbumItem>
//               );
//             })}
//           </div>
//         </BoxList>
//       </div>
//     </AlbumWrapper>
//   );
// };

// export default memo(NewAlbum);

// import React, { memo } from "react";
// import type { FC, ReactNode } from "react";
// import { AlbumWrapper } from "./style";
// import AreaHeaderV1 from "@/components/area-header-v1";
// import { useAppSelector, useAppShallowEqual } from "@/store";
// import BoxList from "@/base-ui/box-list";

// interface IProps {
//   children?: ReactNode;
// }

// const NewAlbum: FC<IProps> = () => {
//   const { albums } = useAppSelector(
//     (state) => ({
//       albums: state.recommend.albums
//     }),
//     useAppShallowEqual
//   );
//   const pageNum = 5;
//   const totalNum = 10;
//   const albumGroups = [];
//   for (let i = 0; i < totalNum / pageNum; i++) {
//     albumGroups.push(albums.slice(i * pageNum, (i + 1) * pageNum));
//   }
//   return (
//     <AlbumWrapper>
//       <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"></AreaHeaderV1>
//       <div className="content">
//         <div className="banner">
//           <BoxList pageNum={pageNum} groups={albumGroups}></BoxList>
//         </div>
//       </div>
//     </AlbumWrapper>
//   );
// };

// export default memo(NewAlbum);

// import React, { memo, useCallback, useEffect, useState } from "react";
// import type { FC, ReactNode } from "react";
// import { AlbumWrapper } from "./style";
// import AreaHeaderV1 from "@/components/area-header-v1";
// import { useAppSelector, useAppShallowEqual } from "@/store";
// import BoxList from "@/base-ui/box-list";
// import NewAlbumItem from "@/components/new-album-item";

// interface IProps {
//   children?: ReactNode;
// }

// const NewAlbum: FC<IProps> = () => {
//   const { albums } = useAppSelector(
//     (state) => ({
//       albums: state.recommend.albums
//     }),
//     useAppShallowEqual
//   );
//   const pageNum = 5;
//   const totalNum = 10;
//   const pages = Math.ceil(totalNum / pageNum);
//   const albumGroups = [];
//   for (let i = 0; i < pages; i++) {
//     albumGroups.push(albums.slice(i * pageNum, (i + 1) * pageNum));
//   }
//   const [currentGroup, setCurrentGroup] = useState(0);
//   const changeCurrentGroup = useCallback(
//     (num: number) => {
//       setCurrentGroup((currentGroup) => currentGroup + num);
//     },
//     [currentGroup]
//   );
//   useEffect(() => {
//     if (currentGroup < 0) {
//       setCurrentGroup(0);
//     } else if (currentGroup >= pages) {
//       setCurrentGroup(pages - 1);
//     }
//   }, [currentGroup]);
//   return (
//     <AlbumWrapper>
//       <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"></AreaHeaderV1>
//       <div className="content">
//         <div className="banner">
//           <BoxList
//             pages={pages}
//             currentGroup={currentGroup}
//             changeGroup={changeCurrentGroup}
//           >
//             {albumGroups.map((group, index) => {
//               return (
//                 <div key={index} className="group-content">
//                   <div className="group">
//                     {group.map((item) => (
//                       <NewAlbumItem
//                         itemData={item}
//                         key={item.picUrl}
//                       ></NewAlbumItem>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </BoxList>
//         </div>
//       </div>
//     </AlbumWrapper>
//   );
// };

// export default memo(NewAlbum);

import React, { memo, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { AlbumWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { useAppSelector, useAppShallowEqual } from "@/store";
import NewAlbumItem from "@/components/new-album-item";
import Slider, { Settings } from "react-slick";

interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = () => {
  const { albums } = useAppSelector(
    (state) => ({
      albums: state.recommend.albums
    }),
    useAppShallowEqual
  );
  const pageNum = 5;
  const totalNum = 10;
  const pages = Math.ceil(totalNum / pageNum);
  const albumGroups = [];
  for (let i = 0; i < pages; i++) {
    albumGroups.push(albums.slice(i * pageNum, (i + 1) * pageNum));
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const settings: Settings = {
    dots: false,
    autoplay: false,
    speed: 2500,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
    setCurrentIndex(currentIndex - 1);
  };
  const handleNextClick = () => {
    sliderRef.current?.slickNext();
    setCurrentIndex(currentIndex + 1);
  };
  console.log(currentIndex);
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"></AreaHeaderV1>
      <div className="content">
        {currentIndex !== 0 && (
          <button
            className="sprite_02 arrow arrow-left"
            onClick={handlePrevClick}
          ></button>
        )}
        <div className="banner">
          <Slider {...settings} ref={sliderRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {albums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />;
                    })}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        {currentIndex !== albumGroups.length - 1 && (
          <button
            className="sprite_02 arrow arrow-right"
            onClick={handleNextClick}
          ></button>
        )}
      </div>
    </AlbumWrapper>
  );
};

export default memo(NewAlbum);
