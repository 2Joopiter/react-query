import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router-dom';
import UserInfo from './UserInfo';
import UserAddress from './UserAddress';
import Main from './Main';
import Menu from './Menu';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className='App'>
				<Menu />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/info' element={<UserInfo />} />
					<Route path='/address' element={<UserAddress />} />
				</Routes>
			</div>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
