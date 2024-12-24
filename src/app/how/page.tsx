import Header from "../components/header";
import styles from "@/app/styles/Home.module.css";

export default function How() {
  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center items-center gap-y-10 mt-20 relative">
        <h1 className="text-5xl font-bold ">How Children Can Use the App</h1>
        <img className={styles.howimg} src="kindergarten.jpg" alt="" />
      </div>
      <div>
        <img className="absolute -mt-[750px]" src="left.avif" alt="" />
      </div>
      <p className="text-center ml-56 mr-56 mt-20 mb-20">
        Children can use the app with ease, thanks to its vibrant and intuitive
        design tailored specifically for young users. Large, colorful buttons
        and playful animations guide them seamlessly through the app, making
        navigation fun and straightforward. Whether they are learning letters,
        numbers, or shapes, children can explore various sections independently
        or with minimal assistance. The app also includes audio instructions and
        voice prompts to support kids who are still developing their reading
        skills, ensuring every child can interact with the content confidently.
        The app offers a variety of interactive activities, including
        educational games, quizzes, and puzzles, designed to make learning
        enjoyable. Kids can engage with storytelling, solve math problems, or
        unleash their creativity through drawing and coloring tools. The content
        is age-appropriate and adapts to each {`child’s`} skill level, helping them
        progress at their own pace. Rewards like badges and points motivate kids
        to keep learning while fostering a sense of achievement. Parents can
        personalize the app by setting preferences based on their {`child’s`} age
        and educational needs. They can monitor progress through dashboards that
        provide insights into their {`child's`} activities and achievements.
        Additionally, the app ensures a safe environment by eliminating ads and
        external links, giving parents peace of mind while their children learn
        and play. With its engaging features and focus on education, the app
        serves as a perfect companion for kids on their learning journey.
      </p>
    </main>
  );
}
