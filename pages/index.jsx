import React from 'react';
import Link from 'next/link';
import '../src/styles.module.css';

const Page = () => (
  <div>
    <h1>index page</h1>
    <Link href='/notes'>
      <a>
        Note Link
      </a>
    </Link>
  </div>
)
export default Page;