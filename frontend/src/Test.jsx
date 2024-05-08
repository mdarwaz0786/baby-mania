import { loadStripe } from '@stripe/stripe-js';

const Test = () => {
  const itemName = "Best Product for Summer";
  const itemPrice = 500;
  const quantity = 1;

  const checkout = async () => {
    try {
      const stripe = await loadStripe("pk_test_51PDjRhSJvD4HZxuEg9QMUB9HRiRBBKZjGTvupLKo3tgSzymkbx1kSQ8UFkFSdgP4vG1AkCzfqArEALFjXSRsohKr00oSCHeZMg");
      const response = await fetch("/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              id: 1,
              quantity: quantity,
              price: itemPrice,
              name: itemName,
            }
          ]
        })
      });
      const session = await response.json();
      const result = stripe.redirectToCheckout({ sessionId: session.id });
      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <button className="btn btn-primary mt-5 mb-5 d-flex justify-content-center align-items-center" onClick={checkout}>checkout</button>
    </>
  );
};

export default Test;
