export interface ConfigType {
  baseURL: string;
}

const config: ConfigType = {
  baseURL: process.env.REACT_APP_API_PATH || 'http://localhost:5000/apis',
};

export default config;
