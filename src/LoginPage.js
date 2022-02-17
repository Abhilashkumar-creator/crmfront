import './App.css';
import useForm from './useForm';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box'; 
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const theme = createTheme();

function App() {

  //Final submit function
  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  //Custom hook call
  const {handleChange, values,errors,handleSubmit} = useForm(formLogin);


  return (
    <div className="App">
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        
        <CssBaseline />
        <form onSubmit={handleSubmit}>
        <Box  sx={{ marginTop: 8, display: 'flex',flexDirection: 'column', alignItems: 'center',      }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField margin="normal"  required  fullWidth  id="email"  label="Email Address"
        name="email" autoComplete="email" autoFocus onChange={handleChange} /></Box>
      {
        errors.email && <h3>{errors.email}</h3>
      }
     
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField margin="normal"  required  fullWidth  id="password"  label="Password"
        name="password" autoComplete="password" minLength='8' autoFocus onChange={handleChange} /></Box>
      {
        errors.password && <h3>{errors.password}</h3>

      }
     
      <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
        <Button variant="contained" sx={{ mt: 3, mb: 2 }}> Sign In </Button>
        <Grid container>
              <Grid item xs>
                <Link href="./Forgotpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="./SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            </Box>
      {/* <input type="text" class="form-control" minLength='5' required name="username" placeholder="username"  onChange={handleChange}   />
      {
        errors.username && <h3>{errors.username}</h3>

      }
      <input type="submit" value="Submit" className="submit"  /> */}
      
      </form>
      </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;