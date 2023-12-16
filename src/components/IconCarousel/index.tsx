import { Typography } from '@mui/material';
import styles from './styles.module.scss';

const ItemCarousel = ({ item }: any) => {
	const { text, icon } = item;

	return (
		<div className={styles.item}>
			<div className={styles.item_icon}>{icon}</div>

			<Typography variant='body2'>{text}</Typography>
		</div>
	);
};

const IconCarousel = ({ items }: any) => {
	return (
		<section className={styles.iconCarousel}>
			{items?.map((item: any) => (
				<ItemCarousel item={item} />
			))}
		</section>
	);
};

export default IconCarousel;
