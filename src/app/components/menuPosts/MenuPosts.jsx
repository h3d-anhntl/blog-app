import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./menuPosts.module.css"

const MenuPosts = ({widthImage}) => {
  return (
    <div>
        <div className={styles.items}>
        <Link href="/" className={styles.item}>
            {widthImage && (
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpg" alt='' fill className={styles.image} />
                </div>
            )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.postTitle}>
            Trong khu rừng tối tăm vang lên tiếng sột soạt
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
            {widthImage && (
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpg" alt='' fill className={styles.image} />
                </div>
            )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.postTitle}>
            Trong khu rừng tối tăm vang lên tiếng sột soạt
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
        {widthImage && (
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpg" alt='' fill className={styles.image} />
                </div>
            )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
            Trong khu rừng tối tăm vang lên tiếng sột soạt
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
        {widthImage && (
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpg" alt='' fill className={styles.image} />
                </div>
            )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
            <h3 className={styles.postTitle}>
            Trong khu rừng tối tăm vang lên tiếng sột soạt
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MenuPosts