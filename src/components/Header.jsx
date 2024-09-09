import React from 'react';
import styles from './StudentBio.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.schoolInfo}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c77009e8035674cdb59687b4b8c4ec1149fb57d2e347bffb7ef35c6e64ee6260?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8" alt="ABC School Logo" className={styles.schoolLogo} />
        <h1 className={styles.schoolName}>ABC School</h1>
      </div>
      <div className={styles.contactInfo}>
        <button className={styles.contactButton}>Contact Us</button>
        <div className={styles.phoneWrapper}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7b4cfc33ef616b0ca9d6c7ee6905e08982aacd6bcd6f616e9b40ecb51961e30?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8" alt="" className={styles.phoneIcon} />
          <span className={styles.phoneNumber}>(011) 2345 567</span>
        </div>
      </div>
    </header>
  );
}

export default Header;