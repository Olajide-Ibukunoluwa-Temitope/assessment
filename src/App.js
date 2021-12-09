import './App.css';
import CostBreakdown from './components/view/CostBreakdown/CostBreakdown';
import Navbar from './components/view/Navbar/Navbar';
import PaymentMethod from './components/view/PaymentMethod/PaymentMethod';

const App = () => {
  return (
    <div className="App">

      {/* navbar */}
      <Navbar />

      <hr/>

      {/* payment method info */}
      <PaymentMethod />

      <hr/>

      {/* cost breakdown */}
      <CostBreakdown />

    </div>


  );
}

export default App;
