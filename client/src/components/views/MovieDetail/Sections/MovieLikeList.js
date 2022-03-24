import React from 'react';
import Axios from 'axios'
import { useHistory } from 'react-router-dom';
import '../../styles/bootstrap.css'
import '../MovieDetail.css';

function MovieLikeList(props) {

    let history = useHistory();

    const movieId = props.movieId;
    const userId = "kim";
    // const userId = props.userId;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.poster_path;
    const movieRuntime = props.movieInfo.runtime;

    const onSubmit = () => {
        var frmData = new FormData(document.frmInsert);
        alert("찜 완료")
        console.log(movieTitle)
        Axios.post('http://localhost:8080/movie/insertLikeList/', frmData)
            .then(
                response => {
                    alert("찜 완료");
                }
            )

    }


    return (
        <div>
            <form name="frmInsert" onSubmit={onSubmit}>
                <input type='hidden' name='movieId' value={movieId} />
                {/* <input type='hidden' name='tvId' value={tvId} /> */}
                <input type='hidden' name='userId' value={userId} />
                <input type='hidden' name='movieTitle' value={movieTitle} />
                <input type='hidden' name='moviePost' value={moviePost} />
                <input type='hidden' name='movieRuntime' value={movieRuntime} />
                {/* <input type='hidden' name='tvTitle' value={tvTitle} />
                <input type='hidden' name='tvPost' value={tvPost} />
                <input type='hidden' name='tvRuntime' value={tvRuntime} /> */}
                <input class="btn btn-danger" type='submit' value="♥" />
            </form>

        </div>
    );
}

export default MovieLikeList;