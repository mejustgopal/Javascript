// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function placeOrder(orderId) {
    return new Promise((resolve) => {
        // Random delay between 1 to 3 seconds
        const delay = Math.floor(Math.random() * 2000) + 1000;

        setTimeout(() => {
            resolve(`Order #${orderId} has been successfully placed!`);
        }, delay);
    });
}

// Usage example
async function simulateOrder() {
    console.log("Placing order...");
    const confirmation = await placeOrder(1234);
    console.log(confirmation);
}

simulateOrder();
