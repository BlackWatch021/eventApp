import React from "react";
import Image from "next/image";
import Link from "next/link";
import CatEvent from "@/components/events/catEvent";

const EventsPerCityPage = ({ data, city }) => {
  return <CatEvent data={data} city={city} />;
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
