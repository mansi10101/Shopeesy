import './App.css';
import Layout from './Components/Layout';
import { AnimatePresence } from 'framer-motion';
function App() {
  return (
    <AnimatePresence>
      <Layout />
    </AnimatePresence>
  );
}

export default App;
