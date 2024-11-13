import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/menuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts widthImage={false}/>

      <h2 className={styles.subTitle}>{"Discover by topic"}</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      
      
      <h2 className={styles.subTitle}>{"Chosen by editor"}</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts widthImage={true}/>
    </div>
  )
}
