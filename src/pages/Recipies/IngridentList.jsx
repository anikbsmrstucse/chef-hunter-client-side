import React from "react";

const IngridentList = ({ i, index }) => {
  return (
    <div className="col">
      <ul class="list-group list-group-flush ms-3">
        <li className="list-group-item">
          {index + 1}. {i}
        </li>
      </ul>
    </div>
  );
};

export default IngridentList;
