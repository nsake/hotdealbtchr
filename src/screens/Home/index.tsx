import Hero from 'components/Hero';
import IconCarousel from 'components/IconCarousel';

import HandshakeIcon from '@mui/icons-material/Handshake';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import About from 'components/About';
import ActionAreaCard from 'components/shared/Card';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarsIcon from '@mui/icons-material/Stars';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import CloseHero from 'components/CloseHero';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { InsertEmoticon, Public } from '@mui/icons-material';
import CultureSection from 'components/CultureSection';
import heroImage from 'sheets/images/gruppo-di-uomini-d-affari-che-lavorano-in-ufficio_1303-30530_1.jpg';
import servicesImage from 'sheets/images/istockphoto-1416554247-612x612.jpg';
import aboutImage1 from 'sheets/images/depositphotos_379920438-stock-photo-group-businesspeople-working-creative-office.jpg';
import aboutImage2 from 'sheets/images/depositphotos_164166808-stock-photo-business-people-with-desktop-computer.jpg';
import { useTranslation } from 'react-i18next';

export const Home = () => {
	const { t } = useTranslation();

	const carouselIcon = [
		{
			text: t('4_years_on_the_market-0'),
			icon: <HandshakeIcon />
		},
		{
			text: t('50_000_satisfied_clients'),
			icon: <AutoAwesomeIcon />
		},
		{
			text: t('500_happy_employees'),
			icon: <InsertEmoticon />
		},
		{
			text: t('branches_across_europe'),
			icon: <Public />
		}
	];

	const cardCarouselList = [
		<ActionAreaCard
			icon={<RemoveRedEyeIcon />}
			title={t('resume_review_and_preliminary_interview')}
			text={t('we_analyze_resumes_and_conduct_preliminary')}
		/>,
		<ActionAreaCard
			icon={<StarsIcon />}
			title={t('testing_and_evaluation')}
			text={t('if_necessary_we_conduct_specialized_tests_and_evaluations')}
		/>,
		<ActionAreaCard
			icon={<RecordVoiceOverIcon />}
			title={t('interview')}
			text={t('after_the_preliminary_selection_we_organize')}
		/>
	];

	return (
		<section>
			<Hero
				icon={<img src={heroImage} alt='' />}
				{...{
					title: 'Hot Deal BTS',
					subtitle: t('your_trusted_partner_in_cutting_edge_technology'),
					text: t('hot_line_bts_is_a_company_with_four')
				}}
			/>

			<About
				revert
				title={t('our_services')}
				texts={[
					t('than_computer_programming'),
					t('greater_than_software_publishing_less'),
					t('greater_than_it_consulting_less_than_stron'),
					t('vities_less_than_strong_greater_than_we_offer_a_wi'),
					t('satisfaction_and_loyalty_less_than'),
					t('digital_future_less_t')
				]}
				icon={<img src={servicesImage} alt='' />}
			/>
			<IconCarousel items={carouselIcon} />
			<div id='about'></div>
			<About
				title={t('about_us')}
				texts={[
					t(
						'we_offer_innovative_recruitment_solutions_that_help_our_clients_attract_and_hire_the_most_talented_candidates'
					),
					t('our_team_consists_of_experienced_and_dedicated'),
					t('hot_deal_btc_offers_a_wide_range_of_services')
				]}
				icon={<img src={aboutImage1} alt='' />}
			/>
			<About
				revert
				texts={[
					t('we_pay_special_attention_to_understanding'),
					t('partnering_with_hot_deal_btc_allows_your'),
					t('contact_us_today_and_trust_your_hiring')
				]}
				icon={<img src={aboutImage2} alt='' />}
			/>

			<CultureSection />

			{/* <CloseHero
				texts={[
					{
						icon: <HomeRepairServiceIcon />,
						text: t('our_recruiters_have_specialization_and_expertise'),
						title: t('specialization_in_recruitment')
					},
					{
						icon: <Diversity3Icon />,
						text: t('we_handle_the_entire_recruitment_process'),
						title: t('recruitment_process_efficiency')
					},
					{
						icon: <StorefrontIcon />,
						text: t('our_recruiters_know_everything_about'),
						title: t('specialized_market_knowledge')
					}
				]}
			/> */}
		</section>
	);
};
