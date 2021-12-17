import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useStyles from './styles';
import { incrementProduct, decrementProduct } from '../../reduxStore/actions/cartActions';

import { connect } from 'react-redux';

const ControllButtons = ({ onIncrement, onDecrement, product, quantity }) => {
	const classes = useStyles();

	return (
		<div className={classes.buttons}>
			<IconButton aria-label="plus" onClick={() => onIncrement(product)}>
				<AddIcon fontSize="large" className={`${classes.button} ${classes.button_add}`} />
			</IconButton>
			<div style={{ marginLeft: '20px', marginTop: 5 }}>{quantity ? quantity : 0}</div>
			<IconButton aria-label="plus" onClick={() => onDecrement(product)}>
				<RemoveIcon fontSize="large" className={`${classes.button} ${classes.button_remove}`} />
			</IconButton>
		</div>
	);
};

const mapDispatch = (dispatch) => {
	return {
		onIncrement: (data) => dispatch(incrementProduct(data)),
		onDecrement: (data) => dispatch(decrementProduct(data))
	};
};

export default connect(null, mapDispatch)(ControllButtons);
