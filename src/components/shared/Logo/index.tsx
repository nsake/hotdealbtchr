import logo from 'sheets/icons/logo.png';

import styles from './styles.module.scss';

const Hero = () => (
	<div className={styles.logo_container}>
		<img className={styles.logo} src={logo} alt='HOT DEAL BTC' />

		<div>
			<span className={styles.text}>HOT DEAL </span>
			<span className={styles.text}>BTC </span>
		</div>
	</div>
);

export default Hero;
