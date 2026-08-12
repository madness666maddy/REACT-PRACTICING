import React from "react";
import {useState} from "react";

function App(){
    const[isOpen,setIsOpen]=useState(false);

    const toggleMenu=() =>{
        setIsOpen(prev => !prev);
    };

    return(

        <div>
            <button onClick={toggleMenu}>
                Menu
            </button>


            {isOpen &&(
                <div>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Skill</p>
                </div>
            )}


        </div>
    );
}

export default App;