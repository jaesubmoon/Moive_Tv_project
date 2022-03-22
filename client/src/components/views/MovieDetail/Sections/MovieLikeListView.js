import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieLikeListItem from './MovieLikeListItem';

function MovieLikeListView(props) {

    //state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const userId = localStorage.getItem('userId');
    const userId = "kim";

    //서버에 요청해서 데이터를 받아오기
    const loadData = async () => {
        setLoading(true);
        // userid 달고
        const response = await axios.get(`http://localhost:8080/movie/likeListView/${userId}`);
        console.log(response.data);
        setData(response.data.likeList);
        setLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
            <h3>찜 목록</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>사진</th>
                        <th>제목</th>
                        <th>러닝타임</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(function (movie, index) {
                            return <MovieLikeListItem movie={movie} key={index} />
                        })
                    }
                </tbody>
            </table>

        </div>
    );
}

export default MovieLikeListView;