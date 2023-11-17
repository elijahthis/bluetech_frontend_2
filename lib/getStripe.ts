import { loadStripe } from "@stripe/stripe-js";

let stripePromise: any;
const getStripe = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(
			process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
		);
	}
	return stripePromise;
};

async function handleCheckout(
	priceId: string,
	quantity: number,
	email: string,
	successUrl: string,
	cancelUrl: string
) {
	const stripe = await getStripe();
	const { error } = await stripe.redirectToCheckout({
		lineItems: [
			{
				price: priceId,
				quantity: quantity,
			},
		],
		mode: "payment",
		successUrl: successUrl,
		cancelUrl: cancelUrl,
		customerEmail: email,
	});
	console.warn(error.message);
}

export default handleCheckout;
