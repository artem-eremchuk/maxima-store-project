import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout/> }>
            {routes
              .map(({ path, element, ...rest }, key) =>
                <Route 
                  key={key} 
                  path={path} 
                  element={element}
                  {...rest} 
                />
              )
            }
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
