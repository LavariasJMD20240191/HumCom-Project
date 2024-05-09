document.getElementById('s').addEventListener('click', myfun);

            function myfun(e){
                var w = document.getElementById('w').value;
                var h = document.getElementById('h').value;
                var bmi = w/(h/100 * h/100);
                document.getElementById('bmi').innerHTML = bmi.toFixed(2);

                if(w>=1 && h>=1){
                    e.preventDefault();
                    if(bmi >= 18.5 && bmi <= 24.9){
                        document.getElementById('result').innerHTML = "Fit"
                    }
                    if(bmi <= 18.4){
                        document.getElementById('result').innerHTML = "Thin";

                    }
                    if(bmi >= 25){
                        document.getElementById('result').innerHTML = "Obese";
                    }
                }
                else{
                    document.getElementById('bmi').innerHTML ="";
                    document.getElementById('result').innerHTML ="";
                }
            }