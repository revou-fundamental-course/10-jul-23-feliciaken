function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
      document.getElementById("result").innerText = "Please enter valid numbers.";
      return;
    }

    const bmi = weight / Math.pow(height, 2);
    <p id="result"></p>
    document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2);
  }