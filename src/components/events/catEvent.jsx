import React from "react";
import Link from "next/link";
import Image from "next/image";

const CatEvent = ({ data, city }) => {
  return (
    <div className="cat_events">
      <h1>Events is {city}</h1>
      <div className="content">
        {data.map((el) => (
          <Link
            className="card"
            key={el.id}
            href={`/events/${el.city}/${el.id}`}
            passHref
          >
            <Image width="300" height="300" src={el.image} />
            <h2>{el.title}</h2>
            <p>{el.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
