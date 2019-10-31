import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
	
function NotFound(){
	const { t } = useTranslation();
	return (
		<Typography variant="h4">
			{t('error.notfound')}
		</Typography>
	);
}

export default NotFound;
