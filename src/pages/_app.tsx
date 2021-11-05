import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

import '../../styles/swiper.css'

// import { createServer, Model } from 'miragejs'
// import { continents } from '../services/mock'

// createServer({
//   models: {
//     continent: Model,
//   },

//   seeds(server) {
//     server.db.loadData({
//       continents
//     })
//   },

//   routes() {
//     this.namespace = 'api'

//     this.get('/continents', (schema, request) => {
//       // return this.schema.all('continent')
//       return schema.db.continents
//     })

//     this.get('/continents/:id', (schema, request) => {
//       const id = request.params.id
//       console.log(id)
//       return schema.db.continents.find(id)
//     })
//   }
// })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
