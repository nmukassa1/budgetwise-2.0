import './styles/css/styles.css'
import {Outlet} from 'react-router-dom'
import Sidebar from './components/common/Sidebar'
import { Grid } from '@mui/material'

function App() {

  return (
    <Outlet />
  )
}

export default App
