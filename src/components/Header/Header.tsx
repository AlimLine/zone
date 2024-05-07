import style from './header.module.scss'

// Images
import Logo from '../../assets/icons/Logo.svg'

const Header = () => {
  return (
    <header className={`${style.header} section`}>
      <img src={Logo} alt="" />

      <nav className={style.nav}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Service</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <button className='_primary' type='button'> 
          Contact Us
        </button>
      </nav>
    </header>
  )
}

export default Header