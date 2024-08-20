import About from 'components/About';
import ActionAreaCard from 'components/shared/Card';

import CardCarousel from 'components/CardCarousel';
import ResponsiveCarousel from 'components/Review';

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

import PanoramaPhotosphereSelectIcon from '@mui/icons-material/PanoramaPhotosphereSelect';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import CoPresentIcon from '@mui/icons-material/CoPresent';

import AddModeratorIcon from '@mui/icons-material/AddModerator';
import MaksymIcon from '../../sheets/icons/maksym.png';
import SmirnovaIcon from '../../sheets/icons/michael.png';
import OleksiyIcon from '../../sheets/icons/oleksiy.png';

export const Employers = () => {
	const cardCarouselList = [
		<ActionAreaCard
			icon={<ArrowUpwardIcon />}
			title={'Експертність та досвід'}
			text={
				'Наша команда професіоналів мають багаторічний досвід у сфері рекрутингу. Ми розумымо потреби роботодавців та знаємо ринок праці досконало, що допомагає нам ефективно підбирати найкращих кандидатів для ваших вакансій та згідно з вашими вимогами.'
			}
		/>,
		<ActionAreaCard
			icon={<ElectricBoltIcon />}
			title={'Швидкість та ефективність'}
			text={
				'Mи розуміємо, що час є важливим ресурсом для роботодавців. Ми швидко реагуємо на запити, проводимо швидкий підбір кандидатів та забезпечуємо якісний процес найму. Це дозволяє вам економити час та зосереджуватися на основних аспектах вашого бізнесу.'
			}
		/>,

		<ActionAreaCard
			icon={<PanoramaPhotosphereSelectIcon />}
			title={'Широка база талантів'}
			text={
				'У нас є велика база талантів та різноманітні каналами пошуку кандидатів. Це дозволяє нам знайти вам висококваліфікованих кандидатів з різних галузей та професій.'
			}
		/>,
		<ActionAreaCard
			icon={<CoPresentIcon />}
			title={'Персоналізований підхід'}
			text={
				'Mи розуміємо, що кожна компанія має свої унікальні потреби та вимоги до кандидатів. Ми працюємо з вами, щоб зрозуміти ваші особливості та забезпечити підбір кандидатів, які відповідають вашим конкретним вимогам та корпоративній культурі.'
			}
		/>,
		<ActionAreaCard
			icon={<AddModeratorIcon />}
			title={'Конфіденційність'}
			text={
				'Mи дотримуємось високих стандартів конфіденційності, а також поважаємо вашу приватність та гарантуємо, що всі дані, які ви надаєте, будуть оброблятися конфіденційно.'
			}
		/>
	];

	const data = [
		{
			name: 'Юлія Смирнова',
			description:
				'Ми були дуже задоволені співпрацею з рекрутинговим агентством HOT DEAL BTC. Вони виявили глибоке розуміння наших потреб та вимог і зуміли залучити відмінних кандидатів для нашої компанії. Їх професіоналізм, експертиза та швидкість реакції вражаючі. Дякуємо команді HOT DEAL BTC за великий вклад у розвиток нашої організації.',
			image: SmirnovaIcon,
			stars: 4.9
		},
		{
			name: 'Олексій Ковалючук',
			description:
				'HOT DEAL BTC став нашим надійним партнером в процесі найму нових співробітників. Вони проявили велику ретельність у відборі кандидатів, детально вивчаючи нашу корпоративну культуру та вимоги до посад. Кожен запропонований кандидат був добре підготовлений та відповідав нашим очікуванням. Ми рекомендуємо HOT DEAL BTC як надійного партнера для рекрутингу висококваліфікованих співробітників.',
			image: OleksiyIcon,
			stars: 4.4
		},
		{
			name: 'Максим Соколов',
			description:
				'HOT DEAL BTC став нашим надійним партнером в процесі найму нових співробітників. Вони проявили велику ретельність у відборі кандидатів, детально вивчаючи нашу корпоративну культуру та вимоги до посад. Кожен запропонований кандидат був добре підготовлений та відповідав нашим очікуванням. Ми рекомендуємо HOT DEAL BTC як надійного партнера для рекрутингу висококваліфікованих співробітників.',
			image: MaksymIcon,
			stars: 5
		}
	];

	return (
		<section>
			<About title='Чому Обрати Нас для Пошуку Кандидата' />

			<CardCarousel>{cardCarouselList.map((item) => item)}</CardCarousel>

			<ResponsiveCarousel data={data} />
		</section>
	);
};
