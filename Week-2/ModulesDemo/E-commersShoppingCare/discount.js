const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': {
        type: 'percentage',
        value: 20,
        minAmount: 10000,
        category: 'electronics'
    }
};

export function validateCoupon(couponCode, cartTotal, cartItems) {
    const coupon = coupons[couponCode];

    if (!coupon) {
        return { valid: false, message: 'Invalid coupon code' };
    }

    if (cartTotal < coupon.minAmount) {
        return { valid: false, message: 'Cart total does not meet minimum amount' };
    }

    if (coupon.category) {
        const hasCategoryItem = cartItems.some(
            item => item.category === coupon.category
        );
        if (!hasCategoryItem) {
            return { valid: false, message: 'Coupon not applicable for this cart' };
        }
    }

    return { valid: true, message: 'Coupon applied successfully' };
}

export function calculateDiscount(couponCode, cartTotal) {
    const coupon = coupons[couponCode];

    if (coupon.type === 'percentage') {
        return (cartTotal * coupon.value) / 100;
    }

    if (coupon.type === 'flat') {
        return coupon.value;
    }

    return 0;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
    const validation = validateCoupon(couponCode, cartTotal, cartItems);

    if (!validation.valid) {
        return {
            originalTotal: cartTotal,
            discount: 0,
            finalTotal: cartTotal,
            message: validation.message
        };
    }

    const discount = calculateDiscount(couponCode, cartTotal);
    const finalTotal = cartTotal - discount;

    return {
        originalTotal: cartTotal,
        discount,
        finalTotal,
        message: 'Discount applied successfully'
    };
}
