import styles from './styles.module.scss';
import Titled from 'components/Texts/Titled';

import { Slide } from 'react-awesome-reveal';

const Hero = ({ icon, hideBackgroundImage, ...rest }: any) => (
	<section className={styles.hero}>
		<Titled {...rest} />

		<Slide
			direction='right'
			delay={100}
			duration={1000}
			style={{ margin: '0 auto' }}
		>
			{icon && (
				<div className={styles.hero_image}>
					{icon}
					{!hideBackgroundImage && <div />}
				</div>
			)}
		</Slide>
	</section>
);

export default Hero;
