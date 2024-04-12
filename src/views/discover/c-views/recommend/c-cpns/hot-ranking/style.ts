import styled from "styled-components";

export const HotRankWrapper = styled.div`
  padding-left: 1px;
  > .content {
    display: flex;
    margin-top: 20px;
    width: 682px;
    height: 472px;
    background: url(${require("@/assets/img/recommend-top-bg.png")});
  }
`;
