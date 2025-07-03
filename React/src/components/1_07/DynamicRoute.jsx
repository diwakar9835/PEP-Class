import React from "react";
import { useParams } from "react-router-dom";
import Tooltip from "./Tooltip";

const DynamicRoute = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <Tooltip />

      <div className="text-2xl font-semibold text-red-500">{params.id}</div>
    </div>
  );
};

export default DynamicRoute;
