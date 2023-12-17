import About from 'components/About';
import ActionAreaCard from 'components/shared/Card';
import ChecklistIcon from '@mui/icons-material/Checklist';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CardCarousel from 'components/CardCarousel';
import Treasure from 'sheets/icons/Treasure';
import Hero from 'components/Hero';
import AboutList from 'components/AboutList';
import Analyze from 'sheets/icons/Analyze';

export const Candidates = () => {
	const cardCarouselList = [
		<ActionAreaCard
			icon={<ChecklistIcon />}
			title={'Доступ до вакансій'}
			text={`Ми маємо широку базу клієнтів та партнерів, що відкриває доступ до різноманітних вакансій у різних галузях. Кандидатам пропонуються можливості для кар'єрного зростання та розвитку.`}
		/>,
		<ActionAreaCard
			icon={<RemoveRedEyeIcon />}
			title={'Експертна підтримка'}
			text={`Команда HOT DEAL BTC володіє глибокими знаннями ринку праці та вимогами різних індустрій. Вони можуть надати цінні поради та підтримку в підготовці резюме, підготовці до співбесіди та навичках ведення успішної кар'єри.`}
		/>,

		<ActionAreaCard
			icon={<RecordVoiceOverIcon />}
			title={'Конфіденційність та довіра'}
			text={`Ми дотримується принципу конфіденційності у відносинах з кандидатами. Інформація про кандидатів, їхні навички та особисті дані розглядаються конфіденційно, а також застосовуються відповідні заходи безпеки для захисту даних.`}
		/>,
		<ActionAreaCard
			icon={<AccessTimeIcon />}
			title={'Відбір найкращих пропозицій'}
			text={`Ми допомагаємо кандидатам отримати доступ до якісних пропозицій від роботодавців. Ми, враховуючи вимоги та переваги кандидатів, допомагаємо узгодити умови праці та забезпечити прозору процедуру підбору персоналу.`}
		/>,
		<ActionAreaCard
			icon={<AccessTimeIcon />}
			title={'Розвиток професійних навичок'}
			text={`Ми пропонуємо кандидатам різноманітні можливості для підвищення кваліфікації та розвитку професійних навичок. Це можуть бути тренінги, семінари, вебінари або інші форми навчання, спрямовані на підвищення конкурентоспроможності кандидатів на ринку.`}
		/>
	];

	return (
		<section>
			<Hero
				hideBackgroundImage
				icon={<Treasure />}
				{...{
					title: 'Що ми пропонуємо кандидатам',
					text: 'У рекрутинговому агенстві HOT DEAL BTC ми прагнемо створити надійне та позитивне середовище для кандидатів, де ви можете знайти свою ідеальну роботу та розвиватись професійно. Наша команда експертів займається пошуком та підбором талановитих працівників для різних індустрій і галузей, щоб забезпечити вам найкращі можливості працевлаштування.'
				}}
			/>

			<CardCarousel>{cardCarouselList.map((item) => item)}</CardCarousel>

			<AboutList
				title={'Найбільш затребувані вакансії 2023'}
				texts={[
					'Програміст/розробник програмного забезпечення',
					'Аналітик даних',
					'Маркетолог',
					'Менеджер проекту',
					'Інженер-конструктор',
					'Графічний дизайнер',
					'Системний адміністратор',
					'Бізнес-аналітик'
				]}
				icon={<Analyze />}
			/>
		</section>
	);
};
