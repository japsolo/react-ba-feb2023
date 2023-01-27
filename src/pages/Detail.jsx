// import Services from '../components/Services';

const Detail = ({match}) => {
    /* componentdidmount -> fetch -> state-> muestran en el componente */
    const { id } = match.params;
    return (
        <h1>El id es {id}</h1>
    );
}
 
export default Detail;