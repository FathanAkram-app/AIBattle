import {Physics} from './physics.js'

export class AIBot extends Physics{
    constructor(canvas){
        super()
        this.canvas = canvas
        this.context = canvas.getContext()
        this.brain = new NeuralNetwork(3,5,3,0.6)
        
    }
    
    

    update(){
        this.x += this.velocityX
        this.y += this.velocityY
        const c = this.context
        if (this.y+32.5>this.canvas.canvas.height) {
            this.collide({bottom: true})
        }
        this.gravity()
        c.beginPath()
        c.clearRect(0, 0, this.canvas.canvas.width,this.canvas.canvas.height)
        c.fillRect(this.x,this.y,30,30)
        c.closePath()
    }
}