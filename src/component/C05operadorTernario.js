import React, {Fragment} from 'react'

const C05operadorTernario = () => {
        const edad = 18;
    return (
        <Fragment>
            <h1>Operador ternario</h1>
            {edad >= 18? 'Mayor de edad': 'Menos de edad'}
        </Fragment>
    )
}

export default C05operadorTernario
