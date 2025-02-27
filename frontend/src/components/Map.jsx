import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { motion } from "framer-motion";

// 🔑 Imposta la tua chiave API (assicurati che sia definita nel file .env)
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

const Map = ({ setIsFlat, isFlat }) => {
    const mapContainer = useRef(null);  // Riferimento al div della mappa
    const map = useRef(null);           // Riferimento all'istanza della mappa

    useEffect(() => {
        if (map.current || !mapContainer.current) {
            console.log("Mappa già creata o div non disponibile");
            return;
        }

        console.log("Creazione della mappa...");

        // Map configuration
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/dark-v10",
            center: [0, 0],
            zoom: 2,
            projection: "globe",
            pitch: 0,
            bearing: 0,
        });

        // Aggiungi questa configurazione dopo la creazione della mappa
        map.current.on("style.load", () => {
            // Configurazione dell'atmosfera
            map.current.setFog({
                "color": "rgb(186, 210, 235)", // colore dell'atmosfera
                "high-color": "rgb(36, 92, 223)", // colore del cielo
                "horizon-blend": 0.02, // sfumatura dell'orizzonte
                "space-color": "rgb(11, 11, 25)", // colore dello spazio
                "star-intensity": 0.6 // intensità delle stelle
            });
        });

        map.current.on("load", () => {
            // Aggiungi un layer per l'elevazione dei continenti
            map.current.addSource('land-source', {
                'type': 'geojson',
                'data': 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_land.geojson'
            });

            let rotation = 0;
            const rotateGlobe = () => {
                map.current.setCenter([rotation, 0]);
                rotation = (rotation + 0.5) % 360;
            };

            const rotationInterval = setInterval(rotateGlobe, 50);

            setTimeout(() => {
                clearInterval(rotationInterval);
                
                const slowDown = () => {
                    rotation *= 0.95;
                    map.current.setCenter([rotation, 0]);
                    if (rotation > 0.1) {
                        requestAnimationFrame(slowDown);
                    } else {
                        // Sequenza di animazione per l'appiattimento
                        map.current.easeTo({
                            pitch: 45,
                            zoom: 2.5,
                            duration: 2000,
                            easing: (t) => {
                                return t * (2 - t) * (1 + t);  // Easing cubico personalizzato
                            }
                        });

                        setTimeout(() => {
                            map.current.easeTo({
                                pitch: 0,
                                zoom: 2,
                                duration: 1500,
                                easing: (t) => t * (2 - t)
                            });
                            
                            // Transizione alla proiezione Mercator
                            map.current.setProjection("mercator", {
                                duration: 2000,
                                easing: (t) => t * (2 - t)
                            });

                            
                            
                            setTimeout(() => setIsFlat(true), 2000);
                        }, 1500);
                    }
                };
                
                slowDown();
            }, 8000);
        });

        return () => {
            console.log("Rimozione della mappa...");
            map.current?.remove();
            map.current = null;
        };
    }, [setIsFlat]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
        >
            {!isFlat && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white text-2xl"
                >
                </motion.div>
            )}
            <div ref={mapContainer} className="w-full h-full" />
        </motion.div>
    );
};

export default Map;
