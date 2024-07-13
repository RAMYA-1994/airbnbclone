require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET);

const handleCheckoutPayment = async (req, res) => {
  try {
    const data = req.body;
    
    // Validate incoming data
    if (
      !data ||
      typeof data !== "object" ||
      !data.location ||
      !data.image_url ||
      !data.price
    ) {
      return res.status(400).send({ error: "Invalid product data" });
    }

    // Ensure price is a valid number
    const unitAmount = parseFloat(data.price);
    if (isNaN(unitAmount) || unitAmount <= 0) {
      return res.status(400).send({ error: "Invalid price value" });
    }

    // Create line item for checkout session
    const lineItem = {
      price_data: {
        currency: "usd",
        product_data: {
          name: data.location,
          images: [data.image_url],
        },
        unit_amount: Math.round(unitAmount * 100), // Convert price to cents
      },
      quantity: data.quantity || 1, // Default quantity to 1 if not provided
    };

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [lineItem],
      mode: "payment",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = handleCheckoutPayment;
