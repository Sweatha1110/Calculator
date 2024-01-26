function calculateNearCorrection() {
    const sphere = parseFloat(document.getElementById('sphere').value);
    const requiredDistance = parseFloat(document.getElementById('requiredDistance').value);
    const nearPoint = parseFloat(document.getElementById('nearPoint').value);
    const cyl = (document.getElementById('cyl').value);
    const axis = (document.getElementById('axis').value);
    if(isNaN(requiredDistance) || isNaN(sphere) || isNaN(nearPoint))
    {
        window.alert("Please enter valid numeric values")
    }
    else
    {   
        const nearCorrection = sphere + (100/requiredDistance) - (0.5 * (100/nearPoint));
    document.getElementById('result').innerText = `Near Correction [${nearCorrection.toFixed(2)}]sph [${cyl}]cyl [${axis}]axis`;
    }
    
}

function calculateACARatio() {
    const ipd = parseFloat(document.getElementById('ipd').value);
    const nfd = parseFloat(document.getElementById('nfd').value) / 100; // converting cm to meters
    const hn = parseFloat(document.getElementById('hn').value);
    const hd = parseFloat(document.getElementById('hd').value);
    if(isNaN(ipd) || isNaN(nfd) || isNaN(hn) || isNaN(hd))
    {
        window.alert("Please enter valid numeric values")
    }
    else
    {
        const acaratio = ipd + (hn - hd) * nfd;
        document.getElementById('resultBinocular').innerText = `AC/A Ratio: ${acaratio.toFixed(1)}:1`;
    }
    
  }


function calculateLars() {
    console.log("called");
        const axis = parseFloat(document.getElementById('axis').value);
        const rotationHours = parseFloat(document.getElementById('rotationHours').value);
        const rotationDirection = parseFloat(document.getElementById('rotationDirection').value);

        let degreeIncrement = 0;

        if (rotationHours === 0.5) {
            degreeIncrement = 15;
        } else if (rotationHours === 1) {
            degreeIncrement = 30;
        } else if (rotationHours === 2) {
            degreeIncrement = 60;
        }
        const finalAxis = (rotationDirection === 1) ? (axis + degreeIncrement)%180 : Math.abs((Math.abs(axis-degreeIncrement))-180);
        document.getElementById('resultLars').innerText = finalAxis;

}
