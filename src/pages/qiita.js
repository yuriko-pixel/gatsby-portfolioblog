import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Moment from 'react-moment';
import Nav from '../components/nav'

const LinkWrapper = styled.a`
    color: black;
    text-decoration: none;
    width: 300px;
    background: white;
    border: solid lightgreen 3px;
    margin: 5px 15px;
    border-radius: 10px;
    text-align: left;
    padding: 5px 10px;
    min-height: 200px;
`;

const Title = styled.h2`
   padding-top: 20px;
   text-align: center;
`;

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;    
`;

const Profile = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const userName = styled.span`
margin: 10px 0 0 10px;
`;

const Date = styled.div`
margin: 10px 0;
`;

const Tags = styled.span`
border: green solid 1px;
    margin: 2px 3px;
    padding: 2px;
    border-radius: 2px;
`;

const QiitContaner = styled.div`
width: 90%;
    margin: 30px auto;
`;
const Qiita = ()=> {
    const [articles, setArticles] = useState([]);
    const key = process.env.GATSBY_QIITA_KEY;
    useEffect(() => {
        const getData = async() => {
            fetch('https://qiita.com/api/v2/authenticated_user/items', {method:'GET', 
            headers: {
                'Authorization': 'Bearer ' + key,
                'Content-Type': 'application/json'
            }})
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    setArticles(json);
                })
          };

          getData();
    },[])

    let data;
    if( articles.length !== undefined ) {
        data = articles.map(item => (
        <LinkWrapper href={item.url} target="_blank" rel="noopener noreferrer" key={Math.random()}>
            <h3>{item.title}</h3>
            <Flex>
                <Profile src={item.user.profile_image_url} alt="profile" />
                <userName>@ {item.user.id}</userName>
            </Flex>
            <Date><Moment format="YYYY/MM/DD">{item.created_at}</Moment></Date>
            <Flex>{item.tags.map(i => <Tags>{i.name}</Tags>)}</Flex>
        </LinkWrapper>))
    } else {
        data = 'Loading...'
    }
    return (
        <QiitContaner>
        <Nav/>
        <Title>Qiita Articles</Title>
        <Flex>
            {data}
        </Flex>
    </QiitContaner>
    )
}

export default Qiita