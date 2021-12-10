import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Badge } from '@mui/material';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import useStyles from './styles';

const Navbar = ({ cartProducts }) => {
	const history = useHistory();
	const classes = useStyles();

	const getNumberOfCartItems = () => {
		return cartProducts.reduce((p, c) => (p += c.quantity), 0);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Button onClick={() => history.push('/')} color="inherit">
							Insert logo
						</Button>
					</Typography>

					<Badge badgeContent={getNumberOfCartItems()} color="secondary">
						<Button onClick={() => history.push('/checkout')} color="inherit">
							Checkout
						</Button>
					</Badge>

					<Button onClick={() => history.push('/')} color="inherit">
						Products
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

const mapState = (state) => {
	return {
		cartProducts: state.cart.orders
	};
};

export default connect(mapState)(Navbar);
