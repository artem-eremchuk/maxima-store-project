import App from "../../App";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from 'react-query';  

const queryClient = new QueryClient();

const AppWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
     <Provider store={store}> 
        <App /> 
      </Provider>
    </QueryClientProvider> 
  )
}

export default AppWrapper;