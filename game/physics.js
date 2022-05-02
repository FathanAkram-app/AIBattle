export class Physics {
    constructor(){
        this.x = 0
        this.y = 0
        this.velocityX = 0
        this.velocityY = 0
        this.bottomCollision = false
        this.rightCollision = false
        this.leftCollision = false
        this.topCollision = false

    }

    jump(){
        if (this.bottomCollision) {
            this.bottomCollision = false
            this.velocityY = -5
        }
    }

    moveRight(){
        this.velocityX = 1
        setTimeout(() => {
            console.log("test")
            this.velocityX = 0
        }, 125);
    }

    moveLeft(){
        this.velocityX = -1
        setTimeout(() => {
            console.log("test")
            this.velocityX = 0
        }, 125);
    }

    gravity(){
        if(!this.bottomCollision) {
            this.velocityY += 0.1
        }else{
            this.velocityY = 0
        }
    }
    collide(direction){
        if (direction.top) {
            this.topCollision = true
        }
        if (direction.bottom) {
            this.bottomCollision = true
        }
        if (direction.left) {
            this.leftCollision = true
        }
        if (direction.right) {
            this.rightCollision = true
            
        }
    }



}