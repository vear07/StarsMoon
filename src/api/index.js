// 导入封装好的网络请求类工具
import Network from './network';

// 封装各种接口请求
// export const 接口名 = () => Network.get('/路由',参数对象);
export const getHotRecruit = () => Network.get('/GetHotRecruit', {});

// 注册
export const signUp = (data) => Network.post('/signUp', data);