import * as React from 'react';
import { Link } from 'gatsby';

interface Route {
  location: string;
  name: string;
}

function Navigation() {
  const routes: Route[] = [
    {
      location: '/',
      name: 'Home',
    },
    {
      location: '/about/',
      name: 'About',
    },
    {
      location: '/video/',
      name: 'Video',
    },
  ];

  return (
    <nav className="mb-5">
      {routes.map((route: Route, key: number) => (
        <span key={route.location}>
          <Link
            to={route.location}
            activeClassName="font-bold hover:text-black"
            className="hover:underline text-slate-800 hover:text-slate-500"
          >
            {route.name}
          </Link>
          {routes.length !== (key + 1) && <span> | </span>}
        </span>
      ))}
    </nav>
  );
}

export default Navigation;
