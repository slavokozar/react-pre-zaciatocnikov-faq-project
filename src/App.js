//src/App.js

import logo from './logo.svg';
import './App.css';

import FaqItem from "./FaqItem";


function App() {

    function hello(){
        console.log('Hello World od tlacitka');
    }

    return (
        <div className="App">
            <header className="App-header">
                <FaqItem
                    question="Je akademie zdarma?"
                    answer="Akademie je zdarma pro všechny členy klubu Silicon Hill s platním základním a síťovím členstvím."
                />
                <FaqItem
                    question="Co si vzít sebou?"
                    answer="Vlastní notebook."
                />

                {/*<button onClick={hello} >Hello</button>*/}

                {/*<button onClick={*/}
                {/*    () => { console.log('Hello World od tlacitka 2'); }*/}
                {/*}>*/}
                {/*    Hello 2*/}
                {/*</button>*/}
            </header>
        </div>
    );
}

export default App;
