import styles from './styles.module.scss';
import Titled from 'components/Texts/Titled';

import { CardContent, Typography } from '@mui/material';
import heroImage from 'sheets/images/high-angle-monthly-meeting-at-office_23-2148347290_1.jpg';
import { useTranslation } from 'react-i18next';

const CloseHero = ({ texts }: any) => {
	const { t } = useTranslation();

	return (
		<section className={styles.hero}>
			<div className={styles.background} />

			<div className={styles.titled_container}>
				<Titled
					{...{
						title: 'HOT DEAL BTC',
						text: t('hot_deal_btc_is_a_leading_recruitment')
					}}
				/>

				{/* <Slide direction='up' style={{ margin: '0 auto' }}> */}
				<div className={styles.hero_image}>
					<img src={heroImage} alt='' />
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
};

export default CloseHero;
