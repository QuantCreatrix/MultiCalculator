var string1 = '';
    var result = '';
    var num02 = '';
    function calc(inp){
        string1 += inp;
    }

    var ope1 = "";
    function op(ope){
        if(ope === "+" || ope === "-" || ope === "/" || ope === "*"){
            localStorage.setItem("num01", Number(string1));
            string1 = "";
            ope1 = ope;
        }
        
    if(ope === "equal" && ope1 === "+"){
        num01 = JSON.parse(localStorage.getItem("num01"));
        num02 = Number(string1);
        result = num01 + num02;
        console.log(num01);
        console.log(num02);
        document.querySelector(".result").innerHTML = result;
    }

    if(ope === "equal" && ope1 === "-"){
        num01 = JSON.parse(localStorage.getItem("num01"));
        num02 = Number(string1);
        result = num01 - num02;
        console.log(num01);
        console.log(result);
    }