let timer = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds + " ";
}

timer();
setInterval(timer, 1000);


