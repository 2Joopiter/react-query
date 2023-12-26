import { useQuery } from '@tanstack/react-query';

const fetchUser = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
	return await response.json();
};

export const useUserQuery = () => {
	return useQuery({ queryKey: ['user'], queryFn: fetchUser });
};

/* react-query 개발툴에서 확인할 수 있는 상태값 5가지 정리
fresh: 비동기 데이터가 현재 최신상태 (refetching할 필요가 없는 신선한 상태)
fetching: 비동기 데이터에 요청중인 상태 (Pending)
paused: 특정이유로 비동기 데이터 요청이 보류된 상태
stale: 현재 해당 컴포넌트에서 활용되고 있는 데이터가 최신상태가 아닌 경우 (refecthing이 필요한 상태)
inactive: 최신상태가 아닌 데이터를 해당 컴포넌트가 현재 활용하고 있지 않은 상태 (일정시간 이후 해당 데이터삭제 > 메모리 최적화)
*/
