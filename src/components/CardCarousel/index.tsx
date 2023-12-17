import styles from './styles.module.scss';
const CardCarousel = ({ children }: any) => (
	<div style={{ position: 'relative', minHeight: '550px' }}>
		<div
			className={styles.card_container}
			style={{
				left: '-5rem',
				position: 'absolute',
				overflowX: 'scroll',
				display: 'flex',
				gap: '15px',

				width: 'calc(100vw - 8rem)',
				padding: '15px'
			}}
		>
			{children}
		</div>
	</div>
);

export default CardCarousel;
