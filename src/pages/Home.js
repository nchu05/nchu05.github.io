import React from 'react';
import Nav from '../components/Nav'
import Icons from '../components/Icon'
import Footer from '../components/Footer'

const Home = () => {
    return(
        <div className="page">
            <div className="half"></div>
            <Nav/>
            <div className="intro">
                <div className="intro-pic">
                    <div>
                        <h1>Hi, I'm Nathan! 👋</h1>
                        <h2>CS major. Android developer. Problem solver.</h2>
                        <Icons/>
                    </div>
                <img className="img" src="public/me2.jpg" alt="me" />
                </div>
                <h4>
                    My name is Nathan, and I'm studying Computer Science at Cornell University. I'm interested in constantly 
                    <br/> finding ways to <span className="highlight"> improve myself</span>, <span className="highlight"> learn new 
                    concepts</span>, and use computer science to <span className="highlight"> produce positive change</span>.
                    <br/>
                    <br/>
                    I'm excited for the potential of <span className="highlight">Android development</span>. With the 
                    rise of artificial intelligence and machine<br/> learning, there's a lot of room for app development and the ability
                    for mobile applications to <span className="highlight">tell the story</span> <br/>of a company.
                    <br/>
                    <br/>
                    I also love meeting new people, so please feel free to message or email me at nwc35@cornell.edu!
                </h4>
            </div>
            <Footer/>
        </div>
    )
}

export default Home