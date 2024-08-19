import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
	StackedCarousel,
	ResponsiveContainer,
	StackedCarouselSlideProps
} from 'react-stacked-center-carousel';

import Fab from '@mui/material/Fab';
import { Avatar, CardHeader, Typography } from '@mui/material';

import Rating from '@mui/material/Rating';

import './index.css';

function ResponsiveCarousel({ data }: any) {
	const ref = React.useRef<any>();

	return (
		<div style={{ width: '100%', position: 'relative' }}>
			<ResponsiveContainer
				carouselRef={ref}
				render={(width, carouselRef) => {
					let currentVisibleSlide = 5;
					if (width <= 1440) currentVisibleSlide = 3;
					else if (width <= 1080) currentVisibleSlide = 1;

					return (
						<StackedCarousel
							ref={carouselRef}
							slideComponent={Slide}
							slideWidth={700}
							carouselWidth={width}
							data={data}
							maxVisibleSlide={5}
							disableSwipe
							currentVisibleSlide={currentVisibleSlide}
							customScales={[1, 0.85, 0.7, 0.55]}
							transitionTime={450}
						/>
					);
				}}
			/>

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '15px'
				}}
			>
				<Fab
					className='twitch-button left'
					size='small'
					onClick={() => ref.current?.goBack()}
				>
					<ArrowBackIcon style={{ fontSize: 30 }} />
				</Fab>
				<Fab
					className='twitch-button right'
					size='small'
					onClick={() => ref.current?.goNext()}
				>
					<ArrowForwardIcon style={{ fontSize: 30 }} />
				</Fab>
			</div>
		</div>
	);
}

const Slide = React.memo(function (props: StackedCarouselSlideProps) {
	const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props;
	const [loadDelay, setLoadDelay] = React.useState<any>();
	const [removeDelay, setRemoveDelay] = React.useState<any>();
	const [loaded, setLoaded] = React.useState(false);
	React.useEffect(() => {
		if (isCenterSlide) {
			clearTimeout(removeDelay);
			setLoadDelay(setTimeout(() => setLoaded(true), 300));
		} else {
			clearTimeout(loadDelay);
			if (loaded) setRemoveDelay(setTimeout(() => setLoaded(false), 300));
		}
	}, [isCenterSlide]);

	React.useEffect(() => () => {
		clearTimeout(removeDelay);
		clearTimeout(loadDelay);
	});

	const { name, title, description, image, stars } = data[dataIndex];

	return (
		<div className='twitch-card' draggable={false}>
			<div className={`cover fill ${isCenterSlide && loaded ? 'off' : 'on'}`}>
				<div
					className='card-overlay fill'
					onClick={() => {
						if (!isCenterSlide) swipeTo(slideIndex);
					}}
				/>
			</div>
			<div className='detail fill'>
				<div className='description'>
					<div className='person'>
						<Avatar variant={'square'} srcSet={image} className='avatar'>
							{name}
						</Avatar>

						<div className='rating'>
							{name}

							<Rating
								readOnly
								defaultValue={stars}
								precision={0.5}
								name='half-rating-read'
							/>
						</div>
					</div>

					<div className='description-text'>{description}</div>
				</div>
			</div>
		</div>
	);
});

export default ResponsiveCarousel;
