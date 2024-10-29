let i = 10; if (i > 10) { alert('число вне диапазона от 1 до 10'); } else { function reqListener() {
    console.log(this.responseText);
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "http://https://lorem-picsum.netlify.app/v2/list?limit=i");
  req.send();}