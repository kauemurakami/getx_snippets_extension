import 'package:example/src/routes/my_routes.dart';
import 'package:example/src/ui/android/home/my_page.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() {
  runApp(
    GetMaterialApp(
        debugShowCheckedModeBanner: false,
        defaultTransition: Transition.fade,
        namedRoutes: MyRoutes.routes,
        home: MyHomePage(),
    )
  );
}
