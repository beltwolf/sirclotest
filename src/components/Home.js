import axios from "axios";
import Multiselect from 'multiselect-react-dropdown';
import { useEffect, useState } from "react";
import Listpokemon from "./Listpokemon";


export default function Home(){
    const [alldata,setAll] = useState([]);
    const [types,setTypes] = useState([]);
    const [searchCheck, setSearchCheck] = useState([]);
    useEffect(() => {
        const getData = async () => { 
            await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0").then(res => {
                Promise.all(res.data.results.map((data) => {
                    return axios.get(data.url);
                })).then(res => {
                    setAll(res);
                });
            });
            await axios.get("https://pokeapi.co/api/v2/type/").then(res => {
                setTypes(res.data.results);
            });
        };
        getData();
    },[]);
    function onSelected(selectedList, selectedItem){
        setSearchCheck([...searchCheck,selectedItem]);
    };
    function onRemove(selectedItem, removedItem){
        setSearchCheck(current => current.filter(curr => {
            return curr.name !== removedItem.name
        }));
    }
    function search(items,searchby){
        return items.filter(items => {
            return searchby.every(check => {
                return items.data.types.some(item => {
                    return check.name === item.type.name;
                });
            });
        });
    }
    return (
        <main className="album py-5">
            <div className="container pb-3">
                <Multiselect
                    className="col-xs-12 col-md-2 col-lg-2" 
                    options={types}
                    displayValue="name"
                    placeholder="Sort By"
                    style={{
                        multiselectContainer:{
                            margin:'0 0 0 auto'
                        },
                        searchBox:{
                            background: '#FFF'
                        }
                    }}
                    onSelect={onSelected}
                    onRemove={onRemove}
                    showCheckbox
                    hideSelectedList>
                </Multiselect>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">
                {
                    search(alldata,searchCheck).map((data,index) => {
                        return <Listpokemon key={index} datas={data.data}></Listpokemon>
                    })
                }
                </div>
            </div>
        </main>
    );
}