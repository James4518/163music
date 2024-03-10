import { BASE_URL, TIME_OUT } from "./request/config";
import HYRequest from "./request";

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    requestInterceptor: (config) => {
      return config;
    }
  }
});

export default hyRequest;
