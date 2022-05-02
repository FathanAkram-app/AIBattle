

module.exports = {
    initRoutes : (app)=>{
        app.get('/', (req,res)=>{
            res.send
            res.sendFile(__dirname+'/views/game.html')
        })
    }
}