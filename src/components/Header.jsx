import { NavLink } from 'react-router-dom'
import logoImg from '../assets/club3.jpg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logoWrap}>
        <img src={logoImg} alt="O'Touch Liquor" className={styles.logoImg} />
        <span className={styles.logoText}>O'Touch</span>
      </NavLink>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/accomodation"
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          Accommodation
        </NavLink>
        <a
          href="https://wa.me/254700000000"
          target="_blank"
          rel="noreferrer"
          className={styles.cta}
        >
          Reserve a Spot
        </a>
      </nav>
    </header>
  )
}
