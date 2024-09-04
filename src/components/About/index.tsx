import styles from './styles.module.scss';

import { Fade, Slide } from 'react-awesome-reveal';
import RichText from 'components/Texts/RichText';

const About = ({
	texts,
	icon,
	revert,
	subtitle,
	title,
	secondText,
	secondTitle
}: any) => (
	<section className={!revert ? styles.hero : styles.hero_revert}>
		<Fade delay={100} duration={1000}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
				<RichText
					{...{
						...(title && { title }),
						...(subtitle && { subtitle }),
						texts
					}}
				/>

				{(secondTitle || secondText) && (
					<RichText
						{...{
							...(secondTitle && { subtitle: secondTitle }),
							texts: secondText
						}}
					/>
				)}
			</div>
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

export default About;
