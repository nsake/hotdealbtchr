import styles from './styles.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ title, text, icon }: any) {
	return (
		<Card
			sx={{
				backgroundColor: '#363636',
				width: '400px',
				height: '400px',
				maxWidth: 'unset',
				borderRadius: '15px',
				overflow: 'visible'
			}}
		>
			<CardActionArea
				style={{
					padding: '2rem',
					width: '400px',
					height: '400px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
					gap: '2rem'
				}}
				className={styles.card_action_area}
			>
				{icon && (
					<div
						style={{
							background: '#242424',
							minWidth: '50px',
							minHeight: '50px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: '5px'
						}}
						className={styles.card_icon}
					>
						{icon}
					</div>
				)}

				<CardContent
					style={{ padding: 0, overflowY: 'auto' }}
					className={styles.card_content}
				>
					<Typography
						sx={{ color: 'white' }}
						gutterBottom
						variant='h5'
						component='div'
					>
						{title}
					</Typography>
					<Typography variant='subtitle1' color='hsla(0,0%,100%,.7)'>
						{text}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
