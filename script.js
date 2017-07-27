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
      filterSearch(response, name)
      console.log(name)
    });
    request.fail(function(error){
      console.log('There was an error: ',error);
    });
  }

  function getJPic(){
    $("#purchase > tbody").empty()

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
    $("#purchase > tbody").empty()

    var request = $.ajax({
            url: 'https://app3-gse00012260.apaas.us2.oraclecloud.com/api/getallpurchase',
            type: 'GET',
            dataType: 'json',
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

  function filterSearch(response, name){
    $("#purchase > tbody").empty()
    $.each(response, function(index){
      var addLine = response[index].companyName
      // console.log(addLine)
      if (addLine.includes(name)) {
        console.log("It worked")
        var rowId = index+1
        var originationMortgagee = response[index].companyName
        var propertyType = response[index].propertyType
        var totalResult = response[index].amount
        var newline = "<tr><th scope='row'>"+rowId+"</th><td>"+originationMortgagee+"</td><td>"+propertyType+"</td><td>"+totalResult+"</td></tr>"
        $("#purchase > tbody").append(newline);
      }
    })

  }
