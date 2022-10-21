import { lazy } from 'react'
import { DEFAULT } from './route.constant'

const Characters = lazy(() => import('pages/Characters'))
const Episode = lazy(() => import('pages/Episode'))
const Location = lazy(() => import('pages/Location'))

const CharactersRoute = {
	path: DEFAULT,
	element: Characters,
}
const EpisodesRoute = {
	path: 'episodes',
	element: Episode,
}

const LocationRoute = {
	path: 'location',
	element: Location,
}

const Routes = [CharactersRoute, EpisodesRoute, LocationRoute]
export default Routes
