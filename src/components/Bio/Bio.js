import Mountain from '../../assets/mountain.avif';
import './Bio.css';

export default function Bio(){
    return (
        <main className='bio-container'>
            <section className='bio'>
                <p>This will be the bio</p>
            </section>
            <section>
                <img className='mountain' />
            </section>
        </main>
    )
}