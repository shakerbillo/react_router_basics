import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.list}>
					<li className={styles.list}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
							end
						>
							Home
						</NavLink>
						<NavLink
							to='/products'
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
						>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
