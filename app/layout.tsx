import { Layout } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';

import 'nextra-theme-docs/style.css';
import './globals.css';
import config from '@/config';
import { DocsNavBar } from '@/components/DocsNavBar';
import { DocsFooter } from '@/components/DocsFooter';
import pack from '../package.json';

export const metadata = config.metadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap();
  const { nextraLayout, head } = config;

  return (
    <html lang="en" dir="ltr">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body>
        <Layout
          banner={
            <Banner storageKey={`release-notes-${pack.version}`}>
              ✨ v{pack.version} Released -{' '}
              <a href="/docs/release-notes">See the release notes</a>
            </Banner>
          }
          navbar={<DocsNavBar />}
          pageMap={pageMap}
          docsRepositoryBase={nextraLayout.docsRepositoryBase}
          footer={<DocsFooter />}
          sidebar={nextraLayout.sidebar}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
