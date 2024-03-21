import styled from "styled-components";

export const CarouselWrapper = styled.div`
  .carousel {
    width: 730px;
  }
  .slick-list {
    img {
      width: 100%;
      height: 284px;
    }
  }
  .slick-prev {
    left: -30px;
  }
  .slick-next {
    right: -20px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
  }
  .indicator {
    position: absolute;
    z-index: 9;
    bottom: 20px;
    left: 0;
    right: 0;
    width: 25%;
    margin: 0 auto;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14.29%;
      .dot {
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;
        &.active {
          background-color: red;
          width: 8px;
          height: 8px;
        }
      }
    }
  }
`;
