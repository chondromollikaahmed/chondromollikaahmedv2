'use client';

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

const Loader = () => {
    const [loader, setLoader] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoader(false);
      }, 300);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);
  
    return (
      <Fragment>
        {loader && 
        <Fragment>
      {/* Preloader */}
      <div className="preloader">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner-logo">
              <Image
              src="/assets/images/c_logo.png"
              alt="Chondromollika Ahmed - UI/UX Designer"
              width={100} // Add appropriate width
              height={100} // Add appropriate height
              />
              <div className="spinner-dot" />
              <div className="spinner spinner-line" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
        }
      </Fragment>
    );
  };
  
  export default Loader;