document.getElementById("calculate").onclick=function(){
    let x=+document.getElementById("x").value;
    let n=+document.getElementById("n").value;      
    let sum=0;
    for (let i=1; i<=n; i++)
    {
        sum+=Math.pow(x,i)
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML = "Tổng: "+sum;
}