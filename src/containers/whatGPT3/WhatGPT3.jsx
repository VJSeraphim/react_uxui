import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components/feature/Feature'

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="Who is KoKane?" text="Kane is one of the most prolonged Korean Twitch streamer, with minimal troubles with other streamers or ethical issues, loved by many Keppakis, other name of Kane's fans."/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">
                    Well, just it existed in Mte and Uringeshun
                </h1>
                <p>
                    Explore other Library
                </p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="MoongTaengYi" text="One of his legendary and die-hard meme came from the awkward edit of his video. One fan named'deep-web Kane' made this video and over the past 2 years, this is one of the most identical meme of Kane."/>
                <Feature title="Tajiriri" text="When he has stomachache for several reasons, he often drinks green juice, which Japanese Pro-wrestler Tajiriri spitted out."/>
                <Feature title="Kim Seong-Keun" text="He is die-hard Hanhwa Eagles fan, and his most favorite player is Kim Seong-Keun, one of the most notorious manager of the team."/>
            </div>
        </div>
    )
}

export default WhatGPT3
