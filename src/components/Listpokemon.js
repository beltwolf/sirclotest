import { Link} from 'react-router-dom';
import Typepokemon from './Typepokemon';

export default function Listpokemon(props){
    return (
        <div className="col">
            {
                <Link to={'/pokemon/'+props.datas.id} state={{datas:props.datas}}>
                    <div className="card">
                        <img className="card-img-top" src={props.datas.sprites.other.home.front_default} alt={props.datas.name} />
                        <div className="card-body">
                            <h1 className="card-title">{props.datas.name}</h1>
                            <div className="row justify-content-center">
                                {props.datas.types.map((data,index) => {
                                    return <Typepokemon key={index} datas={data.type}></Typepokemon>
                                })}
                            </div>
                        </div>
                    </div>
                </Link>
            }
        </div>
    );
}