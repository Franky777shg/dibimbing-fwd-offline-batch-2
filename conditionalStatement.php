<?php

$int = -2;

// if ($int > 0) {
//     echo "Positif";
// } elseif ($int < 0) {
//     echo "Negatif";
// } else {
//     echo "Nol";
// };

// switch (true) {
//     case ($int > 0):
//         echo "Positif";
//         break;
//     case ($int < 0):
//         echo "Negatif";
//         break;
//     default:
//         echo "Nol";
// }

$budi = 7;
                          // True      // False
$status = ($budi >= 18) ? "Dewasa" : "Anak - Anak";
// echo $status;

$data = "ada kok";
$lapor = $data ?? "Ini data pengganti";
echo $lapor;