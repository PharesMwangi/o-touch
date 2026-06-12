//import { useState } from "react"
import bnb1 from '../assets/bnb.jpg'
import bnb2 from '../assets/bnb1.jpg'
import styles from './Accomodation.module.css'

const photos = [
        { src: bnb1, label: 'Our Rooms', span: '', caption: 'Experience the comfort of our cozy rooms, designed for a restful stay after a night of fun.' },
        { src: bnb2, label: 'Relax & Unwind', span: '', caption: 'Unwind in our serene accommodations, where every detail is crafted for your relaxation.' },
    ]

export default function Accommodation(){
    return(
        <main className={styles.page}>
            <div className={styles.header}>
                <p className={styles.eyebrow}>Stay With Us.</p>
                <h1 className={styles.title}>Our Serene Accommodation</h1>
                <p className={styles.sub}>
                    A comfort that gives you peace after a long day of hustles. Our rooms are designed to be your sanctuary, where you can relax and recharge for the next adventure.
                </p>
            </div>

            <div className={styles.grid}>
                {photos.map((photo, i) =>(
                    <div
                    key={i}
                    className={`${styles.item} ${photo.span === ''}`}/*this code*/
                    style ={{ animationDelay: `${i * 0.12}s` }}>
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