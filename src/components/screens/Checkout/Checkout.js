import { Container, Grid, Divider, Typography, Button } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import useStyles from './styles';
import { resetCart } from '../../../reduxStore/actions';

const Checkout = ({ cart, resetCart }) => {
	const classes = useStyles();

	const cleanedCartItems = cart.orders.map((orderItem) => {
		return {
			id: orderItem.product.id,
			quantity: orderItem.quantity
		};
	});

	const stringifiedCartItems = JSON.stringify(cleanedCartItems);

	return (
		<div id="Checkout">
			<Grid container xs={12}>
				<Grid item xs={1}>
					{/* Intentionally left empty */}
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h1">Checkout</Typography>
					{cart.orders.map((item) => (
						<p>
							{item.product.title} Amount: {item.quantity}
						</p>
					))}

					<Button onClick={resetCart} variant="contained">
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
							Shipping:
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
				<Grid item xs={6}>
					<iframe
						src={'http://localhost:3001/checkout/BBB-123?cartItems=' + stringifiedCartItems}
						frameBorder={'none'}
						height="900px"
						width="100%"
					/>
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
