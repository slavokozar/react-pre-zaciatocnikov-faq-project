import {useState} from 'react';


function FaqItem(props) {
    const [open, setOpen] = useState(false);

    console.log(props);

    function hello() {
        setOpen(!open);
    }

    return (
        <div>
            <strong>{props.question}</strong>
            {
                open && (
                    <p>{props.answer}</p>
                )
            }


            <button onClick={hello}>
                {open ? 'Schovej odpověď' : 'Ukaž odpověď'}
            </button>
        </div>
    )
}

export default FaqItem;