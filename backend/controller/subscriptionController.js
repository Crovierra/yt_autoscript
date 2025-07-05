import Stripe from "stripe"

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const createCustomerAndSubscription = async (req, res) => {
    try {
        const { name, email, paymentMethodId, priceId} = req.body
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

export default createCustomerAndSubscription