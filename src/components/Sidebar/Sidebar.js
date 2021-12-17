import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const Sidebar = (props) => {
	const history = useHistory();

	return (
		<Box sx={{}}>
			<Button style={{ width: '100%' }} onClick={() => history.push('/products/jewelery')} color="inherit">
				Jewelery
			</Button>
			<Button style={{ width: '100%' }} onClick={() => history.push('/products/electronics')} color="inherit">
				Electronics
			</Button>
			<Button style={{ width: '100%' }} onClick={() => history.push('/products/mensclothing')} color="inherit">
				Men's clothing
			</Button>
			<Button style={{ width: '100%' }} onClick={() => history.push('/products/womensclothing')} color="inherit">
				Woman's clothing
			</Button>
			<Button style={{ width: '100%' }} onClick={() => history.push('/')} color="inherit">
				Insert Category
			</Button>
			<Button style={{ width: '100%' }} onClick={() => history.push('/')} color="inherit">
				Insert Category
			</Button>
			<Button style={{ width: '100%' }} onClick={() => history.push('/')} color="inherit">
				Insert Category
			</Button>
			<Button style={{ width: '100%' }} onClick={() => history.push('/')} color="inherit">
				Insert Category
			</Button>
			<Button style={{ width: '100%' }} onClick={() => history.push('/')} color="inherit">
				Insert Category
			</Button>
			<Button style={{ width: '100%' }} onClick={() => history.push('/')} color="inherit">
				Insert Category
			</Button>
			<Button style={{ width: '100%' }} onClick={() => history.push('/')} color="inherit">
				Insert Category
			</Button>
			<div
				style={{
					fontSize: '12px',
					color: 'black',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				Disclaimer: Site is not fully mobile responsive yet.
			</div>
		</Box>
	);
};

export default Sidebar;
