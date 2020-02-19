// Write your Pizza Builder JavaScript in this file.
$(document).ready(()=>{

    $(".btn-mushrooms").click(function(){
        $(this).toggleClass("active");
        $(".mushroom").toggle();
        updatePricing();
    })
    $(".btn-pepperonni").click(function(){
        $(this).toggleClass("active");
        $(".pep").toggle();
        updatePricing();
    })
    $(".btn-green-peppers").click(function(){
        $(this).toggleClass("active");
        $(".green-pepper").toggle();
        updatePricing()
    })
    $(".btn-sauce").click(function(){
        $(this).toggleClass("active");
        $(".sauce").toggleClass("sauce-white");
        updatePricing();
    });

    $(".btn-crust").click(function(){
        $(this).toggleClass("active");
        $(".crust").toggleClass("crust-gluten-free");
        updatePricing()
    });

    updatePricing();
})

function updatePricing(){
    var pep;
    var mushrooms;
    var greenPep;
    var sauce;
    var crust;
    var total;
    if($(".btn-mushrooms").hasClass("active")){
        $(".price li:contains('mushrooms')").show();
        mushrooms=1;
    }else{
        mushrooms=0;
        $(".price li:contains('mushrooms')").hide();
    }

    if($(".btn-pepperonni").hasClass("active")){
        pep=1;
        $(".price li:contains('pepperonni')").show();
    }else{
        pep=0;
        $(".price li:contains('pepperonni')").hide();
    }

    if($(".btn-green-peppers").hasClass("active")){
        greenPep=1;
        $(".price li:contains('green peppers')").show();
    }else{
        greenPep=0;
        $(".price li:contains('green peppers')").hide();
    }

    if($(".btn-sauce").hasClass("active")){
        sauce=3;
        $(".price li:contains('white sauce')").show();
    }else{
        sauce=0;
        $(".price li:contains('white sauce')").hide();
    }

    if($(".btn-crust").hasClass("active")){
        crust=5;
        $(".price li:contains('gluten-free crust')").show();
    }else{
        crust= 0;
        $(".price li:contains('gluten-free crust')").hide();
    }
    total =crust+sauce+pep+greenPep+mushrooms+10;

    $(".price strong").html("$"+total);
}