import {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import useLocationPhotos from "../../../hook/useLocationPhotos";
import './LocationDetails.css';
import LocationTitle from "./components/LocationTitle/LocationTitle";
import LocationPhotosGrid from "./components/LocationPhotosGrid/LocationPhotosGrid";


const LocationDetails = () => {
    const {state} = useLocation();
    const {location, locationName, locationId} = state;
    const locationRegion = location.region ? location.region + ", " : ''
    const locationCountry = location.country ?? ''
    const {requestCallback, locationPhotos} = useLocationPhotos()
    useEffect(() => {
        if (locationPhotos == null) {
            requestCallback(locationId);
        }
    }, [locationId, locationPhotos, requestCallback])
    const [photos, setPhotos] = useState(null)
    useEffect(() => {
        if (locationPhotos != null) {
            const newPhotos = locationPhotos.map(photo => photo.prefix + "1080x900" + photo.suffix);
            setPhotos(newPhotos);
        }
    }, [locationPhotos])

    return (
        <div className="page">
            <div className="location-details-container">
                <LocationTitle title={locationName} description={locationRegion + locationCountry}/>
                <LocationPhotosGrid locationName={locationName} photos={photos}/>
            </div>
        </div>
    )
}
export default LocationDetails;
