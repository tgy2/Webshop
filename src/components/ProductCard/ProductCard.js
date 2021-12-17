import { Typography, IconButton, Divider, Skeleton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useStyles from './styles';
import ControllButtons from '../ControllButtons/ControllButtons';

const ProductCard = ({ loading, title, price, image, id, description, category, rating, isLast, quantity }) => {
	const classes = useStyles();

	const renderControllButtons = () => {
		const product = {
			category,
			title,
			price,
			id,
			image,
			description,
			rating
		};

		return <ControllButtons product={product} quantity={quantity} />;
	};

	return (
		<div className={classes.productCard}>
			<div className={classes.productCardFlex}>
				<div className={classes.informationContainer}>
					<div className={classes.info}>
						{loading ? (
							<Skeleton
								variant="rectangular"
								width={65}
								height={92}
								style={{ marginRight: '20px', borderRadius: '5px' }}
							></Skeleton>
						) : (
							<img className={classes.img} src={image} alt={title} />
						)}

						<div className={classes.details}>
							<Typography variant="subtitle2">
								{loading ? (
									<Skeleton variant="text" width={110} height={20}></Skeleton>
								) : (
									<p className={`${classes.title} ${classes.detailMargin}`}>{title}</p>
								)}
							</Typography>

							{loading ? (
								<Skeleton variant="text" width={50} height={20}></Skeleton>
							) : (
								<p className={classes.detailMargin}>{price} kr</p>
							)}
						</div>
					</div>
				</div>

				{loading ? (
					<Skeleton style={{ marginLeft: 'auto' }} variant="text" width={50} height={140}></Skeleton>
				) : (
					<div style={{ marginLeft: 'auto' }}>{renderControllButtons()} </div>
				)}
			</div>
			{!isLast && (
				<div className={classes.divider}>
					<Divider variant="middle" />
				</div>
			)}
		</div>
	);
};

export default ProductCard;
