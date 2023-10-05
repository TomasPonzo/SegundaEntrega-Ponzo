import { Link } from "react-router-dom";
import productos from "../data";

function Productos() {

    return (

        <div>
            <h2>Productos</h2>
            <div>
                {productos.map((producto) => {
                    return (
                        <article key={producto.id}>
                            <h5>{producto.title}</h5>
                            <img src={producto.image} />
                            <Link to={`/productos/${producto.id}`}>Mas info</Link>
                        </article>
                    )
                }
                )}

            </div>



        </div>

    )

}

export default Productos;