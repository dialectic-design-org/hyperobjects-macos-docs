import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className="container container--narrow padding-vert--xl">
        <h1>Hyperobjects MacOS Docs</h1>
        <p>Internal developer <a href="/docs/intro">documentation</a> for Hyperobjects MacOS app.</p>
      </main>
    </Layout>
  );
}
