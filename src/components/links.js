import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react'
import styled from 'styled-components'

const LinkContainer = styled.div`
    width: 20%;
    margin: 20px auto;
`;

const LinkContainer1 = styled.a`
    padding: 10px 15px;
    background: #EEF1F2;
    border: 1px solid #D1D8DA;
    border-radius: 50% 0 0 50%;
`;

const LinkContainer2 = styled.a`
    padding: 10px 15px;
    background: #EEF1F2;
    border: 1px solid #D1D8DA;
`;

const LinkContainer3 = styled.a`
    padding: 10px 15px;
    background: #EEF1F2;
    border: 1px solid #D1D8DA;
    border-radius: 0 50% 50% 0;
`;

const Links = ()=> {
    return (
       <LinkContainer>
            <LinkContainer1 href="https://github.com/yuriko-pixel" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} style={{color: 'black'}}/>
            </LinkContainer1>
            <LinkContainer2 href="https://www.linkedin.com/in/yuriko-darragh-81298a145/" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLinkedin} style={{color: 'black'}}/>
            </LinkContainer2>
            <LinkContainer3 href="https://twitter.com/yuriko23406231" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faTwitter} style={{color: 'black'}}/>
            </LinkContainer3>
        </LinkContainer>
    )
}

export default Links