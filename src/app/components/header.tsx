import styles from "@/app/styles/Home.module.css"
import Link from "next/link"
export default function Header(){
    return(
        <main>
            <div className={styles.headerflex}>
                <div className="">
                    <img className={styles.logoimg} src="readie-logo.png" alt="" />
                </div>
                <div className={styles.navflex}>
                <div className={styles.flex}>
                    <Link href="/">
                    <p className={styles.navstyle}>Home</p>
                    </Link>
                    <Link href="/whyus">
                    <p className={styles.navstyle}>Why Us</p>
                    </Link>
                    <Link href="/how">
                    <p className={styles.navstyle}>How It Works</p>
                    </Link>
                
                    <p className={styles.navstyle}>Support</p>
                    <p className={styles.navstyle}>Contact</p>
                </div>
                <div className={styles.flex}>
                    <img className={styles.icons} src="facebook.png" alt="" />
                    <img className={styles.icons} src="instagram.png" alt="" />
                    <img className={styles.icons} src="youtube.png" alt="" />
                </div>
                </div>
            </div>
        </main>
    )
}