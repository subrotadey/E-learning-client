import React from 'react';
import FeatureInfoModal from './FeatureInfoModal';
import "./FeatureInfo.css"

const FeatureInfo = () => {
  
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl feature_info lg:mx-16">
              <div className='lg:w-2/4 grid-cols-6 mx-auto my-auto'>
                <figure>
                  <div className='w-full lg:w-96 h-72 min-w-fit bg-no-repeat bg-cover ' >
                  <FeatureInfoModal></FeatureInfoModal>
                  </div>
                </figure>
              </div>
              <div className='lg:w-2/4 md:w-full border-8 border-indigo-200 border-l-indigo-900 p-6 m-6 border-white  text-gray-600'>
                <h1 className='text-5xl lg:text-6xl font-bold italic'>
                    WATCH. LISTEN. PRACTICE. LEARN.</h1>
                <h5 className='text-lg font-sans'>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis.Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis.</h5>
            </div>
            </div>
        </div>
    );
};

export default FeatureInfo;