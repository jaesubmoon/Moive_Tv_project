import Axios from 'axios';
import React from 'react';
import { IMAGE_BASE_URL } from '../../../ConfigMovie';
import '../../styles/bootstrap.css'

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

        <div style={{ marginBottom: '10px', marginTop: '10px', border: '1px solid', borderRadius: '4px' }}>
            <span style={{ display: 'inline-block', width: '20%', marginRight: '10px', float: 'left' }}><img style={{ width: '100%', borderRadius: '8px', padding: '3px' }} src={`${IMAGE_BASE_URL}w200${props.movie.moviePost}`} /></span>
            <span style={{
                display: 'inline-block', width: '45%', textAlign: 'center',
                float: 'left', borderRight: '1px solid', height: '308px', lineHeight: '308px'
            }}>{props.movie.movieTitle}</span>
            <span style={{
                display: 'inline-block', background: '#f5f5f3',
                width: '24%', textAlign: 'center', float: 'left',
                lineHeight: '308px', borderRight: '1px solid'
            }}>{props.movie.movieRuntime} 분</span>

            <span style={{ display: 'inline-block', width: '8%', textAlign: 'center', float: 'left', marginTop: '140px', marginLeft: '6px' }}>
                <button class="btn-close" aria-label="Close" onClick={onDeleteItem}></button>
            </span>
        </div>
    );
}

export default MovieLikeListItem;