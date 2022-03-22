import React from 'react';

function MovieLikeListItem(props) {
    return (
        <tr>
            <td><img src='${props.movie.moviePost}' /></td>
            <td>{props.movie.movieTitle}</td>
            <td>{props.movie.movieRuntime} 분</td>
        </tr>
    );
}

export default MovieLikeListItem;