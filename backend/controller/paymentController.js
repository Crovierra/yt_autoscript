import Stripe from "stripe"

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const createPaymentIntent = async (req, res) => {
    try {
        const {subsPrice} = req.body
        const product = await stripe.products.create({
            name: "YTA Subscription",
            description: `${subsPrice} / Month Subscription`
        })

        const price = await stripe.prices.create({
            unit_amount: {subsPrice},
            currency: "usd",
            recurring: {
                interval: "month"
            },
            product: product.id
        })

        return res.status(200).json({message: "Subscription product and price successfully created", productId: product.id, priceId: price.id})

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default createPaymentIntent