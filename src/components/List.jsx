import React from "react";

const List = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <p key={item._id}>{item.messages[1].clientName}</p>
      ))}
    </div>
  );
};

export default List;
