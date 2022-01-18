import Head from "next/head";
import Link from "next/link";

import { getLessons } from "../data/lesson";

import Corner from "../components/corner";
import getCourseConfig from "../data/course";

export let meta = (data) => {
  return {
    title: data.title,
    description: data.description,
  };
};

export default function Lessons({ sections }) {
  const courseInfo = getCourseConfig();
  console.log(process.env.BASE_URL);
  return (
    <>
      <Head>
        <title>{courseInfo.title}</title>
        {/* TODO description */}
      </Head>
      <div>
        <div className="jumbotron">
          <div className="courseInfo">
            <div className="courseInfo-inner">
              <h1>{courseInfo.title}</h1>
              <h2>{courseInfo.subtitle}</h2>
              <div className="author">
                <div className="image">
                  <img
                    src={`${process.env.BASE_URL}images/author.jpg`}
                    alt="author image"
                    className="image"
                  />
                </div>
                <div className="info">
                  <div className="name">{courseInfo.author.name}</div>
                  <div className="company">{courseInfo.author.company}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="courseIcon">
            <img
              src={`${process.env.BASE_URL}images/course-icon.png`}
              alt="course icon"
            />
          </div>
        </div>
        {courseInfo.frontendMastersLink ? (
          <a href={courseInfo.frontendMastersLink} className="cta-btn">
            Watch on Frontend Masters
          </a>
        ) : null}
        <div className="main-card">
          <h1 className="lesson-title">Table of Contents</h1>
          <div className="lesson-content">
            <ol className="sections-name">
              {sections.map((section) => (
                <li key={section.slug}>
                  <div className="lesson-details">
                    <div className="lesson-preface">
                      <i className={`fas fa-${section.icon}`}></i>
                    </div>
                    <div className="lesson-text">
                      <h2 className="lesson-section-title">{section.title}</h2>
                      <ol>
                        {section.lessons.map((lesson) => (
                          <li key={lesson.slug}>
                            <Link href={lesson.fullSlug}>{lesson.title}</Link>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <Corner />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const sections = await getLessons();
  return {
    props: {
      sections,
    },
  };
}