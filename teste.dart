import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'routes/routes.dart';
import 'pages/home/home.dart';
void main() {
     runApp(
      GetMaterialApp(
       namedRoutes: MyRoutes.routes,
       debugShowCheckedModeBanner: false,
       home: HomePage(),
       )
    );
  }