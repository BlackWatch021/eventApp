import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data, title }) => {
  return (
    <main>
      <h2>{title}</h2>

      {data.map((el) => (
        <Link key={el.id} href={`/events/${el.id}`}>
          <Image alt="location" width={500} height={300} src={el.image} />
          {/* <img alt="location" src={el.image} /> */}
          <h2>{el.title}</h2>
          <p>{el.description}</p>
        </Link>
      ))}
    </main>
  );
};

export default HomePage;
