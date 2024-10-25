// PortfolioEffects.tsx

"use client";

import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";

export type fields = {
  fields: string[];
};

const PortfolioEffects = (fields: fields) => {
  const flData = fields.fields;
  // console.log(flData);

  // Isotope
  //   const isotope = useRef();
  // Specify that isotope can hold an instance of Isotope or null (before it's assigned)
  const isotope = useRef(null as Isotope | null);
  const [filterKey, setFilterKey] = useState("*");

  // Extend IsotopeOptions to include animationOptions
  interface ExtendedIsotopeOptions extends Isotope.IsotopeOptions {
    animationOptions?: {
      duration: number;
      easing: string;
      queue: boolean;
    };
  }

  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    } as ExtendedIsotopeOptions);
    return () => isotope.current?.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange =
    ({ key }: { key: any }) =>
    () => {
      setFilterKey(key);
    };
  const activeBtn = ({ value }: { value: any }) =>
    value === filterKey ? "active" : "";

  return (
    <div
      className="filter-links scrolla-element-anim-1 scroll-animate"
      data-animate="active"
    >
      <a
        className={`c-pointer lui-subtitle ${activeBtn({ value: "*" })}`}
        onClick={handleFilterKeyChange({ key: "*" })}
        data-href=".works-col"
      >
        All
      </a>

      {flData.map((flData) => {
        // Convert to lowercase and replace spaces and slashes with dashes
        const formattedFlData = flData.toLowerCase().replace(/[\s/]+/g, "-");
        const prefixedFlData = `sorting-${formattedFlData}`; // Prepend a word
        console.log(prefixedFlData);

        return (
          <a key={flData}
            className={`c-pointer lui-subtitle ${activeBtn({ value: prefixedFlData })}`} // Use prefixed flData for the value
            onClick={handleFilterKeyChange({ key: prefixedFlData })} // Use prefixed flData for the key
            data-href={`.${prefixedFlData}`} // Use prefixed flData for the data-href
          >
            {flData} {/* Use the original flData for the text */}
          </a>
        );
      })}


    </div>
  );
};

export default PortfolioEffects;
