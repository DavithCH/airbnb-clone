import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { LocationMarkerIcon } from '@heroicons/react/solid';

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordonates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordonates);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    zoom: 8,
    latitude: center.latitude,
    longitude: center.longitude,
  });

  const renderedSearchResultLocation = searchResults.map((result) => {
    return (
      <div key={result.title}>
        <Marker
          longitude={result.long}
          latitude={result.lat}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer animate-bounce text-xl"
            >
              🔻
            </p>
          </div>
        </Marker>

        {selectedLocation.long === result.long ? (
          <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
          >
            <div className="text-sm">{result.title}</div>
          </Popup>
        ) : (
          false
        )}
      </div>
    );
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/botoho/cksegfv9i1y0m17mzt31c3p6n"
      mapboxApiAccessToken={process.env.mapbox_key}
    >
      {renderedSearchResultLocation}
    </ReactMapGL>
  );
}

export default Map;
