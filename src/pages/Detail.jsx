import React, { Component } from "react";

class Detail extends Component {
    constructor({ match }) {
        super();
        this.state = {
            id: match.params.id,
            movieData: {},
        };
    }

    componentDidMount() {
        const API_BASE_URL = "https://api.themoviedb.org/3/movie/";
        const API_MOVIE_ID = this.state.id;
        const API_KEY = "?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES";

        const API_URL = `${API_BASE_URL}${API_MOVIE_ID}${API_KEY}`;

        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ movieData: data });
            });
    }

    render() {
        const { id, title, poster_path } = this.state.movieData;
        if (id) {
            console.log("Tengo el ID");
        }
        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-6 offset-3">
                        <h1>{title}</h1>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="movie" />
                    </div>
                </div>
            </>
        );
    }
}

export default Detail;
