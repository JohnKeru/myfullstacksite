import React from 'react'
import '../css/Section.css'

const Section = () => {
    return (
        <div className='section_Container'>
            <section className='section'>
                <p>                    
                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Why do we use it?
                </p>
            </section>

            <div className='sideNav'>
                <div className='developer'>
                    <img src='icons/developer.jpg' alt='JohnKeru'/>
                    <h4>John Keru</h4>
                    <h5>Author</h5>
                    <h5>Contact: @gmail.com</h5>
                    <h5>No: 09109123111</h5>              
                
                <div className='devInfo'>
                    <p> Hello, I'm a fullstack developer and I developed this web app
                        alone. I'm still student of this school, if you want to help me
                        improve our website feel free to contact me on any social media
                        I have.
                    </p>
                    <div className='socialMediaPlatform'>
                        <a href='https://www.facebook.com/profile.php?id=100009257219664' rel="noreferrer" target="_blank"><img src='icons/facebook.png' alt='fb'/></a>
                        <a href='#fdfdfd' target><img src='icons/messenger.png' alt='msnger'/></a>
                    </div>
                </div>  
            </div>
            </div>
        </div>
    )
}

export default Section
