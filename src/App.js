import React from 'react';
import './App.css';
import TreeComponent from './components/TreeStructure/TreeComponent';
import DataService from './services/DataService';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    DataService.getData().then((data) => {
      setData(data);
    });
  });

  return !data || data.length === 0 ? (
    <div> Loading ... </div>
  ) : (
    <div>
      <TreeComponent data={data} />
    </div>
  );
}

export default App;
