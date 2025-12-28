'use client';

import { Navbar } from 'nextra-theme-docs';

export const DocsNavBar = () => {
  return (
    <>
      <Navbar
        logo={
          <div className="flex items-center gap-1">
            <div className="text-lg font-bold">NextMin</div>
          </div>
        }
        // Community discord server
        // chatLink="https://discord.com/invite/wbH82zuWMN"
        projectLink="https://github.com/tareq0065/nexmin-core"
      >
        <>
          <a
            href="/docs"
            className="mr-3 hidden md:inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-neutral-800"
          >
            Documentation
          </a>
          {/*<iframe*/}
          {/*  src="https://github.com/sponsors/tareq0065/button"*/}
          {/*  title="Tareq Aziz"*/}
          {/*  height="32"*/}
          {/*  width="114"*/}
          {/*  className="border-0 rounded-md"*/}
          {/*/>*/}
        </>
      </Navbar>
    </>
  );
};
