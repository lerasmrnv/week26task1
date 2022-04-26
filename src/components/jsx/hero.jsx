import '../styles/normalize.css';
import '../styles/style.css';

function Hero(props) {
    return (
        <div className='hero-card'>
            <h2 className='hero-name'>{props.name}</h2>
            <p className='hero-universe'>Вселенная: {props.universe}</p>
            <p className='hero-alterEgo'>Альтер эго: {props.alterEgo}</p>
            <p className='hero-typeOfActivity'>Род деятельности: {props.typeOfActivity}</p>
            <p className='hero-friends'>Друзья: {props.friends}</p>
            <p className='hero-superpowers'>Суперсилы: {props.superpowers}</p>
            <img src={props.image} className='hero-image'></img>
            <p className='hero-moreDetailed'>{props.moreDetailed}</p>
        </div>
    );
}

export default Hero;