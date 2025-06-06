import Article from '@node-core/ui-components/Containers/Article';
import type { FC, PropsWithChildren } from 'react';

import WithBreadcrumbs from '#site/components/withBreadcrumbs';
import WithFooter from '#site/components/withFooter';
import WithMetaBar from '#site/components/withMetaBar';
import WithNavBar from '#site/components/withNavBar';
import WithSidebar from '#site/components/withSidebar';
import { ReleaseModalProvider } from '#site/providers/releaseModalProvider';

const AboutLayout: FC<PropsWithChildren> = ({ children }) => (
  <ReleaseModalProvider>
    <WithNavBar />

    <Article>
      <WithSidebar navKeys={['about', 'getInvolved']} />

      <div>
        <main>{children}</main>

        <WithMetaBar />
      </div>

      <WithBreadcrumbs navKeys={['about', 'getInvolved']} />
    </Article>

    <WithFooter />
  </ReleaseModalProvider>
);

export default AboutLayout;
