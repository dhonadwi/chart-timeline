// Data
const data = [
  ['service 1', '2023-08-01 06:00:00', '100'],
  ['service 2', '2023-08-01 06:15:00', '120'],
  ['service 3', '2023-08-01 06:30:00', '100'],
];

// Konversi data waktu menjadi objek Date
const dates = data.map((item) => new Date(item[1]));

// Konversi data nilai menjadi integer
const values = data.map((item) => parseInt(item[2]));
var chartDom = document.getElementById('lineChart');
var myChart = echarts.init(chartDom);
var option;

let historyRefuelling = [
  ['2023-08-01 06:00:00', 5],
  ['2023-08-01 16:00:00', 7],
  ['2023-08-01 23:00:00', 7],
];

let historyTheft = [
  ['2023-08-01 06:10:00', 1],
  ['2023-08-02 07:00:00', 2],
];

let service3 = [
  ['2023-08-01 06:30:00', 5],
  ['2023-08-02 06:50:00', 7],
];

let service4 = [
  ['2023-08-01 06:26:00', 5],
  ['2023-08-02 06:46:00', 7],
];

option = {
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  legend: {
    data: ['Service 1', 'Service 2', 'Service 3', 'Service 4'],
  },
  title: {
    text: 'Data Monitorin',
    textStyle: {
      fontFamily: 'lato',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  // calculable: true,
  xAxis: [
    {
      type: 'time',
      boundaryGap: true,
      time: {
        unit: 'minute', // Unit waktu yang digunakan (sesuaikan dengan data Anda)
        displayFormats: {
          minute: 'YYYY-MM-DD HH:mm:ss', // Format tampilan tanggal dan waktu
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      // backgroundColor: '#4D86FF',
      name: 'Service 1',
      type: 'line',
      smooth: true,
      stack: 'Total',

      emphasis: {
        focus: 'series',
      },
      // itemStyle: { normal: { areaStyle: { type: 'default' } } },
      data: historyRefuelling,
    },
    {
      name: 'Service 2',
      type: 'line',
      smooth: true,
      stack: 'Total',

      emphasis: {
        focus: 'series',
      },
      // itemStyle: { normal: { areaStyle: { type: 'default' } } },
      data: historyTheft,
    },
    {
      name: 'Service 3',
      type: 'line',
      smooth: true,
      stack: 'Total',
      emphasis: {
        focus: 'series',
      },
      // itemStyle: { normal: { areaStyle: { type: 'default' } } },
      data: service3,
    },
    {
      name: 'Service 4',
      type: 'line',
      smooth: true,
      stack: 'Total',
      emphasis: {
        focus: 'series',
      },
      // itemStyle: { normal: { areaStyle: { type: 'default' } } },
      data: service4,
    },
  ],
};

option && myChart.setOption(option);
