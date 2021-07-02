const clock=document.querySelector("#clock")

function getClock(){
  const date=new Date();
  const hours=String(date.getHours()).padStart(2,"0");
  const minutes=String(date.getMinutes()).padStart(2,"0");
  const seconds=String(date.getSeconds()).padStart(2,"0");
  clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock()//처음 웹사이트 입장할때 1초를 기다려야 시간이 나오므로 이것을 적어준다
setInterval(getClock,1000)


