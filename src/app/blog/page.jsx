import React from 'react'
import styles from './blogPage.module.css'
import { CardList } from '../components/cardList/CardList'
import MenuPosts from '../components/menuPosts/MenuPosts'
import { Menu } from '../components/menu/Menu'

const Blog = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}

export default Blog;