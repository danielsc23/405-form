function countryValidation(){
    var str = document.getElementById("country_field").value.toLocaleLowerCase();
    switch(str){
        case("nigeria"): document.getElementById("info").style.display="none";
        document.getElementById("sex").style.display ="block";
        document.getElementById("age").style.display = "block";
        break;
    
        case("muritania"): document.getElementById("info").style.display="none";
        document.getElementById("sex").style.display ="block";
        document.getElementById("age").style.display = "block";
        break;
    
        case("england"): document.getElementById("info").style.display="none";
        document.getElementById("sex").style.display ="block";
        document.getElementById("age").style.display = "block";
        break;
    
        case("zimbabwe"): document.getElementById("info").style.display="none";
        document.getElementById("sex").style.display ="block";
        document.getElementById("age").style.display = "block";
        break;
    
        case("russia"): document.getElementById("info").style.display="none";
        document.getElementById("sex").style.display ="block";
        document.getElementById("age").style.display = "block";
        break;
    
        default: document.getElementById("info").innerHTML ="Sorry,this survey is not available in your state";
        document.getElementById("info").style.display ="block";
        break;
    }
    }
    
    function ageValidation(){
        var age = document.getElementById("age_field").value;
        if(age>= 0 && age<=10){
            document.getElementById("info").innerHTML ="You are under age";
            document.getElementById("info").style.display ="block";
        }
        else if(age>10 && age<=16){
            document.getElementById("info").style.display="none";
            document.getElementById("cinema").style.display = "block";
    
        }
        else if(age>16 &&age<=120){
            document.getElementById("info").style.display="none";
            document.getElementById("occupation").style.display = "block";
        }
        else{
            alert("Please enter a valid age");
        }  
    }
    function cinemaValidation(str){
        if(str =="cinema"){
           document.getElementById("rate_Cin").style.display = "block";
           document.getElementById("Cin").style.display = "none";
        }
        else if(str=="download"){
            document.getElementById("rate_Cin").style.display = "none";
            document.getElementById("Cin").style.display = "block";
        }
        else{
                  alert("Enter valid input")                                                                                                                                                                                                                                                                                                  
        }
    }
    function rateCinValidation(){
        var num = document.getElementById("rate_Cinfield").value;
        if(num>=1 && num<=10){
            document.getElementById("free popcorn").style.display = "block";
        }
        else{
            alert("Please enter a number between 1 and 10");
        }
    }
    
    function CinValidation(str){
        if(str =="yes"){
           document.getElementById("feel_public").style.display = "block";
            
         }
         else if(str=="no"){
             End();
         }
    }
    function occupationValidation(){
        var str = document.getElementById("occupation_field").value.toLocaleLowerCase();
        if(str ==("student")){
           document.getElementById("Movies").style.display = "block";
        }
        else if(str==("retired")){
            document.getElementById("retired").style.display = "block";
        }
    }
    function movieValidation(str){
        if(str =="action"){
            document.getElementById("rateMarv").style.display = "block";
            document.getElementById("rateUni").style.display = "none";
            document.getElementById("bursary").style.display = "block";
        }
        else  if(str =="comedy"){
            document.getElementById("rateMarv").style.display = "block";
        }
        else{
            document.getElementById("rateMarv").style.display = "block";
        }
    }
    function rateMarvValidation(){
        var num = document.getElementById("rateMarv_field").value;
        if(num>=1 && num<=10){
            End();
        }
        else{
            alert("Please enter a number between 1 and 10");
        }
    }

      function retirementValidation(str){
        document.getElementById("rate").style.display = "block";
      }
    function rateValidation(){
        var num = document.getElementById("rate_field").value;
        if(num>=1 && num<=10){
            document.getElementById("rateMarv").style.display="block";
        }
        else{
            alert("Please enter a number between 1 and 10");
        }
    }
    function End(){
        document.getElementById("info").innerHTML = "<br><br>Thanks for your time";
        document.getElementById("info").style.display = "block";
        
    }                                                                                                                                                                                                                                                                                                 