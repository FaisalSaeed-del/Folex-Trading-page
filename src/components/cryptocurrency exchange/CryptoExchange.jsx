import React from "react";
import Folex1 from "../../assets/images/folex1.svg";
import Folex2 from "../../assets/images/folex2.svg";
import Folex3 from "../../assets/images/folex3.svg";
import Chart1 from "../../assets/images/chart1.png";
import Chart2 from "../../assets/images/chart2.png";
import Chart3 from "../../assets/images/chart3.png";
import Chart4 from "../../assets/images/chart4.png";

const CryptoExchange = () => {
  return (
    <div className="bg-[#1F084D]">
      <section className="container">
        <div className="flex">
          <div>
            <div className="folex-card max-w-lg justify-center py-10 px-6 flex gap-9 mb-5">
              <div className="self-center">
                <img src={Folex1} alt="" />
              </div>
              <div>
                <div className="max-w-[369px] mb-5">
                  <h1 className="text-white text-xl font-normal">
                    Full Range of Product
                  </h1>
                </div>
                <div className="max-w-[278px]">
                  <p className="text-base text-[#ECECEC] font-normal">
                    Cold and hot wallet technology developed by the world‘s top
                    security team. Coin loss has never occured..
                  </p>
                </div>
              </div>
            </div>
            <div className="folex-card max-w-lg justify-center  py-10 px-6 flex gap-9 mb-5">
              <div className="self-center">
                <img src={Folex2} alt="" />
              </div>
              <div>
                <div className="max-w-[369px] mb-5">
                  <h1 className="text-white text-xl font-normal">
                    SECURE WALLET TECHNOLOGY
                  </h1>
                </div>
                <div className="max-w-[278px]">
                  <p className="text-base text-[#ECECEC] font-normal">
                    Cold and hot wallet technology developed by the world‘s top
                    security team. Coin loss has never occured..
                  </p>
                </div>
              </div>
            </div>
            <div className="folex-card max-w-lg justify-center  py-10 px-6 flex gap-9">
              <div className="self-center">
                <img src={Folex3} alt="" />
              </div>
              <div>
                <div className="max-w-[369px] mb-5">
                  <h1 className="text-white text-xl font-normal">
                    Full Range of Product
                  </h1>
                </div>
                <div className="max-w-[278px]">
                  <p className="text-base text-[#ECECEC] font-normal">
                    Cold and hot wallet technology developed by the world‘s top
                    security team. Coin loss has never occured..
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <h1 className="text-5xl font-bold text-white text-center">
                Folex
              </h1>
            </div>
            <div className="max-w-[686px] mb-14 m-auto">
              <h2 className="text-4xl text-white font-normal">
                The most trusted cryptocurrency exchange
              </h2>
            </div>
            <div>
              <div className="flex flex-wrap px-10 mb-5">
                <img
                  width="full"
                  className=" pt-20 Chart-card"
                  src={Chart1}
                  alt=""
                />
                <img src={Chart2} alt="" />
              </div>
              <div className="flex flex-wrap">
                <img width="full" src={Chart3} alt="" />
                <img src={Chart4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoExchange;
