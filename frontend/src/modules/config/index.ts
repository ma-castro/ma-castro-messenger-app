export interface IConfig {
  baseURL: string;
}

const config: IConfig = {
  baseURL: process.env.REACT_APP_API_PATH || 'http://localhost:5000/apis',
};

export default config;
