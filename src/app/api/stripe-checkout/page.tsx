import Stripe from 'stripe';	


let 
export async function GET() {
    let stripe = new Stripe('sk_test_51J3J9bKJ9J9bKJ9J9bKJ9', {
        apiVersion: '2025-01-27.acacia',
    });
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'T-shirt',
              },
              unit_amount: 2000,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    });
    return {
        statusCode: 200,
        body: JSON.stringify({ id: session.id }),
    };
}