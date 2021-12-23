import {
	Button,
	Card,
	Grid,
	Link,
	List,
	ListItem,
	Rating,
	Typography,
} from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import NextLink from 'next/link'
import Layout from '../../components/Layout'
import Product from '../../models/Product'
import db from '../../utils/db'
import classes from '../../utils/classes'
import Image from 'next/image'

const ProductScreen = ({ product }) => {
	if (!product) {
		return <div>!Not found</div>
	}
	return (
		<Layout title={product.name} description={product.description}>
			<Box sx={classes.section}>
				<NextLink href='/' passHref>
					<Link>
						<Typography>back to products</Typography>
					</Link>
				</NextLink>
			</Box>
			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<Image
						src={product.image}
						alt={product.name}
						width={540}
						height={540}
						layout='responsive'></Image>
				</Grid>
				<Grid item md={3} xs={12}>
					<List>
						<ListItem>
							<Typography component='h1' variant='h1'>
								{product.name}
							</Typography>
						</ListItem>
						<ListItem>
							<Typography>Category: {product.category}</Typography>
						</ListItem>
						<ListItem>
							<Typography>Brand: {product.brand}</Typography>
						</ListItem>
						<ListItem>
							<Typography>({product.numReviews} reviews)</Typography>
						</ListItem>
						<ListItem>
							<Typography> Description: {product.description}</Typography>
						</ListItem>
						{/* <ListItem>
						<Rating value={product.rating} readOnly></Rating>
						<Link href='#reviews'>
							<Typography>({product.numReviews} reviews)</Typography>
						</Link>
					</ListItem>
					<ListItem>
						<Typography> Description: {product.description}</Typography>
					</ListItem>
				</List>
			</Grid>
         <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                    </Typography>
                  </Grid>
                </Grid>
                 </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  // onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
      <List>
        <ListItem>
          <Typography name="reviews" id="reviews" variant="h2">
            Customer Reviews
          </Typography>
        </ListItem>
        {/* {reviews.length === 0 && <ListItem>No review</ListItem>}
        {reviews.map((review) => (
          <ListItem key={review._id}>
            <Grid container>
              <Grid item className={classes.reviewItem}>
                <Typography>
                  <strong>{review.name}</strong>
                </Typography>
                <Typography>{review.createdAt.substring(0, 10)}</Typography>
              </Grid>
              <Grid item>
                <Rating value={review.rating} readOnly></Rating>
                <Typography>{review.comment}</Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))} */}
						{/* <ListItem>
          {userInfo ? (
            <form onSubmit={submitHandler} className={classes.reviewForm}>
              <List>
                <ListItem>
                  <Typography variant="h2">Leave your review</Typography>
                </ListItem>
                <ListItem>
                  <TextField
                    multiline
                    variant="outlined"
                    fullWidth
                    name="review"
                    label="Enter comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </ListItem> */}
						{/* <ListItem>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </ListItem> */}
						{/* <ListItem>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>

                  {/* {loading && <CircularProgress></CircularProgress>}
                </ListItem>
              </List>
            </form>
          ) : (
            <Typography variant="h2">
              Please{' '}
              <Link href={`/login?redirect=/product/${product.slug}`}>
                login
              </Link>{' '}
              to write a review
            </Typography>
          )}
        </ListItem>*/}
					</List>
				</Grid>
				<Grid item md={3} xs={12}>
					<Card>
						<List>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>Price</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography>${product.price}</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>Status</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography>
											{product.countInStock > 0 ? 'In stock' : 'Unavailable'}
										</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Button
									fullWidth
									variant='contained'
									// onClick={addToCartHandler}
								>
									Add to cart
								</Button>
							</ListItem>
						</List>
					</Card>
				</Grid>
			</Grid>
			{/* </Grid> */}
		</Layout>
	)
}
export async function getServerSideProps(context) {
	const { params } = context
	const { slug } = params

	await db.connect()
	const product = await Product.findOne({ slug }, '-reviews').lean()
	await db.disconnect()
	return {
		props: {
			product: db.convertDocToObj(product),
		},
	}
}

export default ProductScreen
