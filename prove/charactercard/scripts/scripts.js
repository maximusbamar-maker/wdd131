document.getElementById("attacked").addEventListener("click", event =>{
    let health = document.getElementById("health");
    let hp = health.textContent.trim();
    hp = parseInt(hp, 10);
    hp -= 20;
    
    if(hp <= 0){
        health.textContent = 0;
        setTimeout(() => {
            let name = document.querySelector(".name");
            alert(name.textContent + " has died.");
        }, 50);
    } else {
        health.textContent = hp;
    }
});

document.getElementById("levelUp").addEventListener("click", event => {
    let level = document.getElementById("level");
    let lvl = level.textContent.trim();
    lvl = parseInt(lvl, 10);
    lvl += 1

    level.textContent = lvl;
});