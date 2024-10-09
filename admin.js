let table = document.querySelector("table") ;
let key ;

for(let i=1 ; i< localStorage.getItem("DefIndex") ; i++ ) {

    let tr = document.createElement("tr") ;
    table.appendChild(tr) ;

    for(let j=1 ; j<4 ; j++ ){

        if(j == 1){
            key = "Name" ;

            let td = document.createElement("td") ;
            td.innerText = localStorage.getItem(i+"."+j + key);
            tr.appendChild(td) ;



        }else if(j == 2){
            key = "Stream" ;

            let td = document.createElement("td") ;
            td.innerText = localStorage.getItem(i+"."+j + key);
            tr.appendChild(td) ;
            
        }else if(j ==3){
            key = "Problem" ;

            let td = document.createElement("td") ;
            td.innerText = localStorage.getItem(i+"."+j + key);
            tr.appendChild(td) ;

        } 


    }


}