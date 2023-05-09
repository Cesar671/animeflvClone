import React from 'react'
import { LoginButtoncontainer, LoginIcon } from './LoginButtonStyle'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const LoginButton = () => {
  return (
    <LoginButtoncontainer><LoginIcon icon={faUser}/>LOGIN</LoginButtoncontainer>
  )
}

export default LoginButton