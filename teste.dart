import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
class HomePage extends StatelessWidget {
//final HomeRepository repository = HomeRepository(apiClient: apiClient(httpClient: http.Client()));

@override
Widget build(BuildContext context) {

return Scaffold(
appBar: AppBar(title: Text('Home')),
body: Container(
   child: GetX<Home>(
     builder: (_){
       return Container();
     }
    ),
  ),
);
}