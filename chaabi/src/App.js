import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [currentKey, setCurrentKey] = useState('')
  const [key, setkey] = useState('')
  const [data, setData] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  const [accuracy, setAccuracy] = useState(100)

  const keyData = 'asdfjkl;'

  useEffect(() => {
    setkey(keyData.charAt(0))
    setStartTime(Date.now())
  }, [])

  const handleData = event => {
    const {key} = event

    if (key === key) {
      setData(data + 1)
      setkey(keyData.charAt(data + 1))

      if (data + 1 === keyData.length) {
        setEndTime(Date.now())
        letData()
      }
    }
  }

  const letData = () => {
    const totalData = keyData.length
    const getData = totalData - data
    const sumData =
      ((data - getData) / data) * 100
    setAccuracy(sumData.toFixed(2))
  }
  return (
    <div className="App">
      <h1 className="heading">Touch Typing</h1>
      <p>Type the below keys:</p>
      <div>
        <button className="letter">{key}</button>
      </div>
      <input
        type="text"
        onKeyPress={handleData}
      />

      <div>
        <button className="end">
          <a href="">Reset</a>
        </button>
      </div>
    </div>
  )
}
export default App;
