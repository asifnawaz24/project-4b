import React from 'react'
import useWebAnimations from '@wellyshen/use-web-animations';
import brain from './images/Intro_Brain.svg';
import light from './images/Intro_Front_Layer.svg';
import base from './images/Intro_Featured_Image_Empty.svg';
import service5 from './images/services-5.svg';
import service6 from './images/services-6.svg';
import service7 from './images/services-7.svg';
import './App.css';

export const App = () => {
    const { ref: brainRef } = useWebAnimations({
        keyframes: [
            { transform: 'translateY(10px) rotate(-2deg)' },
            { transform: 'translateY(-30px) rotate(0deg)' }
        ],
        timing: {
            duration: 3000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        }
    });

    const { ref: lightRef } = useWebAnimations({
        keyframes: {
                opacity: ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','0']
        },
        timing: {
            duration: 250,
            iterations: Infinity,
            easing: 'ease'
        }
    });

    const { ref: rainbowChar1Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar2Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(25deg)', 'hue-rotate(385deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar3Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(50deg)', 'hue-rotate(410deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar4Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(75deg)', 'hue-rotate(435deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar5Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(100deg)', 'hue-rotate(460deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar6Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(125deg)', 'hue-rotate(485deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar7Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(150deg)', 'hue-rotate(510deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar8Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(175deg)', 'hue-rotate(535deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar9Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(200deg)', 'hue-rotate(560deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar10Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(225deg)', 'hue-rotate(585deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar11Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(250deg)', 'hue-rotate(610deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar12Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(275deg)', 'hue-rotate(635deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar13Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(300deg)', 'hue-rotate(660deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar14Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(325deg)', 'hue-rotate(685deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar15Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(350deg)', 'hue-rotate(710deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar16Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(375deg)', 'hue-rotate(735deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    const { ref: rainbowChar17Ref } = useWebAnimations({
        keyframes: {
                filter: ['hue-rotate(400deg)', 'hue-rotate(760deg)']
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear'
        }
    });

    return (
        <div>
            <div className="topbar-desktop">
                <div className="topbar-sticky">
                    <div className="topbar-desktop-text">
                        <span className="rainbow-animation rainbow-char1" ref={rainbowChar1Ref}>S</span>
                        <span className="rainbow-animation rainbow-char2" ref={rainbowChar2Ref}>w</span>
                        <span className="rainbow-animation rainbow-char3" ref={rainbowChar3Ref}>i</span>
                        <span className="rainbow-animation rainbow-char4" ref={rainbowChar4Ref}>t</span>
                        <span className="rainbow-animation rainbow-char5" ref={rainbowChar5Ref}>c</span>
                        <span className="rainbow-animation rainbow-char6" ref={rainbowChar6Ref}>h</span>
                        <span className="space"> </span>
                        <span className="rainbow-animation rainbow-char7" ref={rainbowChar7Ref}>e</span>
                        <span className="rainbow-animation rainbow-char8" ref={rainbowChar8Ref}>x</span>
                        <span className="rainbow-animation rainbow-char9" ref={rainbowChar9Ref}>p</span>
                        <span className="rainbow-animation rainbow-char10" ref={rainbowChar10Ref}>e</span>
                        <span className="rainbow-animation rainbow-char11" ref={rainbowChar11Ref}>r</span>
                        <span className="rainbow-animation rainbow-char12" ref={rainbowChar12Ref}>i</span>
                        <span className="rainbow-animation rainbow-char13" ref={rainbowChar13Ref}>e</span>
                        <span className="rainbow-animation rainbow-char14" ref={rainbowChar14Ref}>n</span>
                        <span className="rainbow-animation rainbow-char15" ref={rainbowChar15Ref}>c</span>
                        <span className="rainbow-animation rainbow-char16" ref={rainbowChar16Ref}>e</span>

                        <span className="rainbow-animation rainbow-char17" ref={rainbowChar17Ref}>▾</span>
                    </div>
                    <div className="topbar-hamburger">☰</div>
                </div>
            </div>

            <div className='main'>
            <div className='row row2 header'>
                <div className='row-inner'>
                    <div className='header-container'>
                        <div className='header-container-text'>
                            <div className='header-container-description'>
                                <div className='header-container-title'>
                                    <div className="header-container-title-2">CORTEX</div>
                                    <div className="header-container-title-3">COPYWRITER</div>
                                </div>
                                <div className='header-container-paragraph'>
                                    <p className="intro-title">Enhance your communications with psychology-based copywriting and UX writing</p>
                                </div>
                                <div className="header-container-cta">Send a message</div>
                            </div>
                        </div>
                        <div className="header-container-image">
                            <img className="header-front" src={light} alt=' ' ref={lightRef}/>
                            <img src={base} alt=' ' />
                            <img className="header-brain" src={brain} alt=' ' ref={brainRef} />
                        </div>
                    </div>
                </div>
                <div className='header-container-bg'></div>
            </div>

            <div id="anchor-services" className="services service-outer-1">
                <div className="row row-service ">
                    <div className="row-inner service-section-1" id="services">
                        <div className="column column-left">
                            <div className="service-image"><img src={service6}  alt=' '/></div>
                            </div>
                            <div className="column column-right">
                                <h1>UX Writing</h1>
                                <p>I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.</p>
                                <div className="taglist"><div className="tag">Microcopy</div><div className="tag">Taxonomy &amp; Labeling</div><div className="tag">Chatbots</div><div className="tag">User Research</div><div className="tag">Content Style Guide</div><div className="tag">User Testing</div><div className="tag">Design Principles</div><div className="tag">Prototype</div></div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-service ">
                        <div className="row-inner service-section-2">
                            <div className="column column-left ">
                                <h1>Website Copywriting</h1>
                                <p>Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.</p>
                                <div className="taglist"><div className="tag">Information Architecture</div><div className="tag">Wireframes</div><div className="tag">Competitor Analysis</div><div className="tag">On-page SEO</div><div className="tag">Off-page SEO</div><div className="tag">USP/UVP</div><div className="tag">Landing Page</div><div className="tag">Sales Letter</div></div>
                            </div>
                            <div className="column column-right">
                                <div className="service-image"><img src={service7}  alt=' '/></div>
                                </div>
                            </div>
                        </div>

                        <div className="row row-service ">
                            <div className="row-inner service-section-3">
                                <div className="column column-left">
                                    <div className="service-image"><img src={service5} alt=' '/></div>
                                    </div>
                                    <div className="column column-right">
                                        <h1>Content Writing</h1>
                                        <p>Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.</p>
                            <div className="taglist">
                                <div className="tag">Headlines &amp; Taglines</div><div className="tag">Content Strategy</div><div className="tag">Blogs &amp; Articles</div><div className="tag">Social Media Content</div><div className="tag">Video Scripts</div><div className="tag">eDMs &amp; Newsletters</div><div className="tag">Case Studies</div><div className="tag">Whitepapers</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

            </div>
            </div>
    )
}
