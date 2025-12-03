export const getMediaStream = async (video: boolean, audio: boolean): Promise<MediaStream> => {
    try {
      return await navigator.mediaDevices.getUserMedia({ video, audio });
    } catch (err) {
      throw new Error(`Failed to access ${video ? 'camera' : 'microphone'}`);
    }
  };
  
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
  
  export const runConnectivityTest = async (
    onProgress?: (progress: number) => void
  ): Promise<NetworkStats> => {
    const pings: number[] = [];
    const iterations = 5;
    
    for (let i = 0; i < iterations; i++) {
      const start = performance.now();
      
      try {
        // Ping a lightweight endpoint
        await fetch('https://www.cloudflare.com/cdn-cgi/trace', { 
          method: 'HEAD',
          cache: 'no-cache' 
        });
        
        const end = performance.now();
        pings.push(end - start);
      } catch (err) {
        pings.push(999); // Timeout value
      }
      
      if (onProgress) {
        onProgress(((i + 1) / iterations) * 100);
      }
      
      // Small delay between pings
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    const avgPing = Math.round(pings.reduce((a, b) => a + b, 0) / pings.length);
    
    // Calculate jitter (standard deviation)
    const variance = pings.reduce((sum, ping) => sum + Math.pow(ping - avgPing, 2), 0) / pings.length;
    const jitter = Math.round(Math.sqrt(variance));
    
    let status = TestStatus.SUCCESS;
    if (avgPing > 150 || jitter > 50) status = TestStatus.WARNING;
    if (avgPing > 300 || jitter > 100) status = TestStatus.FAILURE;
    
    return { ping: avgPing, jitter, status };
  };