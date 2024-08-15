import Hero from 'components/Hero';
import IconCarousel from 'components/IconCarousel';

import HandshakeIcon from '@mui/icons-material/Handshake';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import About from 'components/About';
import Interview from 'sheets/icons/Interview';
import AbsorbKnowledge from 'sheets/icons/AbsorbKnowledge';
import ActionAreaCard from 'components/shared/Card';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarsIcon from '@mui/icons-material/Stars';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import CloseHero from 'components/CloseHero';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CardCarousel from 'components/CardCarousel';
import OpenComputer from 'sheets/icons/OpenComputer';
import MainRoads from 'sheets/icons/MainRoads';
import { InsertEmoticon, Public } from '@mui/icons-material';
import CultureSection from 'components/CultureSection';

export const Home = () => {
	const carouselIcon = [
		{
			text: '4 years on the market',
			icon: <HandshakeIcon />
		},
		{
			text: '50,000+ satisfied clients',
			icon: <AutoAwesomeIcon />
		},
		{
			text: '500+ happy employees',
			icon: <InsertEmoticon />
		},
		{
			text: 'Branches across Europe',
			icon: <Public />
		}
	];

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
				icon={<OpenComputer />}
				{...{
					title: 'Hot Line BTS',
					subtitle: 'Your Trusted Partner in Cutting-Edge Technology',
					text: 'Hot Line BTS is a company with four years of experience, confidently establishing itself in the European market by delivering top-tier solutions in the field of computer programming and information technology. Our mission is to equip businesses and organizations with innovative tools that help them achieve new levels of efficiency and competitiveness.'
				}}
			/>

			<About
				revert
				title='Our Services:'
				texts={[
					`<p>
				<strong>Computer Programming:</strong>
				We specialize in developing high-quality software that meets the highest
				industry standards and the unique needs of our clients.
			</p>`,
					`<p>
				<strong>Software Publishing:</strong>
				We create and publish software that simplifies users’ lives and enhances
				business productivity.
			</p>`,
					`<p>
				<strong>IT Consulting:</strong> Our experts provide professional
				consulting services in the field of informatization, helping
				organizations optimize their IT processes and infrastructure.
			</p>`,
					`<p>
				<strong>Other IT Activities:</strong>
				We offer a wide range of services in information technology, including
				data processing, web hosting, and other information services.
			</p>`,
					`<p>
				<strong>Call Center Operations:</strong> Our call centers provide
				high-quality customer support and service, contributing to increased
				customer satisfaction and loyalty.
			</p>`,
					`<p>
				Hot Line BTS is a team of professionals dedicated to making information
			technology accessible and beneficial for every business. We will help you
			build a solid foundation for your digital future.
			</p>`
				]}
				icon={<MainRoads />}
			/>
			<IconCarousel items={carouselIcon} />
			<div id='about'></div>
			<About
				title='About Us'
				texts={[
					'We offer innovative recruitment solutions that help our clients attract and hire the most talented candidates.',
					'Our team consists of experienced and dedicated professionals who thoroughly analyze each client’s needs and develop customized search strategies. We carefully vet each candidate to ensure they meet the requirements and quality we aim to provide to our clients.',
					'HOT DEAL BTC offers a wide range of services, including recruitment for permanent and temporary positions, executive search, talent acquisition strategy consulting, and much more.'
				]}
				icon={<Interview />}
			/>
			<About
				revert
				texts={[
					'We pay special attention to understanding the client’s business needs and strive to find the perfect match between job requirements and candidates’ skills.',
					'Partnering with HOT DEAL BTC allows your company to focus on core activities while we take care of finding the best candidates for your growth and development.',
					'Contact us today and trust your hiring needs to professionals to build a strong team and reach new heights in your business.'
				]}
				icon={<AbsorbKnowledge />}
			/>

			<CultureSection />
			<About
				title='The hiring process in our company'
				texts={[
					'The specialist selection process at HOT DEAL BTC is based on a systematic and attentive approach that ensures finding the optimal candidate for each of our vacancies. Here is an overview of our candidate selection stages:'
				]}
			/>
			<CardCarousel>{cardCarouselList.map((item) => item)}</CardCarousel>
			<CloseHero
				texts={[
					{
						icon: <HomeRepairServiceIcon />,
						text: `Our recruiters have specialization and expertise in the field of employee recruitment. They understand the job market, have access to recruitment tools and networks, and can effectively search for and attract talent.`,
						title: 'Specialization in Recruitment'
					},
					{
						icon: <Diversity3Icon />,
						text: `We handle the entire recruitment process, from candidate search to preparing documents for hiring. We focus on finding and selecting the best candidates, thereby increasing the efficiency of the hiring process and reducing the time needed to fill positions.`,
						title: 'Recruitment Process Efficiency'
					},
					{
						icon: <StorefrontIcon />,
						text: `Our recruiters know everything about the job market, including employment trends, salary expectations, candidate requirements, and more. This allows us to find candidates with the right skills and talents and offer competitive conditions to attract them.`,
						title: 'Specialized Market Knowledge'
					}
				]}
			/>
		</section>
	);
};
