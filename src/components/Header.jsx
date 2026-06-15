import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/club3.jpg'
import styles from './Header.module.css'

const links = [
  { to: '/',             label: 'Home',          end: true  },
  { to: '/gallery',      label: 'Gallery',       end: false },
  { to: '/accomodation', label: 'Accommodation', end: false },
  { to: '/restruant',    label: 'Restaurant',    end: false },
  { to: '/reviews',      label: 'Reviews',       end: false },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logoWrap}>
        <img src={logoImg} alt="O'Touch Liquor" className={styles.logoImg} />
        <span className={styles.logoText}>O'Touch</span>
      </NavLink>

      {/* Desktop nav */}
      <nav className={styles.nav}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            {l.label}
          </NavLink>
        ))}
        <a
          href="https://wa.me/254700000000"
          target="_blank"
          rel="noreferrer"
          className={styles.cta}
        >
          Reserve a Spot
        </a>
      </nav>

      {/* Hamburger button — mobile only */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen(prev => !prev)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className={`${styles.bar} ${open ? styles.bar1Open : ''}`} />
        <span className={`${styles.bar} ${open ? styles.bar2Open : ''}`} />
        <span className={`${styles.bar} ${open ? styles.bar3Open : ''}`} />
      </button>

      {/* Mobile dropdown */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ''}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <a
          href="https://wa.me/254700000000"
          target="_blank"
          rel="noreferrer"
          className={styles.mobileCta}
          onClick={() => setOpen(false)}
        >
          Reserve a Spot
        </a>
      </div>
    </header>
  )
}
