import React from 'react'
import '../css/Footer.css'

const Footer = () => {
    return (
        <div className='footer_Container'>
            <h2>Boston College</h2>
            <div className='underFooter'>
                <div className='sideFooter'>
                    <img src='icons/SchoolLogo.png' alt=''/>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised, administering, and maintaining information technology infrastructure are grounded on the effective utilization of computers and computer software and thus enabling them to contribute worthwhile IT solutions to the business communities all over the world.</p>
                </div>

                <div className='footerInfoContainer'>
                    <div className='footerInfo'>
                        <div className='dev'>
                            <h3>Developer</h3>
                            <div>
                                <img src='icons/developer.jpg' alt=''/> 
                                <h3><a href='https://www.facebook.com/profile.php?id=100009257219664' rel="noreferrer" target="_blank">John Keru</a></h3>
                            </div>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</p>
                            <div style={{marginTop: '5px'}}>
                                <h4>Follow me on: </h4>
                                <a href='https://github.com/JohnKeru' rel="noreferrer" className='gitHubLink'
                                    target="_blank"><img style={{marginLeft: '10px'}} 
                                    src='icons/github.png' alt=''/>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <ul className='contact'>
                                <li>09123456789</li>
                                <li>BS@gmail.com</li>
                                <li>Donsol, Sorsogon</li>
                                <li>Uncle Bob</li>
                            </ul>
                        </div>
                        <div>
                            <h3>About</h3>
                            <p>has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        </div>
                        <div>
                            <h3>Social</h3>
                            <div className='social'>
                                <img src='icons/facebook.png' alt=''/>
                                <img src='icons/youtube.png' alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>&copy; Copy Rights: 2021</h6>
        </div>
    )
}

export default Footer
