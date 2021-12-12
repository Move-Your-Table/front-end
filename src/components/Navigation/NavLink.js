import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavLink(props) {
  return (
    <Link
      to={props.path}
      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
    >
      {props.label}
    </Link>
  );
}

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
