import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className="container container--narrow padding-vert--xl">
        <p>Website with <a href="/hyperobjects-macos-docs/docs/intro">documentation</a> for the Hyperobjects MacOS visual synthesis toolkit.</p>
        
        <p>See <a href="https://socratism.io">Socratism.io</a> for an impression of the capabilities.</p>

        <p>Repository links: <a href="https://github.com/dialectic-design-org/hyperobjects-macos-docs">Website</a>, <a href="https://github.com/dialectic-design-org/HyperobjectsMacOS">Code</a></p> 
        <p>Developed by: <a href="https:erwinhoogerwoord.nl">Erwin Hoogerwoord</a></p> 
      </main>
    </Layout>
  );
}
