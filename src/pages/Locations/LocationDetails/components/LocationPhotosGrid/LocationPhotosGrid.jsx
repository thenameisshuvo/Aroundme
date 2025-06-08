import * as React from "react";
import {useState} from "react";
import {AppBar, Button, Dialog, Skeleton, Slide, Toolbar, Typography} from "@mui/material";
import {ViewGridIcon} from "@heroicons/react/solid";
import CloseIcon from '@mui/icons-material/Close';
import './LocationPhotosGrid.css'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const placeholderImages = [
    'https://via.placeholder.com/1080x900.png?text=Loading...',
]
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const LocationPhotosGrid = (props) => {
    const [gallery, setGallery] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const handleGalleryOpen = () => {
        setGallery(true)
    }
    const handleGalleryClose = () => {
        setGallery(false)
    }

    return (
        <div>
            {props.photos == null ?
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="w-4_10 lg-w-1_2 md-w-1 mr-5">
                        <img className="mt-10 start-rounded md-end-rounded" alt="location"
                             src={placeholderImages[0]}/>
                    </div>
                    <div className="alternative-photos lg-w-1_2 w-4_10 md-visible">
                        <div className="w-1_2 lg-w-1 flex">
                            <img className="mt-10 mr-5 lg-end-rounded" alt="location" src={placeholderImages[0]}/>
                            <img className="lg-visible mt-10 top-end-rounded" alt="location"
                                 src={placeholderImages[0]}/>
                        </div>
                        <div className="lg-visible w-1_2 flex">
                            <img style={{marginRight: '20px'}} className="mt-10" alt="location"
                                 src={placeholderImages[0]}/>
                            <img className="mt-10 bottom-end-rounded" alt="location" src={placeholderImages[0]}/>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className="photo-grid-container">
                        {props.photos.map((photo, index) => (
                            <div key={index} className="photo-grid-item">
                                <img src={photo} alt={`Location Photo ${index + 1}`}/>
                            </div>
                        ))}
                    </div>
                    <div className="view-all-photos-button">
                        <Button
                            variant="contained"
                            onClick={handleGalleryOpen}
                            startIcon={<ViewGridIcon className="h-5 w-5"/>}
                        >
                            View All Photos
                        </Button>
                    </div>

                    <Dialog
                        fullScreen
                        open={gallery}
                        onClose={handleGalleryClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar sx={{position: 'relative'}}>
                            <Toolbar>
                                <Button autoFocus color="inherit" onClick={handleGalleryClose}>
                                    <CloseIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                </Button>
                                <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                                    {props.locationName}
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <div className="all-photos-lg-wrapper">
                            <Carousel
                                autoFocus={true}
                                dynamicHeight={true}
                                emulateTouch={true}
                                useKeyboardArrows={true}
                            >
                                {props.photos.map((data, currentItem) => (
                                    <div className="carousel-image-wrapper" key={data}>
                                        <img className="carousel-image" alt="carousel-slide"
                                             src={data}/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="all-photos-sm-wrapper">
                            {props.photos.map(data => (
                                <img className="all-photos-sm"
                                     alt="location" src={data} key={data}/>
                            ))}
                        </div>
                    </Dialog>
                </div>
            }
        </div>
    )
}
export default LocationPhotosGrid