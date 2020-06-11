import 'package:example/src/data/provider/my_provider.dart';
import 'package:meta/meta.dart';

class MyRepository {

final MyApiClient apiClient;

MyRepository({@required this.apiClient}) : assert(apiClient != null);

getAll(){
  return apiClient.getAll();
}
getId(id){
  return apiClient.getId(id);
}
delete(id){
  return apiClient.delete(id);
}
edit(obj){
  return apiClient.edit( obj );
}
add(obj){
    return apiClient.add( obj );
}

}