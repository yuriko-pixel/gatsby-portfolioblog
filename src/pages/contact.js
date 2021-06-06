import React from 'react'
import styled from 'styled-components'
import cat from '../images/cat2.png'
import Nav from '../components/nav'

const Img = styled.img`
    width: 150px;
`;

const Container = styled.div`
    margin: 10px 20px;
    min-height: 100vh;
    text-align: center;
`;

const Contact = ()=> {
    return (
        <Container>
            <Nav/>
            <Img src={cat} alt={cat}/>
            <p>For any inquiry, please contact me via Github.</p>
        </Container>
    )
}

export default Contact