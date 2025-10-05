import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  const DESIGN_WIDTH = 1640;
  const DESIGN_HEIGHT = 13642;
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const computed = window.innerWidth / DESIGN_WIDTH;
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
      <div
        id="_7065_1096__Home_page"
        className="absolute bg-black"
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${DESIGN_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          left: 0,
          top: 0,
          overflow: "hidden",
        }}
      >
        <div
          id="_7065_1097__Ellipse_835"
          className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] rounded-[50%] left-[0.00px] top-[11238.00px]"
          style={{
            filter: "blur(600.0px)",
          }}
        ></div>

        <div
          id="_7065_1098__Ellipse_837"
          className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] rounded-[50%] right-[0.00px] top-[10000.00px]"
          style={{
            filter: "blur(600.0px)",
          }}
        ></div>

        <div
          id="_7065_1099__Ellipse_828"
          className="absolute bg-[rgba(48,16,83,0.60)] h-[1088.00px] w-[1088.00px] rounded-[50%] left-[0.00px] top-[1334.00px]"
          style={{
            filter: "blur(600.0px)",
          }}
        ></div>

        <div
          id="_7065_1100__Ellipse_829"
          className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] rounded-[50%] right-[0.00px] top-[2572.00px]"
          style={{
            filter: "blur(600.0px)",
          }}
        ></div>

        <div
          id="_7065_1101__Ellipse_830"
          className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] rounded-[50%] left-[0.00px] top-[3810.00px]"
          style={{
            filter: "blur(600.0px)",
          }}
        ></div>

        <div
          id="_7065_1102__Ellipse_831"
          className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] rounded-[50%] right-[0.00px] top-[5048.00px]"
          style={{
            filter: "blur(600.0px)",
          }}
        ></div>

        <div
          id="_7065_1103__Ellipse_832"
          className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] rounded-[50%] right-[0.00px] top-[7524.00px]"
          style={{
            filter: "blur(600.0px)",
          }}
        ></div>

        <div
          id="_7065_1104__Ellipse_836"
          className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] rounded-[50%] left-[0.00px] top-[6286.00px]"
          style={{
            filter: "blur(600.0px)",
          }}
        ></div>

        <div
          id="_7065_1105__Ellipse_834"
          className="absolute bg-[rgba(48,16,83,0.80)] h-[1088.00px] w-[1088.00px] rounded-[50%] left-[0.00px] top-[8762.00px]"
          style={{
            filter: "blur(600.0px)",
          }}
        ></div>

        <div
          id="_7065_1106__Motion"
          className="absolute h-[528.00px] w-[1440.00px] left-[calc(50%-720.00px)] top-[220.00px]"
          style={{
            background: "url(assets/images/motion.png) 100% / cover no-repeat",
          }}
        ></div>

        <div
          id="_7065_1107__Ellipse_1"
          className="absolute bg-[rgba(48,16,83,0.50)] h-[1088.00px] w-[1088.00px] left-[calc(50%-368.00px)] rounded-[50%] top-[96.00px]"
          style={{
            filter: "blur(600.0px)",
          }}
        ></div>

        <div
          id="_7065_1108__Ellipse_827"
          className="absolute bg-[rgba(111,28,176,0.80)] h-[180.00px] w-[178.00px] left-[-48.00px] rounded-[50%] top-[48.00px]"
          style={{
            filter: "blur(200.0px)",
          }}
        ></div>

        <div
          id="_7065_1109__Frame_1098"
          className="absolute h-[695.00px] w-[1440.00px] left-[calc(50%-720.00px)] top-[11667.00px]"
        >
          <img
            id="_7065_1110__Rectangle_4214"
            src="assets/images/rectangle_4214_1.svg"
            alt="Rectangle_4214"
            className="absolute left-[calc(50%-640.00px)] top-[80.00px]"
          />
          <div
            id="_7065_1111__Frame"
            className="absolute overflow-hidden h-[40.00px] w-[40.00px] left-[148.00px] top-[151.73px]"
          >
            <img
              id="_7065_1113__Vector"
              src="assets/images/vector.svg"
              alt="Vector"
              className="absolute left-[calc(100%_*_0.15)] top-[calc(100%_*_0.06)]"
            />
          </div>

          <div
            id="_7065_1114__Frame"
            className="absolute overflow-hidden h-[45.00px] w-[40.00px] left-[669.00px] top-[158.73px]"
          >
            <img
              id="_7065_1116__Vector"
              src="assets/images/vector_1.svg"
              alt="Vector"
              className="absolute left-[calc(100%_*_0.15)] top-[calc(100%_*_0.06)]"
            />

            <div
              id="_7065_1117__Ellipse_825"
              className="absolute bg-[rgba(116,84,19,1.00)] h-[8.89%] w-[18.00px] left-[calc(50%-9.00px)] rounded-[50%] top-[calc(100%_*_0.89)]"
            ></div>
          </div>

          <div
            id="_7065_1118__Frame"
            className="absolute overflow-hidden h-[40.00px] w-[40.00px] left-[1184.00px] top-[499.00px]"
          >
            <img
              id="_7065_1120__Vector"
              src="assets/images/vector_2.svg"
              alt="Vector"
              className="absolute left-[calc(100%_*_0.15)] top-[calc(100%_*_0.06)]"
            />
          </div>

          <div
            id="_7065_1121__Frame_1579"
            className="absolute h-[328.00px] w-[491.00px] left-[711.00px] top-[115.00px]"
          >
            <img
              id="_7065_1122__Rectangle_4215"
              src="assets/images/rectangle_4215.svg"
              alt="Rectangle_4215"
              className="absolute left-[0.00px] top-[0.00px]"
            />
            <div
              id="_7065_1123__Frame_805"
              className="absolute h-[280.00px] w-[408.00px] flex flex-col justify-start items-start flex-nowrap gap-4 left-[59.00px] top-[24.00px]"
            >
              <div
                id="_7065_1124__Frame_800"
                className="relative h-[40.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-1.5"
              >
                <div
                  id="_7065_1125__Group_161"
                  className="relative h-[40.00px] w-[40.00px]"
                >
                  <div
                    id="_7065_1126__Ellipse_824"
                    className="absolute border h-[40.00px] w-[40.00px] rounded-[50%] border-solid left-[0.00px] top-[0.00px]"
                  ></div>

                  <span
                    id="_7065_1127___1"
                    className="flex justify-start text-left items-start h-[28.00px] w-[18.00px] absolute left-[calc(50%-9.00px)] top-[calc(50%-14.00px)]"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      #1
                    </span>
                  </span>
                </div>

                <span
                  id="_7065_1128__Metro_solver"
                  className="flex justify-start text-left items-start h-[32.00px] w-[137.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Metro solver
                  </span>
                </span>
              </div>

              <div
                id="_7065_1129__Frame_799"
                className="relative h-[224.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-4"
              >
                <div
                  id="_7065_1130__Frame_529"
                  className="relative h-[56.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                >
                  <div
                    id="_7065_1131__Group_80"
                    className="relative h-[40.00px] w-[40.00px]"
                  >
                    <div
                      id="_7065_1132__Ellipse_800"
                      className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[40.00px] w-[40.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                    ></div>

                    <div
                      id="_7065_1133__location"
                      className="absolute overflow-hidden h-[24.00px] w-[24.00px] left-[calc(50%-12.00px)] top-[calc(50%-12.00px)]"
                    >
                      <img
                        id="I7065_1133_3524_28791__Vector"
                        src="assets/images/vector_3.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.08)]"
                      />
                    </div>
                  </div>

                  <span
                    id="_7065_1134__Head_office__Metro_S"
                    className="flex justify-start text-left items-start h-[56.00px] w-[352.00px] relative"
                  >
                    <span
                      className="bg-[rgba(243,243,244,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Head office: Metro Solver Limited Grantham Road, London
                      E12 5LX, United Kingdom
                    </span>
                  </span>
                </div>

                <div
                  id="_7065_1135__Frame_797"
                  className="relative h-[40.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                >
                  <div
                    id="_7065_1136__Group_80"
                    className="relative h-[40.00px] w-[40.00px]"
                  >
                    <div
                      id="_7065_1137__Ellipse_800"
                      className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[40.00px] w-[40.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                    ></div>

                    <div
                      id="_7065_1138__call"
                      className="absolute h-[24.00px] w-[24.00px] left-[calc(50%-12.00px)] top-[calc(50%-12.00px)]"
                    >
                      <img
                        id="I7065_1138_3524_28822__vuesax_linear_call"
                        src="assets/images/vuesaxlinearcall.svg"
                        alt="vuesax_linear_call"
                        className="absolute"
                      />
                    </div>
                  </div>

                  <span
                    id="_7065_1139___447936_455446"
                    className="flex justify-start text-left items-start h-[28.00px] w-[352.00px] relative"
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
                  id="_7065_1140__Frame_798"
                  className="relative h-[40.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                >
                  <div
                    id="_7065_1141__Group_80"
                    className="relative h-[40.00px] w-[40.00px]"
                  >
                    <div
                      id="_7065_1142__Ellipse_800"
                      className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[40.00px] w-[40.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                    ></div>

                    <div
                      id="_7065_1143__call"
                      className="absolute h-[24.00px] w-[24.00px] left-[calc(50%-12.00px)] top-[calc(50%-12.00px)]"
                    >
                      <img
                        id="I7065_1143_3524_28822__vuesax_linear_call"
                        src="assets/images/vuesaxlinearcall_1.svg"
                        alt="vuesax_linear_call"
                        className="absolute"
                      />
                    </div>
                  </div>

                  <span
                    id="_7065_1144___447464850205"
                    className="flex justify-start text-left items-start h-[28.00px] w-[352.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      +447464850205
                    </span>
                  </span>
                </div>

                <div
                  id="_7065_1145__Frame_530"
                  className="relative h-[40.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                >
                  <div
                    id="_7065_1146__Group_79"
                    className="relative h-[40.00px] w-[40.00px]"
                  >
                    <div
                      id="_7065_1147__Ellipse_800"
                      className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[40.00px] w-[40.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                    ></div>

                    <div
                      id="_7065_1148__Frame"
                      className="absolute overflow-hidden h-[24.00px] w-[24.00px] left-[calc(50%-12.00px)] top-[calc(50%-12.00px)]"
                    >
                      <img
                        id="I7065_1148_3596_24810__Group"
                        src="assets/images/group.svg"
                        alt="Group"
                        className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.08)]"
                      />
                    </div>
                  </div>

                  <span
                    id="_7065_1149__02064844"
                    className="flex justify-start text-left items-start h-[28.00px] w-[352.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(243,243,244,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      02064844
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_7065_1150__Frame"
            className="absolute overflow-hidden h-[40.00px] w-[40.00px] left-[180.00px] top-[519.00px]"
          >
            <img
              id="_7065_1152__Vector"
              src="assets/images/vector_4.svg"
              alt="Vector"
              className="absolute left-[calc(100%_*_0.15)] top-[calc(100%_*_0.06)]"
            />
          </div>
        </div>

        <div
          id="_7065_1153__Frame_709"
          className="absolute h-[672.00px] w-[1280.00px] left-[calc(50%-720.00px)] flex flex-row justify-start items-center flex-nowrap gap-[100px] p-20 top-[10835.00px]"
        >
          <div
            id="_7065_1154__Frame_702"
            className="relative h-[672.00px] w-[546.00px] flex flex-col justify-center items-start flex-nowrap gap-12"
          >
            <span
              id="_7065_1155__Got_Questions__We_ve"
              className="flex justify-start text-left items-start h-[144.00px] w-[546.00px] relative"
            >
              <span
                className="bg-white bg-clip-text text-transparent not-italic text-[64.0px] font-medium leading-[72.00px]"
                style={{
                  fontFamily: "Outfit",
                }}
              >
                Got Questions? We&#39;ve got Answers
              </span>
            </span>
            <div
              id="_7065_1156__Frame_701"
              className="relative h-[480.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-6"
            >
              <div
                id="_7065_1157__Frame_91"
                className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-2"
              >
                <div
                  id="_7065_1158__Frame"
                  className="relative overflow-hidden h-[14.00px] w-[14.00px]"
                >
                  <img
                    id="_7065_1159__Group"
                    src="assets/images/group_1.svg"
                    alt="Group"
                    className="absolute"
                  />
                </div>

                <span
                  id="_7065_1162__Digital_Marketing"
                  className="flex justify-start text-left items-start h-[32.00px] w-[524.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Digital Marketing
                  </span>
                </span>
              </div>

              <div
                id="_7065_1163__Frame_92"
                className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-2"
              >
                <div
                  id="_7065_1164__Frame"
                  className="relative overflow-hidden h-[14.00px] w-[14.00px]"
                >
                  <img
                    id="_7065_1166__Vector"
                    src="assets/images/vector_5.svg"
                    alt="Vector"
                    className="absolute"
                  />
                </div>

                <span
                  id="_7065_1167__Web___Software_Devel"
                  className="flex justify-start text-left items-start h-[32.00px] w-[524.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Web &amp; Software Development
                  </span>
                </span>
              </div>

              <div
                id="_7065_1168__Frame_95"
                className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-2"
              >
                <div
                  id="_7065_1169__Frame"
                  className="relative overflow-hidden h-[14.00px] w-[14.00px]"
                >
                  <img
                    id="_7065_1171__Vector"
                    src="assets/images/vector_6.svg"
                    alt="Vector"
                    className="absolute"
                  />
                </div>

                <span
                  id="_7065_1172__Graphic_Design___Log"
                  className="flex justify-start text-left items-start h-[32.00px] w-[524.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Graphic Design &amp; Logo
                  </span>
                </span>
              </div>

              <div
                id="_7065_1173__Frame_93"
                className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-2"
              >
                <div
                  id="_7065_1174__Frame"
                  className="relative overflow-hidden h-[14.00px] w-[14.00px]"
                >
                  <img
                    id="_7065_1176__Vector"
                    src="assets/images/vector_7.svg"
                    alt="Vector"
                    className="absolute"
                  />
                </div>

                <span
                  id="_7065_1177__Multimedia___Video_E"
                  className="flex justify-start text-left items-start h-[32.00px] w-[524.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Multimedia &amp; Video Editing
                  </span>
                </span>
              </div>

              <div
                id="_7065_1178__Frame_94"
                className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-2"
              >
                <div
                  id="_7065_1179__Frame"
                  className="relative overflow-hidden h-[14.00px] w-[14.00px]"
                >
                  <img
                    id="_7065_1181__Vector"
                    src="assets/images/vector_8.svg"
                    alt="Vector"
                    className="absolute"
                  />
                </div>

                <span
                  id="_7065_1182__Creative_Writing_Sol"
                  className="flex justify-start text-left items-start h-[32.00px] w-[524.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Creative Writing Solutions
                  </span>
                </span>
              </div>

              <div
                id="_7065_1183__Frame_96"
                className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-2"
              >
                <div
                  id="_7065_1184__Frame"
                  className="relative overflow-hidden h-[14.00px] w-[14.00px]"
                >
                  <img
                    id="_7065_1186__Vector"
                    src="assets/images/vector_9.svg"
                    alt="Vector"
                    className="absolute"
                  />
                </div>

                <span
                  id="_7065_1187__E-Commerce_Solutions"
                  className="flex justify-start text-left items-start h-[32.00px] w-[524.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    E-Commerce Solutions
                  </span>
                </span>
              </div>

              <div
                id="_7065_1188__Frame_97"
                className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-2"
              >
                <div
                  id="_7065_1189__Frame"
                  className="relative overflow-hidden h-[14.00px] w-[14.00px]"
                >
                  <img
                    id="_7065_1191__Vector"
                    src="assets/images/vector_10.svg"
                    alt="Vector"
                    className="absolute"
                  />
                </div>

                <span
                  id="_7065_1192__Refund__Earn___Cance"
                  className="flex justify-start text-left items-start h-[32.00px] w-[524.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Refund, Earn &amp; Cancel Policies
                  </span>
                </span>
              </div>

              <div
                id="_7065_1193__Frame_98"
                className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-2"
              >
                <div
                  id="_7065_1194__Frame"
                  className="relative overflow-hidden h-[14.00px] w-[14.00px]"
                >
                  <img
                    id="_7065_1196__Vector"
                    src="assets/images/vector_11.svg"
                    alt="Vector"
                    className="absolute"
                  />
                </div>

                <span
                  id="_7065_1197__Getting_Started___Ge"
                  className="flex justify-start text-left items-start h-[32.00px] w-[524.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Getting Started &amp; General Info
                  </span>
                </span>
              </div>

              <div
                id="_7065_1198__Frame_99"
                className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-2"
              >
                <div
                  id="_7065_1199__Frame"
                  className="relative overflow-hidden h-[14.00px] w-[14.00px]"
                >
                  <img
                    id="_7065_1201__Vector"
                    src="assets/images/vector_12.svg"
                    alt="Vector"
                    className="absolute"
                  />
                </div>

                <span
                  id="_7065_1202__General_Policies___C"
                  className="flex justify-start text-left items-start h-[32.00px] w-[524.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    General Policies &amp; Customer Support
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div
            id="_7065_1203__Frame_708"
            className="relative h-[460.00px] w-[634.00px] flex flex-col justify-start items-start flex-nowrap gap-6"
          >
            <div
              id="_7065_1204__Frame_707"
              className="relative h-[99.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-3 px-0 py-6 border-solid border-[0.0px_0.0px_1.0px_0.0px]"
            >
              <div
                id="_7065_1205__Frame_86"
                className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-between items-center flex-nowrap"
              >
                <span
                  id="_7065_1206__What_services_do_you"
                  className="flex justify-start text-left items-start h-[32.00px] w-[505.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    What services do you offer in digital marketing?
                  </span>
                </span>
                <div
                  id="_7065_1207__Frame"
                  className="relative overflow-hidden rotate-[90.00deg] scale-x-[-1.0] h-[24.00px] w-[24.00px] scale-y-[1.0]"
                >
                  <img
                    id="_7065_1209__Vector"
                    src="assets/images/vector_13.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.23)] top-[calc(100%_*_0.06)]"
                  />
                </div>
              </div>

              <span
                id="_7065_1210__We_provide_SEO__soci"
                className="flex justify-start text-left items-start h-[56.00px] w-[634.00px] relative"
              >
                <span
                  className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  We provide SEO, social media management, email marketing,
                  content marketing, PPC campaigns, and more.
                </span>
              </span>
            </div>

            <div
              id="_7065_1211__Frame_704"
              className="relative h-[31.00px] w-[calc(100%-0px-0px)] flex flex-row justify-between items-center flex-nowrap px-0 py-6 border-solid border-[0.0px_0.0px_1.0px_0.0px]"
            >
              <span
                id="_7065_1212__How_can_digital_mark"
                className="flex justify-start text-left items-start h-[32.00px] w-[472.00px] relative"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  How can digital marketing help my business?
                </span>
              </span>
              <div
                id="_7065_1213__Frame"
                className="relative overflow-hidden rotate-[-90.00deg] scale-x-[-1.0] scale-y-[-1.0] h-[24.00px] w-[24.00px]"
              >
                <img
                  id="_7065_1215__Vector"
                  src="assets/images/vector_14.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.23)] top-[calc(100%_*_0.06)]"
                />
              </div>
            </div>

            <div
              id="_7065_1216__Frame_705"
              className="relative h-[31.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-[182px] px-0 py-6 border-solid border-[0.0px_0.0px_1.0px_0.0px]"
            >
              <span
                id="_7065_1217__How_do_you_measure_c"
                className="flex justify-start text-left items-start h-[32.00px] w-[428.00px] relative"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  How do you measure campaign success?
                </span>
              </span>
              <div
                id="_7065_1218__Frame"
                className="relative overflow-hidden rotate-[-90.00deg] scale-x-[-1.0] scale-y-[-1.0] h-[24.00px] w-[24.00px]"
              >
                <img
                  id="_7065_1220__Vector"
                  src="assets/images/vector_15.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.23)] top-[calc(100%_*_0.06)]"
                />
              </div>
            </div>

            <div
              id="_7065_1221__Frame_706"
              className="relative h-[31.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-[361px] px-0 py-6 border-solid border-[0.0px_0.0px_1.0px_0.0px]"
            >
              <span
                id="_7065_1222__Do_you_offer_local_S"
                className="flex justify-start text-left items-start h-[32.00px] w-[249.00px] relative"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(159,163,170,1.00)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[32.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  Do you offer local SEO?
                </span>
              </span>
              <div
                id="_7065_1223__Frame"
                className="relative overflow-hidden rotate-[-90.00deg] scale-x-[-1.0] scale-y-[-1.0] h-[24.00px] w-[24.00px]"
              >
                <img
                  id="_7065_1225__Vector"
                  src="assets/images/vector_16.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.23)] top-[calc(100%_*_0.06)]"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id="_7065_1226__Frame_1231"
          className="absolute h-[628.00px] w-[1280.00px] left-[calc(50%-720.00px)] flex flex-row justify-start items-center flex-nowrap gap-[72px] p-20 top-[10047.00px]"
        >
          <div
            id="_7065_1227__Card_box"
            className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[396.00px] w-[380.00px] flex flex-col justify-start items-center flex-nowrap gap-[60px] px-16 py-[116px] rounded-[30px]"
          >
            <div
              id="I7065_1227_3426_4602__Frame"
              className="relative overflow-hidden h-[82.00px] w-[154.00px]"
            >
              <img
                id="I7065_1227_3426_4603__XMLID_1_"
                src="assets/images/xmlid_1_.svg"
                alt="XMLID_1_"
                className="absolute"
              />
            </div>

            <span
              id="I7065_1227_3426_4604__Still_Have_A_Questio"
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
              id="I7065_1227_3426_4605__Frame_316"
              className="relative h-[50.00px] w-[380.00px] flex flex-row justify-start items-start flex-nowrap gap-4"
            >
              <div
                id="I7065_1227_3426_4606__Group_83"
                className="relative h-[50.00px] w-[50.00px]"
              >
                <div
                  id="I7065_1227_3426_4607__Ellipse_800"
                  className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                ></div>

                <div
                  id="I7065_1227_3426_4608__Frame"
                  className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                >
                  <img
                    id="I7065_1227_3426_4610__Vector"
                    src="assets/images/vector_17.svg"
                    alt="Vector"
                    className="absolute"
                  />
                </div>
              </div>

              <div
                id="I7065_1227_3426_4611__Group_79"
                className="relative h-[50.00px] w-[50.00px]"
              >
                <div
                  id="I7065_1227_3426_4612__Ellipse_800"
                  className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                ></div>

                <div
                  id="I7065_1227_3426_4613__Frame"
                  className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                >
                  <img
                    id="I7065_1227_3426_4615__Vector"
                    src="assets/images/vector_18.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.26)]"
                  />
                </div>
              </div>

              <div
                id="I7065_1227_3426_4616__Group_80"
                className="relative h-[50.00px] w-[50.00px]"
              >
                <div
                  id="I7065_1227_3426_4617__Ellipse_800"
                  className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                ></div>

                <div
                  id="I7065_1227_3426_4618__Frame"
                  className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                >
                  <img
                    id="I7065_1227_3426_4619__Group"
                    src="assets/images/group_2.svg"
                    alt="Group"
                    className="absolute"
                  />
                </div>
              </div>

              <div
                id="I7065_1227_3426_4622__Group_81"
                className="relative h-[50.00px] w-[50.00px]"
              >
                <div
                  id="I7065_1227_3426_4623__Ellipse_800"
                  className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                ></div>

                <div
                  id="I7065_1227_3426_4624__ri_twitter-x-line"
                  className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                >
                  <img
                    id="I7065_1227_3426_4625__Vector"
                    src="assets/images/vector_19.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.08)]"
                  />
                </div>
              </div>

              <div
                id="I7065_1227_3426_4626__Group_84"
                className="relative h-[50.00px] w-[50.00px]"
              >
                <div
                  id="I7065_1227_3426_4627__Ellipse_800"
                  className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                ></div>

                <div
                  id="I7065_1227_3426_4628__Frame"
                  className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                >
                  <img
                    id="I7065_1227_3426_4630__Group_166"
                    src="assets/images/group_166.svg"
                    alt="Group_166"
                    className="absolute top-[calc(100%_*_0.14)]"
                  />
                </div>
              </div>

              <div
                id="I7065_1227_3426_4633__Group_85"
                className="relative h-[50.00px] w-[50.00px]"
              >
                <div
                  id="I7065_1227_3426_4634__Ellipse_800"
                  className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[50.00px] w-[50.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                ></div>

                <div
                  id="I7065_1227_3426_4635__Frame"
                  className="absolute overflow-hidden h-[22.00px] w-[22.00px] left-[calc(50%-11.00px)] top-[calc(50%-11.00px)]"
                >
                  <img
                    id="I7065_1227_3426_4638__14_tiktok"
                    src="assets/images/14tiktok.svg"
                    alt="_14_tiktok"
                    className="absolute"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            id="_7065_1228__Frame_589"
            className="relative h-[624.00px] w-[700.00px] flex flex-col justify-start items-start flex-nowrap gap-12"
          >
            <div
              id="_7065_1229__Frame_588"
              className="relative h-[504.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-6"
            >
              <div
                id="_7065_1230__Frame_586"
                className="relative h-[96.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-8"
              >
                <div
                  id="_7065_1231__Input_filled"
                  className="relative h-[96.00px] w-[334.00px] flex flex-col justify-start items-start flex-nowrap gap-2"
                >
                  <span
                    id="I7065_1231_3390_26178__Label"
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
                    id="I7065_1231_3390_26179__Frame_576"
                    className="relative border h-[26.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                  >
                    <div
                      id="I7065_1231_3390_26235__Frame_1408"
                      className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7065_1231_3390_26836__Frame_1409"
                        className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                      >
                        <span
                          id="I7065_1231_3390_26180__Enter_your_name___"
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
                  id="_7065_1232__Input_filled"
                  className="relative h-[96.00px] w-[334.00px] flex flex-col justify-start items-start flex-nowrap gap-2"
                >
                  <span
                    id="I7065_1232_3390_26178__Label"
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
                    id="I7065_1232_3390_26179__Frame_576"
                    className="relative border h-[26.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                  >
                    <div
                      id="I7065_1232_3390_26235__Frame_1408"
                      className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7065_1232_3390_26836__Frame_1409"
                        className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                      >
                        <span
                          id="I7065_1232_3390_26180__Enter_your_name___"
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
                id="_7065_1233__Frame_589"
                className="relative h-[96.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-8"
              >
                <div
                  id="_7065_1234__Input_filled"
                  className="relative h-[96.00px] w-[334.00px] flex flex-col justify-start items-start flex-nowrap gap-2"
                >
                  <span
                    id="I7065_1234_3390_26178__Label"
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
                    id="I7065_1234_3390_26179__Frame_576"
                    className="relative border h-[26.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                  >
                    <div
                      id="I7065_1234_3390_26235__Frame_1408"
                      className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7065_1234_3390_26836__Frame_1409"
                        className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                      >
                        <span
                          id="I7065_1234_3390_26180__Enter_your_name___"
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
                  id="_7065_1235__Input_filled"
                  className="relative h-[96.00px] w-[334.00px] flex flex-col justify-start items-start flex-nowrap gap-2"
                >
                  <span
                    id="I7065_1235_3390_26178__Label"
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
                    id="I7065_1235_3390_26179__Frame_576"
                    className="relative border h-[26.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                  >
                    <div
                      id="I7065_1235_3390_26235__Frame_1408"
                      className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7065_1235_3390_26836__Frame_1409"
                        className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                      >
                        <span
                          id="I7065_1235_3390_26180__Enter_your_name___"
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
                        id="I7065_1235_3390_26834__chevron-down"
                        className="relative overflow-hidden h-[24.00px] w-[24.00px]"
                      >
                        <img
                          id="I7065_1235_3390_26834_5616_226175__elements"
                          src="assets/images/elements.svg"
                          alt="elements"
                          className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.38)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1236__Input_filled"
                className="relative h-[264.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2"
              >
                <span
                  id="I7065_1236_3390_26178__Label"
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
                  id="I7065_1236_3390_26179__Frame_576"
                  className="relative border h-[194.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                >
                  <div
                    id="I7065_1236_3390_26235__Frame_1408"
                    className="relative h-[196.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                  >
                    <div
                      id="I7065_1236_3390_26836__Frame_1409"
                      className="relative h-[196.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                    >
                      <span
                        id="I7065_1236_3390_26180__Enter_your_name___"
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
              id="_7065_1237__Button"
              className="relative bg-[linear-gradient(181.50027606835522deg,rgba(99,49,241,1.00)_0.0%,rgba(99,49,241,1.00)_53.00902724266052%,rgba(109,67,227,1.00)_68.56226921081543%,rgba(159,99,255,1.00)_100.0%)] border h-[30.00px] w-[calc(100%-48px-48px)] flex flex-row justify-center items-center flex-nowrap gap-3 px-12 py-5 rounded-[100px] border-solid"
            >
              <div
                id="I7065_1237_3390_27447__Frame_456"
                className="relative h-[32.00px] w-[32.00px]"
              >
                <img
                  id="I7065_1237_3390_27447_3390_26772__Vector"
                  src="assets/images/vector_20.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.57)] top-[calc(100%_*_0.30)]"
                />
                <img
                  id="I7065_1237_3390_27447_3390_26773__Vector"
                  src="assets/images/vector_21.svg"
                  alt="Vector"
                  className="absolute"
                />
              </div>

              <span
                id="I7065_1237_3390_27210__Sign_Up"
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
          id="_7065_1238__Frame_1586"
          className="absolute h-[680.00px] w-[1280.00px] left-[calc(50%-720.00px)] flex flex-col justify-start items-center flex-nowrap gap-8 p-20 top-[9207.00px]"
        >
          <div
            id="_7065_1239__Frame_1201"
            className="relative h-[592.00px] w-[1280.00px] flex flex-col justify-start items-center flex-nowrap gap-12"
          >
            <div
              id="_7065_1240__Frame_481"
              className="relative h-[144.00px] w-[calc(100%-0px-0px)] flex flex-row justify-center items-center flex-nowrap gap-4"
            >
              <span
                id="_7065_1241__Did_You_Hear_about_O"
                className="flex justify-start text-left items-start h-[144.00px] w-[666.00px] relative"
              >
                <span
                  className="bg-white bg-clip-text text-transparent not-italic text-[64.0px] font-medium leading-[72.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  Did You Hear about Our Podcast?
                </span>
              </span>
              <span
                id="_7065_1242__Based_on_the_descrip"
                className="flex justify-center text-center items-start h-[56.00px] w-[590.00px] relative"
              >
                <span
                  className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  Based on the description of Metro Solver and the image
                  provided, here is a 6-step process that Metro Solver uses to
                  scale a customer&#39;s business
                </span>
              </span>
            </div>

            <div
              id="_7065_1243__Frame_1199"
              className="relative h-[400.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-8"
            >
              <div
                id="_7065_1244__Frame_1197"
                className="relative h-[400.00px] w-[624.00px]"
              >
                <div
                  id="_7065_1245__image"
                  className="absolute h-[400.00px] w-[624.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                  style={{
                    background:
                      "url(assets/images/image.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1247__Ellipse_817"
                  className="absolute bg-[rgba(255,255,255,0.04)] h-[60.00px] w-[60.00px] backdrop-blur-[200.0px] rounded-[50%] left-[282.00px] top-[170.00px]"
                ></div>

                <div
                  id="_7065_1248__Frame"
                  className="absolute overflow-hidden h-[20.00px] w-[20.00px] left-[calc(50%-10.00px)] top-[calc(50%-10.00px)]"
                >
                  <img
                    id="_7065_1250__Vector"
                    src="assets/images/vector_22.svg"
                    alt="Vector"
                    className="absolute top-[calc(100%_*_-0.00)] left-[calc(100%_*_0.05)]"
                  />
                </div>

                <div
                  id="_7065_1251__Frame_1196"
                  className="absolute h-[112.00px] w-[624.00px] left-[0.00px] top-[288.00px]"
                >
                  <div
                    id="_7065_1252__image"
                    className="absolute bg-[linear-gradient(179.99999932680623deg,rgba(0,0,0,0.00)_0.0%,rgba(0,0,0,0.63)_34.61538553237915%,rgba(0,0,0,0.80)_62.0192289352417%,rgba(0,0,0,0.90)_100.0%)] h-[112.00px] w-[624.00px] rounded-br-[24.0px] rounded-bl-[24.0px] left-[0.00px] top-[0.00px]"
                  ></div>

                  <span
                    id="_7065_1253__How_Brands_Can_Prepa"
                    className="flex justify-start text-left items-start h-[64.00px] w-[576.00px] absolute left-[24.00px] top-[24.00px]"
                  >
                    <span
                      className="bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      How Brands Can Prepare for Black
                      <br />
                      Friday &amp; Christmas
                    </span>
                  </span>
                </div>

                <div
                  id="_7065_1254__Frame_1605"
                  className="absolute h-[20.00px] w-[556.00px] flex flex-row justify-between items-start flex-nowrap p-2.5 left-[24.00px] top-[24.00px]"
                >
                  <div
                    id="_7065_1255__Frame_1584"
                    className="absolute bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] w-[123.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl left-[405.00px] top-[0.00px]"
                  >
                    <div
                      id="I7065_1255_3543_35028__calendar"
                      className="relative h-[24.00px] w-[24.00px]"
                    >
                      <div
                        id="I7065_1255_3543_35028_3390_26722__Frame_615"
                        className="absolute h-[20.00px] w-[18.00px] left-[calc(50%-9.00px)] top-[calc(50%-10.00px)]"
                      >
                        <img
                          id="I7065_1255_3543_35028_3390_26723__Vector"
                          src="assets/images/vector_23.svg"
                          alt="Vector"
                          className="absolute"
                        />
                      </div>
                    </div>

                    <span
                      id="I7065_1255_3543_35029__Mar_11__2025"
                      className="flex justify-center text-center items-start h-[24.00px] w-[89.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Mar 11, 2025
                      </span>
                    </span>
                  </div>

                  <div
                    id="_7065_1256__Frame_1585"
                    className="absolute bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] w-[105.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl left-[0.00px] top-[0.00px]"
                  >
                    <div
                      id="I7065_1256_3543_35028__Clock"
                      className="relative overflow-hidden h-[24.00px] w-[24.00px]"
                    >
                      <img
                        id="I7065_1256_3543_35028_3390_26725__Vector"
                        src="assets/images/vector_24.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <span
                      id="I7065_1256_3543_35029__Mar_11__2025"
                      className="flex justify-center text-center items-start h-[24.00px] w-[71.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        30 Minute
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1257__Frame_1198"
                className="relative h-[400.00px] w-[624.00px]"
              >
                <div
                  id="_7065_1258__image"
                  className="absolute h-[400.00px] w-[624.00px] rounded-3xl left-[0.00px] top-[0.00px]"
                  style={{
                    background:
                      "url(assets/images/image_1.png) 100% / cover no-repeat, url(assets/images/null) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1260__Ellipse_817"
                  className="absolute bg-[rgba(255,255,255,0.04)] h-[60.00px] w-[60.00px] backdrop-blur-[200.0px] rounded-[50%] left-[282.00px] top-[170.00px]"
                ></div>

                <div
                  id="_7065_1261__Frame"
                  className="absolute overflow-hidden h-[20.00px] w-[20.00px] left-[calc(50%-10.00px)] top-[calc(50%-10.00px)]"
                >
                  <img
                    id="_7065_1263__Vector"
                    src="assets/images/vector_25.svg"
                    alt="Vector"
                    className="absolute top-[calc(100%_*_-0.00)] left-[calc(100%_*_0.05)]"
                  />
                </div>

                <div
                  id="_7065_1264__Frame_1196"
                  className="absolute h-[112.00px] w-[624.00px] left-[0.00px] top-[288.00px]"
                >
                  <div
                    id="_7065_1265__image"
                    className="absolute bg-[linear-gradient(179.99999932680623deg,rgba(0,0,0,0.00)_0.0%,rgba(0,0,0,0.63)_34.61538553237915%,rgba(0,0,0,0.80)_62.0192289352417%,rgba(0,0,0,0.90)_100.0%)] h-[112.00px] w-[624.00px] rounded-br-[24.0px] rounded-bl-[24.0px] left-[0.00px] top-[0.00px]"
                  ></div>

                  <span
                    id="_7065_1266__How_Brands_Can_Prepa"
                    className="flex justify-start text-left items-start h-[64.00px] w-[576.00px] absolute left-[24.00px] top-[24.00px]"
                  >
                    <span
                      className="bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      How Brands Can Prepare for Black
                      <br />
                      Friday &amp; Christmas
                    </span>
                  </span>
                </div>

                <div
                  id="_7065_1267__Frame_1606"
                  className="absolute h-[20.00px] w-[556.00px] flex flex-row justify-between items-start flex-nowrap p-2.5 left-[24.00px] top-[24.00px]"
                >
                  <div
                    id="_7065_1268__Frame_1584"
                    className="absolute bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] w-[123.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl left-[405.00px] top-[0.00px]"
                  >
                    <div
                      id="I7065_1268_3543_35028__calendar"
                      className="relative h-[24.00px] w-[24.00px]"
                    >
                      <div
                        id="I7065_1268_3543_35028_3390_26722__Frame_615"
                        className="absolute h-[20.00px] w-[18.00px] left-[calc(50%-9.00px)] top-[calc(50%-10.00px)]"
                      >
                        <img
                          id="I7065_1268_3543_35028_3390_26723__Vector"
                          src="assets/images/vector_26.svg"
                          alt="Vector"
                          className="absolute"
                        />
                      </div>
                    </div>

                    <span
                      id="I7065_1268_3543_35029__Mar_11__2025"
                      className="flex justify-center text-center items-start h-[24.00px] w-[89.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Mar 11, 2025
                      </span>
                    </span>
                  </div>

                  <div
                    id="_7065_1269__Frame_1585"
                    className="absolute bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] w-[105.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl left-[0.00px] top-[0.00px]"
                  >
                    <div
                      id="I7065_1269_3543_35028__Clock"
                      className="relative overflow-hidden h-[24.00px] w-[24.00px]"
                    >
                      <img
                        id="I7065_1269_3543_35028_3390_26725__Vector"
                        src="assets/images/vector_27.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <span
                      id="I7065_1269_3543_35029__Mar_11__2025"
                      className="flex justify-center text-center items-start h-[24.00px] w-[71.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        30 Minute
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_7065_1270__Component_1"
            className="relative h-[56.00px] w-[136.00px] flex flex-row justify-start items-center flex-nowrap gap-6"
          >
            <div
              id="I7065_1270_3435_19783__Group_88"
              className="relative h-[56.00px] w-[56.00px]"
            >
              <div
                id="I7065_1270_3435_19784__Ellipse_4"
                className="absolute bg-[rgba(40,48,63,1.00)] scale-x-[-1.0] origin-[0_0] h-[56.00px] w-[56.00px] rounded-[50%] scale-y-[1.0] left-[0.00px] top-[0.00px]"
              ></div>

              <div
                id="I7065_1270_5616_226895__chevron-left"
                className="absolute overflow-hidden h-[34.00px] w-[34.00px] left-[calc(50%-72.50px)] top-[calc(50%-17.00px)]"
              >
                <img
                  id="I7065_1270_5616_226895_5616_226870__Vector_6902"
                  src="assets/images/vector_6902.svg"
                  alt="Vector_6902"
                  className="absolute rotate-[-90.00deg] origin-[0_0] left-[calc(100%_*_0.38)] top-[calc(100%_*_0.75)]"
                />
              </div>
            </div>

            <div
              id="I7065_1270_3435_19787__Group_87"
              className="relative h-[56.00px] w-[56.00px]"
            >
              <div
                id="I7065_1270_3435_19788__Ellipse_4"
                className="absolute bg-[linear-gradient(3.585720918408697E-6deg,rgba(65,41,90,1.00)_0.0%,rgba(47,7,67,1.00)_100.0%)] h-[56.00px] w-[56.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
              ></div>

              <div
                id="I7065_1270_5616_226919__chevron-right"
                className="absolute overflow-hidden h-[34.00px] w-[34.00px] left-[calc(50%-17.00px)] top-[calc(50%-17.00px)]"
              >
                <img
                  id="I7065_1270_5616_226919_5616_226872__Vector_6902"
                  src="assets/images/vector_6902_1.svg"
                  alt="Vector_6902"
                  className="absolute rotate-[90.00deg] scale-x-[-1.0] origin-[0_0] scale-y-[1.0] left-[calc(100%_*_0.63)] top-[calc(100%_*_0.75)]"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id="_7065_1271__Component_"
          className="absolute h-[1024.00px] w-[1440.00px] left-[calc(50%-720.00px)] flex flex-col justify-center items-center flex-nowrap gap-12 px-0 py-20 top-[8023.00px]"
        >
          <div
            id="I7065_1271_3554_24576__Frame_481"
            className="relative h-[216.00px] w-[calc(100%-80px-80px)] flex flex-col justify-center items-center flex-nowrap gap-4 px-20 py-0"
          >
            <span
              id="I7065_1271_3554_24577__The_Success_Stories_"
              className="flex justify-center text-center items-start h-[144.00px] w-[732.00px] relative"
            >
              <span
                className="bg-white bg-clip-text text-transparent not-italic text-[64.0px] font-medium leading-[72.00px]"
                style={{
                  fontFamily: "Outfit",
                }}
              >
                The Success Stories, <br />
                Case Studies &amp; Blog
              </span>
            </span>
            <span
              id="I7065_1271_3554_24578__Based_on_the_descrip"
              className="flex justify-center text-center items-start h-[56.00px] w-[590.00px] relative"
            >
              <span
                className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                style={{
                  fontFamily: "Outfit",
                }}
              >
                Based on the description of Metro Solver and the image provided,
                here is a 6-step process that Metro Solver uses to scale a
                customer&#39;s business
              </span>
            </span>
          </div>

          <div
            id="I7065_1271_3554_24579__Frame_1620"
            className="relative h-[656.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-8"
          >
            <div
              id="I7065_1271_3554_24580__Frame_1477"
              className="relative h-[56.00px] w-[calc(100%-80px-80px)] flex flex-row justify-start items-center flex-nowrap gap-6 px-20 py-0"
            >
              <div
                id="I7065_1271_3554_24581__Button"
                className="relative bg-[linear-gradient(3.585720918408697E-6deg,rgba(65,41,90,1.00)_0.0%,rgba(47,7,67,1.00)_100.0%)] border h-[22.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px] border-solid"
              >
                <span
                  id="I7065_1271_3554_24581_3390_27233__Sign_Up"
                  className="flex justify-center text-center items-start h-[24.00px] w-[108.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Success Stories
                  </span>
                </span>
              </div>

              <div
                id="I7065_1271_3554_24582__Button"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px]"
              >
                <span
                  id="I7065_1271_3554_24582_3390_27235__Sign_Up"
                  className="flex justify-center text-center items-start h-[24.00px] w-[91.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Case Studies
                  </span>
                </span>
              </div>

              <div
                id="I7065_1271_3554_24583__Button"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px]"
              >
                <span
                  id="I7065_1271_3554_24583_3390_27235__Sign_Up"
                  className="flex justify-center text-center items-start h-[24.00px] w-[105.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Blog and News
                  </span>
                </span>
              </div>
            </div>

            <div
              id="I7065_1271_3554_24584__Frame_1618"
              className="relative h-[568.00px] w-[calc(100%-80px-80px)] flex flex-row justify-start items-center flex-nowrap gap-8 px-20 py-0"
            >
              <div
                id="I7065_1271_3554_24585__Stories___Case_Studi"
                className="relative h-[568.00px] w-[405.00px] flex flex-col justify-start items-start flex-nowrap"
              >
                <div
                  id="I7065_1271_3554_24585_3445_28963__image"
                  className="relative h-[270.00px] w-full rounded-t-[32.0px]"
                  style={{
                    background:
                      "url(assets/images/image_2.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="I7065_1271_3554_24585_3445_28964__Frame_1134"
                  className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[250.00px] w-[calc(100%-24px-24px)] flex flex-col justify-center items-center flex-nowrap gap-8 p-6 rounded-br-[32.0px] rounded-bl-[32.0px]"
                >
                  <div
                    id="I7065_1271_3554_24585_3445_28965__Frame_1141"
                    className="relative h-[122.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1271_3554_24585_3445_28966__The_Future_of_Metro_"
                      className="flex justify-start text-left items-start h-[64.00px] w-[357.00px] relative"
                    >
                      <span
                        className="bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        The Future of Metro Systems by Company
                      </span>
                    </span>
                    <span
                      id="I7065_1271_3554_24585_3445_28967__Provide_a_quick_intr"
                      className="flex justify-start text-left items-start h-[48.00px] w-[357.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Provide a quick introduction to your metro solver
                        company. Highlight your mission, core expertise&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1271_3554_24585_3554_24092__Frame_1142"
                    className="relative h-[96.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-4"
                  >
                    <div
                      id="I7065_1271_3554_24585_3554_24093__Frame_1604"
                      className="relative h-[40.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7065_1271_3554_24585_3554_24094__Tag"
                        className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl"
                      >
                        <span
                          id="I7065_1271_3554_24585_3554_24094_3543_35029__Mar_11__2025"
                          className="flex justify-center text-center items-start h-[24.00px] w-[87.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                            style={{
                              fontFamily: "Outfit",
                            }}
                          >
                            50M+ Views
                          </span>
                        </span>
                      </div>

                      <div
                        id="I7065_1271_3554_24585_3554_24095__Tag"
                        className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl"
                      >
                        <span
                          id="I7065_1271_3554_24585_3554_24095_3543_35029__Mar_11__2025"
                          className="flex justify-center text-center items-start h-[24.00px] w-[111.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                            style={{
                              fontFamily: "Outfit",
                            }}
                          >
                            39% Lower CPA
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="I7065_1271_3554_24585_3554_24096__Tag"
                      className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl"
                    >
                      <span
                        id="I7065_1271_3554_24585_3554_24096_3543_35029__Mar_11__2025"
                        className="flex justify-center text-center items-start h-[24.00px] w-[162.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          $2M+ Sales Generated
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="I7065_1271_3554_24586__Stories___Case_Studi"
                className="relative h-[568.00px] w-[405.00px] flex flex-col justify-start items-start flex-nowrap"
              >
                <div
                  id="I7065_1271_3554_24586_3445_28979__image"
                  className="relative h-[269.00px] w-full rounded-t-[32.0px] border-solid border-[1.0px_1.0px_0.0px_1.0px]"
                  style={{
                    background:
                      "url(assets/images/null) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="I7065_1271_3554_24586_3445_28980__Frame_1134"
                  className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[249.00px] w-[calc(100%-24px-24px)] flex flex-col justify-center items-center flex-nowrap gap-8 p-6 rounded-br-[32.0px] rounded-bl-[32.0px] border-solid border-[0.0px_1.0px_1.0px_1.0px]"
                >
                  <div
                    id="I7065_1271_3554_24586_3445_28981__Frame_1141"
                    className="relative h-[122.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1271_3554_24586_3445_28982__The_Future_of_Metro_"
                      className="flex justify-start text-left items-start h-[64.00px] w-[357.00px] relative"
                    >
                      <span
                        className="bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        The Future of Metro Systems by Company
                      </span>
                    </span>
                    <span
                      id="I7065_1271_3554_24586_3445_28983__Provide_a_quick_intr"
                      className="flex justify-start text-left items-start h-[48.00px] w-[357.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Provide a quick introduction to your metro solver
                        company. Highlight your mission, core expertise
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1271_3554_24586_3543_35257__Frame_1142"
                    className="relative h-[96.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-4"
                  >
                    <div
                      id="I7065_1271_3554_24586_3543_35258__Frame_1604"
                      className="relative h-[40.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7065_1271_3554_24586_3543_35259__Tag"
                        className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl"
                      >
                        <span
                          id="I7065_1271_3554_24586_3543_35259_3543_35029__Mar_11__2025"
                          className="flex justify-center text-center items-start h-[24.00px] w-[87.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                            style={{
                              fontFamily: "Outfit",
                            }}
                          >
                            50M+ Views
                          </span>
                        </span>
                      </div>

                      <div
                        id="I7065_1271_3554_24586_3543_35260__Tag"
                        className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl"
                      >
                        <span
                          id="I7065_1271_3554_24586_3543_35260_3543_35029__Mar_11__2025"
                          className="flex justify-center text-center items-start h-[24.00px] w-[111.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                            style={{
                              fontFamily: "Outfit",
                            }}
                          >
                            39% Lower CPA
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="I7065_1271_3554_24586_3543_35261__Tag"
                      className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl"
                    >
                      <span
                        id="I7065_1271_3554_24586_3543_35261_3543_35029__Mar_11__2025"
                        className="flex justify-center text-center items-start h-[24.00px] w-[162.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          $2M+ Sales Generated
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="I7065_1271_3554_24587__Stories___Case_Studi"
                className="relative h-[568.00px] w-[405.00px] flex flex-col justify-start items-start flex-nowrap"
              >
                <div
                  id="I7065_1271_3554_24587_3445_28963__image"
                  className="relative h-[270.00px] w-full rounded-t-[32.0px]"
                  style={{
                    background:
                      "url(assets/images/null) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="I7065_1271_3554_24587_3445_28964__Frame_1134"
                  className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[250.00px] w-[calc(100%-24px-24px)] flex flex-col justify-center items-center flex-nowrap gap-8 p-6 rounded-br-[32.0px] rounded-bl-[32.0px]"
                >
                  <div
                    id="I7065_1271_3554_24587_3445_28965__Frame_1141"
                    className="relative h-[122.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1271_3554_24587_3445_28966__The_Future_of_Metro_"
                      className="flex justify-start text-left items-start h-[64.00px] w-[357.00px] relative"
                    >
                      <span
                        className="bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        The Future of Metro Systems by Company
                      </span>
                    </span>
                    <span
                      id="I7065_1271_3554_24587_3445_28967__Provide_a_quick_intr"
                      className="flex justify-start text-left items-start h-[48.00px] w-[357.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Provide a quick introduction to your metro solver
                        company. Highlight your mission, core expertise&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1271_3554_24587_3554_24092__Frame_1142"
                    className="relative h-[96.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-4"
                  >
                    <div
                      id="I7065_1271_3554_24587_3554_24093__Frame_1604"
                      className="relative h-[40.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7065_1271_3554_24587_3554_24094__Tag"
                        className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl"
                      >
                        <span
                          id="I7065_1271_3554_24587_3554_24094_3543_35029__Mar_11__2025"
                          className="flex justify-center text-center items-start h-[24.00px] w-[87.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                            style={{
                              fontFamily: "Outfit",
                            }}
                          >
                            50M+ Views
                          </span>
                        </span>
                      </div>

                      <div
                        id="I7065_1271_3554_24587_3554_24095__Tag"
                        className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex-1 flex flex-row justify-center items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl"
                      >
                        <span
                          id="I7065_1271_3554_24587_3554_24095_3543_35029__Mar_11__2025"
                          className="flex justify-center text-center items-start h-[24.00px] w-[111.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                            style={{
                              fontFamily: "Outfit",
                            }}
                          >
                            39% Lower CPA
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="I7065_1271_3554_24587_3554_24096__Tag"
                      className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[24.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-6 py-2 rounded-3xl"
                    >
                      <span
                        id="I7065_1271_3554_24587_3554_24096_3543_35029__Mar_11__2025"
                        className="flex justify-center text-center items-start h-[24.00px] w-[162.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                          style={{
                            fontFamily: "Outfit",
                          }}
                        >
                          $2M+ Sales Generated
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="I7065_1271_3554_24588__Button"
            className="relative bg-[linear-gradient(3.585720918408697E-6deg,rgba(65,41,90,1.00)_0.0%,rgba(47,7,67,1.00)_100.0%)] border h-[22.00px] flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px] border-solid"
          >
            <span
              id="I7065_1271_3554_24588_3390_27233__Sign_Up"
              className="flex justify-center text-center items-start h-[24.00px] w-[76.00px] relative"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
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
          id="_7065_1272__Frame_1585"
          className="absolute h-[688.00px] w-[1280.00px] left-[calc(50%-720.00px)] flex flex-col justify-start items-center flex-nowrap gap-8 p-20 top-[7175.00px]"
        >
          <div
            id="_7065_1273__Frame_1022"
            className="relative h-[600.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap gap-12"
          >
            <div
              id="_7065_1274__Frame_481"
              className="relative h-[144.00px] flex flex-col justify-center items-center flex-nowrap gap-4"
            >
              <span
                id="_7065_1275__What_People_Say"
                className="flex justify-center text-center items-start h-[72.00px] w-[484.00px] relative"
              >
                <span
                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[64.0px] font-medium leading-[72.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  What People Say
                </span>
              </span>
              <span
                id="_7065_1276__Based_on_the_descrip"
                className="flex justify-center text-center items-start h-[56.00px] w-[590.00px] relative"
              >
                <span
                  className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  Based on the description of Metro Solver and the image
                  provided, here is a 6-step process that Metro Solver uses to
                  scale a customer&#39;s business
                </span>
              </span>
            </div>

            <div
              id="_7065_1277__Frame_1021"
              className="relative h-[408.00px] w-[1279.00px] flex flex-row justify-start items-center flex-nowrap gap-8"
            >
              <div
                id="_7065_1278__Frame_1017"
                className="relative bg-[rgba(10,16,28,1.00)] h-[344.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-[32px]"
              >
                <div
                  id="_7065_1279__Frame_1032"
                  className="relative h-[94.00px] flex flex-row justify-center items-center flex-nowrap gap-[27px]"
                >
                  <div
                    id="_7065_1280__Ellipse_828"
                    className="relative h-[94.00px] w-[94.00px] rounded-[50%] border-solid border-[1.5px]"
                    style={{
                      background:
                        "url(assets/images/ellipse_828_1.png) 100% / cover no-repeat",
                    }}
                  ></div>

                  <div
                    id="_7065_1281__Frame_1602"
                    className="relative h-[36.00px] w-[220.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
                  >
                    <div
                      id="_7065_1282__Frame"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1282_3481_31434__Vector"
                        src="assets/images/vector_28.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-14.37px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1283__Frame"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1283_3481_31434__Vector"
                        src="assets/images/vector_29.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-14.37px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1284__Frame"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1284_3481_31434__Vector"
                        src="assets/images/vector_30.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-14.37px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1285__Frame"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1285_3481_31434__Vector"
                        src="assets/images/vector_31.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-14.37px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1286__Frame"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1286_3481_31434__Vector"
                        src="assets/images/vector_32.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-14.37px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>
                  </div>
                </div>

                <div
                  id="_7065_1287__Frame_1020"
                  className="relative h-[154.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                >
                  <div
                    id="_7065_1288__Frame_553"
                    className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-3"
                  >
                    <span
                      id="_7065_1289__Katie_Johnson"
                      className="flex justify-start text-left items-start h-[32.00px] w-[150.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Katie Johnson
                      </span>
                    </span>
                    <img
                      id="_7065_1290__Line_3"
                      src="assets/images/line_3.svg"
                      alt="Line_3"
                      className="relative rotate-[-90.00deg] scale-x-[-1.0] scale-y-[-1.0]"
                    />
                    <span
                      id="_7065_1291__Founder_of_Strava"
                      className="flex justify-start text-left items-start h-[28.00px] w-[145.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Founder of Strava
                      </span>
                    </span>
                  </div>

                  <span
                    id="_7065_1292___Metro_Solver_with_M"
                    className="flex justify-start text-left items-start h-[112.00px] w-[341.00px] relative"
                  >
                    <span
                      className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      “Metro Solver with Mixer was the best solution. I am very
                      satisfied with the team and the work they did. I am
                      sincerely grateful for the work and effort.”
                    </span>
                  </span>
                </div>

                <div
                  id="_7065_1293__Frame_1019"
                  className="relative h-[32.00px] flex flex-row justify-center items-center flex-nowrap gap-3"
                >
                  <div
                    id="_7065_1294__Frame_1026"
                    className="relative h-[32.00px] w-[118.00px] flex flex-row justify-center items-center flex-nowrap gap-2"
                  >
                    <div
                      id="_7065_1295__Frame"
                      className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                    >
                      <img
                        id="I7065_1295_3481_31434__Vector"
                        src="assets/images/vector_33.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-12.77px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <span
                      id="_7065_1296__Google"
                      className="flex justify-start text-left items-start h-[32.00px] w-[78.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Google
                      </span>
                    </span>
                  </div>

                  <img
                    id="_7065_1297__Line_3"
                    src="assets/images/line_3_1.svg"
                    alt="Line_3"
                    className="relative rotate-[-90.00deg] scale-x-[-1.0] scale-y-[-1.0]"
                  />
                  <span
                    id="_7065_1298__Review_by_google"
                    className="flex justify-start text-left items-start h-[28.00px] w-[139.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Review by google
                    </span>
                  </span>
                </div>
              </div>

              <div
                id="_7065_1299__Frame_1018"
                className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[341.00px] w-[338.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-[32px] border-solid border-[1.5px]"
              >
                <div
                  id="_7065_1300__Frame_1033"
                  className="relative h-[94.00px] flex flex-row justify-center items-center flex-nowrap gap-[27px]"
                >
                  <div
                    id="_7065_1301__Ellipse_828"
                    className="relative h-[94.00px] w-[94.00px] rounded-[50%] border-solid border-[1.5px]"
                    style={{
                      background:
                        "url(assets/images/ellipse_828_3.png) 100% / cover no-repeat",
                    }}
                  ></div>

                  <div
                    id="_7065_1302__Frame_1601"
                    className="relative h-[36.00px] w-[220.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
                  >
                    <div
                      id="_7065_1303__trustpilot-2_1"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1303_3531_46985__Vector"
                        src="assets/images/vector_34.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1304__trustpilot-2_2"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1304_3531_46985__Vector"
                        src="assets/images/vector_35.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1305__trustpilot-2_3"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1305_3531_46985__Vector"
                        src="assets/images/vector_36.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1306__trustpilot-2_4"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1306_3531_46985__Vector"
                        src="assets/images/vector_37.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1307__trustpilot-2_5"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1307_3531_46985__Vector"
                        src="assets/images/vector_38.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.08)]"
                      />
                    </div>
                  </div>
                </div>

                <div
                  id="_7065_1308__Frame_1020"
                  className="relative h-[154.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                >
                  <div
                    id="_7065_1309__Frame_553"
                    className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-3"
                  >
                    <span
                      id="_7065_1310__Wade_Warren"
                      className="flex justify-start text-left items-start h-[32.00px] w-[149.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Wade Warren
                      </span>
                    </span>
                    <img
                      id="_7065_1311__Line_3"
                      src="assets/images/line_3_2.svg"
                      alt="Line_3"
                      className="relative rotate-[-90.00deg] scale-x-[-1.0] scale-y-[-1.0]"
                    />
                    <span
                      id="_7065_1312__Founder_of_Strava"
                      className="flex justify-start text-left items-start h-[28.00px] w-[145.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Founder of Strava
                      </span>
                    </span>
                  </div>

                  <span
                    id="_7065_1313___Metro_Solver_with_M"
                    className="flex justify-start text-left items-start h-[112.00px] w-[341.00px] relative"
                  >
                    <span
                      className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      “Metro Solver with Mixer was the best solution. I am very
                      satisfied with the team and the work they did. I am
                      sincerely grateful for the work and effort.”
                    </span>
                  </span>
                </div>

                <div
                  id="_7065_1314__Frame_1019"
                  className="relative h-[32.00px] flex flex-row justify-center items-center flex-nowrap gap-3"
                >
                  <div
                    id="_7065_1315__Frame_1018"
                    className="relative h-[32.00px] w-[142.00px] flex flex-row justify-start items-center flex-nowrap gap-2"
                  >
                    <div
                      id="_7065_1316__trustpilot-2_2"
                      className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                    >
                      <img
                        id="I7065_1316_3531_46985__Vector"
                        src="assets/images/vector_39.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <span
                      id="_7065_1317__Trustpilot"
                      className="flex justify-start text-left items-start h-[32.00px] w-[102.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Trustpilot
                      </span>
                    </span>
                  </div>

                  <img
                    id="_7065_1318__Line_3"
                    src="assets/images/line_3_3.svg"
                    alt="Line_3"
                    className="relative rotate-[-90.00deg] scale-x-[-1.0] scale-y-[-1.0]"
                  />
                  <span
                    id="_7065_1319__Review_by_Trustpilot"
                    className="flex justify-start text-left items-start h-[28.00px] w-[158.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Review by Trustpilot
                    </span>
                  </span>
                </div>
              </div>

              <div
                id="_7065_1320__Frame_1019"
                className="relative bg-[rgba(10,16,28,1.00)] h-[344.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-[32px]"
              >
                <div
                  id="_7065_1321__Frame_1034"
                  className="relative h-[94.00px] flex flex-row justify-center items-center flex-nowrap gap-[27px]"
                >
                  <div
                    id="_7065_1322__Ellipse_828"
                    className="relative h-[94.00px] w-[94.00px] rounded-[50%] border-solid border-[1.5px]"
                    style={{
                      background:
                        "url(assets/images/ellipse_828_5.png) 100% / cover no-repeat",
                    }}
                  ></div>

                  <div
                    id="_7065_1323__Frame_1602"
                    className="relative h-[36.00px] w-[220.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
                  >
                    <div
                      id="_7065_1324__Frame"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1324_3481_31434__Vector"
                        src="assets/images/vector_40.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-14.37px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1325__Frame"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1325_3481_31434__Vector"
                        src="assets/images/vector_41.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-14.37px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1326__Frame"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1326_3481_31434__Vector"
                        src="assets/images/vector_42.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-14.37px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1327__Frame"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1327_3481_31434__Vector"
                        src="assets/images/vector_43.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-14.37px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <div
                      id="_7065_1328__Frame"
                      className="relative overflow-hidden h-[36.00px] w-[36.00px]"
                    >
                      <img
                        id="I7065_1328_3481_31434__Vector"
                        src="assets/images/vector_44.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-14.37px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>
                  </div>
                </div>

                <div
                  id="_7065_1329__Frame_1020"
                  className="relative h-[154.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                >
                  <div
                    id="_7065_1330__Frame_553"
                    className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-3"
                  >
                    <span
                      id="_7065_1331__Jenny_Wilson"
                      className="flex justify-start text-left items-start h-[32.00px] w-[141.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Jenny Wilson
                      </span>
                    </span>
                    <img
                      id="_7065_1332__Line_3"
                      src="assets/images/line_3_4.svg"
                      alt="Line_3"
                      className="relative rotate-[-90.00deg] scale-x-[-1.0] scale-y-[-1.0]"
                    />
                    <span
                      id="_7065_1333__Founder_of_Strava"
                      className="flex justify-start text-left items-start h-[28.00px] w-[145.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Founder of Strava
                      </span>
                    </span>
                  </div>

                  <span
                    id="_7065_1334___Metro_Solver_with_M"
                    className="flex justify-start text-left items-start h-[112.00px] w-[341.00px] relative"
                  >
                    <span
                      className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      “Metro Solver with Mixer was the best solution. I am very
                      satisfied with the team and the work they did. I am
                      sincerely grateful for the work and effort.”
                    </span>
                  </span>
                </div>

                <div
                  id="_7065_1335__Frame_1019"
                  className="relative h-[32.00px] flex flex-row justify-center items-center flex-nowrap gap-3"
                >
                  <div
                    id="_7065_1336__Frame_1026"
                    className="relative h-[32.00px] w-[118.00px] flex flex-row justify-center items-center flex-nowrap gap-2"
                  >
                    <div
                      id="_7065_1337__Frame"
                      className="relative overflow-hidden h-[32.00px] w-[32.00px]"
                    >
                      <img
                        id="I7065_1337_3481_31434__Vector"
                        src="assets/images/vector_45.svg"
                        alt="Vector"
                        className="absolute top-[calc(50%-12.77px)] left-[calc(100%_*_0.08)]"
                      />
                    </div>

                    <span
                      id="_7065_1338__Google"
                      className="flex justify-start text-left items-start h-[32.00px] w-[78.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Google
                      </span>
                    </span>
                  </div>

                  <img
                    id="_7065_1339__Line_3"
                    src="assets/images/line_3_5.svg"
                    alt="Line_3"
                    className="relative rotate-[-90.00deg] scale-x-[-1.0] scale-y-[-1.0]"
                  />
                  <span
                    id="_7065_1340__Review_by_google"
                    className="flex justify-start text-left items-start h-[28.00px] w-[139.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Review by google
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_7065_1341__Component_1"
            className="relative h-[56.00px] w-[136.00px] flex flex-row justify-start items-center flex-nowrap gap-6"
          >
            <div
              id="I7065_1341_3435_19783__Group_88"
              className="relative h-[56.00px] w-[56.00px]"
            >
              <div
                id="I7065_1341_3435_19784__Ellipse_4"
                className="absolute bg-[rgba(40,48,63,1.00)] scale-x-[-1.0] origin-[0_0] h-[56.00px] w-[56.00px] rounded-[50%] scale-y-[1.0] left-[0.00px] top-[0.00px]"
              ></div>

              <div
                id="I7065_1341_5616_226895__chevron-left"
                className="absolute overflow-hidden h-[34.00px] w-[34.00px] left-[calc(50%-72.50px)] top-[calc(50%-17.00px)]"
              >
                <img
                  id="I7065_1341_5616_226895_5616_226870__Vector_6902"
                  src="assets/images/vector_6902_2.svg"
                  alt="Vector_6902"
                  className="absolute rotate-[-90.00deg] origin-[0_0] left-[calc(100%_*_0.38)] top-[calc(100%_*_0.75)]"
                />
              </div>
            </div>

            <div
              id="I7065_1341_3435_19787__Group_87"
              className="relative h-[56.00px] w-[56.00px]"
            >
              <div
                id="I7065_1341_3435_19788__Ellipse_4"
                className="absolute bg-[linear-gradient(3.585720918408697E-6deg,rgba(65,41,90,1.00)_0.0%,rgba(47,7,67,1.00)_100.0%)] h-[56.00px] w-[56.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
              ></div>

              <div
                id="I7065_1341_5616_226919__chevron-right"
                className="absolute overflow-hidden h-[34.00px] w-[34.00px] left-[calc(50%-17.00px)] top-[calc(50%-17.00px)]"
              >
                <img
                  id="I7065_1341_5616_226919_5616_226872__Vector_6902"
                  src="assets/images/vector_6902_3.svg"
                  alt="Vector_6902"
                  className="absolute rotate-[90.00deg] scale-x-[-1.0] origin-[0_0] scale-y-[1.0] left-[calc(100%_*_0.63)] top-[calc(100%_*_0.75)]"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id="_7065_1342__Frame_526"
          className="absolute h-[192.00px] w-[1440.00px] left-[calc(50%-720.00px)] flex flex-row justify-start items-center flex-nowrap gap-8 px-0 py-20 top-[6823.00px]"
        >
          <div
            id="_7065_1343__Frame_40"
            className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[128.00px] w-[241.00px] flex flex-col justify-center items-center flex-nowrap gap-1 px-[109px] py-8 rounded-3xl"
          >
            <div
              id="_7065_1344__Frame_488"
              className="relative h-[84.00px] w-[155.00px] flex flex-row justify-start items-center flex-nowrap gap-3"
            >
              <span
                id="_7065_1345__150"
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
                id="_7065_1346__Group_4"
                src="assets/images/group_4.svg"
                alt="Group_4"
                className="relative"
              />
            </div>

            <span
              id="_7065_1351__Current_Clients"
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
            id="_7065_1352__Frame_41"
            className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[128.00px] w-[313.00px] flex flex-col justify-center items-center flex-nowrap gap-1 px-[73px] py-8 rounded-3xl"
          >
            <div
              id="_7065_1353__Frame_488"
              className="relative h-[84.00px] w-[157.00px] flex flex-row justify-start items-center flex-nowrap gap-3"
            >
              <span
                id="_7065_1354__25k"
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
                id="_7065_1355__Group_4"
                src="assets/images/group_4_1.svg"
                alt="Group_4"
                className="relative"
              />
            </div>

            <span
              id="_7065_1360__Completed_Projects"
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
            id="_7065_1361__Frame_42"
            className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[128.00px] w-[316.00px] flex flex-col justify-center items-center flex-nowrap gap-1 px-[71px] py-8 rounded-3xl"
          >
            <div
              id="_7065_1362__Frame_488"
              className="relative h-[84.00px] w-[130.00px] flex flex-row justify-start items-center flex-nowrap gap-3"
            >
              <span
                id="_7065_1363__90"
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
                id="_7065_1364__Group_5"
                src="assets/images/group_5.svg"
                alt="Group_5"
                className="relative"
              />
            </div>

            <span
              id="_7065_1369__Metro_Solver_Teams"
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
          id="_7065_1370__Frame_1123"
          className="absolute h-[724.00px] w-[1440.00px] left-[calc(50%-720.00px)] top-[6099.00px]"
        >
          <div
            id="_7065_1371__Frame_1121"
            className="absolute h-[564.00px] w-[1280.00px] flex flex-col justify-start items-center flex-nowrap gap-[84px] left-[80.00px] top-[80.00px]"
          >
            <div
              id="_7065_1372__Frame_1119"
              className="relative h-[132.00px] flex flex-row justify-start items-center flex-nowrap gap-[271px]"
            >
              <div
                id="_7065_1373__Frame_1104"
                className="relative bg-[rgba(16,25,42,1.00)] h-[100.00px] w-[397.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-[100px]"
              >
                <div
                  id="_7065_1374__Frame_1100"
                  className="relative h-[32.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-2.5 px-6 py-[34px]"
                >
                  <span
                    id="_7065_1375__Delivery_and_Support"
                    className="flex justify-start text-left items-start h-[32.00px] w-[226.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Delivery and Support
                    </span>
                  </span>
                </div>

                <div
                  id="_7065_1376__Frame_1127"
                  className="relative h-[100.00px] w-[100.00px]"
                >
                  <div
                    id="_7065_1377__Ellipse_838"
                    className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[100.00px] w-[100.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                  ></div>

                  <div
                    id="_7065_1378__Frame"
                    className="absolute overflow-hidden h-[56.00px] w-[56.00px] left-[22.00px] top-[22.00px]"
                  >
                    <img
                      id="_7065_1380__Vector"
                      src="assets/images/vector_46.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.05)] top-[calc(100%_*_0.13)]"
                    />

                    <img
                      id="_7065_1382__Vector"
                      src="assets/images/vector_47.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.13)] top-[calc(100%_*_0.13)]"
                    />
                  </div>
                </div>
              </div>

              <div
                id="_7065_1383__Frame_1101"
                className="relative bg-[rgba(16,25,42,1.00)] h-[100.00px] w-[400.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-[100px]"
              >
                <div
                  id="_7065_1384__Frame_1124"
                  className="relative h-[100.00px] w-[100.00px]"
                >
                  <div
                    id="_7065_1385__Ellipse_838"
                    className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[100.00px] w-[100.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                  ></div>

                  <div
                    id="_7065_1386__Frame"
                    className="absolute overflow-hidden h-[56.00px] w-[56.00px] left-[calc(50%-28.00px)] top-[calc(50%-28.00px)]"
                  >
                    <img
                      id="_7065_1387__Group"
                      src="assets/images/group_3.svg"
                      alt="Group"
                      className="absolute left-[calc(100%_*_0.05)] top-[calc(100%_*_0.05)]"
                    />
                  </div>
                </div>

                <div
                  id="_7065_1391__Frame_1100"
                  className="relative h-[32.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-2.5 px-6 py-[34px]"
                >
                  <span
                    id="_7065_1392__Book_a_Call"
                    className="flex justify-start text-left items-start h-[32.00px] w-[222.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Book a Call
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div
              id="_7065_1393__Frame_1118"
              className="relative h-[132.00px] w-[calc(100%-0px-0px)] flex flex-row justify-between items-center flex-nowrap"
            >
              <div
                id="_7065_1394__Frame_1105"
                className="relative bg-[rgba(16,25,42,1.00)] h-[100.00px] w-[407.00px] flex flex-row justify-center items-center flex-nowrap gap-4 p-4 rounded-[100px]"
              >
                <div
                  id="_7065_1395__Frame_1100"
                  className="relative h-[32.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-2.5 px-6 py-[34px]"
                >
                  <span
                    id="_7065_1396__Quality_Assurance"
                    className="flex justify-start text-left items-start h-[32.00px] w-[194.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Quality Assurance
                    </span>
                  </span>
                </div>

                <div
                  id="_7065_1397__Frame_1128"
                  className="relative h-[100.00px] w-[100.00px]"
                >
                  <div
                    id="_7065_1398__Ellipse_838"
                    className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[100.00px] w-[100.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                  ></div>

                  <div
                    id="_7065_1399__vuesax_twotone_box-t"
                    className="absolute h-[56.00px] w-[56.00px] left-[22.00px] top-[22.00px]"
                  >
                    <img
                      id="_7065_1402__Group"
                      src="assets/images/group_6.svg"
                      alt="Group"
                      className="absolute left-[calc(100%_*_0.61)] top-[calc(100%_*_0.57)]"
                    />
                    <img
                      id="_7065_1405__Group_141"
                      src="assets/images/group_141.svg"
                      alt="Group_141"
                      className="absolute left-[calc(100%_*_0.14)] top-[calc(100%_*_0.13)]"
                    />
                    <img
                      id="_7065_1409__Vector"
                      className="absolute left-[calc(100%_*_0.05)] top-[calc(100%_*_0.05)]"
                    />
                  </div>
                </div>
              </div>

              <div
                id="_7065_1410__Frame_1102"
                className="relative bg-[rgba(16,25,42,1.00)] h-[100.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-[100px]"
              >
                <div
                  id="_7065_1411__Frame_1125"
                  className="relative h-[100.00px] w-[100.00px]"
                >
                  <div
                    id="_7065_1412__Ellipse_838"
                    className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[100.00px] w-[100.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                  ></div>

                  <div
                    id="_7065_1413__vuesax_twotone_statu"
                    className="absolute h-[56.00px] w-[56.00px] left-[calc(50%-28.00px)] top-[calc(50%-28.00px)]"
                  >
                    <img
                      id="_7065_1417__Vector"
                      src="assets/images/vector_48.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.29)] top-[calc(100%_*_0.24)]"
                    />

                    <img
                      id="_7065_1418__Vector"
                      src="assets/images/vector_49.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.08)]"
                    />
                    <img id="_7065_1419__Vector" className="absolute" />
                  </div>
                </div>

                <div
                  id="_7065_1420__Frame_1100"
                  className="relative h-[32.00px] w-[246.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-6 py-[34px]"
                >
                  <span
                    id="_7065_1421__Requirement_Analysis"
                    className="flex justify-start text-left items-start h-[32.00px] w-[229.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Requirement Analysis
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div
              id="_7065_1422__Frame_1120"
              className="relative h-[132.00px] flex flex-row justify-start items-center flex-nowrap gap-[271px]"
            >
              <div
                id="_7065_1423__Frame_1106"
                className="relative bg-[rgba(16,25,42,1.00)] h-[100.00px] w-[397.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-[100px]"
              >
                <div
                  id="_7065_1424__Frame_1100"
                  className="relative h-[32.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-2.5 px-6 py-[34px]"
                >
                  <span
                    id="_7065_1425__Implement___Develop"
                    className="flex justify-start text-left items-start h-[32.00px] w-[233.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Implement &amp; Develop
                    </span>
                  </span>
                </div>

                <div
                  id="_7065_1426__Frame_1129"
                  className="relative h-[100.00px] w-[100.00px]"
                >
                  <div
                    id="_7065_1427__Ellipse_838"
                    className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[100.00px] w-[100.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                  ></div>

                  <div
                    id="_7065_1428__Frame"
                    className="absolute overflow-hidden h-[56.00px] w-[56.00px] left-[22.00px] top-[22.00px]"
                  >
                    <img
                      id="_7065_1429__Group"
                      src="assets/images/group_7.svg"
                      alt="Group"
                      className="absolute left-[calc(100%_*_0.05)] top-[calc(100%_*_0.05)]"
                    />
                  </div>
                </div>
              </div>

              <div
                id="_7065_1432__Frame_1103"
                className="relative bg-[rgba(16,25,42,1.00)] h-[100.00px] w-[400.00px] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-[100px]"
              >
                <div
                  id="_7065_1433__Frame_1126"
                  className="relative h-[100.00px] w-[100.00px]"
                >
                  <div
                    id="_7065_1434__Ellipse_838"
                    className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[100.00px] w-[100.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                  ></div>

                  <div
                    id="_7065_1435__Frame"
                    className="absolute overflow-hidden h-[56.00px] w-[56.00px] left-[22.00px] top-[22.00px]"
                  >
                    <img
                      id="_7065_1437__Vector"
                      src="assets/images/vector_50.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.07)]"
                    />
                    <img
                      id="_7065_1439__Vector"
                      src="assets/images/vector_51.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.32)] top-[calc(100%_*_0.33)]"
                    />
                  </div>
                </div>

                <div
                  id="_7065_1440__Frame_1100"
                  className="relative h-[32.00px] w-[236.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-6 py-[34px]"
                >
                  <span
                    id="_7065_1441__Service_Customisatio"
                    className="flex justify-start text-left items-start h-[32.00px] w-[236.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      Service Customisation
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_7065_1442__Frame_1117"
            className="absolute h-[300.00px] w-[335.00px] left-[554.00px] top-[212.00px]"
          >
            <div
              id="_7065_1443__Frame_1099"
              className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[112.00px] w-[214.00px] left-[calc(50%-151.50px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-[43px] py-[94px] rounded-[1000px] top-[0.00px]"
            >
              <span
                id="_7065_1444__How_to_Works_"
                className="flex justify-center text-center items-start h-[112.00px] w-[213.00px] relative"
              >
                <span
                  className="bg-white bg-clip-text text-transparent not-italic text-[48.0px] font-medium leading-[56.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  How <br />
                  to Works?
                </span>
              </span>
            </div>

            <div
              id="_7065_1445__Ellipse_839"
              className="absolute h-[268.00px] w-[268.00px] left-[calc(50%-135.50px)] rounded-[50%] border-solid border-2 top-[16.00px]"
            ></div>

            <div
              id="_7065_1446__Frame_1113"
              className="absolute h-[32.00px] w-[205.00px] left-[calc(50%-103.50px)] flex flex-row justify-start items-center flex-nowrap gap-[85px] top-[260.00px]"
            >
              <div
                id="_7065_1447__Frame_1110"
                className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[28.00px] flex flex-col justify-center items-center flex-nowrap gap-2.5 px-[19px] py-0.5 rounded-[22px]"
              >
                <span
                  id="_7065_1448__04"
                  className="flex justify-start text-left items-start h-[28.00px] w-[23.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(252,182,53,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    04
                  </span>
                </span>
              </div>

              <div
                id="_7065_1449__Frame_1111"
                className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[28.00px] flex flex-col justify-center items-center flex-nowrap gap-2.5 px-[18px] py-0.5 rounded-[22px]"
              >
                <span
                  id="_7065_1450__03"
                  className="flex justify-start text-left items-start h-[28.00px] w-[22.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(252,182,53,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    03
                  </span>
                </span>
              </div>
            </div>

            <div
              id="_7065_1451__Frame_1116"
              className="absolute h-[32.00px] w-[335.00px] flex flex-row justify-between items-center flex-nowrap left-[0.00px] top-[134.00px]"
            >
              <div
                id="_7065_1452__Frame_1109"
                className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[28.00px] flex flex-col justify-center items-center flex-nowrap gap-2.5 px-[19px] py-0.5 rounded-[22px]"
              >
                <span
                  id="_7065_1453__05"
                  className="flex justify-start text-left items-start h-[28.00px] w-[22.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(252,182,53,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    05
                  </span>
                </span>
              </div>

              <div
                id="_7065_1454__Frame_1111"
                className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[28.00px] flex flex-col justify-center items-center flex-nowrap gap-2.5 px-[19px] py-0.5 rounded-[22px]"
              >
                <span
                  id="_7065_1455__02"
                  className="flex justify-start text-left items-start h-[28.00px] w-[22.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(252,182,53,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    02
                  </span>
                </span>
              </div>
            </div>

            <div
              id="_7065_1456__Frame_1115"
              className="absolute h-[32.00px] w-[205.00px] left-[calc(50%-103.50px)] flex flex-row justify-start items-center flex-nowrap gap-[85px] top-[8.00px]"
            >
              <div
                id="_7065_1457__Frame_1108"
                className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[28.00px] w-[23.00px] flex flex-col justify-center items-center flex-nowrap gap-2.5 px-5 py-0.5 rounded-[22px]"
              >
                <span
                  id="_7065_1458__06"
                  className="flex justify-start text-left items-start h-[28.00px] w-[22.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(252,182,53,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    06
                  </span>
                </span>
              </div>

              <div
                id="_7065_1459__Frame_1112"
                className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[28.00px] w-[19.00px] flex flex-col justify-center items-center flex-nowrap gap-2.5 px-[19px] py-0.5 rounded-[22px]"
              >
                <span
                  id="_7065_1460__01"
                  className="flex justify-start text-left items-start h-[28.00px] w-[19.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(252,182,53,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    01
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="_7065_1464__Frame_1094"
          className="absolute h-[810.00px] w-[1440.00px] left-[calc(50%-720.00px)] top-[5289.00px]"
        >
          <div
            id="_7065_1465__Rectangle_4207"
            className="absolute h-[650.00px] w-[1280.00px] left-[calc(50%-640.00px)] rounded-[48px] top-[80.00px]"
            style={{
              background:
                "url(assets/images/rectangle_4207.png) 100% / cover no-repeat",
            }}
          ></div>

          <div
            id="_7065_1467__Ellipse_817"
            className="absolute bg-[linear-gradient(181.50027606835522deg,rgba(99,49,241,1.00)_0.0%,rgba(99,49,241,1.00)_53.00902724266052%,rgba(109,67,227,1.00)_68.56226921081543%,rgba(159,99,255,1.00)_100.0%)] h-[158.00px] w-[158.00px] rounded-[50%] border-solid border-4 left-[641.00px] top-[326.00px]"
          ></div>

          <div
            id="_7065_1468__Frame"
            className="absolute overflow-hidden h-[60.00px] w-[60.00px] left-[calc(50%-26.00px)] top-[calc(50%-30.00px)]"
          >
            <img
              id="_7065_1470__Vector"
              src="assets/images/vector_52.svg"
              alt="Vector"
              className="absolute top-[calc(100%_*_-0.00)] left-[calc(100%_*_0.05)]"
            />
          </div>
        </div>

        <div
          id="_7065_1471__Frame_1040"
          className="absolute h-[827.00px] w-[1440.00px] left-[calc(50%-720.00px)] top-[4462.00px]"
        >
          <div
            id="_7065_1472__Frame_573"
            className="absolute h-[667.00px] w-[1280.00px] left-[calc(50%-720.00px)] flex flex-row justify-start items-center flex-nowrap gap-[142px] p-20 top-[0.00px]"
          >
            <div
              id="_7065_1473__Frame_567"
              className="relative w-[525.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
            >
              <div
                id="_7065_1474__Frame_566"
                className="relative h-[316.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-4"
              >
                <span
                  id="_7065_1475__Why_You_Choose_Metro"
                  className="flex justify-start text-left items-end h-[216.00px] w-[425.00px] relative"
                >
                  <span
                    className="bg-white bg-clip-text text-transparent not-italic text-[64.0px] font-medium leading-[72.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Why You Choose Metro Solver?
                  </span>
                </span>
                <span
                  id="_7065_1476__We_are_constantly_gr"
                  className="flex justify-start text-left items-start h-[84.00px] w-[525.00px] relative"
                >
                  <span
                    className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    We are constantly growing or learning and improving.Enter
                    your personal real estate sanctuary, where finding the ideal
                    home is effortless and comfortable with our assistance.
                  </span>
                </span>
              </div>

              <div
                id="_7065_1477__Button"
                className="relative bg-[linear-gradient(181.50027606835522deg,rgba(99,49,241,1.00)_0.0%,rgba(99,49,241,1.00)_53.00902724266052%,rgba(109,67,227,1.00)_68.56226921081543%,rgba(159,99,255,1.00)_100.0%)] border h-[22.00px] flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px] border-solid"
              >
                <div
                  id="I7065_1477_3390_27462__Frame_457"
                  className="relative h-[24.00px] w-[24.00px]"
                >
                  <img
                    id="I7065_1477_3390_27462_3390_26772__Vector"
                    src="assets/images/vector_53.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.57)] top-[calc(100%_*_0.30)]"
                  />
                  <img
                    id="I7065_1477_3390_27462_3390_26773__Vector"
                    src="assets/images/vector_54.svg"
                    alt="Vector"
                    className="absolute"
                  />
                </div>

                <span
                  id="I7065_1477_3390_27225__Sign_Up"
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

            <div
              id="_7065_1478__Frame_565"
              className="relative w-[613.00px] flex flex-col justify-start items-center flex-nowrap gap-2.5"
            >
              <div
                id="_7065_1479__Frame_563"
                className="relative bg-[rgba(10,16,28,1.00)] rotate-[-8.00deg] h-[56.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-14 py-8 rounded-[100px]"
              >
                <span
                  id="_7065_1480__Cancel_Anytime"
                  className="flex justify-start text-left items-start h-[56.00px] w-[336.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[48.0px] font-medium leading-[56.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Cancel Anytime&nbsp;
                  </span>
                </span>
              </div>

              <div
                id="_7065_1481__Frame_561"
                className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] rotate-[4.00deg] h-[56.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-14 py-8 rounded-[100px]"
              >
                <span
                  id="_7065_1482__24_7_Customer_Servic"
                  className="flex justify-start text-left items-start h-[56.00px] w-[484.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[48.0px] font-medium leading-[56.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    24/7 Customer Service&nbsp;
                  </span>
                </span>
              </div>

              <div
                id="_7065_1483__Frame_562"
                className="relative bg-[rgba(10,16,28,1.00)] rotate-[-8.00deg] h-[56.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-14 py-8 rounded-[100px]"
              >
                <span
                  id="_7065_1484__Refers___Earn"
                  className="flex justify-start text-left items-start h-[56.00px] w-[289.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[48.0px] font-medium leading-[56.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Refers &amp; Earn
                  </span>
                </span>
              </div>

              <div
                id="_7065_1485__Frame_564"
                className="relative bg-[rgba(10,16,28,1.00)] h-[56.00px] w-[calc(100%-56px-56px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-14 py-8 rounded-[100px]"
              >
                <span
                  id="_7065_1486__Money_Back_Guarantee"
                  className="flex justify-start text-left items-start h-[56.00px] w-[501.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[48.0px] font-medium leading-[56.00px]"
                    style={{
                      fontFamily: "Outfit",
                    }}
                  >
                    Money Back Guarantee
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="_7065_1490__Frame_782"
          className="absolute h-[1376.00px] w-[1440.00px] left-[calc(50%-720.00px)] flex flex-col justify-start items-center flex-nowrap gap-12 px-0 py-20 top-[2926.00px]"
        >
          <div
            id="_7065_1491__Frame_481"
            className="relative h-[72.00px] w-[calc(100%-80px-80px)] flex flex-row justify-between items-center flex-nowrap px-20 py-0"
          >
            <span
              id="_7065_1492__Our_Latest_Works"
              className="flex justify-center text-center items-start h-[72.00px] w-[496.00px] relative"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[64.0px] font-medium leading-[72.00px]"
                style={{
                  fontFamily: "Outfit",
                }}
              >
                Our Latest Works
              </span>
            </span>
            <span
              id="_7065_1493__Based_on_the_descrip"
              className="flex justify-start text-left items-start h-[56.00px] w-[590.00px] relative"
            >
              <span
                className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[28.00px]"
                style={{
                  fontFamily: "Outfit",
                }}
              >
                Based on the description of Metro Solver and the image provided,
                here is a 6-step process that Metro Solver uses to scale a
                customer&#39;s business
              </span>
            </span>
          </div>

          <div
            id="_7065_1494__Frame_781"
            className="relative h-[1256.00px] w-full"
          >
            <div
              id="_7065_1495__Frame_484"
              className="absolute h-[1256.00px] w-[1716.00px] left-[-138.00px] flex flex-col justify-start items-center flex-nowrap gap-8 top-[0.00px]"
            >
              <div
                id="_7065_1496__Frame_482"
                className="relative h-[296.00px] flex flex-row justify-start items-center flex-nowrap gap-8"
              >
                <div
                  id="_7065_1497__image"
                  className="relative h-[296.00px] w-[296.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_3.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1498__image"
                  className="relative h-[296.00px] w-[296.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_4.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1499__image"
                  className="relative h-[296.00px] w-[296.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_5.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1500__image"
                  className="relative h-[296.00px] w-[296.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_6.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1501__image"
                  className="relative h-[296.00px] w-[296.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_7.png) 100% / cover no-repeat",
                  }}
                ></div>
              </div>

              <div
                id="_7065_1502__Frame_483"
                className="relative h-[600.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-8"
              >
                <div
                  id="_7065_1503__image"
                  className="relative h-[600.00px] w-[405.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_8.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1504__image"
                  className="relative h-[600.00px] w-[405.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_9.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1505__image"
                  className="relative h-[600.00px] w-[405.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_10.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1506__image"
                  className="relative h-[600.00px] w-[405.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_11.png) 100% / cover no-repeat",
                  }}
                ></div>
              </div>

              <div
                id="_7065_1507__Frame_484"
                className="relative h-[296.00px] flex flex-row justify-start items-center flex-nowrap gap-8"
              >
                <div
                  id="_7065_1508__image"
                  className="relative h-[296.00px] w-[296.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_12.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1509__image"
                  className="relative h-[296.00px] w-[296.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_13.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1510__image"
                  className="relative h-[296.00px] w-[296.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_14.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1511__image"
                  className="relative h-[296.00px] w-[296.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_15.png) 100% / cover no-repeat",
                  }}
                ></div>

                <div
                  id="_7065_1512__image"
                  className="relative h-[296.00px] w-[296.00px] rounded-3xl"
                  style={{
                    background:
                      "url(assets/images/image_16.png) 100% / cover no-repeat",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="_7065_1513__Frame_1030"
          className="absolute h-[1870.00px] w-[1279.00px] left-[calc(50%-719.00px)] flex flex-col justify-start items-end flex-nowrap gap-12 p-20 top-[896.00px]"
        >
          <div
            id="_7065_1514__Frame_171"
            className="relative h-[144.00px] w-[calc(100%-0px-0px)] flex flex-col justify-center items-center flex-nowrap gap-4"
          >
            <span
              id="_7065_1515__Our_Services"
              className="flex justify-center text-center items-start h-[72.00px] w-[359.00px] relative"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[64.0px] font-medium leading-[72.00px]"
                style={{
                  fontFamily: "Outfit",
                }}
              >
                Our Services
              </span>
            </span>
            <span
              id="_7065_1516__Enter_your_personal_"
              className="flex justify-center text-center items-start h-[56.00px] w-[564.00px] relative"
            >
              <span
                className="bg-[rgba(243,243,244,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                style={{
                  fontFamily: "Outfit",
                }}
              >
                Enter your personal real estate sanctuary, where finding the
                ideal home is effortless and comfortable with our assistance.
              </span>
            </span>
          </div>

          <div
            id="_7065_1517__Frame_1472"
            className="relative h-[1678.00px] w-[1279.00px] flex flex-col justify-start items-start flex-nowrap gap-8"
          >
            <div
              id="_7065_1518__Frame_1469"
              className="relative h-[310.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-8"
            >
              <div
                id="_7065_1519__Frame_1148"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1519_3445_28683__Design"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1519_3445_28683_3390_26780__Group"
                    src="assets/images/group_8.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.07)] top-[calc(100%_*_0.07)]"
                  />
                </div>

                <div
                  id="I7065_1519_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1519_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1519_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Graphic Design
                      </span>
                    </span>
                    <span
                      id="I7065_1519_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1519_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1519_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1519_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1519_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_1.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1520__Frame_1149"
                className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[242.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl border-solid border-2"
              >
                <div
                  id="I7065_1520_3445_28844__Development"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1520_3445_28844_3390_26731__Group"
                    src="assets/images/group_9.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.07)]"
                  />
                  <div
                    id="I7065_1520_3445_28844_3390_26738__Frame_1003"
                    className="absolute h-[44.08%] w-[38.33%] left-[calc(100%_*_0.54)] top-[calc(100%_*_0.48)]"
                  >
                    <img
                      id="I7065_1520_3445_28844_3390_26739__Vector"
                      src="assets/images/vector_55.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.48)] top-[calc(100%_*_0.57)]"
                    />
                    <img
                      id="I7065_1520_3445_28844_3390_26740__Vector"
                      src="assets/images/vector_56.svg"
                      alt="Vector"
                      className="absolute"
                    />
                  </div>
                </div>

                <div
                  id="I7065_1520_3445_28260__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1520_3445_28261__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1520_3445_28262__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Web &amp; Software Development
                      </span>
                    </span>
                    <span
                      id="I7065_1520_3445_28263__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1520_3606_35882__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1520_3606_35882_3606_35686__Read_More"
                      className="flex justify-start text-left items-start h-[24.00px] w-[78.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Read More
                      </span>
                    </span>
                    <div
                      id="I7065_1520_3606_35882_3606_35698__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1520_3606_35882_3606_35698_5616_231784__elements"
                        src="assets/images/elements_2.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1521__Frame_1151"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1521_3445_28683__Video_Editing"
                  className="relative h-[60.00px] w-[60.00px]"
                >
                  <div
                    id="I7065_1521_3445_28683_4298_108348__Frame_2085668507"
                    className="absolute h-[86.67%] w-[87.23%] left-[calc(100%_*_0.06)] top-[calc(100%_*_0.07)]"
                  >
                    <div
                      id="I7065_1521_3445_28683_3390_26787__Union"
                      className="absolute"
                    ></div>

                    <img
                      id="I7065_1521_3445_28683_3390_26791__Group"
                      src="assets/images/group_10.svg"
                      alt="Group"
                      className="absolute"
                    />
                  </div>
                </div>

                <div
                  id="I7065_1521_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1521_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1521_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Multimedia &amp; Video Editing
                      </span>
                    </span>
                    <span
                      id="I7065_1521_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1521_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1521_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1521_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1521_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_3.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_7065_1522__Frame_1470"
              className="relative h-[310.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-8"
            >
              <div
                id="_7065_1523__Frame_1151"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1523_3445_28683__Marketing"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1523_3445_28683_3390_26754__Group"
                    src="assets/images/group_11.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.07)] top-[calc(100%_*_0.07)]"
                  />
                </div>

                <div
                  id="I7065_1523_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1523_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1523_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Digital Marketing
                      </span>
                    </span>
                    <span
                      id="I7065_1523_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1523_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1523_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1523_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1523_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_4.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1524__Frame_1152"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1524_3445_28683__Solution"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1524_3445_28683_3390_26775__Group"
                    src="assets/images/group_12.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.22)] top-[calc(100%_*_0.19)]"
                  />
                  <img
                    id="I7065_1524_3445_28683_3390_26777__Group"
                    src="assets/images/group_13.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.36)] top-[calc(100%_*_0.03)]"
                  />
                </div>

                <div
                  id="I7065_1524_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1524_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1524_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Creative Writing Solution
                      </span>
                    </span>
                    <span
                      id="I7065_1524_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1524_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1524_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1524_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1524_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_5.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1525__Frame_1149"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1525_3445_28683__SEO"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1525_3445_28683_4428_90884__Group"
                    src="assets/images/group_14.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.03)] top-[calc(100%_*_0.03)]"
                  />
                  <img
                    id="I7065_1525_3445_28683_4428_90888__Vector"
                    src="assets/images/vector_60.svg"
                    alt="Vector"
                    className="absolute left-[calc(50%-17.00px)] top-[calc(50%-13.00px)]"
                  />
                </div>

                <div
                  id="I7065_1525_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1525_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1525_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        SEO
                      </span>
                    </span>
                    <span
                      id="I7065_1525_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1525_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1525_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1525_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1525_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_6.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_7065_1526__Frame_1471"
              className="relative h-[310.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-8"
            >
              <div
                id="_7065_1527__Frame_1151"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1527_3445_28683__3d-view"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1527_3445_28683_4428_90863__elements"
                    src="assets/images/elements_7.svg"
                    alt="elements"
                    className="absolute left-[calc(100%_*_0.10)] top-[calc(100%_*_0.10)]"
                  />
                </div>

                <div
                  id="I7065_1527_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1527_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1527_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        3D Animation &amp; Visualisation
                      </span>
                    </span>
                    <span
                      id="I7065_1527_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1527_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1527_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1527_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1527_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_8.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1528__Frame_1148"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1528_3445_28683__E-Commerce"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1528_3445_28683_3390_26760__Group"
                    src="assets/images/group_15.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.10)] top-[calc(100%_*_0.24)]"
                  />
                  <img
                    id="I7065_1528_3445_28683_3390_26769__Group"
                    src="assets/images/group_16.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.44)] top-[calc(100%_*_0.06)]"
                  />
                </div>

                <div
                  id="I7065_1528_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1528_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1528_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        E-Commerce Solution
                      </span>
                    </span>
                    <span
                      id="I7065_1528_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1528_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1528_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1528_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1528_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_9.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1529__Frame_1152"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1529_3445_28683__money-bag-02"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1529_3445_28683_4428_90914__elements"
                    src="assets/images/elements_10.svg"
                    alt="elements"
                    className="absolute left-[calc(100%_*_0.13)] top-[calc(100%_*_0.08)]"
                  />
                </div>

                <div
                  id="I7065_1529_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1529_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1529_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Accounting
                      </span>
                    </span>
                    <span
                      id="I7065_1529_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1529_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1529_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1529_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1529_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_11.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_7065_1530__Frame_1472"
              className="relative h-[310.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-8"
            >
              <div
                id="_7065_1531__Frame_1150"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1531_3445_28683__Special"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1531_3445_28683_3390_26795__Group"
                    src="assets/images/group_17.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.06)]"
                  />
                  <img
                    id="I7065_1531_3445_28683_3390_26797__Group"
                    src="assets/images/group_18.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.10)] top-[calc(100%_*_0.04)]"
                  />
                </div>

                <div
                  id="I7065_1531_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1531_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1531_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Special Combo&nbsp;
                      </span>
                    </span>
                    <span
                      id="I7065_1531_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1531_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1531_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1531_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1531_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_12.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1532__Frame_1148"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1532_3445_28683__Website"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1532_3445_28683_3390_26812__Group"
                    src="assets/images/group_19.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.04)]"
                  />
                </div>

                <div
                  id="I7065_1532_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1532_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1532_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Premium Website
                      </span>
                    </span>
                    <span
                      id="I7065_1532_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1532_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1532_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1532_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1532_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_13.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1533__Frame_1149"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1533_3445_28683__Domains"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1533_3445_28683_3390_26784__Vector"
                    src="assets/images/vector_61.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.03)] top-[calc(100%_*_0.05)]"
                  />
                  <img
                    id="I7065_1533_3445_28683_3390_26785__Vector"
                    src="assets/images/vector_62.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.63)] top-[calc(100%_*_0.62)]"
                  />
                </div>

                <div
                  id="I7065_1533_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1533_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1533_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Premium Domains
                      </span>
                    </span>
                    <span
                      id="I7065_1533_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1533_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1533_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1533_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1533_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_14.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_7065_1534__Frame_1473"
              className="relative h-[310.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-8"
            >
              <div
                id="_7065_1535__Frame_1151"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1535_3445_28683__Proxy"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1535_3445_28683_3390_26807__Group"
                    src="assets/images/group_20.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.07)] top-[calc(100%_*_0.05)]"
                  />
                </div>

                <div
                  id="I7065_1535_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1535_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1535_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Proxy
                      </span>
                    </span>
                    <span
                      id="I7065_1535_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1535_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1535_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1535_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1535_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_15.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1536__Frame_1152"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1536_3445_28683__Merchandise"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1536_3445_28683_3390_26800__Group"
                    src="assets/images/group_21.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.00)]"
                  />
                  <div
                    id="I7065_1536_3445_28683_3390_26802__Frame"
                    className="absolute overflow-hidden h-[44.44%] w-[44.44%] left-[calc(100%_*_0.28)] top-[calc(100%_*_0.31)]"
                  >
                    <img
                      id="I7065_1536_3445_28683_3390_26803__Group"
                      src="assets/images/group_22.svg"
                      alt="Group"
                      className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.08)]"
                    />
                  </div>
                </div>

                <div
                  id="I7065_1536_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1536_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1536_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Merchandise
                      </span>
                    </span>
                    <span
                      id="I7065_1536_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1536_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1536_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1536_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1536_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_16.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_7065_1537__Frame_1153"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[246.00px] flex flex-col justify-start items-start flex-nowrap gap-8 p-8 rounded-3xl"
              >
                <div
                  id="I7065_1537_3445_28683__Academy"
                  className="relative overflow-hidden h-[60.00px] w-[60.00px]"
                >
                  <img
                    id="I7065_1537_3445_28683_3390_26742__Group"
                    src="assets/images/group_23.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.07)] top-[calc(100%_*_0.13)]"
                  />
                </div>

                <div
                  id="I7065_1537_3445_28223__Frame_164"
                  className="relative h-[154.00px] w-[341.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1537_3445_28224__Frame_161"
                    className="relative h-[114.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                  >
                    <span
                      id="I7065_1537_3445_28225__Digital_Marketing"
                      className="flex justify-start text-left items-start h-[32.00px] w-[341.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        Academy
                      </span>
                    </span>
                    <span
                      id="I7065_1537_3445_28226__We_are_constantly_gr"
                      className="flex justify-start text-left items-start h-[72.00px] w-[341.00px] relative"
                    >
                      <span
                        className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                        style={{
                          fontFamily: "Outfit",
                        }}
                      >
                        We are constantly growing or learning and
                        improving.Enter your personal real estate sanctf uary,
                        where finding the ideal home is&nbsp;
                      </span>
                    </span>
                  </div>

                  <div
                    id="I7065_1537_3606_35716__Button_With_out_outl"
                    className="relative h-[24.00px] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                  >
                    <span
                      id="I7065_1537_3606_35716_3606_35680__Read_More"
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
                    <div
                      id="I7065_1537_3606_35716_3606_35695__arrow-up-right"
                      className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                    >
                      <img
                        id="I7065_1537_3606_35716_3606_35695_5616_231784__elements"
                        src="assets/images/elements_17.svg"
                        alt="elements"
                        className="absolute left-[calc(100%_*_0.88)] top-[calc(100%_*_0.41)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="_7065_1538__Frame_447"
          className="absolute h-[84.00px] w-[1570.00px] left-[calc(50%-785.00px)] flex flex-row justify-start items-center flex-nowrap gap-[50px] top-[812.00px]"
        >
          <div
            id="_7065_1539__Luminus_logo"
            className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[44.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-[53px] py-5 rounded-2xl"
          >
            <img
              id="_7065_1540__Group_147"
              src="assets/images/group_147.svg"
              alt="Group_147"
              className="relative"
            />
          </div>

          <div
            id="_7065_1543__brembo_logo"
            className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[44.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 px-[47px] py-5 rounded-2xl"
          >
            <img
              id="_7065_1544__Vector"
              src="assets/images/vector_63.svg"
              alt="Vector"
              className="relative"
            />
          </div>

          <div
            id="_7065_1545__Motorola_logo"
            className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[44.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 px-[41px] py-5 rounded-2xl"
          >
            <img
              id="_7065_1546__Group"
              src="assets/images/group_24.svg"
              alt="Group"
              className="relative"
            />
          </div>

          <div
            id="_7065_1549__Luminus_logo"
            className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[44.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-[53px] py-5 rounded-2xl"
          >
            <img
              id="_7065_1550__Group_147"
              src="assets/images/group_147_1.svg"
              alt="Group_147"
              className="relative"
            />
          </div>

          <div
            id="_7065_1553__brembo_logo"
            className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[44.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 px-[47px] py-5 rounded-2xl"
          >
            <img
              id="_7065_1554__Vector"
              src="assets/images/vector_64.svg"
              alt="Vector"
              className="relative"
            />
          </div>
        </div>

        <div
          id="_7065_1555__Frame_1230"
          className="absolute h-[432.00px] w-[550.00px] left-[calc(50%-720.00px)] flex flex-col justify-start items-start flex-nowrap gap-10 pl-20 pr-[810px] pt-[60px] pb-[100px] top-[220.00px]"
        >
          <div
            id="_7065_1556__Frame_1229"
            className="relative h-[320.00px] w-[483.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
          >
            <span
              id="_7065_1557__Expert_to_Digitalise"
              className="flex justify-start text-left items-start h-[252.00px] w-[483.00px] relative"
            >
              <span>
                <span
                  className="bg-white bg-clip-text text-transparent not-italic text-[72.0px] font-medium leading-[84.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  Expert to Digitalise Your&nbsp;
                </span>
                <span
                  className="bg-[linear-gradient(92.72269786771727deg,rgba(193,110,253,1.00)_32.95547366142273%,rgba(255,255,255,1.00)_82.00784921646118%)] bg-clip-text text-transparent not-italic text-[72.0px] font-medium leading-[84.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  Growth
                </span>
              </span>
            </span>
            <span
              id="_7065_1558__We_are_constantly_gr"
              className="flex justify-start text-left items-start h-[48.00px] w-[483.00px] relative"
            >
              <span
                className="bg-[rgba(231,232,234,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[24.00px]"
                style={{
                  fontFamily: "Outfit",
                }}
              >
                We are constantly growing or learning and improving.Enter your
                the personal real estate sanctf uary, where finding the ideal
                home is&nbsp;
              </span>
            </span>
          </div>

          <div
            id="_7065_1559__Button"
            className="relative bg-[linear-gradient(181.50027606835522deg,rgba(99,49,241,1.00)_0.0%,rgba(99,49,241,1.00)_53.00902724266052%,rgba(109,67,227,1.00)_68.56226921081543%,rgba(159,99,255,1.00)_100.0%)] border h-[30.00px] flex flex-row justify-center items-center flex-nowrap gap-3 px-12 py-5 rounded-[100px] border-solid"
          >
            <div
              id="I7065_1559_3390_27447__Frame_456"
              className="relative h-[32.00px] w-[32.00px]"
            >
              <img
                id="I7065_1559_3390_27447_3390_26772__Vector"
                src="assets/images/vector_65.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.57)] top-[calc(100%_*_0.30)]"
              />
              <img
                id="I7065_1559_3390_27447_3390_26773__Vector"
                src="assets/images/vector_66.svg"
                alt="Vector"
                className="absolute"
              />
            </div>

            <span
              id="I7065_1559_3390_27210__Sign_Up"
              className="flex justify-center text-center items-start h-[32.00px] w-[135.00px] relative"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
                style={{
                  fontFamily: "Outfit",
                }}
              >
                Explore Now
              </span>
            </span>
          </div>
        </div>

        <div
          id="_7065_1560__Nav_bar"
          className="absolute h-[76.00px] w-[1280.00px] left-[calc(50%-720.00px)] flex flex-row justify-between items-center flex-nowrap px-20 py-6 top-[96.00px]"
        >
          <div
            id="I7065_1560_3423_2798__Frame"
            className="relative overflow-hidden h-[56.00px] w-[105.00px]"
          >
            <img
              id="I7065_1560_3423_2799__XMLID_1_"
              src="assets/images/xmlid_1__1.svg"
              alt="XMLID_1_"
              className="absolute left-[calc(100%_*_0.00)]"
            />
          </div>

          <div
            id="I7065_1560_3423_2966__Nav_item"
            className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[44.00px] flex flex-row justify-start items-center flex-nowrap gap-2 p-4 rounded-[100px]"
          >
            <div
              id="I7065_1560_3423_2966_3423_2824__Frame_1007"
              className="relative backdrop-blur-[200.0px] h-[21.00px] w-[53.00px] flex flex-row justify-center items-center flex-nowrap gap-[25px] px-[34px] py-2.5 rounded-[100px] border-solid border-[1.5px]"
            >
              <span
                id="I7065_1560_3423_2966_3423_2825__Home"
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
            </div>

            <Link
              to="/AboutUsPage"
              id="I7065_1560_3423_2966_3423_2826__Frame_1008"
              className="relative h-[24.00px] w-[54.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-[35px] py-2.5 rounded-[100px]"
            >
              <span
                id="I7065_1560_3423_2966_3423_2827__About_us"
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
              id="I7065_1560_3423_2966_3423_2828__Frame_1009"
              className="relative h-[24.00px] w-[54.00px] flex flex-col justify-center items-center flex-nowrap gap-2.5 px-[35px] py-2.5 rounded-[100px]"
            >
              <div
                id="I7065_1560_3423_2966_3423_2829__Frame_8"
                className="relative h-[24.00px] flex flex-row justify-center items-center flex-nowrap gap-1"
              >
                <span
                  id="I7065_1560_3423_2966_3423_2830__Services"
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
                  id="I7065_1560_3423_2966_3423_2831__Frame"
                  className="relative overflow-hidden h-[16.00px] w-[16.00px]"
                >
                  <img
                    id="I7065_1560_3423_2966_3423_2832__Vector"
                    src="assets/images/vector_67.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.19)] top-[calc(100%_*_0.45)]"
                  />
                </div>
              </div>
            </div>

            <div
              id="I7065_1560_3423_2966_3423_2833__Frame_1010"
              className="relative h-[24.00px] w-[54.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-[35px] py-2.5 rounded-[100px]"
            >
              <span
                id="I7065_1560_3423_2966_3423_2834__White_label"
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
              id="I7065_1560_3423_2966_3423_2835__Frame_1011"
              className="relative h-[24.00px] w-[54.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-[35px] py-2.5 rounded-[100px]"
            >
              <span
                id="I7065_1560_3423_2966_3423_2836__Contact_us"
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
            id="I7065_1560_3531_34242__Frame_1598"
            className="relative h-[56.00px] flex flex-row justify-start items-center flex-nowrap gap-6"
          >
            <div
              id="I7065_1560_3531_33893__Frame_1597"
              className="relative bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[24.00px] w-[24.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-4 rounded-[100px]"
            >
              <div
                id="I7065_1560_3531_46529__cart_product_show"
                className="relative overflow-hidden h-[24.00px] w-[24.00px]"
              >
                <img
                  id="I7065_1560_3531_46529_3531_46524__Group"
                  src="assets/images/group_25.svg"
                  alt="Group"
                  className="absolute left-[calc(100%_*_0.04)] top-[calc(100%_*_0.13)]"
                />
                <div
                  id="I7065_1560_3531_46529_3531_46526__Frame_1357"
                  className="absolute bg-[linear-gradient(90.0deg,rgba(235,51,73,1.00)_0.0%,rgba(244,92,67,1.00)_100.0%)] h-[4.00px] w-[2.00px] flex flex-col justify-center items-center flex-nowrap gap-2.5 px-[3px] py-0.5 rounded-[100px] left-[16.00px] top-[2.00px]"
                >
                  <span
                    id="I7065_1560_3531_46529_3531_46527__1"
                    className="flex justify-center text-center items-start h-[4.00px] w-[2.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[5.0px] font-semibold leading-[3.50px]"
                      style={{
                        fontFamily: "Outfit",
                      }}
                    >
                      1
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <img
              id="I7065_1560_3423_2820__Group_710"
              src="assets/images/group_710.svg"
              alt="Group_710"
              className="relative"
            />
          </div>
        </div>

        <div
          id="_7065_1586__Frame_1584"
          className="absolute overflow-hidden h-[1280.00px] w-[1440.00px] left-[calc(50%-720.00px)] bottom-[0.00px]"
        >
          <div
            id="I7065_1586_3524_30127__Ellipse_837"
            className="absolute bg-[rgba(48,16,83,0.80)] h-[1072.00px] w-[1072.00px] left-[calc(50%-536.00px)] rounded-[50%] bottom-[0.00px]"
            style={{
              filter: "blur(600.0px)",
            }}
          ></div>

          <div
            id="I7065_1586_3524_30128__Frame_1582"
            className="absolute h-[1280.00px] w-[1440.00px] left-[calc(50%-720.00px)] flex flex-col justify-start items-start flex-nowrap top-[0.00px]"
          >
            <div
              id="I7065_1586_3524_30129__Frame_1577"
              className="relative h-[332.00px] w-[calc(100%-80px-80px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 pt-20 pb-0 px-20"
            >
              <div
                id="I7065_1586_3524_30130__Frame_1204"
                className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[212.00px] w-[calc(100%-60px-60px)] flex flex-col justify-start items-center flex-nowrap gap-12 p-[60px] rounded-[72px]"
              >
                <div
                  id="I7065_1586_3524_30131__Frame_1203"
                  className="relative h-[80.00px] flex flex-row justify-start items-center flex-nowrap gap-4"
                >
                  <div
                    id="I7065_1586_3524_30132__Frame"
                    className="relative overflow-hidden h-[80.00px] w-[150.00px]"
                  >
                    <img
                      id="I7065_1586_3524_30133__XMLID_1_"
                      src="assets/images/xmlid_1__2.svg"
                      alt="XMLID_1_"
                      className="absolute left-[calc(100%_*_0.00)]"
                    />
                  </div>

                  <img
                    id="I7065_1586_3524_30134__Group"
                    src="assets/images/group_26.svg"
                    alt="Group"
                    className="relative"
                  />
                </div>

                <div
                  id="I7065_1586_3524_30163__Frame_527"
                  className="relative h-[84.00px] w-[calc(100%-0px-0px)] flex flex-row justify-between items-center flex-nowrap"
                >
                  <div
                    id="I7065_1586_3524_30164__Frame_130"
                    className="relative h-[84.00px] flex-1 flex flex-col justify-start items-start flex-nowrap gap-2"
                  >
                    <span
                      id="I7065_1586_3524_30165__Subscribe_to_Our_New"
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
                      id="I7065_1586_3524_30166__Join_the_25000__clie"
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
                    id="I7065_1586_3524_30167__Subscribe_filled"
                    className="relative bg-white shadow-[0.0px_4.0px_40.0px_0.0px_rgba(0,0,0,0.12)] h-[56.00px] w-[519.00px] flex flex-row justify-start items-center flex-nowrap gap-4 pl-8 pr-2 py-2 rounded-[99px]"
                  >
                    <span
                      id="I7065_1586_3524_30167_3524_29553__Enter_your_email"
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
                      id="I7065_1586_3524_30167_3524_29599__Button"
                      className="relative bg-[linear-gradient(181.50027606835522deg,rgba(99,49,241,1.00)_0.0%,rgba(99,49,241,1.00)_53.00902724266052%,rgba(109,67,227,1.00)_68.56226921081543%,rgba(159,99,255,1.00)_100.0%)] border h-[22.00px] flex flex-row justify-center items-center flex-nowrap gap-1.5 px-12 py-4 rounded-[100px] border-solid"
                    >
                      <div
                        id="I7065_1586_3524_30167_3524_29599_3390_27462__Frame_457"
                        className="relative h-[24.00px] w-[24.00px]"
                      >
                        <img
                          id="I7065_1586_3524_30167_3524_29599_3390_27462_3390_26772__Vector"
                          src="assets/images/vector_68.svg"
                          alt="Vector"
                          className="absolute left-[calc(100%_*_0.57)] top-[calc(100%_*_0.30)]"
                        />
                        <img
                          id="I7065_1586_3524_30167_3524_29599_3390_27462_3390_26773__Vector"
                          src="assets/images/vector_69.svg"
                          alt="Vector"
                          className="absolute"
                        />
                      </div>

                      <span
                        id="I7065_1586_3524_30167_3524_29599_3390_27225__Sign_Up"
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
              id="I7065_1586_3524_30168__Frame_802"
              className="relative h-[436.00px] w-[calc(100%-80px-80px)] flex flex-row justify-between items-start flex-nowrap p-20"
            >
              <div
                id="I7065_1586_3524_30169__Frame_1576"
                className="relative h-[436.00px] w-[322.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
              >
                <div
                  id="I7065_1586_4721_156208__Frame_2085668560"
                  className="relative h-[300.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-6"
                >
                  <span
                    id="I7065_1586_3524_30170__Got_Questions__Call_"
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
                    id="I7065_1586_3524_30171__Frame_1575"
                    className="relative h-[180.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-end flex-nowrap gap-4"
                  >
                    <div
                      id="I7065_1586_3524_30172__Frame_529"
                      className="relative h-[84.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7065_1586_3524_30173__Group_79"
                        className="relative h-[32.00px] w-[32.00px]"
                      >
                        <div
                          id="I7065_1586_3524_30174__Ellipse_800"
                          className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[32.00px] w-[32.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                        ></div>

                        <div
                          id="I7065_1586_3524_30175__location"
                          className="absolute overflow-hidden h-[19.20px] w-[19.20px] left-[calc(50%-9.60px)] top-[calc(50%-9.60px)]"
                        >
                          <img
                            id="I7065_1586_3524_30175_3524_28791__Vector"
                            src="assets/images/vector_70.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.08)]"
                          />
                        </div>
                      </div>

                      <span
                        id="I7065_1586_3524_30176__Head_office__Metro_S"
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
                      id="I7065_1586_3524_30177__Frame_797"
                      className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7065_1586_3524_30178__Group_79"
                        className="relative h-[32.00px] w-[32.00px]"
                      >
                        <div
                          id="I7065_1586_3524_30179__Ellipse_800"
                          className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[32.00px] w-[32.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                        ></div>

                        <div
                          id="I7065_1586_3524_30180__call"
                          className="absolute h-[19.20px] w-[19.20px] left-[calc(50%-9.60px)] top-[calc(50%-9.60px)]"
                        >
                          <img
                            id="I7065_1586_3524_30180_3524_28822__vuesax_linear_call"
                            src="assets/images/vuesaxlinearcall_2.svg"
                            alt="vuesax_linear_call"
                            className="absolute"
                          />
                        </div>
                      </div>

                      <span
                        id="I7065_1586_3524_30181___447936_455446"
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
                      id="I7065_1586_3524_30182__Frame_528"
                      className="relative h-[32.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7065_1586_3524_30183__Group_81"
                        className="relative h-[32.00px] w-[32.00px]"
                      >
                        <div
                          id="I7065_1586_3524_30184__Ellipse_800"
                          className="absolute bg-[linear-gradient(105.32255045884175deg,rgba(53,25,102,1.00)_0.0%,rgba(27,27,49,1.00)_11.999999731779099%,rgba(37,31,64,1.00)_60.91848611831665%,rgba(65,32,119,1.00)_100.0%)] h-[32.00px] w-[32.00px] rounded-[50%] left-[0.00px] top-[0.00px]"
                        ></div>

                        <div
                          id="I7065_1586_3524_30185__sms"
                          className="absolute h-[19.20px] w-[19.20px] left-[calc(50%-9.60px)] top-[calc(50%-9.60px)]"
                        >
                          <img
                            id="I7065_1586_3524_30185_3524_28828__vuesax_linear_sms"
                            src="assets/images/vuesaxlinearsms.svg"
                            alt="vuesax_linear_sms"
                            className="absolute"
                          />
                        </div>
                      </div>

                      <span
                        id="I7065_1586_3524_30186__official_metrosolver"
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
                  id="I7065_1586_4721_127533__Input_filled"
                  className="relative h-[96.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2"
                >
                  <span
                    id="I7065_1586_4721_127533_3390_26178__Label"
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
                    id="I7065_1586_4721_127533_3390_26179__Frame_576"
                    className="relative border h-[26.00px] w-[calc(100%-16px-16px)] flex flex-row justify-start items-center flex-nowrap gap-4 p-4 rounded-xl border-solid"
                  >
                    <div
                      id="I7065_1586_4721_127533_3390_26235__Frame_1408"
                      className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-4"
                    >
                      <div
                        id="I7065_1586_4721_127533_3390_26836__Frame_1409"
                        className="relative h-[28.00px] flex-1 flex flex-row justify-start items-center flex-nowrap gap-1.5"
                      >
                        <div
                          id="I7065_1586_4721_127533_3447_42332__United_Kingdom"
                          className="relative overflow-hidden h-[24.00px] w-[24.00px]"
                        >
                          <img
                            id="I7065_1586_4721_127533_3447_42332_4731_129436__Group"
                            src="assets/images/group_27.svg"
                            alt="Group"
                            className="absolute"
                          />
                        </div>

                        <span
                          id="I7065_1586_4721_127533_3390_26180__Enter_your_name___"
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
                        id="I7065_1586_4721_127533_3390_26834__chevron-down"
                        className="relative overflow-hidden h-[24.00px] w-[24.00px]"
                      >
                        <img
                          id="I7065_1586_4721_127533_3390_26834_5616_226175__elements"
                          src="assets/images/elements_18.svg"
                          alt="elements"
                          className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.38)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="I7065_1586_3524_30187__Frame_534"
                className="relative h-[224.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
              >
                <span
                  id="I7065_1586_3524_30188__Company"
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
                  id="I7065_1586_3524_30189__Frame_532"
                  className="relative h-[180.00px] w-[123.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                >
                  <span
                    id="I7065_1586_3524_30190__Home"
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
                    id="I7065_1586_3524_30191__About_us"
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
                    id="I7065_1586_3524_30192__Our_Team"
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
                    id="I7065_1586_3524_30193__User_Profile"
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
                    id="I7065_1586_3524_30194__White_Labelling"
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
                id="I7065_1586_3524_30195__Frame_535"
                className="relative h-[186.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
              >
                <span
                  id="I7065_1586_3524_30196__About_Us"
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
                  id="I7065_1586_3524_30197__Frame_533"
                  className="relative h-[142.00px] w-[115.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                >
                  <span
                    id="I7065_1586_3524_30198__Our_Stories"
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
                    id="I7065_1586_3524_30199__Career"
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
                    id="I7065_1586_3524_30200__Send_Message"
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
                    id="I7065_1586_3531_29314__Blog"
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
                id="I7065_1586_3524_30201__Frame_536"
                className="relative h-[224.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
              >
                <span
                  id="I7065_1586_3524_30202__Support"
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
                  id="I7065_1586_3524_30203__Frame_533"
                  className="relative h-[180.00px] w-[172.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                >
                  <span
                    id="I7065_1586_3524_30204__Help_Center"
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
                    id="I7065_1586_3524_30205__Contact_Us"
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
                    id="I7065_1586_3524_30206__Privacy_Policy"
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
                    id="I7065_1586_3524_30207__Terms_and_Conditions"
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
                    id="I7065_1586_3524_30208__Start_Earning"
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
                id="I7065_1586_3524_30209__Frame_537"
                className="relative h-[414.00px] w-[240.00px] flex flex-col justify-start items-start flex-nowrap gap-4"
              >
                <span
                  id="I7065_1586_3524_30210__Services"
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
                  id="I7065_1586_3524_30211__Frame_533"
                  className="relative h-[370.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2.5"
                >
                  <span
                    id="I7065_1586_3524_30212__Digital_Marketing"
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
                    id="I7065_1586_3524_30213__Creative_Writing_Sol"
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
                    id="I7065_1586_3524_30214__Web___Software_Devel"
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
                    id="I7065_1586_3524_30215__E-Commerce_Solution"
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
                    id="I7065_1586_3524_30216__Graphic_Design"
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
                    id="I7065_1586_3524_30217__Multimedia___Video_E"
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
                    id="I7065_1586_3524_30218__Merchandise"
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
                    id="I7065_1586_3524_30219__Premium_Website"
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
                    id="I7065_1586_3524_30220__Premium_Domains"
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
                    id="I7065_1586_3524_30221__Special_Combo"
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
              id="I7065_1586_3524_30222__Frame_1574"
              className="relative h-[224.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-8 pt-0 pb-12 px-0"
            >
              <div
                id="I7065_1586_3524_30223__Frame_1573"
                className="relative h-[140.00px] flex flex-col justify-center items-center flex-nowrap"
              >
                <div
                  id="I7065_1586_3524_30224__Frame_1572"
                  className="relative h-[28.00px] w-[calc(100%-80px-80px)] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-20 py-[7px]"
                >
                  <span
                    id="I7065_1586_3524_30225__Our_Future_Partners"
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
                  id="I7065_1586_3524_30226__Frame_1322"
                  className="relative h-[82.00px] w-[1435.00px] flex flex-row justify-center items-center flex-nowrap gap-6 px-0 py-2"
                >
                  <div
                    id="I7065_1586_3524_30227__Frame_1042"
                    className="relative h-[48.00px] flex flex-col justify-center items-center flex-nowrap gap-1.5 p-4 rounded-2xl"
                  >
                    <div
                      id="I7065_1586_3524_30228__meta-quest-1_1"
                      className="relative overflow-hidden h-[22.00px] w-[104.00px]"
                    >
                      <img
                        id="I7065_1586_3524_30229__Vector"
                        src="assets/images/vector_71.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.36)] top-[calc(100%_*_0.03)]"
                      />
                      <img
                        id="I7065_1586_3524_30230__Vector"
                        src="assets/images/vector_72.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.58)] top-[calc(100%_*_0.22)]"
                      />
                      <img
                        id="I7065_1586_3524_30231__Vector"
                        src="assets/images/vector_73.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.72)] top-[calc(100%_*_0.06)]"
                      />
                      <img
                        id="I7065_1586_3524_30232__Vector"
                        src="assets/images/vector_74.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.84)] top-[calc(100%_*_0.22)]"
                      />
                      <img
                        id="I7065_1586_3524_30233__Vector"
                        src="assets/images/vector_75.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.00)]"
                      />
                      <img
                        id="I7065_1586_3524_30234__Vector"
                        src="assets/images/vector_76.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.02)] top-[calc(100%_*_0.00)]"
                      />
                      <img
                        id="I7065_1586_3524_30235__Vector"
                        src="assets/images/vector_77.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.00)] top-[calc(100%_*_0.17)]"
                      />
                      <img
                        id="I7065_1586_3524_30236__Vector"
                        src="assets/images/vector_78.svg"
                        alt="Vector"
                        className="absolute top-[calc(100%_*_0.42)]"
                      />
                      <img
                        id="I7065_1586_3524_30237__Vector"
                        src="assets/images/vector_79.svg"
                        alt="Vector"
                        className="absolute top-[calc(100%_*_0.57)]"
                      />
                      <img
                        id="I7065_1586_3524_30238__Vector"
                        src="assets/images/vector_80.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.00)] top-[calc(100%_*_0.62)]"
                      />
                      <img
                        id="I7065_1586_3524_30239__Vector"
                        src="assets/images/vector_81.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.02)] top-[calc(100%_*_0.31)]"
                      />
                      <img
                        id="I7065_1586_3524_30240__Vector"
                        src="assets/images/vector_82.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.15)] top-[calc(100%_*_0.11)]"
                      />
                      <img
                        id="I7065_1586_3524_30241__Vector"
                        src="assets/images/vector_83.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.00)]"
                      />
                      <img
                        id="I7065_1586_3524_30242__Vector"
                        src="assets/images/vector_84.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.24)] top-[calc(100%_*_0.10)]"
                      />
                      <img
                        id="I7065_1586_3524_30243__Vector"
                        src="assets/images/vector_85.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.26)] top-[calc(100%_*_0.55)]"
                      />
                      <img
                        id="I7065_1586_3524_30244__Vector"
                        src="assets/images/vector_86.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.68)]"
                      />
                      <img
                        id="I7065_1586_3524_30245__Vector"
                        src="assets/images/vector_87.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.23)] top-[calc(100%_*_0.72)]"
                      />
                      <img
                        id="I7065_1586_3524_30246__Vector"
                        src="assets/images/vector_88.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.20)] top-[calc(100%_*_0.68)]"
                      />
                      <img
                        id="I7065_1586_3524_30247__Vector"
                        src="assets/images/vector_89.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.16)] top-[calc(100%_*_0.36)]"
                      />
                    </div>

                    <span
                      id="I7065_1586_3524_30248__Business_Partner"
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
                    id="I7065_1586_3524_30249__Frame_1050"
                    className="relative h-[50.00px] flex flex-row justify-start items-center flex-nowrap gap-3 p-4 rounded-2xl"
                  >
                    <div
                      id="I7065_1586_3524_30250__Frame_1048"
                      className="relative bg-white border h-[36.00px] w-[36.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 p-1.5 rounded-[80px] border-[#e7e8eaff] border-solid"
                    >
                      <img
                        id="I7065_1586_3524_30251__Group"
                        src="assets/images/group_28.svg"
                        alt="Group"
                        className="relative"
                      />
                    </div>

                    <div
                      id="I7065_1586_3524_30256__Frame_1049"
                      className="relative h-[46.00px] w-[220.00px] flex flex-col justify-start items-start flex-nowrap gap-0.5"
                    >
                      <span
                        id="I7065_1586_3524_30257__Google_Marketing_Pla"
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
                        id="I7065_1586_3524_30258__Sales_Partner"
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
                    id="I7065_1586_3524_30259__Frame_1044"
                    className="relative h-[42.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-4 py-5 rounded-2xl"
                  >
                    <div
                      id="I7065_1586_3524_30260__Frame_1036"
                      className="relative h-[42.00px] w-[42.00px]"
                    >
                      <img
                        id="I7065_1586_3524_30261__Vector"
                        src="assets/images/vector_90.svg"
                        alt="Vector"
                        className="absolute"
                      />
                      <img
                        id="I7065_1586_3524_30262__Vector"
                        src="assets/images/vector_91.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.52)]"
                      />
                      <img
                        id="I7065_1586_3524_30263__Vector"
                        src="assets/images/vector_92.svg"
                        alt="Vector"
                        className="absolute top-[calc(100%_*_0.52)]"
                      />
                      <img
                        id="I7065_1586_3524_30264__Vector"
                        src="assets/images/vector_93.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.52)] top-[calc(100%_*_0.52)]"
                      />
                    </div>

                    <div
                      id="I7065_1586_3524_30265__Frame_1043"
                      className="relative h-[38.00px] w-[81.00px] flex flex-col justify-start items-start flex-nowrap gap-0.5"
                    >
                      <img
                        id="I7065_1586_3524_30266__Vector"
                        src="assets/images/vector_94.svg"
                        alt="Vector"
                        className="relative"
                      />
                      <span
                        id="I7065_1586_3524_30267__Partner"
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
                    id="I7065_1586_3524_30268__Frame_1321"
                    className="relative h-[82.00px] w-[127.00px]"
                  >
                    <img
                      id="I7065_1586_3524_30269__Rectangle_4216"
                      src="assets/images/rectangle_4216.svg"
                      alt="Rectangle_4216"
                      className="absolute left-[0.00px] top-[0.00px]"
                    />
                    <div
                      id="I7065_1586_3524_30270__Frame_1055"
                      className="absolute h-[56.00px] w-[83.00px] flex flex-col justify-start items-start flex-nowrap left-[33.00px] top-[13.00px]"
                    >
                      <div
                        id="I7065_1586_3524_30271__aws-2_1"
                        className="relative overflow-hidden h-[24.00px] w-[42.00px]"
                      >
                        <img
                          id="I7065_1586_3524_30272__Vector"
                          src="assets/images/vector_95.svg"
                          alt="Vector"
                          className="absolute left-[calc(100%_*_0.05)]"
                        />
                        <img
                          id="I7065_1586_3524_30273__Group"
                          src="assets/images/group_29.svg"
                          alt="Group"
                          className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.62)]"
                        />
                      </div>

                      <span
                        id="I7065_1586_3524_30276__Partner"
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
                    id="I7065_1586_3524_30277__Frame_1047"
                    className="relative h-[50.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-6 py-4 rounded-2xl"
                  >
                    <div
                      id="I7065_1586_3524_30278__Frame_1045"
                      className="relative bg-[rgba(233,34,21,1.00)] rotate-[90.00deg] scale-x-[-1.0] scale-y-[-1.0] h-[18.00px] w-[42.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-1"
                    >
                      <span
                        id="I7065_1586_3524_30279__Partner"
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
                      id="I7065_1586_3524_30280__Frame_1046"
                      className="relative h-[42.00px] w-[69.00px] flex flex-col justify-start items-start flex-nowrap"
                    >
                      <div
                        id="I7065_1586_3524_30281__google-1-1_1"
                        className="relative overflow-hidden h-[16.00px] w-[44.00px]"
                      >
                        <img
                          id="I7065_1586_3524_30282__Group"
                          src="assets/images/group_30.svg"
                          alt="Group"
                          className="absolute top-[calc(100%_*_0.00)]"
                        />
                      </div>

                      <span
                        id="I7065_1586_3524_30289__Partner"
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
                    id="I7065_1586_3524_30290__Frame_1057"
                    className="relative h-[82.00px] w-[191.00px]"
                  >
                    <div
                      id="I7065_1586_3524_30291__logo-amazon_1"
                      className="absolute overflow-hidden h-[34.00px] w-[117.00px] left-[16.00px] top-[29.00px]"
                    >
                      <img
                        id="I7065_1586_3524_30292__Vector"
                        src="assets/images/vector_96.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.02)] top-[calc(100%_*_0.02)]"
                      />
                      <img
                        id="I7065_1586_3524_30293__Group"
                        src="assets/images/group_31.svg"
                        alt="Group"
                        className="absolute left-[calc(100%_*_0.16)] top-[calc(100%_*_0.60)]"
                      />
                    </div>

                    <span
                      id="I7065_1586_3524_30296__spn"
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
                    id="I7065_1586_3524_30297__Frame_1054"
                    className="relative h-[50.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5 p-4 rounded-2xl"
                  >
                    <div
                      id="I7065_1586_3524_30298__Frame_1051"
                      className="relative h-[50.00px] w-[43.00px]"
                    >
                      <img
                        id="I7065_1586_3524_30299__Group"
                        src="assets/images/group_32.svg"
                        alt="Group"
                        className="absolute left-[calc(100%_*_0.15)] top-[calc(100%_*_0.04)]"
                      />
                      <img
                        id="I7065_1586_3524_30302__Vector"
                        src="assets/images/vector_97.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.05)] top-[calc(100%_*_0.04)]"
                      />
                      <img
                        id="I7065_1586_3524_30303__Vector"
                        src="assets/images/vector_98.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.02)] top-[calc(100%_*_0.76)]"
                      />
                      <img
                        id="I7065_1586_3524_30304__Vector"
                        src="assets/images/vector_99.svg"
                        alt="Vector"
                        className="absolute top-[calc(100%_*_0.35)]"
                      />
                      <img
                        id="I7065_1586_3524_30305__Vector"
                        src="assets/images/vector_100.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.27)]"
                      />
                    </div>

                    <div
                      id="I7065_1586_3524_30306__Frame_1053"
                      className="relative h-[46.00px] w-[120.00px] flex flex-col justify-start items-start flex-nowrap gap-1.5"
                    >
                      <div
                        id="I7065_1586_3524_30307__Frame_1052"
                        className="relative h-[20.00px] w-[80.00px]"
                      >
                        <img
                          id="I7065_1586_3524_30308__Vector"
                          className="absolute left-[calc(100%_*_0.65)] top-[calc(100%_*_0.59)]"
                        />
                        <img
                          id="I7065_1586_3524_30309__Vector"
                          src="assets/images/vector_101.svg"
                          alt="Vector"
                          className="absolute left-[calc(100%_*_0.59)] top-[calc(100%_*_0.19)]"
                        />
                        <img
                          id="I7065_1586_3524_30310__Vector"
                          src="assets/images/vector_102.svg"
                          alt="Vector"
                          className="absolute left-[calc(100%_*_0.70)] top-[calc(100%_*_0.19)]"
                        />
                        <img
                          id="I7065_1586_3524_30311__Vector"
                          src="assets/images/vector_103.svg"
                          alt="Vector"
                          className="absolute"
                        />
                      </div>

                      <span
                        id="I7065_1586_3524_30312__Marketing_Partners"
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
                id="I7065_1586_3524_30313__Line_11"
                src="assets/images/line_11.svg"
                alt="Line_11"
                className="relative backdrop-blur-[200.0px]"
              />
              <div
                id="I7065_1586_3524_30314__Frame_897"
                className="relative h-[20.00px] w-[calc(100%-80px-80px)] flex flex-row justify-between items-center flex-nowrap px-20 py-0"
              >
                <span
                  id="I7065_1586_3524_30315____Metro_Solver__All_"
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
                  id="I7065_1586_3524_30316__Metro_Solver_Ltd_inc"
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
          id="_7065_1587__Frame_389"
          className="absolute bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[32.00px] w-[1280.00px] left-[calc(50%-720.00px)] flex flex-row justify-center items-center flex-nowrap gap-12 px-20 py-6 top-[0.00px]"
        >
          <span
            id="_7065_1588__Budget_friendly"
            className="flex justify-start text-left items-start h-[24.00px] w-[109.00px] relative"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
              style={{
                fontFamily: "Outfit",
              }}
            >
              Budget friendly
            </span>
          </span>
          <div
            id="_7065_1589__Ellipse_874"
            className="relative bg-[rgba(112,117,127,1.00)] h-[6.00px] w-[6.00px] rounded-[50%]"
          ></div>

          <span
            id="_7065_1590__No__1_in_Europe"
            className="flex justify-start text-left items-start h-[24.00px] w-[104.00px] relative"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
              style={{
                fontFamily: "Outfit",
              }}
            >
              No. 1 in Europe
            </span>
          </span>
          <div
            id="_7065_1591__Ellipse_872"
            className="relative bg-[rgba(112,117,127,1.00)] h-[6.00px] w-[6.00px] rounded-[50%]"
          ></div>

          <div
            id="_7065_1592__Frame_1667"
            className="relative h-[32.00px] flex flex-row justify-start items-center flex-nowrap gap-4"
          >
            <span
              id="_7065_1593__On_your_first_order"
              className="flex justify-start text-left items-start h-[24.00px] w-[132.00px] relative"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                style={{
                  fontFamily: "Outfit",
                }}
              >
                On your first order
              </span>
            </span>
            <div
              id="_7065_1594__Frame_387"
              className="relative bg-[linear-gradient(90.0deg,rgba(235,51,73,1.00)_0.0%,rgba(244,92,67,1.00)_100.0%)] h-[28.00px] w-[72.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-5 py-0.5 rounded-[100px]"
            >
              <span
                id="_7065_1595__30__OFF"
                className="flex justify-start text-left items-start h-[28.00px] w-[72.00px] relative"
              >
                <span
                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-medium leading-[28.00px]"
                  style={{
                    fontFamily: "Outfit",
                  }}
                >
                  30% OFF
                </span>
              </span>
            </div>

            <span
              id="_7065_1596__For_all_products_buy"
              className="flex justify-start text-left items-start h-[24.00px] w-[264.00px] relative"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                style={{
                  fontFamily: "Outfit",
                }}
              >
                For all products buy now get the offer
              </span>
            </span>
          </div>

          <div
            id="_7065_1597__Ellipse_873"
            className="relative bg-[rgba(112,117,127,1.00)] h-[6.00px] w-[6.00px] rounded-[50%]"
          ></div>

          <span
            id="_7065_1598__User_Friendly"
            className="flex justify-start text-left items-start h-[24.00px] w-[94.00px] relative"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
              style={{
                fontFamily: "Outfit",
              }}
            >
              User Friendly
            </span>
          </span>
          <div
            id="_7065_1599__Ellipse_875"
            className="relative bg-[rgba(112,117,127,1.00)] h-[6.00px] w-[6.00px] rounded-[50%]"
          ></div>

          <span
            id="_7065_1600__24_7_Service"
            className="flex justify-start text-left items-start h-[24.00px] w-[88.00px] relative"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
              style={{
                fontFamily: "Outfit",
              }}
            >
              24/7 Service
            </span>
          </span>
        </div>

        <div
          id="_7078_10918__BOT_1"
          className="absolute h-[80.00px] w-[80.00px] left-[1280.00px] top-[692.00px]"
          style={{
            background: "url(assets/images/bot_1.png) 100% / cover no-repeat",
          }}
        ></div>

        <div
          id="_7065_1605__Button"
          className="absolute bg-[rgba(255,255,255,0.04)] backdrop-blur-[200.0px] h-[32.00px] w-[224.00px] flex flex-row justify-center items-center flex-nowrap gap-5 px-12 py-[29px] rounded-[20px] left-[81.00px] top-[908.00px]"
        >
          <span
            id="_7065_1606__Get_My_15__OFF"
            className="flex justify-center text-center items-start h-[32.00px] w-[171.00px] relative"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-medium leading-[32.00px]"
              style={{
                fontFamily: "Outfit",
              }}
            >
              Get My 15% OFF
            </span>
          </span>
          <div
            id="_7065_1607__Frame"
            className="relative overflow-hidden h-[32.00px] w-[32.00px]"
          >
            <img
              id="I7065_1607_3701_69426__Vector"
              src="assets/images/vector_104.svg"
              alt="Vector"
              className="absolute top-[calc(50%-9.33px)] left-[calc(100%_*_0.21)]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
