import Profile1 from './images/channel-1.jpeg';
import Profile2 from './images/channel-2.jpeg';
import Profile3 from './images/channel-3.jpeg';
import Profile4 from './images/channel-4.jpeg';
import Profile5 from './images/channel-5.jpeg';
import Profile6 from './images/channel-6.jpeg';

const images = [Profile1, Profile2, Profile3, Profile4,Profile5,Profile6];

function randomPicture() {
    const randomIndex = Math.floor(Math.random() * images.length);  
    return images[randomIndex];
}

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={randomPicture()} alt="Profile picture" />
            <h2 className='card-title'>Omua Shu</h2>
            <p className='card-text'>I make Youtube videos and play video game</p>
        </div>
    );
}

export default Card;



