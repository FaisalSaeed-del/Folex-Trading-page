import React from "react";
import BTC from "../../assets/images/btc.svg";
import ETH from "../../assets/images/eth.svg";
import ITC from "../../assets/images/itc.svg";
import Left from "../../assets/images/left.png";
import Right from "../../assets/images/right.png";
const Hero = () => {
  return (
    <div className="bg-[#1F084D]">
      <section className="container">
        <div className=" flex py-20 px-20 flex-wrap md:flex-nowrap sm:flex-wrap">
          <div>
            <div className="max-w-[574px] mb-9">
              <h1 className="text-5xl font-black text-[#FFFFFF]">
                Fastest and Easiest way to
              </h1>
            </div>
            <div className="max-w-[492px] mb-14">
              <h1 className="text-[64px] text-[#FEC039] font-extrabold]">
                Buy, Sell & Trade
              </h1>
            </div>
            <div className="max-w-[414px] mb-10">
              <p className="text-white font-normal text-xl">
                The place where you can trade cryptocurrencies with global
                market
              </p>
            </div>
            <div className="mb-[50px]">
              <button className="text-[#FFFFFF] bg-[#F18140] py-2 px-5 text-xl font-bold rounded-lg">
                Get Started
              </button>
            </div>
            <div>
              <div className="flex gap-9 flex-wrap">
                <div className="flex gap-3">
                  <img src={BTC} alt="" />
                  <span className="text-white text-sm self-center">
                    BitCoin
                  </span>
                </div>
                <div className="flex gap-3">
                  <img src={ITC} alt="" />
                  <span className="text-white text-sm self-center">
                    BitCoin
                  </span>
                </div>
                <div className="flex gap-3">
                  <img src={ETH} alt="" />
                  <span className="text-white text-sm self-center">
                    BitCoin
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex sm:hidden gradient-div">
            <div className="relative left-28">
              <img src={Left} alt="" width="100%" />
            </div>
            <div className="">
              <img src={Right} alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
