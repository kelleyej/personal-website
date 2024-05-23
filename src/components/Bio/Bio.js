import Photo from '../../assets/selfie.jpg';
import './Bio.css';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png'


export default function Bio(){
    return (
        <main id='bio-container'>
            <section className='bio'>
            <div className='media-container'>
                <a href='https://github.com/kelleyej'><img className='github' src={Github} /></a>
                <a href='https://www.linkedin.com/in/kelleyej/'><img className='linkedin' src={Linkedin} /></a> 
            </div>
                <img className='photo' src={Photo} />
                <h2>Hello, there!</h2>
                <p>This will be my bio, This will be my bio,This will be my bio,This will be my bio,This will be my bio, </p>
            </section>
            <section>
                <img className='mountain' />
            </section>
        </main>
    )
}