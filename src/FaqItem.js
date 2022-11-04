//src/FaqItem.js

import {useState} from 'react';

function FaqItem(props) {
    console.log("Hello world do konzoly");

    console.log("Props:", props);

    const [open, setOpen] = useState(false);

    console.log("Open:", open);

    return (
        <div>
            <strong>{ props.question }</strong>
            {
                open && (
                    <p>{ props.answer }</p>
                )
            }
            <button
                onClick={
                    () => { setOpen( !open ) }
                }
            >
                { open ? 'Schovej odpověď' : 'Ukaž odpověď' }
            </button>
        </div>
    )
}

export default FaqItem;