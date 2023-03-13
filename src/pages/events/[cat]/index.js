import React from "react";
import Image from "next/image";

const EventsPerCityPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((el) => (
        <a key={el.id} href={`/events/${el.city}/${el.id}`}>
          <Image width="300" height="300" src={el.image} />
          <h2>{el.title}</h2>
          <p>{el.description}</p>
        </a>
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

  return { paths: allPaths, fallback: false };
}
export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const id = context?.params.cat;
  const data = allEvents.filter((el) => id === el.city);
  console.log(data);

  return { props: { data } };
}
