import React from 'react'
import { useSearchParams } from 'react-router-dom'; // 쿼리스트링 훅 이용 => 검색어 페이지로 이동

// 검색 결과 페이지 

const Search = () => {

    const [searchParams] = useSearchParams(); // 배열 구조 분해로 가져오기
    const keyword = searchParams.get('q'); // 예: ?q=React

    console.log('검색어:', keyword); // 체크용
    return(
        <div>{keyword} 검색 결과입니다.</div>
    )
}

export default Search;