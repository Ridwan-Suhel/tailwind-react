import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
const Benifit = (props) => {
  const { benifit } = props;
  return (
    <li className="flex items-center gap-1">
      <CheckCircleIcon className="w-4 h-4 text-green-500"></CheckCircleIcon>{" "}
      {benifit}
    </li>
  );
};

export default Benifit;
