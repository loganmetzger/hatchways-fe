import React from "react";

export default function Beer(props) {
  const { beer } = props;
  console.log("beer", beer);

  return (
    <div>
      <h3>{beer.name}</h3>
      <img src={beer.image_url} alt={beer.name} />
      <h4>{beer.tagline}</h4>
      <div>
          <p>{beer.abv}%</p>
          <p>{beer.ibu} IBUs</p>
      </div>
    </div>
  );
}
