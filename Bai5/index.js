document.getElementById("calculate").onclick=function(){
    let n=+document.getElementById("n").value;
    for (let i = 2; i <= n; i++) {
        // Kiểm tra xem số i có phải là số nguyên tố hay không
         isPrime = true;
        for (let j = 2; j < i; j++) 
        {
          if (i % j == 0) 
          {
            isPrime = false;
            break;
          }
        }
    
        // Nếu là số nguyên tố thì in ra
        if (isPrime) 
        {
            console.log(i);
            document.getElementById("result-wrapper").style.display = "block";
            document.getElementById("result").innerHTML += i +" ";
        }
    }
}