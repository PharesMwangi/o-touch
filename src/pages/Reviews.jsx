import styles from './Reviews.module.css'

const reviews = [
  {
    name: 'James Mwangi',
    role: 'Regular Customer',
    rating: 5,
    date: 'March 2025',
    review:
      'O\'Touch is my go-to spot every Friday. The vibes are unmatched, the drinks are premium and the staff treat you like family. You walk in as a stranger and leave as a regular. Highly recommend!',
    avatar: 'JM',
  },
  {
    name: 'Wanjiku Njoroge',
    role: 'Birthday Celebration',
    rating: 5,
    date: 'January 2025',
    review:
      'I celebrated my 30th birthday here and it was absolutely magical. The team went above and beyond to make sure everything was perfect. The cake, the music, the ambiance — chef\'s kiss. Thank you O\'Touch!',
    avatar: 'WN',
  },
  {
    name: 'Peter Kamau',
    role: 'First Time Visitor',
    rating: 4,
    date: 'April 2025',
    review:
      'Visited for the first time last weekend and I was genuinely impressed. The bar is stocked with quality spirits at very fair prices. The lounge area is comfortable and the music was on point all night.',
    avatar: 'PK',
  },
  {
    name: 'Aisha Mohamed',
    role: 'Corporate Event',
    rating: 5,
    date: 'February 2025',
    review:
      'We hosted our company end-of-year party here and it was a huge success. The private space was well set up, the food from the restaurant was delicious, and everyone kept asking where we found the venue. Will be back!',
    avatar: 'AM',
  },
  {
    name: 'Brian Ochieng',
    role: 'Regular Customer',
    rating: 5,
    date: 'May 2025',
    review:
      'Best spot in Mwea without a doubt. The accommodation is clean and comfortable — perfect when you don\'t want the night to end too soon. Affordable luxury is the best way to describe O\'Touch.',
    avatar: 'BO',
  },
  {
    name: 'Grace Wairimu',
    role: 'Date Night',
    rating: 4,
    date: 'March 2025',
    review:
      'Brought my partner here for a date night and it exceeded our expectations. The atmosphere is warm and intimate, not too loud, which made conversation easy. The cocktails were creative and really good.',
    avatar: 'GW',
  },
]

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={i <= count ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <main className={styles.page}>

      {/* ── HEADER ── */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>What People Say</p>
        <h1 className={styles.title}>Guest Reviews</h1>
        <p className={styles.sub}>
          Real words from real people who've experienced O'Touch. We let our guests do the talking.
        </p>

        {/* Overall rating strip */}
        <div className={styles.ratingStrip}>
          <span className={styles.ratingBig}>{avg}</span>
          <div>
            <Stars count={5} />
            <p className={styles.ratingLabel}>Based on {reviews.length} reviews</p>
          </div>
        </div>
      </div>

      {/* ── CARDS GRID ── */}
      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <div
            key={i}
            className={`${styles.card} animate-fade-up`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Quote mark */}
            <span className={styles.quote}>"</span>

            <p className={styles.reviewText}>{r.review}</p>

            <Stars count={r.rating} />

            <div className={styles.cardFooter}>
              <div className={styles.avatar}>{r.avatar}</div>
              <div>
                <p className={styles.name}>{r.name}</p>
                <p className={styles.meta}>{r.role} · {r.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── LEAVE A REVIEW CTA ── */}
      <div className={styles.cta}>
        <p className={styles.ctaEyebrow}>Visited O'Touch?</p>
        <h2 className={styles.ctaTitle}>Share Your Experience</h2>
        <p className={styles.ctaSub}>
          Your words help others discover us and push us to keep doing better.
        </p>
        <a
          href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
          target="_blank"
          rel="noreferrer"
          className={styles.ctaBtn}
        >
          Leave a Review on Google ↗
        </a>
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
