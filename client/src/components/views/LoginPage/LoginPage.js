import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";

function LoginPage(props) {

  let history = useHistory();
  const [user, setUser] = useState({
    userId: '',
    userPwd: ''
  });
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const dispatch = useDispatch();

  const onIdHandeler = (e) => {
    setUserId(e.currentTarget.value);
  };

  const onPwdHandeler = (e) => {
    setUserPwd(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("id",userId)
    console.log("pwd",userPwd)
    //로그인을 진행하기위해서
    //첫번째 useDispatch(액션) 을 활용해서 액션을 dispatch해준다
    const body = {
      id: userId,
      password: userPwd,
    };

    dispatch(loginUser(body))
      .then((response) => {
        console.log(response);
        if (response.payload.loginSuccess) {
          console.log("성공",response);
          history.push("/");
        } else {
          console.log("실패",response);
          alert(response.payload.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });

  
  };

 
    return(
      <div class ='login' style={{ display: 'flex', justifyContent: 'center'}} >
        <form name='frmlogin'onSubmit={onSubmit}>
        <div>
        <h2>로그인</h2>
          <div >
            <h4>아이디</h4>
            <input class='input' type='id' name='id' value={userId} onChange={onIdHandeler}/>
            
          </div>
  
          <div>
            <h4>비밀번호</h4>
            <input class='input' type='password' name='password' value={userPwd} onChange={onPwdHandeler} />
          </div>
          
          <div>
            <button class='button' type='submit'>로그인</button>
          </div>
  
  
        </div>
      </form>
      </div>
    )
  }
  
export default withRouter(LoginPage);