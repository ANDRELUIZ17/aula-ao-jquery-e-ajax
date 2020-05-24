
function consultacep(){
    $(".barra-progresso").show();
}
    var cep = document.getElementById("cep").Value;
    var url = "https://viacep.com.br/ws/" + cep +"/json/"
    console.log(url);
    $.ajax({
        url: url,     
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(respose.localedade);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#titulo_cep").html("cep"+response.cep);
            $("cep").show();
            $(".barra-progresso").hide();
})
            //alert(response.logradouro);
        
    


$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});