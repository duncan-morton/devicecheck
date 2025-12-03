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
    const panner = ctx.createStereoPanner();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(panner);
    panner.connect(ctx.destination);
    
    panner.pan.value = -1; // Full left
    gain.gain.value = 0.3;
    osc.frequency.value = 300; // Lower frequency for left
    
    osc.start();
    osc.stop(ctx.currentTime + 0.8);
  };
  
  export const playRight = () => {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const panner = ctx.createStereoPanner();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(panner);
    panner.connect(ctx.destination);
    
    panner.pan.value = 1; // Full right
    gain.gain.value = 0.3;
    osc.frequency.value = 600; // Higher frequency for right
    
    osc.start();
    osc.stop(ctx.currentTime + 0.8);
  };
  
  export const playStereoSweep = () => {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const panner = ctx.createStereoPanner();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(panner);
    panner.connect(ctx.destination);
    
    gain.gain.value = 0.3;
    osc.frequency.value = 440;
    
    // Sweep from left to right over 2 seconds
    panner.pan.setValueAtTime(-1, ctx.currentTime);
    panner.pan.linearRampToValueAtTime(1, ctx.currentTime + 2);
    
    osc.start();
    osc.stop(ctx.currentTime + 2);
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