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
      location: '/about',
      name: 'About',
    },
    {
      location: '/video',
      name: 'Video',
    },
  ];

  return (
    <div className="navigation">
      {routes.map((route: Route, key: number) => (
        <>
          <Link key={route.location} to={route.location}>
            {route.name}
          </Link>
          {routes.length !== (key + 1) && <span> | </span>}
        </>
      ))}
    </div>
  );
}

export default Navigation;
