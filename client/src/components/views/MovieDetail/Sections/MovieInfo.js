import { Descriptions } from 'antd';
import React from 'react';

function MovieInfo(props) {

    let { movie } = props;

    return (
        <Descriptions title="영화 정보" bordered>
            <Descriptions.Item label="제목">{movie.original_title}</Descriptions.Item>
            <Descriptions.Item label="개봉일">{movie.release_date}</Descriptions.Item>
            <Descriptions.Item label="수익">{movie.revenue}</Descriptions.Item>
            <Descriptions.Item label="러닝타임">{movie.runtime}</Descriptions.Item>
            <Descriptions.Item label="평점" span={2}>{movie.vote_average}</Descriptions.Item>
            <Descriptions.Item label="득표수">{movie.vote_count}</Descriptions.Item>
            <Descriptions.Item label="현재 개봉 상태">{movie.status}</Descriptions.Item>
            <Descriptions.Item label="인기도">{movie.popularity}</Descriptions.Item>
        </Descriptions>
    );
}

export default MovieInfo;