import React, { useState } from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import imageLogo from '../../assets/images/logo-login.png';
import { Image } from 'antd';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook';
import Loading from '../../components/LoadingComponent/Loading';
const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate()

  const mutation = useMutationHooks(
   data => UserService.loginUser(data)
  )
  const {data,isPending}=mutation
console.log('mutation',mutation)

  const handleNavigateSignUp = () =>{
    navigate('/sign-up')
  }

  const handleOnchangeEmail = (value) =>{
    setEmail(value)
  }
  const handleOnchangePassword = (value) =>{
    setPassword(value)
  }

  const handleSignIn = () =>{
    mutation.mutate ({
      email,
      password
    })
    console.log('sign-in',email,password)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
          <div style={{ position: 'relative' }}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px',
                cursor: 'pointer'
              }}
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm placeholder="Mật khẩu" type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword}/>
          </div>
          {data?.status==='ERR' && <span style={{color : 'red'}}>{data?.message}</span>}
          <Loading isPending={isPending}>
          <ButtonComponent 
           disabled={!email.length || !password.length }
           onClick={handleSignIn}

            size={40}
            styleButton={{
              background: 'rgb(255,57,69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng nhập'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          ></ButtonComponent>
          </Loading>
          <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight></p>
          <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}> Tạo tài khoản </WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="image-logo" height="300px" width="300px" />
          <h4>Mua sắm tại BeeBadminton</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
