import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';

// routes
import AuthenticationRotes from './AuthenticationRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

const MaintenanceError = Loadable(lazy(() => import('views/pages/maintenance/Error')));
const PagesLanding = Loadable(lazy(() => import('views/pages/landing')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([
        { path: '/', element: <PagesLanding /> },
        LoginRoutes,
        AuthenticationRotes,
        MainRoutes,
        { path: '*', element: <MaintenanceError /> }
    ]);
}
