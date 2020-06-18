import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = props => {
  const {
    profile: { user, status, company, location, skills }
  } = props;

  const { name, avatar } = user;
  return (
    <div className="profile bg-profile">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name} </h2>
        <p>{company && <span>at {company}</span>}</p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${user._id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
