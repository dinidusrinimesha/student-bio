import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import StudentInfo from './StudentInfo';
import Footer from './Footer';
import styles from './StudentBio.module.css';

function StudentBio() {
  return (
    <div className={styles.studentsBioPersonal}>
      <Header />
      <main className={styles.mainContent}>
        <Navigation />
        <StudentInfo />
      </main>
      <Footer />
    </div>
  );
}

export default StudentBio;