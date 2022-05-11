import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectData } from "../utils/selectData";
import List from "./List";
import Select from "./Select";

const Main = ({ data, setPeriod }) => {
  console.log(data);
  return (
    <div>
      <Select setPeriod={setPeriod} selectData={selectData} />
      <Link to="/line">
        <button style={{ margin: "20px", padding: "10px" }}>To 2nd page</button>
      </Link>
      {data && <List data={data} />}
    </div>
  );
};

export default Main;
