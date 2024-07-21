import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/Home';
import ProductPage from '../pages/Product';
import ProductDetailPage from '../pages/ProductDetail';
import RootLayout from '../pages/Root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> }, // path: ''
			{ path: '/products', element: <ProductPage /> },
			{ path: '/products/:productId', element: <ProductDetailPage /> },
		],
	},
]);

const Routing = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default Routing;
