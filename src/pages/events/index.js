import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        {data.map((el) => (
          <Link key={el.id} href={`/events/${el.id}`}>
            <Image alt="location" width={500} height={300} src={el.image} />
            <h2>{el.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
