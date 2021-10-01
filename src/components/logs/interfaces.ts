interface Log {
  id: number;
  type: string;
  endpoint: string;
  method: string;
  date: string;
  user: number;
  message: string;
}

export default Log;
