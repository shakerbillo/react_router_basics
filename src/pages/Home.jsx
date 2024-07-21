import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate();

	const handleNavigation = () => {
		navigate('/products');
	};

	return (
		<>
			<h1>My Home Page</h1>
			<p>
				Go to <Link to='/products'>Product</Link>
			</p>
			<p>
				<button onClick={handleNavigation}>Navigate</button>
			</p>
		</>
	);
};

export default HomePage;
