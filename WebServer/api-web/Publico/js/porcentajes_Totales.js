function porcentajes_Totales(tot_val_ins) {

    var nombreInstituciones = tot_val_ins.map(
        function (NombreInstitucion) {
            return NombreInstitucion.nom_ins;
        }
    );

    var porcentajeInstituciones = tot_val_ins.map(
        function (porcentajeInstituciones) {
            return porcentajeInstituciones.por_ins;
        }
    );


    var ctx = document.getElementById("chart5").getContext('2d');

    var newColors = ['#AB526B','#BCA297','#C5CEAE','#D8C473',
        '#C9C2A2','#7FEFE4','#A6C977','#EDA8AB',
        '#799C60','#C6D5FF','#539CB5','#C2BCF4',
        '#17A3A5','#E579A8','#BA69C5','#DBE88D',
        '#FCBAD2','#636FD6','#948E50','#E8C96D',
        '#525FA2','#67447B','#70EADA','#C7DCA1',
        '#D8CB55','#D67B7E'];

    var newBorders=['#792F4F','#947A7C','#A3B999','#C1AB55',
        '#A9A88A','#34E8DD','#71B258','#E28395',
        '#317247','#A4C3FF','#2272A2','#9E9FF1',
        '#097C8D','#D64591','#913CB6','#C6DE6F',
        '#FA9DC6','#2840CB','#555E3B','#DAB250',
        '#2A275B','#833660','#159A80','#A6CD88',
        '#C1B53F','#BE465D'];

    var newHover=['#792F4F','#947A7C','#A3B999','#C1AB55',
        '#A9A88A','#34E8DD','#71B258','#E28395',
        '#317247','#A4C3FF','#2272A2','#9E9FF1',
        '#097C8D','#D64591','#913CB6','#C6DE6F',
        '#FA9DC6','#2840CB','#555E3B','#DAB250',
        '#2A275B','#833660','#159A80','#A6CD88',
        '#C1B53F','#BE465D'];
    var colorbg=[ 'rgba(255,185,0,0.5)','rgba(231,72,86,0.5)','rgba(0,120,215,0.5)','rgba(0,153,188,0.5)',
        'rgba(255,140,0,0.5)','rgba(232,17,35,0.5)', 'rgba(0,99,177,0.5)','rgba(45,125,154,0.5)',
        'rgba(247,99,12,0.5)','rgba(234,0,94,0.5)','rgba(142,140,216,0.5)','rgba(0,183,195,0.5)',
        'rgba(104,118,138,0.5)','rgba(202,80,16,0.5)','rgba(195,0,82,0.5)', 'rgba(107,105,214,0.5)',
        'rgba(3,131,135,0.5)','rgba(218,59,1,0.5)','rgba(227,0,140,0.5)', 'rgba(135,100,184,0.5)',
        'rgba(0,178,148,0.5)','rgba(86,124,115,0.5)','rgba(100,124,100,0.5)', 'rgba(191,0,119,0.5)',
        'rgba(0,204,106,0.5)','rgba(132,117,69,0.5)'];
    var colorBorder=[ 'rgba(255,185,0,1)','rgba(231,72,86,1)','rgba(0,120,215,1)','rgba(0,153,188,1)',
        'rgba(255,140,0,1)','rgba(232,17,35,1)', 'rgba(0,99,177,1)','rgba(45,125,154,1)',
        'rgba(247,99,12,1)','rgba(234,0,94,1)','rgba(142,140,216,1)','rgba(0,183,195,1)',
        'rgba(104,118,138,1)','rgba(202,80,16,1)','rgba(195,0,82,1)', 'rgba(107,105,214,1)',
        'rgba(3,131,135,1)','rgba(218,59,1,1)','rgba(227,0,140,1)', 'rgba(135,100,184,1)',
        'rgba(0,178,148,1)','rgba(86,124,115,1)','rgba(100,124,100,1)', 'rgba(191,0,119,1)',
        'rgba(0,204,106,1)','rgba(132,117,69,1)'];
    var hover=[ 'rgba(255,185,0,0.7)','rgba(231,72,86,0.7)','rgba(0,120,215,0.7)','rgba(0,153,188,0.7)',
        'rgba(255,140,0,0.7)','rgba(232,17,35,0.7)', 'rgba(0,99,177,0.7)','rgba(45,125,154,0.7)',
        'rgba(247,99,12,0.7)','rgba(234,0,94,0.7)','rgba(142,140,216,0.7)','rgba(0,183,195,0.7)',
        'rgba(104,118,138,0.7)','rgba(202,80,16,0.7)','rgba(195,0,82,0.7)', 'rgba(107,105,214,0.7)',
        'rgba(3,131,135,0.7)','rgba(218,59,1,0.7)','rgba(227,0,140,0.7)', 'rgba(135,100,184,0.7)',
        'rgba(0,178,148,0.7)','rgba(86,124,115,0.7)','rgba(100,124,100,0.7)', 'rgba(191,0,119,0.7)',
        'rgba(0,204,106,0.7)','rgba(132,117,69,0.7)'];


    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: nombreInstituciones,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: porcentajeInstituciones
            }]
        },
        options: {
            title : {
                display : true,
                text : "Porcentajes de Accesibilidad Física",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
            layout: {
                padding: {
                    left: 30,
                    right: 30,
                    top: 0,
                    bottom: 0
                }
            },
            scales:
                {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        display: false,
                        stacked: true,
                        mirror: true,
                    }]
                },
            responsive: true,
            maintainAspectRatio: false,

            legend: {
                display: false // Ocultar legendas
            },
        }
    });
}
