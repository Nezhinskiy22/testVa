import React, { useState } from "react";
import TableRow from "./TableRow";

const List = ({ data }) => {
  return (
    <div>
      <table border="1" cellPadding="5" cellSpacing="5">
        <thead>
          <tr>
            <th>Session</th>
            <th>Agents on call</th>
            <th>Started at</th>
            <th>Finished at</th>
            <th>Amount of messages</th>
            <th>Latest page</th>
          </tr>
        </thead>
        {data.slice(0, 20).map((item) => (
          <TableRow data={item} key={item._id} />
        ))}
      </table>
    </div>
  );
};

export default List;
