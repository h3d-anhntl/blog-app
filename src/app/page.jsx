import Image from "next/image";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import styles from "./home.module.css"
import { Featured } from "./components/featured/Featured";
import { CategoryList } from "./components/categoryList/CategoryList";
import { CardList } from "./components/cardList/CardList";
import { Menu } from "./components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
}
