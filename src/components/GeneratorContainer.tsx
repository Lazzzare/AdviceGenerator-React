import TwoLine from "../assets/TwoLine.svg";
import Dice from "../assets/Dice.svg";
import { useState } from "react";
import axios from "axios";

const GeneratorContainer = () => {
  interface advices {
    slip: {
      id: number;
      advice: string;
    };
  }

  const handleClick = async () => {
    let response = await axios.get(`https://api.adviceslip.com/advice`);
    let data = await response.data;
    setAdvices(data);
    console.log(data);
  };

  const [advices, setAdvices] = useState<advices | null>(null);

  const slipAdvice = advices?.slip?.advice;
  const slipId = advices?.slip?.id;

  return (
    <div className="bg-darkGrayishBlue pt-10 md:pt-12 px-6 md:px-12 w-[343px] md:w-[540px] rounded-[10px] relative">
      <div className="flex flex-col items-center gap-y-6 mb-6 md:mb-10">
        <h2 className="text-neonGreen text-[11px] md:text-[13px] font-extrabold tracking-[3.4px] md:tracking-[4px] uppercase">
          {advices === null ? "ADVICE #117" : `ADVICE #${slipId}`}
        </h2>
        <h1 className="text-lightCyan text-2xl md:text-[28px] font-extrabold text-center md:tracking-[-0.3px] md:leading-10">
          {advices === null
            ? "“It is easy to sit up and take notice, what's difficult is getting up and taking action.”"
            : slipAdvice}
        </h1>
      </div>

      <div className="flex flex-row justify-between items-center mb-[32px]">
        <hr className="w-[122px] md:w-[196px]" />
        <img src={TwoLine} alt="TwoLine" />
        <hr className="w-[122px] md:w-[196px]" />
      </div>

      <div
        onClick={() => handleClick()}
        className="items-center flex justify-center -mb-8 cursor-pointer"
      >
        <img src={Dice} alt="Dice" />
      </div>
    </div>
  );
};

export default GeneratorContainer;
