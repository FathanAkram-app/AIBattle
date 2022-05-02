export class Canvas {
    constructor(){
        this.canvas = document.createElement('canvas')
        this.width = 600
        this.height = 400
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.canvas.style.border = "1px solid"
    }
    createCanvas(){
        document.body.appendChild(this.canvas)
    }
    getContext(){
        return this.canvas.getContext("2d")
    }
}