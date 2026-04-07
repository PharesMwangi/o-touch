import { useState } from 'react'
import loungeImg from '../assets/club2.jpg'
import barImg    from '../assets/club1.jpg'
import cakeImg   from '../assets/club7.jpg'
import styles    from './Home.module.css'

export default function Home() {
  const [tab, setTab] = useState('drinks')

  return (
    <main>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={`${styles.heroEyebrow} animate-fade-up`}>Mwea · Kirinyaga</p>
          <h1 className={`${styles.heroHeading} animate-fade-up delay-1`}>
            Your Luxury<br />
            <em>Liquor Store</em><br />
            in the Kenyan Highlands
          </h1>

          <div className={styles.heroDivider} />

          <div className={`${styles.heroBody} animate-fade-up delay-2`}>
            <div className={styles.heroImgWrap}>
              <img src={loungeImg} alt="O'Touch lounge interior" className={styles.heroImg} />
              <div className={styles.heroImgBadge}>Est. Mwea</div>
            </div>

            <div className={styles.heroDesc}>
              <p>
                Nestled in the heart of Mwea, Kirinyaga, <strong>O'Touch Liquor</strong> is more
                than a bar — it's a sanctuary. We curate premium spirits, craft cocktails, and an
                atmosphere that wraps around you like a warm highland evening.
              </p>
              <p>
                Whether you're unwinding after a long week, celebrating life's milestones, or
                simply seeking good company, our doors are open. Expect world-class hospitality
                delivered with a distinctly Kenyan heart.
              </p>
              <p className={styles.karibu}>Karibu sana. 🥃</p>

              <div className={styles.heroTags}>
                <span>Premium Spirits</span>
                <span>Live Vibes</span>
                <span>Affordable Luxury</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / TABS ── */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <p className={styles.sectionEyebrow}>About O'Touch</p>
          <h2 className={styles.sectionTitle}>More Than a Night Out</h2>
          <p className={styles.sectionSub}>
            We believe a great evening feeds the soul as much as the senses.
            Explore what we offer.
          </p>

          {/* Tab buttons */}
          <div className={styles.tabBar}>
            <button
              className={`${styles.tabBtn} ${tab === 'drinks' ? styles.tabActive : ''}`}
              onClick={() => setTab('drinks')}
            >
              🍸 Drinks & Bar
            </button>
            <button
              className={`${styles.tabBtn} ${tab === 'wellness' ? styles.tabActive : ''}`}
              onClick={() => setTab('wellness')}
            >
              🌿 Wholistic Wellness
            </button>
          </div>

          {/* Tab panels */}
          {tab === 'drinks' && (
            <div className={`${styles.tabPanel} animate-fade-in`}>
              <div className={styles.tabImgWrap}>
                <img src={barImg} alt="O'Touch bar" className={styles.tabImg} />
              </div>
              <div className={styles.tabText}>
                <h3>A Bar That Speaks Your Language</h3>
                <p>
                  Our bar is stocked with an expertly chosen selection of local and international
                  spirits — from aged Scotch whiskies to craft gins and premium Kenyan brews. Every
                  bottle tells a story; every pour is intentional.
                </p>
                <p>
                  Our bartenders are craftspeople. They don't just mix drinks — they read the room,
                  listen to your mood, and create an experience tailored to you. Whether you prefer
                  a classic Old Fashioned or a highland-inspired signature cocktail, we've got the
                  perfect pour waiting.
                </p>
                <ul className={styles.featureList}>
                  <li>✦ Curated premium spirits selection</li>
                  <li>✦ Signature O'Touch cocktail menu</li>
                  <li>✦ Local & imported beers on tap</li>
                  <li>✦ Non-alcoholic crafted mocktails</li>
                </ul>
              </div>
            </div>
          )}

          {tab === 'wellness' && (
            <div className={`${styles.tabPanel} animate-fade-in`}>
              <div className={styles.tabImgWrap}>
                <img src={cakeImg} alt="Celebration at O'Touch" className={styles.tabImg} />
              </div>
              <div className={styles.tabText}>
                <h3>Celebration as a Path to Wholeness</h3>
                <p>
                  At O'Touch, we understand that wellness isn't only found in silence — sometimes
                  it's found in laughter, in dancing, in cutting a cake surrounded by people who
                  genuinely see you. Joy is medicine.
                </p>
                <p>
                  We create intentional spaces for milestone celebrations, communal healing, and
                  personal transformation. Our environment is designed to lower your guard, lift
                  your spirit, and remind you that you deserve to feel good.
                </p>
                <ul className={styles.featureList}>
                  <li>✦ Birthday & milestone celebrations</li>
                  <li>✦ A warm, judgment-free environment</li>
                  <li>✦ Community-centred hospitality</li>
                  <li>✦ Affordable gatherings, priceless memories</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER STRIP ── */}
      <footer className={styles.footer}>
        <p className={styles.footerLogo}>O'Touch</p>
        <p className={styles.footerSub}>Mwea, Kirinyaga · Open daily from 5 PM</p>
        <p className={styles.footerCopy}>© {new Date().getFullYear()} O'Touch Liquor. All rights reserved.</p>
      </footer>

    </main>
  )
}
