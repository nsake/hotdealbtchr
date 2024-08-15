import { Typography } from '@mui/material';
import styles from './styles.module.scss';

const RichText = ({ subtitle, texts, title }: any) => (
	<section className={styles.titled}>
		{title && (
			<Typography variant='h3' component='h3'>
				{title}
			</Typography>
		)}

		{subtitle && (
			<Typography variant='h5' component='h5'>
				{subtitle}
			</Typography>
		)}

		{texts?.map((text: string) => (
			<Typography
				variant='inherit'
				component='span'
				dangerouslySetInnerHTML={{ __html: text }}
			/>
		))}
	</section>
);

export default RichText;
