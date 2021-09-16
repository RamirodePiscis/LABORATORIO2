import React from 'react'

export const ContadorComponent = ({item}) => {
    let contadorInicial = 50

    if (item.state == true && item.done == true){
        contadorInicial=contadorInicial+10
    }
    if (item.state == false && item.done == false) {
        contadorInicial=contadorInicial-20
    }

    return(
            <div>
                <a className="prueba">
                {contadorInicial}
                </a>
             </div>
            );
};
