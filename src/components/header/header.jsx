import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image src={"/favicon.ico"} width={50} height={50} alt="Logo" />
        <nav>
          <ul>
            <li>
              {" "}
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                Event
              </Link>
            </li>
            <li>
              <Link href="/about-us" passHref>
                About-Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="title"> Sed ut perspiciatis unde omnis</h1>
    </header>
  );
};

export default Header;
