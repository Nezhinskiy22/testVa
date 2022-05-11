import React from "react";
import TableRow from "./TableRow";

const List = ({ data }) => {
  return (
    <div>
      <table border="1" cellpadding="5" cellspacing="5">
        <tr>
          <th>Session</th>
          <th>Agents on call</th>
          <th>Started at</th>
          <th>Finished at</th>
          <th>Amount of messages</th>
          <th>Latest page</th>
        </tr>
        {data.map((item) => (
          <TableRow data={item} />
        ))}
      </table>
    </div>
  );
};

export default List;
