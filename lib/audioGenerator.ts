export const playTone = (frequency = 440, duration = 0.3) => {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  };
  
  export const playLeft = () => {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const merger = ctx.createChannelMerger(2);
    const leftGain = ctx.createGain();
    const rightGain = ctx.createGain();
    
    // Configure oscillator
    osc.frequency.value = 400;
    osc.type = 'sine';
    
    // Connect oscillator to both gain nodes
    osc.connect(leftGain);
    osc.connect(rightGain);
    
    // Only enable left channel
    leftGain.gain.value = 0.3;
    rightGain.gain.value = 0;
    
    // Connect gains to merger (left to left, right to right)
    leftGain.connect(merger, 0, 0);
    rightGain.connect(merger, 0, 1);
    merger.connect(ctx.destination);
    
    const duration = 0.8;
    const startTime = ctx.currentTime;
    
    osc.start(startTime);
    osc.stop(startTime + duration);
  };
  
  export const playRight = () => {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const merger = ctx.createChannelMerger(2);
    const leftGain = ctx.createGain();
    const rightGain = ctx.createGain();
    
    // Configure oscillator
    osc.frequency.value = 600;
    osc.type = 'sine';
    
    // Connect oscillator to both gain nodes
    osc.connect(leftGain);
    osc.connect(rightGain);
    
    // Only enable right channel
    leftGain.gain.value = 0;
    rightGain.gain.value = 0.3;
    
    // Connect gains to merger (left to left, right to right)
    leftGain.connect(merger, 0, 0);
    rightGain.connect(merger, 0, 1);
    merger.connect(ctx.destination);
    
    const duration = 0.8;
    const startTime = ctx.currentTime;
    
    osc.start(startTime);
    osc.stop(startTime + duration);
  };
  
  export const playStereoSweep = () => {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const panner = ctx.createStereoPanner();
    const gain = ctx.createGain();
    
    // Set up connections
    osc.connect(gain);
    gain.connect(panner);
    panner.connect(ctx.destination);
    
    // Configure audio
    osc.frequency.value = 440;
    osc.type = 'sine';
    
    const duration = 2;
    const startTime = ctx.currentTime;
    
    // Sweep from left to right over duration
    panner.pan.setValueAtTime(-1, startTime);
    panner.pan.linearRampToValueAtTime(1, startTime + duration);
    
    // Fade in/out for smoother sound
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.3, startTime + 0.05);
    gain.gain.linearRampToValueAtTime(0.3, startTime + duration - 0.05);
    gain.gain.linearRampToValueAtTime(0, startTime + duration);
    
    osc.start(startTime);
    osc.stop(startTime + duration);
  };
  
  export const playFunSound = () => {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sawtooth';
    
    const notes = [523, 659, 784, 1047];
    let time = ctx.currentTime;
    
    notes.forEach((freq, i) => {
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(0.2, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
      time += 0.2;
    });
    
    osc.start();
    osc.stop(time);
  };