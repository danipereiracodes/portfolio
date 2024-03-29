import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';
import Header from '@/components/Header';
import React, { useState } from 'react';

export default function App() {
  const [ischecked, setIsChecked] = useState(false);

  return (
    <div className='flex min-h-screen flex-col'>
      <Head>
        <title>DPEREIRA.ES</title>
        <meta name='description' content='Frontend Software Engineer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/code2.png' />
      </Head>

      <Main />
      <Footer ischecked={ischecked} />
    </div>
  );
}
