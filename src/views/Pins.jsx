import { useState, useEffect, useRef } from 'react';
import imageData from '../assets/images.json';

function Pins() {

    return (
        <>
            <div className="min-h-screen">
                <div className="w-full mx-auto pt-2">
                    <div className="p-2 md:p-4 columns-2 md:columns-4 lg:columns-6 gap-3">
                        {imageData.map((image, index) => (
                            <>
                                <div
                                    key={index}
                                    className={`break-inside-avoid bg-white rounded-lg shadow-md hover:shadow-lg ${index !== 0 ? 'mt-4' : ''}`}>
                                    <div className="flex flex-col">
                                        <img className="w-full rounded-xl overflow-hidden" src={image["image-name"]} alt={image[
                                            "alt"
                                        ]} />
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <p className="text-gray-900 mb-1 font-semibold">{image["title"]}</p>
                                    <div className="flex items-center">
                                        <img className="rounded-full h-8 w-auto me-2" src={image["uploader-photo"]} alt={image["uploader-alt"]} />
                                        <span className="text-center text-gray-500">{image["uploader"]}</span>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pins;
