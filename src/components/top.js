import React from 'react'
import cat from '../images/cat.png'
import some from '../styles/top.styles.js'

const Top = ()=> {
    return (
        <div>
            <img src={cat} alt={cat}/>
            <h3>I'm Yuriko Darragh</h3>
            <span>Full-stack developper based in Tokyo</span>
            {/* <Links/> */}
        </div>
    )
}

export default Top