import Hero from 'components/Hero';
import IconCarousel from 'components/IconCarousel';

import HandshakeIcon from '@mui/icons-material/Handshake';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DescriptionIcon from '@mui/icons-material/Description';
import About from 'components/About';
import Interview from 'sheets/icons/Interview';
import AbsorbKnowledge from 'sheets/icons/AbsorbKnowledge';
import ActionAreaCard from 'components/shared/Card';
import ChecklistIcon from '@mui/icons-material/Checklist';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarsIcon from '@mui/icons-material/Stars';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseHero from 'components/CloseHero';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';

export const Home = () => {
	const carouselIcon = [
		{
			text: '9 років нa ринку праці',
			icon: <HandshakeIcon />
		},
		{
			text: '400 + задоволених клієнтів',
			icon: <AutoAwesomeIcon />
		},
		{
			text: 'Досвід співпраці з ТОП - компаніями України',

			icon: <EmojiEventsIcon />
		},
		{
			text: '87 % кандидатів проходять випробовувальний термін і залишаються на роботі',
			icon: <DescriptionIcon />
		}
	];

	return (
		<section>
			<Hero />

			<IconCarousel items={carouselIcon} />

			<About
				title='Про Нас'
				texts={[
					'Ми пропонуємо інноваційні рішення в галузі рекрутингу, які допомагають нашим клієнтам залучати і наймати найталановитіших кандидатів.',
					'Наша команда складається з досвідчених і відданих професіоналів, які ретельно аналізують потреби кожного клієнта і розробляють індивідуальні стратегії пошуку. Ми ретельно перевіряємо кожного кандидата, щоб переконатися в їхній відповідності вимогам і якості, яку ми прагнемо надати нашим клієнтам.',
					'HOT DEAL BTC пропонує широкий спектр послуг, включно з рекрутингом на постійні та тимчасові позиції, пошуком керівних кадрів, консультаціями щодо стратегій залучення талантів і багато іншого.'
				]}
				icon={<Interview />}
			/>

			<About
				revert
				texts={[
					'Ми приділяємо особливу увагу розумінню бізнес-потреб клієнта і прагнемо знайти ідеальну відповідність між вимогами вакансії та навичками кандидатів.',
					'Співпраця з HOT DEAL BTC дає можливість вашій компанії зосередитися на основній діяльності, дозволяючи нам піклуватися про пошук найкращих кандидатів для вашого зростання та розвитку.',
					'Зверніться до нас уже сьогодні та довірте свої потреби в наймі професіоналам, щоб побудувати сильну команду та досягти нових висот у вашому бізнесі.'
				]}
				icon={<AbsorbKnowledge />}
			/>

			<About
				title='Процес підбору кандидата'
				texts={[
					'Процес підбору фахівця в рекрутинговій агенції HOT DEAL BTC ґрунтується на систематичному й уважному підході, який гарантує знаходження оптимального кандидата для кожної вакансії. Ось загальний огляд нашого процесу підбору фахівця:'
				]}
			/>

			<div style={{ position: 'relative', minHeight: '550px' }}>
				<div
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
					<ActionAreaCard
						icon={<ChecklistIcon />}
						title={'Збирання побажань'}
						text={
							'Наша команда ретельно спілкується з клієнтом, щоб повністю зрозуміти їхні потреби та вимоги до вакансії. Ми обговорюємо не тільки технічні навички, а й культурні аспекти, які важливі для успішної інтеграції кандидата в компанію.'
						}
					/>

					<ActionAreaCard
						icon={<RemoveRedEyeIcon />}
						title={'Перегляд резюме та попередня співбесіда'}
						text={
							'Ми аналізуємо резюме та проводимо попередні співбесіди з потенційними кандидатами. На цьому етапі ми оцінюємо їхні професійні навички, досвід роботи та відповідність вимогам вакансії.'
						}
					/>

					<ActionAreaCard
						icon={<StarsIcon />}
						title={'Тестування та оцінювання'}
						text={
							'За необхідності ми проводимо спеціальні тести й оцінювання, щоб більш детально оцінити технічні навички та кваліфікацію кандидата. Це може включати технічні завдання, ассессмент або інші методи оцінки, що залежать від вимог вакансії.'
						}
					/>

					<ActionAreaCard
						icon={<RecordVoiceOverIcon />}
						title={'Співбесіда з клієнтом'}
						text={
							'Після проходження попереднього відбору, ми організуємо співбесіду кандидатів з клієнтом. Ми допомагаємо встановити зустріч, підготувати питання і забезпечити ефективну взаємодію між сторонами.'
						}
					/>

					<ActionAreaCard
						icon={<AccessTimeIcon />}
						title={'Підтримка в процесі найму'}
						text={
							'Після вибору відповідного кандидата ми підтримуємо клієнта в процесі найму, надаючи рекомендації щодо умов праці.'
						}
					/>
				</div>
			</div>

			<CloseHero
				texts={[
					{
						icon: <HomeRepairServiceIcon />,
						text: `Наші рекрутери мають спеціалізацію та експертизу в області найму
							співробітників. Вони знають ринок праці, мають доступ до
							рекрутингових інструментів та мережі можуть ефективно шукати та
							привертати таланти.`,
						title: 'Спеціалізація в наймі'
					},
					{
						icon: <Diversity3Icon />,
						text: `Ми займаємось всім процесом найму, починаючи з пошуку кандидатів і закінчуючи підготовкою документів для прийому на роботу. Ми спрямовані на пошук та відбір кращих кандидатів, тим самим збільшуючи ефективність процесу найму та знижуючи час, необхідний для заповнення вакансій.`,
						title: 'Ефективність процесу найму'
					},
					{
						icon: <StorefrontIcon />,
						text: `Наші рекрутери знають все про ринок праці, включаючи тренди в області зайнятості, заробітну плату, вимоги до кандидатів тощо. Це дозволяє нам знаходити кандидатів з потрібними навичками і талантами, а також пропонувати конкурентоспроможні умови для залучення талантів.`,
						title: 'Спеціалізовані знання ринку праці'
					}
				]}
			/>
		</section>
	);
};
