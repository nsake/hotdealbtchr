import { FC, ReactElement, useEffect } from 'react';
import styles from './styles.module.scss';

import { NavLink, useLocation } from 'react-router-dom';
import Logo from 'components/shared/Logo';

const Header = () => {
	useEffect(() => {
		try {
			window.addEventListener('scroll', () => {
				const verticalScrollPx = window.scrollY || window.pageYOffset;

				const header = document?.querySelector('header');

				if (header) {
					if (verticalScrollPx > 100) {
						header.style.backgroundColor = '#242424';
						header.style.zIndex = '999';
						header.style.boxShadow = 'rgb(0 0 0) 0px 2px 4px';
					} else {
						header.style.backgroundColor = 'unset';
						header.style.zIndex = '999';
						header.style.boxShadow = 'unset';
					}
				}
				return;
			});
		} catch (err) {
			console.log(err);
		}
	}, []);

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

			<div className={styles.common_info}>
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
								м.Київ/м.Львів
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
			</div>
		</footer>
	);
};

// TEMPLATE

interface IHomeTemplate {
	children: ReactElement<any, any>;
}

export const HomeTemplate: FC<IHomeTemplate> = ({ children }) => {
	const location = useLocation();

	return (
		<>
			<>
				<div className={styles.background_image_revealer} />
				<div
					className={
						!location.pathname.includes('candidates')
							? styles.background_image
							: styles.background_image_default
					}
				/>
			</>

			<Header />
			<section className={styles.pageLayout}>{children}</section>
			<Footer />
		</>
	);
};
