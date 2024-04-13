import styled from "styled-components";

export const SettleWrapper = styled.div`
  width: 250px;
  padding: 20px;
  .list {
    width: 210px;
    .artist {
      display: flex;
      margin-top: 10px;
      background-color: #fafafa;
      text-decoration: none;
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 3px 12px;
        border: 1px solid #e9e9e9;
        border-left: none;
        h4 {
          font-size: 14px;
          font-weight: bold;
        }
      }
      :hover {
        background-color: #f4f4f4;
      }
    }
  }
  .apply-for {
    width: 210px;
    padding: 0 5px 0 0;
    margin-top: 15px;
    border-radius: 4px;
    background: url(${require("@/assets/img/button_icon.png")}) right -100px;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 31px;
      padding: 0 15px 0 20px;
      font-weight: bold;
      text-decoration: none;
      background: url(${require("@/assets/img/button_icon.png")}) 0 -59px;
    }
    &:hover {
      background-position: right -182px;
      a {
        background-position: 0 -141px;
      }
    }
  }
`;
