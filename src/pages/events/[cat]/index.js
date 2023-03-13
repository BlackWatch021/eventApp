import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventsPerCityPage = ({ data, city }) => {
  return (
    <div>
      <h1>Events is {city}</h1>
      {data.map((el) => (
        <Link key={el.id} href={`/events/${el.city}/${el.id}`} passHref>
          <Image width="300" height="300" src={el.image} />
          <h2>{el.title}</h2>
          <p>{el.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default EventsPerCityPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((el) => {
    return { params: { cat: el.id.toString() } };
  });
  console.log(allPaths);
  return { paths: allPaths, fallback: false };
}
export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const id = context?.params.cat;
  const data = allEvents.filter((el) => id === el.city);

  return { props: { data, city: id } };
}
