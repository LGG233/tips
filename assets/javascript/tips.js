
$(document).ready(function () {
    $("#calculateTip").on("click", function () {
        event.preventDefault();
        var billAmount = $("#billAmount").val().trim();
        billAmount = parseFloat(billAmount).toFixed(2);
        console.log(billAmount);
        var tipPercentage = $("#tipPercentage").val().trim();
        tipPercentage = parseInt(tipPercentage);
        console.log(tipPercentage);
        var result = (billAmount * (tipPercentage / 100));
        result = parseFloat(result).toFixed(2);
        console.log(result);
        $("#tipAmount").text(result);
        console.log("This is the original bill: " + billAmount)
        console.log("This is the calculated tip: " + result)
        var totalBill = +billAmount + +result;
        totalBill = parseFloat(totalBill).toFixed(2);
        console.log(totalBill);
        $("#billTotal").text(totalBill);
    })
})

