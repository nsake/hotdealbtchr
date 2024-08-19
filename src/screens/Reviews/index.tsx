import Hero from 'components/Hero';
import ResponsiveCarousel from 'components/Review';
import { useTranslation } from 'react-i18next';

import SmirnovaIcon from 'sheets/icons/smirnova.png';
import OlekiyyIcon from 'sheets/icons/oleksiy.png';
import MaxymIcon from 'sheets/icons/maksym.png';
import SophieIcon from 'sheets/icons/sophie.png';
import LucasIcon from 'sheets/icons/lucas.jpg';
import AvaIcon from 'sheets/icons/ava.png';
import OliviaIcon from 'sheets/icons/olivia.png';
import ClaraIcon from 'sheets/icons/clara.png';

export const Reviews = () => {
	const { t } = useTranslation();

	const data = [
		{
			name: t('michael_johnson'),
			description: t('working_with_hot_line_bts_has_been_a_game'),
			image: SmirnovaIcon,
			stars: 4.9
		},
		{
			name: t('clara_martinez'),
			description: t('hot_line_bts_exceeded_our_expectations_with'),
			image: ClaraIcon,
			stars: 4
		},
		{
			name: t('liam_oconnor'),
			description: t('hot_line_bts_has_been_a_fantastic_partner_in_our_'),
			image: OlekiyyIcon,
			stars: 4.5
		},
		{
			name: t('sophia_wang'),
			description: t('working_with_hot_line_bts_has_been_a_game'),
			image: SophieIcon,
			stars: 5
		},
		{
			name: t('daniel_smith'),
			description: t('weve_partnered_with_hot_line_bts_for_several'),
			image: MaxymIcon,
			stars: 4.5
		},
		{
			name: t('olivia_brown'),
			description: t('the_hot_line_bts_team_is_incredibly_skilled_and'),
			image: OliviaIcon,
			stars: 4
		},
		{
			name: t('lucas_white'),
			description: t('hot_line_bts_has_consistently_provided_us_with'),
			image: LucasIcon,
			stars: 4.5
		},
		{
			name: t('ava_green'),
			description: t(
				'from_initial_consultation_to_implementation_hot_line_bts_h'
			),
			image: AvaIcon,
			stars: 4.5
		}
	];

	return (
		<section>
			<Hero
				hideBackgroundImage
				{...{
					title: 'Reviews'
				}}
			/>
			{/* <CardCarousel>{cardCarouselList.map((item) => item)}</CardCarousel>
			
			*/}
			<ResponsiveCarousel data={data} />
		</section>
	);
};
