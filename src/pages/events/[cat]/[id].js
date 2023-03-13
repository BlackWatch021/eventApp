import React from "react";
import Image from "next/image";

const Id = ({ data }) => {
  return (
    <div>
      <Image width="1000" height="500" src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
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
