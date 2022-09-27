import { useLocation } from 'react-router-dom';
import Stats from './Stats';
import Typepokemon from './Typepokemon';

export default function Detailpokemon(){
    const getdatas = useLocation();
    const listImage = [process.env.PUBLIC_URL+"/assets/icons8-heart-pokemon-100.png",process.env.PUBLIC_URL+"/assets/icons8-armored-boot-96.png",process.env.PUBLIC_URL+"/assets/icons8-pokemon-fist-96.png",process.env.PUBLIC_URL+"/assets/icons8-shield-96.png",process.env.PUBLIC_URL+"/assets/icons8-hyper-potion-96.png",process.env.PUBLIC_URL+"/assets/icons8-super-potion-96.png"];
    console.log(getdatas)
    return(
        <div className="container-fluid">
            <div className="row detail-wrapper">
                <div className="col-sm-12 col-md-12 col-lg-4 align-self-center p-5">
                    <div className="detail-img">
                        <img src={getdatas.state.datas.sprites.other.home.front_default} alt={getdatas.state.datas.name} />
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8 align-self-center detail-wrapper">
                    <div className="detail-text">
                        <h1>{getdatas.state.datas.name}</h1>
                        <div className="row justify-content-center">
                            {getdatas.state.datas.types.map((data,index) => {
                                return <Typepokemon key={index} datas={data.type}></Typepokemon>
                            })}
                        </div>
                        <div className="row">
                            {
                                getdatas.state.datas.stats.map((data,index) => {
                                    return <Stats key={index} stats={data} id={index} image={listImage[index]}></Stats>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}