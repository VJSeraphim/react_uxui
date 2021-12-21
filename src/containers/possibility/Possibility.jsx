import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img 
                    src={possibilityImage}
                    alt="possibility"
                />
            </div>
            <div className="gpt3__possibility-content">
                <h4>
                    Donate some video donations and wait for great reactions.
                </h4>
                <h1 className="gradient-text">
                    Do not be trifled with Kane's grudge. It is the best reaction of his!
                </h1>
                <p>
                    Hello. I'm Kane, streamer broadcasting from Twitch platform. First of all, I'd like to apologize for Sandbag, all the audiences who was mentally harmed dissapointed from my behavior. From now on,
                </p>
                <h4>
                    Okay~ I will pray for you to be dead~
                </h4>
            </div>
        </div>
    )
}

export default Possibility
