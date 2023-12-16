import logo from 'sheets/icons/logo.png';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Hero = () => (
	<Link to={'/'} className={styles.logo_container}>
		<img className={styles.logo} src={logo} alt='HOT DEAL BTC' />

		<div>
			<span className={styles.text}>HOT DEAL </span>
			<span className={styles.text}>BTC </span>
		</div>
	</Link>
);

export default Hero;
