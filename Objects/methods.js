let restaurant = {
    name: 'The Landmark',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        return (this.guestCapacity - this.guestCount) >= partySize
    },
    seatParty: function(partySize){
        this.guestCount += partySize
    },
    removeParty: function(partySize){
        this.guestCount -= partySize
    }
}

console.log(restaurant.checkAvailability(5))