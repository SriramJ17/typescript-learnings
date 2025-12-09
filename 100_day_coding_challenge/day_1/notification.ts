/*
Day 1: Polymorphic Notification System in TypeScript
*/

class BaseNotification {
    message: string;

    constructor(message:string) {
        this.message=message
    }

    sent():string {
        return `Sending generic notification: ${this.message}`
    }
}

class EmailNotification extends BaseNotification {
    constructor(message:string) {
        super(message)
    }

    sent():string {
        return `Sending EMAIL notification: ${this.message}`
    }
}

class SMSNotification extends BaseNotification {
    constructor(message:string) {
        super(message)
    }

    sent():string {
        return `Sending SMS notification: ${this.message}`
    }
}

class PushNotification extends BaseNotification {
    constructor(message:string) {
        super(message)
    }

    sent():string {
        return `Sending Push notification: ${this.message}`
    }
}

function sendAll(notifications: BaseNotification[]): void {

    for(let i of notifications) {
        console.log(i.sent())
    }
}

const notifications = [
    new EmailNotification("Your package shipped!"),
    new SMSNotification("OTP: 123456"),
    new PushNotification("New message received!"),
]

sendAll(notifications);