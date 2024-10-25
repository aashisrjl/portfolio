import React from "react";
import { FaShare } from "react-icons/fa";

const WorkCard = ({ jobtitle, des }) => {
  return (
    <div className="py-4 px-6 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <FaShare className="text-designColor mr-2" />
        <p className="text-lg font-semibold">{jobtitle}</p>
      </div>
      <div className="text-sm text-lightColor">
        <div className="flex items-center">
          <FaShare className="text-designColor mr-2" />
          <p className="mb-2">{des}</p>
        </div>
        <div className="flex items-center">
          <FaShare className="text-designColor mr-2" />
          <p className="mb-2">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
