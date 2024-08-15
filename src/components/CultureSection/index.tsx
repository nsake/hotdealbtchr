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

interface ValueItem {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const values: ValueItem[] = [
	{
		title: 'Customer Focus',
		description:
			'We place the needs and expectations of our clients at the heart of everything we do.',
		icon: <People fontSize='large' />
	},
	{
		title: 'Transparency and Integrity',
		description:
			'We build our relationships with clients, partners, and colleagues on transparency and trust.',
		icon: <Lock fontSize='large' />
	},
	{
		title: 'Commitment to Excellence',
		description:
			'We are always focused on achieving the highest results, providing services and solutions that exceed expectations.',
		icon: <Star fontSize='large' />
	},
	{
		title: 'Continuous Development',
		description: 'We believe in the power of constant growth and learning.',
		icon: <TrendingUp fontSize='large' />
	},
	{
		title: 'Positive Thinking',
		description: 'We approach every task with optimism and confidence.',
		icon: <ThumbUp fontSize='large' />
	}
];

const CultureSection: React.FC = () => {
	return (
		<Box sx={{ py: 8 }} id='culture'>
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
						Our Culture
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
									Our Mission
								</Typography>
								<Typography
									variant='body1'
									sx={{ color: '#e0e0e0', textAlign: 'justify' }}
								>
									Our mission is to deliver innovative technological solutions
									that transform businesses and help them reach new heights of
									efficiency and success. We strive to make information
									technology accessible, simple, and beneficial for every
									client.
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
									Our Vision
								</Typography>
								<Typography
									variant='body1'
									sx={{ color: '#e0e0e0', textAlign: 'justify' }}
								>
									We envision ourselves as a leader in the European information
									technology market, renowned for not only meeting but exceeding
									customer expectations. Our company will be a driving force for
									change, helping businesses adapt to the rapidly evolving world
									of technology and grow alongside it.
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
									Our Values
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
