import React from 'react';
import styles from './StudentBio.module.css';

function Footer() {
  const quickLinks = ['Home', 'Course Details', 'Student Bio', 'Payments', 'Login'];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <div className={styles.schoolLogo} />
        </div>
        <div className={styles.footerColumn}>
          <address className={styles.schoolAddress}>
            12th street,<br />
            Kumarathunga Mawatha,<br />
            Colombo 07<br />
            Sri Lanka
          </address>
          <a href="#" className={styles.directionsLink}>Directions &gt;</a>
          <p className={styles.schoolContact}>
            School Office: <a href="tel:0112345567">(011) 234 5567</a><br />
            e-mail: <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          </p>
          <a href="#" className={styles.contactLink}>Contact Us &gt;</a>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.quickLinksTitle}>Quick links</h3>
          <ul className={styles.quickLinksList}>
            {quickLinks.map((link, index) => (
              <li key={index}><a href="#" className={styles.quickLink}>{link}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e96e0ee8cde05ebf69f1aee2d1dd1250a547e412a24554aa993df325d4f50236?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8" alt="" className={styles.footerDivider} />
        <div className={styles.footerCopyright}>
          <p>ABC School 2011 | All Rights Reserved</p>
          <p>Website by: Team 1 Frithcode Training Progame</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;