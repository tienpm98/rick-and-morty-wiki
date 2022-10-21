import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import routes from 'routes/routes'

import ErrorBoundary from 'components/ErrorBoundary'
import Layout from 'components/Layout'
import NotFound from './NotFound'

const Application = () => {
	return (
		<ErrorBoundary>
			<Routes>
				<Route element={<Layout />}>
					{routes.map(({ path, element }) => {
						const Element: FC = element
						return (
							<Route
								key={path}
								path={path}
								element={
									<Suspense fallback='suspense...'>
										<Element />
									</Suspense>
								}
							/>
						)
					})}
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</ErrorBoundary>
	)
}

export default Application
