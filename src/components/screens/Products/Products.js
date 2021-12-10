import React, { useEffect } from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import useStyles from './styles';
import { connect } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import { incrementProduct, decrementProduct } from '../../../reduxStore/actions/cartActions';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';

const Products = ({ products, loading, error, onIncrement, onDecrement }) => {
	const classes = useStyles();

	const { category } = useParams();
	console.log(category);

	const renderProductCards = () => {
		if (loading) return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d) => <ProductCard loading={loading} key={d} />);
		console.log(products);
		let array = products.map((item, i) => {
			return (
				<ProductCard
					{...item}
					loading={loading}
					key={i}
					onIncrement={() => onIncrement(item)}
					onDecrement={() => onDecrement(item)}
					isLast={i === products.length - 1}
				/>
			);
		});

		if (category) {
			array = array.filter((item) => {
				const s = item.props.category.replace(/[^A-Z0-9]/gi, '');
				console.log(s);
				return s == category;
			});
		}

		console.log(array);
		if (array.length <= 1) {
			return <h1>Category not found</h1>;
		} else {
			return array;
		}
	};

	return (
		<div id="Product__screen">
			<Grid container>
				<Grid item xs={2}>
					<Sidebar />
				</Grid>
				<Grid item xs={8}>
					<div className="Products__view">
						<div className={classes.productHeader}>
							<Typography variant="h1" className={classes.productsTitle}>
								Välj varor
							</Typography>
						</div>
						<Grid container spacing={2} justify="center">
							<Grid item xs={12}>
								{renderProductCards()}
							</Grid>
						</Grid>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

const mapState = (state) => {
	const { items, loading, error } = state.products;
	return { products: items, loading, error };
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: (data) => dispatch(incrementProduct(data)),
		onDecrement: (data) => dispatch(decrementProduct(data))
	};
};

export default connect(mapState, mapDispatchToProps)(Products);
