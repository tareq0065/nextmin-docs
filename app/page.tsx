export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Ship a full Admin + REST API from a JSON Schema
        </h1>
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-500/30">
          <span className="hidden sm:inline">Try it live — zero config</span>
          <span className="sm:border-l sm:pl-2 sm:ml-2 border-emerald-200/50 dark:border-emerald-500/30">
            Playground now available
          </span>
        </div>
        <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
          NextMin turns your JSON schema into a production‑ready REST API and a
          beautiful Admin Panel. Model your data, set permissions, and get CRUD,
          auth, file uploads, and live updates out of the box.
        </p>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Deploy in hours, not weeks. Start by editing a schema in the browser
          and see changes reflected instantly in the Admin.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://nextmin-playground.gscodes.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Launch Playground
          </a>
        </div>
      </section>

      <section className="mt-8 grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">nextmin-node</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            A secure REST API with auth, CRUD, validation, and file storage
          </p>
          <a
            href="/docs/nextmin-node"
            className="inline-block mt-3 text-blue-600 hover:underline"
          >
            Read the server docs →
          </a>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">nextmin-react</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            A plug‑and‑play React admin with auth pages, lists, forms, and live
            updates
          </p>
          <a
            href="/docs/nextmin-react"
            className="inline-block mt-3 text-blue-600 hover:underline"
          >
            Read the React docs →
          </a>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Quick links</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <a
              href="/docs/nextmin-node"
              className="text-blue-600 hover:underline"
            >
              Server toolkit: nextmin-node
            </a>
          </li>
          <li>
            <a
              href="/docs/nextmin-react"
              className="text-blue-600 hover:underline"
            >
              React admin: nextmin-react
            </a>
          </li>
          <li>
            <a
              href="/docs/release-notes"
              className="text-blue-600 hover:underline"
            >
              Changelogs: Release notes
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Get started in 60 seconds
        </h2>
        <pre className="bg-black/5 dark:bg-white/10 rounded-md p-4 text-sm overflow-x-auto">
          <code>{`# 1) Install the server toolkit
npm i @airoom/nextmin-node

# 2) Install the React admin (optional, for dashboards)
npm i @airoom/nextmin-react`}</code>
        </pre>
        <ol className="mt-4 list-decimal ml-6 space-y-1 text-sm">
          <li>
            Start your nextmin-node server and open your database Settings table
            to copy the generated API key
          </li>
          <li>
            Set NEXT_PUBLIC_NEXTMIN_API_URL and NEXT_PUBLIC_NEXTMIN_API_KEY in
            your React app
          </li>
          <li>
            Add &lt;NextMinProvider&gt; and render &lt;AdminApp /&gt; in your
            admin routes
          </li>
        </ol>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
          That’s it — you have auth, CRUD pages, file uploads, and a
          live‑updating admin on top of your schema.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Next.js: works out of the box
        </h2>
        <ul className="list-disc ml-6 text-sm space-y-1">
          <li>
            Fully compatible with App Router(latest version of the next js)
          </li>
          <li>
            Create an admin route and render <code>{`<AdminApp />`}</code>
          </li>
          <li>
            Configure <code>NEXT_PUBLIC_NEXTMIN_API_URL</code> and{' '}
            <code>NEXT_PUBLIC_NEXTMIN_API_KEY</code> in your Next.js app
          </li>
        </ul>
        <pre className="bg-black/5 dark:bg-white/10 rounded-md p-4 text-sm overflow-x-auto">
          <code>{`// App Router
// app/admin/page.tsx
import { AdminApp, NextMinProvider } from '@airoom/nextmin-react';

export default function AdminPage() {
  return (
    <NextMinProvider>
      <AdminApp />
    </NextMinProvider>
  );
}
`}</code>
        </pre>
      </section>

      <section className="mt-10 grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">What’s inside: nextmin-node</h3>
          <ul className="mt-2 list-disc ml-6 text-sm space-y-1">
            <li>
              Express router via createNextMinRouter() with schema‑driven CRUD
            </li>
            <li>Auth routes, policies, read masks, write restrictions</li>
            <li>
              Pluggable file storage (local/S3), MongoDB adapter with index sync
            </li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">What’s inside: nextmin-react</h3>
          <ul className="mt-2 list-disc ml-6 text-sm space-y-1">
            <li>
              Provider, Router, and ready‑made pages (Auth, Dashboard, List,
              Create/Edit, Profile, Settings)
            </li>
            <li>
              Components for forms, tables, file uploads, relations,
              phone/password inputs
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <p>
          Ready to dive in? Start with the package you need:{' '}
          <a
            href="/docs/nextmin-node"
            className="text-blue-600 hover:underline"
          >
            nextmin-node
          </a>{' '}
          or{' '}
          <a
            href="/docs/nextmin-react"
            className="text-blue-600 hover:underline"
          >
            nextmin-react
          </a>
          .
        </p>
      </section>
    </main>
  );
}
