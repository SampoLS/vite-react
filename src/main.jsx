import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import UserDetails from './routes/UserDetails'
import UsersList from './features/users/UsersList'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <UsersList /> },
            { path: '/user/:username', element: <UserDetails /> }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
