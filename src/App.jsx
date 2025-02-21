import { useState, useEffect } from 'react'
import './App.css'
import tripsData from './trips.json'
import Map from './Map'

function App() {
  const [trips, setTrips] = useState([])
  const [selectedCoordinates, setSelectedCoordinates] = useState(null)

  useEffect(() => {
    setTrips(tripsData)
  }, [])

  const handleShowMap = (coordinates) => {
    setSelectedCoordinates(coordinates)
  }

  return (
    <div id="root">
      <h1>Trip Details</h1>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            <p>Vehicle Number: {trip.vehicleNumber}</p>
            <p>Start Point: {trip.startPoint}</p>
            <p>End Point: {trip.endPoint}</p>
            <p>Distance: {trip.distance}</p>
            <p>Time Taken: {trip.timeTaken}</p>
            <button onClick={() => handleShowMap({ lat: trip.lat, lng: trip.lng })}>
              Show on Map
            </button>
          </li>
        ))}
      </ul>
      {selectedCoordinates && <Map coordinates={selectedCoordinates} />}
    </div>
  )
}

export default App