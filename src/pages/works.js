import React, { useEffect } from 'react'
import styled from 'styled-components'
import data from '../work.json'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const Container = styled.div`
    width: 850px;
    margin: 0 auto;
    background-image: url(../images/footprint.png);
    background-size: 100%;
    background-repeat: no-repeat;
    @media screen and (max-width: 480px) {
        width:			300px;
        background-image:none;
    }
`;
const Flex = styled.div`
display: flex;
    flex-wrap: wrap;
`;
const WorkCon = styled.div`
    width:			400px;
	height:			300px;
	overflow:		hidden;
	margin:			10px 8px 10px 16px;
	position:		relative;	/* 相対位置指定 */
    @media screen and (max-width: 480px) {
        width:			300px;
    }
`;
const WorkImg = styled.img`
    width: 350px;
    margin: 5px 10px;
    @media screen and (max-width: 480px) {
        width: 290px;
        margin: 5px;
    }
`;
const Mask = styled.div`
    width:			100%;
	height:			100%;
	position:		absolute;	/* 絶対位置指定 */
	top:			0;
	left:			0;
	opacity:		0;	/* マスクを表示しない */
	background-color:	rgba(0,0,0,0.4);	/* マスクは半透明 */
	-webkit-transition:	all 0.2s ease;
	transition:		all 0.2s ease;

    &:hover {
        opacity:		1;	/* マスクを表示する */
    }
`;
const Caption = styled.div`
    font-size:		130%;
	text-align: 		center;
	padding-top:		80px;
	color:			#fff;
`;

const Title = styled.h2`
    text-align: center;
    padding-top: 40px;
`;

const Wrapper = styled.div`
    margin: 20px;
`;

const Works = ()=> {
    useEffect(()=> {
        console.log(data.data.map(item=> item.imgurl))
    })

    const arr = data.data.map(item => {return (<WorkCon key={item.name}>
        <Link to="/"></Link><img src={item.imgurl} alt={item.imgurl}/>
        <Mask>
        <Caption>{item.name}</Caption>
        </Mask>
    </WorkCon>)});

    return (
        <Layout>
        <Container>
        <Title>Works</Title>
        <Flex>
        {arr}
        </Flex>
        </Container>
    </Layout>
    )
}

export default Works

{/* <workCon>
                    <Link to={'/work/'+item.name} rops={item.name}>
                        <WorkImg src={item.imgurl} alt={item.imgurl} />
                        <Mask>
                            <Caption>{item.name}</Caption>
                        </Mask>
                    </Link>
                    </workCon> */}