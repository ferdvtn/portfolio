import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>portfolio</title>
      </Head>

      <main className="bg-gradient-to-r from-yellow-300 to-yellow-600 h-screen w-screen flex flex-col justify-center items-center bg-g">
        <div className="bg-yellow-200 text-yellow-700 mx-5 py-5 px-7 rounded-lg md:w-1/3 text-center shadow-xl">
          <div className="flex justify-center items-center text-3xl">
            <span className="hidden md:block md:w-14">🚧</span>
            <h1 className="font-bold bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
              Sorry, The website is under construction
            </h1>
            <span className="hidden md:block md:w-14">🚧</span>
          </div>
          <br />
          <p className="text-justify">
            Exciting things are underway! Now is currently under the
            construction to showcase a things of creative journey, projects, and
            skills. Stay tuned for a glimpse into the world of creativity and
            innovation
          </p>
          <br />
          <div className="flex flex-col items-start justify-start">
            <p>Best regards,</p>
            <p className="font-serif text-lg">~Ahmad Ferdian</p>
          </div>
        </div>
        <small className="mt-5 text-yellow-700 text-center">
          <p>You can still visil this link :</p>
          <a
            href="https://ahmadferdian.netlify.app/"
            className="underline italic shake-animation"
          >
            https://ahmadferdian.netlify.app/
          </a>
        </small>
      </main>
    </>
  );
};

export default Index;
