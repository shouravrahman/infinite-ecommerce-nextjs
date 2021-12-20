import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	navbar: {
		backgroundColor: '#203040',
		'& a': {
			color: '#ffffff',
			marginLeft: 10,
		},
	},
	brand: {
		fontSize: '1.5rem',
		fontWeight: 'bold',
	},
	grow: {
		flexGrow: 1,
	},
	linkFlex: {
		display: 'flex',
	},
	main: {
		minHeight: '80vh',
	},
	footer: {
		textAlign: 'center',
	},
})

export default useStyles
