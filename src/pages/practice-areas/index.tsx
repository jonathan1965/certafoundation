import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';
import PracticeItem from 'modules/_partials/PracticeItem';
import Static from 'system/static';
import PopupDrawer from 'modules/_partials/PopupDrawer';

const PracticeAreas: NextPage = () => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="flex flex-col flex-grow w-full">
          <div className="relative bg-primary p-4 md:p-8 cursor-default flex flex-col items-center justify-center  min-h-[40vh] w-full bg-bottom bg-no-repeat bg-cover">
            <Image
              src="/assets/images/insight.jpg"
              alt=""
              width={150}
              height={150}
              layout="fill"
              objectFit="cover"
              loading="lazy"
              className="top-0 absolute z-0"
            />
            <div className="top-0 mx-auto absolute h-full flex flex-col justify-center w-full md:max-w-6xl">
              <h1 className="text-2xl md:text-4xl font-semibold text-white">
                Our Practice Areas
              </h1>
              <div className="hidden mt-3 flex-col items-start text-black italic">
                <h2>Holding your hand on every journey &</h2>
                <h2>Partnership you make.</h2>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 md:p-8 cursor-default flex flex-col items-center justify-center w-full">
            <div className="w-full md:max-w-6xl">
              <p>
                At Certa Law, our main focus is to cater for the
                critical business needs of our clients, along a range
                of major legal practices. Our collaborative approach
                shows that our clients have ready access to corporate,
                banking, transactional and intellectual attorneys
                whose knowledge and experience span industries and
                worldwide.
              </p>
              <div className="mt-4 h-[4] w-full opacity-25 bg-primary rounded" />
              <div className="my-4 gap-3 grid sm:grid-cols-2 md:grid-cols-4">
                {Static.practiceItems.map(element => (
                  <PopupDrawer
                    key={element.otherTitle || element.title}
                    desc={element.html}
                    image={
                      element.image ||
                      element.background ||
                      '/assets/images/screen.png'
                    }
                    title={element.title}
                  >
                    <PracticeItem
                      icon={element.icon}
                      title={element.title}
                      background={
                        element.background ||
                        '/assets/images/screen.png'
                      }
                    />
                  </PopupDrawer>
                ))}
              </div>
              <div className="h-[1px] w-full opacity-25 bg-primary rounded" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PracticeAreas;
