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
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem', flexDirection: 'column', padding: '20%', paddingTop: '0' }}>
            <h3 style={{ border: '1px solid', borderRadius: '6px', textAlign: 'center' }}>찜 목록</h3>
            <div>
                <span style={{ display: 'inline-block', width: '20%', textAlign: 'center', border: '1px solid', marginRight: '1%' }}>포스터</span>
                <span style={{ display: 'inline-block', width: '45%', textAlign: 'center', border: '1px solid', marginRight: '1%' }}>제목</span>
                <span style={{ display: 'inline-block', width: '22%', textAlign: 'center', border: '1px solid', marginRight: '1%' }}>러닝타임</span>
                <span style={{ display: 'inline-block', width: '10%', textAlign: 'center', border: '1px solid' }}>삭제</span>
            </div>
            {
                data.map(function (movie, index) {
                    return <MovieLikeListItem movie={movie} key={index} />
                })
            }


        </div>
    );
}

export default MovieLikeListView;