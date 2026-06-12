import beef      from '../assets/beefmenu.jpg'
import breakfast from '../assets/breakfast.jpg'
import dinner    from '../assets/dinnermenu.jpg'
import lunch     from '../assets/lunchmenu.jpg'
import meal1     from '../assets/meal.jpeg'
import meal2     from '../assets/meal4.jpeg'
import styles    from './Restruant.module.css'

const featuredDishes = [
  { src: meal1, label: 'Our Signature Dish', caption: 'A carefully crafted platter that captures the soul of our kitchen.' },
  { src: meal2, label: 'Fresh Fish',         caption: 'Straight from the source — seasoned, grilled to perfection.' },
]

const menus = [
  { src: beef,      label: 'Beef Menu',      caption: 'Rich, tender cuts cooked the way beef deserves to be.' },
  { src: breakfast, label: 'Breakfast Menu', caption: 'Start your morning right with our warm, hearty breakfast spread.' },
  { src: lunch,     label: 'Lunch Menu',     caption: 'Midday fuel that keeps you going — flavourful and satisfying.' },
  { src: dinner,    label: 'Dinner Menu',    caption: 'After a long day, let our dinner do the talking.' },
]

export default function Restruant() {
  return (
    <main className={styles.page}>

      {/* ── PAGE HEADER ── */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Eat With Us</p>
        <h1 className={styles.title}>Our Meals Be The Best 👌</h1>
        <p className={styles.sub}>
            Our meals are served with hearts full of Love. <br />
          Com'n Join our tables and let your hunger be our business now 😎
        </p>
      </div>

      {/* ── FEATURED DISHES ── */}
      <div className={styles.featuredGrid}>
        {featuredDishes.map((dish, i) => (
          <div key={i} className={`${styles.item} animate-fade-up`} style={{ animationDelay: `${i * 0.15}s` }}>
            <img src={dish.src} alt={dish.label} className={styles.img} />
            <div className={styles.overlay}>
              <p className={styles.overlayLabel}>{dish.label}</p>
              <p className={styles.overlayCaption}>{dish.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── MENU INTRO ── */}
      <div className={styles.menuIntro}>
        <p className={styles.menuIntroEyebrow}>Our Menus</p>
        <h2 className={styles.menuIntroTitle}>Something for Every Hour of the Day</h2>
        <p className={styles.menuIntroSub}>
          Whether you're waking up slow or winding down after a long night, our kitchen has
          you covered. From a hearty breakfast to a rich dinner, every menu is crafted with
          fresh ingredients and a whole lot of love.
        </p>
      </div>

      {/* ── MENUS GRID ── */}
      <div className={styles.menuGrid}>
        {menus.map((menu, i) => (
          <div key={i} className={`${styles.item} animate-fade-up`} style={{ animationDelay: `${i * 0.12}s` }}>
            <img src={menu.src} alt={menu.label} className={styles.img} />
            <div className={styles.overlay}>
              <p className={styles.overlayLabel}>{menu.label}</p>
              <p className={styles.overlayCaption}>{menu.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <p className={styles.footerLogo}>O'Touch</p>
        <p className={styles.footerSub}>Mwea, Kirinyaga · Open daily from 5 PM</p>
        <p className={styles.footerCopy}>© {new Date().getFullYear()} O'Touch Liquor. All rights reserved.</p>
      </footer>

    </main>
  )
}
