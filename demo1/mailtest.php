<?php
      require 'vendor/autoload.php';

      $email = new \SendGrid\Mail\Mail();
      $email->setFrom("sila1229@yahoo.co.jp", "Esiram");
      $email->setSubject("Hello from SendGrid");
      $email->addTo("silab1229@gmail.com", "silab1229");
      $email->addContent("text/plain", "Hello world");
      $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
      try {
          $response = $sendgrid->send($email);
          print $response->statusCode() . "\n";
          print_r($response->headers());
          print $response->body() . "\n";
      } catch (Exception $e) {
          echo 'Caught exception: '. $e->getMessage() ."\n";
      }
?>