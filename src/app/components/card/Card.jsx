import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpg" alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2024 - </span>
                <span className={styles.category}>CUTURE</span>
            </div>
            <h1>Chương 37: Ngọn nguồn sự việc</h1>
            <p className={styles.desc}>
            Trong khu rừng tối tăm vang lên tiếng sột soạt, Giang Nhất Ẩm ngẩng đầu nhìn lên, bắt gặp ánh mắt của đứa trẻ đang thò đầu ra.

"Cậu đến rồi à." Cô vui vẻ vẫy tay, "Hôm nay chúng ta ngồi bên bàn ăn cơm được không?"

Đứa trẻ nhìn bàn ghế, nhưng không động đậy....
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}
