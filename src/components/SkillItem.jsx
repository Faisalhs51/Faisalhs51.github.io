import React from "react";

const SkillItem = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-4xl">{icon}</div>
      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
        {name}
      </span>
    </div>
  );
};

export default SkillItem;
