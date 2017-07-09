window.onload = function () {
  // 基于准备好的dom，初始化echarts实例
  var tempChart = echarts.init(document.getElementById('tempChart'));
  var humiChart = echarts.init(document.getElementById('humiChart'));
  var co2Chart = echarts.init(document.getElementById('co2Chart'));
  var o2Chart = echarts.init(document.getElementById('o2Chart'));
  var pmChart = echarts.init(document.getElementById('pmChart'));
  var lightChart = echarts.init(document.getElementById('lightChart'));

  // 温度配置项和数据
  tempChartOption = {
    title: {
      text: '未来一周气温变化',
      backgroundColor: '#0ff',
      subtext: '纯属虚',
      textStyle: {  
        color: '#408829'  
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['空气温度','土壤温度']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis:  {
      type: 'category',
      boundaryGap: true,
      data: ['周一','周二','周三','周四','周五','周六','周日'],
      axisLine:{
        lineStyle:{  
          color:'green',  
          width:2  
        }  
      },  
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
    {
      name:'空气温度',
      type:'line',
      data:[11, 11, 15, 13, 27, 13, 10],
      label: {
        normal: {
          show: true
        }
      },
      itemStyle:{
        normal:{
          color: "#4dcda2"
        }
      }
    },
    {
      name:'土壤温度',
      type:'line',
      data:[1, -2, 2, 5, 3, 2, 0],
      label: {
        normal: {
          show: true
        }
      },
      itemStyle:{
        normal:{
          color: "#8b5361"
        }
      }
    }
    ]
  };

  // 湿度配置项和数据
  humiChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['空气温度','土壤温度']
    },
    xAxis:  {
      type: 'category',
      boundaryGap: true,
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
    {
      name:'空气温度',
      type:'line',
      data:[11, 11, 15, 13, 12, 13, 10],
      markPoint: {
        data: [
        {type: 'max', name: '最大值'},
        {type: 'min', name: '最小值'}
        ]
      },
      markLine: {
        data: [
        {type: 'average', name: '平均值'}
        ]
      },
      itemStyle:{
        normal:{
          color: "#e59447"
        }
      }
    },
    {
      name:'土壤温度',
      type:'line',
      data:[1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [
        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
        ]
      },
      markLine: {
        data: [
        {type: 'average', name: '平均值'},
        [{
          symbol: 'none',
          x: '90%',
          yAxis: 'max'
        }, {
          symbol: 'circle',
          label: {
            normal: {
              position: 'start',
              formatter: '最大值'
            }
          },
          type: 'max',
          name: '最高点'
        }]
        ]
      },
      itemStyle:{
        normal:{
          color: "#8b5361"
        }
      }
    }
    ]
  };

  // CO2配置项和数据
  co2ChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['CO2浓度']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'CO2浓度',
      type: 'line',
      stack: '总量',
      label: {
        normal: {
          show: true
        }
      },
      areaStyle: {
        normal: {}
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      itemStyle:{
        normal:{
          color: "#9f86ff"
        }
      }
    }]
  };

  // O2配置项和数据
  o2ChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['O2浓度']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'O2浓度',
      type: 'line',
      stack: '总量',
      label: {
        normal: {
          show: true
        }
      },
      areaStyle: {
        normal: {}
      },
      data: [320, 332, 301, 334, 390, 330, 320],
      itemStyle:{
        normal:{
          color: "#43d9e7"
        }
      }
    }]
  };

  // PM2.5配置项和数据
  pmChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['PM2.5浓度']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'PM2.5浓度',
      type: 'line',
      stack: '总量',
      label: {
        normal: {
          show: true
        }
      },
      areaStyle: {
        normal: {}
      },
      data: [220, 182, 191, 234, 290, 330, 310],
      itemStyle:{
        normal:{
          color: "#e64759"
        }
      }
    }]
  };

  // 光照强度配置项和数据
  lightChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['PM2.5浓度']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'PM2.5浓度',
      type: 'line',
      stack: '总量',
      label: {
        normal: {
          show: true
        }
      },
      areaStyle: {
        normal: {}
      },
      data: [220, 182, 191, 234, 290, 330, 310],
      itemStyle:{
        normal:{
          color: "#e4d836"
        }
      }
    }]
  };

  // 使用刚指定的配置项和数据显示图表
  tempChart.setOption(tempChartOption);
  humiChart.setOption(humiChartOption);
  co2Chart.setOption(co2ChartOption);
  o2Chart.setOption(o2ChartOption);
  pmChart.setOption(pmChartOption);
  lightChart.setOption(lightChartOption);

  // 设置节流函数
  var resizeTimer = null;
  window.onresize = function () {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(function () {
      tempChart.resize();
      humiChart.resize();
      co2Chart.resize();
      o2Chart.resize();
      pmChart.resize();
      lightChart.resize();
    }, 200);
  };
};