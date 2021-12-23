import nc from 'next-connect'
import db from '../../../utils/db'
import Product from '../../../models/Product'
const handler = nc()

handler.get(async (req, res) => {
	await db.connect()
	const products = await Product.find({})
	res.send(products)
	db.disconnnect()
})
export default handler
