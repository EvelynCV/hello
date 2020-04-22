function puntaje_Total(tot_val_ins) {

    var nombreInstituciones = tot_val_ins.map(
        function (NombreInstitucion) {
            return NombreInstitucion.nom_ins;
        }
    );

    var valoresInstituciones = tot_val_ins.map(
        function (totalValores) {
            return totalValores.tot_val;
        }
    );

    var chartColors = [
        'rgba(255,185,0,0.5)','rgba(231,72,86,0.5)','rgba(0,120,215,0.5)','rgba(0,153,188,0.5)',
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


    var ctx = document.getElementById("chart1").getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nombreInstituciones,
            datasets: [{
                label: "Puntaje",
                backgroundColor: chartColors,
                borderColor: colorBorder,
                borderWidth: 1.5,
                hoverBackgroundColor: hover,
                data: valoresInstituciones
            }]
        },
        options: {
            title : {
                display : true,
                text: 'Puntución Obtenida',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
            subtitle: {
                text: 'This text has'
            },
            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        stacked: true,
                        mirror: true,
                    }]
                },
            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h3>Instituciones</h3>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="background-color:' + ds.backgroundColor[i] + '; border-color:' +ds.borderColor[i]+ '; border-width:' + ds.borderWidth[i] +'">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },

           /* plugins: {

                afterDatasetsDraw: function (context, easing) {
                    var ctx = context.chart.ctx;
                    context.data.datasets.forEach(function (dataset) {
                        for (var i = 0; i < dataset.data.length; i++) {
                            if (dataset.data[i] != 0) {
                                var model = dataset.object.keys(dataset)[0].data[i];
                                var textY = model.y + (dataset.type == "line" ? -3 : 15);

                                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
                                ctx.textAlign = 'start';
                                ctx.textBaseline = 'middle';
                                ctx.fillStyle = dataset.type == "line" ? "black" : "black";
                                ctx.save();
                                ctx.translate(model.x, textY-15);
                                ctx.rotate(4.7);
                                ctx.fillText(dataset.data[i], 0, 0);
                                ctx.restore();
                            }
                        }
                    });
                },
            }*/
        }
    });

    var myLegendContainer = document.getElementById("legend");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}