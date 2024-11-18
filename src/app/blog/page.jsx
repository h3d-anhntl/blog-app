import React from 'react'
import styles from './blogPage.module.css'
import { CardList } from '../components/cardList/CardList'
import { Menu } from '../components/menu/Menu'

const Blog = async({ searchParams}) => {
  const params = await Promise.resolve(searchParams);
  const page = parseInt(params.page) || 1;
  const {cat} = params;
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <CardList page={page} cat={cat}/>
            <Menu/>
        </div>
    </div>
  )
}

export default Blog;