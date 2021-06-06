import React from 'react'
import styled from 'styled-components'
import img from '../images/profile.jpg'

const Container = styled.div``;
const Profimg = styled.img``;
const Box = styled.div``;
const Title = styled.div``;
const Title2 = styled.p``;
const Box2 = styled.div``;
const Box3 = styled.div``;
const Likes = styled.div``;
const BorederLine = styled.div``;
const Flex = styled.div``;
const FlexColumn = styled.div``;
const FlexColumn2 = styled.div``;
const LikeDesc = styled.div``;
const LikeTitle = styled.span``;

const HP = {'character': 'Luna Lovegood', 'favSeries':'Prizoner of Azkaban'};
const travel = {'have visited': ['UK ,', 'LA ,','AUS ,', 'Netherland'], 'wantToVist': ['Germany ,', 'UAE']};

const cat = {'type': ['Munchkin ,', ' American Shorthair']}
const booktitle = {'title': ['HarryPotter,' , ' Sherlock Holmes, ', ' Gone Girl']};

const About = () => {
    return (
        <Container>
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