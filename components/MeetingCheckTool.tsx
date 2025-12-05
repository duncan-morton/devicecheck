'use client'

import { useState, useEffect } from 'react'
import { runConnectivityTest, TestStatus } from '@/lib/diagnostics'
import { getMediaStream } from '@/lib/diagnostics'
import { CheckCircle2, AlertTriangle, XCircle, Video, Mic, Wifi } from 'lucide-react'

export default function MeetingCheckTool() {
  const [networkStats, setNetworkStats] = useState<{ ping: number; jitter: number; status: TestStatus } | null>(null)
  const [isTesting, setIsTesting] = useState(false)
  const [cameraStatus, setCameraStatus] = useState<TestStatus | null>(null)
  const [micStatus, setMicStatus] = useState<TestStatus | null>(null)
  const [progress, setProgress] = useState(0)

  const testNetwork = async () => {
    setIsTesting(true)
    setProgress(0)
    try {
      const stats = await runConnectivityTest((p) => setProgress(p))
      setNetworkStats(stats)
    } catch (err) {
      console.error('Network test error:', err)
    } finally {
      setIsTesting(false)
      setProgress(100)
    }
  }

  const testCamera = async () => {
    setCameraStatus(null)
    try {
      const stream = await getMediaStream(true, false)
      setCameraStatus(TestStatus.SUCCESS)
      stream.getTracks().forEach(t => t.stop())
    } catch (err) {
      setCameraStatus(TestStatus.FAILURE)
    }
  }

  const testMicrophone = async () => {
    setMicStatus(null)
    try {
      const stream = await getMediaStream(false, true)
      setMicStatus(TestStatus.SUCCESS)
      stream.getTracks().forEach(t => t.stop())
    } catch (err) {
      setMicStatus(TestStatus.FAILURE)
    }
  }

  const getStatusIcon = (status: TestStatus | null) => {
    if (status === null) return null
    switch (status) {
      case TestStatus.SUCCESS:
        return <CheckCircle2 className="text-green-600" size={24} />
      case TestStatus.WARNING:
        return <AlertTriangle className="text-yellow-600" size={24} />
      case TestStatus.FAILURE:
        return <XCircle className="text-red-600" size={24} />
    }
  }

  const getStatusText = (status: TestStatus | null) => {
    if (status === null) return 'Not Tested'
    switch (status) {
      case TestStatus.SUCCESS:
        return 'Pass'
      case TestStatus.WARNING:
        return 'Warning'
      case TestStatus.FAILURE:
        return 'Fail'
    }
  }

  const getStatusColor = (status: TestStatus | null) => {
    if (status === null) return 'bg-gray-100 text-gray-700'
    switch (status) {
      case TestStatus.SUCCESS:
        return 'bg-green-100 text-green-700'
      case TestStatus.WARNING:
        return 'bg-yellow-100 text-yellow-700'
      case TestStatus.FAILURE:
        return 'bg-red-100 text-red-700'
    }
  }

  return (
    <div className="mb-12">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Network Test */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Wifi size={20} className="text-blue-600" />
              Network Connectivity
            </h3>
            {getStatusIcon(networkStats?.status || null)}
          </div>
          
          {networkStats ? (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Ping</span>
                <span className="font-semibold text-gray-900">{networkStats.ping}ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Jitter</span>
                <span className="font-semibold text-gray-900">{networkStats.jitter}ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Status</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(networkStats.status)}`}>
                  {getStatusText(networkStats.status)}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500 mb-4">Test your network connection for video calls</p>
          )}
          
          <button
            onClick={testNetwork}
            disabled={isTesting}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isTesting ? `Testing... ${Math.round(progress)}%` : 'Test Network'}
          </button>
          
          {isTesting && (
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        {/* Camera Test */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Video size={20} className="text-blue-600" />
              Camera Test
            </h3>
            {getStatusIcon(cameraStatus)}
          </div>
          
          <p className="text-sm text-gray-500 mb-4">
            {cameraStatus === TestStatus.SUCCESS
              ? 'Camera is working correctly'
              : cameraStatus === TestStatus.FAILURE
              ? 'Camera access denied or not available'
              : 'Test camera access and functionality'}
          </p>
          
          <button
            onClick={testCamera}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Test Camera
          </button>
        </div>

        {/* Microphone Test */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Mic size={20} className="text-blue-600" />
              Microphone Test
            </h3>
            {getStatusIcon(micStatus)}
          </div>
          
          <p className="text-sm text-gray-500 mb-4">
            {micStatus === TestStatus.SUCCESS
              ? 'Microphone is working correctly'
              : micStatus === TestStatus.FAILURE
              ? 'Microphone access denied or not available'
              : 'Test microphone access and functionality'}
          </p>
          
          <button
            onClick={testMicrophone}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Test Microphone
          </button>
        </div>
      </div>

      {/* Results Summary */}
      {(networkStats || cameraStatus || micStatus) && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Test Results Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Network:</span>
              <span className={getStatusColor(networkStats?.status || null)}>
                {networkStats ? getStatusText(networkStats.status) : 'Not Tested'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Camera:</span>
              <span className={getStatusColor(cameraStatus)}>
                {getStatusText(cameraStatus)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Microphone:</span>
              <span className={getStatusColor(micStatus)}>
                {getStatusText(micStatus)}
              </span>
            </div>
          </div>
          
          {networkStats && networkStats.status === TestStatus.SUCCESS && 
           cameraStatus === TestStatus.SUCCESS && 
           micStatus === TestStatus.SUCCESS && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">✓ All systems ready for video calls!</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}


