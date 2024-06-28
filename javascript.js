
(function(){
    'use strict'
    var myName = document.querySelector('#name')
    var myEmail = document.querySelector('#email')
    var myPhone = document.querySelector('#phone')
    var myMessage = document.querySelector('#message')
    var myBtn = document.querySelector('#BtnContact')

    
    const spacePattern= /^\S*$/;
    const NumericPattern = /^([^0-9]*)$/;
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?])@([a-zA-Z]){3,}([a-zA-Z]){2,5}$/;
    const OnlyNumberPattern = /^[0-9]*$/;
    myName.addEventListener("blur", controlName);
    myEmail.addEventListener("blur", controlEmail);
    myPhone.addEventListener("blur", controlPhone);
    myMessage.addEventListener("blur", controlMessage);

    function controlName(){
        var myError = document.querySelector('#ErrName');
        if(myName.value.length == 0){
        myName.classList.remove ("is-valid");
        myName.classList.add("is-invalid");
        myError.innerHTML = "Adınızı yazın."
        return false;
    }else if(myName.value.length >20){
                myName.classList.remove ("is-valid");
                myName.classList.add("is-invalid");
                myError.innerHTML = "20 hərfdən yuxarı ola bilməzş"
                return false;
        }else if(!NumericPattern.test(myName.value)){
            myName.classList.remove ("is-valid");
            myName.classList.add("is-invalid");
            myError.innerHTML = "Rəqəmdən istifadə etmək olmaz"
            return false;
        }else{
            myName.classList.remove ("is-invalid");
            myName.classList.add("is-valid");
            return true;
        }
    }
    function controlEmail(){
        var myError = document.querySelector('#ErrEmail');
        if(myEmail.value.length == 0){
        myEmail.classList.remove ("is-valid");
        myEmail.classList.add("is-invalid");
        myError.innerHTML = "Emailinizi yazın."
        return false;
    } else if(myEmail.value.length >30){
            myEmail.classList.remove ("is-valid");
            myEmail.classList.add("is-invalid");
                myError.innerHTML = "30-dan çox olmaz."
                return false;
        }else if(!spacePattern.test(myEmail.value)){
            myEmail.classList.remove ("is-valid");
            myEmail.classList.add("is-invalid");
            myError.innerHTML = "Boşluq olmaz."
            return false;
        }else{
            myEmail.classList.remove ("is-invalid");
            myEmail.classList.add("is-valid");
            return true;
        }
    }
    function controlPhone(){
        var myError = document.querySelector('#ErrPhone');
        if(myPhone.value.length == 0){
        myPhone.classList.remove ("is-valid");
        myPhone.classList.add("is-invalid");
        myError.innerHTML = "Nömrənizi yazın."
        return false;
    } else if(myPhone.value.length <10){
        myPhone.classList.remove ("is-valid");
        myPhone.classList.add("is-invalid");
            myError.innerHTML = "Səhv yazmışsınız."
            return false;
        }else if(myPhone.value.length >30){
            myPhone.classList.remove ("is-valid");
            myPhone.classList.add("is-invalid");
                myError.innerHTML = "Rəqəmlərin sayı çoxdur."
                return false;
        }else if(!OnlyNumberPattern.test(myPhone.value)){
            myPhone.classList.remove ("is-valid");
            myPhone.classList.add("is-invalid");
            myError.innerHTML = "Hərfdən istifadə etmişsiniz."
            return false;
        }else{
            myPhone.classList.remove ("is-invalid");
            myPhone.classList.add("is-valid");
            return true;
        }
    }
    function controlMessage(){
        var myError = document.querySelector('#ErrMessage');
        if(myMessage.value.length == 0){
            myMessage.classList.remove ("is-valid");
            myMessage.classList.add("is-invalid");
        myError.innerHTML = "Mesajınızı yazın."
        return false;
    } else if(myMessage.value.length <10){
        myMessage.classList.remove ("is-valid");
        myMessage.classList.add("is-invalid");
            myError.innerHTML = "10-dan çox olmalıdır."
            return false;
        }else{
            myMessage.classList.remove ("is-invalid");
            myMessage.classList.add("is-valid");
            return true;
        }
    }



    myMessage.addEventListener("keyup" , function(){
        document.getElementById("current-character").textContent = myMessage.value.length;
        if(myMessage.value.length >= 10){
            myBtn.disabled = false ;
        }else{
            myBtn.disabled = true ; 
        }
    });
    var myForms = document.querySelector(".needs-validation");
    myForms.addEventListener("sumbit",function(e){
        if(!myForms.checkValidity()||
        !controlName()||
        !controlEmail() ||
        !controlMessage() ||
        !controlPhone() ){
            e.preventDefault();
            e.stopPropagation();
        }else{
            // ajax kodlarini bura yaza bilersen
        }
    },false);

})();