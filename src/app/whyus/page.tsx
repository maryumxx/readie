import Header from "../components/header";
import styles from "@/app/styles/Home.module.css"
export default function WhyUS(){
    return(
        <main>
            <Header/>
            <div>
                <h1 className="text-5xl  text-center bg-sky-200 bg-opacity-35 p-20">WHY CHOOSE US?</h1>
            </div>
            <div className={styles.maincard}>
                <div className={styles.carddiv}>
                    <img className="w-40" src="trophy.avif" alt="" />
                    <h2 className={styles.cardheading}>Award Winning</h2>
                    <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Repudiandae unde veritatis ducimus</p>
                </div>
                <div className={styles.carddiv}>
                    <img className="w-40" src="train.avif" alt="" />
                    <h2 className={styles.cardheading}>Progress Tracking</h2>
                    <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Repudiandae unde veritatis ducimus</p>
                </div>
                <div className={styles.carddiv}>
                    <img className="w-40" src="blocks.avif" alt="" />
                    <h2 className={styles.cardheading}>Easy to Use</h2>
                    <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Repudiandae unde veritatis ducimus</p>
                </div>
                <div className={styles.carddiv}>
                    <img className="w-40" src="intuition.avif" alt="" />
                    <h2 className={styles.cardheading}>Interactive And Intuitive</h2>
                    <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Repudiandae unde veritatis ducimus</p>
                </div>
                <div className={styles.carddiv}>
                    <img className="w-40" src="no1.avif" alt="" />
                    <h2 className={styles.cardheading}>High Quality Content</h2>
                    <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Repudiandae unde veritatis ducimus</p>
                </div>
            </div>
            <div className="bg-yellow-100 p-32 absolute w-full -mt-48 z-0">
                <p className="mt-32 text-center">Readie is an engaging and interactive kids learning website designed to make education fun and exciting. It features colorful animations, games, and activities tailored for children aged 3-10. With a focus on early literacy, math, and creative skills, Readie helps kids learn through play. The website offers personalized progress tracking and age-appropriate challenges to suit every learner. Safe and easy to navigate, Readie ensures a fun-filled learning journey for young minds.</p>
                <div className="flex justify-center gap-x-10 mt-10">
                    <img className="w-28" src="apple.avif" alt="   " />
                    <img className="w-28" src="google.avif" alt="" />
                </div>
            </div>
        </main>
    )
}