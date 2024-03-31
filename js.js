var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


// ИГрок
var player = { x: 160, y: 100, height: 80, width: 50, xSpeed:0, ySpeed:0 };

function draw(){
    // Очистка старых следов
    context.clearRect(0, 0 ,canvas.width, canvas.height)

    // Отрисовка персонажа
    pic = new Image();
    pic.src = "Man_walking.png";
    context.drawImage(pic, player.x, player.y, player.width, player.height);

    // Отрисовка платформы
    context.fillStyle = "orange";
    context.fillRect(0, canvas.height-50, canvas.width, 50);
}

function updateGame(){
    // Алгоритм движения персонажа
    player.x += player.xSpeed;
    player.y += player.ySpeed;

    // Персонаж не падает за платформой 
    if (player.y >= canvas.height - player.height - 50){
        player.ySpeed = 0;
        player.xSpeed = 0;
    }

}

function onKeyPress(event){
    const key = event.key.toLowerCase();
    if (key === "a"){
        player.xSpeed = -5;
    }
    if (key === "d"){
        player.xSpeed = 5;
    }
    if (key === " "){
        player.ySpeed = -8;
    }
    
}
window.addEventListener("keydown", onKeyPress);

function onKeyRelease(event){
    const key = event.key.toLowerCase();
    if (key === "a" || key === "d"){
        player.xSpeed = 0;
    }

    if (key === " "){
        player.ySpeed = 5;
    }
    
}
window.addEventListener("keyup", onKeyRelease);


function tick(){
    // Вызов функции движения
    updateGame();

    // Вызов функции отрисовки 
    draw();

    
    window.setTimeout("tick()", 1000/60);
}

tick();
