import { FC, ReactElement } from 'react';
import styles from './styles.module.scss';

import { NavLink } from 'react-router-dom';
import Logo from 'components/shared/Logo';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />

			<div className={styles.links}>
				<NavLink
					to='employers'
					className={(navData) => (navData.isActive ? styles.active_link : '')}
				>
					Роботодавцям
				</NavLink>

				<NavLink
					to='candidates'
					className={(navData) => (navData.isActive ? styles.active_link : '')}
				>
					Кандидатам
				</NavLink>
			</div>
		</header>
	);
};

const Footer = () => {
	const telephone = '+380 63 484 93 17';
	const email = 'hotdealbtchr@gmail.com';
	return (
		<footer className={styles.footer}>
			<Logo />
			<div className={styles.contacts_container}>
				<div className={styles.list}>
					Наші контакти
					<ul>
						<a href={`tel:${telephone}`}>{telephone}</a>
						<a href={`mailto:${email}`}>{email}</a>
						<a
							href={
								'https://www.google.com/maps/@50.4588278,30.4785363,11.03z?entry=ttu'
							}
							target='_blank'
							rel='noreferrer'
						>
							м.Київ
						</a>
					</ul>
				</div>

				<div className={styles.list}>
					Графік Роботи
					<ul>
						<div style={{ textWrap: 'nowrap' }}>10:00 — 18:00 (пн-пт)</div>
					</ul>
				</div>
			</div>
		</footer>
	);
};

// TEMPLATE

interface IHomeTemplate {
	children: ReactElement<any, any>;
}

export const HomeTemplate: FC<IHomeTemplate> = ({ children }) => {
	return (
		<>
			<div className={styles.background_image_revealer} />
			<div className={styles.background_image} />

			<Header />
			<section className={styles.pageLayout}>{children}</section>
			<Footer />
		</>
	);
};