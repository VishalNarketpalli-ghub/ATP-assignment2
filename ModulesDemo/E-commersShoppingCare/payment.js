import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function validatePaymentMethod(method) {
    return ['card', 'upi', 'cod'].includes(method);
}

export function processPayment(paymentMethod, couponCode = null) {
    const cartItems = getCartItems();

    if (cartItems.length === 0) {
        return { status: 'failed', message: 'Cart is empty' };
    }

    const subtotal = getCartTotal();
    let discount = 0;
    let total = subtotal;

    if (couponCode) {
        const discountResult = applyDiscount(subtotal, couponCode, cartItems);
        discount = discountResult.discount;
        total = discountResult.finalTotal;
    }

    if (!validatePaymentMethod(paymentMethod)) {
        return { status: 'failed', message: 'Invalid payment method' };
    }

    cartItems.forEach(item => {
        reduceStock(item.id, item.quantity);
    });

    clearCart();

    return {
        orderId: generateOrderId(),
        items: cartItems,
        subtotal,
        discount,
        total,
        paymentMethod,
        status: 'success',
        message: 'Payment successful'
    };
}

function generateOrderId() {
    return 'ORD' + Date.now();
}
