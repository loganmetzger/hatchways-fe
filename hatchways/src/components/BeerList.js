import React from "react";
import Beer from './Beer'

export default function BeerList(props) {
  const { beers } = props;

  return (
    <div>
        {beers.map(beer => {
            return <Beer beer={beer} key={beer.id} />
        })}
    </div>
  );
}
