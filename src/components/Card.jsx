import "../styles/Card.css";
import { BotonProducto } from "./BotonProducto";

export const Card = ({ id, title, categoria, image, price}) => {
    return (
        <div className="column is-3 mb-6 mt-6">
            <div className="card has-background-gray">
                <div className="card-image">
                    <figure className="image">
                        <img src={ image } alt={ title } />
                    </figure>
                </div>
                <div className="card-content mt-0 mb-0">
                    <div className="media">
                        <div className="media-content">
                            <p className="subtitle is-5">{ title }</p>
                            <p className="subtitle is-6">{ categoria }</p>
                        </div>
                    </div>
                    <div className="content">
                        <p className="title is-6">MXN ${ price }</p>
                    </div>
                </div>
                <footer className="card-footer mt-0 is-flex is-justify-content-center is-align-items-center">
                    <BotonProducto
                    texto={"Agregar a Carrito"}
                    id={id}
                    >   
                    </BotonProducto>
                </footer>
            </div>
        </div>
    )
}