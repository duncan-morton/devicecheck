import MicrophoneTest from './MicrophoneTest'

export default function MicTest() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <a href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to DeviceCheck
        </a>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Microphone Test
          </h1>
          <p className="text-xl text-gray-600">
            Test if your microphone is working properly
          </p>
        </div>

        <MicrophoneTest />

        <div className="max-w-4xl mx-auto prose prose-lg mt-16">
          <h2>How to Test Your Microphone</h2>
          <p>
            Testing your microphone is essential before important calls, recordings, or live streams. 
            Our free microphone test tool lets you check if your microphone is working, see real-time 
            volume levels, and record a sample to hear how you sound.
          </p>

          <h2>Frequently Asked Questions</h2>
          
          <h3>How do I test my microphone?</h3>
          <p>
            Click the Start Test button above and allow microphone access when prompted by your browser. 
            You will see a real-time volume meter showing your microphone input.
          </p>

          <h3>Is this microphone test safe and private?</h3>
          <p>
            Yes absolutely. All audio processing happens locally in your browser. We do not record 
            store or transmit any of your audio data to our servers.
          </p>
        </div>
      </div>
    </div>
  )
}