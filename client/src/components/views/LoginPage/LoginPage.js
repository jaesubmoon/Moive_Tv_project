import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css'

import axios from 'axios';
 
function LoginPage(props) {
  let history = useHistory();

    const [userId, setUserId] = useState('')
    const [userPwd, setUserPwd] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleIdInput = (e) => {
    setUserId(e.target.value)
}

const handlePasswordInput = (e) => {
  setUserPwd(e.target.value)
}

const onSubmit = (e) => {
  e.preventDefault();

  var login = new FormData(document.login);
  

  axios.post('http://localhost:8080/login/', login)
      .then(
            response => {
          //     console.log('성공',response)
          //     alert("로그인 완료");
          //     history.push('/'); // 메인 화면으로 이동
          // }
        
              if (response.data === props.success) {
                console.log('성공',response)
                alert('로그인 성공!\n 메인페이지로 이동합니다');
                history.push('/'); // 메인 화면으로 이동
                 
              } else {
                console.log('실패',response)
                  alert('로그인에 실패하였습니다');
              }
            }

          
      );
}

   

  
 
    return(
      <div class ='login' style={{ display: 'flex', justifyContent: 'center'}} >
      <>
      <form name='login'onSubmit={onSubmit}>
        <div>
        <h2>로그인</h2>
  
          <div >
            <h4>아이디</h4>
            <input class='input' type='text' name='userId' value={userId} onChange={handleIdInput}/>
            
          </div>
  
          <div>
            <h4>비밀번호</h4>
            <input class='input' type='password' name='userPwd' value={userPwd} onChange={handlePasswordInput} />
          </div>
          
          <div>
            <button class='button' type='submit' value='로그인' name='submit'>로그인</button>
          </div>
  
  
        </div>
      </form></>
      </div>
    )
}
export default LoginPage;