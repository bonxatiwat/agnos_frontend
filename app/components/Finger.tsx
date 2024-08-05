"use client";
import React, { useState } from "react";
import Image from "next/image";

interface FingerActive {
  dis: boolean;
  pip: boolean;
  mcp: boolean;
}

const Finger = () => {
  const [handPosition, setHandPosition] = useState<FingerActive>({
    dis: false,
    pip: false,
    mcp: false,
  });

  const handleFingerClick = (position: string) => {
    switch (position) {
      case "dis":
        setHandPosition({
          ...handPosition,
          dis: !handPosition.dis,
        });
        break;
      case "pip":
        setHandPosition({
          ...handPosition,
          pip: !handPosition.pip,
        });
        break;
      case "mcp":
        setHandPosition({
          ...handPosition,
          mcp: !handPosition.mcp,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="box text-center">
      <h1 className="font-bold text-2xl">จุดไหนที่คุณปวดมากที่สุด</h1>
      <div className="image-container">
        <Image
          src="/assets/images/finger/default-finger.png"
          alt="Hand"
          width={396}
          height={640}
        />
        {handPosition.dis && handPosition.pip && handPosition.mcp && (
          <Image
            className="absolute top-0 left-0"
            src="/assets/images/finger/others-highlight.png"
            alt="Hand"
            width={396}
            height={640}
          />
        )}

        {handPosition.dis === true && (
          <>
            <Image
              className="absolute top-0 left-0"
              src="/assets/images/finger/dip-highlight.png"
              alt="dip highlight"
              width={396}
              height={640}
            />

            {!(handPosition.dis && handPosition.pip && handPosition.mcp) && (
              <Image
                className="absolute top-0 left-0"
                src="/assets/images/finger/dip-active.png"
                alt="dip active"
                width={396}
                height={640}
              />
            )}
          </>
        )}

        {handPosition.pip === true && (
          <>
            <Image
              className="absolute top-0 left-0"
              src="/assets/images/finger/pip-highlight.png"
              alt="pip highlight"
              width={396}
              height={640}
            />

            {!(handPosition.dis && handPosition.pip && handPosition.mcp) && (
              <Image
                className="absolute top-0 left-0"
                src="/assets/images/finger/pip-active.png"
                alt="pip active"
                width={396}
                height={640}
              />
            )}
          </>
        )}

        {handPosition.mcp === true && (
          <>
            <Image
              className="absolute top-0 left-0"
              src="/assets/images/finger/mcp-highlight.png"
              alt="mcp highlight"
              width={396}
              height={640}
            />
            {!(handPosition.dis && handPosition.pip && handPosition.mcp) && (
              <Image
                className="absolute top-0 left-0"
                src="/assets/images/finger/mcp-active.png"
                alt="mcp active"
                width={396}
                height={640}
              />
            )}
          </>
        )}

        <div className="absolute top-0 left-0 w-full h-full z-1">
          <div className="relative w-full h-full">
            <span
              onClick={() => handleFingerClick("dis")}
              className="absolute top-[23%] left-[20%] w-[7%] h-[6%] rounded-lg cursor-pointer"
            />
            <span
              onClick={() => handleFingerClick("dis")}
              className="absolute top-[12%] left-[32%] w-[7%] h-[6%] rounded-lg cursor-pointer"
            />
            <span
              onClick={() => handleFingerClick("dis")}
              className="absolute top-[8%] left-[42.5%] w-[7%] h-[6%] rounded-lg cursor-pointer"
            />
            <span
              onClick={() => handleFingerClick("dis")}
              className="absolute top-[9%] right-[38.5%] w-[7%] h-[6%] rounded-lg cursor-pointer"
            />

            <span
              onClick={() => handleFingerClick("pip")}
              className="absolute top-[30%] left-[23%] w-[7%] h-[6%] rounded-lg cursor-pointer"
            />
            <span
              onClick={() => handleFingerClick("pip")}
              className="absolute top-[22%] left-[33%] w-[7%] h-[6%] rounded-lg cursor-pointer"
            />
            <span
              onClick={() => handleFingerClick("pip")}
              className="absolute top-[19%] left-[43.54%] w-[7%] h-[6%] rounded-lg cursor-pointer"
            />
            <span
              onClick={() => handleFingerClick("pip")}
              className="absolute top-[20.5%] right-[38.5%] w-[7%] h-[6%] rounded-lg cursor-pointer"
            />
            <span
              onClick={() => handleFingerClick("pip")}
              className="absolute top-[39.5%] right-[18.5%] w-[7%] h-[6%] rounded-lg cursor-pointer"
            />

            <span
              onClick={() => handleFingerClick("mcp")}
              className="absolute top-[40.5%] left-[27.5%] w-[7.5%] h-[5%] rounded-lg cursor-pointer"
            />
            <span
              onClick={() => handleFingerClick("mcp")}
              className="absolute top-[37.5%] left-[35.5%] w-[7.5%] h-[5%] rounded-lg cursor-pointer"
            />
            <span
              onClick={() => handleFingerClick("mcp")}
              className="absolute top-[34.5%] left-[44.5%] w-[7.5%] h-[5%] rounded-lg  cursor-pointer"
            />
            <span
              onClick={() => handleFingerClick("mcp")}
              className="absolute top-[34.5%] right-[38.5%] w-[7.5%] h-[5%] rounded-lg cursor-pointer"
            />
            <span
              onClick={() => handleFingerClick("mcp")}
              className="absolute top-[51.5%] right-[25.5%] w-[7%] h-[6%] rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finger;
