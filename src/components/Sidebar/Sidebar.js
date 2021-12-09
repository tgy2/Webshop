import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const Sidebar = (props) => {
	const history = useHistory();

	return (
		<Box sx={{ height: '100%', width: '10vw', }}>
			<Button style={{ width: '100%', border: '1px solid #1d1d1d'}} onClick={() => history.push('/products/jewelery')} color="inherit">
						Jewelery
			</Button>
            <Button style={{ width: '100%'}} onClick={() => history.push('/products/electronics')} color="inherit">
						Electronics
			</Button>
            <Button style={{ width: '100%'}} onClick={() => history.push('/products/mensclothing')} color="inherit">
						Men's clothing
			</Button>
            <Button style={{ width: '100%'}} onClick={() => history.push('/products/womensclothing')} color="inherit">
						Woman's clothing
			</Button>
		</Box>
	);
};

export default Sidebar;
