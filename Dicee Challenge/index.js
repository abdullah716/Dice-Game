var num1 = Math.floor((Math.random()*6)+1);
var num2 = Math.floor((Math.random()*6)+1);
var win=""
if(num1>num2)
{
    win="🚩 Player 1 Wins";
}
else if(num1<num2)
{
    win="Player 2 Wins 🚩";
}
else
{
    win="Its a Draw";
}

document.querySelectorAll("h1")[0].textContent=win;

var img1 = `images/dice${num1}.png`;
var img2 = `images/dice${num2}.png`;

document.querySelectorAll("img")[0].setAttribute("src",img1);
document.querySelectorAll("img")[1].setAttribute("src",img2);