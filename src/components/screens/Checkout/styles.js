import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		textContainer: {
			display: 'flex',
			alignItems: 'left',
			justifyContent: 'left',
			position: 'relative',
			width: '100%',
			height: '120px',
			marginBottom: 40
		},
		productNameContainer: {
			marginTop: 20
		},
		amountContainer: {
			position: 'absolute',
			bottom: 1,
			left: '80px'
		},
		img: {
			width: 65,
			marginRight: 20,
			objectFit: 'contain'
		}
	})
);

export default useStyles;
