import {useState} from 'react';


function FaqItem(){
    const [open, setOpen] = useState(false);

    console.log(open);

    function hello(){ 
        // alert('Hello')
        setOpen(!open);
    }

    return (
        <div>
            <strong>Je akademie zdarma?</strong>
            {
                open && (
                    <p>Akademie je zdarma pro všechny členy klubu Silicon Hill s platním základním a síťovím členstvím.</p> 
                )
            }

            <button onClick={hello} >
                { open ? 'Schovej odpověď' : 'Ukaž odpověď' }
            </button>
        </div>
    )
}

export default FaqItem;