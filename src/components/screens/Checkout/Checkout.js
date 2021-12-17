import { Container, Grid, Divider, Typography, Button } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import useStyles from './styles';
import { resetCart } from '../../../reduxStore/actions';
import './Checkout.css';

const Checkout = ({ cart, resetCart }) => {
	const classes = useStyles();

	const cleanedCartItems = cart.orders.map((orderItem) => {
		return {
			id: orderItem.product.id,
			quantity: orderItem.quantity
		};
	});

	const renderCleanedCartItems = cart.orders.map((orderItem) => {
		return {
			image: orderItem.product.image,
			pricer: orderItem.product.category
		};
	});

	const stringifiedCartItems = JSON.stringify(cleanedCartItems);

	return (
		<div id="Checkout">
			<Grid container>
				<Grid item xs={1}>
					{/* Intentionally left empty */}
				</Grid>
				<Grid item lg={4} xs={12} md={5}>
					<Typography variant="h1">Checkout</Typography>
					{cart.orders.map((item) => (
						<div>
							<div className={classes.textContainer}>
								<img className={classes.img} src={item.product.image} />
								<div className={classes.productNameContainer}> {item.product.title} </div>
								<div className={classes.amountContainer}>
									<p>Amount: {item.quantity}</p>
									Price: {item.product.price * item.quantity} kr
								</div>
							</div>
						</div>
					))}

					<Button
						style={{ backgroundColor: '#FF9900', color: 'black' }}
						onClick={resetCart}
						variant="contained"
					>
						Reset cart
					</Button>

					<Divider style={{ marginBottom: 20 }} />
					<Grid container spacing="2">
						<Grid item xs={10}>
							Subtotal:
						</Grid>
						<Grid item xs={2}>
							{cart.productPrice} kr
						</Grid>
						<Grid item xs={10}>
							Shipping (free over 500kr):
						</Grid>
						<Grid item xs={2}>
							{cart.deliveryFee} kr
						</Grid>
						<Grid item xs={10}>
							Total:
						</Grid>
						<Grid item xs={2}>
							{cart.totalPrice} kr
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg={6} xs={12} md={5} sm={12}>
					<Container maxWidth="sm" className="holdsIframe">
						<iframe
							src={
								'https://webshopcheckout-adamnt.herokuapp.com/checkout/BBB-123?cartItems=' +
								stringifiedCartItems
							}
							frameBorder={'none'}
							height="900px"
							width="100%"
						/>
					</Container>
				</Grid>
				<Grid xs={1}>{/* Intentionally left empty */}</Grid>
			</Grid>
		</div>
	);
};

const mapState = (state) => {
	return {
		cart: state.cart
	};
};

const mapDispatch = (dispatch) => {
	return {
		resetCart: () => dispatch(resetCart())
	};
};

export default connect(mapState, mapDispatch)(Checkout);
