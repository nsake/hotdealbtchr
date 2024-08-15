import ActionAreaCard from 'components/shared/Card';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarsIcon from '@mui/icons-material/Stars';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import CardCarousel from 'components/CardCarousel';
import Treasure from 'sheets/icons/Treasure';
import Hero from 'components/Hero';
import AboutList from 'components/AboutList';
import Analyze from 'sheets/icons/Analyze';
import { Button } from '@mui/material';

export const Candidates = () => {
	const cardCarouselList = [
		<ActionAreaCard
			icon={<RemoveRedEyeIcon />}
			title={'Resume Review and Preliminary Interview'}
			text={
				'We analyze resumes and conduct preliminary interviews with potential candidates. At this stage, we assess their professional skills, work experience, and alignment with the requirements of the position.'
			}
		/>,
		<ActionAreaCard
			icon={<StarsIcon />}
			title={'Testing and Evaluation'}
			text={`If necessary, we conduct specialized tests and evaluations to gain a more detailed assessment of a candidate's technical skills and qualifications. This may include technical tasks, assessments, or other evaluation methods depending on the requirements of the position.`}
		/>,
		<ActionAreaCard
			icon={<RecordVoiceOverIcon />}
			title={'Interview'}
			text={`After the preliminary selection, we organize an interview between the candidate, the recruiter, and the future manager.
  Following the interview, we review feedback from all parties involved and make a final decision. If the candidate is selected, we proceed with the offer and onboarding process, ensuring a smooth transition into their new role.`}
		/>
	];

	return (
		<section>
			<Hero
				hideBackgroundImage
				icon={<Treasure />}
				{...{
					title: 'The hiring process in our company',
					text: 'The specialist selection process at HOT DEAL BTC is based on a systematic and attentive approach that ensures finding the optimal candidate for each of our vacancies. Here is an overview of our candidate selection stages:'
				}}
			/>

			<CardCarousel>{cardCarouselList.map((item) => item)}</CardCarousel>

			<AboutList
				title={'Most Common Open Positions in Our Company'}
				texts={[
					'Sales Manager',
					'SMM Manager',
					'Node JS Developer',
					'Financial Manager',
					'CRM Manager',
					'Motion Designer',
					'Graphic Designer',
					'System Administrator'
				]}
				icon={<Analyze />}
			/>
			<Button
				variant='contained'
				size='large'
				href='/apply-now'
				sx={{ backgroundColor: '#ed3432', color: 'white' }}
			>
				Apply now
			</Button>
		</section>
	);
};
