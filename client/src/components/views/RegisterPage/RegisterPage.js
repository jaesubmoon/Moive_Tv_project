import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css'

function RegisterPage(props) {
  let history = useHistory();

      const [user, setUser] = useState({
        userId: '',
        userName: '',
        userPwd: '',
        userEmail: ''

      });

      const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setUser({
            ...user, // 기존의 prd 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
      setUser({
        userId: '',
        userName: '',
        userPwd: '',
        userEmail: ''
        })
    };

    const onuserIdCheck = (e) => {
      e.preventDefault();
      var userId = new FormData(document.userId);
     
      axios.post('http://localhost:8080/idCheck/'+user.userId)
        .then(
          response => {
            if (response.data === "use") {
               console.log('가능',response)
                          alert("사용 가능한 아이디 입니다.");
                      } else {
                        console.log('불가능',response)
                          alert('이미 사용 중인 아이디 입니다.');
                      }
                      
          }
        );
    }
  

  const onSubmit = (e) => {
      e.preventDefault();

      var frmData = new FormData(document.join);

      if(user.userPwd !== user.userconfPwd){
        alert('비밀번호가 일치하지 않습니다')
      }
      else{
      axios.post('http://localhost:8080/join', frmData)
          .then(
              response => {
                console.log(response)
                  alert("회원가입이 완료되었습니다!");
                  history.push('/login'); //상품 정보 조회 화면으로 이동
              }
          );
         }   
  }
  

  return (
    <><div id='joinForm' class='join'>

      <form name='join' onSubmit={onSubmit} onReset={onReset}>
        <div><h2>회원가입</h2>
          <div >
            <h4>이름</h4>
            <input class='input' type='text' name='userName' placeholder="이름을 입력해주세요" value={user.userName} onChange={onChange} />
          </div>

          <div >
            <h4>이메일</h4>
            <input class='input' type='text' name='userEmail' placeholder="이메일을 입력해주세요"value={user.userEmail} onChange={onChange} />
          </div>

          <div>
            <h4>아이디</h4>
            <input class='input' type='text' name='userId' placeholder="아이디를 입력해주세요"value={user.userId} onChange={onChange} />
            <button class='checkbtn' onClick={onuserIdCheck}>중복확인</button>
          </div>

          <div >
            <h4>비밀번호</h4>
            <input class='input' type='password' name='userPwd' placeholder="비밀번호를 입력해주세요" value={user.userPwd} onChange={onChange} />
          </div>

          <div>
            <h4>비밀번호 확인</h4>
            <input  class='input' type='password' name='userconfPwd' placeholder="비밀번호를 확인해주세요" value={user.userconfPwd} onChange={onChange} />
          </div>


          <div>
            <button type='submit' value='등록' name='submit' class='button' >등록</button>
          </div>


        </div>
      </form>
    </div></>
  )
}

export default RegisterPage