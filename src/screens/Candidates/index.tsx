import ActionAreaCard from 'components/shared/Card';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarsIcon from '@mui/icons-material/Stars';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import CardCarousel from 'components/CardCarousel';
import heroImage from 'sheets/images/depositphotos_327755014-stock-photo-smiling-multicultural-businesswomen-businessmen-looking.jpg';
import positionsImage from 'sheets/images/coworkers-having-a-work-meeting-at-the-office_23-2148985456.jpg';
import Hero from 'components/Hero';
import AboutList from 'components/AboutList';
import Analyze from 'sheets/icons/Analyze';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Candidates = () => {
	const { t } = useTranslation();

	const cardCarouselList = [
		<ActionAreaCard
			icon={<RemoveRedEyeIcon />}
			title={t('resume_review_and_preliminary_interview-0')}
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
				hideBackgroundImage
				icon={<img src={heroImage} alt='' />}
				{...{
					title: t('the_hiring_process_in_our_company'),
					text: t('the_specialist_selection_process_at_hot_deal_btc')
				}}
			/>

			<CardCarousel>{cardCarouselList.map((item) => item)}</CardCarousel>

			<AboutList
				title={t('most_common_open_positions_in_our_company')}
				texts={[
					t('sales_manager'),
					t('smm_manager'),
					t('node_js_developer'),
					t('financial_manager'),
					t('crm_manager'),
					t('motion_designer'),
					t('graphic_designer'),
					t('system_administrator')
				]}
				icon={<img src={positionsImage} alt='' />}
			/>
			<Button
				variant='contained'
				size='large'
				href='/apply-now'
				sx={{ backgroundColor: '#ed3432', color: 'white' }}
			>
				{t('apply_now')}
			</Button>
		</section>
	);
};
