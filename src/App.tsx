import { ToastContainer } from 'react-toastify';
import { CardProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import Router from './routes/routes';
import { GlobalStyles } from './styles/global';
import "react-toastify/dist/ReactToastify.css";


const App = () => (
  <>
    <UserProvider>
      <CardProvider>
        <Router />
      </CardProvider>
    </UserProvider>
    <GlobalStyles />
    <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
  </>
);

export default App;
