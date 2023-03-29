import { useState , useEffect } from "react";

const MiApi = () => {

    const [usuarios , setUsuarios] = useState([]);
    const [busqueda , setBusqueda] = useState("");

    useEffect(() => {

        document.title= "Prueba React I"
        getApi();
    }, []);

    const getApi = async() => {

        const url = "https://jsonplaceholder.typicode.com/users";

        const response = await fetch(url);

        const users = await response.json();

        const personas = users.map((persona) => {

            return {

                id: persona.id,
                name: persona.name,
                username: persona.username,
                email: persona.email
            };
        });

        setUsuarios(personas.reverse());
    };

    return (

        <div className="bg-secondary p-5">
            <div>
                <label className="p-2" htmlFor="busqueda">Búsqueda por username</label>
                <input 
                    id="busqueda"
                    type="text"
                    placeholder="Ingrese nombre de usuario"
                    className="form-control"
                    onChange={(e) => {
                        setBusqueda(e.target.value)
                    }}
                    value={busqueda}
                />
            </div>
            <div className="m-5">
                <table className="table table-hover text-white">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Username</th>
                            <th scope="col">e-mail</th>
                        </tr>
                    </thead>
                        {
                            usuarios
                                .filter((item) => {

                                    if(item.username.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())){

                                        return true;
                                    }

                                    return false;
                                })
                            
                                .map((item) => {

                                return (                                    
                                        <tbody>
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                        }
                </table>
            </div>
            
        </div>
    );
};

export default MiApi;