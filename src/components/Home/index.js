import './styles.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoS from '../../assets/images/Logo-S.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={'Hi,'.split('')} idx={12} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={'I\'m'.split('')} idx={15} />
            <img src={LogoS} alt="Logo S" />
            <AnimatedLetters letterClass={letterClass} strArray={'ylvia'.split('')} idx={18} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={'web developper.'.split('')} idx={23} />
          </h1>
          <h2>Full stack developper | PHP | Symfony | React</h2>
          <Link to="/contact" className="flat-button">CONTACTEZ-MOI</Link>
        </div>
        <Logo />
      </div>
    </>
  );
};

export default Home;
