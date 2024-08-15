import React from 'react';
import Hero from 'components/Hero';
import { TextField, Button, Container, Grid, Box } from '@mui/material';

export const Request = () => {
	return (
		<section>
			<Hero hideBackgroundImage title='Apply now' />
			<Container maxWidth='md'>
				<Box mt={4} color='white'>
					<form>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									label='Full name'
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
									label='Date of birth'
									type='date'
									InputLabelProps={{
										shrink: true,
										style: { color: 'white' }
									}}
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
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									label='Current location'
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
									label='Contact number'
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
									label='Email'
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
									label='Desired position'
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
									label='Work experience'
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
									label='Salary expectations'
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
									label='Cover letter'
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
									Submit
								</Button>
							</Grid>
						</Grid>
					</form>
				</Box>
			</Container>
		</section>
	);
};
