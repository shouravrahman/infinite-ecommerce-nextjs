import {
	AppBar,
	Container,
	CssBaseline,
	Link,
	Toolbar,
	Typography,
	ThemeProvider,
	Switch,
	Box,
} from '@mui/material'
import { createTheme } from '@mui/material/styles'
import Head from 'next/head'
import NextLink from 'next/link'
import React, { useContext } from 'react'
import { Store } from '../utils/Store'
import classes from '../utils/classes'
import Cookies from 'js-cookie'

const Layout = ({ title, children, description }) => {
	const { state, dispatch } = useContext(Store)

	const { darkMode } = state

	const darkModeChangeHandler = () => {
		dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' })
		const newDarkMode = !darkMode
		Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
	}
	// const classes = useStyles()
	const theme = createTheme({
		components: {
			MuiLink: {
				defaultProps: {
					underline: 'hover',
				},
			},
		},

		typography: {
			h1: {
				fontSize: '1.6rem',
				fontWeight: 400,
				margin: '1rem 0',
			},
			h2: {
				fontSize: '1.4rem',
				fontWeight: 400,
				margin: '1rem 0',
			},
		},
		palette: {
			mode: darkMode ? 'dark' : 'light',
			primary: {
				main: '#f0c000',
			},
			secondary: {
				main: '#208080',
			},
		},
	})
	return (
		<>
			<Head>
				<title>
					{title ? `${title} - Infinite Clothing Store` : 'Infinite Clothing Store'}
				</title>
				{description && <meta name='description' content={description} />}
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<AppBar position='static' sx={classes.appbar}>
					<Toolbar>
						<NextLink href='/' passHref>
							<Link>
								<Typography sx={classes.brand}>Infinite</Typography>
							</Link>
						</NextLink>
						<Box sx={classes.grow}></Box>
						<Box sx={classes.linkFlex}>
							<Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
							<NextLink href='/cart' passHref>
								<Link>
									<Typography>Cart</Typography>
								</Link>
							</NextLink>
							<NextLink href='/login' passHref>
								<Link>
									<Typography>Login</Typography>
								</Link>
							</NextLink>
						</Box>
					</Toolbar>
				</AppBar>
				<Container component='main' sx={classes.main}>
					{children}
				</Container>
				<Box component='footer' sx={classes.footer}>
					<Typography>All rights reserved. Infinite 2022.</Typography>
				</Box>
			</ThemeProvider>
		</>
	)
}

export default Layout
