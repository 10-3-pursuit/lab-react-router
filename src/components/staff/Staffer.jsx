import React from "react";
import { Link } from "react-router-dom";
export const Staffer = ({ employee }) => {
  const { firstName, lastName, prefix, postfix, title } = employee;
  let name = `${firstName} ${lastName}`;
  if (prefix) name = `${prefix} ${name}`;
  if (postfix) name = `${name}, ${postfix}`;

  return (
    <article className="staffer">
      src/components/staff/Staffer.jsx
      {/* <Link to={`/staff/Staffer`}> */}
        <h3>{name}</h3>
        <h4>{title}</h4>
      {/* </Link> */}
    </article>
  );
};

export default Staffer;
