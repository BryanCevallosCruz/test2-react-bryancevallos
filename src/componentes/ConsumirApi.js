import 'bootstrap/dist/css/bootstrap.css';
import clientHttp from "../services/ClientHttp";
import { useNavigate, Link} from "react-router-dom";

const { useEffect, useState } = require("react");

const ConsumirApi = () => {
    const [lista, setLista] = useState([]);
    const [descripcion, setDescripcion] = useState("");
    const [loading, setLoading] = useState(false);
    const navegacion = useNavigate();
    const autor = 1009;

    useEffect(() => {
        clientHttp.get(`/?author_id=${autor}`)
            .then((response) => {
                setLista(response.data)
            });
        setLoading(lista.length==0 ? false:true);
        console.log(lista.length)
        console.log(loading) 
    }, []);

    const handlerCrear = () => {
        navegacion(`/*`)
        clientHttp.post(`/`, {"url":descripcion.url, "author_id": autor})
             .then(() => {
                navegacion(`/`)
             });
        setLoading(lista.length==0 ? false:true); 
    }

    const handlerEliminar = (item) => {
        navegacion(`/*`)
        clientHttp.delete(`/`, {data:{"id": item.id, "url": item.url, "author_id": autor}})
            .then(() => {
                navegacion(`/`)
            });
        setLoading(lista.length==0 ? false:true); 
    }
    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.id;
        setDescripcion((tareaCurrent) => ({ ...tareaCurrent, [name]: value }));
    };

    
    return (loading ? <h1 className="container text-center">No posee gifs</h1>:
          <><div className="container text-center border-bottom border-4">
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
                                <p/>
                                <button type="button" className="btn btn-primary" aling="left"
                                onClick={(e) => handlerEliminar(item)}>Eliminar</button>
                                <p/>
                            </div>                  
                        </div>)}
            </div>

        </>

    );
}

export default ConsumirApi;