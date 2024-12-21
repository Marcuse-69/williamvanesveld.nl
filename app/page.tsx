"use client";

import dynamic from 'next/dynamic';

const DadaPortfolio = dynamic(() => import('../components/DadaPortfolio'), {
  ssr: false
});

export default function Home() {
  return <DadaPortfolio />;
}
