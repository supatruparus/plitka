    document.querySelectorAll('input').forEach((element) => {
      element.addEventListener('click', () => {
        event.target.select();
        if (event.target.id == 'width') {
          event.target.value = '';
        }
      })
    });
    document.querySelectorAll('input').forEach((element) => {
      element.addEventListener('input', () => {
        calculate();
      })
    })
    function setvalue(width) {
      document.getElementById('width').value = width;
    }
    function calculate() {
      let D = parseFloat(document.calculator.D.value.replace(/,/, '.'));
      let d = parseFloat(document.calculator.d.value.replace(/,/, '.'));
      let v = parseFloat(document.calculator.vitki.value.replace(/,/, '.'));
      let w = parseFloat(document.calculator.w.value.replace(/,/, '.'));
      let result = ((D + d) / 2) / 100 * v * w * 3.1416;
      document.getElementById('Sresult').innerHTML = `${parseFloat(result).toFixed(3)}`;
      document.getElementById('Length').innerHTML = `${parseFloat(result / w).toFixed(3)}`;
    }
    document.querySelectorAll('output').forEach((element) =>{
        element.addEventListener('click', ()=>{
            console.log(event.target.value)
            navigator.clipboard.writeText(event.target.value)
            
        })
    })