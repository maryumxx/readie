import Header from "./components/header";
import styles from "@/app/styles/Home.module.css"

export default function Home (){
  return(
    <main>
      <Header/>
      <div className="flex justify-center gap-x-80 -ml-[160px] mt-24">
      <div>
        <img className={styles.picture1} src="pencil.avif" alt="" />
        <div  className={styles.flex} >
          <img className={styles.picture4} src="book.jpg" alt="" />
        <h1 className={styles.heroheading}>The App <br /> That Makes <br /> Reading Fun!</h1>
        </div>
        <div className={styles.flex}>
          <img className={styles.picture2} src="bee.jpg" alt="" />
          <img className={styles.picture3} src="book2.jpg" alt="" />
        </div>
      </div>
      <div>
        <img className="w-[500px]" src="A-letter.avif" alt="" />
      </div>
      </div>
    </main>
  )
}