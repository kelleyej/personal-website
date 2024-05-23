import Photo from '../../assets/selfie.jpg';
import './Bio.css';

export default function Bio(){
    return (
        <main className='bio-container'>
            <section className='bio'>
                <img className='photo' src={Photo} />
                <h2>Hello, there!</h2>
            </section>
            <section>
                <img className='mountain' />
            </section>
        </main>
    )
}