import React from 'react'
import { Grid,Paper, Avatar, TextField} from '@material-ui/core'
import { LoadingButton } from '@mui/lab'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useTheme } from '@mui/material';
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setUserId } from '../../utils'
import { setUser } from "../../state"
import { setLoading } from "../../state"

const Login = () => {
    const theme = useTheme()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loading = useSelector((state) => state.global.loading)
    const paperStyle={padding :20,height:'50vh',width:350, margin:"8rem auto", backgroundColor: theme.palette.background.alt}
    const avatarStyle={backgroundColor: theme.palette.secondary[500]}
    const textStyle={color: theme.palette.secondary[500]}
    const formTextStyle={marginTop:'1.5em', color: theme.palette.secondary[500]}
    const btnstyle={margin:'2em 0', backgroundColor:theme.palette.secondary[500], color:"white", padding:'0.5em 0', borderRadius: '0.5em'}
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const LoginTo = (e) => {
        e.preventDefault()
        dispatch(setLoading())
        axios.post('http://localhost:5001/login/login', {email: email, password: password}).then(response => {
            dispatch(setLoading())
            setUserId(response.data[0]._id)
            dispatch(setUser(response.data[0]._id))
            navigate('/dashboard')
        }).catch(error => {
            dispatch(setLoading())
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
                <form onSubmit={LoginTo}>
                    <TextField 
                    label='Email' 
                    placeholder='Enter Email Address'
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
                    <LoadingButton type='submit' style={btnstyle} fullWidth loading={loading}>Sign in</LoadingButton>
                </form>
                

                {/* <FormControlLabel
                style={formTextStyle}
                    control={
                    }
                    label="Remember me"
                 />   */}
            </Paper>
        </Grid>
    )
}

export default Login