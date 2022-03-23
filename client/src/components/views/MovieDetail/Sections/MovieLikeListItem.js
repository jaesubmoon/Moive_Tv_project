import Axios from 'axios';
import React from 'react';
import { IMAGE_BASE_URL } from '../../../ConfigMovie';

function MovieLikeListItem(props) {

    const onDeleteItem = () => {
        if (window.confirm("해당 좋아요 목록을 삭제하시겠습니까?")) {
            Axios.get('http://localhost:8080/movie/delete/' + props.movie.movieId)
                .then(
                    () => {
                        window.location.reload();
                    }
                ).catch(err => console.log(err));
        }
    }


    return (
        <div style={{ marginBottom: '10px', marginTop: '10px', border: '1px solid' }}>
            <span style={{ display: 'inline-block', width: '20%', marginRight: '10px', float: 'left' }}><img style={{ width: '100%' }} src={`${IMAGE_BASE_URL}w200${props.movie.moviePost}`} /></span>
            <span style={{
                display: 'inline-block', width: '45%', textAlign: 'center',
                float: 'left', borderRight: '1px solid', height: '308px', lineHeight: '308px'
            }}>{props.movie.movieTitle}</span>
            <span style={{
                display: 'inline-block',
                width: '24%', textAlign: 'center', float: 'left',
                lineHeight: '308px', borderRight: '1px solid'
            }}>{props.movie.movieRuntime} 분</span>

            <span style={{ display: 'inline-block', width: '8%', textAlign: 'center', float: 'left', marginTop: '140px' }}>
                <button onClick={onDeleteItem}>삭제</button>
            </span>

        </div>
    );
}

export default MovieLikeListItem;