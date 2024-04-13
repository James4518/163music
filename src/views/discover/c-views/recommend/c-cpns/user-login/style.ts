import { styled } from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 126px;
  background-position: 0 0;
  p {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
  }
  button {
    display: inline-block;
    width: 100px;
    line-height: 31px;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    background-position: 0 -195px;
    &:hover {
      background-position: -110px -195px;
    }
  }
`;
