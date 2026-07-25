import { useEffect, useRef } from 'react';

export default function MapLeaflet() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const L = window.L;
    if (!L || !mapRef.current) return;

    const map = L.map(mapRef.current, { doubleClickZoom: true }).setView([0.344, 6.73], 12);
    L.tileLayer('http://a.tiles.mapbox.com/v3/krishaamer.map-gbywi8nf/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(map);

    const mk = (coords, id, name) => {
      const m = L.marker(coords).addTo(map);
      m.bindPopup(
        `<a href='#flipboard'><img class='img-rounded' src='/artists/${id}-90.jpg' /><div><h3 style='color:#000;'>${name}</h3></div></a>`
      );
    };

    mk([0.33328, 6.72824], 'alex-keller-fonseca', 'Alex-Keller Fonseca');
    mk([0.33994, 6.72913], 'rene-tavares', 'René Tavares');
    mk([0.3395, 6.7132], 'catita-dias', 'Catita Dias');
    mk([0.308, 6.7134], 'leonel-varela', 'Leonel Varela');
    // Osvaldo without image in legacy popup
    L.marker([0.2517, 6.7408]).addTo(map).bindPopup("<div><h3 style='color:#000;'>Osvaldo Reis</h3></div>");
    mk([0.1337, 6.6484], 'nezo', 'Nezo');
    mk([0.1307, 6.6459], 'nelito-pereira', 'Nelito Pereira');
  }, []);

  return (
    <div id="map-container" className="map-container" style={{ width: 400, height: 600 }}>
      <div id="map" ref={mapRef} className="map" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
}

