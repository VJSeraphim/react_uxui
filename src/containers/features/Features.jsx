import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresData = [
    {
        title: 'Will he know my Yashiro?',
        text: 'This does not matters a lot since his Yashiro loses every time nevertheless the opponent do not know about his Yashiro. ' 
    },
    {
        title: 'Wanna taste some Kingimashi?',
        text: 'Sometimes he use his sub, Kawaii Chris, and the extra move of him sounds like "Kingi-Mashi".'
    },
    {
        title: 'He must have used the auto button!!',
        text: 'Kane is weak at rolling the button while caught by his opponent, and often screams out like this.'
    },
    {
        title: 'I will make no fun, so I will directly select my main.',
        text: 'The "main" here means "Mainly losing character" of him, usually Orochi Chris, Orochi Yashiro and Iori.'
    },
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    Wow, Hong-Seok who I know is also weird.
                    <p>
                        Someday I saw, he hurted your mind and crying yourself. 
                    </p>
                </h1>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, i) => (
                    <Feature 
                        title={item, title} 
                        text={item.text} 
                        key={item.title + index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Features
