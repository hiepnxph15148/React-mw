import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import { formatNumber } from "../../utils/util";
import { useAppSelector } from "../../store/configureStore";
import { drawChart, maxNumber, minNumber } from "../chartIndex/util/app.chart";
const ChartPopup = () => {
  const { isLoading, dataChartOption, status } = useAppSelector(
    (state) => state.chartOption
  );
  const { dataTableKLTTG } = useAppSelector((state) => state.dataPopupDetail);

  const data = React.useMemo(() => {
    if (dataTableKLTTG?.Body?.length > 0) {
      const arr = drawChart(dataTableKLTTG)
        .map((item: any) => ({ ...item, MQ: item.MQ * 10 }))
        .sort((a: any, b: any) => a.MP - b.MP);
      return arr;
    }
    return [];
  }, [dataTableKLTTG]);
  useEffect(() => {
    const series: any = [
      {
        name: "",
        data: data.map((item: any) => item.MQ),
        color: "#008000",
      },
    ];
    const gradient: any = [0, 0, 50, 500];
    Highcharts.chart("container", {
      chart: {
        type: "column",
        height: 160,
        polar: true,
        backgroundColor: "#303030",
        plotBackgroundColor: {
          linearGradient: gradient,
          stops: [
            [0, "#080808"],
            [1, "#917c05"],
          ],
        },
        plotBorderWidth: 1,
        plotBorderColor: "#545454",
        events: {
          load: function () {
            const yAxis = this.yAxis[0];

            if (data.length !== 0) {
              const yExtremes = yAxis.getExtremes();
              const lengthStep =
                Math.round(yExtremes.dataMin * 0.9).toString().length - 2;
              const step = 10 ** lengthStep;
              const newMin =
                Math.floor((yExtremes.dataMin * 0.95) / step) * step;
              const newMax = Math.ceil(yExtremes.dataMax / step) * step;

              const arrPr: any = data?.map((item: any) => item.MP);
              let min, max, tick, barwidth, minSub;
              min = minNumber(arrPr);
              max = maxNumber(arrPr);
              let arrSub: any = [];
              for (let i = 0; i < arrPr.length; i++) {
                let next = arrPr[i + 1];
                if (typeof next === "undefined") {
                  next = arrPr[0];
                }
                const sub = Math.abs(Math.round((arrPr[0] - next) * 100) / 100);
                if (sub > 0) {
                  arrSub.push(sub);
                }
              }
              minSub = minNumber(arrSub);
              const sub = max - min;
              if (max < 50) {
                tick = minSub;
                barwidth = 0.02;
                min -= barwidth;
                max += barwidth;
              } else if (max > 100) {
                tick = minSub < 0.5 && minSub !== 0 ? minSub : 0.5;
                barwidth = 0.05;
                min -= barwidth;
                max += barwidth;
              } else if (minSub < 0.5) {
                tick = 0.1;
                barwidth = 0.05;
                min -= barwidth;
                max += barwidth;
              } else {
                tick = 1;
                barwidth = 0.2;
                min -= barwidth;
                max += barwidth;
              }
              if (sub > 0) {
                const countTick = Math.round(sub / tick);
                if (countTick > 15) {
                  const tempTick = Math.round(countTick / 10);
                  tick = max < 50 ? 0.1 : 0.5;
                  if (max < 50 && max > 10) {
                    barwidth = 0.05;
                  } else if (max <= 10) {
                    barwidth = 0.01;
                  } else {
                    barwidth = 0.05;
                  }

                  min -= barwidth;
                  max += barwidth;
                }
                yAxis.update({
                  tickAmount: countTick,
                });
              }
              yAxis.setExtremes(newMin, newMax, true, false);
            } else {
              yAxis.update({
                tickAmount: 5,
              });
              yAxis.setExtremes(-1, 1, true, false);
            }
            this.redraw();
          },
        },
      },
      credits: {
        enabled: false,
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: data?.map((item: any) => item.MP),
        labels: {
          rotation: 0,
          useHTML: true,
          style: {
            color: "#a5a5a5",
            fontSize: "6pt",
          },
        },
        lineWidth: 0,
        lineColor: "#5f5f5f",
        tickWidth: 0,
        offset: -10,
        height: 130,
        // crosshair: true,
      },
      yAxis: {
        title: {
          text: null,
        },
        labels: {
          style: {
            fontSize: "6pt",
            color: "#a5a5a5",
          },
          distance: 8,
          formatter: function () {
            const value: any = this.value;
            if (value >= 1000000) {
              return value / 1000000 + "M";
            } else if (value >= 1000) {
              return value / 1000 + "K";
            } else if (value >= 500) {
              return (value / 1000).toFixed(1).replace(/\.0$/, "") + "M";
            } else {
              return value;
            }
          },
        },
        endOnTick: true,
        lineWidth: 0,
        lineColor: "#5f5f5f",
        // maxPadding: 0.01,
        gridLineWidth: 1,
        gridLineColor: "#6d6d6d1f",
        height: 130,
        tickAmount: 6,
        width: 343,
      },
      tooltip: {
        shadow: false,
        backgroundColor: "#ffffffc9",
        borderColor: "#edc240",
        borderRadius: 5,
        borderWidth: 2,
        padding: 6,
        shared: true,
        shape: "square",
        style: {
          fontSize: "12px",
          fontWeight: "500",
        },
        formatter: function () {
          return `<span style="font-size: '5pt';">Giá: <b>${
            this.key
          }</b></span></br>
            <span style="font-size: '5pt';">Khối lượng: <b>${formatNumber(
              this.y
            )}</b></span>`;
        },
        useHTML: true,
      },
      legend: {
        symbolPadding: 0,
        symbolWidth: 0,
        symbolHeight: 0,
        squareSymbol: false,
      },
      plotOptions: {
        column: {
          pointPadding: 0.17,
          borderWidth: 0,
          borderRadius: 0,
          states: {
            hover: {
              color: "#92db33ce",
            },
          },
        },
        series: {
          marker: {
            enabled: false,
          },
        },
      },
      series: series,
    });
  }, [data]);
  return (
    <div className="pu-div-chart-rt">
      <figure className="highcharts-figure">
        <div id="container"></div>
      </figure>
    </div>
  );
};

export default ChartPopup;
