import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material'

import Layout from '../components/Layout'
import data from '../utils/data'

export default function Home() {
	return (
		<Layout>
			<div>
				<h1>products</h1>
				<Grid container spacing={3}>
					{data.products.map((product) => {
						return (
							<Grid item md={4} key={product.name}>
								<Card variant='outlined'>
									<CardActionArea>
										<CardMedia
											component='img'
											image={product.image}
											title={product.name}></CardMedia>
										<CardContent>
											<Typography>{product.name}</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Typography>${product.price}</Typography>
										<Button size='small' color='primary'>
											Add to Cart
										</Button>
									</CardActions>
								</Card>
							</Grid>
						)
					})}
				</Grid>
			</div>
		</Layout>
	)
}
