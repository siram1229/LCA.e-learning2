<!DOCTYPE html>
<html>
 <head>
  <meta charset="UTF-8" />
</head>
<body>
    <?php
   mb_language("Japanese");
   mb_internal_encoding("UTF-8");
   $to = "silab1229@gmail.com";
   $name = $_POST['name'];
   $inquiry = $_POST['inquiry'];
   $header = "From: $from\nReply-To: $to\n";
   if(mb_send_mail($to, $name, $inquiry, $header)){
     echo "メールを送信しました";
   } else {
     echo "メールの送信に失敗しました";
   };
 ?>
</body>
</html>
