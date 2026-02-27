export const getMediaStream = async (video: boolean, audio: boolean): Promise<MediaStream> => {
  return navigator.mediaDevices.getUserMedia({ video, audio })
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
    const timeout = 8000; // 8 second timeout per request
    
    // Use image loading method which is more reliable and bypasses CORS
    const testImage = (url: string, timeoutMs: number): Promise<number> => {
      return new Promise((resolve) => {
        const start = performance.now();
        const img = new Image();
        const timeoutId = setTimeout(() => {
          img.onload = null;
          img.onerror = null;
          resolve(999); // Timeout
        }, timeoutMs);
        
        img.onload = () => {
          clearTimeout(timeoutId);
          const end = performance.now();
          resolve(end - start);
        };
        
        img.onerror = () => {
          clearTimeout(timeoutId);
          resolve(999); // Error
        };
        
        // Add cache busting
        img.src = `${url}?t=${Date.now()}`;
      });
    };
    
    // Try multiple endpoints for better reliability
    const endpoints = [
      'https://www.google.com/favicon.ico',
      'https://www.cloudflare.com/favicon.ico',
      'https://cdn.jsdelivr.net/favicon.ico'
    ];
    
    for (let i = 0; i < iterations; i++) {
      let pingTime = 999;
      
      // Try each endpoint until one works
      for (const endpoint of endpoints) {
        const result = await testImage(endpoint, timeout);
        if (result < 999) {
          pingTime = result;
          break;
        }
      }
      
      pings.push(pingTime);
      
      if (onProgress) {
        onProgress(((i + 1) / iterations) * 100);
      }
      
      // Small delay between pings
      if (i < iterations - 1) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }
    
    // Filter out timeout values for average calculation
    const validPings = pings.filter(p => p < 999);
    
    // If we have at least 2 valid pings, calculate stats
    // Otherwise, mark as failure
    if (validPings.length < 2) {
      return { 
        ping: 999, 
        jitter: 0, 
        status: TestStatus.FAILURE 
      };
    }
    
    const avgPing = Math.round(validPings.reduce((a, b) => a + b, 0) / validPings.length);
    
    // Calculate jitter (standard deviation)
    const variance = validPings.reduce((sum, ping) => sum + Math.pow(ping - avgPing, 2), 0) / validPings.length;
    const jitter = Math.round(Math.sqrt(variance));
    
    let status = TestStatus.SUCCESS;
    if (avgPing > 150 || jitter > 50) status = TestStatus.WARNING;
    if (avgPing > 300 || jitter > 100) status = TestStatus.FAILURE;
    
    return { ping: avgPing, jitter, status };
  };