import { Button, Skeleton } from "@mui/material";
import { useCallback, useState } from "react";
import './Hero.css';

// Helper to generate 4 random images
const generateImages = () => {
    const usedIds = new Set();
    const images = [];
    while (images.length < 4) {
        const randomId = Math.floor(Math.random() * 1000) + 1;
        if (!usedIds.has(randomId)) {
            usedIds.add(randomId);
            images.push({
                id: `title${images.length + 1}`,
                url: `https://picsum.photos/id/${randomId}/224/320`,
                title: `Discover ${randomId}`
            });
        }
    }
    return images;
};

const Hero = ({ heroTitle, heroDescription, HeroButtonText, HeroButtonOnClick }) => {
    const [images, setImages] = useState(generateImages);
    const [loaded, setLoaded] = useState({});

    const onLoadChange = useCallback((titleId) => {
        setLoaded(prev => ({ ...prev, [titleId]: true }));
    }, []);

    const refreshImages = () => {
        setLoaded({});
        setImages(generateImages());
    };

    const renderImageWithSkeleton = (img) => (
        <div className="w-56 h-80 rounded-lg overflow-hidden">
            {!loaded[img.id] && (
                <Skeleton animation="wave" variant="rectangular" style={{ height: '100%' }} />
            )}
            <img
                style={!loaded[img.id] ? { display: 'none' } : {}}
                src={img.url}
                onLoad={() => onLoadChange(img.id)}
                alt={img.title}
                className="w-full h-full object-center object-cover"
            />
        </div>
    );

    return (
        <div className="hero-wrapper relative overflow-hidden">
            <div className="pt-20 pb-32 sm:pt-28 sm:pb-40 lg:pt-36 lg:pb-48">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                    <div className="sm:max-w-lg mt-12 text-center sm:text-left">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                            {heroTitle}
                        </h1>
                        <p className="mt-6 text-2xl text-white/80 single-line">
                            {heroDescription}
                        </p>
                    </div>

                    <div className="mt-14">
                        <div className="flex flex-wrap justify-center gap-6">
                            {images.map((img, index) => (
                                <div key={index}>{renderImageWithSkeleton(img)}</div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Button onClick={HeroButtonOnClick} size="large" color="warning" variant="contained">
                                {HeroButtonText}
                            </Button>
                            <Button onClick={refreshImages} size="large" color="primary" variant="outlined">
                                Refresh Images
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
