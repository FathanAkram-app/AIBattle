import {AIBot} from './aibot.js'
import { Canvas } from './canvas.js'


(function start(){
    
    const canvas = new Canvas()
    canvas.createCanvas()
    const aibot = new AIBot(canvas)
    setInterval(() => {
        aibot.update()
    }, 1);
    
})()



