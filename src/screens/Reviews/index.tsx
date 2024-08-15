import CardCarousel from 'components/CardCarousel';
import Hero from 'components/Hero';
import ActionAreaCard from 'components/shared/Card';

export const Reviews = () => {
	const cardCarouselList = [
		<ActionAreaCard
			title={'Michael Johnson:'}
			text={`"Working with Hot Line BTS has been a game-changer for our company. Their dedication to excellence and attention to detail are unmatched. We couldn’t be happier with the results!"`}
		/>,
		<ActionAreaCard
			title={'Clara Martinez:'}
			text={`"Hot Line BTS exceeded our expectations with their innovative software solutions and exceptional support. Their team is reliable and always goes above and beyond."`}
		/>,
		<ActionAreaCard
			title={`Liam O'Connor:`}
			text={`"The expertise and professionalism of Hot Line BTS have greatly enhanced our IT infrastructure. Their tailored solutions have significantly improved our operational efficiency."`}
		/>,
		<ActionAreaCard
			title={`Sophia Wang:`}
			text={`"Hot Line BTS has been a fantastic partner in our digital transformation journey. Their commitment to delivering high-quality results and their proactive approach are truly commendable."`}
		/>,
		<ActionAreaCard
			title={`Daniel Smith:`}
			text={`"We’ve partnered with Hot Line BTS for several projects, and their performance has always been stellar. Their ability to adapt and innovate makes them an invaluable asset to our business."`}
		/>,
		<ActionAreaCard
			title={`Olivia Brown`}
			text={`"The Hot Line BTS team is incredibly skilled and easy to work with. Their solutions are effective, and their support is second to none. We highly value their partnership."`}
		/>,
		<ActionAreaCard
			title={`Lucas White:`}
			text={`"Hot Line BTS has consistently provided us with top-tier IT solutions. Their professionalism and dedication to client satisfaction make them stand out in the industry."`}
		/>,
		<ActionAreaCard
			title={`Ava Green:`}
			text={`"From initial consultation to implementation, Hot Line BTS has been exceptional. Their deep understanding of our needs and swift problem-solving abilities have made a huge difference for us."`}
		/>
	];

	return (
		<section>
			<Hero
				hideBackgroundImage
				{...{
					title: 'Reviews'
				}}
			/>
			<CardCarousel>{cardCarouselList.map((item) => item)}</CardCarousel>
		</section>
	);
};
