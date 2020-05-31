import Head from "next/head";
import Layout from "../../components/layout";
import fetch from "node-fetch";
import utilStyles from '../../styles/utils.module.css';

export default function Test({ testInfo }) {
  return (
    <Layout>
      <Head>
        <title>Test</title>
      </Head>
      <h1>Data from external API</h1>
      {testInfo.map(post => (
          <>
          <p className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>{post.title}</p>
          <p className={utilStyles.greyText}>{post.body}</p>
          </>
      ))}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // console.log(context);
  const testInfo = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    testInfo.length = 7;
  return {
    props: {
      // props for your component
      testInfo,
    },
  };
}
