import * as React from 'react';

import Navigation from '../Navigation';

interface HeaderProps {
  siteTitle: string;
}

function Header({ siteTitle }: HeaderProps) {
  return (
    <header className="my-5 border-b-2">
      <h1 className="font-bold text-2xl mb-3">
        { siteTitle }
      </h1>
      <Navigation />
    </header>
  );
}

export default Header;
