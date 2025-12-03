export enum TestStatus {
    SUCCESS = 'success',
    WARNING = 'warning',
    FAILURE = 'failure'
  }
  
  export interface NetworkStats {
    ping: number;
    jitter: number;
    status: TestStatus;
  }