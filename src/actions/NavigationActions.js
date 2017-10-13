import { browserHistory } from 'react-router';
import routeList from '../RouteList'
export const push = (path = '/') => {
    browserHistory.push(path);

}

export const pop = () => {
    browserHistory.goBack();
}

export const getRouteInfo = (path) => {
    let routes = routeList.filter((routeObject) => {
        return routeObject.route === path
    })
    if (routes.length === 1) {
        return routes[0]
    }
}