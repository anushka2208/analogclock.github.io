
setInterval(()=>{

  d=new Date();
  hrs=d.getHours();
  min=d.getMinutes();
  sec=d.getSeconds();
  hrotate=30*hrs+min/2;
  minrotate=6*min;
  srot=6*sec;
  hourhand.style.transform=`rotateZ(${(hrotate)}deg)`;
  minute.style.transform=`rotateZ(${(minrotate)}deg)`;
  second.style.transform=`rotateZ(${(srot)}deg)`;


},1000);
