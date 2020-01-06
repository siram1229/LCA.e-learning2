var qa = [
    ['地球温暖化の原因である温室効果ガスのほとんどは、人間が作り出したものである。 ', 1],
    ['地球の平均気温は、最悪の場合、今世紀末には4.8℃上昇すると予測されているが、2℃程度の上昇なら問題ない。 ', 2],
    ['東京のエネルギー消費量とCO2排出量の約10％が家庭から排出される。 ', 2],
    ['家庭で一番エネルギーを使う機器は、エアコンなどの冷暖房機器である。', 2],
    ['夏の冷房時に部屋に入ってくる熱の多くは、窓からである。 ', 1],

  ];
  
  var count = 0;
  var correctNum = 0;
  
  window.onload = function() {
    // 最初の問題を表示
    var question = document.getElementById('question');
    question.innerHTML = (count + 1) + '問目：' + qa[count][0];
  };
  
  // クリック時の答え判定
  function hantei(btnNo) {
    if (qa[count][1] == btnNo) {
      correctNum++;
    }
  
    if (count == 4) {
      alert('あなたの正解数は' + correctNum + '問です！');
    }
  
    // 次の問題表示
    count++;
    var question = document.getElementById('question');
    question.innerHTML = (count + 1) + '問目：' + qa[count][0];
  }