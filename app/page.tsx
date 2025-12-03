export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            DeviceCheck
          </h1>
          <p className="text-xl text-gray-600">
            Test Your Devices Online
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a href="/mic-test" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">🎤 Microphone Test</h2>
            <p className="text-gray-600">
              Test your microphone before calls, recordings, or streams
            </p>
          </a>

          <div className="bg-white p-8 rounded-lg shadow-md opacity-60">
            <h2 className="text-2xl font-semibold mb-4">📹 Webcam Test</h2>
            <p className="text-gray-600">Coming Soon</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md opacity-60">
            <h2 className="text-2xl font-semibold mb-4">⌨️ Keyboard Test</h2>
            <p className="text-gray-600">Coming Soon</p>
          </div>
        </div>
      </main>
    </div>
  )
}