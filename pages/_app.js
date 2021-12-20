import { useEffect } from 'react'
import '../styles/globals.css'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../utils/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()
function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	// useEffect(() => {
	// 	const jssStyles = document.querySelector('#jss-server-side')
	// 	if (jssStyles) {
	// 		jssStyles.parentElement.removeChild(jssStyles)
	// 	}
	// }, [])
	return (
		<CacheProvider value={emotionCache}>
			<Component {...pageProps} />
		</CacheProvider>
	)
}

export default MyApp
