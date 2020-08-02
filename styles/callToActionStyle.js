const callToActionStyle = {
	title: {
		margin: '1.75rem 0 0.875rem',
		textDecoration: 'none',
		fontWeight: '700',
		fontFamily: `"Roboto Slab", "Times New Roman", serif`,
		marginBottom: '1rem',
		marginTop: '30px',
		minHeight: '32px',
	},
	container: {
		paddingRight: '15px',
		paddingLeft: '15px',
		marginRight: 'auto',
		marginLeft: 'auto',
		width: '100%',
		'@media (min-width: 576px)': {
			maxWidth: '540px',
		},
		'@media (min-width: 768px)': {
			maxWidth: '720px',
		},
		'@media (min-width: 992px)': {
			maxWidth: '960px',
		},
		'@media (min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
	actionContainer: {
		backgroundColor: 'rgba(250, 210, 180, 0.5)',
		borderRadius: '5px',
	},
	actionContainerTeep: {
		backgroundColor: 'rgba(220, 240, 220, 0.5)',
		borderRadius: '5px',
	},
	actionContainerWhite: {
		backgroundColor: 'rgba(220, 220, 220, 0.5)',
		borderRadius: '5px',
	},
	'@media (max-width: 576px)': {
		smallDescription: {
			margin: 0,
		},
	},
	videoContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '20px 0',
	},
	imgFluid: {
		maxWidth: '100%',
		height: 'auto',
	},
};

export default callToActionStyle;
