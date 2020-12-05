import React from 'react';
import Link from 'next/link';
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