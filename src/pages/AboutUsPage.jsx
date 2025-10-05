import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AboutUsPage = () => {
  const BASE_WIDTH = 1440;
  const BASE_HEIGHT = 7916;
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const computed = window.innerWidth / BASE_WIDTH;
      setScale(computed);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => (document.body.style.overflowX = "");
  }, []);

  return (
    <>
      <div className="w-full bg-black overflow-hidden">
        <div
          style={{
            width: `${BASE_WIDTH}px`,
            height: `${BASE_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            left: 0,
            top: 0,
            overflow: "hidden",
          }}
        >
          <div
            id="_7078_8165__About_Us_Page"
            className="relative overflow-hidden bg-black h-[6516.0px] w-[1440.00px]"
          >
            <div
              id="_7078_8166__Ellipse_827"
              className="absolute bg-[rgba(111,28,176,0.80)] h-[180.00px] w-[178.00px] left-[-48.00px] top-[-48.00px] rounded-[50%]"
              style={{
                filter: "blur(200.0px)",
              }}
            ></div>

            <div
              id="_7078_8167__Ellipse_1"
              className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] rounded-[50%] right-[114.00px] top-[210.00px]"
              style={{
                filter: "blur(600.0px)",
              }}
            ></div>

            <div
              id="_7078_8168__Ellipse_828"
              className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] rounded-[50%] left-[17.00px] top-[1450.00px]"
              style={{
                filter: "blur(600.0px)",
              }}
            ></div>

            <div
              id="_7078_8169__Ellipse_829"
              className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] left-[calc(50%-544.00px)] rounded-[50%] top-[2553.00px]"
              style={{
                filter: "blur(600.0px)",
              }}
            ></div>

            <div
              id="_7078_8170__Ellipse_830"
              className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] left-[calc(50%-544.00px)] rounded-[50%] top-[3220.00px]"
              style={{
                filter: "blur(600.0px)",
              }}
            ></div>

            <div
              id="_7078_8171__Ellipse_834"
              className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] rounded-[50%] right-[0.00px] top-[4204.00px]"
              style={{
                filter: "blur(600.0px)",
              }}
            ></div>

            <div
              id="_7078_10483__Nav_bar"
              className="absolute h-[76.00px] w-[1280.00px] left-[calc(50%-720.00px)] flex flex-row justify-between items-center flex-nowrap px-20 py-6 top-[0.00px]"
            >
              <div
                id="I7078_10483_3423_2774__Frame"
                className="relative overflow-hidden h-[56.00px] w-[105.00px]"
              >
                <img
                  id="I7078_10483_3423_2775__XMLID_1_"
                  src="assets/images/xmlid_1__3.svg"
                  alt="XMLID_1_"
                  className="absolute left-[calc(100%_*_0.00)]"
                />
              </div>

              <div
                id="I7078_10483_3423_2923__Nav_item"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[44.00px] flex flex-row justify-start items-center flex-nowrap gap-2 p-4 rounded-[100px]"
              >
                <Link
                  to="/"
                  id="I7078_10483_3423_2923_3423_2840__Frame_1007"
                  className="relative backdrop-blur-[200.0px] h-[24.00px] w-[56.00px] flex flex-row justify-center items-center flex-nowrap gap-[25px] px-[34px] py-2.5 rounded-[100px]"
                >
                  <span
                    id="I7078_10483_3423_2923_3423_2841__Home"
                    className="flex justify-start text-left items-start h-[24.00px] w-[43.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Home
                    </span>
                  </span>
                </Link>

                <Link
                  to="/AboutUsPage"
                  id="I7078_10483_3423_2923_3423_2842__Frame_1008"
                  className="relative border h-[22.00px] w-[52.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-[35px] py-2.5 rounded-[100px] border-solid"
                >
                  <span
                    id="I7078_10483_3423_2923_3423_2843__About_us"
                    className="flex justify-start text-left items-start h-[24.00px] w-[62.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      About us
                    </span>
                  </span>
                </Link>

                <div
                  id="I7078_10483_3423_2923_3423_2844__Frame_1009"
                  className="relative h-[24.00px] w-[54.00px] flex flex-col justify-center items-center flex-nowrap gap-2.5 px-[35px] py-2.5 rounded-[100px]"
                >
                  <div
                    id="I7078_10483_3423_2923_3423_2845__Frame_8"
                    className="relative h-[24.00px] flex flex-row justify-center items-center flex-nowrap gap-1"
                  >
                    <span
                      id="I7078_10483_3423_2923_3423_2846__Services"
                      className="flex justify-start text-left items-start h-[24.00px] w-[59.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Services
                      </span>
                    </span>
                    <div
                      id="I7078_10483_3423_2923_3423_2847__Frame"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7078_10483_3423_2923_3423_2848__Vector"
                        src="assets/images/vector_105.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.19)] top-[calc(100%_*_0.45)]"
                      />
                    </div>
                  </div>
                </div>

                <div
                  id="I7078_10483_3423_2923_3423_2849__Frame_1010"
                  className="relative h-[24.00px] w-[54.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-[35px] py-2.5 rounded-[100px]"
                >
                  <span
                    id="I7078_10483_3423_2923_3423_2850__White_label"
                    className="flex justify-center text-center items-start h-[24.00px] w-[80.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      White label
                    </span>
                  </span>
                </div>

                <div
                  id="I7078_10483_3423_2923_3423_2851__Frame_1011"
                  className="relative h-[24.00px] w-[54.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-[35px] py-2.5 rounded-[100px]"
                >
                  <span
                    id="I7078_10483_3423_2923_3423_2852__Contact_us"
                    className="flex justify-center text-center items-start h-[24.00px] w-[76.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Contact us
                    </span>
                  </span>
                </div>
              </div>

              <div
                id="I7078_10483_3531_31239__Frame_1596"
                className="relative h-[56.00px] flex flex-row justify-end items-center flex-nowrap gap-6"
              >
                <div
                  id="I7078_10483_3531_33190__Frame_1597"
                  className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[24.00px] w-[24.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-4 rounded-[100px]"
                >
                  <div
                    id="I7078_10483_3531_29364__cart"
                    className="relative overflow-hidden h-[24.00px] w-[24.00px]"
                  >
                    <img
                      id="I7078_10483_3531_29364_3477_27785__Group"
                      src="assets/images/group_33.svg"
                      alt="Group"
                      className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.13)]"
                    />
                  </div>
                </div>

                <div
                  id="I7078_10483_3423_2790__Frame_1005"
                  className="relative bg-[linear-gradient(181.50027606835522deg,rgba(99,49,241,1.00)_0.0%,rgba(99,49,241,1.00)_53.00902724266052%,rgba(109,67,227,1.00)_68.56226921081543%,rgba(159,99,255,1.00)_100.0%)] h-[21.00px] w-[76.00px] flex flex-row justify-center items-center flex-nowrap gap-2 px-9 py-4 rounded-[100px] border-solid border-[1.5px]"
                >
                  <div
                    id="I7078_10483_3423_2791__Frame_602"
                    className="relative h-[24.00px] w-[24.00px]"
                  >
                    <img
                      id="I7078_10483_3423_2792__Vector"
                      src="assets/images/vector_106.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.57)] top-[calc(100%_*_0.30)]"
                    />
                    <img
                      id="I7078_10483_3423_2793__Vector"
                      src="assets/images/vector_107.svg"
                      alt="Vector"
                      className="absolute"
                    />
                  </div>

                  <span
                    id="I7078_10483_3423_2794__Sign_In"
                    className="flex justify-end text-right items-start h-[24.00px] w-[47.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Sign In
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div
              id="_7078_10524__Frame_1586"
              className="absolute h-[628.00px] w-[1280.00px] left-[calc(50%-721.00px)] flex flex-row justify-start items-center flex-nowrap gap-[72px] p-20 top-[4448.00px]"
            >
              <div
                id="_7078_10525__Card_box"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[396.00px] w-[380.00px] flex flex-col justify-start items-center flex-nowrap gap-[60px] px-16 py-[116px] rounded-[30px]"
              >
                <div
                  id="I7078_10525_3426_4602__Frame"
                  className="relative overflow-hidden h-[82.00px] w-[154.00px]"
                >
                  <img
                    id="I7078_10525_3426_4603__XMLID_1_"
                    src="assets/images/xmlid_1__4.svg"
                    alt="XMLID_1_"
                    className="absolute"
                  />
                </div>

                <span
                  id="I7078_10525_3426_4604__Still_Have_A_Questio"
                  className="flex justify-center text-center items-start h-[144.00px] w-[380.00px] relative"
                >
                  <span
                    className="bg-white bg-clip-text text-transparent not-italic text-[64.0px] font-medium leading-[72.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Still Have
                    <br />A Questions?
                  </span>
                </span>
                <div
                  id="I7078_10525_3426_4605__Frame_316"
                  className="relative h-[50.00px] w-[380.00px] flex flex-row justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7078_10525_3426_4606__Group_83"
                    className="relative h-[50.00px] w-[50.00px]"
                  >
                    <div
                      id="I7078_10525_3426_4607__Ellipse_800"
                      className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                    ></div>

                    <div
                      id="I7078_10525_3426_4608__Frame"
                      className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                    >
                      <img
                        id="I7078_10525_3426_4610__Vector"
                        src="assets/images/vector_108.svg"
                        alt="Vector"
                        className="absolute"
                      />
                    </div>
                  </div>

                  <div
                    id="I7078_10525_3426_4611__Group_79"
                    className="relative h-[50.00px] w-[50.00px]"
                  >
                    <div
                      id="I7078_10525_3426_4612__Ellipse_800"
                      className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                    ></div>

                    <div
                      id="I7078_10525_3426_4613__Frame"
                      className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                    >
                      <img
                        id="I7078_10525_3426_4615__Vector"
                        src="assets/images/vector_109.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.26)]"
                      />
                    </div>
                  </div>

                  <div
                    id="I7078_10525_3426_4616__Group_80"
                    className="relative h-[50.00px] w-[50.00px]"
                  >
                    <div
                      id="I7078_10525_3426_4617__Ellipse_800"
                      className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                    ></div>

                    <div
                      id="I7078_10525_3426_4618__Frame"
                      className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                    >
                      <img
                        id="I7078_10525_3426_4619__Group"
                        src="assets/images/group_34.svg"
                        alt="Group"
                        className="absolute"
                      />
                    </div>
                  </div>

                  <div
                    id="I7078_10525_3426_4622__Group_81"
                    className="relative h-[50.00px] w-[50.00px]"
                  >
                    <div
                      id="I7078_10525_3426_4623__Ellipse_800"
                      className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                    ></div>

                    <div
                      id="I7078_10525_3426_4624__ri_twitter-x-line"
                      className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                    >
                      <img
                        id="I7078_10525_3426_4625__Vector"
                        src="assets/images/vector_110.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.08)]"
                      />
                    </div>
                  </div>

                  <div
                    id="I7078_10525_3426_4626__Group_84"
                    className="relative h-[50.00px] w-[50.00px]"
                  >
                    <div
                      id="I7078_10525_3426_4627__Ellipse_800"
                      className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                    ></div>

                    <div
                      id="I7078_10525_3426_4628__Frame"
                      className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                    >
                      <img
                        id="I7078_10525_3426_4630__Group_166"
                        src="assets/images/group_166_1.svg"
                        alt="Group_166"
                        className="absolute top-[calc(100%_*_0.14)]"
                      />
                    </div>
                  </div>

                  <div
                    id="I7078_10525_3426_4633__Group_85"
                    className="relative h-[50.00px] w-[50.00px]"
                  >
                    <div
                      id="I7078_10525_3426_4634__Ellipse_800"
                      className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                    ></div>

                    <div
                      id="I7078_10525_3426_4635__Frame"
                      className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                    >
                      <img
                        id="I7078_10525_3426_4638__14_tiktok"
                        src="assets/images/14tiktok_1.svg"
                        alt="_14_tiktok"
                        className="absolute"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7078_10526__Frame_589"
                className="relative h-[624.00px] w-[700.00px] flex flex-col justify-start items-start flex-nowrap gap-12"
              >
                <div
                  id="_7078_10527__Frame_588"
                  className="relative h-[504.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-6"
                >
                  <div
                    id="_7078_10528__Frame_586"
                    className="relative h-[96.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-8"
                  >
                    <div
                      id="_7078_10529__Input_filled"
                      className="relative h-[96.00px] w-[334.00px] flex flex-col justify-start items-start flex-nowrap gap-2"
                    >
                      <span
                        id="I7078_10529_3390_26178__Label"
                        className="flex justify-start text-left items-start h-[28.00px] w-[334.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Name
                        </span>
                      </span>
                      <div
                        id="I7078_10529_3390_26179__Frame_576"
                        className="relative border h-[26.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                      >
                        <div
                          id="I7078_10529_3390_26235__Frame_1408"
                          className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                        >
                          <div
                            id="I7078_10529_3390_26836__Frame_1409"
                            className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                          >
                            <span
                              id="I7078_10529_3390_26180__Enter_your_name___"
                              className="flex justify-start text-left items-start h-[28.00px] w-[302.00px] relative"
                            >
                              <span
                                className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                                style={{
                                  fontFamily: "Outfit",
                                }}
                              >
                                Enter your name...
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_7078_10530__Input_filled"
                      className="relative h-[96.00px] w-[334.00px] flex flex-col justify-start items-start flex-nowrap gap-2"
                    >
                      <span
                        id="I7078_10530_3390_26178__Label"
                        className="flex justify-start text-left items-start h-[28.00px] w-[334.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Email Address
                        </span>
                      </span>
                      <div
                        id="I7078_10530_3390_26179__Frame_576"
                        className="relative border h-[26.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                      >
                        <div
                          id="I7078_10530_3390_26235__Frame_1408"
                          className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                        >
                          <div
                            id="I7078_10530_3390_26836__Frame_1409"
                            className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                          >
                            <span
                              id="I7078_10530_3390_26180__Enter_your_name___"
                              className="flex justify-start text-left items-start h-[28.00px] w-[302.00px] relative"
                            >
                              <span
                                className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                                style={{
                                  fontFamily: "Outfit",
                                }}
                              >
                                Enter your name...
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_7078_10531__Frame_589"
                    className="relative h-[96.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-8"
                  >
                    <div
                      id="_7078_10532__Input_filled"
                      className="relative h-[96.00px] w-[334.00px] flex flex-col justify-start items-start flex-nowrap gap-2"
                    >
                      <span
                        id="I7078_10532_3390_26178__Label"
                        className="flex justify-start text-left items-start h-[28.00px] w-[334.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          WhatsApp/Phone
                        </span>
                      </span>
                      <div
                        id="I7078_10532_3390_26179__Frame_576"
                        className="relative border h-[26.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                      >
                        <div
                          id="I7078_10532_3390_26235__Frame_1408"
                          className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                        >
                          <div
                            id="I7078_10532_3390_26836__Frame_1409"
                            className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                          >
                            <span
                              id="I7078_10532_3390_26180__Enter_your_name___"
                              className="flex justify-start text-left items-start h-[28.00px] w-[302.00px] relative"
                            >
                              <span
                                className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                                style={{
                                  fontFamily: "Outfit",
                                }}
                              >
                                Enter your number...
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_7078_10533__Input_filled"
                      className="relative h-[96.00px] w-[334.00px] flex flex-col justify-start items-start flex-nowrap gap-2"
                    >
                      <span
                        id="I7078_10533_3390_26178__Label"
                        className="flex justify-start text-left items-start h-[28.00px] w-[334.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Which are You Looking for Support in?
                        </span>
                      </span>
                      <div
                        id="I7078_10533_3390_26179__Frame_576"
                        className="relative border h-[26.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                      >
                        <div
                          id="I7078_10533_3390_26235__Frame_1408"
                          className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                        >
                          <div
                            id="I7078_10533_3390_26836__Frame_1409"
                            className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                          >
                            <span
                              id="I7078_10533_3390_26180__Enter_your_name___"
                              className="flex justify-start text-left items-start h-[28.00px] w-[262.00px] relative"
                            >
                              <span
                                className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                                style={{
                                  fontFamily: "Outfit",
                                }}
                              >
                                Choose services
                              </span>
                            </span>
                          </div>

                          <div
                            id="I7078_10533_3390_26834__chevron-down"
                            className="relative overflow-hidden h-[24.00px] w-[24.00px]"
                          >
                            <img
                              id="I7078_10533_3390_26834_5616_226175__elements"
                              src="assets/images/elements_19.svg"
                              alt="elements"
                              className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.38)]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_7078_10534__Input_filled"
                    className="relative h-[264.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2"
                  >
                    <span
                      id="I7078_10534_3390_26178__Label"
                      className="flex justify-start text-left items-start h-[28.00px] w-[700.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        How Can We Help?
                      </span>
                    </span>
                    <div
                      id="I7078_10534_3390_26179__Frame_576"
                      className="relative border h-[194.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                    >
                      <div
                        id="I7078_10534_3390_26235__Frame_1408"
                        className="relative h-[196.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                      >
                        <div
                          id="I7078_10534_3390_26836__Frame_1409"
                          className="relative h-[196.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                        >
                          <span
                            id="I7078_10534_3390_26180__Enter_your_name___"
                            className="flex justify-start text-left items-start h-[196.00px] w-[668.00px] relative"
                          >
                            <span
                              className="bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Message goes in here...
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_7078_10535__Button"
                  className="relative bg-[linear-gradient(181.50027606835522deg,rgba(99,49,241,1.00)_0.0%,rgba(99,49,241,1.00)_53.00902724266052%,rgba(109,67,227,1.00)_68.56226921081543%,rgba(159,99,255,1.00)_100.0%)] border h-[30.00px] w-[calc(100%-48px-48px)] flex flex-row justify-center items-center flex-nowrap gap-3 px-12 py-5 rounded-[100px] border-solid"
                >
                  <div
                    id="I7078_10535_3390_27447__Frame_456"
                    className="relative h-[32.00px] w-[32.00px]"
                  >
                    <img
                      id="I7078_10535_3390_27447_3390_26772__Vector"
                      src="assets/images/vector_111.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.57)] top-[calc(100%_*_0.30)]"
                    />
                    <img
                      id="I7078_10535_3390_27447_3390_26773__Vector"
                      src="assets/images/vector_112.svg"
                      alt="Vector"
                      className="absolute"
                    />
                  </div>

                  <span
                    id="I7078_10535_3390_27210__Sign_Up"
                    className="flex justify-center text-center items-start h-[32.00px] w-[153.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Send Message
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div
              id="_7078_10622__Frame_1585"
              className="absolute overflow-hidden h-[1280.00px] w-[1440.00px] left-[calc(50%-721.00px)] top-[5236.00px]"
            >
              <div
                id="I7078_10622_3524_30127__Ellipse_837"
                className="absolute bg-[rgba(48,16,83,0.80)] h-[1072.00px] w-[1072.00px] left-[calc(50%-536.00px)] rounded-[50%] bottom-[0.00px]"
                style={{
                  filter: "blur(600.0px)",
                }}
              ></div>

              <div
                id="I7078_10622_3524_30128__Frame_1582"
                className="absolute h-[1280.00px] w-[1440.00px] left-[calc(50%-720.00px)] flex flex-col justify-start items-start flex-nowrap top-[0.00px]"
              >
                <div
                  id="I7078_10622_3524_30129__Frame_1577"
                  className="relative h-[332.00px] w-[calc(100%-80px-80px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 pt-20 pb-0 px-20"
                >
                  <div
                    id="I7078_10622_3524_30130__Frame_1204"
                    className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[212.00px] w-[calc(100%-60px-60px)] flex flex-col justify-start items-center flex-nowrap gap-12 p-[60px] rounded-[72px]"
                  >
                    <div
                      id="I7078_10622_3524_30131__Frame_1203"
                      className="relative h-[80.00px] flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7078_10622_3524_30132__Frame"
                        className="relative overflow-hidden h-[80.00px] w-[150.00px]"
                      >
                        <img
                          id="I7078_10622_3524_30133__XMLID_1_"
                          src="assets/images/xmlid_1__5.svg"
                          alt="XMLID_1_"
                          className="absolute left-[calc(100%_*_0.00)]"
                        />
                      </div>

                      <img
                        id="I7078_10622_3524_30134__Group"
                        src="assets/images/group_35.svg"
                        alt="Group"
                        className="relative"
                      />
                    </div>

                    <div
                      id="I7078_10622_3524_30163__Frame_527"
                      className="relative h-[84.00px] w-[calc(100%-0px-0px)] flex flex-row justify-between items-center flex-nowrap"
                    >
                      <div
                        id="I7078_10622_3524_30164__Frame_130"
                        className="relative h-[84.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-2"
                      >
                        <span
                          id="I7078_10622_3524_30165__Subscribe_to_Our_New"
                          className="flex justify-start text-left items-start h-[48.00px] w-[601.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[40.0px] font-medium leading-[48.00px]"
                            style={{
                              fontFamily: "Outfit",
                            }}
                          >
                            Subscribe to Our Newsletter
                          </span>
                        </span>
                        <span
                          id="I7078_10622_3524_30166__Join_the_25000__clie"
                          className="flex justify-start text-left items-start h-[28.00px] w-[601.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                            style={{
                              fontFamily: "Outfit",
                            }}
                          >
                            Join the 25000+ client, in our company
                          </span>
                        </span>
                      </div>

                      <div
                        id="I7078_10622_3524_30167__Subscribe_filled"
                        className="relative bg-white shadow-[0.0px_4.0px_40.0px_0.0px_rgba(0,0,0,0.12)] h-[56.00px] w-[519.00px] flex flex-row justify-start items-center flex-nowrap gap-4 pl-8 pr-2 py-2 rounded-[99px]"
                      >
                        <span
                          id="I7078_10622_3524_30167_3524_29553__Enter_your_email"
                          className="flex justify-start text-left items-start h-[28.00px] w-[307.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-[rgba(112,117,127,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                            style={{
                              fontFamily: "Outfit",
                            }}
                          >
                            Enter your email
                          </span>
                        </span>
                        <div
                          id="I7078_10622_3524_30167_3524_29599__Button"
                          className="relative bg-[linear-gradient(181.50027606835522deg,rgba(99,49,241,1.00)_0.0%,rgba(99,49,241,1.00)_53.00902724266052%,rgba(109,67,227,1.00)_68.56226921081543%,rgba(159,99,255,1.00)_100.0%)] border h-[22.00px] flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px] border-solid"
                        >
                          <div
                            id="I7078_10622_3524_30167_3524_29599_3390_27462__Frame_457"
                            className="relative h-[24.00px] w-[24.00px]"
                          >
                            <img
                              id="I7078_10622_3524_30167_3524_29599_3390_27462_3390_26772__Vector"
                              src="assets/images/vector_113.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.57)] top-[calc(100%_*_0.30)]"
                            />
                            <img
                              id="I7078_10622_3524_30167_3524_29599_3390_27462_3390_26773__Vector"
                              src="assets/images/vector_114.svg"
                              alt="Vector"
                              className="absolute"
                            />
                          </div>

                          <span
                            id="I7078_10622_3524_30167_3524_29599_3390_27225__Sign_Up"
                            className="flex justify-center text-center items-start h-[24.00px] w-[70.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Subscribe
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="I7078_10622_3524_30168__Frame_802"
                  className="relative h-[436.00px] w-[calc(100%-80px-80px)] flex flex-row justify-between items-start flex-nowrap p-20"
                >
                  <div
                    id="I7078_10622_3524_30169__Frame_1576"
                    className="relative h-[436.00px] w-[322.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                  >
                    <div
                      id="I7078_10622_4721_156208__Frame_2085668560"
                      className="relative h-[300.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-6"
                    >
                      <span
                        id="I7078_10622_3524_30170__Got_Questions__Call_"
                        className="flex justify-start text-left items-start h-[96.00px] w-[322.00px] relative"
                      >
                        <span
                          className="bg-white bg-clip-text text-transparent not-italic text-[40.0px] font-medium leading-[48.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Got Questions? <br />
                          Call us !
                        </span>
                      </span>
                      <div
                        id="I7078_10622_3524_30171__Frame_1575"
                        className="relative h-[180.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-end flex-nowrap gap-4"
                      >
                        <div
                          id="I7078_10622_3524_30172__Frame_529"
                          className="relative h-[84.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                        >
                          <div
                            id="I7078_10622_3524_30173__Group_79"
                            className="relative h-[32.00px] w-[32.00px]"
                          >
                            <div
                              id="I7078_10622_3524_30174__Ellipse_800"
                              className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[32.00px] w-[32.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                            ></div>

                            <div
                              id="I7078_10622_3524_30175__location"
                              className="absolute overflow-hidden h-[19.20px] w-[19.20px] left-[calc(50%-9.60px)] top-[calc(50%-9.60px)]"
                            >
                              <img
                                id="I7078_10622_3524_30175_3524_28791__Vector"
                                src="assets/images/vector_115.svg"
                                alt="Vector"
                                className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.08)]"
                              />
                            </div>
                          </div>

                          <span
                            id="I7078_10622_3524_30176__Head_office__Metro_S"
                            className="flex justify-start text-left items-start h-[84.00px] w-[266.00px] relative"
                          >
                            <span
                              className="bg-[rgba(243,243,244,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Head office: Metro Solver Limited Grantham Road,
                              London E12 5LX, United Kingdom
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_10622_3524_30177__Frame_797"
                          className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                        >
                          <div
                            id="I7078_10622_3524_30178__Group_79"
                            className="relative h-[32.00px] w-[32.00px]"
                          >
                            <div
                              id="I7078_10622_3524_30179__Ellipse_800"
                              className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[32.00px] w-[32.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                            ></div>

                            <div
                              id="I7078_10622_3524_30180__call"
                              className="absolute h-[19.20px] w-[19.20px] left-[calc(50%-9.60px)] top-[calc(50%-9.60px)]"
                            >
                              <img
                                id="I7078_10622_3524_30180_3524_28822__vuesax_linear_call"
                                src="assets/images/vuesaxlinearcall_3.svg"
                                alt="vuesax_linear_call"
                                className="absolute"
                              />
                            </div>
                          </div>

                          <span
                            id="I7078_10622_3524_30181___447936_455446"
                            className="flex justify-start text-left items-start h-[28.00px] w-[274.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              +447936 455446
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_10622_3524_30182__Frame_528"
                          className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                        >
                          <div
                            id="I7078_10622_3524_30183__Group_81"
                            className="relative h-[32.00px] w-[32.00px]"
                          >
                            <div
                              id="I7078_10622_3524_30184__Ellipse_800"
                              className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[32.00px] w-[32.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                            ></div>

                            <div
                              id="I7078_10622_3524_30185__sms"
                              className="absolute h-[19.20px] w-[19.20px] left-[calc(50%-9.60px)] top-[calc(50%-9.60px)]"
                            >
                              <img
                                id="I7078_10622_3524_30185_3524_28828__vuesax_linear_sms"
                                src="assets/images/vuesaxlinearsms_1.svg"
                                alt="vuesax_linear_sms"
                                className="absolute"
                              />
                            </div>
                          </div>

                          <span
                            id="I7078_10622_3524_30186__official_metrosolver"
                            className="flex justify-start text-left items-start h-[28.00px] w-[201.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              official@metrosolver.com
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      id="I7078_10622_4721_127533__Input_filled"
                      className="relative h-[96.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2"
                    >
                      <span
                        id="I7078_10622_4721_127533_3390_26178__Label"
                        className="flex justify-start text-left items-start h-[28.00px] w-[322.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Country Currency
                        </span>
                      </span>
                      <div
                        id="I7078_10622_4721_127533_3390_26179__Frame_576"
                        className="relative border h-[26.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                      >
                        <div
                          id="I7078_10622_4721_127533_3390_26235__Frame_1408"
                          className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                        >
                          <div
                            id="I7078_10622_4721_127533_3390_26836__Frame_1409"
                            className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                          >
                            <div
                              id="I7078_10622_4721_127533_3447_42332__United_Kingdom"
                              className="relative overflow-hidden h-[24.00px] w-[24.00px]"
                            >
                              <img
                                id="I7078_10622_4721_127533_3447_42332_4731_129436__Group"
                                src="assets/images/group_36.svg"
                                alt="Group"
                                className="absolute"
                              />
                            </div>

                            <span
                              id="I7078_10622_4721_127533_3390_26180__Enter_your_name___"
                              className="flex justify-start text-left items-start h-[28.00px] w-[220.00px] relative"
                            >
                              <span
                                className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                                style={{
                                  fontFamily: "Outfit",
                                }}
                              >
                                GBP - British Pound
                              </span>
                            </span>
                          </div>

                          <div
                            id="I7078_10622_4721_127533_3390_26834__chevron-down"
                            className="relative overflow-hidden h-[24.00px] w-[24.00px]"
                          >
                            <img
                              id="I7078_10622_4721_127533_3390_26834_5616_226175__elements"
                              src="assets/images/elements_20.svg"
                              alt="elements"
                              className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.38)]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="I7078_10622_3524_30187__Frame_534"
                    className="relative h-[224.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                  >
                    <span
                      id="I7078_10622_3524_30188__Company"
                      className="flex justify-center text-center items-start h-[28.00px] w-[78.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Company
                      </span>
                    </span>
                    <div
                      id="I7078_10622_3524_30189__Frame_532"
                      className="relative h-[180.00px] w-[123.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                    >
                      <span
                        id="I7078_10622_3524_30190__Home"
                        className="flex justify-start text-left items-start h-[28.00px] w-[123.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Home
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30191__About_us"
                        className="flex justify-start text-left items-start h-[28.00px] w-[123.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          About us
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30192__Our_Team"
                        className="flex justify-start text-left items-start h-[28.00px] w-[123.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Our Team
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30193__User_Profile"
                        className="flex justify-start text-left items-start h-[28.00px] w-[93.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          User Profile
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30194__White_Labelling"
                        className="flex justify-start text-left items-start h-[28.00px] w-[123.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          White Labelling
                        </span>
                      </span>
                    </div>
                  </div>

                  <div
                    id="I7078_10622_3524_30195__Frame_535"
                    className="relative h-[186.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                  >
                    <span
                      id="I7078_10622_3524_30196__About_Us"
                      className="flex justify-start text-left items-start h-[28.00px] w-[74.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        About Us
                      </span>
                    </span>
                    <div
                      id="I7078_10622_3524_30197__Frame_533"
                      className="relative h-[142.00px] w-[115.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                    >
                      <span
                        id="I7078_10622_3524_30198__Our_Stories"
                        className="flex justify-start text-left items-start h-[28.00px] w-[115.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Our Stories
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30199__Career"
                        className="flex justify-start text-left items-start h-[28.00px] w-[115.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Career
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30200__Send_Message"
                        className="flex justify-start text-left items-start h-[28.00px] w-[115.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Send Message
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3531_29314__Blog"
                        className="flex justify-start text-left items-start h-[28.00px] w-[115.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Blog
                        </span>
                      </span>
                    </div>
                  </div>

                  <div
                    id="I7078_10622_3524_30201__Frame_536"
                    className="relative h-[224.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                  >
                    <span
                      id="I7078_10622_3524_30202__Support"
                      className="flex justify-start text-left items-start h-[28.00px] w-[65.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Support
                      </span>
                    </span>
                    <div
                      id="I7078_10622_3524_30203__Frame_533"
                      className="relative h-[180.00px] w-[172.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                    >
                      <span
                        id="I7078_10622_3524_30204__Help_Center"
                        className="flex justify-start text-left items-start h-[28.00px] w-[172.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Help Center
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30205__Contact_Us"
                        className="flex justify-start text-left items-start h-[28.00px] w-[172.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Contact Us
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30206__Privacy_Policy"
                        className="flex justify-start text-left items-start h-[28.00px] w-[172.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Privacy Policy
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30207__Terms_and_Conditions"
                        className="flex justify-start text-left items-start h-[28.00px] w-[172.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Terms and Conditions
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30208__Start_Earning"
                        className="flex justify-start text-left items-start h-[28.00px] w-[172.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Start Earning
                        </span>
                      </span>
                    </div>
                  </div>

                  <div
                    id="I7078_10622_3524_30209__Frame_537"
                    className="relative h-[414.00px] w-[240.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                  >
                    <span
                      id="I7078_10622_3524_30210__Services"
                      className="flex justify-start text-left items-start h-[28.00px] w-[67.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Services
                      </span>
                    </span>
                    <div
                      id="I7078_10622_3524_30211__Frame_533"
                      className="relative h-[370.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                    >
                      <span
                        id="I7078_10622_3524_30212__Digital_Marketing"
                        className="flex justify-start text-left items-start h-[28.00px] w-[240.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Digital Marketing
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30213__Creative_Writing_Sol"
                        className="flex justify-start text-left items-start h-[28.00px] w-[240.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Creative Writing Solution
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30214__Web___Software_Devel"
                        className="flex justify-start text-left items-start h-[28.00px] w-[240.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Web &amp; Software Development
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30215__E-Commerce_Solution"
                        className="flex justify-start text-left items-start h-[28.00px] w-[240.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          E-Commerce Solution
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30216__Graphic_Design"
                        className="flex justify-start text-left items-start h-[28.00px] w-[123.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Graphic Design
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30217__Multimedia___Video_E"
                        className="flex justify-start text-left items-start h-[28.00px] w-[240.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Multimedia &amp; Video Editing
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30218__Merchandise"
                        className="flex justify-start text-left items-start h-[28.00px] w-[240.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Merchandise
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30219__Premium_Website"
                        className="flex justify-start text-left items-start h-[28.00px] w-[240.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Premium Website
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30220__Premium_Domains"
                        className="flex justify-start text-left items-start h-[28.00px] w-[240.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Premium Domains
                        </span>
                      </span>
                      <span
                        id="I7078_10622_3524_30221__Special_Combo"
                        className="flex justify-start text-left items-start h-[28.00px] w-[240.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Special Combo&nbsp;
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  id="I7078_10622_3524_30222__Frame_1574"
                  className="relative h-[224.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-8 pt-0 pb-12 px-0"
                >
                  <div
                    id="I7078_10622_3524_30223__Frame_1573"
                    className="relative h-[140.00px] flex flex-col justify-center items-center flex-nowrap"
                  >
                    <div
                      id="I7078_10622_3524_30224__Frame_1572"
                      className="relative h-[28.00px] w-[calc(100%-80px-80px)] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-20 py-[7px]"
                    >
                      <span
                        id="I7078_10622_3524_30225__Our_Future_Partners"
                        className="flex justify-center text-center items-start h-[28.00px] w-[159.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(112,117,127,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          Our Future Partners
                        </span>
                      </span>
                    </div>

                    <div
                      id="I7078_10622_3524_30226__Frame_1322"
                      className="relative h-[82.00px] w-[1435.00px] flex flex-row justify-center items-center flex-nowrap gap-6 px-0 py-2"
                    >
                      <div
                        id="I7078_10622_3524_30227__Frame_1042"
                        className="relative h-[48.00px] flex flex-col justify-center items-center flex-nowrap gap-1.5 p-4 rounded-2xl"
                      >
                        <div
                          id="I7078_10622_3524_30228__meta-quest-1_1"
                          className="relative overflow-hidden h-[22.00px] w-[104.00px]"
                        >
                          <img
                            id="I7078_10622_3524_30229__Vector"
                            src="assets/images/vector_116.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.36)] top-[calc(100%_*_0.03)]"
                          />
                          <img
                            id="I7078_10622_3524_30230__Vector"
                            src="assets/images/vector_117.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.58)] top-[calc(100%_*_0.22)]"
                          />
                          <img
                            id="I7078_10622_3524_30231__Vector"
                            src="assets/images/vector_118.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.72)] top-[calc(100%_*_0.06)]"
                          />
                          <img
                            id="I7078_10622_3524_30232__Vector"
                            src="assets/images/vector_119.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.84)] top-[calc(100%_*_0.22)]"
                          />
                          <img
                            id="I7078_10622_3524_30233__Vector"
                            src="assets/images/vector_120.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.00)]"
                          />
                          <img
                            id="I7078_10622_3524_30234__Vector"
                            src="assets/images/vector_121.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.02)] top-[calc(100%_*_0.00)]"
                          />
                          <img
                            id="I7078_10622_3524_30235__Vector"
                            src="assets/images/vector_122.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.00)] top-[calc(100%_*_0.17)]"
                          />
                          <img
                            id="I7078_10622_3524_30236__Vector"
                            src="assets/images/vector_123.svg"
                            alt="Vector"
                            className="absolute top-[calc(100%_*_0.42)]"
                          />
                          <img
                            id="I7078_10622_3524_30237__Vector"
                            src="assets/images/vector_124.svg"
                            alt="Vector"
                            className="absolute top-[calc(100%_*_0.57)]"
                          />
                          <img
                            id="I7078_10622_3524_30238__Vector"
                            src="assets/images/vector_125.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.00)] top-[calc(100%_*_0.62)]"
                          />
                          <img
                            id="I7078_10622_3524_30239__Vector"
                            src="assets/images/vector_126.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.02)] top-[calc(100%_*_0.31)]"
                          />
                          <img
                            id="I7078_10622_3524_30240__Vector"
                            src="assets/images/vector_127.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.15)] top-[calc(100%_*_0.11)]"
                          />
                          <img
                            id="I7078_10622_3524_30241__Vector"
                            src="assets/images/vector_128.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.00)]"
                          />
                          <img
                            id="I7078_10622_3524_30242__Vector"
                            src="assets/images/vector_129.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.24)] top-[calc(100%_*_0.10)]"
                          />
                          <img
                            id="I7078_10622_3524_30243__Vector"
                            src="assets/images/vector_130.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.26)] top-[calc(100%_*_0.55)]"
                          />
                          <img
                            id="I7078_10622_3524_30244__Vector"
                            src="assets/images/vector_131.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.68)]"
                          />
                          <img
                            id="I7078_10622_3524_30245__Vector"
                            src="assets/images/vector_132.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.23)] top-[calc(100%_*_0.72)]"
                          />
                          <img
                            id="I7078_10622_3524_30246__Vector"
                            src="assets/images/vector_133.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.20)] top-[calc(100%_*_0.68)]"
                          />
                          <img
                            id="I7078_10622_3524_30247__Vector"
                            src="assets/images/vector_134.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.16)] top-[calc(100%_*_0.36)]"
                          />
                        </div>

                        <span
                          id="I7078_10622_3524_30248__Business_Partner"
                          className="flex justify-start text-left items-start h-[20.00px] w-[104.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[20.00px]"
                            style={{
                              fontFamily: "Outfit",
                            }}
                          >
                            Business Partner
                          </span>
                        </span>
                      </div>

                      <div
                        id="I7078_10622_3524_30249__Frame_1050"
                        className="relative h-[50.00px] flex flex-row justify-start items-center flex-nowrap gap-3 p-4 rounded-2xl"
                      >
                        <div
                          id="I7078_10622_3524_30250__Frame_1048"
                          className="relative bg-white border h-[36.00px] w-[36.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 p-1.5 rounded-[80px] border-[#e7e8eaff] border-solid"
                        >
                          <img
                            id="I7078_10622_3524_30251__Group"
                            src="assets/images/group_37.svg"
                            alt="Group"
                            className="relative"
                          />
                        </div>

                        <div
                          id="I7078_10622_3524_30256__Frame_1049"
                          className="relative h-[46.00px] w-[220.00px] flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_10622_3524_30257__Google_Marketing_Pla"
                            className="flex justify-start text-left items-start h-[24.00px] w-[220.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Google Marketing Platform
                            </span>
                          </span>
                          <span
                            id="I7078_10622_3524_30258__Sales_Partner"
                            className="flex justify-start text-left items-start h-[20.00px] w-[220.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-light leading-[20.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Sales Partner
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        id="I7078_10622_3524_30259__Frame_1044"
                        className="relative h-[42.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-4 py-5 rounded-2xl"
                      >
                        <div
                          id="I7078_10622_3524_30260__Frame_1036"
                          className="relative h-[42.00px] w-[42.00px]"
                        >
                          <img
                            id="I7078_10622_3524_30261__Vector"
                            src="assets/images/vector_135.svg"
                            alt="Vector"
                            className="absolute"
                          />
                          <img
                            id="I7078_10622_3524_30262__Vector"
                            src="assets/images/vector_136.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.52)]"
                          />
                          <img
                            id="I7078_10622_3524_30263__Vector"
                            src="assets/images/vector_137.svg"
                            alt="Vector"
                            className="absolute top-[calc(100%_*_0.52)]"
                          />
                          <img
                            id="I7078_10622_3524_30264__Vector"
                            src="assets/images/vector_138.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.52)] top-[calc(100%_*_0.52)]"
                          />
                        </div>

                        <div
                          id="I7078_10622_3524_30265__Frame_1043"
                          className="relative h-[38.00px] w-[81.00px] flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <img
                            id="I7078_10622_3524_30266__Vector"
                            src="assets/images/vector_139.svg"
                            alt="Vector"
                            className="relative"
                          />
                          <span
                            id="I7078_10622_3524_30267__Partner"
                            className="flex justify-start text-left items-start h-[20.00px] w-[81.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[20.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Partner
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        id="I7078_10622_3524_30268__Frame_1321"
                        className="relative h-[82.00px] w-[127.00px]"
                      >
                        <img
                          id="I7078_10622_3524_30269__Rectangle_4216"
                          src="assets/images/rectangle_4216_1.svg"
                          alt="Rectangle_4216"
                          className="absolute left-[0.00px] top-[0.00px]"
                        />
                        <div
                          id="I7078_10622_3524_30270__Frame_1055"
                          className="absolute h-[56.00px] w-[83.00px] flex flex-col justify-start items-start flex-nowrap left-[33.00px] top-[13.00px]"
                        >
                          <div
                            id="I7078_10622_3524_30271__aws-2_1"
                            className="relative overflow-hidden h-[24.00px] w-[42.00px]"
                          >
                            <img
                              id="I7078_10622_3524_30272__Vector"
                              src="assets/images/vector_140.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.05)]"
                            />
                            <img
                              id="I7078_10622_3524_30273__Group"
                              src="assets/images/group_38.svg"
                              alt="Group"
                              className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.62)]"
                            />
                          </div>

                          <span
                            id="I7078_10622_3524_30276__Partner"
                            className="flex justify-start text-left items-start h-[32.00px] w-[83.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Partner
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        id="I7078_10622_3524_30277__Frame_1047"
                        className="relative h-[50.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-6 py-4 rounded-2xl"
                      >
                        <div
                          id="I7078_10622_3524_30278__Frame_1045"
                          className="relative bg-[rgba(233,34,21,1.00)] rotate-[90.00deg] scale-x-[-1.0] scale-y-[-1.0] h-[18.00px] w-[42.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-1"
                        >
                          <span
                            id="I7078_10622_3524_30279__Partner"
                            className="flex justify-start text-left items-start h-[18.00px] w-[42.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[12.0px] font-normal leading-[18.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Partner
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_10622_3524_30280__Frame_1046"
                          className="relative h-[42.00px] w-[69.00px] flex flex-col justify-start items-start flex-nowrap"
                        >
                          <div
                            id="I7078_10622_3524_30281__google-1-1_1"
                            className="relative overflow-hidden h-[16.00px] w-[44.00px]"
                          >
                            <img
                              id="I7078_10622_3524_30282__Group"
                              src="assets/images/group_39.svg"
                              alt="Group"
                              className="absolute top-[calc(100%_*_0.00)]"
                            />
                          </div>

                          <span
                            id="I7078_10622_3524_30289__Partner"
                            className="flex justify-start text-left items-start h-[26.00px] w-[69.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[26.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Partner
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        id="I7078_10622_3524_30290__Frame_1057"
                        className="relative h-[82.00px] w-[191.00px]"
                      >
                        <div
                          id="I7078_10622_3524_30291__logo-amazon_1"
                          className="absolute overflow-hidden h-[34.00px] w-[117.00px] left-[16.00px] top-[29.00px]"
                        >
                          <img
                            id="I7078_10622_3524_30292__Vector"
                            src="assets/images/vector_141.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.02)] top-[calc(100%_*_0.02)]"
                          />
                          <img
                            id="I7078_10622_3524_30293__Group"
                            src="assets/images/group_40.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.16)] top-[calc(100%_*_0.60)]"
                          />
                        </div>

                        <span
                          id="I7078_10622_3524_30296__spn"
                          className="flex justify-start text-left items-start h-[32.00px] w-[38.00px] absolute left-[137.00px] top-[18.00px]"
                        >
                          <span
                            className="whitespace-nowrap bg-[rgba(243,151,27,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                            style={{
                              fontFamily: "Outfit",
                            }}
                          >
                            spn
                          </span>
                        </span>
                      </div>

                      <div
                        id="I7078_10622_3524_30297__Frame_1054"
                        className="relative h-[50.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 p-4 rounded-2xl"
                      >
                        <div
                          id="I7078_10622_3524_30298__Frame_1051"
                          className="relative h-[50.00px] w-[43.00px]"
                        >
                          <img
                            id="I7078_10622_3524_30299__Group"
                            src="assets/images/group_41.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.15)] top-[calc(100%_*_0.04)]"
                          />
                          <img
                            id="I7078_10622_3524_30302__Vector"
                            src="assets/images/vector_142.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.05)] top-[calc(100%_*_0.04)]"
                          />
                          <img
                            id="I7078_10622_3524_30303__Vector"
                            src="assets/images/vector_143.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.02)] top-[calc(100%_*_0.76)]"
                          />
                          <img
                            id="I7078_10622_3524_30304__Vector"
                            src="assets/images/vector_144.svg"
                            alt="Vector"
                            className="absolute top-[calc(100%_*_0.35)]"
                          />
                          <img
                            id="I7078_10622_3524_30305__Vector"
                            src="assets/images/vector_145.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.27)]"
                          />
                        </div>

                        <div
                          id="I7078_10622_3524_30306__Frame_1053"
                          className="relative h-[46.00px] w-[120.00px] flex flex-col justify-start items-start flex-nowrap gap-1.5"
                        >
                          <div
                            id="I7078_10622_3524_30307__Frame_1052"
                            className="relative h-[20.00px] w-[80.00px]"
                          >
                            <img
                              id="I7078_10622_3524_30308__Vector"
                              className="absolute left-[calc(100%_*_0.65)] top-[calc(100%_*_0.59)]"
                            />
                            <img
                              id="I7078_10622_3524_30309__Vector"
                              src="assets/images/vector_146.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.59)] top-[calc(100%_*_0.19)]"
                            />
                            <img
                              id="I7078_10622_3524_30310__Vector"
                              src="assets/images/vector_147.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.70)] top-[calc(100%_*_0.19)]"
                            />
                            <img
                              id="I7078_10622_3524_30311__Vector"
                              src="assets/images/vector_148.svg"
                              alt="Vector"
                              className="absolute"
                            />
                          </div>

                          <span
                            id="I7078_10622_3524_30312__Marketing_Partners"
                            className="flex justify-start text-left items-start h-[20.00px] w-[120.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-light leading-[20.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Marketing Partners
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <img
                    id="I7078_10622_3524_30313__Line_11"
                    src="assets/images/line_11_1.svg"
                    alt="Line_11"
                    className="relative backdrop-blur-[200.0px]"
                  />
                  <div
                    id="I7078_10622_3524_30314__Frame_897"
                    className="relative h-[20.00px] w-[calc(100%-80px-80px)] flex flex-row justify-between items-center flex-nowrap px-20 py-0"
                  >
                    <span
                      id="I7078_10622_3524_30315____Metro_Solver__All_"
                      className="flex justify-start text-left items-start h-[20.00px] w-[253.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        © Metro Solver. All Rights Reserved 2024
                      </span>
                    </span>
                    <span
                      id="I7078_10622_3524_30316__Metro_Solver_Ltd_inc"
                      className="flex justify-start text-left items-start h-[20.00px] w-[465.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Metro Solver Ltd incorporated in England &amp; Wales
                        Registration No:15792819
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_7078_8186__Frame_1153"
              className="absolute h-[1460.00px] w-[1280.00px] left-[calc(50%-721.00px)] flex flex-col justify-center items-center flex-nowrap gap-12 p-20 top-[2828.00px]"
            >
              <span
                id="_7078_8187__Meet_Our_Agents"
                className="flex justify-center text-center items-start h-[72.00px] w-[481.00px] relative"
              >
                <span
                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[64.0px] font-medium leading-[72.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  Meet Our Agents
                </span>
              </span>
              <div
                id="_7078_8188__Frame_1478"
                className="relative h-[1220.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-8"
              >
                <div
                  id="_7092_8810__Frame_2085668748"
                  className="relative h-[56.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-6"
                >
                  <div
                    id="_7092_8802__Button"
                    className="relative bg-[linear-gradient(3.585720918408697E-6deg,rgba(65,41,90,1.00)_0.0%,rgba(47,7,67,1.00)_100.0%)] border h-[22.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px] border-solid"
                  >
                    <span
                      id="I7092_8802_3390_27233__Sign_Up"
                      className="flex justify-center text-center items-start h-[24.00px] w-[19.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        All
                      </span>
                    </span>
                  </div>

                  <div
                    id="_7092_8808__Button"
                    className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px]"
                  >
                    <span
                      id="I7092_8808_3390_27235__Sign_Up"
                      className="flex justify-center text-center items-start h-[24.00px] w-[54.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Agency
                      </span>
                    </span>
                  </div>

                  <div
                    id="_7092_8812__Button"
                    className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px]"
                  >
                    <span
                      id="I7092_8812_3390_27235__Sign_Up"
                      className="flex justify-center text-center items-start h-[24.00px] w-[62.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Creative
                      </span>
                    </span>
                  </div>

                  <div
                    id="_7092_8815__Button"
                    className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px]"
                  >
                    <span
                      id="I7092_8815_3390_27235__Sign_Up"
                      className="flex justify-center text-center items-start h-[24.00px] w-[80.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Leadership
                      </span>
                    </span>
                  </div>

                  <div
                    id="_7092_8818__Button"
                    className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px]"
                  >
                    <span
                      id="I7092_8818_3390_27235__Sign_Up"
                      className="flex justify-center text-center items-start h-[24.00px] w-[116.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Grow Marketing
                      </span>
                    </span>
                  </div>

                  <div
                    id="_7092_8821__Button"
                    className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px]"
                  >
                    <span
                      id="I7092_8821_3390_27235__Sign_Up"
                      className="flex justify-center text-center items-start h-[24.00px] w-[82.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Technology
                      </span>
                    </span>
                  </div>
                </div>

                <div
                  id="_7078_9171__Frame_1150"
                  className="relative h-[1132.00px] w-[1280.00px] flex flex-col justify-start items-start flex-nowrap gap-8"
                >
                  <div
                    id="_7078_9172__Frame_1474"
                    className="relative h-[356.00px] flex flex-row justify-start items-center flex-nowrap gap-8"
                  >
                    <div
                      id="_7078_9173__Team_Card"
                      className="relative h-[356.00px] w-[296.00px] overflow-hidden"
                    >
                      <div
                        id="I7078_9173_3447_29842__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px] overflow-hidden"
                      ></div>

                      <div
                        id="I7078_9173_3447_29843__image_37"
                        className="absolute h-[382.00px] w-[336.00px] left-[0] bottom-[0.00px] rounded-3xl"
                        style={{
                          background:
                            "url(assets/images/image_37.png) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9173_3447_29844__Frame_194"
                        className="absolute bg-[rgba(10,16,28,1.00)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9173_3447_29845__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9173_3447_29846__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9173_3447_29847__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9173_3447_29848__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9173_3447_29849__Group"
                            src="assets/images/group_42.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      id="_7078_9174__Team_Card"
                      className="relative h-[356.00px] w-[296.00px]"
                    >
                      <div
                        id="I7078_9174_3447_29856__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                      ></div>

                      <div
                        id="I7078_9174_3447_29857__image_37"
                        className="absolute h-[342.00px] w-[246.00px] left-[calc(50%-123.00px)] bottom-[0.00px]"
                        style={{
                          background:
                            "url(assets/images/image_37) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9174_3447_29858__Frame_194"
                        className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9174_3447_29859__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9174_3447_29860__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9174_3447_29861__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9174_3447_29862__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9174_3447_29863__Group"
                            src="assets/images/group_43.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      id="_7078_9175__Team_Card"
                      className="relative h-[356.00px] w-[296.00px]"
                    >
                      <div
                        id="I7078_9175_3447_29842__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                      ></div>

                      <div
                        id="I7078_9175_3447_29843__image_37"
                        className="absolute h-[342.00px] w-[246.00px] left-[calc(50%-123.00px)] bottom-[0.00px]"
                        style={{
                          background:
                            "url(assets/images/null) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9175_3447_29844__Frame_194"
                        className="absolute bg-[rgba(10,16,28,1.00)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9175_3447_29845__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9175_3447_29846__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9175_3447_29847__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9175_3447_29848__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9175_3447_29849__Group"
                            src="assets/images/group_44.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      id="_7078_9176__Team_Card"
                      className="relative h-[356.00px] w-[296.00px]"
                    >
                      <div
                        id="I7078_9176_3447_29842__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                      ></div>

                      <div
                        id="I7078_9176_3447_29843__image_37"
                        className="absolute h-[342.00px] w-[246.00px] left-[calc(50%-123.00px)] bottom-[0.00px]"
                        style={{
                          background:
                            "url(assets/images/null) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9176_3447_29844__Frame_194"
                        className="absolute bg-[rgba(10,16,28,1.00)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9176_3447_29845__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9176_3447_29846__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9176_3447_29847__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9176_3447_29848__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9176_3447_29849__Group"
                            src="assets/images/group_45.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_7078_9177__Frame_1476"
                    className="relative h-[356.00px] flex flex-row justify-start items-center flex-nowrap gap-8"
                  >
                    <div
                      id="_7078_9178__Team_Card"
                      className="relative h-[356.00px] w-[296.00px]"
                    >
                      <div
                        id="I7078_9178_3447_29842__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                      ></div>

                      <div
                        id="I7078_9178_3447_29843__image_37"
                        className="absolute h-[342.00px] w-[246.00px] left-[calc(50%-123.00px)] bottom-[0.00px]"
                        style={{
                          background:
                            "url(assets/images/null) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9178_3447_29844__Frame_194"
                        className="absolute bg-[rgba(10,16,28,1.00)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9178_3447_29845__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9178_3447_29846__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9178_3447_29847__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9178_3447_29848__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9178_3447_29849__Group"
                            src="assets/images/group_46.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      id="_7078_9179__Team_Card"
                      className="relative h-[356.00px] w-[296.00px]"
                    >
                      <div
                        id="I7078_9179_3447_29842__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                      ></div>

                      <div
                        id="I7078_9179_3447_29843__image_37"
                        className="absolute h-[342.00px] w-[246.00px] left-[calc(50%-123.00px)] bottom-[0.00px]"
                        style={{
                          background:
                            "url(assets/images/null) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9179_3447_29844__Frame_194"
                        className="absolute bg-[rgba(10,16,28,1.00)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9179_3447_29845__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9179_3447_29846__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9179_3447_29847__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9179_3447_29848__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9179_3447_29849__Group"
                            src="assets/images/group_47.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      id="_7078_9180__Team_Card"
                      className="relative h-[356.00px] w-[296.00px]"
                    >
                      <div
                        id="I7078_9180_3447_29842__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                      ></div>

                      <div
                        id="I7078_9180_3447_29843__image_37"
                        className="absolute h-[342.00px] w-[246.00px] left-[calc(50%-123.00px)] bottom-[0.00px]"
                        style={{
                          background:
                            "url(assets/images/null) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9180_3447_29844__Frame_194"
                        className="absolute bg-[rgba(10,16,28,1.00)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9180_3447_29845__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9180_3447_29846__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9180_3447_29847__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9180_3447_29848__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9180_3447_29849__Group"
                            src="assets/images/group_48.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      id="_7078_9181__Team_Card"
                      className="relative h-[356.00px] w-[296.00px]"
                    >
                      <div
                        id="I7078_9181_3447_29842__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                      ></div>

                      <div
                        id="I7078_9181_3447_29843__image_37"
                        className="absolute h-[342.00px] w-[246.00px] left-[calc(50%-123.00px)] bottom-[0.00px]"
                        style={{
                          background:
                            "url(assets/images/null) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9181_3447_29844__Frame_194"
                        className="absolute bg-[rgba(10,16,28,1.00)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9181_3447_29845__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9181_3447_29846__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9181_3447_29847__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9181_3447_29848__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9181_3447_29849__Group"
                            src="assets/images/group_49.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_7078_9182__Frame_1475"
                    className="relative h-[356.00px] flex flex-row justify-start items-center flex-nowrap gap-8"
                  >
                    <div
                      id="_7078_9183__Team_Card"
                      className="relative h-[356.00px] w-[296.00px]"
                    >
                      <div
                        id="I7078_9183_3447_29842__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                      ></div>

                      <div
                        id="I7078_9183_3447_29843__image_37"
                        className="absolute h-[342.00px] w-[246.00px] left-[calc(50%-123.00px)] bottom-[0.00px]"
                        style={{
                          background:
                            "url(assets/images/null) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9183_3447_29844__Frame_194"
                        className="absolute bg-[rgba(10,16,28,1.00)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9183_3447_29845__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9183_3447_29846__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9183_3447_29847__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9183_3447_29848__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9183_3447_29849__Group"
                            src="assets/images/group_50.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      id="_7078_9184__Team_Card"
                      className="relative h-[356.00px] w-[296.00px]"
                    >
                      <div
                        id="I7078_9184_3447_29842__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                      ></div>

                      <div
                        id="I7078_9184_3447_29843__image_37"
                        className="absolute h-[342.00px] w-[246.00px] left-[calc(50%-123.00px)] bottom-[0.00px]"
                        style={{
                          background:
                            "url(assets/images/null) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9184_3447_29844__Frame_194"
                        className="absolute bg-[rgba(10,16,28,1.00)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9184_3447_29845__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9184_3447_29846__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9184_3447_29847__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9184_3447_29848__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9184_3447_29849__Group"
                            src="assets/images/group_51.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      id="_7078_9185__Team_Card"
                      className="relative h-[356.00px] w-[296.00px]"
                    >
                      <div
                        id="I7078_9185_3447_29842__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                      ></div>

                      <div
                        id="I7078_9185_3447_29843__image_37"
                        className="absolute h-[342.00px] w-[246.00px] left-[calc(50%-123.00px)] bottom-[0.00px]"
                        style={{
                          background:
                            "url(assets/images/null) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9185_3447_29844__Frame_194"
                        className="absolute bg-[rgba(10,16,28,1.00)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9185_3447_29845__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9185_3447_29846__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9185_3447_29847__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9185_3447_29848__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9185_3447_29849__Group"
                            src="assets/images/group_52.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      id="_7078_9186__Team_Card"
                      className="relative h-[356.00px] w-[296.00px]"
                    >
                      <div
                        id="I7078_9186_3447_29842__Rectangle_16"
                        className="absolute bg-[linear-gradient(139.96113213031424deg,rgba(232,232,235,1.00)_0.0%,rgba(185,177,194,1.00)_100.0%)] h-[356.00px] w-[296.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                      ></div>

                      <div
                        id="I7078_9186_3447_29843__image_37"
                        className="absolute h-[342.00px] w-[246.00px] left-[calc(50%-123.00px)] bottom-[0.00px]"
                        style={{
                          background:
                            "url(assets/images/null) 100% / cover no-repeat",
                        }}
                      ></div>

                      <div
                        id="I7078_9186_3447_29844__Frame_194"
                        className="absolute bg-[rgba(10,16,28,1.00)] h-[54.00px] w-[232.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-tr-[100.0px] rounded-br-[100.0px] left-[0.00px] top-[238.00px]"
                      >
                        <div
                          id="I7078_9186_3447_29845__Frame_192"
                          className="relative h-[54.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-0.5"
                        >
                          <span
                            id="I7078_9186_3447_29846__Ayesha_Siddiqah"
                            className="flex justify-start text-left items-start h-[28.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Ayesha Siddiqah
                            </span>
                          </span>
                          <span
                            id="I7078_9186_3447_29847__Co-founder_Leader"
                            className="flex justify-start text-left items-start h-[24.00px] w-[184.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                              style={{
                                fontFamily: "Outfit",
                              }}
                            >
                              Co-founder Leader
                            </span>
                          </span>
                        </div>

                        <div
                          id="I7078_9186_3447_29848__Frame"
                          className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                        >
                          <img
                            id="I7078_9186_3447_29849__Group"
                            src="assets/images/group_53.svg"
                            alt="Group"
                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7092_8830__Button"
                className="relative bg-[linear-gradient(3.585720918408697E-6deg,rgba(65,41,90,1.00)_0.0%,rgba(47,7,67,1.00)_100.0%)] border h-[30.00px] w-[112.00px] flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-5 rounded-[100px] border-solid"
              >
                <span
                  id="I7092_8830_3390_27218__Sign_Up"
                  className="flex justify-center text-center items-start h-[32.00px] w-[114.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    View More
                  </span>
                </span>
              </div>
            </div>

            <div
              id="_7078_8213__Frame_593"
              className="absolute h-[622.00px] w-[1280.00px] left-[calc(50%-720.00px)] flex flex-row justify-start items-center flex-nowrap gap-20 p-20 top-[124.00px]"
            >
              <div
                id="_7078_8214__Frame_592"
                className="relative h-[508.00px] w-[622.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
              >
                <div
                  id="_7078_8215__Frame_591"
                  className="relative h-[412.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <span
                    id="_7078_8216__Unveiling_the_Essenc"
                    className="flex justify-start text-left items-start h-[144.00px] w-[622.00px] relative"
                  >
                    <span
                      className="bg-white bg-clip-text text-transparent not-italic text-[64.0px] font-medium leading-[72.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Unveiling the Essence Of Our Metro Solver
                    </span>
                  </span>
                  <span
                    id="_7078_8217__Welcome_to_Metro_Sol"
                    className="flex justify-start text-left items-start h-[252.00px] w-[622.00px] relative"
                  >
                    <span
                      className="bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Welcome to Metro Solver, where creativity meets strategy,
                      and brands come to life. We are not just a branding
                      agency; we are architects of identity, storytellers of
                      success, and partners in your brand&#39;s journey. Metro
                      Solver is a hub of innovative minds, passionate about
                      turning concepts into captivating brand experiences.
                      <br />
                      At Path our overarching goal is to redefine industry
                      standards by providing a dynamic and adaptive HR and CRM
                      SaaS platform. We aim to empower businesses of all sizes
                      to optimise their operations, foster employee growth, and
                      cultivate enduring customer relationships.
                    </span>
                  </span>
                </div>

                <div
                  id="_7078_10901__Button"
                  className="relative bg-[linear-gradient(181.50027606835522deg,rgba(99,49,241,1.00)_0.0%,rgba(99,49,241,1.00)_53.00902724266052%,rgba(109,67,227,1.00)_68.56226921081543%,rgba(159,99,255,1.00)_100.0%)] border h-[22.00px] flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px] border-solid"
                >
                  <div
                    id="I7078_10901_3390_27462__Frame_457"
                    className="relative h-[24.00px] w-[24.00px]"
                  >
                    <img
                      id="I7078_10901_3390_27462_3390_26772__Vector"
                      src="assets/images/vector_149.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.57)] top-[calc(100%_*_0.30)]"
                    />
                    <img
                      id="I7078_10901_3390_27462_3390_26773__Vector"
                      src="assets/images/vector_150.svg"
                      alt="Vector"
                      className="absolute"
                    />
                  </div>

                  <span
                    id="I7078_10901_3390_27225__Sign_Up"
                    className="flex justify-center text-center items-start h-[24.00px] w-[72.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Book Now
                    </span>
                  </span>
                </div>
              </div>

              <img
                id="_7078_8223__Group_157"
                src="assets/images/group_157.svg"
                alt="Group_157"
                className="relative"
              />
            </div>

            <div
              id="_7078_8226__Frame_526"
              className="absolute h-[192.00px] w-[1440.00px] left-[calc(50%-720.00px)] flex flex-row justify-start items-center flex-nowrap gap-8 px-0 py-20 top-[906.00px]"
            >
              <div
                id="_7078_8227__Frame_40"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[128.00px] w-[241.00px] flex flex-col justify-center items-center flex-nowrap gap-1 px-[109px] py-8 rounded-3xl"
              >
                <div
                  id="_7078_8228__Frame_488"
                  className="relative h-[84.00px] w-[155.00px] flex flex-row justify-start items-center flex-nowrap gap-3"
                >
                  <span
                    id="_7078_8229__150"
                    className="flex justify-center text-center items-start h-[84.00px] w-[113.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[72.0px] font-medium leading-[84.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      150
                    </span>
                  </span>
                  <img
                    id="_7078_8230__Group_4"
                    src="assets/images/group_4_2.svg"
                    alt="Group_4"
                    className="relative"
                  />
                </div>

                <span
                  id="_7078_8235__Current_Clients"
                  className="flex justify-start text-left items-start h-[40.00px] w-[240.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[40.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Current Clients
                  </span>
                </span>
              </div>

              <div
                id="_7078_8236__Frame_41"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[128.00px] w-[313.00px] flex flex-col justify-center items-center flex-nowrap gap-1 px-[73px] py-8 rounded-3xl"
              >
                <div
                  id="_7078_8237__Frame_488"
                  className="relative h-[84.00px] w-[157.00px] flex flex-row justify-start items-center flex-nowrap gap-3"
                >
                  <span
                    id="_7078_8238__25k"
                    className="flex justify-center text-center items-start h-[84.00px] w-[115.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[72.0px] font-medium leading-[84.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      25k
                    </span>
                  </span>
                  <img
                    id="_7078_8239__Group_4"
                    src="assets/images/group_4_3.svg"
                    alt="Group_4"
                    className="relative"
                  />
                </div>

                <span
                  id="_7078_8244__Completed_Projects"
                  className="flex justify-center text-center items-start h-[40.00px] w-[313.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[40.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Completed Projects
                  </span>
                </span>
              </div>

              <div
                id="_7078_8245__Frame_42"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[128.00px] w-[316.00px] flex flex-col justify-center items-center flex-nowrap gap-1 px-[71px] py-8 rounded-3xl"
              >
                <div
                  id="_7078_8246__Frame_488"
                  className="relative h-[84.00px] w-[130.00px] flex flex-row justify-start items-center flex-nowrap gap-3"
                >
                  <span
                    id="_7078_8247__90"
                    className="flex justify-center text-center items-start h-[84.00px] w-[88.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[72.0px] font-medium leading-[84.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      90
                    </span>
                  </span>
                  <img
                    id="_7078_8248__Group_5"
                    src="assets/images/group_5_1.svg"
                    alt="Group_5"
                    className="relative"
                  />
                </div>

                <span
                  id="_7078_8253__Metro_Solver_Teams"
                  className="flex justify-center text-center items-start h-[40.00px] w-[316.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[40.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Metro Solver Teams
                  </span>
                </span>
              </div>
            </div>

            <div
              id="_7078_8254__Frame_715"
              className="absolute h-[625.00px] w-[1280.00px] left-[calc(50%-722.00px)] flex flex-row justify-start items-center flex-nowrap gap-[49px] p-20 top-[1258.00px]"
            >
              <img
                id="_7078_8255__Group_157"
                src="assets/images/group_157_1.svg"
                alt="Group_157"
                className="relative"
              />
              <div
                id="_7078_8258__Frame_712"
                className="relative backdrop-blur-[200.0px] h-[600.00px] w-[651.00px] flex flex-col justify-start items-start flex-nowrap gap-6"
              >
                <div
                  id="_7078_8259__Frame_711"
                  className="relative bg-[rgba(255,255,255,0.04)] h-[196.00px] w-[calc(100%-32px-32px)] flex flex-col justify-start items-start flex-nowrap gap-4 p-8 rounded-[32px]"
                >
                  <span
                    id="_7078_8260__Metro_Solver_Mission"
                    className="flex justify-start text-left items-start h-[40.00px] w-[587.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[32.0px] font-medium leading-[40.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Metro Solver Mission
                    </span>
                  </span>
                  <span
                    id="_7078_8261__Our_mission_is_to_co"
                    className="flex justify-start text-left items-start h-[140.00px] w-[587.00px] relative"
                  >
                    <span
                      className="bg-[rgba(243,243,244,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Our mission is to cover all your digital needs by
                      providing innovative, comprehensive, and affordable
                      solutions that meet your specific requirements and exceed
                      your expectations. We are dedicated to delivering
                      top-quality services that empower businesses to succeed in
                      a competitive digital landscape.
                    </span>
                  </span>
                </div>

                <div
                  id="_7078_8262__Frame_710"
                  className="relative bg-[rgba(255,255,255,0.04)] h-[252.00px] w-[calc(100%-32px-32px)] flex flex-col justify-start items-start flex-nowrap gap-4 p-8 rounded-[32px]"
                >
                  <div
                    id="_7078_10907__Button_With_out_outl"
                    className="absolute h-[24.00px] w-[78.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5 left-[329.00px] top-[259.50px]"
                  >
                    <span
                      id="I7078_10907_3606_35680__Read_More"
                      className="flex justify-start text-left items-start h-[24.00px] w-[78.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-[rgba(127,86,217,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Read More
                      </span>
                    </span>
                  </div>

                  <span
                    id="_7078_8263__Metro_Solver_Story"
                    className="flex justify-start text-left items-start h-[40.00px] w-[587.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[32.0px] font-medium leading-[40.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Metro Solver Story
                    </span>
                  </span>
                  <span
                    id="_7078_8264__In_July_2023__a_visi"
                    className="flex justify-start text-left items-start h-[196.00px] w-[587.00px] relative"
                  >
                    <span
                      className="bg-[rgba(243,243,244,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      In July 2023, a vision took shape that would redefine the
                      landscape of digital services. This vision came from
                      Nayemul Karim, the founder and director of Metro Solver.
                      The story begins with Nayemul and his co-founder, Shazan
                      Mahmud, who faced a significant challenge while trying to
                      launch their first business in the UK. They encountered a
                      digital services market that was not only exorbitantly
                      expensive but also lacked a comprehensive, all-in-one
                      solution...
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div
              id="_7078_8266__Frame_716"
              className="absolute h-[625.00px] w-[1280.00px] left-[calc(50%-721.00px)] flex flex-row justify-start items-center flex-nowrap gap-[49px] p-20 top-[2043.00px]"
            >
              <div
                id="_7078_8267__Frame_712"
                className="relative backdrop-blur-[200.0px] h-[544.00px] w-[651.00px] flex flex-col justify-start items-start flex-nowrap gap-6"
              >
                <div
                  id="_7078_8268__Frame_711"
                  className="relative bg-[rgba(255,255,255,0.04)] h-[196.00px] w-[calc(100%-32px-32px)] flex flex-col justify-start items-start flex-nowrap gap-4 p-8 rounded-[32px]"
                >
                  <span
                    id="_7078_8269__Global_Reach_and_Vis"
                    className="flex justify-start text-left items-start h-[40.00px] w-[587.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[32.0px] font-medium leading-[40.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Global Reach and Vision
                    </span>
                  </span>
                  <span
                    id="_7078_8270__Today__Metro_Solver_"
                    className="flex justify-start text-left items-start h-[140.00px] w-[587.00px] relative"
                  >
                    <span
                      className="bg-[rgba(243,243,244,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Today, Metro Solver is striving to extend its services
                      worldwide, aiming to meet all digital needs from logo
                      creation and branding to comprehensive marketing
                      solutions. The firm&#39;s dedicated team of over 100
                      employees across various sectors ensures continuous
                      improvement in quality and customer satisfaction.
                    </span>
                  </span>
                </div>

                <div
                  id="_7078_8271__Frame_710"
                  className="relative bg-[rgba(255,255,255,0.04)] h-[196.00px] w-[calc(100%-32px-32px)] flex flex-col justify-start items-start flex-nowrap gap-4 p-8 rounded-[32px]"
                >
                  <span
                    id="_7078_8272__Conclusion"
                    className="flex justify-start text-left items-start h-[40.00px] w-[587.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[32.0px] font-medium leading-[40.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Conclusion
                    </span>
                  </span>
                  <span
                    id="_7078_8273__Metro_Solver_s_journ"
                    className="flex justify-start text-left items-start h-[140.00px] w-[587.00px] relative"
                  >
                    <span
                      className="bg-[rgba(243,243,244,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Metro Solver’s journey from a simple idea to a thriving
                      digital services firm exemplifies resilience, innovation,
                      and a steadfast commitment to solving customer problems.
                      The company continues to evolve, driven by a talented team
                      and visionary leadership, to provide exceptional digital
                      solutions globally.
                    </span>
                  </span>
                </div>
              </div>

              <img
                id="_7078_8274__Group_157"
                src="assets/images/group_157_2.svg"
                alt="Group_157"
                className="relative"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUsPage;
