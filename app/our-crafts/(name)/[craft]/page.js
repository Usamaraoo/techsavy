'use client';

import { useRouter } from 'next/navigation';

export default function Craft({params}) {

  return (
    <>
      <p>{params.craft}</p>
    </>
  );
}