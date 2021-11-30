$(function(){
        //변수 선언
        const userForm      = document.querySelector("#userForm");
        const userId        = document.querySelector("#id");
        const userPass      = document.querySelector("#pass");
        const userPassCheck = document.querySelector("#passCheck");
        const userName      = document.querySelector("#name");
        const userBirth     = document.querySelector("#birth");
        // const userGender    = document.querySelector("input[name=gender]");
        const userEmail     = document.querySelector("#email");
        const emailLast    = document.querySelector("#email_last");
        const emailSelect   = document.querySelector("#emailSelect");
        const userPhone     = document.querySelector("#phone");
        const userPhoneLast = document.querySelector("#phone1");
    
    
        //함수 만들기
        function success_message(input) {
            input.className = "success";
        }
        
        function error_message(input,message = "") {
            input.className = "error";
            if (message){
                input.nextElementSibling.innerHTML = message;
            }
        }
    
        userForm.addEventListener("submit",(e)=>{
            e.preventDefault();
    
            if (userId.value === "") {
                error_message(userId,"아이디가 입력되지 않았습니다");
            }
            else if (!(userId.value.length >= 6 && userId.value.length <= 18)) {
                error_message(userId,"영문, 숫자 6~18자로 조합해주세요");
            }
            else {
                success_message(userId);
            }
            if (userPass.value === "") {
                error_message(userPass, "비밀번호가 입력되지 않았습니다");
            }
            else if (!(userPass.value.length >= 6 && userPass.value.length <= 20)) {
                error_message(userId,"영문, 숫자 6~20자로 조합해주세요");
            }
            else {
                success_message(userPass);
            }
        
            if (userPassCheck.value === "") {
                error_message(userPassCheck, "비밀번호 확인이 입력되지 않았습니다");
            }
            else if (userPass.value !== userPassCheck.value) {
                error_message(userPassCheck, "비밀번호가 같지않습니다.");
            }
            else {
                success_message(userPassCheck);
            }
        
            if (userName.value === "") {
                error_message(userName, "이름이 입력되지 않았습니다");
            }
            else {
                success_message(userName);
            }
        
            if (userEmail.value === "") {
                error_message(userEmail, "이메일이 입력되지 않았습니다");
            }
            else {
                success_message(userEmail);
            }
        
            if (userPhone.value === "" || userPhoneLast.value === ""){
                error_message(userPhone, "전화번호를 입력하지 않았습니다");
                error_message(userPhoneLast, "");
            }
            else{
                if (userPhone.value){
                    success_message(userPhone);
                }
                if (userPhoneLast.value){
                    success_message(userPhoneLast);
                }
            }
        
            if (userBirth.value === "") {
                error_message(userBirth, "생년월일이 입력되지 않았습니다");
            }
            else {
                success_message(userBirth);
            }
        
            if (userId.value !== "" && userName.value !== "" && userPass.value !== "" && userPassCheck.value !== "")
            {
        
                if (userId.value.length >= 5 && userId.value.length <= 13 && userPass.value === userPassCheck.value)
                {
                    userForm.submit();
                }
                else {
                    window.alert("아이디 또는 비밀번호 오류");
                }
            }
    
        });
    
    
        
         //select 태그에서 직접입력고르면 input 태그활성화
         //나머지 메일 주소는 자동완성 및 input 태그 비활성화

         
         emailSelect.addEventListener("change",()=>{

            //선택한 옵션태그의 값을 담아주기
            const mailAuto = emailSelect.options[emailSelect.selectedIndex].value;

            if(mailAuto === "direct"){

                /*
                1. 직접 선택시 disable이 비활성화 : 직접 글씨를 입력하도록
                2. 직접 선택시 input태그에 포커스가 맞춰지도록
                3. 메일에 직접 입력하는 input 태그의 값은 비워지도록
                 */

                emailLast.readOnly = false;
                emailLast.focus();
                emailLast.value = ""; 
            }
            else if (mailAuto === "select"){

                emailLast.readOnly = true;
                emailLast.value = "";
            }
            else{
                emailLast.readOnly = true;
                emailLast.value = mailAuto;
            }

         });
        
        userPhone.addEventListener("keyup",()=>{
            if (userPhone.value.length >= 4) {
                userPhoneLast.focus();
            }
        });


});