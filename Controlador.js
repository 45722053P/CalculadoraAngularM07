
app.controller('Controlador',function($scope){
    $scope.n1 = 0;
    $scope.n2 = 0 ;
    $scope.resultado;


    $scope.suma = function(){
      $scope.resultado=($scope.n1 + $scope.n2);
    };

    $scope.resta = function () {
        $scope.resultado=($scope.n1- $scope.n2);

    };
    $scope.multi = function () {
        $scope.resultado=( $scope.n1* $scope.n2);

    };
    $scope.divi = function () {
        $scope.resultado=($scope.n1/ $scope.n2);

    };

});