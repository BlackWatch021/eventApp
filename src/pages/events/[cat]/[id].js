import React from "react";
import Image from "next/image";
import SingleEvent from "@/components/events/singleEvent";

const Id = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default Id;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((el) => {
    return { params: { cat: el.city, id: el.id } };
  });

  return { paths: allPaths, fallback: false };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.find((el) => el.id === context.params.id);

  return { props: { data } };
}
