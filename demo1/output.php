<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta charset="UTF-8" />
  <title>PHP</title>
  <link rel="stylesheet" href="stylesheet.css">
</head>

<body>
    <?php
    print('飲料水: ' . $i1 = htmlspecialchars($_REQUEST['ml'], ENT_QUOTES) . '[ml]');
    ?>
    <br><br>
    <?php
    print('温室効果ガス排出量[g-CO2e]');
    ?>
    <br>
    <?php
    $i2 = htmlspecialchars($_POST['q10'], ENT_QUOTES);
    print('飲料水の生産・流通: ' . $I2 = $i2 * intval($i1));
    ?>
    <br>
    <?php
    $i3 = htmlspecialchars($_POST['q11'], ENT_QUOTES);
    print('水質改善処理: ' . $I3 = $i3 * intval($i1));
    ?>
    <br>
    <?php
    $i4 = htmlspecialchars($_POST['q12'], ENT_QUOTES);
    print('飲料水の販売: ' . $I4 = $i4 * intval($i1));
    ?>
    <br>
    <?php
    $i5 = htmlspecialchars($_POST['q13'], ENT_QUOTES);
    print('飲料水の保存: ' . $I5 = $i5 * intval($i1));
    ?>
    <br>
    <?php
    if (($i6 = htmlspecialchars($_POST['q14'], ENT_QUOTES)) == "0.000515") {
        print('飲用容器の使用: ' . $I6 = $i6 * intval($i1));
    } else {
        print('飲用容器の使用: ' . $I6 = $i6);
    }
    ?>
    <br>
    <?php
    print('ペットボトルの処分: ' );
    if(($i7 = htmlspecialchars($_POST['q15'], ENT_QUOTES)) == "0") {
        print($I7 = $i7);
    } elseif (($i7 = htmlspecialchars($_POST['q15'], ENT_QUOTES)) == "1.80") {
        print($I7 = $i7);
    } elseif (($i7 = htmlspecialchars($_POST['q15'], ENT_QUOTES)) == "a") {
        if ($i2 == "0.261") {
        print($I7 = 0.167 * intval($i1));
        } elseif($i2 == "0.484") {
        print($I7 = 0.138 * intval($i1));
        } elseif($i2 == "0.176") {
        print($I7 = 0.0865 * intval($i1));
        } else{
        print($I7 = 0.0632 * intval($i1));
        }
    } else {
        if ($i2 == "0.261") {
        print($I7 = -0.0376 * intval($i1));
        } elseif($i2 == "0.484") {
        print($I7 = -0.0303 * intval($i1));
        } elseif($i2 == "0.176") {
        print($I7 = -0.0177 * intval($i1));
        } else{
        print($I7 = -0.0120 * intval($i1));
        }
    }
    ?>
    <br>
    <?php
    $sum = $I2 + $I3 + $I4 + $I5 + $I6 + $I7;
    print('合計: ' . $sum . '[g-CO2e]');
    ?>
</body>
</html>
