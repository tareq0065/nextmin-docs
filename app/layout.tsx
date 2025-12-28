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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Nextmin',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              description: 'Production-ready Next.js admin template with a scalable Node.js backend. Ideally for startups and seamless full-stack development.',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                ratingCount: '1',
              },
            }),
          }}
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
