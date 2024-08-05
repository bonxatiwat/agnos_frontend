"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";

interface AbsActive {
  epigastrium: boolean;
  umbilicus: boolean;
  llq: boolean;
  luq: boolean;
  suprapubic: boolean;
  rlq: boolean;
  ruq: boolean;
}

const Abs = () => {
  const [absPosition, setAbsPosition] = useState<AbsActive>({
    epigastrium: false,
    umbilicus: false,
    llq: false,
    luq: false,
    suprapubic: false,
    rlq: false,
    ruq: false,
  });

  const handleAbsClick = (position: string) => {
    switch (position) {
      case "epigastrium":
        setAbsPosition({
          ...absPosition,
          epigastrium: !absPosition.epigastrium,
        });
        break;
      case "umbilicus":
        setAbsPosition({
          ...absPosition,
          umbilicus: !absPosition.umbilicus,
        });
        break;
      case "llq":
        setAbsPosition({
          ...absPosition,
          llq: !absPosition.llq,
        });
        break;
      case "luq":
        setAbsPosition({
          ...absPosition,
          luq: !absPosition.luq,
        });
        break;
      case "suprapubic":
        setAbsPosition({
          ...absPosition,
          suprapubic: !absPosition.suprapubic,
        });
        break;
      case "rlq":
        setAbsPosition({
          ...absPosition,
          rlq: !absPosition.rlq,
        });
        break;
      case "ruq":
        setAbsPosition({
          ...absPosition,
          ruq: !absPosition.ruq,
        });
        break;
      default:
        break;
    }
  };

  const allAbs = useMemo(() => {
    return Object.values(absPosition).every((value) => value === true);
  }, [absPosition]);

  return (
    <div className="box text-center">
      <h1 className="font-bold text-2xl">จุดไหนที่คุณปวดมากที่สุด</h1>
      <div className="image-container">
        <Image
          src="/assets/images/abs/default-abs.png"
          alt="abs"
          width={400}
          height={472}
        />
        {allAbs && (
          <Image
            className="absolute top-0 left-0"
            src="/assets/images/abs/all-over-highlight.png"
            alt="abs"
            width={400}
            height={472}
          />
        )}
        {absPosition.epigastrium && (
          <>
            <Image
              className="absolute top-0 left-0"
              src="/assets/images/abs/epigastrium-highlight.png"
              alt="abs highlight"
              width={400}
              height={472}
            />
            {!allAbs && (
              <Image
                className="absolute top-0 left-0"
                src="/assets/images/abs/epigastrium-active.png"
                alt="abs active"
                width={400}
                height={472}
              />
            )}
          </>
        )}

        {absPosition.umbilicus && (
          <>
            <Image
              className="absolute top-0 left-0"
              src="/assets/images/abs/umbilicus-highlight.png"
              alt="umbilicus highlight"
              width={400}
              height={472}
            />
            {!allAbs && (
              <Image
                className="absolute top-0 left-0"
                src="/assets/images/abs/umbilicus-active.png"
                alt="umbilicus active"
                width={400}
                height={472}
              />
            )}
          </>
        )}

        {absPosition.luq && (
          <>
            <Image
              className="absolute top-0 left-0"
              src="/assets/images/abs/luq-highlight.png"
              alt="luq highlight"
              width={400}
              height={472}
            />
            {!allAbs && (
              <Image
                className="absolute top-0 left-0"
                src="/assets/images/abs/luq-active.png"
                alt="luq active"
                width={400}
                height={472}
              />
            )}
          </>
        )}

        {absPosition.llq && (
          <>
            <Image
              className="absolute top-0 left-0"
              src="/assets/images/abs/llq-highlight.png"
              alt="llq highlight"
              width={400}
              height={472}
            />
            {!allAbs && (
              <Image
                className="absolute top-0 left-0"
                src="/assets/images/abs/llq-active.png"
                alt="llq active"
                width={400}
                height={472}
              />
            )}
          </>
        )}

        {absPosition.rlq && (
          <>
            <Image
              className="absolute top-0 left-0"
              src="/assets/images/abs/rlq-highlight.png"
              alt="rlq highlight"
              width={400}
              height={472}
            />
            {!allAbs && (
              <Image
                className="absolute top-0 left-0"
                src="/assets/images/abs/rlq-active.png"
                alt="rlq active"
                width={400}
                height={472}
              />
            )}
          </>
        )}

        {absPosition.suprapubic && (
          <>
            <Image
              className="absolute top-0 left-0"
              src="/assets/images/abs/suprapubic-highlight.png"
              alt="suprapubic highlight"
              width={400}
              height={472}
            />
            {!allAbs && (
              <Image
                className="absolute top-0 left-0"
                src="/assets/images/abs/suprapubic-active.png"
                alt="suprapubic active"
                width={400}
                height={472}
              />
            )}
          </>
        )}
        {absPosition.ruq && (
          <>
            <Image
              className="absolute top-0 left-0"
              src="/assets/images/abs/ruq-highlight.png"
              alt="ruq highlight"
              width={400}
              height={472}
            />
            {!allAbs && (
              <Image
                className="absolute top-0 left-0"
                src="/assets/images/abs/ruq-active.png"
                alt="ruq active"
                width={400}
                height={472}
              />
            )}
          </>
        )}

        <div className="absolute top-0 left-0 w-full h-full z-1">
          <div className="relative h-full w-full">
            <span
              onClick={() => handleAbsClick("umbilicus")}
              className="absolute top-[49%] left-[43.5%] w-[10%] h-[8%] rounded-full opacity-40 cursor-pointer"
            />
            <span
              onClick={() => handleAbsClick("epigastrium")}
              className="absolute top-[33.5%] left-[41%] w-[15%] h-[15%] [clip-path:polygon(50%_0%,_100%_45%,_50%_100%,_0_46%)] opacity-40 cursor-pointer"
            />
            <span
              onClick={() => handleAbsClick("luq")}
              className="absolute top-[41.2%] right-[36%] w-[13.3%] h-[11%] [clip-path:polygon(47%_0,_88%_20%,_100%_98%,_30%_100%,_0%_58%)] opacity-40 cursor-pointer"
            />
            <span
              onClick={() => handleAbsClick("llq")}
              className="absolute bottom-[34.3%] right-[35.8%] w-[13%] h-[11.8%] [clip-path:polygon(29%_0,_100%_0,_90%_55%,_45%_100%,_25%_66%,_0%_32%)] opacity-40 cursor-pointer"
            />
            <span
              onClick={() => handleAbsClick("suprapubic")}
              className="absolute bottom-[30.4%] left-[41.8%] w-[13.5%] h-[11.7%] [clip-path:polygon(19%_23%,_49%_0,_78%_19%,_100%_69%,_48%_97%,_0_71%)] opacity-40 cursor-pointer"
            />
            <span
              onClick={() => handleAbsClick("rlq")}
              className="absolute bottom-[34.4%] left-[31.8%] w-[13.5%] h-[11.7%] [clip-path:polygon(77%_0,_100%_26%,_86%_57%,_60%_99%,_37%_86%,_1%_53%,_3%_0)] opacity-40 cursor-pointer"
            />
            <span
              onClick={() => handleAbsClick("ruq")}
              className="absolute top-[40.4%] left-[32.8%] w-[13.5%] h-[12%] [clip-path:polygon(1%_34%,_50%_6%,_100%_64%,_79%_75%,_68%_100%,_0_98%)] opacity-40 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abs;
