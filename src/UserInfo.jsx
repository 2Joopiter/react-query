import { useQuery } from '@tanstack/react-query';

export default function UserInfo() {
	const fetchUser = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		return await response.json();
	};

	// useQuery (['querykey값'(임의 지정)], fetch함수);
	// queryKey: react-query로 관리할 각 비동기 데이터 구분 용도의 key, fetch함수: 패칭 데이터 호출 함수
	/*
  data: 실제 반환 데이터
  isError, isSuccess: 데이터반환 성공/실패 유무
  isLoading: pending 유무
  isStale, isFresh: 최신데이터 유무 (false: 최신상태/true: 옛날상태)
  refetch: 비동기 데이터 강제 재요청 함수
  */
	const { data, isLoading, isSuccess } = useQuery({ querykey: ['users'], queryFn: fetchUser });
	//useQuery 이용시 useState를 통한 지역스테이트 생성, useEffect를 통한 fetching 함수 호출, useCallback을 통한 메모이제이션 처리를 한번에 대신 처리해줌

	return (
		<div className='UserInfo'>
			<h1>User Information</h1>
			{isLoading && <p>is loading...</p>}
			{isSuccess && data.map((user, idx) => <h2 key={user.id}>{user.name}</h2>)}
		</div>
	);
}
