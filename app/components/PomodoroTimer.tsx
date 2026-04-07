"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Play, Pause, RotateCcw, Settings } from "lucide-react"

type TimerMode = "work" | "shortBreak" | "longBreak"

const MODE_LABELS: Record<TimerMode, string> = {
  work: "Focus",
  shortBreak: "Short Break",
  longBreak: "Long Break",
}

const MODE_COLORS: Record<TimerMode, string> = {
  work: "#6366F1",
  shortBreak: "#22C55E",
  longBreak: "#F59E0B",
}

const SESSIONS_BEFORE_LONG_BREAK = 4
const CIRCLE_RADIUS = 125
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS

export function PomodoroTimer() {
  const [workMinutes, setWorkMinutes] = useState(25)
  const [shortBreakMinutes, setShortBreakMinutes] = useState(5)
  const [longBreakMinutes, setLongBreakMinutes] = useState(15)

  const [mode, setMode] = useState<TimerMode>("work")
  const [secondsLeft, setSecondsLeft] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [completedSessions, setCompletedSessions] = useState(0)
  const [showSettings, setShowSettings] = useState(false)

  const audioRef = useRef<AudioContext | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const getTotalSeconds = useCallback(
    (m: TimerMode) => {
      switch (m) {
        case "work":
          return workMinutes * 60
        case "shortBreak":
          return shortBreakMinutes * 60
        case "longBreak":
          return longBreakMinutes * 60
      }
    },
    [workMinutes, shortBreakMinutes, longBreakMinutes]
  )

  const playNotificationSound = useCallback(() => {
    try {
      const ctx = audioRef.current || new AudioContext()
      audioRef.current = ctx

      // Play a pleasant two-tone notification
      const now = ctx.currentTime
      const frequencies = [523.25, 659.25, 783.99] // C5, E5, G5

      frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.type = "sine"
        osc.frequency.value = freq
        gain.gain.setValueAtTime(0, now + i * 0.15)
        gain.gain.linearRampToValueAtTime(0.3, now + i * 0.15 + 0.05)
        gain.gain.linearRampToValueAtTime(0, now + i * 0.15 + 0.4)
        osc.start(now + i * 0.15)
        osc.stop(now + i * 0.15 + 0.5)
      })
    } catch {
      // Audio not available
    }
  }, [])

  const switchMode = useCallback(
    (newMode: TimerMode) => {
      setMode(newMode)
      setSecondsLeft(getTotalSeconds(newMode))
      setIsRunning(false)
    },
    [getTotalSeconds]
  )

  const handleTimerComplete = useCallback(() => {
    playNotificationSound()
    setIsRunning(false)

    if (mode === "work") {
      const newCompleted = completedSessions + 1
      setCompletedSessions(newCompleted)

      if (newCompleted % SESSIONS_BEFORE_LONG_BREAK === 0) {
        switchMode("longBreak")
      } else {
        switchMode("shortBreak")
      }
    } else {
      switchMode("work")
    }
  }, [mode, completedSessions, playNotificationSound, switchMode])

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isRunning])

  useEffect(() => {
    if (secondsLeft === 0 && isRunning) {
      handleTimerComplete()
    }
  }, [secondsLeft, isRunning, handleTimerComplete])

  // Update document title
  useEffect(() => {
    if (isRunning) {
      const mins = Math.floor(secondsLeft / 60)
      const secs = secondsLeft % 60
      document.title = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")} - ${MODE_LABELS[mode]} | FocusFlow`
    } else {
      document.title = "Pomodoro Timer | FocusFlow"
    }
    return () => {
      document.title = "Pomodoro Timer | FocusFlow"
    }
  }, [secondsLeft, isRunning, mode])

  const toggleTimer = () => {
    setIsRunning((prev) => !prev)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setSecondsLeft(getTotalSeconds(mode))
  }

  const totalSeconds = getTotalSeconds(mode)
  const progress = totalSeconds > 0 ? secondsLeft / totalSeconds : 0
  const strokeDashoffset = CIRCLE_CIRCUMFERENCE * (1 - progress)
  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60

  return (
    <div className="timer-container">
      {/* Mode Tabs */}
      <div className="timer-mode-tabs">
        {(["work", "shortBreak", "longBreak"] as TimerMode[]).map((m) => (
          <button
            key={m}
            className={`timer-mode-tab ${mode === m ? "active" : ""}`}
            onClick={() => switchMode(m)}
            style={
              mode === m
                ? { background: MODE_COLORS[m], borderColor: MODE_COLORS[m] }
                : undefined
            }
          >
            {MODE_LABELS[m]}
          </button>
        ))}
      </div>

      {/* Progress Ring */}
      <div className="progress-ring-wrapper">
        <svg className="progress-ring-svg" viewBox="0 0 280 280">
          <circle
            className="progress-ring-bg"
            cx="140"
            cy="140"
            r={CIRCLE_RADIUS}
          />
          <circle
            className="progress-ring-fg"
            cx="140"
            cy="140"
            r={CIRCLE_RADIUS}
            stroke={MODE_COLORS[mode]}
            strokeDasharray={CIRCLE_CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="timer-display">
          <div className="timer-time">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </div>
          <div className="timer-label">{MODE_LABELS[mode]}</div>
        </div>
      </div>

      {/* Controls */}
      <div className="timer-controls">
        <button className="timer-btn timer-btn-primary" onClick={toggleTimer}>
          {isRunning ? <Pause size={20} /> : <Play size={20} />}
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className="timer-btn timer-btn-secondary" onClick={resetTimer}>
          <RotateCcw size={18} />
          Reset
        </button>
      </div>

      {/* Session Counter */}
      <div className="session-counter">
        {Array.from({ length: SESSIONS_BEFORE_LONG_BREAK }).map((_, i) => (
          <div
            key={i}
            className={`session-dot ${
              i < completedSessions % SESSIONS_BEFORE_LONG_BREAK
                ? "completed"
                : i === completedSessions % SESSIONS_BEFORE_LONG_BREAK && mode === "work"
                ? "active"
                : ""
            }`}
          />
        ))}
      </div>
      <div className="session-info">
        {completedSessions} session{completedSessions !== 1 ? "s" : ""} completed
        {completedSessions > 0 &&
          ` (${Math.round((completedSessions * workMinutes) / 60 * 10) / 10}h focused)`}
      </div>

      {/* Settings */}
      <div className="timer-settings">
        <details open={showSettings} onToggle={(e) => setShowSettings((e.target as HTMLDetailsElement).open)}>
          <summary>
            <Settings size={16} />
            Customize Durations
          </summary>
          <div className="settings-grid">
            <div className="setting-item">
              <label>Work (min)</label>
              <input
                type="number"
                min={1}
                max={120}
                value={workMinutes}
                onChange={(e) => {
                  const val = Math.max(1, Math.min(120, parseInt(e.target.value) || 1))
                  setWorkMinutes(val)
                  if (mode === "work" && !isRunning) {
                    setSecondsLeft(val * 60)
                  }
                }}
              />
            </div>
            <div className="setting-item">
              <label>Short Break (min)</label>
              <input
                type="number"
                min={1}
                max={60}
                value={shortBreakMinutes}
                onChange={(e) => {
                  const val = Math.max(1, Math.min(60, parseInt(e.target.value) || 1))
                  setShortBreakMinutes(val)
                  if (mode === "shortBreak" && !isRunning) {
                    setSecondsLeft(val * 60)
                  }
                }}
              />
            </div>
            <div className="setting-item">
              <label>Long Break (min)</label>
              <input
                type="number"
                min={1}
                max={60}
                value={longBreakMinutes}
                onChange={(e) => {
                  const val = Math.max(1, Math.min(60, parseInt(e.target.value) || 1))
                  setLongBreakMinutes(val)
                  if (mode === "longBreak" && !isRunning) {
                    setSecondsLeft(val * 60)
                  }
                }}
              />
            </div>
          </div>
        </details>
      </div>
    </div>
  )
}
