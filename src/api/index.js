const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

app.get('/api/get', (req, res) => {
  const data = {
    KEI: [
      {
        kpi_name: "工信部移动网络质量满意度",
        kpi_ranking: "22",
        kpi_score: "60",
        kpi_value: "79.52",
      },
      {
        kpi_name: "5G工信部话音质量满意度",
        kpi_ranking: "15",
        kpi_score: "100",
        kpi_value: "86.53",
      },
      {
        kpi_name: "5G工信部上网质量满意度",
        kpi_ranking: "20",
        kpi_score: "57",
        kpi_value: "73.40",
      },
      {
        kpi_name: "CATI话音质量满意度领先值",
        kpi_ranking: "0",
        kpi_score: "0",
        kpi_value: "0.00 ",
      },
      {
        kpi_name: "CATI上网质量满意度领先值",
        kpi_ranking: "0",
        kpi_score: "0",
        kpi_value: "0.00 ",
      },
    ],
    KPI: [
      {
        kpi_name: "5G质差小区占比",
        kpi_ranking: "16",
        kpi_score: "68",
        kpi_value: "0.18 ",
      },
      {
        kpi_name: "5G基站退服率（含工程）",
        kpi_ranking: "10",
        kpi_score: "100",
        kpi_value: "0.04 ",
      },
      {
        kpi_name: "5G室分低零流量占比",
        kpi_ranking: "27",
        kpi_score: "74",
        kpi_value: "8.97 ",
      },
    ],
    KQI: [
      {
        kpi_name: "5G VONR两低一高小区占比",
        kpi_ranking: "19",
        kpi_score: "60",
        kpi_value: "1.67 ",
      },
      {
        kpi_name: "5G 2.6G低速率占比",
        kpi_ranking: "0",
        kpi_score: "0",
        kpi_value: "0.00 ",
      },
      {
        kpi_name: "5G 700M低速率占比",
        kpi_ranking: "0",
        kpi_score: "0",
        kpi_value: "0.00 ",
      },
    ],
    干扰类: [
      {
        kpi_name: "5G 2.6GHz最强一小时占比",
        kpi_ranking: "2",
        kpi_score: "100",
        kpi_value: "0.44 ",
      },
      {
        kpi_name: "5G 700MHz最强一小时占比",
        kpi_ranking: "21",
        kpi_score: "50",
        kpi_value: "28.18 ",
      },
    ],
    承载结构: [
      {
        kpi_name: "5G分流比",
        kpi_ranking: "6",
        kpi_score: "56",
        kpi_value: "37.24 ",
      },
      {
        kpi_name: "4G FDD流量占比",
        kpi_ranking: "19",
        kpi_score: "52",
        kpi_value: "38.97 ",
      },
      {
        kpi_name: "4G D频段流量占比",
        kpi_ranking: "21",
        kpi_score: "69",
        kpi_value: "18.21 ",
      },
    ],
    覆盖类: [
      {
        kpi_name: "5G驻留时长占比",
        kpi_ranking: "15",
        kpi_score: "86",
        kpi_value: "95.56 ",
      },
      {
        kpi_name: "5G全网弱覆盖小区占比",
        kpi_ranking: "11",
        kpi_score: "98",
        kpi_value: "0.17 ",
      },
      {
        kpi_name: "4GMDT弱覆盖占比",
        kpi_ranking: "30",
        kpi_score: "19",
        kpi_value: "6.18 ",
      },
    ],
    载频效率: [
      {
        kpi_name: "5G日均流量每载频",
        kpi_ranking: "25",
        kpi_score: "67",
        kpi_value: "37976",
      },
    ],
    领先竞对: [
      {
        kpi_name: "4G MDT弱覆盖且劣于竞对栅格占比",
        kpi_ranking: "31",
        kpi_score: "0",
        kpi_value: "2.15 ",
      },
      {
        kpi_name: "5G 低于竞对网格占比",
        kpi_ranking: "14",
        kpi_score: "78",
        kpi_value: "2.68 ",
      },
    ],
  }
  res.send(data)
})

// const cors = require('cors')
// app.use(cors())

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})
