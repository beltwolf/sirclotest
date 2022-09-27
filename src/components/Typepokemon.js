export default function Typepokemon(props){
    return (
        <div className={`col-6 ${props.datas.name} type`}>
            <h3>{props.datas.name}</h3>
        </div>
    )
}