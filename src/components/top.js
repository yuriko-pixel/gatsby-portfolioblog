import React from 'react'
import cat from '../images/cat.png'
import some from '../styles/top.styles.js'
import styled from 'styled-components'
import Links from './layout'

const Wrapper = styled.div`
    width: 40%;
    margin: 0 auto;
    text-align: center;
`;

const ImgWrapper = styled.div`
    width: 100px;
    margin: 0 auto;    
`;

const Img = styled.img`
    width: 100px;
    margin: 0 auto;
`;

const Top = ()=> {
    return (
       <div>
        <ImgWrapper><Img src={cat} alt={cat}/></ImgWrapper>
        <Wrapper>
            <h3>I'm Yuriko Darragh</h3>
            <span>Full-stack developper based in Tokyo</span>
            {/* <Links/> */}
        </Wrapper>
        </div>
    )
}

export default Top