$(document).ready(function(){
  $('#getSomething').on('click',getJPic);
  $('#getPurchases').on('click',getPurchases);
  $('#inputField').on('change', searchByName)
});

  function searchByName(){
    var name = $('#inputField').val()
    console.log(name)
    var request = $.ajax({
            url: 'https://app3-gse00012260.apaas.us2.oraclecloud.com/api/getallrefinance',
            type: 'GET',
            dataType: 'json'
          });
    request.done(function(response){
      console.log(name)
      for (i = 0; i < response.length; i++) {
        if (response[i].company == name){
          console.log(response[i].companyName)
          var rowId = i+1
          var originationMortgagee = response[i].companyName
          var propertyType = response[i].propertyType
          var totalResult = response[i].amount
          var newline = "<tr><th scope='row'>"+rowId+"</th><td>"+originationMortgagee+"</td><td>"+propertyType+"</td><td>"+totalResult+"</td></tr>"
          $("#purchase > tbody").append(newline);
        }
      }
    });
    request.fail(function(error){
      console.log('There was an error: ',error);
    });
  }

  function getJPic(){
    var request = $.ajax({
            url: 'https://app3-gse00012260.apaas.us2.oraclecloud.com/api/getallrefinance',
            type: 'GET',
            dataType: 'json'
          });
    request.done(function(response){
      console.log(response[0]);
      for (i = 0; i < response.length; i++) {
        var rowId = i+1
        var originationMortgagee = response[i].companyName
        var propertyType = response[i].propertyType
        var totalResult = response[i].amount
        var newline = "<tr><th scope='row'>"+rowId+"</th><td>"+originationMortgagee+"</td><td>"+propertyType+"</td><td>"+totalResult+"</td></tr>"
        $("#purchase > tbody").append(newline);
      }
    });
    request.fail(function(error){
      console.log('There was an error: ',error);
    });
  }

  function getPurchases(){
    var request = $.ajax({
            url: 'https://app3-gse00012260.apaas.us2.oraclecloud.com/api/getallpurchase',
            type: 'GET',
            dataType: 'json',
            dataFilter : function(response,type){
              //if not JSON, don't do anything with it
              if(type !== 'json') return response;
              //otherwise, replace and return
              return response.replace('while(1);','');
            }
          });

    request.done(function(response){
      
      console.log(response[0]);
      for (i = 0; i < response.length; i++) {
        var rowId = i+1
        var originationMortgagee = response[i].companyName
        var propertyType = response[i].propertyType
        var totalResult = response[i].amount
        var newline = "<tr><th scope='row'>"+rowId+"</th><td>"+originationMortgagee+"</td><td>"+propertyType+"</td><td>"+totalResult+"</td></tr>"
        $("#purchase > tbody").append(newline);
      }
    });
    request.fail(function(error){
      console.log('There was an error: ',error);
    });
  }
