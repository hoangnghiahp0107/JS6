document.getElementById("calculate").onclick=function(){
    let n=0;
    let sum=0;
    while(sum<=10000)
    {
        n++;
        sum+=n;
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML = "Số nguyên dương nhỏ nhất: "+n;
}