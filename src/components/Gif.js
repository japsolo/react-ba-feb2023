import { Component } from "react";

class Gif extends Component {
    constructor() {
        super();
        this.state = {
            gif: '',
            endpoint: 'https://api.giphy.com/v1/gifs/random?api_key=H23hUGTNwKzpi2PTgh7DBTQ63Ok0eo4v'
        }
    }

    componentDidMount () {
        fetch(this.state.endpoint)
            .then(res => res.json())
            .then(gif => {
                this.setState({
                    gif: gif.data.images.original.url
                })
            })
            .catch(err => console.log(err))
    }

    cargarGif = () => {
        fetch(this.state.endpoint)
            .then(res => res.json())
            .then(gif => {
                this.setState({
                    gif: gif.data.images.original.url
                })
            })
            .catch(err => console.log(err))
    }

    render () {
        return (
            <div className="d-box">
                <h2>API GIPHY</h2>
                {
                    this.state.gif === ""
                    ?
                    <p>Cargando...</p>
                    :
                    <img src={this.state.gif} alt="" style={{height: '200px', width: '200px'}}/>
                }

                <div className="d-box">
                    <button onClick={this.cargarGif}>Cargar nuevo gif</button>
                </div>
            </div>
        )
    }

}
 
export default Gif;