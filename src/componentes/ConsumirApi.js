import 'bootstrap/dist/css/bootstrap.css';
import clientHttp from "../services/ClientHttp";


const { useEffect, useState } = require("react");

const ConsumirApi = () => {
    const [lista, setLista] = useState([]);
    const [tarea, setTarea] = useState([]);
    const [descripcion, setDescripcion] = useState("");
    //const navegacion = useNavigate();

    useEffect(() => {
        clientHttp.get(`/?author_id=1009`)
            .then((response) => {
                setLista(response.data)
            });
            console.log(lista.id)
    }, []);

    const handlerCrear = () => {
        // navegacion(`/*`)
        // clientHttp.post(`/`, tarea)
        //     .then(() => {
        //         navegacion(`/`)
        //     });
    }

    const handlerEliminar = (item) => {
        // navegacion(`/*`)
        // clientHttp.delete(`/${item.id}`)
        //     .then(() => {
        //         navegacion(`/`)
        //     });
        // console.log(item)
        // console.log(item.id)
        // setLista((prevState)=>
        //     prevState.filter(index=>index!=item.id));
        lista.filter(elemento => elemento.id >=16);
        lista.map ((pos) => console.log(pos.id));
    }
    const handleChange = (event) => {
        // const target = event.target;
        // const value = target.type === "checkbox" ? target.checked : target.value;
        // const name = target.id;
        // setDescripcion((tareaCurrent) => ({ ...tareaCurrent, [name]: value }));
        // console.log(descripcion)

        // const fecha = new Date().toISOString();
        // setTarea({ description: descripcion.description, status: 0, id_author: 18, created_at: fecha, finish_at: fecha });
        // console.log(tarea);

    };
    
    return (
        <>
            {/* <table className="table">
            <thead>
                <tr>
                    <th ><input type="text" id="description" required maxLength="60"
                        onChange={e => handleChange(e)} /></th>
                    <th ><button style={{ backgroundColor: "aqua", borderRadius: "4px", border: "none" }}
                        onClick={() => handlerCrear()}>Agregar</button></th>
                </tr>
            </thead>
            <tbody>
                {lista.map((item) =>
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td><button style={{ backgroundColor: "#E46C38", borderRadius: "4px", border: "none" }}
                            onClick={(e) => handlerEliminar(item)}>Eliminar</button></td>
                    </tr>)}
            </tbody>
        </table> */}

            <div className="container text-center">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-4">
                        <input type="text" id="description" required maxLength="60"
                            onChange={e => handleChange(e)} />
                    </div>
                    <div className="col col-lg-2">
                        <button style={{ backgroundColor: "aqua", borderRadius: "4px", border: "none" }}
                            onClick={() => handlerCrear()}>Agregar</button>
                    </div>
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
                                <button style={{ backgroundColor: "#E46C38", borderRadius: "4px", border: "none" }}
                                onClick={(e) => handlerEliminar(item)}>Eliminar</button>
                            </div>
                            
                        </div>)}
            </div>

        </>

    );
}

export default ConsumirApi;