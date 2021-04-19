import React, { Fragment, useState } from "react";
import {  Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
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

// const Login = props => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: ""
  // });

  // const { email, password } = formData;
  // const { login, isAuthenticated } = props;

  // const onChange = e => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   login(email, password);
  // };

  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard"></Redirect>;
  // }
//   return (
//     <Fragment>
//       <div className="auth">
//         <h1 class="large text-primary text-center">Sign In</h1>
//         <p class="lead">
//           <i class="fas fa-user"></i> Sign into Your Account
//         </p>
//         <form class="form" onSubmit={onSubmit}>
//           <div class="form-group">
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               required
//               value={email}
//               onChange={onChange}
//             />
//           </div>
//           <div class="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={password}
//               onChange={onChange}
//             />
//           </div>
//           <input type="submit" class="btn btn-primary" value="Login" />
//         </form>
//         <p class="my-1">
//           Don't have an account? <Link to="/register">Sign Up</Link>
//         </p>
//       </div>
//     </Fragment>
//   );
// };

// Login.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool.isRequired
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });
// export default connect(mapStateToProps, { login })(Login);


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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login(props) {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;
    const { login, isAuthenticated } = props;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/dashboard"></Redirect>;
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        required={true}
                        value={email}
                        onChange={onChange}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        required={true}
                        value={password}
                        onChange={onChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/register" >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);