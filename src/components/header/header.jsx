import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <img />
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/events" passHref>
          Event
        </Link>
        <Link href="/about-us" passHref>
          About-Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
