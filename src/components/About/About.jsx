/* eslint-disable react/prop-types */
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayVideo}) => {
  const handlePlayIconClick = () => {
    console.log('Play icon clicked');
    setPlayVideo(true);
  };

  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='about-icon' onClick={handlePlayIconClick}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow&apos;s Leaders Today </h2>
            <p>Embark on a transformative educationnal journey with
                our university&apos;s comprhensive education programs.Our
                cutting-edge curriculum is designed to empower students
                with the knowledge,skills, and experiences needed
                to exel in the dynamic field of education.
            </p>
            <p>
                Our university is committed to providing a high-quality
                education that is accessible to all students,regardless
                of their background or circumstances. We offer a range
                of scholarships and financial aid options to help make
                your education more affordable.
            </p>
            <p>
                Our university is dedicated to fostering a diverse and
                inclusive community of learners. We believe that diversity
                is a source of strength and innovation, and we are committed
                to creating a welcoming and supportive environment for all
                students.
            </p>
        </div>
    </div>
  )
}

export default About