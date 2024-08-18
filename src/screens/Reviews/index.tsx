import CardCarousel from 'components/CardCarousel';
import Hero from 'components/Hero';
import ActionAreaCard from 'components/shared/Card';
import { useTranslation } from 'react-i18next';

export const Reviews = () => {
	const { t } = useTranslation();

	const cardCarouselList = [
		<ActionAreaCard
			title={t('michael_johnson')}
			text={t('working_with_hot_line_bts_has_been_a_game')}
		/>,
		<ActionAreaCard
			title={t('clara_martinez')}
			text={t('hot_line_bts_exceeded_our_expectations_with')}
		/>,
		<ActionAreaCard
			title={t('liam_oconnor')}
			text={t('the_expertise_and_professionalism_of_hot_line')}
		/>,
		<ActionAreaCard
			title={t('sophia_wang')}
			text={t('hot_line_bts_has_been_a_fantastic_partner_in_our_')}
		/>,
		<ActionAreaCard
			title={t('daniel_smith')}
			text={t('weve_partnered_with_hot_line_bts_for_several')}
		/>,
		<ActionAreaCard
			title={t('olivia_brown')}
			text={t('the_hot_line_bts_team_is_incredibly_skilled_and')}
		/>,
		<ActionAreaCard
			title={t('lucas_white')}
			text={t('hot_line_bts_has_consistently_provided_us_with')}
		/>,
		<ActionAreaCard
			title={t('ava_green')}
			text={t('from_initial_consultation_to_implementation_hot_line_bts_h')}
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
