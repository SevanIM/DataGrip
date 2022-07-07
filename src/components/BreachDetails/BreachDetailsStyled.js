import styled from "styled-components";
import logo from "../../assets/question-mark.svg";

export const Container = styled.div`
  display: flex;
  height: auto;
  max-width: 780px;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: auto;
  padding: 10px;
`;

export const Date = styled.div`
  font-size: 16px;
  font-weight: 800;
`;

export const Source = styled.div`
  font-size: 16px;
  padding: 4px 0;
  color: coral;
`;

export const Details = styled.div`
  font-size: 18px;
  padding: 4px 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 10px;
`;

export const Logo = styled.div`
  background-image: url(${(props) => props.url || logo});
  background-size: auto;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const MoreInfo = styled.a`
  font-weight: 800;
  font-size: 14px;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: gray;
  }
`;
