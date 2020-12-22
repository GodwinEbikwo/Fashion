import React from "react";
import Image from "next/image";

const API_KEY = "KNpQAE6cnNl8bfSzk6gpOeDNsQdnyiwpKc4R2ZsQ";

export default function about({ data }) {
  console.log(data);
  return (
    <div
      style={{ margin: "0 auto", maxWidth: "75rem", padding: "4rem 1.55rem" }}
    >
      <div>
        <h1>Found companies</h1>
        <h2>nasa name: {data.date} </h2>
        <img src={data.url} layout="fill" />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
