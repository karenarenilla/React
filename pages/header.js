import Link from 'next/link';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/shows">
            <a>Shows</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;