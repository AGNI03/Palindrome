function check_palindrom(){
    let input = document.getElementById("text-input").value;
    result=document.getElementById("result");
    if(input==""){
        window.alert("Please input a value");return;}
    let inp="";
    for(let i=0;i<input.length;i++){
        if(input.charAt(i)===" "){continue;}
        inp+=input.charAt(i);
    }
    let res="";
    let output=input;
    output="<span >"+output+"</span>";
    for(let i=inp.length ; i>=0 ; i--){
        res+=inp.charAt(i);
    }
    if(res===inp){result.innerHTML=output+" is a palindrome"}
    else{result.innerHTML=output+" is not a palindrome"}
    }