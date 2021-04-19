import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        height: theme.spacing(12),
        width: theme.spacing(12),
    },
}));

const ProfileItem = props => {
  const {
    profile: { user, status, company, location, skills }
  } = props;

  const { name, avatar } = user;
  const classes = useStyles();

  return (
      <div className="profile bg-profile">
          <Avatar
              alt={name.toUpperCase()}
              src="/broken-image.jpg"
              className={classes.orange}
          />
          <div>
              <h2>{name.charAt(0).toUpperCase() + name.slice(1)} </h2>
              <p>{company && <span>at {company}</span>}</p>
              <p className="my-1">{location && <span>{location}</span>}</p>
              <Link to={`/profile/${user._id}`} className="btn btn-primary">
                  View Profile
              </Link>
          </div>
          <ul>
              {skills.slice(0, 4).map((skill, index) => (
                  <li key={index} className="text-primary skills">
                      <CheckIcon className="skills-color" />
                      {skill.toUpperCase()}
                  </li>
              ))}
          </ul>
      </div>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
