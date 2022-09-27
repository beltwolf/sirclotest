import Multiselect from 'multiselect-react-dropdown';

export default function Filter(){
    const state = {
        options: [{name: 'Option 1️⃣', id: 1},{name: 'Option 2️⃣', id: 2}]
    };
    return(
        <div className="container pb-3">
            <Multiselect ></Multiselect>
        </div>
    )
}