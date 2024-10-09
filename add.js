let submitBtn = document.querySelector("#submit-btn")  ;
let complainBox = document.querySelectorAll(".complain-box") ;
let form = document.querySelector("form") ;
let boxArr = Array.from(complainBox) ;

console.log(submitBtn) ;
console.log(boxArr) ;

let key ;
let count ;
let i ;


if(localStorage.getItem("DefIndex") == null ){
    i = 1;
}else{

    i = localStorage.getItem("DefIndex") ;
}
let j ;


form.addEventListener("submit" , (e) => {

    count = 1;
    j = 1 ;
    e.preventDefault() ;

    boxArr.forEach( (el)  => {

        if(count == 1){
            key = "Name" ;
        }else if(count == 2){
            key = "Stream" ;
        }else if(count ==3){
            key = "Problem" ;
        }    

        localStorage.setItem( i+"."+j + key , el.value) ;
        count++ ;
        j++ ;
        el.value = "" ;

    }  )

    localStorage.setItem("DefIndex" , ++i) ;




})

