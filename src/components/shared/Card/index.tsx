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
				height: '420px',
				maxWidth: 'unset',
				borderRadius: '15px'
			}}
		>
			<CardActionArea
				style={{
					padding: '2.5rem',
					width: '400px',
					height: '420px'
				}}
			>
				<div
					style={{
						background: '#242424',
						width: '50px',
						height: '50px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: '5px',
						marginBottom: '3.5rem'
					}}
					className={styles.card_icon}
				>
					{icon}
				</div>
				<CardContent style={{ padding: 0 }} className={styles.card_content}>
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
