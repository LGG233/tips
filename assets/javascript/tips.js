
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
    $("#tenPercent").on("click", function () {
        event.preventDefault();
        var billAmount = parseFloat($("#billAmount").val().trim()).toFixed(2);
        if (billAmount === "NaN") {
            console.log("error");
            alert("Please enter the anount on the bill");
            return
        }
        var result = parseFloat((billAmount * .1)).toFixed(2);
        $("#tipPercent").text("10");
        $("#tipAmount").text(result);
        var totalBill = parseFloat(+billAmount + +result).toFixed(2);
        $("#billTotal").text(totalBill);
    })
    $("#fifteenPercent").on("click", function () {
        event.preventDefault();
        var billAmount = parseFloat($("#billAmount").val().trim()).toFixed(2);
        if (billAmount === "NaN") {
            console.log("error");
            alert("Please enter the anount on the bill");
            return
        }
        var result = parseFloat((billAmount * .15)).toFixed(2);
        $("#tipPercent").text("15");
        $("#tipAmount").text(result);
        var totalBill = parseFloat(+billAmount + +result).toFixed(2);
        $("#billTotal").text(totalBill);
    })
    $("#twentyPercent").on("click", function () {
        event.preventDefault();
        var billAmount = parseFloat($("#billAmount").val().trim()).toFixed(2);
        if (billAmount === "NaN") {
            console.log("error");
            alert("Please enter the anount on the bill");
            return
        }
        var result = parseFloat((billAmount * .2)).toFixed(2);
        $("#tipPercent").text("20");
        $("#tipAmount").text(result);
        var totalBill = parseFloat(+billAmount + +result).toFixed(2);
        $("#billTotal").text(totalBill);
    })
    $("#twentyFivePercent").on("click", function () {
        event.preventDefault();
        var billAmount = parseFloat($("#billAmount").val().trim()).toFixed(2);
        if (billAmount === "NaN") {
            console.log("error");
            alert("Please enter the anount on the bill");
            return
        }
        var result = parseFloat((billAmount * .25)).toFixed(2);
        $("#tipPercent").text("25");
        $("#tipAmount").text(result);
        var totalBill = parseFloat(+billAmount + +result).toFixed(2);
        $("#billTotal").text(totalBill);
    })

})

