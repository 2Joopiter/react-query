import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

/*
  redux 기반으로 비동기데이터를 전역State에 저장시의 문제점
  1. redux의 태생 자체가 비동기데이터 관리를 위한 라이브러리가 아니었음 > 전반적인 코드 시스템이 비효율적인 부분이 많았음
  2. 비동기데이터 (서버 사이드 데이터)는 클라이언트쪽에 제어권이 없으므로 서버데이터를 정적인 형태로 저장해서 재활용한다는 것 자체가 적절하지 않음
  3. 1초단위로 수시로 서버쪽에서 변경되는 데이터를 클라이언트쪽에서 전역으로 저장해버리면 1초만 지나도 모든 컴포넌트에 연결되어있는 비동기데이터는 이미 예전 데이터를 활용하게 되는 문제가 발생
  4. 설사 전역으로 저장했다고 하더라도 비동기데이터에서 변경요청 했다가 다시 원래 데이터를 요청하면 똑같은 데이터임에도 불구하고 기존 리덕스 시스템에서는 해당 데이터가 같은 데이터인지 구분할 방법이 없기 때문에 똑같은 데이터를 다시 fetching하는 문제점 발생

  요즘의 전역데이터 관리 트랜드
  1. client-side-data만 context api를 활용한 경량의 커스텀훅으로 전역관리 (굳이 무거운 redux 시스템을 사용하지 않음)
  2. server-side-data는 굳이 전역에 저장하지 않고 서버데이터가 필요할 때마다 요청. 이 때, 요청하는 데이터가 이전에 한번 사용한 이력이 있는 같은 데이터이면 refetching 요청을 하는 것이 아닌 캐시에 등록되어있는 값을 재활용 (react-query, SWR)

  */
