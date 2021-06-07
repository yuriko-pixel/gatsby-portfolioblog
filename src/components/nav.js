import { Link } from 'gatsby';
import React, {useState} from 'react'
import './nav.css'

import styled from 'styled-components'

const Burger = styled.div`
    width: 30px;
    height: 5px;
    border-radius: 5;
    background: gray;
    margin-top: 3px; 
    margin-bottom: 3px
    position: absolute;
`;

const MenuWrapper = styled.div`
  width: 250px;
  height: 300px;
  position: absolute;
`;

const Menu = styled.div`
  background: gray;
  width: 200px;
  min-height: 200px;
  position: absolute;
  z-index: 1;
  border-radius: 10px;
`;

const Close = styled.div`
  text-align: left;
    font-size: 50px;
    font-weight: bold;
    color: white;
    padding: 5px;
`;

const MenuOl = styled.ol`
  list-style: none;
  color: white;
  margin: 0;
  text-align: center;
`;

const List = styled.li`
  margin: 0 a
`;


const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

    return (
      <nav role="navigation">
      {!isClicked? (
        <MenuWrapper onClick={() => setIsClicked(!isClicked)}>
        <Burger/>
        <Burger/>
        <Burger/>
        </MenuWrapper>
      ):(
        <Menu>
          <Close onClick={() => setIsClicked(!isClicked)}>×</Close>
          <MenuOl>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/works"><li>Works</li></Link>
            <Link to="/qiita"><li>Qiita</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
          </MenuOl>
        </Menu>
      )}
    </nav>
    )
}

export default Nav