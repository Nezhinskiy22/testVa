import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";

const List = ({ data }) => {
  const [rowData, setRowData] = useState([...data]);
  const [order, setOrder] = useState("start");

  useEffect(() => {
    setRowData([...data]);
  }, [data]);

  const sortData = (col) => {
    if (order === "start") {
      const sorted = [...rowData].sort((a, b) =>
        a[col].toString() > b[col].toString() ? 1 : -1
      );
      setRowData(sorted);
      setOrder("end");
    }
    if (order === "end") {
      const sorted = [...rowData].sort((a, b) =>
        a[col].toString() < b[col].toString() ? 1 : -1
      );
      setRowData(sorted);
      setOrder("start");
    }
  };

  return (
    <div>
      <table border="1" cellPadding="5" cellSpacing="5">
        <thead>
          <tr>
            <th>
              <button
                style={{ padding: "5", width: "80%", fontSize: "16px" }}
                type="button"
                onClick={() => sortData("session")}
              >
                Session
              </button>
            </th>
            <th>
              <button
                style={{ padding: "5", width: "80%", fontSize: "16px" }}
                type="button"
                onClick={() => sortData("agentsOnCall")}
              >
                Agents on call
              </button>
            </th>
            <th>
              <button
                style={{ padding: "5", width: "80%", fontSize: "16px" }}
                type="button"
                onClick={() => sortData("startedAt")}
              >
                Started at
              </button>
            </th>
            <th>
              <button
                style={{ padding: "5", width: "80%", fontSize: "16px" }}
                type="button"
                onClick={() => sortData("finishedAt")}
              >
                Finished at
              </button>
            </th>
            <th>
              <button
                style={{ padding: "5", width: "80%", fontSize: "16px" }}
                type="button"
                onClick={() => sortData("messages")}
              >
                Amount of messages
              </button>
            </th>
            <th>Latest page</th>
          </tr>
        </thead>
        {rowData.slice(0, 20).map((item) => (
          <TableRow data={item} key={item._id} />
        ))}
      </table>
    </div>
  );
};

export default List;
