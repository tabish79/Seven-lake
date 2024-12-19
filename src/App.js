import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import { Container, Grid ,Typography, colors} from '@mui/material';
import Form from './components/form/form';
import BlockOne from './components/blockone/blockone';
import BlockTwo from './components/blocktwo/blocktwo';
import BlockThree from './components/blockthree/blockthree';
import BlockFour from './components/blockfour/blockfour';
import Blocks from './components/Blocksqr/blocks';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Navbar />
      <BlockOne />
      <BlockTwo />
      <BlockThree />
      <BlockFour />
      <Blocks />
      <Footer />

    </div>
  );
}

export default App;
