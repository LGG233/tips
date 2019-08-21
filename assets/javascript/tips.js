$(document).ready(function () {
    $("#calculateTip").on("click", function () {
        event.preventDefault();
        var billAmount = parseFloat($("#billAmount").val().trim()).toFixed(2);
        console.log(billAmount)
        if (billAmount === "NaN") {
            console.log("error");
            alert("Please enter the anount on the bill");
            return
        }
        var tipPercentage = parseInt($("#tipPercentage").val().trim());
        if (tipPercentage === "NaN") {
            alert("Please enter the percent you'd like to tip")
            return
        }
        var result = parseFloat((billAmount * (tipPercentage / 100))).toFixed(2);
        $("#tipPercent").text(tipPercentage);
        $("#tipAmount").text(result);
        var totalBill = parseFloat(+billAmount + +result).toFixed(2);
        $("#billTotal").text(totalBill);
    })
    $("#clearForm").on("click", function () {
        location.reload();
    })
    $(".percentButton").on("click", function () {
        event.preventDefault();
        var billAmount = parseFloat($("#billAmount").val().trim()).toFixed(2);
        if (billAmount === "NaN") {
            console.log("error");
            alert("Please enter the anount on the bill");
            return
        }
        var percent = $(this).data("value");
        var result = parseFloat((billAmount * (percent / 100))).toFixed(2);
        $("#tipPercent").text(percent);
        $("#tipAmount").text(result);
        var totalBill = parseFloat(+billAmount + +result).toFixed(2);
        $("#billTotal").text(totalBill);
    })
})