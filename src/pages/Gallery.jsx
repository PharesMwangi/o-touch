import img1 from '../assets/club1.jpg'
import img2 from '../assets/club2.jpg'
import img3 from '../assets/club3.jpg'
import img4 from '../assets/club7.jpg'
import styles from './Gallery.module.css'

const photos = [
  { src: img1, label: 'The Bar',          span: 'tall',  caption: 'Premium spirits line the shelves under our signature blue light.' },
  { src: img2, label: 'Lounge Vibes',     span: '',      caption: 'Settle in. The night is young and the seats are warm.' },
  { src: img3, label: 'O\'Touch Sign',    span: '',      caption: 'Find us in the heart of Mwea — wings, spirits & more.' },
  { src: img4, label: 'Celebration',      span: 'wide',  caption: 'Every milestone deserves a moment. We light the candles.' },
]

export default function Gallery() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>The Atmosphere</p>
        <h1 className={styles.title}>Inside O'Touch</h1>
        <p className={styles.sub}>
          A glimpse into the moments that define us — the light, the laughter, the late nights.
        </p>
      </div>

      <div className={styles.grid}>
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`${styles.item} ${photo.span === 'tall' ? styles.tall : ''} ${photo.span === 'wide' ? styles.wide : ''} animate-fade-up`}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <img src={photo.src} alt={photo.label} className={styles.img} />
            <div className={styles.overlay}>
              <p className={styles.overlayLabel}>{photo.label}</p>
              <p className={styles.overlayCaption}>{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <p className={styles.footerLogo}>O'Touch</p>
        <p className={styles.footerSub}>Mwea, Kirinyaga · Open daily from 5 PM</p>
        <p className={styles.footerCopy}>© {new Date().getFullYear()} O'Touch Liquor. All rights reserved.</p>
      </footer>
    </main>
  )
}
