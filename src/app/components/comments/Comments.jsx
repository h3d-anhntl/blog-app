import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link';
import Image from 'next/image';

export const Comments = () => {
    const status = "authenticated";
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder='write a comment...' className={styles.input}></textarea>
                <button className={styles.button}>Send</button>
            </div>
        ):(
            <Link href="/login">Login to write a comment</Link>
        )}

        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpg" height={50} width={50} alt='' className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.userInfo}>01.01.2023</span>
                    </div>
                </div>
                <p>
                    Nghĩ rằng cậu không biết cách ngồi xuống, cô đứng lên làm mẫu: "Cứ ngồi như thế này là được rồi."
                </p>
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpg" height={50} width={50} alt='' className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.userInfo}>01.01.2023</span>
                    </div>
                </div>
                <p>
                    Nghĩ rằng cậu không biết cách ngồi xuống, cô đứng lên làm mẫu: "Cứ ngồi như thế này là được rồi."
                </p>
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpg" height={50} width={50} alt='' className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.userInfo}>01.01.2023</span>
                    </div>
                </div>
                <p>
                    Nghĩ rằng cậu không biết cách ngồi xuống, cô đứng lên làm mẫu: "Cứ ngồi như thế này là được rồi."
                </p>
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpg" height={50} width={50} alt='' className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.userInfo}>01.01.2023</span>
                    </div>
                </div>
                <p>
                    Nghĩ rằng cậu không biết cách ngồi xuống, cô đứng lên làm mẫu: "Cứ ngồi như thế này là được rồi."
                </p>
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpg" height={50} width={50} alt='' className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.userInfo}>01.01.2023</span>
                    </div>
                </div>
                <p>
                    Nghĩ rằng cậu không biết cách ngồi xuống, cô đứng lên làm mẫu: "Cứ ngồi như thế này là được rồi."
                </p>
            </div>
        </div>
    </div>
  )
}
