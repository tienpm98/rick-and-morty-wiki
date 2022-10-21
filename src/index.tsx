import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from 'config/client'
import reportWebVitals from './reportWebVitals'
import Application from './pages/Application'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<Application />
		</BrowserRouter>
	</ApolloProvider>
)

reportWebVitals()
