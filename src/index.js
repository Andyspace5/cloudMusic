import dva from 'dva';
import './global.less';
import './index.css';
import routerConfig from './router';
import models from './models';
import {createBrowserHistory as createHistory} from 'history';
// 1. Initialize
const app = dva({
  history : createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(models);
// 4. Router
app.router(routerConfig);

// 5. Start
app.start('#root');
