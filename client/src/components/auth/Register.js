import React, { Fragment, useState } from "react";
import {  Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// const Register = props => {
//   // const [formData, setFormData] = useState({
//   //   name: "",
//   //   email: "",
//   //   password: "",
//   //   password2: ""
//   // });

//   // const { name, email, password, password2 } = formData;
//   // const { setAlert, register, isAuthenticated } = props;
//   // const onChange = e => {
//   //   setFormData({ ...formData, [e.target.name]: e.target.value });
//   // };

//   // const onSubmit = e => {
//   //   e.preventDefault();
//   //   if (password !== password2) {
//   //     setAlert("Password do not match", "danger");
//   //   } else {
//   //     register({ name, email, password });
//   //   }
//   // };
//   // if (isAuthenticated) {
//   //   return <Redirect to="/dashboard" />;
//   // }
//   return (
//     <Fragment>
//       <div className="auth">
//         <h1 className="large text-primary text-center">Sign Up</h1>
//         <p className="lead">
//           <i className="fas fa-user"></i> Create Your Account
//         </p>
//         <form className="form" onSubmit={onSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Name"
//               name="name"
//               value={name}
//               onChange={onChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               value={email}
//               onChange={onChange}
//             />
//             <small className="form-text">
//               This site uses Gravatar so if you want a profile image, use a
//               Gravatar email
//             </small>
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               minLength="6"
//               value={password}
//               onChange={onChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               name="password2"
//               minLength="6"
//               value={password2}
//               onChange={onChange}
//             />
//           </div>
//           <input type="submit" className="btn btn-primary" value="Register" />
//         </form>
//         <p className="my-1">
//           Already have an account? <Link to="/login">Sign In</Link>
//         </p>
//       </div>
//     </Fragment>
//   );
// };


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Register(props) {
    const classes = useStyles();
      const [formData, setFormData] = useState({
          name: "",
          email: "",
          password: "",
          password2: "",
      });

      const { name, email, password, password2 } = formData;
      const { setAlert, register, isAuthenticated } = props;
      const onChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const onSubmit = (e) => {
          e.preventDefault();
          if (password !== password2) {
              setAlert("Password do not match", "danger");
          } else {
              register({ name, email, password });
          }
      };
      if (isAuthenticated) {
          return <Redirect to="/dashboard" />;
      }
  
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                value={name}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password2"
                                label="Confirm-Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password2}
                                onChange={onChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);