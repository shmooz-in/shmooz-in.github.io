import { lazy } from 'react';

// project imports
import AuthGuard from 'utils/route-guard/AuthGuard';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const AppChat = Loadable(lazy(() => import('views/application/chat')));

const ManageDemographicsCountryList = Loadable(lazy(() => import('views/manage/demographics/CountryList')));
const ManageDemographicsStateList = Loadable(lazy(() => import('views/manage/demographics/StateList')));
const ManageDemographicsCityList = Loadable(lazy(() => import('views/manage/demographics/CityList')));

const ManageCategoryList = Loadable(lazy(() => import('views/manage/Category')));
const ManageEventList = Loadable(lazy(() => import('views/manage/Event')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <SamplePage />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/app/chat',
            element: <AppChat />
        },
        {
            path: '/manage/event',
            element: <ManageEventList />
        },
        {
            path: '/manage/category',
            element: <ManageCategoryList />
        },
        {
            path: '/demographics/countries',
            element: <ManageDemographicsCountryList />
        },
        {
            path: '/demographics/states',
            element: <ManageDemographicsStateList />
        },
        {
            path: '/demographics/cities',
            element: <ManageDemographicsCityList />
        }
    ]
};

export default MainRoutes;
