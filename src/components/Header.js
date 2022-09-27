import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to={"/"}>
                        <img src={process.env.PUBLIC_URL+"/assets/icons8-pokeball-96.png"} width="30" height="30" alt="" className="d-inline-block align-top" />
                        <strong>Pokedex</strong>
                    </Link>
                </div>
            </div>
        </header>
    )
}