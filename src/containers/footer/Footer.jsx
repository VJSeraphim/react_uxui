import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient_text">
                    Do you want to see his rage by yourself?
                </h1>
            </div>
            <div classNAme="gpt3__footer-button">
                <p>
                    Request Your Donation
                </p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__foonter-links_logo">
                    <img src= {gpt3Logo} alt="logo"/>
                    <p>
                        Eun-Pyeong Gu Harabang-Tangyee Welfare Center, Seoul, South Korea
                    </p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>
                       Special Thanks to
                    </h4>
                    <p>Tajiriri</p>
                    <p>Kim Seong-Keun</p>
                    <p>MoongTaengYee</p>
                    <p>Apologies</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>
                       Copilots
                    </h4>
                    <p>polasta_mov</p>
                    <p>Suri</p>
                    <p>Deep Web Kane</p>
                    <p>HatCo</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>
                       Links
                    </h4>
                    <p>Kane Youtube</p>
                    <p>Kane Twitch</p>
                    <p>Kane Wiki</p>
                    <p>Community</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>
                    @Aug 1, 2007 / Aug 1, 2016, All rights non-Reserved
                </p>
            </div>
        </div>
    )
}

export default Footer
