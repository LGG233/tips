
$(document).ready(function () {
    $("#calculateTip").on("click", function () {
        event.preventDefault();
        var billAmount = parseFloat($("#billAmount").val().trim()).toFixed(2);
        var tipPercentage = parseInt($("#tipPercentage").val().trim());
        var result = parseFloat((billAmount * (tipPercentage / 100))).toFixed(2);
        $("#tipAmount").text(result);
        var totalBill = parseFloat(+billAmount + +result).toFixed(2);
        $("#billTotal").text(totalBill);
    })
    $("#clearForm").on("click", function () {
        location.reload();
    })
    $("#tenPercent").on("click", function () {
        event.preventDefault();
        var billAmount = parseFloat($("#billAmount").val().trim()).toFixed(2);
        // var tipPercentage = parseInt($("#tipPercentage").val().trim());
        var result = parseFloat((billAmount * .1)).toFixed(2);
        $("#tipAmount").text(result);
        var totalBill = parseFloat(+billAmount + +result).toFixed(2);
        $("#billTotal").text(totalBill);
    })
    $("#fifteenPercent").on("click", function () {
        event.preventDefault();
        var billAmount = parseFloat($("#billAmount").val().trim()).toFixed(2);
        // var tipPercentage = parseInt($("#tipPercentage").val().trim());
        var result = parseFloat((billAmount * .15)).toFixed(2);
        $("#tipAmount").text(result);
        var totalBill = parseFloat(+billAmount + +result).toFixed(2);
        $("#billTotal").text(totalBill);
    })
    $("#twentyPercent").on("click", function () {
        event.preventDefault();
        var billAmount = parseFloat($("#billAmount").val().trim()).toFixed(2);
        // var tipPercentage = parseInt($("#tipPercentage").val().trim());
        var result = parseFloat((billAmount * .2)).toFixed(2);
        $("#tipAmount").text(result);
        var totalBill = parseFloat(+billAmount + +result).toFixed(2);
        $("#billTotal").text(totalBill);
    })

})

