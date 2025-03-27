import { useState } from "react";

export default function Payer({initialName, symbol, isActive, onChangeName}){
    const[playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        // changing a value based on previous value with a function
        setIsEditing(editing => !editing);

        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(e){
        //console.log(e.target.value);
        setPlayerName(e.target.value);
    }

    let editablelayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = "Edit";

    if(isEditing){
        editablelayerName = (<input type="text" required value={playerName} onChange={handleChange}/>);
        //btnCaption = "Save";
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablelayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
        </li>
    );
}