import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            <Image src={item.img} alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{item.createAt.substring(0, 10)} -{" "}</span>
                <span className={styles.category}>{item.catSlug}</span>
            </div>
            <h1>{item.title}</h1>
            <p className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}>
            
            </p>
            <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}
