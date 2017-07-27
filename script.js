$(document).ready(function(){
  $('#getSomething').on('click',getJPic)
});

  function getJPic(){
    var request = $.ajax({
            url: 'https://app2-gse00012260.apaas.us2.oraclecloud.com/api/getallpurchase',
            type: 'GET',
            dataType: 'json'
        });
    request.done(function(response){
      console.log(response[0]);
      console.log(response[0].id)
      console.log(response.length)
      for (i = 0; i < response.length; i++) {
        var rowId = response[i].id
        var originationMortgagee = response[i].origination_mortgagee
        var propertyType = response[i].Property_Type
        var totalResult = response[i].Original_Mortgage_Amount
        var downPaymentSource = response[i].Down_Pay_Source
        var newline = "<tr><th scope='row'>"+rowId+"</th><td>"+originationMortgagee+"</td><td>"+propertyType+"</td><td>"+totalResult+"</td></tr>"
        $("#purchase > tbody").append(newline);
      }
    });
    request.fail(function(error){
      console.log('There was an error: ',error);
    });
  }
