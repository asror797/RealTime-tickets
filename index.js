const express = require('express')
const socket = require('socket.io')
const app = express()
const PORT = process.env.PORT || 5000

let tickets = 100

app.use(express.static('public'))

const server = app.listen(PORT,console.log(`Server is ready at ${5000}`))

const io = new socket.Server(server)


io.on('connection',socket => {
   const handData = {id:socket.id,ticketCount:tickets}
   socket.send(handData)
   socket.on('bought',data=>{
      tickets= tickets-1
      socket.broadcast.emit('ticket-count',tickets)
   })
})



