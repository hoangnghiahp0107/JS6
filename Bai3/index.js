document.getElementById("calculate").onclick=function(){
    let n=+document.getElementById("n").value;
    let sum=1;
    for (let i=1;i<=n;i++)
    {
        sum=sum*i;

    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML = "Giai thừa: "+sum;
}