import FaqItem from './FaqItem';

function App() {
  const a = 5;
  console.log(a);
  console.log('Hello world');

  return (
    <div className="App">
      <FaqItem
          question="Je akademie zdarma?"
          answer="Akademie je zdarma pro všechny členy klubu Silicon Hill s platním základním a síťovím členstvím."
      />
      <FaqItem
          question="Co si vzít sebou?"
          answer="Vlastní notebook."
      />
      <FaqItem
          question="Co musím mít nainstalováno v notebooku?"
          answer="Node.JS, Editor zdrojového kódu, např. Visual Studio Code."
      />
    </div>
  );
}

export default App;
