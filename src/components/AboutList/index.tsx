import styles from './styles.module.scss';

import { Fade, Slide } from 'react-awesome-reveal';
import ListText from 'components/Texts/ListText';

const AboutList = ({ texts, icon, revert, subtitle, title }: any) => (
	<section className={!revert ? styles.hero : styles.hero_revert}>
		<Fade delay={100} duration={1000}>
			<ListText
				{...{
					...(title && { title }),
					texts
				}}
			/>
		</Fade>

		{icon && (
			<Slide
				direction={!revert ? 'right' : 'left'}
				delay={100}
				duration={1000}
				style={{ margin: '0 auto' }}
			>
				<div className={styles.hero_image}>{icon}</div>
			</Slide>
		)}
	</section>
);

export default AboutList;
