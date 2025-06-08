import Gradient from "rgt";
import TextGradientColors from "../../../../../configs/TextGradientColors";
import {useMemo} from "react";
import './LocationTitle.css';
import GradientText from '../../../../../components/GradientText/GradientText';

const LocationTitle = (props) => {
    const randomNumber = useMemo(() => {
        return Math.floor(Math.random() * 11);
    }, [])
    return (
        <div className="title-wrapper">
            <div>
            <h1 className="location-title">
                <GradientText dir="left-to-right" from={TextGradientColors[randomNumber]}
                              to={TextGradientColors[randomNumber + 1]}>
                    {props.title}
                </GradientText>
            </h1>
            <p className="location-description">
                <GradientText dir="left-to-right" from={TextGradientColors[randomNumber]}
                              to={TextGradientColors[randomNumber - 1]}>
                    {props.description}
                </GradientText>
            </p>
            </div>
        </div>
    )
}
export default LocationTitle;