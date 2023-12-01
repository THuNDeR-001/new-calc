    function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function calculateResult() {
        var displayValue = document.getElementById('display').value;
        var result;

        try {
            var mathFunction = new Function('return ' + displayValue);
            result = mathFunction();
        } catch (error) {
            result = 'Error';
        }

        document.getElementById('display').value = result;
    }