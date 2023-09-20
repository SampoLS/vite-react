import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { combine } from './features/combine/getDataSlice';

import Head from './components/head/Head';
import LoginForm from './components/login_form/LoginForm';
import PageLayout from './layout/PageLayout';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(combine());
   }, []);

    return (
        <PageLayout>
            <Head />
            <Outlet />
            <LoginForm />
        </PageLayout>
    );
}
