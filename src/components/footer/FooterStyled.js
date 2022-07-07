import styled from "styled-components";

export const Container = styled.footer`
  border-top: 1px solid #d8dbdd;
  margin: 5px auto 0;
  display: flex;
  font-size: 12px;
  color: #9e9e9e;
  width: 100%;
  height: 60px;
`;

export const Copyright = styled.p`
  flex: 1;
  text-align: center;
  span {
    display: block;
  }
  a {
    color: #008ed6;
    &:hover {
      color: #009be9;
    }
    &:active {
      color: #008ed6;
    }
  }
`

export const PoweredBy = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    max-height: 50px;
  }
`