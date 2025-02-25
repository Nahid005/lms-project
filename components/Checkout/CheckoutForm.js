import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	calculateCartTotal,
	calculateCartTotalMinus,
} from "@/utils/calculateCartTotal";
import CheckoutList from "./CheckoutList";
import PlaceOrderBtn from "./PlaceOrderBtn";
import Link from "next/link";

const CheckoutForm = ({ user }) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();
	const [cartAmout, setCartAmaount] = React.useState(0);
	const [cartAmoutMinus, setCartAmaountMinus] = React.useState(0);

	useEffect(() => {
		const { cartTotal } = calculateCartTotal(cartItems);
		const { cartTotalMinus } = calculateCartTotalMinus(cartItems);
		setCartAmaount(cartTotal);
		setCartAmaountMinus(cartTotalMinus);
	}, [cartItems]);

	const handleRemove = async (cartId) => {
		// console.log(cartId);
		dispatch({
			type: "REMOVE_CART",
			id: cartId,
		});
	};

	return (
		<>
			<div className="checkout-area ptb-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-9 col-md-12">
							<div className="shopping-cart">
								<p>{cartItems.length} Course in Cart</p>

								<div className="shopping-cart-list">
									<div className="row align-items-center">
										{cartItems.length > 0 ? (
											cartItems.map((cart) => (
												<CheckoutList
													key={cart.id}
													{...cart}
													onRemove={() =>
														handleRemove(cart.id)
													}
												/>
											))
										) : (
											<>
												<div className="col-lg-12 text-center">
													<h3 className="shopping-cart-empty mb-3">
														Empty
													</h3>
													<Link href="/courses">
														<a className="default-btn">
															<i className="flaticon-shopping-cart"></i>
															Continue Shopping
														</a>
													</Link>
												</div>
											</>
										)}
									</div>
								</div>
							</div>
						</div>

						{cartItems.length > 0 && (
							<div className="col-lg-3 col-md-12">
								<ul>
									
									{cartAmoutMinus > 0 && (
										<li> <p> <span> Subtotal: </span> <strong> &#2547; {cartAmoutMinus} </strong> </p>  </li>
									)}
									{cartAmoutMinus > 0 && (
										<li> <p> <span> Total Discount: </span> <strong> &#2547; {cartAmoutMinus - cartAmout} </strong> </p>  </li>
									)}
									<li> 
										<p> <span> Total: </span> <strong> &#2547; {cartAmout} </strong> </p>
									</li>
								</ul>
								
								<PlaceOrderBtn
									user={user}
									cartItems={cartItems}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckoutForm;
