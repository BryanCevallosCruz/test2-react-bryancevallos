import 'bootstrap/dist/css/bootstrap.css';
import clientHttp from "../services/ClientHttp";
import { useNavigate, Link} from "react-router-dom";

const { useEffect, useState } = require("react");

const ConsumirApi = () => {
    const [lista, setLista] = useState([]);
    const [descripcion, setDescripcion] = useState("");
    const navegacion = useNavigate();
    const autor = 1009;

    useEffect(() => {
        clientHttp.get(`/?author_id=${autor}`)
            .then((response) => {
                setLista(response.data)
            });
            console.log(lista.id)
    }, []);

    const handlerCrear = () => {
        navegacion(`/*`)
        clientHttp.post(`/`, {"url":descripcion.url, "author_id": autor})
             .then(() => {
                navegacion(`/`)
             });
    }

    const handlerEliminar = (item) => {
        navegacion(`/*`)
        clientHttp.delete(`/`, {data:{"id": item.id, "url": item.url, "author_id": autor}})
            .then(() => {
                navegacion(`/`)
            });
        console.log(item)
    }
    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.id;
        setDescripcion((tareaCurrent) => ({ ...tareaCurrent, [name]: value }));
    };
    
    return (
        <>
            <div className="container text-center">
                <div className="row justify-content-md-center">
                    <form className="row justify-content-md-center" onSubmit={(e) => handlerCrear(e)}>
                    <div className="col col-lg-5">
                        <input type="text" className="form-control" id="url" required maxLength="500" placeholder="Gif URL"
                            onChange={e => handleChange(e)} />
                    </div>
                    <div className="col col-lg-1">
                        <button type="submit" style={{ backgroundColor: "white", borderRadius: "4px" }}
                            >Agregar</button>
                    </div>
                    </form>
                </div>
                    {lista.map((item) =>
                        <div className="row justify-content-md-center" 
                                style={{padding:"0.5em", 
                                        border:"solid",     
                                        borderColor:"white", 
                                        borderRadius: "12px"}} 
                                key={item.id}> 
        
                            <div className="col col-lg-4"> 
                                <img className = "img-fluid mx-auto d-block" src={item.url} />
                                <button type="button" className="btn btn-primary"
                                onClick={(e) => handlerEliminar(item)}>Eliminar</button>
                            </div>
                            
                        </div>)}
            </div>

        </>

    );
}

export default ConsumirApi;