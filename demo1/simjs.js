function getRadioValue(name1, name2, name3, name4, name5, name6, name7){
var result = new Array(7);
result[0] = parseFloat(document.getElementById(name1).value);
var radios1 = document.getElementsByName(name2);
var radios2 = document.getElementsByName(name3);
var radios3 = document.getElementsByName(name4);
var radios4 = document.getElementsByName(name5);
var radios5 = document.getElementsByName(name6);
var radios6 = document.getElementsByName(name7);
	
 
 //取得したラジオボタンオブジェクトから選択されたものを探し出す

 for(var i=0; i<radios1.length; i++){
   if (radios1[i].checked) {
	 //選択されたラジオボタンのvalue値を取得する
	 result[1] = result[0] * parseFloat(radios1[i].value);
	 break;
   }
 }
 
 for(var i=0; i<radios2.length; i++){
   if (radios2[i].checked) {
	 //選択されたラジオボタンのvalue値を取得する
	 result[2] = result[0] * parseFloat(radios2[i].value);
	 break;
   }
 }

 for(var i=0; i<radios3.length; i++){
   if (radios3[i].checked) {
	 //選択されたラジオボタンのvalue値を取得する
	 result[3] = result[0] * parseFloat(radios3[i].value);
	 break;
   }
 }

 for(var i=0; i<radios4.length; i++){
   if (radios4[i].checked) {
	 //選択されたラジオボタンのvalue値を取得する
	 result[4] = result[0] * parseFloat(radios4[i].value);
	 break;
   }
 }

 for(var i=0; i<radios5.length; i++){
   if (radios5[i].checked) {
	 //選択されたラジオボタンのvalue値を取得する
	 if(radios5[i].value == "0.000515") {
		 result[5] = result[0] * parseFloat(radios5[i].value);
		 break;
	 } else {
	 	result[5] = parseFloat(radios5[i].value);
		 break;
	 }
   }
 }

 for(var i=0; i<radios6.length; i++){
   if (radios6[i].checked) {
	 //選択されたラジオボタンのvalue値を取得する
	 if(radios6[i].value == "0" || radios6[i].value == "1.80") {
		 result[6] = parseFloat(radios6[i].value);
		 break;
	 } else if(radios6[i].value == "a"){
	 	if(radios1[i].value == "0.261"){
			result[6] = 0.167 * result[0];
			break;
		 } else if(radios1[i].value == "0.484") {
			result[6] = 0.138 * result[0];
			break;
		 } else if(radios1[i].value == "0.176") {
			result[6] = 0.0865 * result[0]; 
			break;
		 } else {
			result[6] = 0.0632 * result[0]; 
			break;
		 }
	 } else {
		if (radios1[i].value == "0.261") {
			result[6] = -0.0376 * result[0];
			break;
        } else if(radios1[i].value == "0.484") {
			result[6] = -0.0303 * result[0];
			break;
        } else if(radios1[i].value == "0.176") {
			result[6] = -0.0177 * result[0];
			break;
        } else {
			result[6] = -0.0120 * result[0];
			break;
        }
	 }
   }
 }

 var ctx = document.getElementById("ch").getContext("2d");
					var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels:["合計"],
    datasets:[{
	  label: '飲料水の生産・流通',
      data:[result[1]],
      backgroundColor: "red"
    },
    {
	  label: '水質改善処理',
      data:[result[2]],
      backgroundColor: "orange"
    },
	{
	  label: '飲料水の販売',
      data:[result[3]],
      backgroundColor: "yellow"
    },
    {
	  label: '飲料水の保存',
      data:[result[4]],
      backgroundColor: "blue"
    },
	{
	  label: '飲用容器の使用',
      data:[result[5]],
      backgroundColor: "black"
    },
    {
	  label: 'ペットボトルの処分' ,
      data:[result[6]],
      backgroundColor: "green"
    }]
  },
  options:{
    maintainAspectRatio: false,
    scales:{
      xAxes:[{
        stacked: true
      }],
      yAxes:[{
          scaleLabel: {
              display: true,
              labelString: 'CO2排出量[g-CO2e]'
          },
		  stacked: true,
		  ticks: {
			  Max: 1000,
			  Min: -50,
			  stepSize: 10
		  }
      }]
    }
  }
});

}