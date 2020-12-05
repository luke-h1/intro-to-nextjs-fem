import React from 'react';
import Link from 'next/link';
const Page = () => (
  <div>
    <h1>Note index page</h1>
    <Link href='/notes/[id]' as={`/notes/1`}>
      <a>Note 1</a>
    </Link>
  </div>
);
export default Page;
