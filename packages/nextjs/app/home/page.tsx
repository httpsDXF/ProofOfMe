import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Proof of Me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Proof of Me - Your base homepage" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <main>
          <section className="text-center mb-8">
            <h1>Proof of Me</h1>
            <h1>Proof of me</h1>
            <p className="text-lg text-gray-600 mb-6">Welcome to your base homepage. Choose an option below:</p>
          </section>
          <nav>
            <ul className="flex gap-6 justify-center">
              <li>
                <Link
                  href="/docs"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                  aria-label="Go to Docs"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/playground"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                  aria-label="Go to Playground"
                >
                  Playground
                </Link>
              </li>
            </ul>
          </nav>
        </main>
      </div>
    </>
  );
};

export default HomePage;
