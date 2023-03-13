import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data.map((el) => (
        <Link className="card" key={el.id} href={`/events/${el.id}`}>
          <div className="image">
            <Image alt="location" width={500} height={300} src={el.image} />
          </div>

          <div className="content">
            <h2>{el.title}</h2>
            <p>{el.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
