import React from "react";

const TimePeriod = () => {
  const [option, setOption] = React.useState(2);

  return (
    <div className=" flex items-center gap-4 mt-4 flex-wrap text-[16px] transition-all duration-300 ease-in-out">
      <div
        className={`px-4 py-1 cursor-pointer border border-[#F3E8FF] rounded-full w-fit ${
          option === 1 ? "bg-[#F3E8FF]" : ""
        }`}
        onClick={() => setOption(1)}
      >
        <p
          className={`${
            option === 1
              ? "bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent"
              : ""
          }`}
        >
          1Month
        </p>
      </div>
      <div
        className={`px-4 py-1 cursor-pointer border border-[#F3E8FF] rounded-full w-fit ${
          option === 2 ? "bg-[#F3E8FF]" : ""
        }`}
        onClick={() => setOption(2)}
      >
        <p
          className={`${
            option === 2
              ? "bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent"
              : ""
          }`}
        >
          3Month
        </p>
      </div>
      <div
        className={`px-4 py-1 cursor-pointer border border-[#F3E8FF] rounded-full w-fit ${
          option === 3 ? "bg-[#F3E8FF]" : ""
        }`}
        onClick={() => setOption(3)}
      >
        <div className="flex items-center gap-1">
          <p
            className={`${
              option === 3
                ? "bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent"
                : ""
            }`}
          >
            1Year
          </p>
          <img src="/king.png" alt="icon" className="h-4 w-4" />
        </div>
      </div>

      <div
        className={`px-4 py-1 cursor-pointer border border-[#F3E8FF] rounded-full w-fit ${
          option === 4 ? "bg-[#F3E8FF]" : ""
        }`}
        onClick={() => setOption(4)}
      >
        <div className="flex items-center gap-2">
          <img src="/calendar.png" alt="icon" className="h-4 w-3" />

          <p
            className={`${
              option === 4
                ? "bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent"
                : ""
            }`}
          >
            Custom
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimePeriod;
