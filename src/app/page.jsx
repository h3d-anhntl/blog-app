import Image from "next/image";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import styles from "./homepage.module.css"
import { Featured } from "./components/featured/Featured";
import { CategoryList } from "./components/categoryList/CategoryList";
import { CardList } from "./components/cardList/CardList";
import { Menu } from "./components/menu/Menu";

export default async function Home({ searchParams }) {
  const params = await Promise.resolve(searchParams);
  const page = parseInt(params.page) || 1;
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu/>
      </div>
    </div>
  );
}
