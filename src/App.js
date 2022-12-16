import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './scenes/layout'
import Dashboard from './scenes/dashboard'
import Products from './scenes/products'
import Customers from './scenes/customers';
import Transactions from './scenes/transactions';
import Geography from './scenes/geography';
import OverView from './scenes/overview';
import Daily from './scenes/daily'
import Monthly from './scenes/monthly';
import Breakdown from './scenes/breakdown';
import Admin from './scenes/admin';
import Performance from './scenes/performance';
import Login from './scenes/login'
import PrivateRoute from './routes';
import NoMatch from './scenes/NoMatch';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route element={<Layout/>}>
              <Route path='/' element={<Navigate to='/dashboard' replace/>} />
              <Route path='/dashboard' element={<PrivateRoute redirectPath='/dasboard'><Dashboard/></PrivateRoute>}/>
              <Route path='/products' element={<PrivateRoute redirectPath='/products'><Products/></PrivateRoute>}/>
              <Route path='/customers' element={<PrivateRoute redirectPath='/customers'><Customers/></PrivateRoute>}/>
              <Route path='/transactions' element={<PrivateRoute redirectPath='/transactions'><Transactions/></PrivateRoute>}/>
              <Route path='/geography' element={<PrivateRoute redirectPath='/geography'><Geography/></PrivateRoute>}/>
              <Route path='/overview' element={<PrivateRoute redirectPath='/overview'><OverView/></PrivateRoute>}/>
              <Route path='/daily' element={<PrivateRoute redirectPath='/daily'><Daily/></PrivateRoute>}/>
              <Route path='/monthly' element={<PrivateRoute redirectPath='/monthly'><Monthly/></PrivateRoute>}/>
              <Route path='/breakdown' element={<PrivateRoute redirectPath='/breakdown'><Breakdown/></PrivateRoute>}/>
              <Route path='/admin' element={<PrivateRoute redirectPath='/admin'><Admin /></PrivateRoute>}/>
              <Route path='/performance' element={<PrivateRoute redirectPath='/performance'><Performance/></PrivateRoute>}/>
            </Route>
            <Route path='*' element={<NoMatch/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;