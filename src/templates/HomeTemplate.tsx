import { FC, ReactElement, useEffect, useState } from 'react';
import styles from './styles.module.scss';

import { NavLink, useLocation } from 'react-router-dom';
import Logo from 'components/shared/Logo';
import useScrollToTop from 'hooks/useScrollToTop';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
	const { t } = useTranslation();

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

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const scrollToSection = (id: string, offset: number) => {
		const element = document.getElementById(id);
		if (element) {
			window.scrollTo({
				top: element.offsetTop - offset,
				behavior: 'smooth'
			});
		}
	};

	const handleNavLinkClick = (id: string) => {
		setIsMenuOpen(false);
		scrollToSection(id, 0);
	};

	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.navContainer}>
				<button className={styles.burgerButton} onClick={handleMenuToggle}>
					☰
				</button>
				<div
					className={`${styles.links} ${styles.menu} ${
						isMenuOpen ? styles.showMenu : ''
					}`}
				>
					<button className={styles.closeButton} onClick={handleMenuToggle}>
						×
					</button>
					<NavLink to='/#about' onClick={() => handleNavLinkClick('about')}>
						{t('about_us-0')}
					</NavLink>
					<NavLink to='/#culture' onClick={() => handleNavLinkClick('culture')}>
						{t('our_culture-0')}
					</NavLink>
					<NavLink
						to='/job'
						className={({ isActive }) => (isActive ? styles.active_link : '')}
						onClick={() => setIsMenuOpen(false)}
					>
						{t('job')}
					</NavLink>
					<NavLink
						to='/reviews'
						className={({ isActive }) => (isActive ? styles.active_link : '')}
						onClick={() => setIsMenuOpen(false)}
					>
						{t('reviews')}
					</NavLink>
					<NavLink
						to='/#contacts'
						onClick={() => handleNavLinkClick('contacts')}
					>
						{t('contacts')}
					</NavLink>

					<div className={styles.lang}>
						<LanguageSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
};

const Footer = () => {
	const telephone = '+380 63 484 93 17';
	const email = 'info@hotdealbtc.net';

	const { t } = useTranslation();
	return (
		<footer className={styles.footer}>
			<Logo />

			<div className={styles.common_info} id='contacts'>
				<div className={styles.contacts_container}>
					<div className={styles.list}>
						{t('our_contacts')}
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
								{t('kyiv_lviv')}
							</a>
						</ul>
					</div>

					<div className={styles.list}>
						{t('working_hours')}
						<ul>
							<div style={{ textWrap: 'nowrap' }}>
								10:00 - 18:00 ({t('mon_fri')})
							</div>
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
	useScrollToTop();

	return (
		<>
			<>
				<div className={styles.background_image_revealer} />
				<div
					className={
						!location.pathname.includes('job')
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
