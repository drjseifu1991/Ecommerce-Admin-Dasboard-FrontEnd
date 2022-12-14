import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useTheme } from '@mui/material';
const Login = () => {
    const theme = useTheme()
    const paperStyle={padding :20,height:'70vh',width:350, margin:"5rem auto", backgroundColor: theme.palette.background.alt}
    const avatarStyle={backgroundColor: theme.palette.secondary[500]}
    const textFieldStyle= {color: theme.palette.secondary[500]}
    const textStyle={color: theme.palette.secondary[500]}
    const btnstyle={margin:'8px 0', backgroundColor:theme.palette.secondary[500]}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2 style={textStyle}>Sign In</h2>
                </Grid>
                <TextField color={theme.palette.secondary[500]} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField 
                label='Password' 
                placeholder='Enter password' 
                type='password' 
                fullWidth 
                required
                InputLabelProps={{
                    style: { color: theme.palette.secondary[500] },
                  }}
                  sx={{
                    ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                      color: {color: theme.palette.secondary[500]},
                    },
                  }}
                  InputProps={{
                    sx: {
                      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                      },
                      "&:hover": {
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          border: "2px solid white",
                        },
                      },
                    },
                  }}/>

                <FormControlLabel
                style={textStyle}
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                        style={textStyle}
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography style={textStyle} >
                     <Link href="#" style={textStyle}>
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" style={textStyle}>
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login