import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href='mailto:yyangyangliu@gmail.com'>
                    <img src="../../../assets/contact/emailIcon.png" alt="Email Icon" />
                </a>
                <a href="mailto:yyangyangliu@gmail.com">yyangyangliu@gmail.com</a>
            </li>
            <li className={styles.link}>
                <a href='https://www.linkedin.com/in/yangyang-liu-?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKcpuTRagR%2By9taRUItZewg%3D%3D'>
                    <img src="../../../assets/contact/linkedinIcon.png" alt="LinkedIn Icon" />
                </a>
                <a href="https://www.linkedin.com/in/yangyang-liu-?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKcpuTRagR%2By9taRUItZewg%3D%3D">linkedin.com/in/yangyang-liu-</a>
            </li>
            <li className={styles.link}>
                <a href='https://github.com/yal103'>
                    <img src="../../../assets/contact/githubIcon.png" alt="GitHub Icon" />
                </a>
                <a href="https://github.com/yal103">github.com/yal103</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact