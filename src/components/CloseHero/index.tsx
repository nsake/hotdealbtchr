import styles from './styles.module.scss';
import Titled from 'components/Texts/Titled';

import { CardContent, Typography } from '@mui/material';
import { Slide } from 'react-awesome-reveal';
import SearchPeople from 'sheets/icons/SearchPeople';

const CloseHero = ({ texts }: any) => (
	<section className={styles.hero}>
		<div className={styles.background} />

		<div className={styles.titled_container}>
			<Titled
				{...{
					title: 'HOT DEAL BTC',

					text: 'HOT DEAL BTC — провідна рекрутингова агенція, що спеціалізується на пошуку та підборі висококваліфікованих спеціалістів для різноманітних галузей та секторів бізнесу.'
				}}
			/>

			{/* <Slide direction='up' style={{ margin: '0 auto' }}> */}
			<div className={styles.hero_image}>
				<SearchPeople />
				<div />
			</div>
			{/* </Slide> */}
		</div>

		<div className={styles.close_hero_texts}>
			{texts?.map((text: any) => (
				<>
					<div
						style={{
							background: '#242424',
							width: '50px',
							height: '50px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: '5px'
						}}
						className={styles.card_icon}
					>
						{text?.icon}
					</div>

					<CardContent style={{ padding: 0 }} className={styles.card_content}>
						<Typography
							sx={{ color: 'white' }}
							gutterBottom
							variant='h5'
							component='div'
						>
							{text?.title}
						</Typography>
						<Typography variant='subtitle1' color='hsla(0,0%,100%,.7)'>
							{text?.text}
						</Typography>
					</CardContent>
				</>
			))}
		</div>

		{/* <Slide
			direction='right'
			delay={100}
			duration={1000}
			style={{ margin: '0 auto' }}
		>
			<div className={styles.hero_image}>
				<OpenComputer />
				<div />
			</div>
		</Slide> */}
	</section>
);

export default CloseHero;
