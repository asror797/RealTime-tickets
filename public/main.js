const socket = io()


socket.on('message',(data)=> {
   console.log(data);
   count.textContent = data.ticketCount
})


btn.addEventListener('click',()=>{
   socket.emit('bought',1)
   let ticketC = count.textContent
   count.textContent = ticketC -1
})


socket.on('ticket-count',data => {
   count.textContent = data
})