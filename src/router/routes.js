import HomePage from '../page/HomePage';
import CustomerPage from '../page/CustomersPage';
import RoutePaths from '../data/enum/RoutePaths';
import RouteNames from '../data/enum/RouteNames';
import PetPage from '../page/PetPage';

export default [
  {
    path: RoutePaths.HOME,
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: RoutePaths.CUSTOMERS,
    component: CustomerPage,
    name: RouteNames.CUSTOMERS,
  },
  {
    path: RoutePaths.PETS,
    component: PetPage,
    name: RouteNames.PETS,
  },
];
