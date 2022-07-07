import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from "../../assets/logo.svg";



export const Logo = styled(Link).attrs({ src: logo })`
  cursor: pointer;
  width: 200px;
  height: 70px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Container = styled.header`
    height: 75px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    @media (min-width: 320px) and (max-width: 760px) {
      font-size: 12px;
      height: 120px;
    }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  justify-content: flex-end;

  > a {
    padding: 9px;
    border: 2px solid transparent;
    text-decoration: none;
    color: #3D3D3D;
    transition: 0.2s ease-in-out;
  }
  > a:hover {
    border-bottom: 2px solid #e04d4d;
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding 0 10px;
  font-weight: 700;
`;

export default Container;
