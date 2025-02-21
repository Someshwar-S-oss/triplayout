import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const containerStyle = {
  width: '400px',
  height: '400px'
}

function Map({ coordinates }) {
  const MapComponent = () => {
    const map = useMap()

    useEffect(() => {
      map.setView(coordinates, 10)
    }, [coordinates, map])

    return <Marker position={coordinates} />
  }

  return (
    <MapContainer style={containerStyle} center={coordinates} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapComponent />
    </MapContainer>
  )
}

export default Map