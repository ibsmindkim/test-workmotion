import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../silde.css"
import phone1 from '../img/phone/1.png';
import phone2 from '../img/phone/2.png';
import phone3 from '../img/phone/3.png';
import phone4 from '../img/phone/4.png';
import phone5 from '../img/phone/5.png';
import phone6 from '../img/phone/6.png';


export default function Imgslide() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide"><img src={phone1}  alt="Mock up Application" /></div>
                    <div className="keen-slider__slide"><img src={phone2}  alt="Mock up Application" /></div>
                    <div className="keen-slider__slide number-slide3"><img src={phone3}  alt="Mock up Application" /></div>
                    <div className="keen-slider__slide number-slide4"><img src={phone4}  alt="Mock up Application" /></div>
                    <div className="keen-slider__slide number-slide5"><img src={phone5}  alt="Mock up Application" /></div>
                    <div className="keen-slider__slide number-slide6"><img src={phone6}  alt="Mock up Application" /></div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </>
    )
}


function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}
