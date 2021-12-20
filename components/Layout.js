import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import NextLink from 'next/link'
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
					<NextLink href='/' passHref>
						<Link>
							<Typography className={classes.brand}>Infinite</Typography>
						</Link>
					</NextLink>
					<div className={classes.grow}></div>
					<div className={classes.linkFlex}>
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
					</div>
				</Toolbar>
			</AppBar>
			<Container className={classes.main}>{children}</Container>
			<footer className={classes.footer}>All rights reserved | Infinite 2022</footer>
		</div>
	)
}

export default Layout
