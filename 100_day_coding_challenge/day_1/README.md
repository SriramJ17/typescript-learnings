# Day 1: Polymorphic Notification System in TypeScript

## 🌟 Problem Overview

Today’s challenge is to practice **classes, inheritance, and polymorphism** in TypeScript by building a notification system.

You will implement:

- A **base class** representing a generic notification.
- **Child classes** for specific notification types (Email, SMS, Push).
- A function that demonstrates **polymorphism** by sending all notifications without caring about their type.

## 📝 Requirements

### 1️⃣ Base Class
Create a class called `BaseNotification` with:

- A property: `message: string`
- A method: `send()` that prints:

### 2️⃣ Child Classes
Create 3 classes that inherit from `BaseNotification`:

1. **EmailNotification**  
   - Overrides `send()`  
   - Prints: `"Sending EMAIL: <message>"`

2. **SMSNotification**  
   - Overrides `send()`  
   - Prints: `"Sending SMS: <message>"`

3. **PushNotification**  
   - Overrides `send()`  
   - Prints: `"Sending PUSH: <message>"`

### 3️⃣ Polymorphism Function
Create a function:

```ts
function sendAll(notifications: BaseNotification[]): void

- Accepts an array of mixed notification types

- Loops through each notification

- Calls .send() (polymorphism decides which version runs)

const notifications = [
  new EmailNotification("Your package shipped!"),
  new SMSNotification("OTP: 123456"),
  new PushNotification("New message received!"),
];

sendAll(notifications);

----

#### Expected Output

Sending EMAIL: Your package shipped!
Sending SMS: OTP: 123456
Sending PUSH: New message received!


