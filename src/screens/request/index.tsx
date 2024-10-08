import React, { useState } from 'react';
import Hero from 'components/Hero';
import { TextField, Button, Container, Grid, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

export const Request = () => {
	const {
		t,
		i18n: { language }
	} = useTranslation();

	const [inputType, setInputType] = useState<'text' | 'date'>('text');

	return (
		<section>
			<Hero hideBackgroundImage title='Apply now' />
			<Container maxWidth='md'>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<Box mt={4} color='white'>
						<form>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label={t('full_name')}
										variant='outlined'
										InputLabelProps={{ style: { color: 'white' } }}
										sx={{
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'white'
												},
												'&:hover fieldset': {
													borderColor: 'white'
												},
												'&.Mui-focused fieldset': {
													borderColor: 'white'
												},
												color: 'white'
											}
										}}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<DateField
										fullWidth
										InputLabelProps={{ style: { color: 'white' } }}
										sx={{
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'white'
												},
												'&:hover fieldset': {
													borderColor: 'white'
												},
												'&.Mui-focused fieldset': {
													borderColor: 'white'
												},
												color: 'white'
											}
										}}
										label={t('date_of_birth-0')}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label={t('current_location')}
										variant='outlined'
										InputLabelProps={{ style: { color: 'white' } }}
										sx={{
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'white'
												},
												'&:hover fieldset': {
													borderColor: 'white'
												},
												'&.Mui-focused fieldset': {
													borderColor: 'white'
												},
												color: 'white'
											}
										}}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label={t('contact_number')}
										variant='outlined'
										InputLabelProps={{ style: { color: 'white' } }}
										sx={{
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'white'
												},
												'&:hover fieldset': {
													borderColor: 'white'
												},
												'&.Mui-focused fieldset': {
													borderColor: 'white'
												},
												color: 'white'
											}
										}}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label={t('email')}
										type='email'
										variant='outlined'
										InputLabelProps={{ style: { color: 'white' } }}
										sx={{
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'white'
												},
												'&:hover fieldset': {
													borderColor: 'white'
												},
												'&.Mui-focused fieldset': {
													borderColor: 'white'
												},
												color: 'white'
											}
										}}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label={t('desired_position')}
										variant='outlined'
										InputLabelProps={{ style: { color: 'white' } }}
										sx={{
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'white'
												},
												'&:hover fieldset': {
													borderColor: 'white'
												},
												'&.Mui-focused fieldset': {
													borderColor: 'white'
												},
												color: 'white'
											}
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label={t('work_experience')}
										multiline
										rows={4}
										variant='outlined'
										InputLabelProps={{ style: { color: 'white' } }}
										sx={{
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'white'
												},
												'&:hover fieldset': {
													borderColor: 'white'
												},
												'&.Mui-focused fieldset': {
													borderColor: 'white'
												},
												color: 'white'
											}
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label={t('salary_expectations')}
										variant='outlined'
										InputLabelProps={{ style: { color: 'white' } }}
										sx={{
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'white'
												},
												'&:hover fieldset': {
													borderColor: 'white'
												},
												'&.Mui-focused fieldset': {
													borderColor: 'white'
												},
												color: 'white'
											}
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label={t('cover_letter')}
										multiline
										rows={6}
										variant='outlined'
										InputLabelProps={{ style: { color: 'white' } }}
										sx={{
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'white'
												},
												'&:hover fieldset': {
													borderColor: 'white'
												},
												'&.Mui-focused fieldset': {
													borderColor: 'white'
												},
												color: 'white'
											}
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<Button
										variant='contained'
										fullWidth
										size='large'
										type='submit'
										sx={{ backgroundColor: '#ed3432', color: 'white' }}
									>
										{t('submit')}
									</Button>
								</Grid>
							</Grid>
						</form>
					</Box>
				</LocalizationProvider>
			</Container>
		</section>
	);
};
