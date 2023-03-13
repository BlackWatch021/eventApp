import React from "react";
import Image from "next/image";
import Link from "next/link";
import EventsPage from "@/components/events/events-page";

const EventsPageMaster = ({ data }) => {
  return <EventsPage data={data} />;
};

export default EventsPageMaster;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
