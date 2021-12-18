import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import useStyles from '../utils/styles'

const Layout = ({ children }) => {
	const classes = useStyles()
	return (
		<div>
			<Head>
				<title>Infinite Clothing Store</title>
			</Head>
			<AppBar position='static' className={classes.navbar}>
				<Toolbar>
					<Typography>Infinite</Typography>
				</Toolbar>
			</AppBar>
			<Container className={classes.main}>{children}</Container>
			<footer className={classes.footer}>All rights reserved | Infinite 2022</footer>
		</div>
	)
}

export default Layout
