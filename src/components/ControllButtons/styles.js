import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		buttons: {
			display: 'flex',
			flexDirection: 'column',
			marginLeft: 'auto'
		},
		button_add: {
			color: 'green'
		},
		button_remove: {
			color: 'red'
		}
	})
);

export default useStyles;
