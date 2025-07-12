import Stripe from "stripe"

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

export const createCustomerAndSubscription = async (req, res) => {
    try {
        const {paymentMethodId, priceId, name, email} = req.body
        if(!name || !email) return res.status(400).json({message: "All field required"})
        if(!paymentMethodId) return res.status(400).json({message: "Choose payment method"})
        
        const customer = await stripe.customers.create({
            email,
            name,
            payment_method: paymentMethodId,
            invoice_settings: {
                default_payment_method: paymentMethodId
            },  
        })

        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{price: priceId}],
            expand: ['latest_invoice.payment_intent']
        })
        const clientSecret = subscription.latest_invoice?.payment_intent?.client_secret || null;

        res.status(200).json({
            message: "Subscription created successfully",
            subscriptionId: subscription.id,
            clientSecret
        })
    } catch (error) {
        console.log("Stripe error :", error.message)
        return res.status(500).json({error: error.message})
    }
}

export const checkoutSubs = async (req, res) => {
    try {
        const {priceId} = req.body
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
            line_items: [
                {
                    price: priceId,
                    quantity: 1
                }
            ],
            mode: "subscription"
        })
        res.status(200).json({message: "Redirecting to payment", url: session.url})
    } catch (error) {
        res.status(500).json({message: "Failed to proceed payment :", error})
    }
}