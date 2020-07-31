const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
const totalTarget=document.querySelector(".customers")
let totalTicket=0
const renderTotal=()=>{
    totalTarget.innerHTML=`Total tickets purchased: ${totalTicket}`
}
renderTotal()
eventHub.addEventListener("click", ticket=>{
    if (ticket.target.id==="ride"){
        const rideEvent = new CustomEvent("rideTicketPurchased",{})
        totalTicket++
        renderTotal()
        eventHub.dispatchEvent(rideEvent)
    }
    else if(ticket.target.id==="food"){
        const foodEvent = new CustomEvent("foodTicketPurchased",{})
        totalTicket++
        renderTotal()
        eventHub.dispatchEvent(foodEvent)
    }
    else if(ticket.target.id==="games"){
        const gameEvent=new CustomEvent("gameTicketPurchased",{})
        totalTicket++
        renderTotal()
        eventHub.dispatchEvent(gameEvent)
    }else if(ticket.target.id==="sideshow"){
        const sideshowEvent=new CustomEvent("sideshowTicketPurchased",{})
        totalTicket++
        renderTotal()
        eventHub.dispatchEvent(sideshowEvent)
    }
    else if(ticket.target.id==="full"){
        const fullEvent=new CustomEvent("fullTicketPurchased",{})
        totalTicket++
        renderTotal()
        eventHub.dispatchEvent(fullEvent)
    }

})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="ride">Ride Ticket</button>
        <button id="food">Food Ticket</button>
        <button id="games">Games Ticket</button>
        <button id="sideshow">Sideshow Ticket</button>
        <button id="full">Full Package Ticket</button>
        </div>
    `
}

