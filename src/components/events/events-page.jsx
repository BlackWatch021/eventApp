import React from "react";
import Link from "next/link";
import Image from "next/image";

const EventsPage = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((el) => (
        <Link className="card" key={el.id} href={`/events/${el.id}`}>
          <Image alt="location" width={350} height={400} src={el.image} />
          <h2>{el.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default EventsPage;
