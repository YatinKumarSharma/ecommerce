import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import {useState , useContext} from 'react';
import { authenticateSignup , authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    height: 70vh;
    width: 100vh;
    padding: 0;
    padding-top: 0;
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 70% no-repeat;
    width: 28%;
    height: 80%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`
const Error = styled(Typography)`
      font-size: 10px;
      color: #ff6161;
      line-height : 0;
      margin-top : 10px;
      font-weight: 600;
`

const accountInititalValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you are new here!",
        subHeading: "Sign up with your email to get started"
    }
}

const signupIntitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValues = {
    username : '',
    password : ''
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInititalValues.login)
    const [signup,setSignup] = useState(signupIntitialValues)
    const {setAccount} = useContext(DataContext)
    const [login ,setLogin] = useState(loginInitialValues)
    const [error,setError] = useState(false);

    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountInititalValues.login)
        setError(false);

    }

    const toggleSignup = ()=>{
        toggleAccount(accountInititalValues.signup)
    }

    const onInputChange = (e)=>{
        setSignup({ ...signup, [e.target.name]:e.target.value});
        
    }

    const signupUser = async()=>{
        let response = await authenticateSignup(signup)
        if (!response) return;
        handleClose();
        setAccount(signup.firstname);

    }

    const onValueChange = (e)=>{
        setLogin({ ...login, [e.target.name]: e.target.value})
    } 

    const loginUser = async()=>{
         let response = await authenticateLogin(login);
         if (response.status ===200){
            handleClose();
            setAccount(response.data.data.firstname);
         }
         else{
            setError(true)
         }
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view ==='login'?
                        <Wrapper>
                            <TextField variant='standard' onChange={(e)=> onValueChange(e)} name='username' label="Enter Username" />
                            { error && <Error>Please enter valid username or password</Error>}

                            <TextField variant='standard' onChange={(e)=> onValueChange(e)} name='password' label="Enter Password" />
                            <Text>By continuing you agree to website's term and condition</Text>
                            <LoginButton onClick = {()=> loginUser()}>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick = {()=> toggleSignup()}>New to flipkart ? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='firstname' label="Enter First Name" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='lastname' label="Enter Last Name" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='username' label="Enter User Name" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='email' label="Enter Email" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='password' label="Enter Password" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='phone' label="Enter Phone" />
                            <LoginButton onClick = {()=>signupUser()}>Continue</LoginButton>
                            
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog