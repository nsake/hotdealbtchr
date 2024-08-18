import React from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const handleChange = (event: any) => {
		i18n.changeLanguage(event.target.value);
	};

	return (
		<FormControl variant='outlined' size='small'>
			<Select
				id='language-select'
				defaultValue={i18n.language}
				onChange={handleChange}
				sx={{
					backgroundColor: 'white',
					color: 'black',
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: 'white'
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: 'gray'
					},
					'& .MuiSvgIcon-root': {
						color: 'black'
					}
				}}
			>
				<MenuItem value='en'>English</MenuItem>
				<MenuItem value='uk'>Українська</MenuItem>
			</Select>
		</FormControl>
	);
};

export default LanguageSwitcher;
