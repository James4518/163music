import { styled } from "styled-components";

export const RankMenuWrapper = styled.div`
  width: 230px;
  &:last-child {
    width: 228px;
  }
  .top {
    display: flex;
    height: 100px;
    padding: 20px 0 0 19px;
    .left {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      a {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background-position: -145px -57px;
      }
    }
    .right {
      margin: 6px 0 0 10px;
      > a {
        font-size: 14px;
        font-weight: bold;
      }
      .btns {
        margin-top: 10px;
        display: flex;
        .btn {
          display: block;
          width: 22px;
          height: 22px;
          margin-right: 10px;
        }
        .play {
          background-position: -267px -205px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .favour {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .list {
    width: 230px;
    .item {
      display: flex;
      line-height: 32px;
      height: 32px;
      .number {
        display: block;
        width: 35px;
        text-align: center;
        color: #666;
        font-size: 16px;
      }
      &:nth-child(-n + 3) .number {
        color: #c10d0c;
      }
      .info {
        display: flex;
        justify-content: space-between;
        width: 180px;
        .name {
          flex: 1;
          width: 96px;
          ${(props) => props.theme.mixin.textNowrap};
        }
        .operation {
          display: none;
          width: 82px;
          margin-top: 3px;
          .btn {
            width: 17px;
            height: 17px;
            cursor: pointer;
          }
          .play {
            margin-right: 10px;
          }
        }
      }
      &:hover {
        .operation {
          display: block;
        }
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: flex-end;
    height: 32px;
    line-height: 32px;
    margin-right: 30px;
  }
`;
