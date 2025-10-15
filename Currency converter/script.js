
      function convert() {
        let dollars = document.getElementById("dollar").value;
        let rupees = document.getElementById("rupees").value;
        let rate = 88;
        let money;
        console.log(dollars, rupees)
        if (dollars == "") {
          money = rupees / rate;
          console.log(money)
          document.getElementById("dollar").value = money.toFixed(2);
        } else if(rupees==""){
          money = dollars * rate;
          document.getElementById("rupees").value = money.toFixed(2);
        }
      }

      console.log(rupees);
    