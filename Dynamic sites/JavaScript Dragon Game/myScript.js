const obstacle = document.querySelector('.obstacle')
cross = true
score = 0

audio = new Audio('music.mp3')
audioGO = new Audio('gameover.mp3')

setTimeout(() => {
    audio.play()
}, 1000);



//Setitng key for movement of dino    



document.onkeydown = function(e){
    // console.log(e.keyCode);
    if(e.keyCode==38){
        const dino = document.querySelector('.dino')
        dino.style.animation = `dinoUp linear 0.6s`
        setTimeout(() => {
            dino.style.animation = ``
        }, 700);
    }

    if(e.keyCode==37){
        const dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'))
        dino.style.left = dinoX - 300 + 'px'
    } 

    if(e.keyCode==39){
        const dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'))
        dino.style.left = dinoX + 300 + 'px'
    }
}



//Detectng the collsion between dino and dragon


setInterval(() => {
    const dino = document.querySelector('.dino')
    const obstacle = document.querySelector('.obstacle')

    Dx = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'))
    Dy = parseInt(window.getComputedStyle(dino , null).getPropertyValue('bottom'))

    Ox = parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('left'))
    Oy = parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('bottom'))

    offsetX = Math.abs(Dx - Ox)
    offsetY = Math.abs(Dy - Oy)
    // console.log(offsetX , offsetY);  
    
    if(offsetX < 130 && offsetY < 135){
        const gameover = document.querySelector('.gameover')
        // const obstacle = document.querySelector('.obstacle')        
        gameover.innerHTML = 'Game Over  Reload to Play Again'
        obstacle.classList.remove('obstacleAni')
        audioGO.play()
        setTimeout(() => {
            audio.pause();
            audioGO.pause();
        }, 1000);
        
    }


    // Checking score and updating it



    else if(offsetX<200 && cross){
        score = score+1
        scoreclass = document.querySelector('.score')
        scoreclass.innerHTML = `Your Score: ${score}`
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);


        //Increasing speed of dragon as the score increases


        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - (4/100)*aniDur
            obstacle.style.animationDuration = newDur + 's';
            // console.log(newDur);
        }, 500);
    }
    
}, 10);