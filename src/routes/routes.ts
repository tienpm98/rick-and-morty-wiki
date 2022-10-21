import { lazy } from 'react'
import { DEFAULT, EPISODES, LOCATION } from './route.constant'

const Characters = lazy(() => import('pages/Characters'))
const Episode = lazy(() => import('pages/Episode'))
const Location = lazy(() => import('pages/Location'))

const CharactersRoute = {
	path: DEFAULT,
	element: Characters,
}
const EpisodesRoute = {
	path: EPISODES,
	element: Episode,
}

const LocationRoute = {
	path: LOCATION,
	element: Location,
}

const Routes = [CharactersRoute, EpisodesRoute, LocationRoute]
export default Routes
