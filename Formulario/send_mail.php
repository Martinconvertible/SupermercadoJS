<?php
if (isset($_POST)) {
    error_reporting(0);
    $name=$_POST ["name"];
    $email= $POST ["email"];
    $subject = $POST ["subjet"];
    $comments =$POST ["comments"];
    $domain =$POST ["HTTP_HOST"];

    $to= "mfcardone@altercity.com.ar";
    $subject= "Contacto desde el sitio $domain ";
    $comments = "
    <p>
    Datos enviados desde el sitio $domain
    <ul> 
    <li> Nombre: $name </li>
    <li> Email: $email </li>
    <li> Asunto: $subject </li>
    </ul>
    </p>
    " ;

    $header = "MIME-VERSION 1.0\r\n "."Content-Type:text/html; charset=utf-8\r\n"."From:Envío Automático No Responder < no-reply@$domain>";
    $send_mail= mail($to, $subject, $message, $headers);

    if ($send_mail){
        $res= [
            "err"=> false,
            "message" => "Tus datos han sido enviados",
        ]
    } else {
        $res= [
            "err"=> true,
            "message" => "Error al enviar tus datos, intenta nuevamente",
        ]# code...
    }
    header ("Access-Control-Allow-Origin:*"); /* el asterisco significa que permite el acceso desde cualquier origen a peticiones*/ 
    header ('Content-type:application\json');
    echo json_encode($res);
    exit;
    # code...
}
