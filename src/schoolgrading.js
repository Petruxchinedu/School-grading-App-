var percentage = document.getElementById('per')
var grade = document.getElementById('gra')
var total = document.getElementById("tot")
var parag = document.getElementById('para')
var btn1 = document.getElementById("btn")
var first = document.getElementById('fir')
var second = document.getElementById('sec')
var third = document.getElementById("thi")
var fourth = document.getElementById('fou')
var fifth = document.getElementById("fif")
var parag = document.getElementById('para')
var inpu  = document.getElementById('inp')

btn1.onclick = function() {
  var sum = (Number(document.getElementById('fir').value) + Number(document.getElementById('sec').value) + Number(document.getElementById('thi').value) + Number(document.getElementById('fou').value) + Number(document.getElementById('fif').value)) / 5

  percentage.innerHTML = "Percentage - " + sum + "%" 

    if(sum >= '0' && sum <= '39'){grade.innerHTML = "Grade - F"}
    else if(sum >= '40' && sum <= '49'){grade.innerHTML = "Grade - E"}
    else if(sum >= '50' && sum <= '54'){grade.innerHTML = "Grade - D"}
    else if(sum >= '55' && sum <= '59'){grade.innerHTML = "Grade - D+"}
    else if(sum >= '60' && sum <= '64'){grade.innerHTML = "Grade - C"}
    else if(sum >= '65' && sum <= '69'){grade.innerHTML = "Grade - C+"}
    else if(sum >= '70' && sum <= '74'){grade.innerHTML = "Grade - B"}
    else if(sum >= '75' && sum <= '79'){grade.innerHTML = "Grade - B+"}
    else if(sum >= '80' && sum <= '84'){grade.innerHTML = "Grade - A-"}
    else if(sum >= '85' && sum <= '89'){grade.innerHTML = "Grade - A"}
    else if(sum >= '90' && sum <= '100'){grade.innerHTML = "Grade - A+"}

  total.innerHTML ="Total - "  + eval(Number(document.getElementById('fir').value) + Number(document.getElementById('sec').value) + Number(document.getElementById('thi').value) + Number(document.getElementById('fou').value) + Number(document.getElementById('fif').value))

  if(sum >= '0' && sum <= '39'){parag.innerHTML = "Sorry, " + inpu.value + " You failed"}
    else if(sum >= '40' && sum <= '49'){parag.innerHTML = inpu.value + " You Passed "}
    else if(sum >= '50' && sum <= '54'){parag.innerHTML = inpu.value + " You have Credit "}
    else if(sum >= '55' && sum <= '59'){parag.innerHTML = inpu.value + " You have Credit "}
    else if(sum >= '60' && sum <= '64'){parag.innerHTML = inpu.value + " You have Credit "}
    else if(sum >= '65' && sum <= '69'){parag.innerHTML = "Almost there " + inpu.value + ", You Scored Good"}
    else if(sum >= '70' && sum <= '74'){parag.innerHTML = "Welldone " + inpu.value + ", You Scored Good"}
    else if(sum >= '75' && sum <= '79'){parag.innerHTML = "Welldone " + inpu.value + ", You Scored Very good"}
    else if(sum >= '80' && sum <= '84'){parag.innerHTML = "You did well " + inpu.value + ", You Scored Excellent"}
    else if(sum >= '85' && sum <= '89'){parag.innerHTML = "You did well " + inpu.value + ", You Scored Excellent"}
    else if(sum >= '90' && sum <= '100'){parag.innerHTML = "You did well " + inpu.value + ", You scored Excellent"}
}

 