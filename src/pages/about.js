import React from 'react'
import styled from 'styled-components'
import img from '../images/profile.jpg'
import Nav from '../components/nav'

const Container = styled.div`
    margin: 10px 20px;
    text-align: center;   
    min-height: 100vh;
    font-family: 'Crimson Pro', serif;
    font-size: 25px;
    @media only screen and (max-width: 480px) {
        font-size: 20px;
        margin-bottom: 20px;
    }
`;
const Profimg = styled.img`
    margin: 0 auto;
    width:200px;
    height:200px;
    object-fit:cover;
    border-radius:50%;
    border: 1px solid black;
`;

const Title = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 35px;
    text-align: left;
    padding-left: 30px;
    text-decoration: underline solid pink 5px;
    margin: 25px 0;
    @media only screen and (max-width: 480px) {
        font-size: 25px;
    }
`;
const Title2 = styled.p`
    color: #DF8095
`;

const Box = styled.div`
    width: 60%;
    margin: 0 auto;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;
const Box2 = styled.div`
    margin-left: 150px;
    @media only screen and (max-width: 480px) {
        margin-left: 20px;
        font-size: 15px;
    }
`;
const Box3 = styled.div`
    padding-left: 20px;
    text-align: left;
    @media only screen and (max-width: 480px) {
        font-size: 15px;
    }
`;
const Likes = styled.div`
    margin-left: 150px;
    @media only screen and (max-width: 480px) {
        margin-left: 20px;
    }
`;
const BorederLine = styled.div`
    height: 230px;
    width: 3px;
    background: gray;
    margin-left: 20px
    @media only screen and (max-width: 480px) {
        height: 150px;
    }
`;
const Flex = styled.div`
    display: flex;
`;
const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    
`;
const FlexColumn2 = styled.div`
    display: flex;
    flex-direction: column;
`;
const LikeDesc = styled.div`
    width: 500px;
    min-height: 75px;
    border-radius: 5px;
    background: #364549;
    font-family: system-ui;
    font-size: 20px;
    text-align: left;
    padding: 5px 10px;
    color: white;
    flex-direction: row;
    display: flex;
    margin-bottom: 10px;
    @media only screen and (max-width: 480px) {
        font-size: 20px;
        margin-top: 5px;
    }
`;

const LikeTitle = styled.span`
margin-left: 30px;
    font-size: 30px;
    @media only screen and (max-width: 480px) {
        font-size: 20px;
        margin-top: 5px;
    }
`;

const HP = {'character': 'Luna Lovegood', 'favSeries':'Prizoner of Azkaban'};
const travel = {'have visited': ['UK ,', 'LA ,','AUS ,', 'Netherland'], 'wantToVist': ['Germany ,', 'UAE']};

const cat = {'type': ['Munchkin ,', ' American Shorthair']}
const booktitle = {'title': ['HarryPotter,' , ' Sherlock Holmes, ', ' Gone Girl']};

const About = () => {
    return (
        <Container>
            <Nav/>
            <Profimg src={img} alt={img}/>
            <h3>Yuriko Darragh</h3>
            {/* <Link /> */}
            <Box>
                <Title>Profile</Title>
                <span>Tokyo based full-stack developper.</span>
                <Title>Skill Stacks</Title>
                <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/redux.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/oracle-logo.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/postgreesql.png" alt="skills" />
                <Title>Experiences</Title>
                <Flex>
                    <Box2>
                        <p>Current:</p>
                        <p>2017: </p>
                        <p>2016: </p>
                        <p>2014: </p>
                    </Box2>
                    <BorederLine/>
                    <Box3>
                        <p>Zenith as a system consultant</p>
                        <p>Barclays Securities</p>
                        <p>Mitsubishi UFJ Morgan Stanley Securities</p>
                        <p>Sophia University</p>
                    </Box3>
                </Flex>
                <Title>What I like</Title>
                <Likes>
                    <Flex>
                        <img src="https://img.icons8.com/color/48/000000/harry-potter-.png" alt="icon" />
                        <LikeTitle>Harry Potter</LikeTitle>
                    </Flex>
                    <LikeDesc>
                        <FlexColumn>
                            {Object.keys(HP).map(item => <Title2>{item}:</Title2>)}
                        </FlexColumn>
                        <FlexColumn2>
                        {Object.values(HP).map(item => <p>{item}</p>)}
                        </FlexColumn2>
                    </LikeDesc>
                    <Flex>
                        <img src="https://img.icons8.com/color/48/000000/airplane-take-off--v1.png" alt="icon" />
                        <LikeTitle>Traveling</LikeTitle>
                    </Flex>
                    <LikeDesc>
                        <FlexColumn>
                            {Object.keys(travel).map(item => <Title2>{item}:</Title2>)}
                        </FlexColumn>
                        <FlexColumn2>
                        {Object.values(travel).map(item => <p>{item}</p>)}
                        </FlexColumn2>
                    </LikeDesc>
                    <Flex>
                        <img src="https://img.icons8.com/color/48/000000/bird-above.png" alt="icon" />
                        <LikeTitle>Cat</LikeTitle>
                    </Flex>
                    <LikeDesc>
                        <FlexColumn>
                            {Object.keys(cat).map(item => <Title2>{item}:</Title2>)}
                        </FlexColumn>
                        <FlexColumn2>
                        {Object.values(cat).map(item => <p>{item}</p>)}
                        </FlexColumn2>
                    </LikeDesc>
                    <Flex>
                        <img src="https://img.icons8.com/color/48/000000/reading-unicorn.png" alt="icon"    />
                        <LikeTitle>Reading</LikeTitle>
                    </Flex>
                    <LikeDesc>
                        <FlexColumn>
                            {Object.keys(booktitle).map(item => <Title2>{item}:</Title2>)}
                        </FlexColumn>
                        <FlexColumn2>
                        {Object.values(booktitle).map(item => <p>{item}</p>)}
                        </FlexColumn2>
                    </LikeDesc>
                </Likes>
            </Box>
        </Container>
    )
}

export default About