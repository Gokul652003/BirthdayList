import React, { useState } from "react";
import data from "./data";
import People from "./People";

const List = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <>
      <div className="listItem">
        <h1>{people.length} Birthday Today</h1>

        <div>
          {people.map((item) => (
            <People key={item.id} {...item} />
          ))}
        </div>
        <div>
          {people.length > 0 && (
            <button className="clear" onClick={() => setPeople([])}>
              Clear
            </button>
          )}
          {people.length == 0 && (
            <button className="reset" onClick={() => setPeople(data)}>
              Reset
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default List;
