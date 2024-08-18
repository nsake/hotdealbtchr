import React from 'react';
import {
	Box,
	Typography,
	Grid,
	Paper,
	IconButton,
	Container
} from '@mui/material';
import { Star, People, Lock, TrendingUp, ThumbUp } from '@mui/icons-material';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

interface ValueItem {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const CultureSection: React.FC = () => {
	const { t } = useTranslation();

	const values: ValueItem[] = [
		{
			title: t('customer_focus'),
			description: t('we_place_the_needs_and_expectations'),
			icon: <People fontSize='large' />
		},
		{
			title: t('transparency_and_integrity'),
			description: t('we_build_our_relationships_with_clients'),
			icon: <Lock fontSize='large' />
		},
		{
			title: t('commitment_to_excellence'),
			description: t('we_are_always_focused_on_achieving_the_highest'),
			icon: <Star fontSize='large' />
		},
		{
			title: t('continuous_development'),
			description: t('we_believe_in_the_power_of_constant_growth_and_learning'),
			icon: <TrendingUp fontSize='large' />
		},
		{
			title: t('positive_thinking'),
			description: t('we_approach_every_task_with_optimism_and_confidence'),
			icon: <ThumbUp fontSize='large' />
		}
	];

	return (
		<Box sx={{ py: 8, mb: 8 }} id='culture'>
			<Container maxWidth='lg'>
				<Fade delay={100} duration={1000}>
					<Typography
						variant='h3'
						sx={{
							mb: 6,
							fontWeight: 700,
							textAlign: 'center',
							textTransform: 'uppercase',
							letterSpacing: '2px'
						}}
					>
						{t('our_culture')}
					</Typography>
				</Fade>
				<Fade delay={100} duration={1000}>
					<Grid container spacing={6}>
						{/* Mission Section */}
						<Grid item xs={12} md={6}>
							<Paper
								sx={{ p: 4, backgroundColor: '#333333', height: '100%' }}
								elevation={3}
							>
								<Typography
									variant='h5'
									sx={{
										mb: 2,
										color: '#ed3432',
										fontWeight: 600,
										textAlign: 'center'
									}}
								>
									{t('our_mission')}
								</Typography>
								<Typography
									variant='body1'
									sx={{ color: '#e0e0e0', textAlign: 'justify' }}
								>
									{t('our_mission_is_to_deliver_innovative_technological')}
								</Typography>
							</Paper>
						</Grid>

						{/* Vision Section */}

						<Grid item xs={12} md={6}>
							<Paper
								sx={{ p: 4, backgroundColor: '#333333', height: '100%' }}
								elevation={3}
							>
								<Typography
									variant='h5'
									sx={{
										mb: 2,
										color: '#ed3432',
										fontWeight: 600,
										textAlign: 'center'
									}}
								>
									{t('our_vision')}
								</Typography>
								<Typography
									variant='body1'
									sx={{ color: '#e0e0e0', textAlign: 'justify' }}
								>
									{t('we_envision_ourselves_as_a_leader_in')}
								</Typography>
							</Paper>
						</Grid>
						{/* Our Values Section */}

						<Fade delay={100} duration={1000}>
							<Grid item xs={12}>
								<Typography
									variant='h4'
									sx={{
										mt: 6,
										mb: 4,
										fontWeight: 600,
										textAlign: 'center',
										textTransform: 'uppercase',
										letterSpacing: '1px'
									}}
								>
									{t('our_values')}
								</Typography>
							</Grid>
						</Fade>

						{/* Values List */}

						<Fade delay={100} duration={1000}>
							<Grid
								container
								spacing={4}
								justifyContent='center'
								alignItems='stretch'
								sx={{ ml: '0' }}
							>
								{values.map((value, index) => (
									<Grid item xs={12} sm={6} md={4} key={index}>
										<Paper
											sx={{
												p: 4,
												backgroundColor: '#333333',
												color: '#fff',
												height: '100%',
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center'
											}}
											elevation={3}
										>
											<IconButton
												sx={{
													color: '#ed3432',
													fontSize: 50
												}}
											>
												{value.icon}
											</IconButton>
											<Typography
												variant='h6'
												sx={{ fontWeight: 500, textAlign: 'center' }}
											>
												{value.title}
											</Typography>
											<Typography
												variant='body2'
												sx={{ color: '#e0e0e0', mt: 1, textAlign: 'center' }}
											>
												{value.description}
											</Typography>
										</Paper>
									</Grid>
								))}
							</Grid>
						</Fade>
					</Grid>
				</Fade>
			</Container>
		</Box>
	);
};

export default CultureSection;
