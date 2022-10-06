const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//setInterval(sayHello, 5000); // 간격으로 실행함
setInterval(getClock, 1000); // 한번만 실행함