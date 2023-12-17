import { Typography } from '@mui/material';
import styles from './styles.module.scss';

const ListText = ({ texts, title }: any) => (
	<section className={styles.titled}>
		{title && (
			<Typography variant='h3' component='h3'>
				{title}
			</Typography>
		)}

		<ul>
			{texts?.map((text: string) => (
				<li className={styles.list_item}>
					<Typography variant='inherit' component='span'>
						{text}
					</Typography>
				</li>
			))}
		</ul>
	</section>
);

export default ListText;
