import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className="gpt3__header section__padding">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    GPT-3000 KOpenAI Introduction
                </h1>
                <p>
                    Your behaving playboy looks like you played this game before, and you now reveal your face and play? You make some money? This is boring, Have fun yourself?
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Place your Email Address Here."/>
                    <button type="button">
                        Get Started!
                    </button>
                </div>
                <div className="gpt3__header-content__people">
                    <img 
                        src={people}
                        alt="people"
                    />
                    <p>
                        -3,000 ASKs requested visit in last 24 hours.
                    </p>
                </div>      
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header
