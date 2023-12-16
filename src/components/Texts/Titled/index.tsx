import { Typography } from '@mui/material';
import styles from './styles.module.scss';

const Titled = ({ title, subtitle, text, buttonText }: any) => (
	<section className={styles.titled}>
		<Typography variant='h3' component='h3'>
			{title}
		</Typography>
		<Typography variant='h5' component='h5'>
			{subtitle}
		</Typography>
		<Typography variant='inherit' component='span'>
			{text}
		</Typography>
	</section>
);

export default Titled;
