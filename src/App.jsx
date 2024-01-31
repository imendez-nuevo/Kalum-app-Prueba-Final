import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppRoutes } from './AppRoutes';
export const App = () => {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    )
}
