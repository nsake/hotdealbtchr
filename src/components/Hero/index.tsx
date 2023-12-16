import OpenComputer from 'sheets/icons/OpenComputer';
import styles from './styles.module.scss';
import Titled from 'components/Texts/Titled';

import { Slide } from 'react-awesome-reveal';

const Hero = () => (
	<section className={styles.hero}>
		<Titled
			{...{
				title: 'HOT DEAL BTC',
				subtitle: 'Ваш партнер у пошуку та підборі кваліфікованих фахівців',
				text: 'HOT DEAL BTC — провідна рекрутингова агенція, що спеціалізується на пошуку та підборі висококваліфікованих спеціалістів для різноманітних галузей та секторів бізнесу.'
			}}
		/>

		<Slide
			direction='right'
			delay={100}
			duration={1000}
			style={{ margin: '0 auto' }}
		>
			<div className={styles.hero_image}>
				<OpenComputer />
				<div />
			</div>
		</Slide>
	</section>
);

export default Hero;
