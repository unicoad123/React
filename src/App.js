import Expenses from '../src/components/Expenses/Expenses';
function App() {
  const expenses=[
    {id:'e1',title:'Car Insurance',amount:294.49,date:new Date(2012,8, 28)},
    {id:'e2',title:'Book',amount:10,date:new Date(2021,9,23)},
    {id:'e3',title:'Food',amount:100,date:new Date(2012,8,14)},
    {id:'e4',title:'Petrol',amount:100,date:new Date(2023,9,12)},
    {id:'e5',title:'Movies',amount:200,date:new Date(2021,6,15)},
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
