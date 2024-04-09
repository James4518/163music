import styled from "styled-components";

export const AlbumItemWrapper = styled.div`
  height: 150px;
  margin: 0 8px;
  background-position: -260px 100px;
  .top {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin: 8px 0;
    img {
      width: 100px;
      height: 100px;
    }
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      &:hover + .play {
        position: absolute;
        width: 22px;
        height: 22px;
        right: 25px;
        bottom: 5px;
      }
    }
    .play {
      pointer-events: none;
      &:hover {
        background-position: 0 -110px;
      }
    }
  }
  .bottom {
    width: 100px;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
    span {
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .name {
      color: #000;
      ${(props) => props.theme.mixin.textNowrap}
    }
    .artist {
      color: #666;
      ${(props) => props.theme.mixin.textNowrap}
    }
  }
`;
