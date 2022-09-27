export default function Stats(props){  
    return (
        <div className="col-6 col-md-4 col-lg-4 p-3">
            <div className="row stat-wrapper">
                <img src={props.image} alt={props.id} className="col-4 align-self-center"/>
                <div className="col-8 align-self-center text">
                    <h3>{props.stats.base_stat}</h3>
                </div>
            </div>
        </div>
    )
}