import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImagePriceBoard from "../../images/calendar-7-32.png";
import ImageBuySell from "../../images/ppc-optimization-32.png";
import ImageHandShake from "../../images/handshake-32.png";
import DateTime from "../menuBarMW/DateTime";
import "./chartMarketwatch.scss";
import { RootState, useAppDispatch } from "../../store/configureStore";
import { setStatusChart } from "../menuBarMW/menuSlice";
import axios from "axios";
import { formatNumber } from "../../utils/util";
import FooterMarket from "../footerMarketwatch/FooterMarket";
import FooterChart from "../footerMarketwatch/FooterChart";
import MenuMarketWatch from "../indexMarketWatch/MenuMarketWatch";
import { useSelector } from "react-redux";
import { hideChartMarketwatch } from "./chartMarketwatchSlice";
interface Data {
  RowID: string;
  Info: string[][];
}
type ChartMarketwatchProps = {
  stock: string;
};
const ChartMarketwatch = () => {
  const stockCode = useSelector( (state: RootState) => state.chart.code);
 const symbolNew =  stockCode ==='' ? 'FTS':stockCode
  console.log(stockCode)
  // const [posts, setPosts] = useState<Post[]>([]);
  const [dataChart, setDataChart] = useState<Data[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Data[]>(
        `http://marketstream.fpts.com.vn/hsx/data.ashx?s=quote&l=${symbolNew}`
      );
      setDataChart(response.data);
    };
    fetchData();
  }, [stockCode]);
  console.log(dataChart)
  return (
    <section className="chart-layout">
      <div className="chart-layout-left float-left ">
        <div className="chart-layout-header float-left h-[30px]">
          <div className="float-left w-[900px] index-chart">
            <MenuMarketWatch/>
          </div>
          <div className="float-right">
            <Tooltip title="Hiển thị bảng giá">
              <button
                className="p-[5px] h-30 w-[30] hover:bg-spnTitlePanelBottom"
                onClick={() => dispatch(hideChartMarketwatch())}
              >
                <img src={ImagePriceBoard} height={20} width={20} alt="" />
              </button>
            </Tooltip>
          </div>

          <DateTime />
        </div>
        <div className="tv_chart_container">chart</div>
      </div>

      <div className="chart-layout-right float-right w-[350px] border-l border-borderHeadTableMarket">
        <div className="mt-content">
          <table className="no-index">
            {dataChart.map((dataTable,index) => (
              <tbody key={index}>
                <tr>
                  <td colSpan={4}>
                    <span className="text-xl">{dataTable.Info[0][1]}</span>
                    <span className="text-xl"> 
                      <span className="px-1"></span>
                      {dataTable.Info[11][1]}
                    </span>
                    <span className="px-1">0.45</span>
                    <span>(1.6%)</span>
                  </td>
                </tr>
                <tr className="no-border">
                  <td>
                    <span>K.lượng</span>
                  </td>
                  <td>
                    <span className="value-kl">
                      <span
                        style={{
                          position: "relative",
                          zIndex: 2,
                          background: "transparent",
                          border: "none !important",
                          padding: 0,
                        }}
                      >
                        {formatNumber(dataTable.Info[21][1])}
                      </span>
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="no-border">
                  <td>
                    <span>Trần</span>
                  </td>
                  <td>
                    <span className="value-kl">
                      <span
                      className="text-textTableMarketTran"
                        style={{
                          position: "relative",
                          zIndex: 2,
                          background: "transparent",
                          border: "none !important",
                          padding: 0,
                        }}
                      >
                        {dataTable.Info[2][1]}
                      </span>
                    </span>
                  </td>
                  <td>
                    <span>Mở cửa</span>
                  </td>
                  <td>
                    <span>{dataTable.Info[22][1]}</span>
                  </td>
                </tr>
                <tr className="no-border">
                  <td>
                    <span  >T.chiếu</span>
                  </td>
                  <td>
                    <span className="value-kl">
                      <span
                      className="text-textTableMarketTC"
                        style={{
                          position: "relative",
                          zIndex: 2,
                          background: "transparent",
                          border: "none !important",
                          padding: 0,
                        }}
                      >
                        {dataTable.Info[1][1]}
                      </span>
                    </span>
                  </td>
                  <td>Cao nhất</td>
                  <td>
                    <span>{dataTable.Info[23][1]}</span>
                  </td>
                </tr>
                <tr className="no-border">
                  <td>
                    <span>Sàn</span>
                  </td>
                  <td>
                    <span className="value-kl">

                      <span
                         className="text-textTableMarketSan"
                        style={{
                          position: "relative",
                          zIndex: 2,
                          background: "transparent",
                          border: "none !important",
                          padding: 0,
                        }}
                      >
                        {dataTable.Info[3][1]}
                      </span>
                    </span>
                  </td>
                  <td>Thấp nhất</td>
                  <td>
                    <span>{dataTable.Info[24][1]}</span>
                  </td>
                </tr>
                <tr className="no-border">
                  <td>
                    <span>NN Mua</span>
                  </td>
                  <td>
                    <span className="value-kl">
                      <span
                        style={{
                          position: "relative",
                          zIndex: 2,
                          background: "transparent",
                          border: "none !important",
                          padding: 0,
                        }}
                      >
                        {formatNumber(dataTable.Info[26][1])}
                      </span>
                    </span>
                  </td>
                  <td>NN Bán</td>
                  <td>
                    <span>{formatNumber(dataTable.Info[27][1])}</span>
                  </td>
                </tr>
                <tr className="header">
                  <td colSpan={2} className="">
                    TOP MUA
                  </td>
                  <td colSpan={2}>TOP BÁN</td>
                </tr>
                <tr>
                  <td className="text-center">KL</td>
                  <td className="text-center">Giá</td>
                  <td className="text-center">Giá</td>
                  <td className="text-center">KL</td>
                </tr>
              </tbody>
            ))}
          </table>
          <FooterChart/>
        </div>
        <div className="mt-menu-tab" style={{ width: "40px", float: "right" }}>
          <ul className="ul-menu-tab">
            <li title="Danh mục">
              <img src={ImagePriceBoard} alt="Tab danh mục" />
            </li>
            <li title="Top Mua/Bán" className="active">
              <img src={ImageBuySell} alt="Tab Top Mua/Bán" />
            </li>
            <li title="Khớp lệnh">
              <img src={ImageHandShake} alt="Tab Khớp lệnh" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ChartMarketwatch);
