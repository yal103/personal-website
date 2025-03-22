import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Yangyang!</h1>
            <p className={styles.description}>I'm a full-stack developer with 5 years of experience using React 
                and NodeJS. Reach out if you'd like to learn more!
            </p>
            <a href="mailto:yyangyangliu@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img 
            src="../../../assets/hero/heroImage.png" 
            alt="Hero image of me" 
            className={styles.heroImg}
        />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero