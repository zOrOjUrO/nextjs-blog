import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Gokul 👋<br />An IoT enthusiast <br />
        🔭 I’m currently working on Niriksana - an Embedded System for remote monitoring<br />
        🌱 I’m currently learning React, Nextjs, OpenCV<br />
        👯 I’m looking to collaborate on open source libraries / templates relating to android or microcontroller projects
        <br />🤝 I’m looking for help with Lora protocol implementation on SX1278<br />
        📄 Know about my experiences - <Link href="https://drive.google.com/file/d/1nj76YGYjCA_QeRcjH69eH-7SvmW_GLAk/view">My Resume</Link><br />
        😁 Connect with me on - <Link href="https://www.linkedin.com/in/gokulraj1010/">Linkedin</Link></p>
        <p>
          (This is a simple starter website - built with references from {' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}