interface QuickAnswerBoxProps {
  problem: string
  platform: string
  deviceType: 'mic' | 'webcam' | 'keyboard' | 'screen'
}

export default function QuickAnswerBox({ problem, platform, deviceType }: QuickAnswerBoxProps) {
  const deviceName = deviceType === 'mic' ? 'microphone' : deviceType === 'webcam' ? 'camera' : deviceType

  // Generate quick answers based on device type and platform
  const generateAnswers = (): string[] => {
    const answers: string[] = []

    // Common causes and fixes
    if (deviceType === 'mic' || deviceType === 'webcam') {
      if (platform === 'Windows 11' || platform === 'Windows 10' || platform === 'Windows') {
        answers.push(`Check ${platform} Privacy settings and ensure ${deviceName} access is enabled`)
        answers.push(`Update ${deviceName} drivers through Device Manager`)
        answers.push(`Close other applications using the ${deviceName} and restart your computer`)
      } else if (platform === 'Chrome' || platform === 'Firefox' || platform === 'Edge' || platform === 'Safari') {
        answers.push(`Enable ${deviceName} permissions in ${platform} settings (click lock icon in address bar)`)
        answers.push(`Verify system ${deviceName} permissions are enabled in Windows or macOS settings`)
        answers.push(`Clear browser cache and restart ${platform}`)
      } else if (platform === 'Zoom' || platform === 'Teams' || platform === 'Discord') {
        answers.push(`Check ${platform} ${deviceName} settings and select the correct device`)
        answers.push(`Verify system ${deviceName} permissions are enabled`)
        answers.push(`Restart ${platform} application after changing settings`)
      } else {
        answers.push(`Check ${platform} permissions and ensure ${deviceName} access is enabled`)
        answers.push(`Update ${deviceName} drivers`)
        answers.push(`Close other applications using the ${deviceName}`)
      }
    } else if (deviceType === 'keyboard') {
      if (platform === 'Windows 11' || platform === 'Windows 10' || platform === 'Windows') {
        answers.push(`Check keyboard language settings and verify layout is correct`)
        answers.push(`Update keyboard drivers through Device Manager`)
        answers.push(`Test keyboard on another computer to isolate hardware vs software issues`)
      } else if (platform === 'macOS' || platform === 'Mac') {
        answers.push(`Check keyboard settings in System Preferences`)
        answers.push(`Reset keyboard preferences and verify layout`)
        answers.push(`Test keyboard in different applications`)
      } else {
        answers.push(`Check keyboard connections and try a different USB port`)
        answers.push(`Update keyboard drivers`)
        answers.push(`Test keyboard on another computer`)
      }
    } else if (deviceType === 'screen') {
      if (platform === 'Windows 11' || platform === 'Windows 10' || platform === 'Windows') {
        answers.push(`Update graphics drivers through Device Manager`)
        answers.push(`Check display settings and adjust refresh rate`)
        answers.push(`Run Windows display troubleshooter`)
      } else if (platform === 'macOS' || platform === 'Mac' || platform === 'MacBook Pro') {
        answers.push(`Check display settings in System Preferences`)
        answers.push(`Update macOS to latest version`)
        answers.push(`Reset NVRAM if applicable`)
      } else {
        answers.push(`Update graphics drivers`)
        answers.push(`Check display connections and cables`)
        answers.push(`Test with another display to isolate the issue`)
      }
    }

    // Add device-specific common fixes
    if (deviceType === 'mic' && problem.toLowerCase().includes('cutting out')) {
      answers[0] = `Check USB connections and try a different port for USB microphones`
    } else if (deviceType === 'mic' && problem.toLowerCase().includes('muted')) {
      answers[0] = `Check physical mute switches and system volume settings`
    } else if (deviceType === 'webcam' && problem.toLowerCase().includes('black screen')) {
      answers[0] = `Check camera permissions and close other applications using the camera`
    } else if (deviceType === 'webcam' && problem.toLowerCase().includes('lagging')) {
      answers[0] = `Reduce camera resolution in settings and close background applications`
    } else if (deviceType === 'keyboard' && problem.toLowerCase().includes('delay')) {
      answers[0] = `Disable keyboard filters and check for software conflicts`
    } else if (deviceType === 'keyboard' && problem.toLowerCase().includes('double')) {
      answers[0] = `Clean keyboard and check for stuck keys or debris`
    } else if (deviceType === 'screen' && problem.toLowerCase().includes('flicker')) {
      answers[0] = `Update graphics drivers and check display cable connections`
    } else if (deviceType === 'screen' && problem.toLowerCase().includes('dim')) {
      answers[0] = `Disable adaptive brightness and check power settings`
    }

    return answers.slice(0, 4) // Return max 4 answers
  }

  const answers = generateAnswers()

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Answer</h2>
      <ul className="space-y-2 text-gray-700">
        {answers.map((answer, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 mr-2 font-bold">•</span>
            <span>{answer}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

