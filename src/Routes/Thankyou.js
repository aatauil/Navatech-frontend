import React from 'react'
import { Link } from 'react-router-dom';

function Thankyou() {
    return (
        <div>
            <h1>Thank you for your submission. A Navatech representive will contact you soon. </h1>
            <Link to ="/">
                <button>Homepage</button>
            </Link>
        </div>
    )
}

export default Thankyou
