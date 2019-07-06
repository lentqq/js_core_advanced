class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.roomsPricing = {
            single: 50,
            double: 90,
            maisonette: 135
        };
        this.servicesPricing = {
            food: 10,
            drink: 15,
            housekeeping: 25
        };
        this.availables = {
            single: Math.floor(this.capacity * 0.5),
            double: Math.floor(this.capacity * 0.3),
            maisonette: Math.floor(this.capacity * 0.2)
        };
    }

    rentARoom(clientName, roomType, nights) {
        if (this.availables[roomType] <= 0) {
            let outpute = [];
            outpute.push(`No ${roomType} rooms available!`);

            let keys = Object.keys(this.availables)
                .filter(x => this.availables[x] > 0);

            for (const room of keys) {
                outpute.push(`Available ${roomType} rooms: ${this.availables[room]}.`);
            }

            return outpute.join('');
        }

        let outpute = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;
        let obj = {
            clientName,
            roomType,
            nights,
            currentBookingNumber: this.currentBookingNumber
        };

        this.bookings.push(obj);
        this.availables[roomType]--;
        this.currentBookingNumber++;

        return outpute;
    }

    roomService(currentBookingNumber, serviceType) {
        let currentRoom = this.bookings
            .filter(x => x.currentBookingNumber === currentBookingNumber);

        if (currentRoom.length === 0) {
            return `The booking ${currentBookingNumber} is invalid.`
        }
        if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }
        if (!currentRoom[0].hasOwnProperty('services')) {
            currentRoom[0]['services'] = [];
        }
        currentRoom[0]['services'].push(serviceType);

        return `Mr./Mrs. ${currentRoom[0]['clientName']}, Your order for ${serviceType} service has been successful.`;

    };

    checkOut(currentBookingNumber) {
        let currentRoom = this.bookings
            .filter(x => x.currentBookingNumber === currentBookingNumber)[0];
        if (!currentRoom) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        let totalMoney = 0;
        let roomType = currentRoom['roomType'];
        this.availables[roomType] += 1;
        this.bookings = this.bookings
            .filter(x => x.currentBookingNumber !== currentBookingNumber);

        totalMoney = this.roomsPricing[roomType] * currentRoom['nights'];

        if (!currentRoom['services']) {
            return `We hope you enjoyed your time here, Mr./Mrs. ${currentRoom['clientName']}. The total amount of money you have to pay is ${totalMoney} BGN.`;
        }
        let totalServiceMoney = 0;

        for (const service of currentRoom['services']) {
            totalServiceMoney += this.servicesPricing[service];
        }

        return `We hope you enjoyed your time here, Mr./Mrs. ${currentRoom['clientName']}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
    };
    report() {
        let outpute = [];
        outpute.push(`${this.name.toUpperCase()} DATABASE:`);
        outpute.push('--------------------');

        if (this.bookings.length === 0) {
            outpute.push('There are currently no bookings.');
            return outpute.join('\n');
        }

        let middleOoput = [];

        for (const room of this.bookings) {
             let current = [];

             current.push(`bookingNumber - ${room['currentBokingNumber']}`);
             current.push(`clientName - ${room['clientName']}`);
             current.push(`roomType - ${room['roomType']}`);
             current.push(`nights - ${room['nights']}`);

             if(room['services']) {
                 let services = [];
                 
                 for (const currentService of room['services']) {
                     services.push(currentService);
                 }
                 current.push('services: ' + services.join(', '));
             }
           middleOoput.push(current.join('\n'));
        }
        outpute.push(middleOoput.join('\n----------\n'));

        return outpute.join('\n');
    };
};

let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');

console.log(hotel.report());


