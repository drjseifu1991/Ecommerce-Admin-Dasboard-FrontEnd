import React from 'react'
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useTheme } from '@mui/material';
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const theme = useTheme()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const paperStyle={padding :20,height:'70vh',width:350, margin:"5rem auto", backgroundColor: theme.palette.background.alt}
    const avatarStyle={backgroundColor: theme.palette.secondary[500]}
    const textStyle={color: theme.palette.secondary[500]}
    const formTextStyle={marginTop:'1.5em', color: theme.palette.secondary[500]}
    const btnstyle={margin:'1.5em 0', backgroundColor:theme.palette.secondary[500]}
    const navigate = useNavigate()

    const LoginTo = () => {
        console.log({email: email, password: password})
        axios.post('http://localhost:5001/login/login', {email: email, password: password}).then(response =>{
            navigate('/dashboard')
        }).catch(error => {
            console.log(error)
        })
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2 style={textStyle}>Sign In</h2>
                </Grid>
                <TextField 
                label='Username' 
                placeholder='Enter username' 
                fullWidth 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                    style: { color: theme.palette.secondary[500] }
                  }} 
                  InputProps={{
                    style: {
                        color: theme.palette.secondary[500]
                    },
                }}
                />
                
                <TextField 
                label='Password' 
                placeholder='Enter password' 
                type='password' 
                fullWidth 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{
                    style: { color: theme.palette.secondary[500] },
                }}
                style={{
                    color: theme.palette.secondary[500],
                    marginTop: '.4rem'
                }}
                InputProps={{
                    style: {
                        color: theme.palette.secondary[500]
                    },
                }}
                />

                <FormControlLabel
                style={formTextStyle}
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                        style={textStyle}
                    />
                    }
                    label="Remember me"
                 />  
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={LoginTo}>Sign in</Button>
            </Paper>
        </Grid>
    )
}

export default Login