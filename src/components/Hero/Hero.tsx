import Header from '../Header/Header'
import style from './hero.module.scss'

// Images
import Play from '../../assets/icons/play.svg'
import HeroImage from '../../assets/Content/Hero.png'

const Hero = () => {
  return <div className={`${style.hero} section`}>
    <Header />

    <div className={style.left}>
      <h1 className='gradient_color'>Virtual Reality Business Solutions</h1>
      <p className='-small'>We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.</p>
      <div className={style.buttons}>
        <button className="_primary">Join Us</button>
        <button className="_secondary">
          <img src={Play} alt="" />
          Watch video
        </button>
      </div>
    </div>
    <div className={style.right}>
      <img src={HeroImage} alt="" />
    </div>
  </div>
}

export default Hero