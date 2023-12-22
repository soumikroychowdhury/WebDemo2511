import {Button,TextField,Card,Typography} from '@mui/material';
import {useState} from 'react';

function Signin(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    return <div>
        <div style={{
            paddingTop: 140, marginBottom: 6, display: 'flex', justifyContent: 'center'
        }}>
            <Typography variant={'h4'}>Welcome Again!</Typography>
        </div><div style={{display: 'flex', justifyContent: 'center'}}><Card variant={'outlined'} style={{width:400,padding:6}}>
        <TextField fullWidth={true} id="username" label="Username" variant="outlined" onChange={(e)=>{setUsername(e.target.value)}}/><br/><br/>
        <TextField fullWidth={true} id="password" label="Password" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
        <Button size={'large'} variant="contained" onClick={()=>{
            fetch('http://localhost:3000/admin/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    username:username,
                    password:password
                }}).then(res=>res.json()).then(data=>{console.log(data);localStorage.setItem('token',data.token);window.location.reload();});
        }}>Signin</Button>
    </Card></div></div>
}
export default Signin;