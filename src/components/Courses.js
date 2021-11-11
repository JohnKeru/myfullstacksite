import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../css/Courses.css'
import { disableBodyScroll, enableBodyScroll } from '../themes';

const anims = {
    a: 'https://www.port.ac.uk/-/media/images/heros---1200x400-large---640x400-small/courses/ug-courses/animation1200x400jpg.jpg',
    b: 'https://www.algonquincollege.com/mediaanddesign/files/2019/09/Animation-Web-Banner.jpg',
    c: 'https://www.shsu.edu/~pin_www/T%40S/sliders/2012/images/AnimationTop.jpg',
    d: 'icons/courses/animation2.png',
    e: "https://i.gifer.com/3rNn.gif",
}
const seemore = '#9db7e0';
const Courses = () => {
    const [imageClick, setImageClick] = useState();
    const [wSize, setwSize] = useState(window.screen.width);
    const [more, setMore] = useState(false);
    const [more2, setMore2] = useState(false);
    const [more3, setMore3] = useState(false);
    const history = useHistory();
    const currentSize = 764;
    function loadImage(imageUrl) {
        setImageClick(imageUrl);
        disableBodyScroll();
    }
    function resizing() {
        setwSize(window.screen.width);
    }
    const callback = useCallback(() => {
        function clicked() {
            setImageClick(null);
            enableBodyScroll();
        }
        clicked();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', resizing);
        imageClick && document.addEventListener('click', callback);
        return () => {
            document.removeEventListener('click', callback);
            window.removeEventListener('resize', resizing);
        };
    }, [callback, imageClick, wSize])

    return (
        <div className='coursesContainer'>
            <div className='criminology_Container c1' id='course'>
                <h1 className='courseName'>Criminology</h1>
                <div className='contentContainer'>
                    <p id='ct'>
                        Criminology (from Latin crimen, "accusation", and Ancient Greek -λογία, -logia, from λόγος logos meaning: "word, reason") is the study of crime and deviant behaviour.[citation needed] Criminology is an interdisciplinary field in both the behavioural and social sciences, which draws primarily upon the research of sociologists, political scientists, economists, psychologists, philosophers, psychiatrists, biologists, social anthropologists, as well as scholars of law.
                        The term criminology was coined in 1885 by Italian law professor Raffaele Garofalo as Criminologia [it]. Later, French anthropologist Paul<br /><br />
                        {(!more && wSize < currentSize) && <span id='seeMore' style={{ color: seemore, cursor: 'pointer' }} onClick={() => more ? setMore(false) : setMore(true)}> read more ...</span>}
                        {(more || wSize > currentSize) && ` Topinard used the analogous French term Criminologie [fr].[1] Paul Topinard's major work appeared in 1879. 
                        In the eighteenth and early nineteenth centuries, the emphasis of criminology was on the reform of criminal law and not on the causes of crime. Scholars such as Cesare Beccaria and Jeremy Bentham, were more concerned with the humanitarian aspects in dealing with criminals and reforming several criminal laws. Great progress in criminology was made after the first quarter of the twentieth century. The first American textbook on criminology was written in 1920 by sociologist Maurice Parmalee under the title Criminology. Programmes were developed for the specific purpose of training students to be criminologists, but the development was rather slow.`}
                        {more && <div style={{ color: seemore, cursor: 'pointer' }} onClick={() => more ? setMore(false) : setMore(true)}> show less ...</div>}
                    </p>
                    <div className='cImage'>
                        <img src='icons/courses/crim1.png' alt='' className='crim1' />
                        <img src='icons/courses/crim2.png' alt='' className='crim2' />
                    </div>
                </div>
            </div>
            <div className='animation_Container c2' id='course'>
                <h1 className='courseName' onClick={()=> history.push('/test')}>Animation</h1>
                <div className='contentContainer'>
                    <div className='aImage'>
                        <img src={anims.a} alt='' className='a1' onClick={() => loadImage(anims.a)} />
                        <img src={anims.b} alt='' className='a2 a' onClick={() => loadImage(anims.b)} />
                        <img src={anims.c} alt='' className='a2 b' onClick={() => loadImage(anims.c)} />
                        <img src={anims.d} alt='' className='aOutofBox' />
                    </div>
                    <p id='ct'>
                        Animation is a method in which figures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. Today, most animations are made with computer-generated imagery (CGI).
                        {(!more2 && wSize < currentSize) && <span style={{ color: seemore, cursor: 'pointer' }} onClick={() => more2 ? setMore2(false) : setMore2(true)}> read more ...</span>}
                        {(more2 || wSize > currentSize) && ' Animation is a method in which figures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. Today, most animations are made with computer-generated imagery (CGI).'}
                        {more2 && <div style={{ color: seemore, cursor: 'pointer' }} onClick={() => more2 ? setMore2(false) : setMore2(true)}> show less ...</div>}
                    </p>
                </div>
            </div>
            <div className='programmer_Container c3' id='course'>
                <h1 className='courseName'>Bachelor Science Information Technology</h1>
                <div className='contentContainer forProgramming'>
                    <p id='ct'>
                        Bachelor of Science in Information Technology (BSIT) Program aims to produce students whose knowledge and competence in planning, installing, customizing, operating, managing, administering, and maintaining information technology infrastructure are grounded on the effective utilization of computers and computer software and thus enabling them to contribute worthwhile IT solutions to the business communities all over the world.
                        {(!more3 && wSize < currentSize) && <span style={{ color: seemore, cursor: 'pointer' }} onClick={() => more3 ? setMore3(false) : setMore3(true)}> read more ...</span>}
                        {(more3 || wSize > currentSize) && ' Bachelor of Science in Information Technology (BSIT) Program aims to produce students whose knowledge and competence in planning, installing, customizing, operating, managing, administering, and maintaining information technology infrastructure are grounded on the effective utilization of computers and computer software and thus enabling them to contribute worthwhile IT solutions to the business communities all over the world.'}
                        {more3 && <div style={{ color: seemore, cursor: 'pointer' }} onClick={() => more3 ? setMore3(false) : setMore3(true)}> show less ...</div>}
                    </p>
                    <div className='bImage'>
                        <img className='prog1' src={anims.e} alt='' onClick={() => loadImage(anims.e)} />
                    </div>
                </div>
            </div>
            {imageClick && <div className='imageClick'>
                <div>
                    <img src={imageClick} alt='' />
                </div>
            </div>}
        </div>
    )
}

export default Courses
