// Função para gerar o acionamento
function gerarAcionamento() {
    const site = document.getElementById("site-search").value.toUpperCase() || "";
    const uc = document.getElementById("uc").value || "";
    const endereco = document.getElementById("endereco").value || "";
    const protocolo = document.getElementById("protocolo").value.toUpperCase() || "";
    const atendente = document.getElementById("atendente").value.toUpperCase() || "";
    const horaData = new Date().toLocaleString('pt-BR');

    let resultado = `INFORMATIVO DE PROTOCOLO\nSITE: ${site}\nUC: ${uc}\nENDEREÇO: ${endereco}\nPROTOCOLO: ${protocolo}\nATENDENTE: ${atendente}\nHORA E DATA: ${horaData}`;

    document.getElementById("resultado").innerText = resultado.trim();
}

// Função para copiar o acionamento gerado
function copiarAcionamento() {
    const resultado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultado);
    alert("Acionamento copiado para a área de transferência!");
}

// Função para buscar site e filtrar opções
document.getElementById("site-search").addEventListener("input", function() {
    const filter = this.value.toUpperCase();
    const options = document.getElementById("site").options;
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.innerHTML = '';

    if (filter.length >= 1) {
        for (let i = 0; i < options.length; i++) {
            const optionText = options[i].text.toUpperCase();
            if (optionText.includes(filter)) {
                const div = document.createElement('div');
                div.textContent = optionText;
                div.addEventListener('click', function() {
                    document.getElementById('site-search').value = optionText;
                    dropdownContent.classList.remove('show');
                    preencherDados(options[i].value);
                });
                dropdownContent.appendChild(div);
            }
        }
        dropdownContent.classList.add('show');
    } else {
        dropdownContent.classList.remove('show');
    }
});

// Função para preencher dados de UC e Endereço
function preencherDados(value) {
    const select = document.getElementById('site');
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === value) {
            const dados = select.options[i].value.split('*');
            document.getElementById('uc').value = dados[1];
            document.getElementById('endereco').value = dados[2];
            found = true;
            break;
        }
    }
    if (found) {
        document.getElementById('rotasButton').style.display = 'block';
    } else {
        document.getElementById('uc').value = '';
        document.getElementById('endereco').value = '';
        document.getElementById('rotasButton').style.display = 'none';
    }
}

// Função para abrir o Google Maps com as coordenadas do KML
function abrirGoogleMaps() {
    // Coordenadas de exemplo do KML
    const coordenadas = {
        "AM0001F": {
          "lat": -3.08483,
          "lng": -60.072408
        },
        "AM0001R": {
          "lat": -3.102108,
          "lng": -59.943767
        },
        "AM0001S": {
          "lat": -3.09472,
          "lng": -60.0231
        },
        "AM0002F": {
          "lat": -3.094769,
          "lng": -59.948547
        },
        "AM0002S": {
          "lat": -3.101111,
          "lng": -60.025278
        },
        "AM0003F": {
          "lat": -2.92975,
          "lng": -60.007969
        },
        "AM0003S": {
          "lat": -3.104578,
          "lng": -60.010979
        },
        "AM0004F": {
          "lat": -3.09448,
          "lng": -60.02262
        },
        "AM0004R": {
          "lat": -3.074509,
          "lng": -59.970321
        },
        "AM0004S": {
          "lat": -3.06353,
          "lng": -59.987589
        },
        "AM0005F": {
          "lat": -3.103934,
          "lng": -60.012554
        },
        "AM0005R": {
          "lat": -3.37899,
          "lng": -64.723858
        },
        "AM0005S": {
          "lat": -3.083314,
          "lng": -59.919315
        },
        "AM0006F": {
          "lat": -2.656805,
          "lng": -56.769071
        },
        "AM0006R": {
          "lat": -3.104237,
          "lng": -60.011948
        },
        "AM0006S": {
          "lat": -3.062512,
          "lng": -59.949773
        },
        "AM0007F": {
          "lat": -3.176414,
          "lng": -60.101812
        },
        "AM0007R": {
          "lat": -3.09472,
          "lng": -60.0231
        },
        "AM0007S": {
          "lat": -3.106648,
          "lng": -60.011777
        },
        "AM0008F": {
          "lat": -3.097506,
          "lng": -60.023908
        },
        "AM0008R": {
          "lat": -3.10517,
          "lng": -60.007432
        },
        "AM0008S": {
          "lat": -3.103723,
          "lng": -60.04975
        },
        "AM0009F": {
          "lat": -3.066016,
          "lng": -59.990772
        },
        "AM0009S": {
          "lat": -2.299268,
          "lng": -56.892162
        },
        "AM0010F": {
          "lat": -3.106707,
          "lng": -60.0118
        },
        "AM0010S": {
          "lat": -6.981099,
          "lng": -71.475436
        },
        "AM0011F": {
          "lat": -3.083872,
          "lng": -59.919388
        },
        "AM0011S": {
          "lat": -2.29336,
          "lng": -56.800739
        },
        "AM0012F": {
          "lat": -3.097359,
          "lng": -59.923993
        },
        "AM0012S": {
          "lat": 0.601676,
          "lng": -69.2019
        },
        "AM0013F": {
          "lat": -3.15084,
          "lng": -59.99845
        },
        "AM0013S": {
          "lat": -2.37358,
          "lng": -57.58326
        },
        "AM0014F": {
          "lat": -2.669619,
          "lng": -56.769605
        },
        "AM0014S": {
          "lat": -2.804717,
          "lng": -56.729099
        },
        "AM00157": {
          "lat": 0,
          "lng": 0
        },
        "AM00158": {
          "lat": 0,
          "lng": 0
        },
        "AM00159": {
          "lat": 0,
          "lng": 0
        },
        "AM0015F": {
          "lat": -2.669619,
          "lng": -56.769605
        },
        "AM00160": {
          "lat": 0,
          "lng": 0
        },
        "AM00161": {
          "lat": 0,
          "lng": 0
        },
        "AMAAK01": {
          "lat": -3.577917,
          "lng": -61.404917
        },
        "AMAAK02": {
          "lat": -3.57792,
          "lng": -61.40492
        },
        "AMAAK03": {
          "lat": -3.58693015070983,
          "lng": -61.320894570163
        },
        "AMAAK04": {
          "lat": -3.476062883,
          "lng": -61.50974027
        },
        "AMAAMI1": {
          "lat": -3.083201,
          "lng": -60.027996
        },
        "AMALU01": {
          "lat": -3.084967,
          "lng": -60.024343
        },
        "AMAMC01": {
          "lat": -3.121115,
          "lng": -60.017876
        },
        "AMANR01": {
          "lat": -3.746222,
          "lng": -61.659833
        },
        "AMANR02": {
          "lat": -3.739722,
          "lng": -61.65525
        },
        "AMAPU01": {
          "lat": -7.195417,
          "lng": -59.890528
        },
        "AMAPU02": {
          "lat": -6.96764,
          "lng": -59.911114
        },
        "AMAPU03": {
          "lat": -7.327806,
          "lng": -59.854663
        },
        "AMAPU04": {
          "lat": -6.797441,
          "lng": -59.047319
        },
        "AMATK01": {
          "lat": -3.365389,
          "lng": -68.19575
        },
        "AMATK02": {
          "lat": -3.375556,
          "lng": -68.413889
        },
        "AMATN01": {
          "lat": -4.370083,
          "lng": -70.191889
        },
        "AMATN02": {
          "lat": -4.53122,
          "lng": -71.618072
        },
        "AMATN03": {
          "lat": -5.13668191082063,
          "lng": -72.8129497550415
        },
        "AMAVY01": {
          "lat": -3.213444,
          "lng": -64.812222
        },
        "AMAVY02": {
          "lat": -3.113889,
          "lng": -64.901944
        },
        "AMAVY03": {
          "lat": -3.30089,
          "lng": -64.7811
        },
        "AMAZS01": {
          "lat": -3.58641,
          "lng": -59.13084
        },
        "AMAZS02": {
          "lat": -3.38886,
          "lng": -59.27427
        },
        "AMAZS03": {
          "lat": -3.544236,
          "lng": -58.929217
        },
        "AMAZS04": {
          "lat": -3.38753,
          "lng": -59.278
        },
        "AMAZS05": {
          "lat": -3.57887,
          "lng": -59.1317
        },
        "AMAZS90": {
          "lat": -3.21035,
          "lng": -59.03012
        },
        "AMBAE01": {
          "lat": -2.80472,
          "lng": -57.0639
        },
        "AMBAE02": {
          "lat": -2.76851,
          "lng": -56.81884
        },
        "AMBAE03": {
          "lat": -2.859824,
          "lng": -57.000784
        },
        "AMBAE04": {
          "lat": -2.85431,
          "lng": -57.43548
        },
        "AMBAE05": {
          "lat": -3.072778,
          "lng": -57.165583
        },
        "AMBAE90": {
          "lat": -2.818166,
          "lng": -57.074306
        },
        "AMBBA01": {
          "lat": -4.389861,
          "lng": -59.592528
        },
        "AMBBA02": {
          "lat": -3.966134,
          "lng": -58.923297
        },
        "AMBBA03": {
          "lat": -4.520656,
          "lng": -59.579425
        },
        "AMBBA04": {
          "lat": -4.229015,
          "lng": -59.274175
        },
        "AMBBA05": {
          "lat": -4.466971,
          "lng": -59.811919
        },
        "AMBBA06": {
          "lat": -4.38788,
          "lng": -59.59345
        },
        "AMBBA07": {
          "lat": -4.04222,
          "lng": -59.377599
        },
        "AMBBA08": {
          "lat": -4.38788,
          "lng": -59.59345
        },
        "AMBBA09": {
          "lat": -4.047386,
          "lng": -59.372098
        },
        "AMBBA90": {
          "lat": -4.04222,
          "lng": -59.377599
        },
        "AMBBA91": {
          "lat": -4.2602,
          "lng": -59.41903
        },
        "AMBCL01": {
          "lat": -0.97067,
          "lng": -62.92439
        },
        "AMBCL02": {
          "lat": -0.97414,
          "lng": -62.92142
        },
        "AMBCL03": {
          "lat": -1.4578,
          "lng": -61.63504
        },
        "AMBCL04": {
          "lat": -1.45759116874674,
          "lng": -61.6355778788281
        },
        "AMBCT01": {
          "lat": -4.38818,
          "lng": -70.0298
        },
        "AMBCT02": {
          "lat": -4.406389,
          "lng": -69.905278
        },
        "AMBCT03": {
          "lat": -4.37724,
          "lng": -70.03181
        },
        "AMBCT04": {
          "lat": -4.37724,
          "lng": -70.01103
        },
        "AMBCT05": {
          "lat": -4.31582,
          "lng": -69.564793
        },
        "AMBDE01": {
          "lat": -8.77639,
          "lng": -67.3315
        },
        "AMBDE02": {
          "lat": -8.816761,
          "lng": -67.501635
        },
        "AMBDE03": {
          "lat": -8.74513,
          "lng": -67.3993
        },
        "AMBDE04": {
          "lat": -8.75759,
          "lng": -67.38597
        },
        "AMBDE05": {
          "lat": -9.063375,
          "lng": -67.397384
        },
        "AMBIH90": {
          "lat": -2.79658415,
          "lng": -57.27887372
        },
        "AMBIH91": {
          "lat": -2.837658,
          "lng": -57.414269
        },
        "AMBRT01": {
          "lat": -3.209269,
          "lng": -57.948488
        },
        "AMBRY01": {
          "lat": -3.902889,
          "lng": -61.371944
        },
        "AMBRY02": {
          "lat": -4.631889,
          "lng": -61.25231
        },
        "AMBRY90": {
          "lat": -4.372889,
          "lng": -60.952917
        },
        "AMBTR01": {
          "lat": -3.16034,
          "lng": -57.54769
        },
        "AMBTR02": {
          "lat": -3.2094,
          "lng": -57.94841
        },
        "AMBVK01": {
          "lat": -2.970614,
          "lng": -57.585308
        },
        "AMBVK02": {
          "lat": -3.05802,
          "lng": -57.59647
        },
        "AMBVK90": {
          "lat": 0,
          "lng": 0
        },
        "AMCDAM1": {
          "lat": -3.085312,
          "lng": -60.036732
        },
        "AMCDJ01": {
          "lat": -3.864391,
          "lng": -62.484501
        },
        "AMCGW01": {
          "lat": -3.32085,
          "lng": -61.20753
        },
        "AMCGW02": {
          "lat": -3.325194,
          "lng": -61.212083
        },
        "AMCJS01": {
          "lat": -3.830833,
          "lng": -62.063833
        },
        "AMCOW01": {
          "lat": -3.091527,
          "lng": -60.021399
        },
        "AMCOW02": {
          "lat": -3.126556,
          "lng": -60.015994
        },
        "AMCOW03": {
          "lat": -3.082068,
          "lng": -60.028933
        },
        "AMCOW04": {
          "lat": -3.084396,
          "lng": -60.027289
        },
        "AMCOW05": {
          "lat": -1.450143,
          "lng": -48.488315
        },
        "AMCOW06": {
          "lat": -3.12638888888889,
          "lng": -60.0155555555556
        },
        "AMCOW07": {
          "lat": -3.091919,
          "lng": -60.021192
        },
        "AMCRI01": {
          "lat": -4.09156,
          "lng": -63.1414
        },
        "AMCRI02": {
          "lat": -3.981316,
          "lng": -63.03253
        },
        "AMCRI03": {
          "lat": -4.09798,
          "lng": -63.15623
        },
        "AMCRI04": {
          "lat": -3.857717,
          "lng": -62.591239
        },
        "AMCRI05": {
          "lat": -3.715342,
          "lng": -63.469717
        },
        "AMCRI06": {
          "lat": -3.715342,
          "lng": -63.469717
        },
        "AMCRI07": {
          "lat": -4.061172,
          "lng": -63.027697
        },
        "AMCTM01": {
          "lat": -6.531886,
          "lng": -64.385779
        },
        "AMCTM02": {
          "lat": -8.198383,
          "lng": -63.867601
        },
        "AMCUY01": {
          "lat": -4.87342,
          "lng": -66.89004
        },
        "AMCVZ01": {
          "lat": -3.197242,
          "lng": -59.825956
        },
        "AMCVZ02": {
          "lat": -3.19382,
          "lng": -59.8697
        },
        "AMCVZ03": {
          "lat": -3.23643,
          "lng": -59.73004
        },
        "AMCXY01": {
          "lat": -3.82408,
          "lng": -60.3634
        },
        "AMCXY02": {
          "lat": -3.636931,
          "lng": -60.376009
        },
        "AMCXY03": {
          "lat": -3.606697,
          "lng": -60.227801
        },
        "AMCXY04": {
          "lat": -3.356289,
          "lng": -59.83685
        },
        "AMCXY05": {
          "lat": -3.951389,
          "lng": -60.019167
        },
        "AMCXY06": {
          "lat": -3.69874,
          "lng": -60.19919
        },
        "AMCXY07": {
          "lat": -3.60948,
          "lng": -60.39715
        },
        "AMCXY08": {
          "lat": -3.9641,
          "lng": -60.52603
        },
        "AMCXY09": {
          "lat": -3.40507,
          "lng": -59.978
        },
        "AMCXY10": {
          "lat": -3.819979889,
          "lng": -60.36131944
        },
        "AMDEP01": {
          "lat": -3.086709,
          "lng": -59.95002
        },
        "AMDEP02": {
          "lat": -3.090441,
          "lng": -59.948606
        },
        "AMDEP03": {
          "lat": -3.132374,
          "lng": -59.989064
        },
        "AMDEP04": {
          "lat": -3.130875,
          "lng": -59.994879
        },
        "AMEBT01": {
          "lat": -3.207222,
          "lng": -59.87
        },
        "AMEBT02": {
          "lat": -4.372777778,
          "lng": -60.952777778
        },
        "AMEBT03": {
          "lat": -4.631666667,
          "lng": -61.251111111
        },
        "AMEBT04": {
          "lat": -4.922777778,
          "lng": -61.501666667
        },
        "AMEBT05": {
          "lat": -5.148888889,
          "lng": -61.760277778
        },
        "AMEBT06": {
          "lat": -5.356944444,
          "lng": -62.038333333
        },
        "AMEBT07": {
          "lat": -5.652881,
          "lng": -62.225939
        },
        "AMEBT08": {
          "lat": -5.887777778,
          "lng": -62.397222222
        },
        "AMEBT09": {
          "lat": -7.2075,
          "lng": -63.134722222
        },
        "AMEBT10": {
          "lat": -8.136111111,
          "lng": -63.7325
        },
        "AMEBT11": {
          "lat": -3.825139,
          "lng": -60.361056
        },
        "AMEBT12": {
          "lat": -6.121444,
          "lng": -62.588222
        },
        "AMEBT13": {
          "lat": -6.369194444,
          "lng": -62.804694444
        },
        "AMEBT14": {
          "lat": -6.907277778,
          "lng": -63.072722222
        },
        "AMEBT15": {
          "lat": -4.082583,
          "lng": -60.684556
        },
        "AMEBT16": {
          "lat": -6.612222222,
          "lng": -62.955555556
        },
        "AMEIE01": {
          "lat": -6.66,
          "lng": -69.874001
        },
        "AMEIE02": {
          "lat": -6.66222222222222,
          "lng": -69.86417
        },
        "AMEIE03": {
          "lat": -6.571944,
          "lng": -69.780556
        },
        "AMEIE04": {
          "lat": -6.65665,
          "lng": -69.88058
        },
        "AMEIE05": {
          "lat": -6.6675,
          "lng": -69.86483
        },
        "AMEIE06": {
          "lat": -6.704336,
          "lng": -70.327179
        },
        "AMEIE07": {
          "lat": -6.704336,
          "lng": -70.327179
        },
        "AMESC01": {
          "lat": -3.126149,
          "lng": -60.016002
        },
        "AMEVI01": {
          "lat": -7.434778,
          "lng": -70.023278
        },
        "AMEVI02": {
          "lat": -7.499947,
          "lng": -69.95767
        },
        "AMFTB01": {
          "lat": -2.51451,
          "lng": -66.09897
        },
        "AMFTB02": {
          "lat": -2.51556,
          "lng": -66.942503
        },
        "AMFTB03": {
          "lat": -2.51217,
          "lng": -66.09883
        },
        "AMGIA01": {
          "lat": -4.63188,
          "lng": -61.251861
        },
        "AMGJA01": {
          "lat": -7.544028,
          "lng": -72.577667
        },
        "AMHUT01": {
          "lat": -7.50959,
          "lng": -63.02601
        },
        "AMHUT02": {
          "lat": -7.581725,
          "lng": -63.260668
        },
        "AMHUT03": {
          "lat": -7.56128,
          "lng": -62.83441
        },
        "AMHUT04": {
          "lat": -7.46657,
          "lng": -63.25799
        },
        "AMHUT05": {
          "lat": -7.508653,
          "lng": -63.036212
        },
        "AMHUT06": {
          "lat": -7.52064,
          "lng": -63.0262
        },
        "AMHUT07": {
          "lat": -6.907278,
          "lng": -63.073222
        },
        "AMHUT08": {
          "lat": -6.249919,
          "lng": -61.839044
        },
        "AMHUT09": {
          "lat": -7.615338,
          "lng": -63.087529
        },
        "AMIKT01": {
          "lat": -6.436361,
          "lng": -68.244556
        },
        "AMIKT02": {
          "lat": -6.241389,
          "lng": -68.173889
        },
        "AMIOT01": {
          "lat": -3.14406,
          "lng": -58.44095
        },
        "AMIOT02": {
          "lat": -3.13136,
          "lng": -58.44099
        },
        "AMIOT03": {
          "lat": -3.120972,
          "lng": -58.430578
        },
        "AMIOT04": {
          "lat": -3.12928,
          "lng": -58.42894
        },
        "AMIOT05": {
          "lat": -3.042783,
          "lng": -58.517948
        },
        "AMIOT06": {
          "lat": -2.902083,
          "lng": -59.107417
        },
        "AMIOT07": {
          "lat": -3.210799903855177,
          "lng": -59.03025411044973
        },
        "AMIOT08": {
          "lat": -3.13826,
          "lng": -58.4404
        },
        "AMIOT09": {
          "lat": -3.20218,
          "lng": -58.192069
        },
        "AMIOT10": {
          "lat": -3.204,
          "lng": -58.1913
        },
        "AMIOT11": {
          "lat": -3.14382,
          "lng": -58.45037
        },
        "AMIOT12": {
          "lat": -3.141009,
          "lng": -58.430315
        },
        "AMIOT13": {
          "lat": -3.130404,
          "lng": -58.429374
        },
        "AMIOT90": {
          "lat": -3.027833,
          "lng": -58.832806
        },
        "AMIOT91": {
          "lat": -2.942389,
          "lng": -59.291194
        },
        "AMIRD01": {
          "lat": -3.09502,
          "lng": -60.44143
        },
        "AMIRD02": {
          "lat": -3.1,
          "lng": -60.442101
        },
        "AMIRD03": {
          "lat": -3.16928,
          "lng": -60.08804
        },
        "AMIRD04": {
          "lat": -3.2721,
          "lng": -60.17825
        },
        "AMIRD05": {
          "lat": -3.17837,
          "lng": -60.344349
        },
        "AMIRD06": {
          "lat": -3.130639,
          "lng": -60.368611
        },
        "AMIRD07": {
          "lat": -3.279008,
          "lng": -60.187861
        },
        "AMIRD08": {
          "lat": -3.11419,
          "lng": -60.19626
        },
        "AMIRD09": {
          "lat": -3.120431,
          "lng": -60.319269
        },
        "AMITX01": {
          "lat": -3.093114,
          "lng": -60.034611
        },
        "AMITX1L": {
          "lat": -2.74705,
          "lng": -58.0311
        },
        "AMIXN01": {
          "lat": -7.05383,
          "lng": -71.6894
        },
        "AMIXN02": {
          "lat": -6.974278,
          "lng": -71.762254
        },
        "AMIXN03": {
          "lat": -7.0525,
          "lng": -71.6885
        },
        "AMIXN04": {
          "lat": -6.979162,
          "lng": -71.4729828
        },
        "AMIXNS1": {
          "lat": -6.981099,
          "lng": -71.475436
        },
        "AMIXT01": {
          "lat": -2.74622,
          "lng": -58.02697
        },
        "AMIXT90": {
          "lat": 0,
          "lng": 0
        },
        "AMJPU01": {
          "lat": -1.88013,
          "lng": -66.99986
        },
        "AMJPU02": {
          "lat": -1.826341,
          "lng": -66.599515
        },
        "AMJPU03": {
          "lat": -1.823056,
          "lng": -66.608608
        },
        "AMJPU04": {
          "lat": -1.395094,
          "lng": -69.426054
        },
        "AMJRA01": {
          "lat": -3.476761,
          "lng": -66.063925
        },
        "AMJRA02": {
          "lat": -3.64234011786972,
          "lng": -66.1053657777238
        },
        "AMJRA03": {
          "lat": -2.67482,
          "lng": -65.674689
        },
        "AMJTY01": {
          "lat": -2.74811,
          "lng": -66.76541
        },
        "AMJTY02": {
          "lat": -2.848611,
          "lng": -66.929167
        },
        "AMJTY03": {
          "lat": -2.74336,
          "lng": -66.76808
        },
        "AMJTY04": {
          "lat": -2.849088,
          "lng": -66.928374
        },
        "AMLEA01": {
          "lat": -7.26471,
          "lng": -64.79523
        },
        "AMLEA02": {
          "lat": -7.25571,
          "lng": -64.78794
        },
        "AMLMI01": {
          "lat": -3.09264,
          "lng": -60.0239
        },
        "AMLMN01": {
          "lat": -14.179186,
          "lng": -50.449219
        },
        "AMMAO01": {
          "lat": -3.07958,
          "lng": -59.97576
        },
        "AMMAO02": {
          "lat": -3.0549,
          "lng": -59.9576
        },
        "AMMAO03": {
          "lat": -3.021944,
          "lng": -59.994722
        },
        "AMMAO04": {
          "lat": -2.989604,
          "lng": -60.014884
        },
        "AMMAO05": {
          "lat": -3.041994,
          "lng": -59.989494
        },
        "AMMAO06": {
          "lat": -3.12478,
          "lng": -59.97105
        },
        "AMMAO07": {
          "lat": -3.06473,
          "lng": -59.92815
        },
        "AMMAO08": {
          "lat": -3.130248,
          "lng": -59.999771
        },
        "AMMAO08_001": {
          "lat": -3.125786,
          "lng": -59.995351
        },
        "AMMAO09": {
          "lat": -3.07465,
          "lng": -60.06398
        },
        "AMMAO10": {
          "lat": -3.076121,
          "lng": -60.064502
        },
        "AMMAO11": {
          "lat": -3.10179,
          "lng": -60.06714
        },
        "AMMAO12": {
          "lat": -3.07339,
          "lng": -60.0496
        },
        "AMMAO13": {
          "lat": -3.03,
          "lng": -59.978
        },
        "AMMAO14": {
          "lat": -3.01564,
          "lng": -59.95145
        },
        "AMMAO15": {
          "lat": -3.128526,
          "lng": -60.038138
        },
        "AMMAO16": {
          "lat": -3.084489,
          "lng": -60.001261
        },
        "AMMAO17": {
          "lat": -3.08123,
          "lng": -60.06166
        },
        "AMMAO18": {
          "lat": -3.059,
          "lng": -60.03909
        },
        "AMMAO19": {
          "lat": -3.073811,
          "lng": -60.087276
        },
        "AMMAO20": {
          "lat": -3.115111,
          "lng": -60.02165
        },
        "AMMAO21": {
          "lat": -2.989848,
          "lng": -60.015329
        },
        "AMMAO21_001": {
          "lat": -2.984879,
          "lng": -60.017585
        },
        "AMMAO22": {
          "lat": -3.10674,
          "lng": -60.06432
        },
        "AMMAO23": {
          "lat": -3.04256,
          "lng": -59.92517
        },
        "AMMAO24": {
          "lat": -3.12337,
          "lng": -60.02727
        },
        "AMMAO25": {
          "lat": -3.11134,
          "lng": -60.01689
        },
        "AMMAO26": {
          "lat": -3.0535,
          "lng": -60.042583
        },
        "AMMAO27": {
          "lat": -2.999238,
          "lng": -60.046127
        },
        "AMMAO28": {
          "lat": -3.01754,
          "lng": -59.97192
        },
        "AMMAO29": {
          "lat": -3.063388,
          "lng": -59.928075
        },
        "AMMAO30": {
          "lat": -2.966111,
          "lng": -60.017778
        },
        "AMMAO31": {
          "lat": -3.021617225490714,
          "lng": -59.99518870436754
        },
        "AMMAO32": {
          "lat": -3.073631051574965,
          "lng": -60.04976629695789
        },
        "AMMAO33": {
          "lat": -3.0378,
          "lng": -59.97761
        },
        "AMMAO34": {
          "lat": -3.12767,
          "lng": -60.02962
        },
        "AMMAO35": {
          "lat": -3.115,
          "lng": -60.025
        },
        "AMMAO36": {
          "lat": -3.115026,
          "lng": -60.01381
        },
        "AMMAO37": {
          "lat": -3.123611,
          "lng": -60.024444
        },
        "AMMAO38": {
          "lat": -3.015034660024265,
          "lng": -59.95155192394155
        },
        "AMMAO39": {
          "lat": -3.146333,
          "lng": -59.957969
        },
        "AMMAO40": {
          "lat": -3.096966,
          "lng": -60.001326
        },
        "AMMAO41": {
          "lat": -3.113487,
          "lng": -60.030002
        },
        "AMMAO42": {
          "lat": -3.043533,
          "lng": -59.999858
        },
        "AMMAO43": {
          "lat": -3.083919,
          "lng": -60.001111
        },
        "AMMAO44": {
          "lat": -3.075594,
          "lng": -59.962884
        },
        "AMMAO44_001": {
          "lat": -3.075783,
          "lng": -59.957111
        },
        "AMMAO44_002": {
          "lat": -3.091,
          "lng": -59.965
        },
        "AMMAO44_003": {
          "lat": -3.08998,
          "lng": -59.9623
        },
        "AMMAO44_004": {
          "lat": -3.075708,
          "lng": -59.957218
        },
        "AMMAO45": {
          "lat": -3.114091,
          "lng": -60.024566
        },
        "AMMAO46": {
          "lat": -3.106192,
          "lng": -60.061349
        },
        "AMMAO47": {
          "lat": -3.144497,
          "lng": -59.991926
        },
        "AMMAO48": {
          "lat": -3.128414880441755,
          "lng": -60.03897041600698
        },
        "AMMAO49": {
          "lat": -3.052905394836335,
          "lng": -60.04278148346608
        },
        "AMMAO50": {
          "lat": -2.998761220664763,
          "lng": -60.04588560118766
        },
        "AMMAO51": {
          "lat": -3.0711,
          "lng": -59.9909
        },
        "AMMAO52": {
          "lat": -3.074621755558196,
          "lng": -60.06448961971177
        },
        "AMMAO53": {
          "lat": -3.075546276764829,
          "lng": -59.96339361971177
        },
        "AMMAO54": {
          "lat": -3.0717,
          "lng": -59.9308
        },
        "AMMAO55": {
          "lat": -3.028908,
          "lng": -59.923935
        },
        "AMMAO56": {
          "lat": -3.080866,
          "lng": -60.079113
        },
        "AMMAO57": {
          "lat": -3.140585,
          "lng": -59.963209
        },
        "AMMAO57_001": {
          "lat": -3.034791,
          "lng": -59.937559
        },
        "AMMAO58": {
          "lat": -3.021355708442925,
          "lng": -59.99476832933168
        },
        "AMMAO59": {
          "lat": -3.074641234393425,
          "lng": -60.06506995223744
        },
        "AMMAO60": {
          "lat": -3.043033351090335,
          "lng": -59.92534800117246
        },
        "AMMAO61": {
          "lat": -3.030545,
          "lng": -59.930686
        },
        "AMMAO62": {
          "lat": -3.074026,
          "lng": -59.993362
        },
        "AMMAO63": {
          "lat": -3.021331,
          "lng": -59.929359
        },
        "AMMAO64": {
          "lat": -3.059417,
          "lng": -59.915778
        },
        "AMMAO65": {
          "lat": -3.1263888,
          "lng": -60.042777
        },
        "AMMAO66": {
          "lat": -3.1125,
          "lng": -60.01861111
        },
        "AMMAO6601": {
          "lat": -3.096667,
          "lng": -60.025278
        },
        "AMMAO67": {
          "lat": -3.12325,
          "lng": -59.998917
        },
        "AMMAO68": {
          "lat": -3.07292,
          "lng": -59.99758
        },
        "AMMAO69": {
          "lat": -3.070096,
          "lng": -59.935444
        },
        "AMMAO70": {
          "lat": -3.01961,
          "lng": -59.92828
        },
        "AMMAO71": {
          "lat": -3.08808,
          "lng": -59.99696
        },
        "AMMAO72": {
          "lat": -3.04122,
          "lng": -59.99014
        },
        "AMMAO73": {
          "lat": -2.98238,
          "lng": -60.01916
        },
        "AMMAO74": {
          "lat": -3.080483,
          "lng": -60.057502
        },
        "AMMAO75": {
          "lat": -3.027397,
          "lng": -59.98325
        },
        "AMMAO76": {
          "lat": -3.144543,
          "lng": -59.968914
        },
        "AMMAO77": {
          "lat": -3.088422,
          "lng": -59.99707
        },
        "AMMAO78": {
          "lat": -3.115972,
          "lng": -59.971167
        },
        "AMMAO79": {
          "lat": -3.071818,
          "lng": -59.92769
        },
        "AMMAO80": {
          "lat": -3.019758,
          "lng": -59.922103
        },
        "AMMAO81": {
          "lat": -3.047778,
          "lng": -60.037945
        },
        "AMMAO82": {
          "lat": -3.060056,
          "lng": -60.034306
        },
        "AMMAO83": {
          "lat": -3.07394,
          "lng": -60.08636
        },
        "AMMAO84": {
          "lat": -3.079237,
          "lng": -59.997005
        },
        "AMMAO85": {
          "lat": -3.123316,
          "lng": -59.970844
        },
        "AMMAO86": {
          "lat": -3.07409,
          "lng": -59.92803
        },
        "AMMAO87": {
          "lat": -3.1258,
          "lng": -59.9954
        },
        "AMMAO88": {
          "lat": -3.0757,
          "lng": -59.9572
        },
        "AMMAO89": {
          "lat": -3.0751,
          "lng": -60.09
        },
        "AMMAO90": {
          "lat": -3.0597,
          "lng": -59.9905
        },
        "AMMAOI1": {
          "lat": -3.06307,
          "lng": -59.98786
        },
        "AMMAOI2": {
          "lat": -3.07571,
          "lng": -59.9574
        },
        "AMMAX01": {
          "lat": -1.85372,
          "lng": -65.5855
        },
        "AMMAX02": {
          "lat": -1.85033,
          "lng": -65.59464
        },
        "AMMIC01": {
          "lat": -5.807528,
          "lng": -61.298783
        },
        "AMMIC02": {
          "lat": -5.81078,
          "lng": -61.29867
        },
        "AMMIC03": {
          "lat": -7.922303,
          "lng": -61.560799
        },
        "AMMIC04": {
          "lat": -5.985756,
          "lng": -61.547964
        },
        "AMMIC05": {
          "lat": -5.498278,
          "lng": -60.829056
        },
        "AMMN100": {
          "lat": -3.134683,
          "lng": -60.021913
        },
        "AMMNL01": {
          "lat": -3.078836,
          "lng": -60.024423
        },
        "AMMNS00": {
          "lat": -3.079082,
          "lng": -60.024414
        },
        "AMMNS01": {
          "lat": -3.10861,
          "lng": -60.0126
        },
        "AMMNS02": {
          "lat": -3.089784,
          "lng": -60.005588
        },
        "AMMNS03": {
          "lat": -3.094214,
          "lng": -60.011266
        },
        "AMMNS04": {
          "lat": -3.09481,
          "lng": -59.9857
        },
        "AMMNS05": {
          "lat": -3.079306,
          "lng": -59.973778
        },
        "AMMNS06": {
          "lat": -3.10237,
          "lng": -59.99797
        },
        "AMMNS07": {
          "lat": -3.06939,
          "lng": -60.05666
        },
        "AMMNS08": {
          "lat": -3.08038,
          "lng": -60.05135
        },
        "AMMNS08_001": {
          "lat": -3.0845,
          "lng": -60.0536
        },
        "AMMNS09": {
          "lat": -3.064983,
          "lng": -60.043806
        },
        "AMMNS10": {
          "lat": -3.075528,
          "lng": -60.039861
        },
        "AMMNS11": {
          "lat": -3.039806,
          "lng": -59.95595
        },
        "AMMNS12": {
          "lat": -3.0886,
          "lng": -59.94051
        },
        "AMMNS13": {
          "lat": -3.05884,
          "lng": -59.84644
        },
        "AMMNS14": {
          "lat": -3.13405,
          "lng": -59.99436
        },
        "AMMNS15": {
          "lat": -3.12034,
          "lng": -60.0057
        },
        "AMMNS15_001": {
          "lat": -3.11472,
          "lng": -60.00417
        },
        "AMMNS16": {
          "lat": -3.126388,
          "lng": -60.015555
        },
        "AMMNS17": {
          "lat": -3.12879,
          "lng": -60.00857
        },
        "AMMNS18": {
          "lat": -3.117278,
          "lng": -60.026389
        },
        "AMMNS19": {
          "lat": -3.13472222222222,
          "lng": -60.0183333333333
        },
        "AMMNS1O": {
          "lat": -3.122715,
          "lng": -60.016506
        },
        "AMMNS20": {
          "lat": -3.1298,
          "lng": -60.0251
        },
        "AMMNS21": {
          "lat": -3.134444,
          "lng": -60.023889
        },
        "AMMNS22": {
          "lat": -3.13978,
          "lng": -60.02282
        },
        "AMMNS23": {
          "lat": -3.131361,
          "lng": -60.018917
        },
        "AMMNS24": {
          "lat": -3.13511,
          "lng": -60.01553
        },
        "AMMNS25": {
          "lat": -3.093015,
          "lng": -60.024668
        },
        "AMMNS25_001": {
          "lat": -3.091527,
          "lng": -60.021399
        },
        "AMMNS25_002": {
          "lat": -3.09245,
          "lng": -60.02095
        },
        "AMMNS25_003": {
          "lat": -3.092813,
          "lng": -60.020907
        },
        "AMMNS26": {
          "lat": -3.04866,
          "lng": -59.96927
        },
        "AMMNS27": {
          "lat": -3.02827,
          "lng": -59.97641
        },
        "AMMNS28": {
          "lat": -3.03529,
          "lng": -59.94282
        },
        "AMMNS28_001": {
          "lat": -3.034745,
          "lng": -59.937524
        },
        "AMMNS29": {
          "lat": -3.02705,
          "lng": -59.96091
        },
        "AMMNS30": {
          "lat": -3.019289,
          "lng": -59.93794
        },
        "AMMNS31": {
          "lat": -3.03274,
          "lng": -59.98777
        },
        "AMMNS31_001": {
          "lat": -3.039,
          "lng": -59.985
        },
        "AMMNS32": {
          "lat": -3.00619,
          "lng": -59.974
        },
        "AMMNS33": {
          "lat": -3.09294,
          "lng": -59.896305
        },
        "AMMNS34": {
          "lat": -3.157806,
          "lng": -59.982972
        },
        "AMMNS35": {
          "lat": -3.0206,
          "lng": -60.00785
        },
        "AMMNS36": {
          "lat": -3.10064,
          "lng": -60.0567
        },
        "AMMNS37": {
          "lat": -3.025889,
          "lng": -60.095639
        },
        "AMMNS37_001": {
          "lat": -3.033367,
          "lng": -60.08699
        },
        "AMMNS38": {
          "lat": -3.12833333333333,
          "lng": -59.9830555555556
        },
        "AMMNS39": {
          "lat": -3.12866,
          "lng": -59.96274
        },
        "AMMNS40": {
          "lat": -3.12036,
          "lng": -59.94958
        },
        "AMMNS41": {
          "lat": -3.11194444444444,
          "lng": -59.9591666666667
        },
        "AMMNS42": {
          "lat": -3.131389,
          "lng": -59.975
        },
        "AMMNS43": {
          "lat": -3.08233,
          "lng": -59.9163
        },
        "AMMNS44": {
          "lat": -3.087444,
          "lng": -60.040611
        },
        "AMMNS45": {
          "lat": -3.09235,
          "lng": -60.04562
        },
        "AMMNS46": {
          "lat": -3.078528,
          "lng": -60.022389
        },
        "AMMNS47": {
          "lat": -3.0644,
          "lng": -60.02104
        },
        "AMMNS48": {
          "lat": -3.10408,
          "lng": -59.9824
        },
        "AMMNS48_001": {
          "lat": -3.09992,
          "lng": -59.9764
        },
        "AMMNS48_002": {
          "lat": -3.100314,
          "lng": -59.974598
        },
        "AMMNS48_003": {
          "lat": -3.101958,
          "lng": -59.974106
        },
        "AMMNS49": {
          "lat": -3.11417,
          "lng": -59.98056
        },
        "AMMNS50": {
          "lat": -3.077889,
          "lng": -59.955806
        },
        "AMMNS50_001": {
          "lat": -3.09,
          "lng": -59.98
        },
        "AMMNS50_002": {
          "lat": -3.09,
          "lng": -59.98
        },
        "AMMNS50_003": {
          "lat": -3.09,
          "lng": -59.98
        },
        "AMMNS50_004": {
          "lat": -3.09,
          "lng": -59.98
        },
        "AMMNS51": {
          "lat": -3.04973,
          "lng": -59.99057
        },
        "AMMNS51_001": {
          "lat": -3.041281,
          "lng": -59.990169
        },
        "AMMNS52": {
          "lat": -3.03431,
          "lng": -60.00179
        },
        "AMMNS52_001": {
          "lat": -3.033361,
          "lng": -60.0095
        },
        "AMMNS53": {
          "lat": -3.143148,
          "lng": -60.002767
        },
        "AMMNS53_001": {
          "lat": -3.14935,
          "lng": -59.99604
        },
        "AMMNS53_002": {
          "lat": -3.154146,
          "lng": -59.990232
        },
        "AMMNS53_003": {
          "lat": -3.152197,
          "lng": -59.99449
        },
        "AMMNS54": {
          "lat": -3.106944,
          "lng": -60.024194
        },
        "AMMNS54_001": {
          "lat": -3.1032,
          "lng": -60.0305
        },
        "AMMNS54_002": {
          "lat": -3.10545,
          "lng": -60.03166
        },
        "AMMNS55": {
          "lat": -3.1004,
          "lng": -60.019268
        },
        "AMMNS56": {
          "lat": -3.026944,
          "lng": -60.035833
        },
        "AMMNS57": {
          "lat": -3.06694,
          "lng": -60.0028
        },
        "AMMNS58": {
          "lat": -3.077611,
          "lng": -60.007861
        },
        "AMMNS59": {
          "lat": -3.08658,
          "lng": -60.01786
        },
        "AMMNS59_001": {
          "lat": -3.08186,
          "lng": -60.01381
        },
        "AMMNS60": {
          "lat": -3.04814,
          "lng": -60.0076
        },
        "AMMNS60_001": {
          "lat": -3.050408,
          "lng": -60.014602
        },
        "AMMNS61": {
          "lat": -3.056833,
          "lng": -60.028083
        },
        "AMMNS62": {
          "lat": -3.10803,
          "lng": -59.9917
        },
        "AMMNS63": {
          "lat": -3.11975,
          "lng": -59.994083
        },
        "AMMNS64": {
          "lat": -3.07291,
          "lng": -60.07432
        },
        "AMMNS65": {
          "lat": -3.061111,
          "lng": -60.1025
        },
        "AMMNS66": {
          "lat": -3.053306,
          "lng": -60.080194
        },
        "AMMNS67": {
          "lat": -3.118888,
          "lng": -60.017222
        },
        "AMMNS68": {
          "lat": -3.00799,
          "lng": -59.98916
        },
        "AMMNS69": {
          "lat": -3.086806,
          "lng": -60.067528
        },
        "AMMNS70": {
          "lat": -3.119212,
          "lng": -60.037351
        },
        "AMMNS71": {
          "lat": -3.118112,
          "lng": -60.049111
        },
        "AMMNS72": {
          "lat": -3.108889,
          "lng": -60.003056
        },
        "AMMNS73": {
          "lat": -3.11012,
          "lng": -60.03614
        },
        "AMMNS74": {
          "lat": -3.06825,
          "lng": -59.9421
        },
        "AMMNS75": {
          "lat": -3.05576,
          "lng": -59.9438
        },
        "AMMNS76": {
          "lat": -2.99388,
          "lng": -60.03144
        },
        "AMMNS76_001": {
          "lat": -3.00317,
          "lng": -60.03328
        },
        "AMMNS77": {
          "lat": -3.018667,
          "lng": -60.058583
        },
        "AMMNS78": {
          "lat": -2.98056,
          "lng": -60.0938
        },
        "AMMNS79": {
          "lat": -3.015735,
          "lng": -60.028606
        },
        "AMMNS80": {
          "lat": -2.98407,
          "lng": -60.06447
        },
        "AMMNS81": {
          "lat": -3.030556,
          "lng": -60.069444
        },
        "AMMNS81_001": {
          "lat": -3.035,
          "lng": -60.083
        },
        "AMMNS82": {
          "lat": -3.13161,
          "lng": -59.94707
        },
        "AMMNS82_001": {
          "lat": -3.142,
          "lng": -59.948
        },
        "AMMNS83": {
          "lat": -3.10919,
          "lng": -60.046
        },
        "AMMNS83_001": {
          "lat": -3.103958,
          "lng": -60.049744
        },
        "AMMNS84": {
          "lat": -3.1013,
          "lng": -59.94981
        },
        "AMMNS85": {
          "lat": -3.143889,
          "lng": -60.011667
        },
        "AMMNS86": {
          "lat": -3.006138,
          "lng": -60.010333
        },
        "AMMNS87": {
          "lat": -3.068063,
          "lng": -60.095114
        },
        "AMMNS88": {
          "lat": -3.11091,
          "lng": -60.0585
        },
        "AMMNS89": {
          "lat": -3.068632,
          "lng": -60.035556
        },
        "AMMNS90": {
          "lat": -3.10203,
          "lng": -60.00631
        },
        "AMMNS91": {
          "lat": -2.991211,
          "lng": -59.992489
        },
        "AMMNS92": {
          "lat": -3.066781,
          "lng": -59.923819
        },
        "AMMNS93": {
          "lat": -3.028234,
          "lng": -59.969504
        },
        "AMMNS94": {
          "lat": -3.14314,
          "lng": -60.016064
        },
        "AMMNS95": {
          "lat": -3.02923,
          "lng": -60.01654
        },
        "AMMNS96": {
          "lat": -2.872222,
          "lng": -59.951944
        },
        "AMMNS97": {
          "lat": -3.064046,
          "lng": -60.107381
        },
        "AMMNS98": {
          "lat": -3.05731,
          "lng": -59.99955
        },
        "AMMNS99": {
          "lat": -3.08646,
          "lng": -60.03185
        },
        "AMMNSA0": {
          "lat": -3.094778,
          "lng": -60.03559
        },
        "AMMNSA1": {
          "lat": -3.047016,
          "lng": -60.086439
        },
        "AMMNSA2": {
          "lat": -2.9621,
          "lng": -60.08286
        },
        "AMMNSA3": {
          "lat": -2.954,
          "lng": -60.03094
        },
        "AMMNSA4": {
          "lat": -2.975732,
          "lng": -60.030832
        },
        "AMMNSA5": {
          "lat": -2.9768,
          "lng": -60.0073
        },
        "AMMNSA5_001": {
          "lat": -2.98436,
          "lng": -60.00664
        },
        "AMMNSA6": {
          "lat": -2.970465,
          "lng": -59.99263
        },
        "AMMNSA7": {
          "lat": -2.982444,
          "lng": -59.985722
        },
        "AMMNSA8": {
          "lat": -2.99768,
          "lng": -59.979777
        },
        "AMMNSA9": {
          "lat": -3.009694,
          "lng": -59.960694
        },
        "AMMNSAA": {
          "lat": -3.09513,
          "lng": -59.92437
        },
        "AMMNSAB": {
          "lat": -2.96866,
          "lng": -59.98008
        },
        "AMMNSAC": {
          "lat": -3.10412,
          "lng": -60.01952
        },
        "AMMNSAD": {
          "lat": -3.126643,
          "lng": -59.938353
        },
        "AMMNSAE": {
          "lat": -3.07633,
          "lng": -60.079
        },
        "AMMNSAF": {
          "lat": -3.08084,
          "lng": -59.89307
        },
        "AMMNSAG": {
          "lat": -2.98361,
          "lng": -60.07444
        },
        "AMMNSAH": {
          "lat": -3.09948,
          "lng": -59.91515
        },
        "AMMNSAJ": {
          "lat": -3.1498,
          "lng": -59.99477
        },
        "AMMNSAK": {
          "lat": -3.041252,
          "lng": -60.093915
        },
        "AMMNSAL": {
          "lat": -3.09927,
          "lng": -59.97516
        },
        "AMMNSAM": {
          "lat": -3.115138,
          "lng": -59.93216
        },
        "AMMNSAN": {
          "lat": -3.05667,
          "lng": -59.8925
        },
        "AMMNSAO": {
          "lat": -2.98696,
          "lng": -60.05006
        },
        "AMMNSAP": {
          "lat": -3.067684,
          "lng": -59.906373
        },
        "AMMNSAQ": {
          "lat": -3.073518,
          "lng": -59.990787
        },
        "AMMNSAU": {
          "lat": -3.153405,
          "lng": -59.992687
        },
        "AMMNSAV": {
          "lat": -3.007772,
          "lng": -60.027591
        },
        "AMMNSAW": {
          "lat": -2.995667,
          "lng": -60.027333
        },
        "AMMNSAX": {
          "lat": -3.0483417,
          "lng": -59.978475
        },
        "AMMNSAY": {
          "lat": -3.097117,
          "lng": -60.025057
        },
        "AMMNSAZ": {
          "lat": -3.122194,
          "lng": -59.98088
        },
        "AMMNSB0": {
          "lat": -3.056667,
          "lng": -60.015556
        },
        "AMMNSB1": {
          "lat": -3.023189,
          "lng": -59.945383
        },
        "AMMNSB2": {
          "lat": -3.01055,
          "lng": -59.94015
        },
        "AMMNSB3": {
          "lat": -3.011567,
          "lng": -59.927911
        },
        "AMMNSB4": {
          "lat": -3.030705,
          "lng": -59.922475
        },
        "AMMNSB5": {
          "lat": -3.03497,
          "lng": -59.96644
        },
        "AMMNSB6": {
          "lat": -3.046618,
          "lng": -59.942679
        },
        "AMMNSB7": {
          "lat": -3.052458,
          "lng": -59.932343
        },
        "AMMNSB8": {
          "lat": -3.063536,
          "lng": -59.92582
        },
        "AMMNSB9": {
          "lat": -3.06836,
          "lng": -59.91006
        },
        "AMMNSBA": {
          "lat": -3.078971,
          "lng": -59.98574
        },
        "AMMNSBB": {
          "lat": -3.104343,
          "lng": -60.050417
        },
        "AMMNSBC": {
          "lat": -3.059527,
          "lng": -59.93422
        },
        "AMMNSBD": {
          "lat": -3.08201,
          "lng": -60.01378
        },
        "AMMNSBE": {
          "lat": -3.080738,
          "lng": -59.967675
        },
        "AMMNSBE_001": {
          "lat": -3.075783,
          "lng": -59.957111
        },
        "AMMNSBE_002": {
          "lat": -3.09034,
          "lng": -59.96607
        },
        "AMMNSBE_003": {
          "lat": -3.08996,
          "lng": -59.96283
        },
        "AMMNSBF": {
          "lat": -3.077483,
          "lng": -59.948952
        },
        "AMMNSBG": {
          "lat": -3.1055,
          "lng": -59.96477
        },
        "AMMNSBH": {
          "lat": -3.048293,
          "lng": -60.025369
        },
        "AMMNSBJ": {
          "lat": -2.968512,
          "lng": -60.006395
        },
        "AMMNSBK": {
          "lat": -3.081062,
          "lng": -59.893217
        },
        "AMMNSBL": {
          "lat": -3.10479,
          "lng": -59.91355
        },
        "AMMNSBM": {
          "lat": -3.057194,
          "lng": -60.01525
        },
        "AMMNSBN": {
          "lat": -2.98696,
          "lng": -60.050072
        },
        "AMMNSBO": {
          "lat": -3.050194,
          "lng": -59.91811
        },
        "AMMNSBP": {
          "lat": -3.057418,
          "lng": -59.999915
        },
        "AMMNSBQ": {
          "lat": -3.061205,
          "lng": -59.98638
        },
        "AMMNSBU": {
          "lat": -2.949091,
          "lng": -60.02876
        },
        "AMMNSBV": {
          "lat": -2.96607,
          "lng": -60.025029
        },
        "AMMNSBW": {
          "lat": -3.010556,
          "lng": -59.977667
        },
        "AMMNSBX": {
          "lat": -3.015092,
          "lng": -59.988234
        },
        "AMMNSBY": {
          "lat": -3.086037,
          "lng": -60.0237
        },
        "AMMNSBZ": {
          "lat": -3.041674,
          "lng": -60.011353
        },
        "AMMNSC0": {
          "lat": -3.013494,
          "lng": -60.043936
        },
        "AMMNSC1": {
          "lat": -3.114769,
          "lng": -59.918106
        },
        "AMMNSC2": {
          "lat": -3.0897,
          "lng": -59.96299
        },
        "AMMNSC3": {
          "lat": -3.06301,
          "lng": -59.97953
        },
        "AMMNSC4": {
          "lat": -3.0731,
          "lng": -59.99008
        },
        "AMMNSC5": {
          "lat": -3.086,
          "lng": -59.986333
        },
        "AMMNSC6": {
          "lat": -3.13522,
          "lng": -60.00708
        },
        "AMMNSC7": {
          "lat": -3.140543,
          "lng": -59.99457
        },
        "AMMNSC8": {
          "lat": -3.138095,
          "lng": -59.985147
        },
        "AMMNSC9": {
          "lat": -3.09445,
          "lng": -60.07175
        },
        "AMMNSCA": {
          "lat": -3.03383,
          "lng": -59.991402
        },
        "AMMNSCB": {
          "lat": -3.064992,
          "lng": -60.051058
        },
        "AMMNSCC": {
          "lat": -3.058511,
          "lng": -59.965028
        },
        "AMMNSCD": {
          "lat": -3.148523,
          "lng": -60.003535
        },
        "AMMNSCD_001": {
          "lat": -3.15024,
          "lng": -59.999221
        },
        "AMMNSCE": {
          "lat": -3.06301111111111,
          "lng": -59.9795305555556
        },
        "AMMNSCF": {
          "lat": -3.08679,
          "lng": -59.97538
        },
        "AMMNSCF_001": {
          "lat": -3.091,
          "lng": -59.965
        },
        "AMMNSCF_002": {
          "lat": -3.091,
          "lng": -59.965
        },
        "AMMNSCG": {
          "lat": -3.095069,
          "lng": -60.03556
        },
        "AMMNSCH": {
          "lat": -2.991651,
          "lng": -60.075992
        },
        "AMMNSCJ": {
          "lat": -3.0858111,
          "lng": -59.9257472
        },
        "AMMNSCJ_001": {
          "lat": -3.153326,
          "lng": -59.998674
        },
        "AMMNSCK": {
          "lat": -3.0012,
          "lng": -60.1218027777778
        },
        "AMMNSCL": {
          "lat": -3.13384,
          "lng": -60.02126
        },
        "AMMNSCM": {
          "lat": -3.104,
          "lng": -60.0497
        },
        "AMMNSCN": {
          "lat": -3.0975,
          "lng": -60.0237
        },
        "AMMNSCO": {
          "lat": -3.1384,
          "lng": -60.0239
        },
        "AMMNSCP": {
          "lat": -2.9998,
          "lng": -60.0024
        },
        "AMMNSCQ": {
          "lat": -3.092813,
          "lng": -60.020907
        },
        "AMMNSCU": {
          "lat": -3.063728,
          "lng": -59.950599
        },
        "AMMNSCV": {
          "lat": -2.9939444,
          "lng": -60.031306
        },
        "AMMNSCW": {
          "lat": -3.00628,
          "lng": -59.97394
        },
        "AMMNSCX": {
          "lat": -3.06821,
          "lng": -59.9421
        },
        "AMMNSCY": {
          "lat": -3.063,
          "lng": -59.9795
        },
        "AMMNSCZ": {
          "lat": -3.0575,
          "lng": -60.0009
        },
        "AMMNSD0": {
          "lat": -3.065231,
          "lng": -60.07335
        },
        "AMMNSD1": {
          "lat": -3.087806,
          "lng": -60.057111
        },
        "AMMNSD2": {
          "lat": -3.045255,
          "lng": -60.02105
        },
        "AMMNSD3": {
          "lat": -3.05505,
          "lng": -60.06024
        },
        "AMMNSD4": {
          "lat": -3.050169,
          "lng": -59.912053
        },
        "AMMNSD5": {
          "lat": -3.059722,
          "lng": -60.108806
        },
        "AMMNSD5_001": {
          "lat": -3.053231,
          "lng": -60.109
        },
        "AMMNSD6": {
          "lat": -2.93352,
          "lng": -60.00809
        },
        "AMMNSD7": {
          "lat": -3.075609,
          "lng": -60.079201
        },
        "AMMNSD8": {
          "lat": -3.08002,
          "lng": -60.07084
        },
        "AMMNSD9": {
          "lat": -3.15217,
          "lng": -59.99813
        },
        "AMMNSDA": {
          "lat": -3.035,
          "lng": -60.083
        },
        "AMMNSDB": {
          "lat": -3.0239,
          "lng": -60.0042
        },
        "AMMNSDC": {
          "lat": -3.0649,
          "lng": -59.9522
        },
        "AMMNSDD": {
          "lat": -3.108808812,
          "lng": -59.96753518
        },
        "AMMNSDE": {
          "lat": -3.064563616,
          "lng": -60.07062567
        },
        "AMMNSE0": {
          "lat": -3.058939,
          "lng": -60.053039
        },
        "AMMNSE1": {
          "lat": -3.05586,
          "lng": -60.09753
        },
        "AMMNSE2": {
          "lat": -3.10933,
          "lng": -59.94215
        },
        "AMMNSE3": {
          "lat": -3.11797,
          "lng": -59.96082
        },
        "AMMNSE4": {
          "lat": -3.01651,
          "lng": -59.98352
        },
        "AMMNSE5": {
          "lat": -3.032887,
          "lng": -60.04555
        },
        "AMMNSE6": {
          "lat": -3.100389,
          "lng": -60.006611
        },
        "AMMNSE7": {
          "lat": -3.058939,
          "lng": -60.053039
        },
        "AMMNSE8": {
          "lat": -3.03344635493479,
          "lng": -60.0869552059113
        },
        "AMMNSE9": {
          "lat": -3.042615,
          "lng": -60.017109
        },
        "AMMNSF0": {
          "lat": -3.00766,
          "lng": -60.07753
        },
        "AMMNSF1": {
          "lat": -3.08635,
          "lng": -59.976089
        },
        "AMMNSF1_001": {
          "lat": -3.09,
          "lng": -59.98
        },
        "AMMNSF1_002": {
          "lat": -3.091,
          "lng": -59.965
        },
        "AMMNSF2": {
          "lat": -3.059417,
          "lng": -59.915778
        },
        "AMMNSF3": {
          "lat": -3.0585,
          "lng": -59.967889
        },
        "AMMNSF4": {
          "lat": -3.026472,
          "lng": -60.008614
        },
        "AMMNSF5": {
          "lat": -2.99097,
          "lng": -60.08938
        },
        "AMMNSF6": {
          "lat": -3.066583,
          "lng": -59.950803
        },
        "AMMNSF7": {
          "lat": -2.98082,
          "lng": -60.08221
        },
        "AMMNSF8": {
          "lat": -2.9837,
          "lng": -60.04562
        },
        "AMMNSF9": {
          "lat": -3.015861,
          "lng": -60.016222
        },
        "AMMNSG1": {
          "lat": -3.075416,
          "lng": -60.019722
        },
        "AMMNSG2": {
          "lat": -3.007462,
          "lng": -60.027516
        },
        "AMMNSG3": {
          "lat": -3.07926,
          "lng": -59.88214
        },
        "AMMNSG4": {
          "lat": -3.035721061,
          "lng": -60.09878292
        },
        "AMMNSG5": {
          "lat": -3.010693,
          "lng": -60.00174
        },
        "AMMNSG6": {
          "lat": -3.018125,
          "lng": -60.075122
        },
        "AMMNSG7": {
          "lat": -3.026743,
          "lng": -59.960865
        },
        "AMMNSG8": {
          "lat": -3.148527,
          "lng": -60.003518
        },
        "AMMNSG9": {
          "lat": -3.080453,
          "lng": -59.914113
        },
        "AMMNSH1": {
          "lat": -3.056777,
          "lng": -60.024989
        },
        "AMMNSH2": {
          "lat": -3.065555556,
          "lng": -60.01553
        },
        "AMMNSH2_001": {
          "lat": -3.05731,
          "lng": -60.01494
        },
        "AMMNSH3": {
          "lat": -3.09789,
          "lng": -60.013611111
        },
        "AMMNSH4": {
          "lat": -3.10531,
          "lng": -60.01345
        },
        "AMMNSH5": {
          "lat": -3.10935,
          "lng": -60.00715
        },
        "AMMNSH6": {
          "lat": -3.019289,
          "lng": -59.93794
        },
        "AMMNSH7": {
          "lat": -3.06556,
          "lng": -59.96003
        },
        "AMMNSH7_001": {
          "lat": -3.0680042,
          "lng": -59.95364301
        },
        "AMMNSH8": {
          "lat": -3.140061,
          "lng": -59.965056
        },
        "AMMNSH9": {
          "lat": -3.022278,
          "lng": -59.959917
        },
        "AMMNSI1": {
          "lat": -3.09472,
          "lng": -60.0231
        },
        "AMMNSI2": {
          "lat": -3.101111,
          "lng": -60.025278
        },
        "AMMNSI3": {
          "lat": -3.104237,
          "lng": -60.011948
        },
        "AMMNSI4": {
          "lat": -3.032887,
          "lng": -60.045065
        },
        "AMMNSI5": {
          "lat": -3.08306,
          "lng": -60.028495
        },
        "AMMNSI6": {
          "lat": -3.032094,
          "lng": -60.047015
        },
        "AMMNSI7": {
          "lat": -3.084774,
          "lng": -60.0724
        },
        "AMMNSI8": {
          "lat": -3.097553,
          "lng": -60.023264
        },
        "AMMNSI9": {
          "lat": -3.030472,
          "lng": -59.977167
        },
        "AMMNSIA": {
          "lat": -3.032244,
          "lng": -60.046115
        },
        "AMMNSIB": {
          "lat": -3.137017,
          "lng": -59.985023
        },
        "AMMNSIC": {
          "lat": -3.047944,
          "lng": -59.944383
        },
        "AMMNSID": {
          "lat": -2.999009,
          "lng": -60.002185
        },
        "AMMNSIE": {
          "lat": -3.06312,
          "lng": -59.95038
        },
        "AMMNSIF": {
          "lat": -3.10342,
          "lng": -60.0497
        },
        "AMMNSIG": {
          "lat": -3.09728,
          "lng": -60.02329
        },
        "AMMNSIH": {
          "lat": -3.13798,
          "lng": -60.02394
        },
        "AMMNSIJ": {
          "lat": -3.09288,
          "lng": -60.02087
        },
        "AMMNSIK": {
          "lat": -3.0632,
          "lng": -59.9502
        },
        "AMMNSIL": {
          "lat": -2.99978,
          "lng": -60.0024
        },
        "AMMNSIM": {
          "lat": -3.126388889,
          "lng": -60.01555556
        },
        "AMMNSJ1": {
          "lat": -3.11402,
          "lng": -59.99513
        },
        "AMMNSJ2": {
          "lat": -3.124111,
          "lng": -60.013639
        },
        "AMMNSJ3": {
          "lat": -3.10405,
          "lng": -59.95665
        },
        "AMMNSJ4": {
          "lat": -3.094167,
          "lng": -59.990833
        },
        "AMMNSJ5": {
          "lat": -3.09375,
          "lng": -60.024267
        },
        "AMMNSJ6": {
          "lat": -3.12646,
          "lng": -60.02003
        },
        "AMMNSJ7": {
          "lat": -3.060722,
          "lng": -60.043889
        },
        "AMMNSJ8": {
          "lat": -3.09778,
          "lng": -60.05071
        },
        "AMMNSJ9": {
          "lat": -3.1058,
          "lng": -60.02281
        },
        "AMMNSK1": {
          "lat": -3.11715151,
          "lng": -60.0170659
        },
        "AMMNSK2": {
          "lat": -3.13894,
          "lng": -60.02166
        },
        "AMMNSK2_001": {
          "lat": -3.138424,
          "lng": -60.02391
        },
        "AMMNSK3": {
          "lat": -3.05006,
          "lng": -59.9695
        },
        "AMMNSK4": {
          "lat": -3.07388,
          "lng": -60.0384
        },
        "AMMNSK5": {
          "lat": -3.05447222,
          "lng": -59.94525
        },
        "AMMNSK6": {
          "lat": -3.015083,
          "lng": -60.03022
        },
        "AMMNSK7": {
          "lat": -3.00942,
          "lng": -59.99089
        },
        "AMMNSK8": {
          "lat": -3.13354,
          "lng": -60.02517
        },
        "AMMNSK9": {
          "lat": -3.088937467367441,
          "lng": -59.94083722949878
        },
        "AMMNSL1": {
          "lat": -3.0355846290386,
          "lng": -59.942455219573
        },
        "AMMNSL2": {
          "lat": -3.034979300199448,
          "lng": -59.94234256679438
        },
        "AMMNSL3": {
          "lat": -3.032809639762432,
          "lng": -59.98726574470423
        },
        "AMMNSL4": {
          "lat": -3.09327210938496,
          "lng": -59.89598313491723
        },
        "AMMNSL5": {
          "lat": -3.092360713213502,
          "lng": -60.04511038028621
        },
        "AMMNSL6": {
          "lat": -3.049783568204461,
          "lng": -59.98999064285182
        },
        "AMMNSL7": {
          "lat": -3.034347498279693,
          "lng": -60.00129647354029
        },
        "AMMNSL8": {
          "lat": -3.099751855304288,
          "lng": -60.01923044907279
        },
        "AMMNSL9": {
          "lat": -3.077005694867284,
          "lng": -60.00765178769585
        },
        "AMMNSM1": {
          "lat": -3.117983444564624,
          "lng": -60.04859065145014
        },
        "AMMNSM2": {
          "lat": -3.110409251867145,
          "lng": -60.03574839748286
        },
        "AMMNSM3": {
          "lat": -3.067607192440419,
          "lng": -59.94209463558098
        },
        "AMMNSM4": {
          "lat": -2.993242505362099,
          "lng": -60.03141854232688
        },
        "AMMNSM5": {
          "lat": -3.006437993984442,
          "lng": -60.00961416798307
        },
        "AMMNSM6": {
          "lat": -3.11137601650884,
          "lng": -60.05839271163841
        },
        "AMMNSM7": {
          "lat": -2.991146714686661,
          "lng": -59.99195792261408
        },
        "AMMNSM8": {
          "lat": -3.029535344531152,
          "lng": -60.01619131282709
        },
        "AMMNSM9": {
          "lat": -2.977180359680418,
          "lng": -60.00755212764639
        },
        "AMMNSN1": {
          "lat": -2.970957863236813,
          "lng": -59.99235105026147
        },
        "AMMNSN2": {
          "lat": -3.030244305207109,
          "lng": -59.92217995700738
        },
        "AMMNSN3": {
          "lat": -3.030142523772935,
          "lng": -59.92272712764638
        },
        "AMMNSN4": {
          "lat": -3.134527754441993,
          "lng": -60.02339401063625
        },
        "AMMNSN5": {
          "lat": -3.139591066321963,
          "lng": -60.023378387327
        },
        "AMMNSN6": {
          "lat": -3.006229934177805,
          "lng": -59.97342698264836
        },
        "AMMNSN7": {
          "lat": -3.128607409536512,
          "lng": -59.96352759423452
        },
        "AMMNSN8": {
          "lat": -3.131864185751429,
          "lng": -59.94745770132856
        },
        "AMMNSN9": {
          "lat": -3.120813316496582,
          "lng": -60.00569756171645
        },
        "AMMNSO1": {
          "lat": -3.106857321524893,
          "lng": -60.02478652442846
        },
        "AMMNSO2": {
          "lat": -3.015365854711779,
          "lng": -60.02911074314672
        },
        "AMMNSO3": {
          "lat": -3.117693410872218,
          "lng": -59.96125646861636
        },
        "AMMNSO4": {
          "lat": -3.134337845895382,
          "lng": -60.02454979879511
        },
        "AMMNSO5": {
          "lat": -3.139362203414326,
          "lng": -60.02385630805716
        },
        "AMMNSO6": {
          "lat": -3.00622019414254,
          "lng": -59.97448523623159
        },
        "AMMNSO7": {
          "lat": -3.128441847385084,
          "lng": -59.96217185954085
        },
        "AMMNSO8": {
          "lat": -3.049974465724818,
          "lng": -59.99100646861636
        },
        "AMMNSO9": {
          "lat": -3.109682713252453,
          "lng": -60.03590347808017
        },
        "AMMNSP1": {
          "lat": -3.132200178390028,
          "lng": -59.94777956624661
        },
        "AMMNSP2": {
          "lat": -2.991319116066421,
          "lng": -59.99294985242398
        },
        "AMMNSP3": {
          "lat": -3.029625438166427,
          "lng": -60.01679115226788
        },
        "AMMNSP4": {
          "lat": -2.970028630710141,
          "lng": -59.99230325835116
        },
        "AMMNSP5": {
          "lat": -3.014961,
          "lng": -59.943264
        },
        "AMMNSP6": {
          "lat": -3.058111,
          "lng": -60.050667
        },
        "AMMNSP7": {
          "lat": -3.009333,
          "lng": -60.04775
        },
        "AMMNSP8": {
          "lat": -3.07832,
          "lng": -59.938729
        },
        "AMMNSP9": {
          "lat": -3.03211,
          "lng": -59.951034
        },
        "AMMNSQ1": {
          "lat": -3.080805,
          "lng": -59.880417
        },
        "AMMNSQ2": {
          "lat": -3.046841,
          "lng": -59.98215
        },
        "AMMNSQ2_001": {
          "lat": -3.054591,
          "lng": -59.983778
        },
        "AMMNSQ2_002": {
          "lat": -3.05472,
          "lng": -59.9842
        },
        "AMMNSQ2_003": {
          "lat": -3.054722,
          "lng": -59.984167
        },
        "AMMNSQ3": {
          "lat": -3.061493,
          "lng": -59.947533
        },
        "AMMNSQ3_001": {
          "lat": -3.063728,
          "lng": -59.950599
        },
        "AMMNSQ4": {
          "lat": -3.00298,
          "lng": -60.01212
        },
        "AMMNSQ5": {
          "lat": -2.9981944,
          "lng": -60.0176111
        },
        "AMMNSQ6": {
          "lat": -3.109194,
          "lng": -60.054056
        },
        "AMMNSQ7": {
          "lat": -3.000198333,
          "lng": -59.99837
        },
        "AMMNSQ7_001": {
          "lat": -2.999825,
          "lng": -60.002415
        },
        "AMMNSQ8": {
          "lat": -3.02891,
          "lng": -60.00865
        },
        "AMMNSQ9": {
          "lat": -3.010693,
          "lng": -60.00174
        },
        "AMMNSU1": {
          "lat": -3.04030555554,
          "lng": -60.017722222
        },
        "AMMNSU1_001": {
          "lat": -3.04682,
          "lng": -60.02473
        },
        "AMMNSU2": {
          "lat": -2.966694,
          "lng": -59.987694
        },
        "AMMNSU3": {
          "lat": -3.090358,
          "lng": -59.946237
        },
        "AMMNSU4": {
          "lat": -3.08944,
          "lng": -60.06449
        },
        "AMMNSU4_001": {
          "lat": -3.094458333,
          "lng": -60.063222222
        },
        "AMMNSU5": {
          "lat": -3.113282,
          "lng": -59.945441
        },
        "AMMNSU6": {
          "lat": -3.143774,
          "lng": -60.009299
        },
        "AMMNSU6_001": {
          "lat": -3.145327,
          "lng": -60.009405
        },
        "AMMNSU7": {
          "lat": -3.13447222,
          "lng": -60.02011111
        },
        "AMMNSU8": {
          "lat": -2.97216,
          "lng": -60.08137
        },
        "AMMNSU9": {
          "lat": -3.117236636,
          "lng": -60.02637828
        },
        "AMMNSV1": {
          "lat": -3.117236636,
          "lng": -60.02637828
        },
        "AMMNSV2": {
          "lat": -3.053841,
          "lng": -60.025676
        },
        "AMMNSV3": {
          "lat": -3.096667,
          "lng": -60.025278
        },
        "AMMNSV3_001": {
          "lat": -3.097465,
          "lng": -60.023687
        },
        "AMMNSV4": {
          "lat": -3.08683,
          "lng": -60.00461
        },
        "AMMNSV5": {
          "lat": -3.030662,
          "lng": -59.977106
        },
        "AMMNSV6": {
          "lat": -3.0761,
          "lng": -59.9521
        },
        "AMMNSV6_001": {
          "lat": -3.09,
          "lng": -59.98
        },
        "AMMNSV7": {
          "lat": -3.082333,
          "lng": -59.916306
        },
        "AMMNSV7_001": {
          "lat": -3.091,
          "lng": -59.925
        },
        "AMMNSV8": {
          "lat": -3.046111,
          "lng": -59.96056
        },
        "AMMNSV9": {
          "lat": -3.02639,
          "lng": -60.01083
        },
        "AMMNSW1": {
          "lat": -3.099028,
          "lng": -59.9411
        },
        "AMMNSW2": {
          "lat": -3.04435,
          "lng": -60.09101
        },
        "AMMNSW3": {
          "lat": -3.098597,
          "lng": -60.070619
        },
        "AMMNSW4": {
          "lat": -3.056722,
          "lng": -59.8925
        },
        "AMMNSW5": {
          "lat": -3.00813,
          "lng": -60.07737
        },
        "AMMNSW6": {
          "lat": -2.99404,
          "lng": -60.097
        },
        "AMMNSW7": {
          "lat": -2.98269,
          "lng": -60.08071
        },
        "AMMNSW8": {
          "lat": -2.98522,
          "lng": -60.04143
        },
        "AMMNSW9": {
          "lat": -3.07927,
          "lng": -59.88149
        },
        "AMMNSX1": {
          "lat": -3.126522,
          "lng": -60.015488
        },
        "AMMNSX2": {
          "lat": -3.09113,
          "lng": -60.011989
        },
        "AMMNSX3": {
          "lat": -3.032887,
          "lng": -60.045065
        },
        "AMMNSX4": {
          "lat": -3.08119,
          "lng": -60.04161
        },
        "AMMNSX5": {
          "lat": -3.08683,
          "lng": -60.05044
        },
        "AMMNSX6": {
          "lat": -3.05731,
          "lng": -60.01494
        },
        "AMMNSX7": {
          "lat": -3.03344,
          "lng": -60.00947
        },
        "AMMNSX8": {
          "lat": -3.04586,
          "lng": -59.93575
        },
        "AMMNSX9": {
          "lat": -3.05944,
          "lng": -59.93417
        },
        "AMMNSY1": {
          "lat": -3.09528,
          "lng": -60.06178
        },
        "AMMNSY2": {
          "lat": -2.98436,
          "lng": -60.00664
        },
        "AMMNSY3": {
          "lat": -3.00317,
          "lng": -60.03328
        },
        "AMMNSY4": {
          "lat": -3.08186,
          "lng": -60.01381
        },
        "AMMNSY5": {
          "lat": -3.00056,
          "lng": -59.98939
        },
        "AMMNSY6": {
          "lat": -3.02425,
          "lng": -59.95472
        },
        "AMMNSY7": {
          "lat": -3.04682,
          "lng": -60.02473
        },
        "AMMNSY8": {
          "lat": -3.06889,
          "lng": -60.02528
        },
        "AMMNSY9": {
          "lat": -3.044652,
          "lng": -59.951561
        },
        "AMMNSZ1": {
          "lat": -3.05214,
          "lng": -59.93875
        },
        "AMMNSZ2": {
          "lat": -3.05206,
          "lng": -60.00167
        },
        "AMMNSZ3": {
          "lat": -3.01392,
          "lng": -59.99336
        },
        "AMMNSZ4": {
          "lat": -2.992127,
          "lng": -60.005262
        },
        "AMMNSZ5": {
          "lat": -2.99436,
          "lng": -59.97297
        },
        "AMMNSZ6": {
          "lat": -2.98342,
          "lng": -59.99583
        },
        "AMMNSZ7": {
          "lat": -2.96834,
          "lng": -60.00724
        },
        "AMMNSZ8": {
          "lat": -3.10519,
          "lng": -60.03086
        },
        "AMMNSZ9": {
          "lat": -3.10202,
          "lng": -59.91297
        },
        "AMMNU01": {
          "lat": -3.029982,
          "lng": -59.981859
        },
        "AMMPU01": {
          "lat": -3.29486,
          "lng": -60.62875
        },
        "AMMPU02": {
          "lat": -3.747988,
          "lng": -61.148525
        },
        "AMMPU03": {
          "lat": -3.121655,
          "lng": -60.741528
        },
        "AMMPU04": {
          "lat": -3.150668,
          "lng": -61.147986
        },
        "AMMPU05": {
          "lat": -3.106769,
          "lng": -60.747321
        },
        "AMMPU06": {
          "lat": -3.2816,
          "lng": -60.6279
        },
        "AMMPU07": {
          "lat": -3.2949,
          "lng": -60.62716
        },
        "AMMPU08": {
          "lat": -3.167073,
          "lng": -60.431393
        },
        "AMMPU09": {
          "lat": -3.133495,
          "lng": -60.369986
        },
        "AMMQR01": {
          "lat": -3.43875,
          "lng": -60.45825
        },
        "AMMUS01": {
          "lat": -3.398056,
          "lng": -57.7025
        },
        "AMMUS02": {
          "lat": -3.388967,
          "lng": -57.712345
        },
        "AMMUS03": {
          "lat": -3.22803,
          "lng": -57.764641
        },
        "AMMUS04": {
          "lat": -3.480671,
          "lng": -57.768679
        },
        "AMMUS05": {
          "lat": -3.39281,
          "lng": -57.71258
        },
        "AMMUS06": {
          "lat": -3.392305,
          "lng": -57.71283
        },
        "AMMUS07": {
          "lat": -3.378583,
          "lng": -57.716667
        },
        "AMMUS08": {
          "lat": -3.549389,
          "lng": -58.102727
        },
        "AMMUS09": {
          "lat": -3.60388,
          "lng": -58.217022
        },
        "AMMUS10": {
          "lat": -3.818764854,
          "lng": -58.28721287
        },
        "AMMUS90": {
          "lat": 0,
          "lng": 0
        },
        "AMMUS91": {
          "lat": -3.400818,
          "lng": -57.687723
        },
        "AMNHM01": {
          "lat": -2.254475,
          "lng": -56.924223
        },
        "AMNHM02": {
          "lat": -2.187972,
          "lng": -56.715389
        },
        "AMNHM03": {
          "lat": -2.19733,
          "lng": -56.7109
        },
        "AMNHM04": {
          "lat": -2.294567,
          "lng": -56.804024
        },
        "AMNHM05": {
          "lat": -2.299317,
          "lng": -56.892777
        },
        "AMNHM06": {
          "lat": -2.18337,
          "lng": -56.78102
        },
        "AMNHMS1": {
          "lat": -2.299268,
          "lng": -56.892162
        },
        "AMNHMS2": {
          "lat": -2.29336,
          "lng": -56.800739
        },
        "AMNLN01": {
          "lat": -3.88775,
          "lng": -59.08677
        },
        "AMNLN02": {
          "lat": -3.729396,
          "lng": -58.950731
        },
        "AMNLN03": {
          "lat": -3.894418,
          "lng": -59.094265
        },
        "AMNLN04": {
          "lat": -3.884444,
          "lng": -59.088417
        },
        "AMNLN05": {
          "lat": -3.889733,
          "lng": -59.091875
        },
        "AMNLN06": {
          "lat": -3.894439408123886,
          "lng": -59.09333695567994
        },
        "AMNON01": {
          "lat": -5.12216,
          "lng": -60.38081
        },
        "AMNON02": {
          "lat": -5.12053,
          "lng": -60.38039
        },
        "AMNON03": {
          "lat": -5.14521,
          "lng": -60.35122
        },
        "AMNOR01": {
          "lat": -2.63096,
          "lng": -60.94353
        },
        "AMNOR90": {
          "lat": -2.83007,
          "lng": -60.93105
        },
        "AMNOR91": {
          "lat": -3.10702,
          "lng": -60.77926
        },
        "AMOIF01": {
          "lat": -3.109626,
          "lng": -60.010269
        },
        "AMOIM01": {
          "lat": -3.132056,
          "lng": -60.020588
        },
        "AMPAR01": {
          "lat": -2.6329,
          "lng": -56.73349
        },
        "AMPAR02": {
          "lat": -2.643818,
          "lng": -56.749386
        },
        "AMPAR03": {
          "lat": -2.592959,
          "lng": -56.5763
        },
        "AMPAR04": {
          "lat": -2.752203,
          "lng": -56.749553
        },
        "AMPAR05": {
          "lat": -2.631109,
          "lng": -56.732221
        },
        "AMPAR06": {
          "lat": -2.62744,
          "lng": -56.73367
        },
        "AMPAR07": {
          "lat": -2.634722,
          "lng": -56.740389
        },
        "AMPAR08": {
          "lat": -2.646917,
          "lng": -56.732889
        },
        "AMPAR09": {
          "lat": -2.642634066215977,
          "lng": -56.74838303862423
        },
        "AMPAR10": {
          "lat": -2.614978,
          "lng": -56.666106
        },
        "AMPAR11": {
          "lat": -2.460556,
          "lng": -57.100556
        },
        "AMPAR12": {
          "lat": -2.67681,
          "lng": -56.62675
        },
        "AMPAR13": {
          "lat": -2.804717,
          "lng": -56.729099
        },
        "AMPAR14": {
          "lat": -2.45919,
          "lng": -56.41033
        },
        "AMPAR15": {
          "lat": -2.47776,
          "lng": -56.44352
        },
        "AMPAR16": {
          "lat": -2.42935,
          "lng": -57.30053
        },
        "AMPET01": {
          "lat": -7.207528,
          "lng": -63.13575
        },
        "AMPFG01": {
          "lat": -2.04814,
          "lng": -60.0181
        },
        "AMPFG02": {
          "lat": -1.93639,
          "lng": -59.420601
        },
        "AMPFG03": {
          "lat": -1.851645,
          "lng": -60.076304
        },
        "AMPFG04": {
          "lat": -2.057528,
          "lng": -60.025306
        },
        "AMPFG05": {
          "lat": -2.048170216434802,
          "lng": -60.01761964098631
        },
        "AMPFG06": {
          "lat": -1.936944,
          "lng": -59.421055
        },
        "AMPFG07": {
          "lat": -1.932636,
          "lng": -59.417225
        },
        "AMPFG08": {
          "lat": -0.777914,
          "lng": -60.076642
        },
        "AMPFG09": {
          "lat": -1.475418,
          "lng": -60.271923
        },
        "AMPFG10": {
          "lat": -1.828361,
          "lng": -60.194361
        },
        "AMPFG11": {
          "lat": -1.82854,
          "lng": -60.19411
        },
        "AMPFG12": {
          "lat": -1.5886,
          "lng": -60.1516
        },
        "AMPFG13": {
          "lat": -2.06781,
          "lng": -59.37238
        },
        "AMPFG14": {
          "lat": -2.047134410609155,
          "lng": -60.02046552629796
        },
        "AMPFG90": {
          "lat": -2.64206,
          "lng": -60.03847
        },
        "AMPFG91": {
          "lat": -2.37125,
          "lng": -60.03408
        },
        "AMPYI01": {
          "lat": -7.714921,
          "lng": -67.00059
        },
        "AMPYI02": {
          "lat": -7.658611,
          "lng": -66.807222
        },
        "AMRPE01": {
          "lat": -2.695519,
          "lng": -59.694135
        },
        "AMRPE02": {
          "lat": -2.523285,
          "lng": -59.701727
        },
        "AMRPE03": {
          "lat": -2.66286,
          "lng": -59.405172
        },
        "AMRPE04": {
          "lat": -2.695038,
          "lng": -59.526475
        },
        "AMRPE05": {
          "lat": -2.518333,
          "lng": -60.031667
        },
        "AMRPE06": {
          "lat": -2.843056,
          "lng": -59.416389
        },
        "AMRPE07": {
          "lat": -2.69654,
          "lng": -59.69625
        },
        "AMRPE08": {
          "lat": -2.843055,
          "lng": -59.416388
        },
        "AMRPE90": {
          "lat": -2.743111,
          "lng": -59.454472
        },
        "AMRPE91": {
          "lat": -2.739694,
          "lng": -59.751778
        },
        "AMRPE92": {
          "lat": -2.880556,
          "lng": -59.954723
        },
        "AMSAT01": {
          "lat": -4.2231,
          "lng": -69.93549
        },
        "AMSAT02": {
          "lat": -3.3483,
          "lng": -64.7204
        },
        "AMSAT03": {
          "lat": -0.13325,
          "lng": -67.0873
        },
        "AMSAT04": {
          "lat": -3.474,
          "lng": -68.95282
        },
        "AMSAT05": {
          "lat": -4.098,
          "lng": -63.157
        },
        "AMSAT06": {
          "lat": -3.365197,
          "lng": -68.195714
        },
        "AMSAT07": {
          "lat": -0.969742,
          "lng": -62.924569
        },
        "AMSAT08": {
          "lat": -4.871057,
          "lng": -66.895918
        },
        "AMSAT09": {
          "lat": -2.513264,
          "lng": -66.093478
        },
        "AMSAT10": {
          "lat": -6.433642,
          "lng": -68.250833
        },
        "AMSAT11": {
          "lat": -6.663308,
          "lng": -69.857816
        },
        "AMSAT12": {
          "lat": -3.477019,
          "lng": -66.062005
        },
        "AMSAT13": {
          "lat": -2.748486,
          "lng": -66.763408
        },
        "AMSAT14": {
          "lat": -7.271292,
          "lng": -64.792186
        },
        "AMSAT15": {
          "lat": -3.104889,
          "lng": -67.952472
        },
        "AMSAT16": {
          "lat": -5.120261,
          "lng": -60.375942
        },
        "AMSAT17": {
          "lat": -7.710214,
          "lng": -66.997058
        },
        "AMSAT18": {
          "lat": -6.527311,
          "lng": -64.388997
        },
        "AMSAT20": {
          "lat": -7.195907,
          "lng": -59.88304
        },
        "AMSBH01": {
          "lat": -0.13055,
          "lng": -67.0836
        },
        "AMSBH02": {
          "lat": -0.119409,
          "lng": -67.090943
        },
        "AMSBH03": {
          "lat": -0.13356,
          "lng": -67.0855
        },
        "AMSBH04": {
          "lat": 0.610306,
          "lng": -69.193333
        },
        "AMSBH05": {
          "lat": 0.257215,
          "lng": -69.793206
        },
        "AMSBH06": {
          "lat": 0.601676,
          "lng": -69.201904
        },
        "AMSBH07": {
          "lat": 0.1298848,
          "lng": -68.5428352
        },
        "AMSBH08": {
          "lat": 1.1895,
          "lng": -66.837306
        },
        "AMSBH09": {
          "lat": 1.070544,
          "lng": -67.595336
        },
        "AMSBH10": {
          "lat": 0.370487,
          "lng": -67.314902
        },
        "AMSBH11": {
          "lat": 0.370487,
          "lng": -67.314902
        },
        "AMSDO01": {
          "lat": -3.46389,
          "lng": -68.95075
        },
        "AMSDO02": {
          "lat": -3.406667,
          "lng": -68.699722
        },
        "AMSDO03": {
          "lat": -3.472972,
          "lng": -68.950944
        },
        "AMSDO04": {
          "lat": -3.47297,
          "lng": -68.95094
        },
        "AMSIC01": {
          "lat": -3.10302,
          "lng": -67.94893
        },
        "AMSIC02": {
          "lat": -3.073056,
          "lng": -68.071667
        },
        "AMSIC03": {
          "lat": -2.930971578,
          "lng": -69.69585284
        },
        "AMSKK01": {
          "lat": -2.568964,
          "lng": -57.873489
        },
        "AMSKV01": {
          "lat": -2.83565,
          "lng": -58.218336
        },
        "AMSKV02": {
          "lat": -2.833889,
          "lng": -58.217472
        },
        "AMSKV03": {
          "lat": -2.97051,
          "lng": -58.47627
        },
        "AMSZL01": {
          "lat": -0.411619,
          "lng": -65.016252
        },
        "AMTBN01": {
          "lat": -4.23418,
          "lng": -69.9368
        },
        "AMTBN02": {
          "lat": -4.23043,
          "lng": -69.9203
        },
        "AMTBT01": {
          "lat": -4.23974,
          "lng": -69.937728
        },
        "AMTFE01": {
          "lat": -3.35006,
          "lng": -64.7133
        },
        "AMTFE02": {
          "lat": -3.496389,
          "lng": -64.454167
        },
        "AMTFE03": {
          "lat": -3.37272,
          "lng": -64.72079
        },
        "AMTFE04": {
          "lat": -3.344342,
          "lng": -64.7056
        },
        "AMTFE05": {
          "lat": -3.353889,
          "lng": -64.7125
        },
        "AMTFE06": {
          "lat": -3.52998,
          "lng": -64.41114
        },
        "AMTFE07": {
          "lat": -3.37403,
          "lng": -64.65662
        },
        "AMTFE08": {
          "lat": -3.40364,
          "lng": -64.59114
        },
        "AMTFE09": {
          "lat": -3.604017,
          "lng": -64.319606
        },
        "AMTFE10": {
          "lat": -3.600433,
          "lng": -64.292619
        },
        "AMTFE11": {
          "lat": -3.60032,
          "lng": -64.292638
        },
        "AMTIM01": {
          "lat": -3.090969,
          "lng": -60.008419
        },
        "AMTNI01": {
          "lat": -2.86116,
          "lng": -67.77716
        },
        "AMTNI02": {
          "lat": -2.753999,
          "lng": -67.58573
        },
        "AMTPU01": {
          "lat": -5.62225,
          "lng": -63.189222
        },
        "AMTPU02": {
          "lat": -5.75353328655173,
          "lng": -64.443464670879
        },
        "AMUAI01": {
          "lat": -2.982018,
          "lng": -65.157561
        },
        "AMUAI02": {
          "lat": -3.0305,
          "lng": -65.04726
        },
        "AMUAI03": {
          "lat": -3.029458,
          "lng": -65.047575
        },
        "AMUCU01": {
          "lat": -3.13029,
          "lng": -58.155187
        },
        "AMUCU02": {
          "lat": -3.12791,
          "lng": -58.15735
        },
        "AMUCU03": {
          "lat": -2.768694,
          "lng": -57.7595
        },
        "AMUCU04": {
          "lat": -2.96047,
          "lng": -58.06063
        },
        "AMUCU90": {
          "lat": 0,
          "lng": 0
        },
        "AMUUR01": {
          "lat": -0.028222,
          "lng": -59.976472
        },
        "AMUUR02": {
          "lat": -2.534722,
          "lng": -57.765833
        },
        "AMUUR03": {
          "lat": -2.53433,
          "lng": -57.7527
        },
        "AMUUR04": {
          "lat": -2.373928,
          "lng": -57.583192
        },
        "AMUUR05": {
          "lat": -2.42189,
          "lng": -57.61782
        },
        "AMUUR06": {
          "lat": -2.37292,
          "lng": -57.57068
        },
        "AMVIV01": {
          "lat": -3.08722233772278,
          "lng": -60.0400009155273
        },
        "AMVIV02": {
          "lat": -2.73331,
          "lng": -59.748041
        },
        "AMVIV03": {
          "lat": -2.62003,
          "lng": -56.7233
        },
        "AMVIVO2": {
          "lat": -3.088547,
          "lng": -60.039479
        },
        "AMWAL01": {
          "lat": -3.063583,
          "lng": -60.1342
        },
        "AMWRH01": {
          "lat": -3.090441,
          "lng": -59.948606
        },
        "AMWRH02": {
          "lat": -2.051459,
          "lng": -60.027252
        },
        "AP0001F": {
          "lat": 0.034295,
          "lng": -51.049783
        },
        "AP0002F": {
          "lat": -0.0145,
          "lng": -51.202477
        },
        "APAAP01": {
          "lat": 2.04897,
          "lng": -50.791472
        },
        "APAMP01": {
          "lat": 2.05025,
          "lng": -50.79136
        },
        "APCAL01": {
          "lat": 2.49904,
          "lng": -50.94868
        },
        "APCOK01": {
          "lat": 2.498389,
          "lng": -50.955611
        },
        "APCOW01": {
          "lat": 0.035216,
          "lng": -51.051048
        },
        "APCOW02": {
          "lat": -1.425132,
          "lng": -48.452512
        },
        "APCTI01": {
          "lat": 0.96627,
          "lng": -50.796353
        },
        "APFEG01": {
          "lat": 0.850222,
          "lng": -51.175167
        },
        "APFEG02": {
          "lat": 0.851944,
          "lng": -51.175972
        },
        "APFEG03": {
          "lat": 0.864222222,
          "lng": -51.18863333
        },
        "APFEG04": {
          "lat": 0.888238889,
          "lng": -51.25657778
        },
        "APGPA01": {
          "lat": 0.039675,
          "lng": -51.052265
        },
        "APILP01": {
          "lat": 0.59781,
          "lng": -50.69631
        },
        "APLJI01": {
          "lat": -0.83445,
          "lng": -52.514062
        },
        "APLJI02": {
          "lat": -0.853306,
          "lng": -52.537167
        },
        "APLJI03": {
          "lat": -0.847,
          "lng": -52.5221
        },
        "APLJI1L": {
          "lat": -0.843611,
          "lng": -52.518805
        },
        "APLMC01": {
          "lat": -22.07,
          "lng": -51.0359
        },
        "APMAB01": {
          "lat": 0.037422,
          "lng": -51.068691
        },
        "APMAC01": {
          "lat": -22.07,
          "lng": -51.0359
        },
        "APMAZ01": {
          "lat": -0.07652,
          "lng": -51.43219
        },
        "APMAZ02": {
          "lat": -0.216389,
          "lng": -51.434167
        },
        "APMAZ03": {
          "lat": -0.11389,
          "lng": -51.28608
        },
        "APMPA01": {
          "lat": 0.072133,
          "lng": -51.049263
        },
        "APMPA02": {
          "lat": 0.0484,
          "lng": -51.05211
        },
        "APMPA02_001": {
          "lat": 0.051436,
          "lng": -51.049312
        },
        "APMPA03": {
          "lat": 0.04255,
          "lng": -51.063494
        },
        "APMPA04": {
          "lat": 0.036111,
          "lng": -51.052778
        },
        "APMPA05": {
          "lat": 0.03175,
          "lng": -51.07204
        },
        "APMPA06": {
          "lat": 0.029722,
          "lng": -51.060833
        },
        "APMPA06_001": {
          "lat": 0.025868,
          "lng": -51.054906
        },
        "APMPA06_002": {
          "lat": 0.035686,
          "lng": -51.051046
        },
        "APMPA07": {
          "lat": 0.007533,
          "lng": -51.066995
        },
        "APMPA08": {
          "lat": 0.029167,
          "lng": -51.111389
        },
        "APMPA09": {
          "lat": 0.039718,
          "lng": -51.132596
        },
        "APMPA09_001": {
          "lat": 0.034075,
          "lng": -51.141859
        },
        "APMPA10": {
          "lat": 0.093679,
          "lng": -51.055088
        },
        "APMPA11": {
          "lat": -0.042381,
          "lng": -51.114407
        },
        "APMPA12": {
          "lat": -0.00382,
          "lng": -51.089762
        },
        "APMPA13": {
          "lat": 0.082373,
          "lng": -51.065167
        },
        "APMPA13_001": {
          "lat": 0.083202,
          "lng": -51.074856
        },
        "APMPA14": {
          "lat": 0.014444,
          "lng": -51.080833
        },
        "APMPA15": {
          "lat": 0.081389,
          "lng": -51.085556
        },
        "APMPA15_001": {
          "lat": 0.096219,
          "lng": -51.085582
        },
        "APMPA15_002": {
          "lat": 0.063919,
          "lng": -51.094946
        },
        "APMPA16": {
          "lat": 0.021056,
          "lng": -51.057889
        },
        "APMPA17": {
          "lat": 0.226667,
          "lng": -51.089861
        },
        "APMPA18": {
          "lat": -0.034024,
          "lng": -51.086921
        },
        "APMPA19": {
          "lat": 0.037167,
          "lng": -51.082472
        },
        "APMPA20": {
          "lat": 0.019731,
          "lng": -51.069877
        },
        "APMPA21": {
          "lat": 0.058278,
          "lng": -51.048861
        },
        "APMPA22": {
          "lat": 0.020333,
          "lng": -51.070472
        },
        "APMPA23": {
          "lat": 0.0958,
          "lng": -51.1179
        },
        "APMPA24": {
          "lat": 0.60775,
          "lng": -50.69703
        },
        "APMPA25": {
          "lat": 0.00479,
          "lng": -51.08141
        },
        "APMPA26": {
          "lat": 0.010444,
          "lng": -51.095306
        },
        "APMPA27": {
          "lat": -0.008111,
          "lng": -51.072611
        },
        "APMPA28": {
          "lat": -0.024741,
          "lng": -51.079158
        },
        "APMPA29": {
          "lat": -0.037067,
          "lng": -51.089483
        },
        "APMPA30": {
          "lat": 0.026383,
          "lng": -51.157001
        },
        "APMPA30_001": {
          "lat": 0.028,
          "lng": -51.150635
        },
        "APMPA31": {
          "lat": 0.024611,
          "lng": -51.127583
        },
        "APMPA32": {
          "lat": 0.04511397,
          "lng": -51.12106924
        },
        "APMPA33": {
          "lat": 0.06393,
          "lng": -51.09496
        },
        "APMPA34": {
          "lat": 0.095633,
          "lng": -51.118117
        },
        "APMPA35": {
          "lat": 0.0969,
          "lng": -51.083295
        },
        "APMPA36": {
          "lat": 0.807777778,
          "lng": -50.75055556
        },
        "APMPA37": {
          "lat": 0.09444,
          "lng": -51.06194
        },
        "APMPA38": {
          "lat": 0.0002,
          "lng": -51.077381
        },
        "APMPA39": {
          "lat": 0.035693,
          "lng": -51.12272
        },
        "APMPA40": {
          "lat": 0.091471,
          "lng": -51.065583
        },
        "APMPA41": {
          "lat": 0.05586,
          "lng": -51.05375
        },
        "APMPA42": {
          "lat": 0.02056,
          "lng": -51.06356
        },
        "APMPA43": {
          "lat": 0.04019,
          "lng": -51.05728
        },
        "APMPA44": {
          "lat": -0.012448,
          "lng": -51.086305
        },
        "APMPA45": {
          "lat": 0.08075,
          "lng": -51.05858
        },
        "APMPA46": {
          "lat": 0.041748,
          "lng": -51.054366
        },
        "APMPA47": {
          "lat": 0.072745,
          "lng": -51.083377
        },
        "APMPA48": {
          "lat": 0.012583,
          "lng": -51.071778
        },
        "APMPA49": {
          "lat": 0.022,
          "lng": -51.172083
        },
        "APMPA50": {
          "lat": 0.08614,
          "lng": -51.05753
        },
        "APMPA51": {
          "lat": 0.02836,
          "lng": -51.11731
        },
        "APMPA52": {
          "lat": 0.06158,
          "lng": -51.05246
        },
        "APMPA53": {
          "lat": 0.02122,
          "lng": -51.06944
        },
        "APMPA54": {
          "lat": -0.03,
          "lng": -51.09
        },
        "APMPA55": {
          "lat": 0.04987,
          "lng": -51.11486
        },
        "APMPA56": {
          "lat": 0.06361,
          "lng": -51.09198
        },
        "APMPA57": {
          "lat": 0.02,
          "lng": -51.08417
        },
        "APMPA58": {
          "lat": 0.06642,
          "lng": -51.09125
        },
        "APMPA59": {
          "lat": 0.05297,
          "lng": -51.06117
        },
        "APMPA60": {
          "lat": 0.086253,
          "lng": -51.057772
        },
        "APMPA61": {
          "lat": 0.02658,
          "lng": -51.07586
        },
        "APMPA62": {
          "lat": 0.100869,
          "lng": -51.061592
        },
        "APMPA63": {
          "lat": 0.037638,
          "lng": -51.0583
        },
        "APMPA64": {
          "lat": 0.04849,
          "lng": -51.06395
        },
        "APMPA65": {
          "lat": 0.04247,
          "lng": -51.04656
        },
        "APMPA66": {
          "lat": 0.005976,
          "lng": -51.085579
        },
        "APMPA67": {
          "lat": 0.00972,
          "lng": -51.08194
        },
        "APMPA68": {
          "lat": 0.05486,
          "lng": -51.04272
        },
        "APMPA69": {
          "lat": 0.03488,
          "lng": -51.09522
        },
        "APMPA70": {
          "lat": 0.039147,
          "lng": -51.071349
        },
        "APMPA71": {
          "lat": 0.114485,
          "lng": -51.130393
        },
        "APMPA72": {
          "lat": 0.0887222,
          "lng": -51.09956
        },
        "APMPA73": {
          "lat": 0.04536078,
          "lng": -51.0584722
        },
        "APMPA74": {
          "lat": 0.07728,
          "lng": -51.05831
        },
        "APMPA75": {
          "lat": 0.037167,
          "lng": -51.082472
        },
        "APMPA76": {
          "lat": 0.099693,
          "lng": -51.088342
        },
        "APMPA77": {
          "lat": -0.00284,
          "lng": -51.07954
        },
        "APMPA78": {
          "lat": 0.031777,
          "lng": -51.072009
        },
        "APMPA79": {
          "lat": 0.034,
          "lng": -51.098
        },
        "APMPA80": {
          "lat": 0.048205,
          "lng": -51.04388
        },
        "APMPA81": {
          "lat": 0.055917,
          "lng": -51.05375
        },
        "APMPA82": {
          "lat": 0.077282,
          "lng": -51.05832
        },
        "APMPA83": {
          "lat": 0.02,
          "lng": -51.07
        },
        "APMPA84": {
          "lat": 0.087,
          "lng": -51.042
        },
        "APMPA85": {
          "lat": 0.044,
          "lng": -51.126
        },
        "APMPA86": {
          "lat": 0.067944,
          "lng": -51.057444
        },
        "APMPA87": {
          "lat": -0.049,
          "lng": -51.114
        },
        "APMPA88": {
          "lat": 0.050056,
          "lng": -51.063
        },
        "APMPA89": {
          "lat": 0.046611,
          "lng": -51.109833
        },
        "APMPA90": {
          "lat": 0.095596,
          "lng": -51.04868
        },
        "APMPA91": {
          "lat": 0.035615,
          "lng": -51.051081
        },
        "APMPA92": {
          "lat": 0.001953,
          "lng": -51.072208
        },
        "APMPA93": {
          "lat": 0.081408,
          "lng": -51.050236
        },
        "APMPA94": {
          "lat": 0.071227,
          "lng": -51.067223
        },
        "APMPA95": {
          "lat": 0.0015,
          "lng": -51.065778
        },
        "APMPA96": {
          "lat": -0.006538,
          "lng": -51.10003
        },
        "APMPA97": {
          "lat": -0.042825,
          "lng": -51.102808
        },
        "APMPA98": {
          "lat": -0.037056,
          "lng": -51.089444
        },
        "APMPA99": {
          "lat": -0.032109,
          "lng": -51.08639
        },
        "APMPAA1": {
          "lat": 0.037104,
          "lng": -51.082418
        },
        "APMPAA2": {
          "lat": 0.039453,
          "lng": -51.095944
        },
        "APMPAA3": {
          "lat": 0.020361,
          "lng": -51.070472
        },
        "APMPAA4": {
          "lat": 0.087681,
          "lng": -51.045619
        },
        "APMPAA5": {
          "lat": 0.024534,
          "lng": -51.081585
        },
        "APMPAA6": {
          "lat": -0.052436,
          "lng": -51.112806
        },
        "APMPAA7": {
          "lat": 0.0263483,
          "lng": -51.05553
        },
        "APMPAA8": {
          "lat": 0.054842,
          "lng": -51.045022
        },
        "APMPAA9": {
          "lat": 0.780431,
          "lng": -50.687733
        },
        "APMPAB1": {
          "lat": 0.270764,
          "lng": -50.912444
        },
        "APMPAB2": {
          "lat": 0.7237,
          "lng": -50.70819
        },
        "APMPAB3": {
          "lat": 0.0259,
          "lng": -51.0549
        },
        "APMPAB4": {
          "lat": 0.0514,
          "lng": -51.0493
        },
        "APMPAB5": {
          "lat": 0.028,
          "lng": -51.1506
        },
        "APMPAB6": {
          "lat": 0.0341,
          "lng": -51.1419
        },
        "APMPAB7": {
          "lat": 0.035686,
          "lng": -51.051046
        },
        "APMPAB8": {
          "lat": 0.758398851,
          "lng": -50.28694203
        },
        "APMPAB9": {
          "lat": 0.764099763,
          "lng": -50.16787943
        },
        "APMPAC1": {
          "lat": 0.004,
          "lng": -51.0796
        },
        "APMPAC2": {
          "lat": 0.0006,
          "lng": -51.0779
        },
        "APMPAC3": {
          "lat": 0.018,
          "lng": -51.073
        },
        "APMPAI1": {
          "lat": -0.008768,
          "lng": -51.081309
        },
        "APMPAI2": {
          "lat": 0.051039,
          "lng": -51.071075
        },
        "APMPAI3": {
          "lat": 0.038652,
          "lng": -51.07474
        },
        "APMPAI4": {
          "lat": 0.031011,
          "lng": -51.063281
        },
        "APMPAI5": {
          "lat": 0.035528,
          "lng": -51.051861
        },
        "APMPAI6": {
          "lat": 0.025868,
          "lng": -51.054906
        },
        "APMPAI7": {
          "lat": 0.051436,
          "lng": -51.049312
        },
        "APMPAI8": {
          "lat": 0.028,
          "lng": -51.150635
        },
        "APMPAI9": {
          "lat": 0.03425,
          "lng": -51.14202
        },
        "APMPAX1": {
          "lat": 0.03631,
          "lng": -51.055609
        },
        "APOIF01": {
          "lat": 0.039021,
          "lng": -51.0565
        },
        "APOPQ01": {
          "lat": 3.841667,
          "lng": -51.835278
        },
        "APOPQ02": {
          "lat": 3.8418,
          "lng": -51.8354
        },
        "APOPQ03": {
          "lat": 3.8369,
          "lng": -51.8081
        },
        "APPBR01": {
          "lat": 0.774702,
          "lng": -51.961492
        },
        "APPBR90": {
          "lat": 0.603,
          "lng": -51.720972
        },
        "APPCU01": {
          "lat": 1.740081,
          "lng": -50.78595
        },
        "APPCU02": {
          "lat": 1.728417,
          "lng": -50.876889
        },
        "APPCUR1": {
          "lat": 1.662342,
          "lng": -50.919353
        },
        "APPGR01": {
          "lat": -0.71233,
          "lng": -51.41123
        },
        "APPOG01": {
          "lat": 0.708,
          "lng": -51.411694
        },
        "APPOG90": {
          "lat": 0.4968,
          "lng": -51.1186
        },
        "APPOG91": {
          "lat": 0.2136,
          "lng": -51.10972
        },
        "APPOG92": {
          "lat": 0.706389,
          "lng": -51.395
        },
        "APPOG93": {
          "lat": 0.70806,
          "lng": -51.41167
        },
        "APPOGR1": {
          "lat": 0.611361,
          "lng": -51.76711
        },
        "APSEN01": {
          "lat": 0.892722,
          "lng": -52.002199
        },
        "APSNV01": {
          "lat": 0.9039,
          "lng": -52.003142
        },
        "APSQA01": {
          "lat": -0.046825,
          "lng": -51.154989
        },
        "APSQA02": {
          "lat": -0.0468,
          "lng": -51.16554
        },
        "APSQA03": {
          "lat": -0.027421,
          "lng": -51.176549
        },
        "APSQA04": {
          "lat": -0.0383,
          "lng": -51.17262
        },
        "APSQA05": {
          "lat": -0.003056,
          "lng": -51.185278
        },
        "APSQA06": {
          "lat": -0.051004,
          "lng": -51.175597
        },
        "APSQA07": {
          "lat": -0.054338,
          "lng": -51.166947
        },
        "APSQA08": {
          "lat": -0.0508333,
          "lng": -51.17625
        },
        "APSQA09": {
          "lat": -0.01763,
          "lng": -51.17437
        },
        "APSQA10": {
          "lat": -0.02585,
          "lng": -51.16454
        },
        "APSQA11": {
          "lat": -0.04988,
          "lng": -51.13987
        },
        "APSQA12": {
          "lat": 0.071975,
          "lng": -51.440467
        },
        "APSQA13": {
          "lat": -0.069225,
          "lng": -51.174133
        },
        "APSQA14": {
          "lat": -0.03444444,
          "lng": -51.18633333
        },
        "APSQA15": {
          "lat": -0.0565,
          "lng": -51.1633
        },
        "APSQA16": {
          "lat": -0.066663,
          "lng": -51.259233
        },
        "APSTN01": {
          "lat": 0.05996,
          "lng": -51.29858
        },
        "APTGO01": {
          "lat": 1.503306,
          "lng": -50.91175
        },
        "APTGO90": {
          "lat": 1.311333,
          "lng": -50.929417
        },
        "APTIM01": {
          "lat": 0.053277,
          "lng": -51.055661
        },
        "APTTZ01": {
          "lat": 1.382732,
          "lng": -50.991552
        },
        "APTTZ02": {
          "lat": 1.580589,
          "lng": -50.903586
        },
        "APVIV01": {
          "lat": 0.046944,
          "lng": -51.058611
        },
        "APVIV02": {
          "lat": 0.0475,
          "lng": -51.058889
        },
        "APVJI01": {
          "lat": -0.92731,
          "lng": -52.42369
        },
        "APVJI02": {
          "lat": -1.1235,
          "lng": -51.996769
        },
        "APVJI03": {
          "lat": -0.92263,
          "lng": -52.40437
        },
        "APVJR01": {
          "lat": -0.90306,
          "lng": -52.38306
        },
        "EAM0001": {
          "lat": -3.015,
          "lng": -60.028612
        },
        "EAM0002": {
          "lat": -3.054873,
          "lng": -60.024873
        },
        "EAM0003": {
          "lat": -7.510112,
          "lng": -63.025667
        },
        "EAM0004": {
          "lat": -3.128223,
          "lng": -59.963223
        },
        "EAM0005": {
          "lat": -3.126667,
          "lng": -60.017223
        },
        "EAM0006": {
          "lat": -8.752223,
          "lng": -67.398057
        },
        "EAM0007": {
          "lat": -5.812778,
          "lng": -61.299723
        },
        "EAM0008": {
          "lat": -3.096668,
          "lng": -60.025279
        },
        "EAM0009": {
          "lat": -3.031945,
          "lng": -60.04639
        },
        "EAM0010": {
          "lat": -3.12889,
          "lng": -59.961945
        },
        "EAM0011": {
          "lat": -3.126945,
          "lng": -60.016112
        },
        "EAM0012": {
          "lat": -3.0525,
          "lng": -60.023612
        },
        "EAM0013": {
          "lat": -3.115834,
          "lng": -59.9075
        },
        "EAM0014": {
          "lat": -3.124445,
          "lng": -59.979445
        },
        "EAM0015": {
          "lat": -3.131779,
          "lng": -60.024834
        },
        "EAM0016": {
          "lat": -3.074456,
          "lng": -59.956123
        },
        "EAM0017": {
          "lat": -3.113612,
          "lng": -59.945834
        },
        "EAM0018": {
          "lat": -3.033334,
          "lng": -59.98639
        },
        "EAM0019": {
          "lat": -3.106389,
          "lng": -60.006945
        },
        "EAM0020": {
          "lat": -2.627501,
          "lng": -56.732501
        },
        "EAM0021": {
          "lat": -4.233612,
          "lng": -69.937501
        },
        "EAM0022": {
          "lat": -4.091937,
          "lng": -63.141104
        },
        "EAM0023": {
          "lat": -3.138282,
          "lng": -58.440504
        },
        "EAM0024": {
          "lat": -3.346301,
          "lng": -64.707134
        },
        "EAM0025": {
          "lat": -3.147612,
          "lng": -59.999834
        },
        "EAM0026": {
          "lat": -3.088696,
          "lng": -59.987307
        },
        "EAM0027": {
          "lat": -3.037784,
          "lng": -59.941118
        },
        "EAM0028": {
          "lat": -3.1,
          "lng": -60.016667
        },
        "EAM0029": {
          "lat": -0.11,
          "lng": -67.06
        },
        "EAM0030": {
          "lat": -2.029809,
          "lng": -60.02342
        },
        "EAM0031": {
          "lat": -3.513583,
          "lng": -60.134194
        },
        "EAM0032": {
          "lat": -8.137388,
          "lng": -63.732564
        },
        "EAM0033": {
          "lat": -3.82513889,
          "lng": -60.36105556
        },
        "EAM0034": {
          "lat": -3.51348,
          "lng": -60.134277
        },
        "EAM0035": {
          "lat": -7.207261,
          "lng": -63.135792
        },
        "EAM0036": {
          "lat": -4.082587,
          "lng": -60.6846
        },
        "EAM0037": {
          "lat": -2.61194444,
          "lng": -56.73333333
        },
        "EAM0038": {
          "lat": -5.652881,
          "lng": -62.225939
        },
        "EAM0039": {
          "lat": -6.907064,
          "lng": -63.072732
        },
        "EAM0040": {
          "lat": -3.10030556,
          "lng": -60.05669444
        },
        "EAM0042": {
          "lat": -3.3463,
          "lng": -64.707097
        },
        "EAM0043": {
          "lat": -4.922604,
          "lng": -61.501094
        },
        "EAM0044": {
          "lat": -4.631384,
          "lng": -61.25168
        },
        "EAM0047": {
          "lat": -5.888314,
          "lng": -62.398245
        },
        "EAM0048": {
          "lat": -6.368141,
          "lng": -62.805232
        },
        "EAM0049": {
          "lat": -6.120855,
          "lng": -62.588274
        },
        "EAM0050": {
          "lat": -5.149465,
          "lng": -61.760654
        },
        "EAM0051": {
          "lat": -5.3565413,
          "lng": -62.038638
        },
        "EAM0052": {
          "lat": -6.611888,
          "lng": -62.955502
        },
        "EAM0053": {
          "lat": -3.085777778,
          "lng": -60.0171111
        },
        "EAM0054": {
          "lat": -3.032027778,
          "lng": -59.9753889
        },
        "EAM0055": {
          "lat": -3.069333333,
          "lng": -60.05625
        },
        "EAM0056": {
          "lat": -3.131583333,
          "lng": -60.0186944
        },
        "EAM0057": {
          "lat": -3.116055556,
          "lng": -60.0416389
        },
        "EAM0058": {
          "lat": -3.111611111,
          "lng": -59.9762222
        },
        "EAM0059": {
          "lat": -3.114222222,
          "lng": -60.0163889
        },
        "EAM0060": {
          "lat": -3.140583333,
          "lng": -60.0013611
        },
        "EAM0061": {
          "lat": -3.068166667,
          "lng": -60.0948889
        },
        "EAM0062": {
          "lat": -3.0875,
          "lng": -60.04025
        },
        "EAM0063": {
          "lat": -3.110611111,
          "lng": -59.9908889
        },
        "EAM0064": {
          "lat": -3.128472222,
          "lng": -60.0037222
        },
        "EAM0065": {
          "lat": -3.096972222,
          "lng": -60.0156944
        },
        "EAM0066": {
          "lat": -3.02758,
          "lng": -59.96117
        },
        "EAM0067": {
          "lat": -3.134777778,
          "lng": -60.0243056
        },
        "EAM0068": {
          "lat": -3.088334,
          "lng": -59.940277
        },
        "EAM0069": {
          "lat": -3.04656,
          "lng": -59.96069
        },
        "EAM0070": {
          "lat": -3.02642,
          "lng": -60.00856
        },
        "EAM0071": {
          "lat": -3.08278,
          "lng": -59.9702
        },
        "EAM0072": {
          "lat": -3.055778,
          "lng": -59.943722
        },
        "EAM0073": {
          "lat": -3.00611,
          "lng": -60.01028
        },
        "EAM0074": {
          "lat": -3.06694,
          "lng": -59.92444
        },
        "EAM0075": {
          "lat": -3.07278,
          "lng": -59.99722
        },
        "EAM0076": {
          "lat": -3.053466,
          "lng": -60.028491
        },
        "EAM0077": {
          "lat": -3.049627,
          "lng": -59.990611
        },
        "EAM0078": {
          "lat": -3.042637,
          "lng": -59.925091
        },
        "EAM0079": {
          "lat": -3.017333,
          "lng": -59.971833
        },
        "EAM0081": {
          "lat": -3.104904,
          "lng": -60.006393
        },
        "EAM0082": {
          "lat": -3.12,
          "lng": -59.994
        },
        "EAP0001": {
          "lat": 0.079652,
          "lng": -51.058777
        },
        "EAP0002": {
          "lat": 0.035389,
          "lng": -51.072778
        },
        "EAP0003": {
          "lat": 0.013688,
          "lng": -51.069973
        },
        "EAP0004": {
          "lat": 0.040834,
          "lng": -51.061667
        },
        "EAP0005": {
          "lat": -0.043612,
          "lng": -51.170834
        },
        "EAP0006": {
          "lat": 3.851945,
          "lng": -51.830001
        },
        "EAP0007": {
          "lat": 0.023053,
          "lng": -51.077679
        },
        "EAP0008": {
          "lat": 0.061477,
          "lng": -51.0526
        },
        "EAP0010": {
          "lat": 0.031379,
          "lng": -51.0724
        },
        "EMA0001": {
          "lat": -2.498334,
          "lng": -44.286112
        },
        "EMA0002": {
          "lat": -5.512223,
          "lng": -47.489446
        },
        "EMA0003": {
          "lat": -2.54639,
          "lng": -44.21889
        },
        "EMA0004": {
          "lat": -2.530267,
          "lng": -44.294157
        },
        "EMA0005": {
          "lat": -7.528406,
          "lng": -46.039518
        },
        "EMA0006": {
          "lat": -4.222892,
          "lng": -44.784282
        },
        "EMA0007": {
          "lat": -4.863612,
          "lng": -43.358334
        },
        "EMA0008": {
          "lat": -3.396159,
          "lng": -44.358659
        },
        "EMA0009": {
          "lat": -5.525584,
          "lng": -47.475306
        },
        "EMA0010": {
          "lat": -5.511667,
          "lng": -47.48889
        },
        "EMA0011": {
          "lat": -3.664975,
          "lng": -45.388865
        },
        "EMA0012": {
          "lat": -2.556809,
          "lng": -44.055142
        },
        "EMA0013": {
          "lat": -2.571915,
          "lng": -44.235526
        },
        "EMA0014": {
          "lat": -2.564481,
          "lng": -44.312537
        },
        "EMA0015": {
          "lat": -2.548093,
          "lng": -44.26587
        },
        "EMA0016": {
          "lat": -2.530279,
          "lng": -44.29389
        },
        "EMA0017": {
          "lat": -3.272742,
          "lng": -45.653853
        },
        "EMA0018": {
          "lat": -4.952362,
          "lng": -47.500139
        },
        "EMA0019": {
          "lat": -5.475001,
          "lng": -47.441668
        },
        "EMA0020": {
          "lat": -3.452139,
          "lng": -44.766584
        },
        "EMA0021": {
          "lat": -4.073334,
          "lng": -44.479723
        },
        "EMA0022": {
          "lat": -3.179723,
          "lng": -44.346946
        },
        "EMA0023": {
          "lat": -4.212778,
          "lng": -44.445834
        },
        "EMA0024": {
          "lat": -5.749729,
          "lng": -47.36445
        },
        "EMA0025": {
          "lat": -2.753334,
          "lng": -45.717501
        },
        "EMA0026": {
          "lat": -4.723612,
          "lng": -43.733056
        },
        "EMA0027": {
          "lat": -7.3625,
          "lng": -46.619723
        },
        "EMA0028": {
          "lat": -5.412778,
          "lng": -46.106945
        },
        "EMA0029": {
          "lat": -2.539903,
          "lng": -44.174866
        },
        "EMA0030": {
          "lat": -4.457814,
          "lng": -43.902814
        },
        "EMA0031": {
          "lat": -3.742084,
          "lng": -43.362084
        },
        "EMA0032": {
          "lat": -7.334004,
          "lng": -47.468726
        },
        "EMA0033": {
          "lat": -4.464112,
          "lng": -47.535223
        },
        "EMA0034": {
          "lat": -2.510531,
          "lng": -44.303309
        },
        "EMA0035": {
          "lat": -2.52324,
          "lng": -44.246296
        },
        "EMA0036": {
          "lat": -2.549971,
          "lng": -44.217748
        },
        "EMA0037": {
          "lat": -2.490523,
          "lng": -44.249412
        },
        "EMA0038": {
          "lat": -2.512873,
          "lng": -44.225929
        },
        "EMA0039": {
          "lat": -2.501084,
          "lng": -44.285807
        },
        "EMA0040": {
          "lat": -5.511589,
          "lng": -47.489368
        },
        "EMA0041": {
          "lat": -3.521262,
          "lng": -44.547651
        },
        "EMA0042": {
          "lat": -4.573126,
          "lng": -44.598404
        },
        "EMA0043": {
          "lat": -6.343057,
          "lng": -47.398057
        },
        "EMA0044": {
          "lat": -2.522459,
          "lng": -45.082459
        },
        "EMA0045": {
          "lat": -2.944001,
          "lng": -44.260945
        },
        "EMA0046": {
          "lat": -5.094501,
          "lng": -42.832279
        },
        "EMA0047": {
          "lat": -2.580439,
          "lng": -45.266081
        },
        "EMA0048": {
          "lat": -2.5212,
          "lng": -45.08141
        },
        "EMA0049": {
          "lat": -5.745311,
          "lng": -47.364556
        },
        "EMA0050": {
          "lat": -2.580383,
          "lng": -45.266139
        },
        "EMA0051": {
          "lat": -2.53686111,
          "lng": -44.27344444
        },
        "EMA0052": {
          "lat": -2.52119444,
          "lng": -44.25388889
        },
        "EMA0053": {
          "lat": -4.584251,
          "lng": -44.594851
        },
        "EMA0054": {
          "lat": -5.517583333,
          "lng": -47.4791944
        },
        "EMA0055": {
          "lat": -5.535944444,
          "lng": -47.4765833
        },
        "EMA0056": {
          "lat": -5.49442,
          "lng": -47.47964
        },
        "EMA0057": {
          "lat": -5.50825,
          "lng": -47.45869
        },
        "EMA0058": {
          "lat": -4.947778,
          "lng": -47.460278
        },
        "EMA0059": {
          "lat": -3.344694,
          "lng": -44.500878
        },
        "EMA0060": {
          "lat": -5.2975,
          "lng": -44.487497
        },
        "EMA0061": {
          "lat": -6.819497,
          "lng": -44.653769
        },
        "EMA0063": {
          "lat": -2.56111,
          "lng": -44.27456
        },
        "EMA0064": {
          "lat": -2.534,
          "lng": -44.1957
        },
        "EMA0065": {
          "lat": -2.534918,
          "lng": -44.288244
        },
        "EMA0066": {
          "lat": -2.488,
          "lng": -44.25
        },
        "EMA0069": {
          "lat": -2.56425,
          "lng": -44.3121
        },
        "EMA0070": {
          "lat": -2.53067,
          "lng": -44.29425
        },
        "EMA0071": {
          "lat": -2.49711,
          "lng": -44.22772
        },
        "EMA0072": {
          "lat": -2.57961,
          "lng": -44.19774
        },
        "EMA0073": {
          "lat": -2.59953,
          "lng": -44.22269
        },
        "EMA0074": {
          "lat": -2.55517,
          "lng": -44.2397
        },
        "EMA0077": {
          "lat": -2.567908,
          "lng": -44.227079
        },
        "EPA0001": {
          "lat": -1.4525,
          "lng": -48.488057
        },
        "EPA0002": {
          "lat": -1.108612,
          "lng": -48.427223
        },
        "EPA0003": {
          "lat": -1.870279,
          "lng": -52.530001
        },
        "EPA0004": {
          "lat": -2.995557,
          "lng": -47.352778
        },
        "EPA0005": {
          "lat": -1.47139,
          "lng": -56.376667
        },
        "EPA0006": {
          "lat": -6.070834,
          "lng": -49.905278
        },
        "EPA0007": {
          "lat": -8.031667,
          "lng": -50.031945
        },
        "EPA0008": {
          "lat": -2.420556,
          "lng": -54.716389
        },
        "EPA0009": {
          "lat": -3.730001,
          "lng": -49.690001
        },
        "EPA0010": {
          "lat": -3.767501,
          "lng": -49.669445
        },
        "EPA0011": {
          "lat": -6.750556,
          "lng": -51.154167
        },
        "EPA0012": {
          "lat": -1.369001,
          "lng": -48.376779
        },
        "EPA0013": {
          "lat": -1.408667,
          "lng": -48.440612
        },
        "EPA0014": {
          "lat": -1.388334,
          "lng": -48.481945
        },
        "EPA0015": {
          "lat": -1.163889,
          "lng": -48.471945
        },
        "EPA0016": {
          "lat": -1.437001,
          "lng": -48.472834
        },
        "EPA0017": {
          "lat": -1.387057,
          "lng": -48.407889
        },
        "EPA0018": {
          "lat": -3.21,
          "lng": -52.21
        },
        "EPA0019": {
          "lat": -1.407778,
          "lng": -48.434446
        },
        "EPA0020": {
          "lat": -1.43264,
          "lng": -48.45375
        },
        "EPA0021": {
          "lat": -1.436946,
          "lng": -48.489446
        },
        "EPA0022": {
          "lat": -1.45,
          "lng": -48.488334
        },
        "EPA0023": {
          "lat": -1.458889,
          "lng": -48.495279
        },
        "EPA0024": {
          "lat": -1.455945,
          "lng": -48.473167
        },
        "EPA0025": {
          "lat": -1.456112,
          "lng": -48.440557
        },
        "EPA0026": {
          "lat": -1.437029,
          "lng": -48.464806
        },
        "EPA0027": {
          "lat": -1.682501,
          "lng": -50.480001
        },
        "EPA0028": {
          "lat": -1.360278,
          "lng": -48.26
        },
        "EPA0029": {
          "lat": -1.294196,
          "lng": -47.892251
        },
        "EPA0030": {
          "lat": -1.297779,
          "lng": -47.921667
        },
        "EPA0031": {
          "lat": -6.069167,
          "lng": -50.066112
        },
        "EPA0032": {
          "lat": -1.190279,
          "lng": -47.180279
        },
        "EPA0033": {
          "lat": -3.717779,
          "lng": -53.738334
        },
        "EPA0034": {
          "lat": -4.270001,
          "lng": -55.940279
        },
        "EPA0035": {
          "lat": -5.339196,
          "lng": -49.091696
        },
        "EPA0036": {
          "lat": -5.33889,
          "lng": -49.092779
        },
        "EPA0037": {
          "lat": -1.41275,
          "lng": -48.464139
        },
        "EPA0038": {
          "lat": -1.718612,
          "lng": -48.882779
        },
        "EPA0039": {
          "lat": -1.054539,
          "lng": -46.766484
        },
        "EPA0040": {
          "lat": -1.335098,
          "lng": -48.453772
        },
        "EPA0041": {
          "lat": -3.85,
          "lng": -51.829723
        },
        "EPA0042": {
          "lat": -3.209723,
          "lng": -52.21
        },
        "EPA0043": {
          "lat": -1.510834,
          "lng": -48.613056
        },
        "EPA0044": {
          "lat": -8.266673,
          "lng": -49.265581
        },
        "EPA0045": {
          "lat": -4.777929,
          "lng": -48.067095
        },
        "EPA0046": {
          "lat": -1.353917,
          "lng": -47.57114
        },
        "EPA0047": {
          "lat": -1.290557,
          "lng": -48.14889
        },
        "EPA0048": {
          "lat": -1.570834,
          "lng": -46.848612
        },
        "EPA0049": {
          "lat": -2.930001,
          "lng": -48.94889
        },
        "EPA0050": {
          "lat": -3.054167,
          "lng": -47.420834
        },
        "EPA0051": {
          "lat": -5.960834,
          "lng": -49.864445
        },
        "EPA0052": {
          "lat": -5.338612,
          "lng": -49.092501
        },
        "EPA0053": {
          "lat": -2.420556,
          "lng": -54.716112
        },
        "EPA0054": {
          "lat": -1.366667,
          "lng": -48.371667
        },
        "EPA0055": {
          "lat": -1.371501,
          "lng": -48.443723
        },
        "EPA0056": {
          "lat": -5.369501,
          "lng": -49.124223
        },
        "EPA0057": {
          "lat": -4.270001,
          "lng": -55.99139
        },
        "EPA0058": {
          "lat": -8.266334,
          "lng": -49.2655
        },
        "EPA0059": {
          "lat": -1.566667,
          "lng": -48.738334
        },
        "EPA0060": {
          "lat": -1.298223,
          "lng": -48.484612
        },
        "EPA0061": {
          "lat": -1.456889,
          "lng": -48.5005
        },
        "EPA0062": {
          "lat": -1.343529,
          "lng": -48.478529
        },
        "EPA0063": {
          "lat": -1.382067,
          "lng": -48.398628
        },
        "EPA0064": {
          "lat": -4.15833333,
          "lng": -47.53333333
        },
        "EPA0065": {
          "lat": -1.10883,
          "lng": -48.42738
        },
        "EPA0066": {
          "lat": -3.199447,
          "lng": -52.203583
        },
        "EPA0067": {
          "lat": -3.832831,
          "lng": -49.676628
        },
        "EPA0068": {
          "lat": -1.47111111,
          "lng": -56.37638889
        },
        "EPA0069": {
          "lat": -1.619064,
          "lng": -47.483572
        },
        "EPA0070": {
          "lat": -4.26694,
          "lng": -55.99167
        },
        "EPA0071": {
          "lat": -1.337839,
          "lng": -47.584461
        },
        "EPA0072": {
          "lat": -3.05416667,
          "lng": -47.47083333
        },
        "EPA0073": {
          "lat": -1.430188,
          "lng": -48.486707
        },
        "EPA0074": {
          "lat": -1.459573,
          "lng": -48.445331
        },
        "EPA0075": {
          "lat": -3.821628,
          "lng": -49.672511
        },
        "EPA0076": {
          "lat": -1.35125,
          "lng": -48.4088333
        },
        "EPA0077": {
          "lat": -2.427222222,
          "lng": -54.7122222
        },
        "EPA0078": {
          "lat": -2.445277778,
          "lng": -54.7194444
        },
        "EPA0079": {
          "lat": -1.367055556,
          "lng": -48.3757778
        },
        "EPA0081": {
          "lat": -1.39548,
          "lng": -48.41836
        },
        "EPA0082": {
          "lat": -1.291666,
          "lng": -47.8916
        },
        "EPA0083": {
          "lat": -1.33306,
          "lng": -48.41139
        },
        "EPA0084": {
          "lat": -2.471861,
          "lng": -54.725472
        },
        "EPA0085": {
          "lat": -1.341356,
          "lng": -48.356964
        },
        "EPA0086": {
          "lat": -1.663167,
          "lng": 54.679222
        },
        "EPA0087": {
          "lat": -1.366944,
          "lng": -48.375556
        },
        "EPA0089": {
          "lat": -5.0925,
          "lng": -48.727861
        },
        "EPA0090": {
          "lat": -4.274444,
          "lng": -47.558611
        },
        "EPA0092": {
          "lat": -4.534722,
          "lng": -49.091944
        },
        "EPA0093": {
          "lat": -1.907333,
          "lng": -48.769667
        },
        "EPA0094": {
          "lat": -3.840556,
          "lng": -50.639167
        },
        "EPA0095": {
          "lat": -2.919722,
          "lng": -48.958333
        },
        "EPA0096": {
          "lat": -2.902222,
          "lng": -52.013611
        },
        "EPA0097": {
          "lat": -2.323611,
          "lng": -47.563889
        },
        "EPA0099": {
          "lat": -1.467944444,
          "lng": -48.4900556
        },
        "EPA0100": {
          "lat": -1.450138889,
          "lng": -48.4965278
        },
        "EPA0101": {
          "lat": -2.104722,
          "lng": -56.486389
        },
        "EPA0102": {
          "lat": -3.832744,
          "lng": -49.649444
        },
        "EPA0103": {
          "lat": -1.421833333,
          "lng": -48.4674722
        },
        "EPA0104": {
          "lat": -1.404388889,
          "lng": -48.4397778
        },
        "EPA0105": {
          "lat": -1.44875,
          "lng": -48.4591389
        },
        "EPA0106": {
          "lat": -1.463,
          "lng": -48.4996944
        },
        "EPA0107": {
          "lat": -1.459722222,
          "lng": -48.4801389
        },
        "EPA0108": {
          "lat": -1.468333333,
          "lng": -48.466
        },
        "EPA0109": {
          "lat": -1.428527778,
          "lng": -48.4833333
        },
        "EPA0110": {
          "lat": -1.447944444,
          "lng": -48.4697222
        },
        "EPA0111": {
          "lat": -1.458944444,
          "lng": -48.4933889
        },
        "EPA0112": {
          "lat": -1.456444444,
          "lng": -48.5006389
        },
        "EPA0113": {
          "lat": -1.450225,
          "lng": -48.488516
        },
        "EPA0114": {
          "lat": -1.40485,
          "lng": -48.48221
        },
        "EPA0115": {
          "lat": -1.43027,
          "lng": -48.44771
        },
        "EPA0116": {
          "lat": -1.31036,
          "lng": -48.47436
        },
        "EPA0117": {
          "lat": -1.35166,
          "lng": -48.47595
        },
        "EPA0118": {
          "lat": -1.3702,
          "lng": -48.44333
        },
        "EPA0119": {
          "lat": -1.334666667,
          "lng": -48.4517222
        },
        "EPA0121": {
          "lat": -1.259988,
          "lng": -48.465748
        },
        "EPA0122": {
          "lat": -1.417249,
          "lng": -48.4925
        },
        "ERO0028": {
          "lat": -8.78025,
          "lng": -63.4575
        },
        "ERO0029": {
          "lat": -11.43666667,
          "lng": -61.43472222
        },
        "ERO0030": {
          "lat": -9.10041667,
          "lng": -63.26252778
        },
        "ERO0031": {
          "lat": -10.73338889,
          "lng": -62.22219444
        },
        "ERO0032": {
          "lat": -11.76983333,
          "lng": -61.05788889
        },
        "ERO0033": {
          "lat": -8.79613889,
          "lng": -63.82325
        },
        "ERO0038": {
          "lat": -12.7235,
          "lng": -60.22272222
        },
        "ERO0039": {
          "lat": -12.44,
          "lng": -64.23
        },
        "ERO0047": {
          "lat": -12.00802778,
          "lng": -60.94741667
        },
        "ERO0048": {
          "lat": -8.7151667,
          "lng": -63.90025
        },
        "ERO0050": {
          "lat": -9.779139,
          "lng": -63.094778
        },
        "ERO0054": {
          "lat": -8.406167,
          "lng": -63.964583
        },
        "ERO0055": {
          "lat": -8.025306,
          "lng": -63.449444
        },
        "ERO0056": {
          "lat": -8759389,
          "lng": -63.97275
        },
        "ERR0001": {
          "lat": 2.823056,
          "lng": -60.672223
        },
        "ERR0002": {
          "lat": 2.822834,
          "lng": -60.702556
        },
        "ERR0003": {
          "lat": 2.85057,
          "lng": -60.643904
        },
        "ERR0004": {
          "lat": 2.85608,
          "lng": -60.6525
        },
        "ERR0005": {
          "lat": 2.77431,
          "lng": -60.72027
        },
        "ETO0026": {
          "lat": -6.55925,
          "lng": -47.462862
        },
        "MA0001F": {
          "lat": -5.529202,
          "lng": -47.470001
        },
        "MA0001R": {
          "lat": -7.551425,
          "lng": -46.025341
        },
        "MA0001S": {
          "lat": -2.508704,
          "lng": -44.263011
        },
        "MA0002F": {
          "lat": -2.533794,
          "lng": -44.224965
        },
        "MA0002R": {
          "lat": -5.526368,
          "lng": -47.477984
        },
        "MA0002S": {
          "lat": -5.530053,
          "lng": -47.48143
        },
        "MA0003F": {
          "lat": -2.527461,
          "lng": -44.254866
        },
        "MA0003R": {
          "lat": -2.509166,
          "lng": -44.214338
        },
        "MA0004F": {
          "lat": -2.533207,
          "lng": -44.300314
        },
        "MA0004R": {
          "lat": -2.502012,
          "lng": -44.291475
        },
        "MA0005F": {
          "lat": -2.61067,
          "lng": -44.25064
        },
        "MA0005R": {
          "lat": -2.501761,
          "lng": -44.275442
        },
        "MA0006F": {
          "lat": -2.508587,
          "lng": -44.262572
        },
        "MA0006R": {
          "lat": -2.633279,
          "lng": -44.321722
        },
        "MA0007R": {
          "lat": -6.447596,
          "lng": -47.404991
        },
        "MA00195": {
          "lat": 0,
          "lng": 0
        },
        "MA00196": {
          "lat": 0,
          "lng": 0
        },
        "MA00247": {
          "lat": -2.49438888888889,
          "lng": -44.2290555555556
        },
        "MA00248": {
          "lat": -5.50111111111111,
          "lng": -47.4936111111111
        },
        "MA00455": {
          "lat": -2.564837,
          "lng": -44.228296
        },
        "MAAAR01": {
          "lat": -3.455,
          "lng": -44.780833
        },
        "MAAAR02": {
          "lat": -3.452142,
          "lng": -44.774264
        },
        "MAACD01": {
          "lat": -4.9053,
          "lng": -47.40701
        },
        "MAACD02": {
          "lat": -4.950823,
          "lng": -47.49438
        },
        "MAACD03": {
          "lat": -4.990655,
          "lng": -47.679321
        },
        "MAACD04": {
          "lat": -4.8982,
          "lng": -47.62071
        },
        "MAACD05": {
          "lat": -4.94307,
          "lng": -47.504727
        },
        "MAACD06": {
          "lat": -4.95367,
          "lng": -47.46911
        },
        "MAACD07": {
          "lat": -4.947781,
          "lng": -47.460278
        },
        "MAACD08": {
          "lat": -4.956583,
          "lng": -47.500111
        },
        "MAACD09": {
          "lat": -4.93333,
          "lng": -47.4944
        },
        "MAACD10": {
          "lat": -4.9200278,
          "lng": -47.50775
        },
        "MAACD11": {
          "lat": -4.926981,
          "lng": -47.478298
        },
        "MAACD12": {
          "lat": -4.96114,
          "lng": -47.49107
        },
        "MAACD13": {
          "lat": -4.94375,
          "lng": -47.470699
        },
        "MAACD14": {
          "lat": -4.94387,
          "lng": -47.50082
        },
        "MAACD90": {
          "lat": -5.093319,
          "lng": -47.555761
        },
        "MAADC01": {
          "lat": -2.83929,
          "lng": -42.11579
        },
        "MAADC02": {
          "lat": -3.073306,
          "lng": -42.237556
        },
        "MAAIS01": {
          "lat": -2.88182,
          "lng": -41.91224
        },
        "MAAIS02": {
          "lat": -3.13098,
          "lng": -42.23811
        },
        "MAAIS03": {
          "lat": -3.03059,
          "lng": -42.06564
        },
        "MAAIS04": {
          "lat": -2.8892,
          "lng": -41.905
        },
        "MAALL01": {
          "lat": -3.674167,
          "lng": -45.8475
        },
        "MAALL02": {
          "lat": -3.665659,
          "lng": -45.84743
        },
        "MAALL03": {
          "lat": -3.730559,
          "lng": -46.092506
        },
        "MAALN01": {
          "lat": -2.400361,
          "lng": -44.409194
        },
        "MAALN02": {
          "lat": -2.53169,
          "lng": -44.59276
        },
        "MAALN03": {
          "lat": -2.333971,
          "lng": -44.481593
        },
        "MAALO01": {
          "lat": -4.167308,
          "lng": -45.463671
        },
        "MAAMA01": {
          "lat": -1.528964,
          "lng": -45.08108
        },
        "MAAMA02": {
          "lat": -1.521864,
          "lng": -45.080492
        },
        "MAAMA03": {
          "lat": -1.533316,
          "lng": -45.084527
        },
        "MAAMA04": {
          "lat": -1.30919,
          "lng": -44.90268
        },
        "MAAMC01": {
          "lat": -2.508394,
          "lng": -44.302422
        },
        "MAAMP02": {
          "lat": -1.67569,
          "lng": -46.01326
        },
        "MAANJ01": {
          "lat": -3.260733,
          "lng": -44.615083
        },
        "MAANJ02": {
          "lat": -3.26825,
          "lng": -44.616169
        },
        "MAANJ03": {
          "lat": -3.256213,
          "lng": -44.615457
        },
        "MAANJ04": {
          "lat": -3.13542,
          "lng": -44.56663
        },
        "MAANJ05": {
          "lat": -3.219586,
          "lng": -44.602093
        },
        "MAANJ06": {
          "lat": -3.200605,
          "lng": -44.53445
        },
        "MAANJ07": {
          "lat": -3.30935,
          "lng": -44.515224
        },
        "MAARA01": {
          "lat": -2.95384,
          "lng": -45.66671
        },
        "MAARM01": {
          "lat": -4.89557,
          "lng": -46.00964
        },
        "MAARM02": {
          "lat": -4.870603,
          "lng": -46.011124
        },
        "MAARM90": {
          "lat": -5.11028,
          "lng": -46.04349
        },
        "MAARR02": {
          "lat": -3.452142,
          "lng": -44.774264
        },
        "MAARW01": {
          "lat": -3.67333,
          "lng": -43.1066
        },
        "MAARW02": {
          "lat": -3.67498,
          "lng": -43.11244
        },
        "MAARW03": {
          "lat": -3.677431,
          "lng": -43.098259
        },
        "MAASA01": {
          "lat": -4.462652,
          "lng": -43.455124
        },
        "MAASA02": {
          "lat": -4.62687,
          "lng": -43.47092
        },
        "MAASA03": {
          "lat": -4.32515,
          "lng": -43.28643
        },
        "MAASA04": {
          "lat": -4.43018,
          "lng": -43.42742
        },
        "MAASA05": {
          "lat": -4.60351,
          "lng": -43.27664
        },
        "MAASH01": {
          "lat": -4.131529,
          "lng": -43.320279
        },
        "MAATA01": {
          "lat": -4.212635,
          "lng": -44.445983
        },
        "MAATH01": {
          "lat": -5.572489,
          "lng": -46.743611
        },
        "MAATH02": {
          "lat": -5.56621,
          "lng": -46.74491
        },
        "MAATH03": {
          "lat": -5.58247,
          "lng": -46.74284
        },
        "MAATH04": {
          "lat": -5.370078,
          "lng": -46.637213
        },
        "MAATH05": {
          "lat": -5.531024,
          "lng": -46.481775
        },
        "MAATH06": {
          "lat": -5.89027,
          "lng": -46.83554
        },
        "MAATH90": {
          "lat": -5.4981,
          "lng": -46.8803
        },
        "MAATP01": {
          "lat": -9.110056,
          "lng": -45.9345
        },
        "MAAXI01": {
          "lat": -2.84041,
          "lng": -44.0599
        },
        "MABAC01": {
          "lat": -2.70831,
          "lng": -44.73743
        },
        "MABAU01": {
          "lat": -1.727276,
          "lng": -45.142683
        },
        "MABAU02": {
          "lat": -1.719619,
          "lng": -45.142091
        },
        "MABAU03": {
          "lat": -1.727343,
          "lng": -45.142259
        },
        "MABBI01": {
          "lat": -2.971389,
          "lng": -44.316389
        },
        "MABBI1E": {
          "lat": -2.914058,
          "lng": -44.343821
        },
        "MABBL01": {
          "lat": -4.23338,
          "lng": -44.7829
        },
        "MABBL02": {
          "lat": -4.21688,
          "lng": -44.78671
        },
        "MABBL03": {
          "lat": -4.244056,
          "lng": -44.785667
        },
        "MABBL04": {
          "lat": -4.225015,
          "lng": -44.790837
        },
        "MABBL05": {
          "lat": -4.22505,
          "lng": -44.77411
        },
        "MABBL06": {
          "lat": -4.233098,
          "lng": -44.784123
        },
        "MABBL07": {
          "lat": -4.234,
          "lng": -44.814
        },
        "MABBL08": {
          "lat": -4.21003,
          "lng": -44.80613
        },
        "MABBL09": {
          "lat": -4.22196,
          "lng": -44.757473
        },
        "MABBL10": {
          "lat": -4.19969,
          "lng": -44.78505
        },
        "MABBL11": {
          "lat": -4.252,
          "lng": -44.793694
        },
        "MABBL12": {
          "lat": -4.228,
          "lng": -44.799
        },
        "MABBL13": {
          "lat": -4.2199,
          "lng": -44.7929
        },
        "MABBV01": {
          "lat": -5.663306,
          "lng": -43.700517
        },
        "MABBV02": {
          "lat": -5.840789,
          "lng": -43.834601
        },
        "MABBV03": {
          "lat": -5.841,
          "lng": -43.8372
        },
        "MABDC01": {
          "lat": -5.50483,
          "lng": -45.23608
        },
        "MABDC02": {
          "lat": -5.051501,
          "lng": -45.238475
        },
        "MABDC03": {
          "lat": -5.495417,
          "lng": -45.271083
        },
        "MABDC04": {
          "lat": -5.50889,
          "lng": -45.25139
        },
        "MABDC90": {
          "lat": -5.5268,
          "lng": -44.8734
        },
        "MABDC91": {
          "lat": -5.41036,
          "lng": -44.992
        },
        "MABED01": {
          "lat": -7.222794,
          "lng": -44.559728
        },
        "MABED02": {
          "lat": -7.217556,
          "lng": -44.554472
        },
        "MABED90": {
          "lat": -7.19028,
          "lng": -44.5642
        },
        "MABEQ01": {
          "lat": -2.44845,
          "lng": -44.78983
        },
        "MABEQ02": {
          "lat": -2.52353,
          "lng": -44.73803
        },
        "MABGJ01": {
          "lat": -6.751308,
          "lng": -43.023916
        },
        "MABGJ02": {
          "lat": -6.585848,
          "lng": -42.977626
        },
        "MABGJ03": {
          "lat": -6.62317,
          "lng": -43.21114
        },
        "MABGJ04": {
          "lat": -6.53532,
          "lng": -43.10437
        },
        "MABIH01": {
          "lat": -2.746776,
          "lng": -42.825721
        },
        "MABIH02": {
          "lat": -2.70661,
          "lng": -43.03386
        },
        "MABIH03": {
          "lat": -3,
          "lng": -43
        },
        "MABIH04": {
          "lat": -2.770556,
          "lng": -42.833611
        },
        "MABIH05": {
          "lat": -2.763889,
          "lng": -42.837944
        },
        "MABIH06": {
          "lat": -2.5758,
          "lng": -42.748473
        },
        "MABIH07": {
          "lat": -2.7518,
          "lng": -42.818
        },
        "MABIH08": {
          "lat": -2.759494,
          "lng": -42.823837
        },
        "MABIH09": {
          "lat": -2.759494,
          "lng": -42.823837
        },
        "MABIH1V": {
          "lat": -2.807919,
          "lng": -43.2324228
        },
        "MABIH90": {
          "lat": -2.745694,
          "lng": -43.172361
        },
        "MABJA01": {
          "lat": -4.331391,
          "lng": -45.584808
        },
        "MABJD01": {
          "lat": -4.485389,
          "lng": -46.854138
        },
        "MABJD90": {
          "lat": -4.428595,
          "lng": -46.769264
        },
        "MABJY01": {
          "lat": -4.481947,
          "lng": -46.852223
        },
        "MABJY02": {
          "lat": -4.49544,
          "lng": -46.66774
        },
        "MABJY03": {
          "lat": -4.69607,
          "lng": -46.79451
        },
        "MABLA01": {
          "lat": -7.52939,
          "lng": -46.0412
        },
        "MABLA02": {
          "lat": -7.512778,
          "lng": -46.043889
        },
        "MABLA03": {
          "lat": -7.768121,
          "lng": -46.024656
        },
        "MABLA04": {
          "lat": -9.339087,
          "lng": -46.707482
        },
        "MABLA05": {
          "lat": -7.54108,
          "lng": -46.05038
        },
        "MABLG01": {
          "lat": -3.16131,
          "lng": -43.5071
        },
        "MABLG02": {
          "lat": -3.16131,
          "lng": -43.50714
        },
        "MABML01": {
          "lat": -4.37058,
          "lng": -45.0322
        },
        "MABND01": {
          "lat": -4.62818,
          "lng": -44.7598
        },
        "MABND90": {
          "lat": -4.62242,
          "lng": -44.71433
        },
        "MABOJ01": {
          "lat": -3.545556,
          "lng": -45.611111
        },
        "MABOJ02": {
          "lat": -4.214806,
          "lng": -46.861851
        },
        "MABOJ03": {
          "lat": -3.78301,
          "lng": -46.16453
        },
        "MABOJ04": {
          "lat": -3.73126,
          "lng": -46.38284
        },
        "MABRJ01": {
          "lat": -3.680556,
          "lng": -42.755278
        },
        "MABRJ02": {
          "lat": -3.84357,
          "lng": -42.79409
        },
        "MABTP01": {
          "lat": -4.31539,
          "lng": -46.4574
        },
        "MABTP02": {
          "lat": -4.458934,
          "lng": -46.328126
        },
        "MABTP03": {
          "lat": -4.258471,
          "lng": -46.330432
        },
        "MABTP04": {
          "lat": -4.332469,
          "lng": -46.452413
        },
        "MABTP05": {
          "lat": -4.31271,
          "lng": -46.29427
        },
        "MABTP06": {
          "lat": -4.3566,
          "lng": -46.4106
        },
        "MABTP90": {
          "lat": -4.221184,
          "lng": -46.494916
        },
        "MABUI01": {
          "lat": -4.01363,
          "lng": -43.19015
        },
        "MABUI02": {
          "lat": -3.94329,
          "lng": -42.94158
        },
        "MABUI03": {
          "lat": -3.9448,
          "lng": -42.91702
        },
        "MABUR01": {
          "lat": -5.59194444444444,
          "lng": -47.0127777777778
        },
        "MABUR02": {
          "lat": -5.54229,
          "lng": -47.098514
        },
        "MABUR90": {
          "lat": -5.590736,
          "lng": -47.101131
        },
        "MABVG01": {
          "lat": -1.79444,
          "lng": -46.305812
        },
        "MABVT01": {
          "lat": -1.79505,
          "lng": -46.30831
        },
        "MABXV01": {
          "lat": -3.74061,
          "lng": -45.25538
        },
        "MACAJ01": {
          "lat": -2.87614,
          "lng": -44.673
        },
        "MACAM01": {
          "lat": -6.16869,
          "lng": -47.367903
        },
        "MACDL01": {
          "lat": -5.17153,
          "lng": -47.77515
        },
        "MACDN01": {
          "lat": -1.455412,
          "lng": -45.72549
        },
        "MACDN02": {
          "lat": -1.450726,
          "lng": -45.725388
        },
        "MACDN03": {
          "lat": -1.491326,
          "lng": -45.607976
        },
        "MACDN04": {
          "lat": -1.61245,
          "lng": -45.69909
        },
        "MACDN05": {
          "lat": -1.52253,
          "lng": -45.52308
        },
        "MACDN06": {
          "lat": -1.455417,
          "lng": -45.7255
        },
        "MACDN90": {
          "lat": -1.46776,
          "lng": -45.5603
        },
        "MACDO01": {
          "lat": -4.45694,
          "lng": -43.8889
        },
        "MACDO02": {
          "lat": -4.45546,
          "lng": -43.8864
        },
        "MACDO03": {
          "lat": -4.708126,
          "lng": -44.17631
        },
        "MACDO04": {
          "lat": -4.267075,
          "lng": -43.7517
        },
        "MACDO05": {
          "lat": -4.23011,
          "lng": -43.47302
        },
        "MACDO06": {
          "lat": -4.3312,
          "lng": -43.6839
        },
        "MACDO07": {
          "lat": -4.68277,
          "lng": -43.80988
        },
        "MACDO08": {
          "lat": -4.470974,
          "lng": -43.896371
        },
        "MACDO09": {
          "lat": -4.46557,
          "lng": -43.8802
        },
        "MACDO10": {
          "lat": -4.445473,
          "lng": -43.896639
        },
        "MACDO11": {
          "lat": -4.456868,
          "lng": -43.88145
        },
        "MACDO12": {
          "lat": -4.450082,
          "lng": -43.873675
        },
        "MACDO13": {
          "lat": -4.4575,
          "lng": -43.9025
        },
        "MACDO14": {
          "lat": -4.43982,
          "lng": -43.875149
        },
        "MACDO15": {
          "lat": -4.44629,
          "lng": -43.86118
        },
        "MACDO16": {
          "lat": -4.48138,
          "lng": -43.89655
        },
        "MACDO17": {
          "lat": -4.451103,
          "lng": -43.886318
        },
        "MACDO18": {
          "lat": -4.46268,
          "lng": -43.88455
        },
        "MACDO19": {
          "lat": -4.4569,
          "lng": -43.8889
        },
        "MACDO20": {
          "lat": -4.4538,
          "lng": -43.8832
        },
        "MACDO21": {
          "lat": -4.46306,
          "lng": -43.88639
        },
        "MACGE01": {
          "lat": -2.990065,
          "lng": -43.996348
        },
        "MACGE02": {
          "lat": -2.929494,
          "lng": -44.059395
        },
        "MACHI01": {
          "lat": -3.739749,
          "lng": -43.35865
        },
        "MACHI02": {
          "lat": -3.558188,
          "lng": -43.522996
        },
        "MACHI03": {
          "lat": -4.1105,
          "lng": -43.54496
        },
        "MACHI04": {
          "lat": -3.93993,
          "lng": -43.51804
        },
        "MACHI05": {
          "lat": -3.70422,
          "lng": -43.37791
        },
        "MACHI06": {
          "lat": -3.7367,
          "lng": -43.3435
        },
        "MACHI07": {
          "lat": -3.733,
          "lng": -43.3251
        },
        "MACHT01": {
          "lat": -4.264999,
          "lng": -43.024319
        },
        "MACHT02": {
          "lat": -4.245245,
          "lng": -43.012612
        },
        "MACHT03": {
          "lat": -4.026369,
          "lng": -43.202383
        },
        "MACHT04": {
          "lat": -4.256011,
          "lng": -43.157001
        },
        "MACHT05": {
          "lat": -4.25875,
          "lng": -43.17125
        },
        "MACHT06": {
          "lat": -4.17788,
          "lng": -43.08079
        },
        "MACHT07": {
          "lat": -4.25947,
          "lng": -43.01481
        },
        "MACHT08": {
          "lat": -4.254639,
          "lng": -43.018833
        },
        "MACHT90": {
          "lat": -4.1233,
          "lng": -43.3301
        },
        "MACHT91": {
          "lat": -3.96143,
          "lng": -43.38854
        },
        "MACHX01": {
          "lat": -3.63611111111111,
          "lng": -44.3797222222222
        },
        "MACHX02": {
          "lat": -3.635623,
          "lng": -44.387254
        },
        "MACHX03": {
          "lat": -3.643066,
          "lng": -44.369959
        },
        "MACIT01": {
          "lat": -5.52016,
          "lng": -47.475818
        },
        "MACJI01": {
          "lat": -3.32426388888889,
          "lng": -45.0114722222222
        },
        "MACKA01": {
          "lat": -2.000005,
          "lng": -44.535114
        },
        "MACKA02": {
          "lat": -2.008461,
          "lng": -44.514781
        },
        "MACLG02": {
          "lat": -3.84141,
          "lng": -44.89503
        },
        "MACLU01": {
          "lat": -3.804867,
          "lng": -44.703526
        },
        "MACLU02": {
          "lat": -3.83834,
          "lng": -44.895152
        },
        "MACNO01": {
          "lat": -2.110011,
          "lng": -46.12695
        },
        "MACNR01": {
          "lat": -2.321147,
          "lng": -44.936484
        },
        "MACNR02": {
          "lat": -2.19139,
          "lng": -44.82844
        },
        "MACNR03": {
          "lat": -2.26895,
          "lng": -44.95607
        },
        "MACNT02": {
          "lat": -2.191389,
          "lng": -44.828411
        },
        "MACOG01": {
          "lat": -2.449528,
          "lng": -46.036278
        },
        "MACOG02": {
          "lat": -2.35635,
          "lng": -46.15324
        },
        "MACOR01": {
          "lat": -4.12806,
          "lng": -44.126099
        },
        "MACOR02": {
          "lat": -4.137006,
          "lng": -44.126936
        },
        "MACOR03": {
          "lat": -4.12745,
          "lng": -44.13495
        },
        "MACOR04": {
          "lat": -4.05569,
          "lng": -44.03412
        },
        "MACOS01": {
          "lat": -6.02874,
          "lng": -44.24679
        },
        "MACOS02": {
          "lat": -6.032089,
          "lng": -44.247818
        },
        "MACOS03": {
          "lat": -6.02096,
          "lng": -44.24423
        },
        "MACOW01": {
          "lat": -2.492372,
          "lng": -44.260537
        },
        "MACPZ01": {
          "lat": -4.721556,
          "lng": -44.324722
        },
        "MACPZ02": {
          "lat": -4.72961,
          "lng": -44.3304
        },
        "MACRN01": {
          "lat": -7.333705,
          "lng": -47.469003
        },
        "MACRN02": {
          "lat": -7.041775,
          "lng": -47.44331944
        },
        "MACRN03": {
          "lat": -7.41194,
          "lng": -47.21628
        },
        "MACTN01": {
          "lat": -2.141599,
          "lng": -46.125186
        },
        "MACTP01": {
          "lat": -1.204581,
          "lng": -46.020786
        },
        "MACTP02": {
          "lat": -1.196909,
          "lng": -46.016796
        },
        "MACTP03": {
          "lat": -1.210224,
          "lng": -46.02328
        },
        "MACTP04": {
          "lat": -1.204583,
          "lng": -46.01808
        },
        "MACTZ01": {
          "lat": -5.512455,
          "lng": -47.46591
        },
        "MACUR01": {
          "lat": -1.823056,
          "lng": -44.869167
        },
        "MACUR02": {
          "lat": -1.827234,
          "lng": -44.877171
        },
        "MACUR03": {
          "lat": -1.72897,
          "lng": -44.78961
        },
        "MACUR04": {
          "lat": -1.83939,
          "lng": -44.869124
        },
        "MACUR05": {
          "lat": -1.842057,
          "lng": -44.868941
        },
        "MACXS01": {
          "lat": -4.86901,
          "lng": -43.3492
        },
        "MACXS02": {
          "lat": -4.86103,
          "lng": -43.3588
        },
        "MACXS03": {
          "lat": -4.869625,
          "lng": -43.378724
        },
        "MACXS04": {
          "lat": -4.748612,
          "lng": -43.121945
        },
        "MACXS05": {
          "lat": -5.193858,
          "lng": -43.3625
        },
        "MACXS06": {
          "lat": -4.871158,
          "lng": -43.40946
        },
        "MACXS07": {
          "lat": -4.76807,
          "lng": -43.60032
        },
        "MACXS08": {
          "lat": -5.00541,
          "lng": -43.50296
        },
        "MACXS09": {
          "lat": -4.97733,
          "lng": -43.23192
        },
        "MACXS10": {
          "lat": -4.75682,
          "lng": -43.10638
        },
        "MACXS11": {
          "lat": -4.44548,
          "lng": -42.99625
        },
        "MACXS12": {
          "lat": -4.83857,
          "lng": -43.343777
        },
        "MACXS13": {
          "lat": -4.88663,
          "lng": -43.35218
        },
        "MACXS14": {
          "lat": -4.90148,
          "lng": -43.34903
        },
        "MACXS15": {
          "lat": -4.87317,
          "lng": -43.36388
        },
        "MACXS16": {
          "lat": -4.87572,
          "lng": -43.38953
        },
        "MACXS17": {
          "lat": -4.89213,
          "lng": -43.32048
        },
        "MACXS18": {
          "lat": -4.877404,
          "lng": -43.336225
        },
        "MACXS19": {
          "lat": -4.86451,
          "lng": -43.33311
        },
        "MACXS20": {
          "lat": -4.82558,
          "lng": -43.33428
        },
        "MACXS21": {
          "lat": -4.864167,
          "lng": -43.363191
        },
        "MACXS22": {
          "lat": -4.83897,
          "lng": -43.34372
        },
        "MACXS23": {
          "lat": -4.85084333,
          "lng": -43.356335
        },
        "MADEP01": {
          "lat": -2.811371,
          "lng": -44.483643
        },
        "MADEP02": {
          "lat": -2.517462,
          "lng": -44.225721
        },
        "MADEP03": {
          "lat": -2.534152,
          "lng": -44.226242
        },
        "MADPD01": {
          "lat": -5.033,
          "lng": -44.436001
        },
        "MADPD90": {
          "lat": -5.04495,
          "lng": -44.433444
        },
        "MADQR01": {
          "lat": -4.148186,
          "lng": -42.942078
        },
        "MADVN01": {
          "lat": -5.52595,
          "lng": -47.39215
        },
        "MAEBT01": {
          "lat": -5.511667,
          "lng": -47.488889
        },
        "MAEBT02": {
          "lat": -3.664611,
          "lng": -45.388472
        },
        "MAEBT03": {
          "lat": -3.179444,
          "lng": -44.346111
        },
        "MAEBT04": {
          "lat": -4.222528,
          "lng": -44.790278
        },
        "MAEBT05": {
          "lat": -5.474167,
          "lng": -47.484444
        },
        "MAEBT06": {
          "lat": -3.346944444,
          "lng": -44.500833333
        },
        "MAEBT07": {
          "lat": -4.194722,
          "lng": -44.468333
        },
        "MAEBT08": {
          "lat": -4.916328,
          "lng": -47.413183
        },
        "MAEBT09": {
          "lat": -4.220944,
          "lng": -46.500278
        },
        "MAEBT10": {
          "lat": -4.952194444,
          "lng": -47.5
        },
        "MAEBT11": {
          "lat": -4.863611,
          "lng": -43.358333
        },
        "MAEBT12": {
          "lat": -4.072583,
          "lng": -44.47475
        },
        "MAEBT13": {
          "lat": -5.74531,
          "lng": -47.3645
        },
        "MAEBT14": {
          "lat": -2.75257,
          "lng": -45.7168
        },
        "MAEBT15": {
          "lat": -4.194361111,
          "lng": -44.468666667
        },
        "MAEBT16": {
          "lat": -7.5284061,
          "lng": -46.0395181
        },
        "MAEBT17": {
          "lat": -7.334004,
          "lng": -47.468726
        },
        "MAESS01": {
          "lat": -4.87887,
          "lng": -44.87973
        },
        "MAETO01": {
          "lat": -6.55944444444444,
          "lng": -47.4480555555556
        },
        "MAETO02": {
          "lat": -6.925575,
          "lng": -46.946235
        },
        "MAETO03": {
          "lat": -6.687236,
          "lng": -47.443048
        },
        "MAETO04": {
          "lat": -6.55167,
          "lng": -47.4325
        },
        "MAFNF01": {
          "lat": -6.149444,
          "lng": -44.902778
        },
        "MAFNF91": {
          "lat": -5.714819,
          "lng": -44.966011
        },
        "MAFRN01": {
          "lat": -6.961954,
          "lng": -46.688
        },
        "MAFRN90": {
          "lat": -7.11113,
          "lng": -46.52055
        },
        "MAFSM01": {
          "lat": -6.44249,
          "lng": -46.18987
        },
        "MAFSM90": {
          "lat": -6.7631,
          "lng": -46.13813
        },
        "MAFSM91": {
          "lat": -6.46552,
          "lng": -46.15373
        },
        "MAFUA01": {
          "lat": -5.739582,
          "lng": -44.151888
        },
        "MAFZG01": {
          "lat": -6.96325,
          "lng": -46.17758
        },
        "MAFZG90": {
          "lat": -7.02862,
          "lng": -46.076
        },
        "MAGEL01": {
          "lat": -5.729222,
          "lng": -47.165765
        },
        "MAGEL02": {
          "lat": -5.74811,
          "lng": -47.36311
        },
        "MAGEL03": {
          "lat": -5.6532,
          "lng": -47.39315
        },
        "MAGFV01": {
          "lat": -1.42034,
          "lng": -45.77344
        },
        "MAGFV02": {
          "lat": -1.27853,
          "lng": -45.76853
        },
        "MAGGB01": {
          "lat": -5.32384,
          "lng": -44.24198
        },
        "MAGGB90": {
          "lat": -5.369111,
          "lng": -44.208139
        },
        "MAGHR01": {
          "lat": -5.02099,
          "lng": -44.27433
        },
        "MAGHR02": {
          "lat": -5.023004,
          "lng": -44.272472
        },
        "MAGIM01": {
          "lat": -2.13307,
          "lng": -44.60384
        },
        "MAGJU01": {
          "lat": -5.824722,
          "lng": -46.153611
        },
        "MAGJU02": {
          "lat": -5.813167,
          "lng": -46.117778
        },
        "MAGJU03": {
          "lat": -5.74447,
          "lng": -45.98906
        },
        "MAGJU90": {
          "lat": -5.74441,
          "lng": -45.99416
        },
        "MAGJU91": {
          "lat": -5.62423,
          "lng": -45.736
        },
        "MAGJU92": {
          "lat": -5.44444,
          "lng": -45.82061
        },
        "MAGJU93": {
          "lat": -5.62533,
          "lng": -45.76357
        },
        "MAGNB01": {
          "lat": -3.431486,
          "lng": -46.075292
        },
        "MAGNB02": {
          "lat": -3.427525,
          "lng": -45.669303
        },
        "MAGNB03": {
          "lat": -3.41573,
          "lng": -46.12558
        },
        "MAGNF01": {
          "lat": -2.12638888888889,
          "lng": -45.8877777777778
        },
        "MAGNH01": {
          "lat": -5.408473,
          "lng": -44.334
        },
        "MAGNH02": {
          "lat": -5.40847,
          "lng": -44.334
        },
        "MAGPV01": {
          "lat": -5.36901,
          "lng": -45.6371
        },
        "MAGPV90": {
          "lat": -5.48518,
          "lng": -45.51584
        },
        "MAGSD01": {
          "lat": -5.15555,
          "lng": -44.29807
        },
        "MAGSD90": {
          "lat": -5.154,
          "lng": -44.298
        },
        "MAGUI90": {
          "lat": 0,
          "lng": 0
        },
        "MAGVL01": {
          "lat": -5.47102,
          "lng": -44.0733
        },
        "MAGVN02": {
          "lat": -3.42868,
          "lng": -45.66926
        },
        "MAHBC01": {
          "lat": -2.725833,
          "lng": -43.466389
        },
        "MAHCS01": {
          "lat": -2.599731,
          "lng": -43.46725
        },
        "MAICT01": {
          "lat": -2.675061,
          "lng": -43.956771
        },
        "MAICT02": {
          "lat": -2.77362,
          "lng": -44.05666
        },
        "MAICT03": {
          "lat": -2.807364,
          "lng": -43.817447
        },
        "MAICT04": {
          "lat": -2.56324,
          "lng": -43.77344
        },
        "MAIEM01": {
          "lat": -3.639049,
          "lng": -45.187856
        },
        "MAIGG01": {
          "lat": -4.58282,
          "lng": -44.85058
        },
        "MAIGG02": {
          "lat": -4.66286,
          "lng": -44.85391
        },
        "MAIMO01": {
          "lat": -3.639049,
          "lng": -45.187856
        },
        "MAIMP05": {
          "lat": -53.34379,
          "lng": -47.49115
        },
        "MAITB01": {
          "lat": -2.675461,
          "lng": -43.956991
        },
        "MAITH01": {
          "lat": -4.46527777777778,
          "lng": -47.5297222222222
        },
        "MAITH02": {
          "lat": -4.69986,
          "lng": -47.496273
        },
        "MAITI01": {
          "lat": -3.398333,
          "lng": -44.344722
        },
        "MAITI02": {
          "lat": -3.394722,
          "lng": -44.357778
        },
        "MAITI03": {
          "lat": -3.38619,
          "lng": -44.347056
        },
        "MAITI04": {
          "lat": -3.411417,
          "lng": -44.346611
        },
        "MAITI05": {
          "lat": -3.33542,
          "lng": -44.43839
        },
        "MAITI06": {
          "lat": -3.47845,
          "lng": -44.086
        },
        "MAITL01": {
          "lat": -2.553245,
          "lng": -44.225131
        },
        "MAITR01": {
          "lat": -2.675061,
          "lng": -43.957771
        },
        "MAITV01": {
          "lat": -5.14279,
          "lng": -45.7875
        },
        "MAITV90": {
          "lat": -5.239069,
          "lng": -45.924011
        },
        "MAITX01": {
          "lat": -5.526389,
          "lng": -47.489722
        },
        "MAITZ01": {
          "lat": -5.523333,
          "lng": -47.475278
        },
        "MAITZ02": {
          "lat": -5.50825,
          "lng": -47.4587
        },
        "MAITZ03": {
          "lat": -5.4825,
          "lng": -47.479722
        },
        "MAITZ04": {
          "lat": -5.566944,
          "lng": -47.446389
        },
        "MAITZ05": {
          "lat": -5.511389,
          "lng": -47.484167
        },
        "MAITZ06": {
          "lat": -5.53547,
          "lng": -47.47698
        },
        "MAITZ07": {
          "lat": -5.52366,
          "lng": -47.4893
        },
        "MAITZ08": {
          "lat": -5.49772,
          "lng": -47.4857
        },
        "MAITZ09": {
          "lat": -5.52352,
          "lng": -47.4894
        },
        "MAITZ10": {
          "lat": -5.522783,
          "lng": -47.488094
        },
        "MAITZ11": {
          "lat": -5.290819,
          "lng": -47.551365
        },
        "MAITZ12": {
          "lat": -5.505433,
          "lng": -47.468925
        },
        "MAITZ13": {
          "lat": -5.54122,
          "lng": -47.45084
        },
        "MAITZ14": {
          "lat": -5.53421,
          "lng": -47.4389
        },
        "MAITZ15": {
          "lat": -5.522905,
          "lng": -47.456932
        },
        "MAITZ16": {
          "lat": -5.49568,
          "lng": -47.49051
        },
        "MAITZ17": {
          "lat": -5.493705,
          "lng": -47.465375
        },
        "MAITZ18": {
          "lat": -5.488633,
          "lng": -47.441513
        },
        "MAITZ19": {
          "lat": -5.482417,
          "lng": -47.505722
        },
        "MAITZ20": {
          "lat": -5.451028,
          "lng": -47.472111
        },
        "MAITZ21": {
          "lat": -5.550083,
          "lng": -47.472222
        },
        "MAITZ22": {
          "lat": -5.55285,
          "lng": -47.455427
        },
        "MAITZ23": {
          "lat": -5.517876,
          "lng": -47.463487
        },
        "MAITZ24": {
          "lat": -5.53769,
          "lng": -47.4835416666666
        },
        "MAITZ25": {
          "lat": -5.503861,
          "lng": -47.431944
        },
        "MAITZ26": {
          "lat": -5.472497,
          "lng": -47.472662
        },
        "MAITZ27": {
          "lat": -5.514331,
          "lng": -47.467408
        },
        "MAITZ28": {
          "lat": -5.49112915447191,
          "lng": -47.4633131280281
        },
        "MAITZ29": {
          "lat": -5.44998,
          "lng": -47.47578
        },
        "MAITZ30": {
          "lat": -5.48869,
          "lng": -47.42903
        },
        "MAITZ31": {
          "lat": -5.52063,
          "lng": -47.480314
        },
        "MAITZ32": {
          "lat": -5.53801,
          "lng": -47.48343
        },
        "MAITZ33": {
          "lat": -5.515194,
          "lng": -47.432667
        },
        "MAITZ34": {
          "lat": -5.47,
          "lng": -47.419944
        },
        "MAITZ35": {
          "lat": -5.549,
          "lng": -47.48
        },
        "MAITZ36": {
          "lat": -5.499,
          "lng": -47.479
        },
        "MAITZ37": {
          "lat": -5.505,
          "lng": -47.496
        },
        "MAITZ38": {
          "lat": -5.541,
          "lng": -47.468
        },
        "MAITZ39": {
          "lat": -5.5356,
          "lng": -47.4902
        },
        "MAITZ50": {
          "lat": -5.520488,
          "lng": -47.472228
        },
        "MAITZ99": {
          "lat": -5.53,
          "lng": -47.48
        },
        "MAITZI1": {
          "lat": -5.529284,
          "lng": -47.469833
        },
        "MAITZI2": {
          "lat": -2.508621,
          "lng": -44.298783
        },
        "MAJEL01": {
          "lat": -4.981667,
          "lng": -44.692583
        },
        "MAJLI01": {
          "lat": -5.451167,
          "lng": -47.404511
        },
        "MAJLI02": {
          "lat": -5.45361,
          "lng": -47.410599
        },
        "MAJLI03": {
          "lat": -5.31258,
          "lng": -47.16134
        },
        "MAJNK01": {
          "lat": -1.87714,
          "lng": -46.06984
        },
        "MAJNK1E": {
          "lat": -1.881389,
          "lng": -46.065833
        },
        "MAJOB01": {
          "lat": -5.857778,
          "lng": -44.315
        },
        "MAJOT01": {
          "lat": -5.82223,
          "lng": -44.22293
        },
        "MALAM01": {
          "lat": -6.04863,
          "lng": -43.52485
        },
        "MALAM90": {
          "lat": -5.9804,
          "lng": -43.549
        },
        "MALAR01": {
          "lat": -4.61388,
          "lng": -44.9796
        },
        "MALDS01": {
          "lat": -1.33346,
          "lng": -45.89788
        },
        "MALDS02": {
          "lat": -1.52202,
          "lng": -46.01024
        },
        "MALGJ01": {
          "lat": -4.60448,
          "lng": -45.050274
        },
        "MALGM01": {
          "lat": -4.991694,
          "lng": -45.387722
        },
        "MALGM02": {
          "lat": -4.83831,
          "lng": -45.44804
        },
        "MALGP01": {
          "lat": -4.56777777777778,
          "lng": -45.1311111111111
        },
        "MALGP02": {
          "lat": -4.83522,
          "lng": -45.09063
        },
        "MALGP03": {
          "lat": -4.56786,
          "lng": -45.1313
        },
        "MALGP04": {
          "lat": -4.57529,
          "lng": -45.122652
        },
        "MALGV01": {
          "lat": -4.04219,
          "lng": -44.93643
        },
        "MALMS01": {
          "lat": -4.51683,
          "lng": -44.46448
        },
        "MALNV01": {
          "lat": -6.18611111111111,
          "lng": -47.0355555555556
        },
        "MALNV02": {
          "lat": -6.12833,
          "lng": -46.68361
        },
        "MALOT01": {
          "lat": -7.085556,
          "lng": -45.139447
        },
        "MALOT02": {
          "lat": -6.897852,
          "lng": -45.286418
        },
        "MALSL01": {
          "lat": 0,
          "lng": 0
        },
        "MALSL02": {
          "lat": -2.527771,
          "lng": -44.293447
        },
        "MALSL03": {
          "lat": -2.530691,
          "lng": -44.296927
        },
        "MALWG90": {
          "lat": -5.05905,
          "lng": -45.291369
        },
        "MALWG91": {
          "lat": -5.0467,
          "lng": -45.10627
        },
        "MAMCE01": {
          "lat": -2.05276,
          "lng": -45.96146
        },
        "MAMCE02": {
          "lat": -2.04531,
          "lng": -45.96513
        },
        "MAMDR01": {
          "lat": -6.37462,
          "lng": -44.363249
        },
        "MAMDR02": {
          "lat": -6.43259,
          "lng": -44.60086
        },
        "MAMHA01": {
          "lat": -3.393635,
          "lng": -42.20474
        },
        "MAMHZ01": {
          "lat": -2.245528,
          "lng": -45.859139
        },
        "MAMIR01": {
          "lat": -3.566389,
          "lng": -44.585556
        },
        "MAMIR90": {
          "lat": -3.52127,
          "lng": -44.5477
        },
        "MAMJS01": {
          "lat": -4.620291,
          "lng": -45.453562
        },
        "MAMJS02": {
          "lat": -4.7431,
          "lng": -45.619
        },
        "MAMJS90": {
          "lat": -4.59497,
          "lng": -45.43657
        },
        "MAMLM01": {
          "lat": -3.582667,
          "lng": -42.607556
        },
        "MAMMA01": {
          "lat": -3.620556,
          "lng": -43.113889
        },
        "MAMNA01": {
          "lat": -3.4917,
          "lng": -45.25027
        },
        "MAMNL01": {
          "lat": -5.83222222222222,
          "lng": -47.07
        },
        "MAMNL02": {
          "lat": -5.88468,
          "lng": -46.92921
        },
        "MAMRX01": {
          "lat": -2.85811,
          "lng": -44.036403
        },
        "MAMRZ01": {
          "lat": -1.967699,
          "lng": -44.804766
        },
        "MAMRZ02": {
          "lat": -2.06761,
          "lng": -44.78403
        },
        "MAMTA01": {
          "lat": -3.1011,
          "lng": -45.03314
        },
        "MAMTE01": {
          "lat": -5.395651,
          "lng": -43.233606
        },
        "MAMTE02": {
          "lat": -5.51835,
          "lng": -43.21077
        },
        "MAMTE03": {
          "lat": -5.536111,
          "lng": -43.199639
        },
        "MAMTE04": {
          "lat": -5.542397,
          "lng": -43.20888
        },
        "MAMTEU1": {
          "lat": -5.57072814378387,
          "lng": -43.18564986348358
        },
        "MAMTS01": {
          "lat": -3.621299,
          "lng": -44.557521
        },
        "MAMZH01": {
          "lat": -2.24554,
          "lng": -45.859136
        },
        "MANIQ01": {
          "lat": -6.737167,
          "lng": -44.04825
        },
        "MANIQ02": {
          "lat": -6.7332,
          "lng": -44.048445
        },
        "MANMH01": {
          "lat": -2.806631,
          "lng": -45.702217
        },
        "MANNR01": {
          "lat": -3.46508,
          "lng": -43.908386
        },
        "MANVC01": {
          "lat": -7.11685,
          "lng": -46.26059
        },
        "MANVC90": {
          "lat": -7.30548,
          "lng": -46.03898
        },
        "MANVC91": {
          "lat": -7.1733,
          "lng": -46.0995
        },
        "MANVM01": {
          "lat": -2.80686,
          "lng": -45.70242
        },
        "MANVM02": {
          "lat": -2.80301,
          "lng": -45.69826
        },
        "MAOCN01": {
          "lat": -4.13915,
          "lng": -45.12117
        },
        "MAOIF02": {
          "lat": -5.507358,
          "lng": -47.491037
        },
        "MAOIM01": {
          "lat": -2.532146,
          "lng": -44.293313
        },
        "MAOLN01": {
          "lat": -2.99692,
          "lng": -44.99141
        },
        "MAOLN02": {
          "lat": -2.973074,
          "lng": -44.992905
        },
        "MAOLN03": {
          "lat": -3.00583,
          "lng": -44.98373
        },
        "MAOLN04": {
          "lat": -2.99167,
          "lng": -45.00321
        },
        "MAPAN01": {
          "lat": -2.722778,
          "lng": -42.538889
        },
        "MAPAO01": {
          "lat": -4.7491,
          "lng": -44.94293
        },
        "MAPAO02": {
          "lat": -4.79163,
          "lng": -44.90396
        },
        "MAPAR01": {
          "lat": -6.46264,
          "lng": -47.05392
        },
        "MAPBO01": {
          "lat": -6.433404,
          "lng": -43.982753
        },
        "MAPDE01": {
          "lat": -4.57285,
          "lng": -44.59649
        },
        "MAPDE02": {
          "lat": -4.57261,
          "lng": -44.61151
        },
        "MAPDL01": {
          "lat": -2.533889,
          "lng": -44.121944
        },
        "MAPDL02": {
          "lat": -2.5474,
          "lng": -44.16884
        },
        "MAPDL03": {
          "lat": -2.5199,
          "lng": -44.1741
        },
        "MAPDL04": {
          "lat": -2.53403,
          "lng": -44.16209
        },
        "MAPDL05": {
          "lat": -2.561389,
          "lng": -44.169722
        },
        "MAPDL06": {
          "lat": -2.49214,
          "lng": -44.16295
        },
        "MAPDL07": {
          "lat": -2.497332,
          "lng": -44.100965
        },
        "MAPDL08": {
          "lat": -2.530003,
          "lng": -44.171117
        },
        "MAPDL09": {
          "lat": -2.54135,
          "lng": -44.14989
        },
        "MAPDL10": {
          "lat": -2.52185,
          "lng": -44.107744
        },
        "MAPDL11": {
          "lat": -2.49214,
          "lng": -44.16295
        },
        "MAPDL12": {
          "lat": -2.530169,
          "lng": -44.144981
        },
        "MAPDL13": {
          "lat": -2.53959,
          "lng": -44.182
        },
        "MAPDL14": {
          "lat": -2.470741,
          "lng": -44.119736
        },
        "MAPDL15": {
          "lat": -2.48384,
          "lng": -44.14073
        },
        "MAPDL16": {
          "lat": -2.49628,
          "lng": -44.09965
        },
        "MAPDL17": {
          "lat": -2.50991,
          "lng": -44.15835
        },
        "MAPDL18": {
          "lat": -2.522808,
          "lng": -44.143759
        },
        "MAPDL19": {
          "lat": -2.509487,
          "lng": -44.158799
        },
        "MAPDL20": {
          "lat": -2.490931,
          "lng": -44.168267
        },
        "MAPDM01": {
          "lat": -3.7,
          "lng": -45.435833
        },
        "MAPDM02": {
          "lat": -3.60917,
          "lng": -45.343102
        },
        "MAPDM03": {
          "lat": -3.614444,
          "lng": -45.339444
        },
        "MAPDM04": {
          "lat": -3.614444,
          "lng": -45.339722
        },
        "MAPDU01": {
          "lat": -5.2975,
          "lng": -44.4875
        },
        "MAPDU02": {
          "lat": -5.28426,
          "lng": -44.50022
        },
        "MAPDU03": {
          "lat": -5.30789,
          "lng": -44.49149
        },
        "MAPDZ01": {
          "lat": -4.57389,
          "lng": -44.602501
        },
        "MAPDZ02": {
          "lat": -4.581155,
          "lng": -44.588724
        },
        "MAPDZ03": {
          "lat": -4.569679,
          "lng": -44.616388
        },
        "MAPED01": {
          "lat": -2.37833333333333,
          "lng": -45.8205555555556
        },
        "MAPEM01": {
          "lat": -2.575736,
          "lng": -44.864047
        },
        "MAPEM02": {
          "lat": -2.57827,
          "lng": -44.85727
        },
        "MAPER01": {
          "lat": -4.456909,
          "lng": -44.371911
        },
        "MAPER02": {
          "lat": -4.367252,
          "lng": -44.330612
        },
        "MAPER03": {
          "lat": -4.474946,
          "lng": -44.163112
        },
        "MAPER04": {
          "lat": -4.37349,
          "lng": -44.34008
        },
        "MAPER05": {
          "lat": -4.44728,
          "lng": -44.37908
        },
        "MAPFC01": {
          "lat": -6.17666666666667,
          "lng": -43.7736111111111
        },
        "MAPFC02": {
          "lat": -6.18093,
          "lng": -43.78446
        },
        "MAPFC90": {
          "lat": -6.30946,
          "lng": -43.77813
        },
        "MAPFN01": {
          "lat": -6.345871,
          "lng": -47.3951
        },
        "MAPFN02": {
          "lat": -6.486595,
          "lng": -47.214046
        },
        "MAPFN90": {
          "lat": -6.36266,
          "lng": -47.20537
        },
        "MAPHE01": {
          "lat": -2.5225,
          "lng": -45.080556
        },
        "MAPHE02": {
          "lat": -2.678632,
          "lng": -45.181801
        },
        "MAPHE03": {
          "lat": -2.532547,
          "lng": -45.097975
        },
        "MAPHE04": {
          "lat": -2.52889,
          "lng": -45.090998
        },
        "MAPJN01": {
          "lat": -2.926399,
          "lng": -44.06581
        },
        "MAPLV01": {
          "lat": -3.29181,
          "lng": -45.17313
        },
        "MAPMR01": {
          "lat": -2.6447,
          "lng": -44.89542
        },
        "MAPNV01": {
          "lat": -3.294167,
          "lng": -45.173611
        },
        "MAPOR01": {
          "lat": -2.968056,
          "lng": -45.345
        },
        "MAPOR02": {
          "lat": -3.04615,
          "lng": -45.4482
        },
        "MAPOR03": {
          "lat": -2.81497,
          "lng": -45.31528
        },
        "MAPRM01": {
          "lat": -5.68499,
          "lng": -43.0999
        },
        "MAPRM02": {
          "lat": -5.682778,
          "lng": -43.093694
        },
        "MAPRM03": {
          "lat": -5.689447,
          "lng": -43.112689
        },
        "MAPRM04": {
          "lat": -5.386685,
          "lng": -43.827017
        },
        "MAPRM05": {
          "lat": -5.6254,
          "lng": -43.326959
        },
        "MAPRM06": {
          "lat": -5.760146,
          "lng": -43.300261
        },
        "MAPRM07": {
          "lat": -5.88998,
          "lng": -43.29417
        },
        "MAPRP01": {
          "lat": -3.74778,
          "lng": -44.217278
        },
        "MAPRP02": {
          "lat": -3.72825,
          "lng": -44.22791
        },
        "MAPSE01": {
          "lat": -2.5899,
          "lng": -45.36399
        },
        "MAPSE91": {
          "lat": -2.58016,
          "lng": -45.258
        },
        "MAPSN01": {
          "lat": -6.59835,
          "lng": -44.08165
        },
        "MAPSN02": {
          "lat": -6.61736,
          "lng": -44.25064
        },
        "MAPTR01": {
          "lat": -1.860907,
          "lng": -44.590083
        },
        "MAPUR01": {
          "lat": -4.537743,
          "lng": -45.388995
        },
        "MAPUR02": {
          "lat": -4.578891,
          "lng": -45.592783
        },
        "MAPUR03": {
          "lat": -4.448194,
          "lng": -45.238583
        },
        "MAPUZ01": {
          "lat": -2.5133,
          "lng": -43.43847
        },
        "MAPVS01": {
          "lat": -3.407803,
          "lng": -44.023666
        },
        "MAPXY01": {
          "lat": -3.89328,
          "lng": -45.16219
        },
        "MARBF01": {
          "lat": -5.933035,
          "lng": -47.389029
        },
        "MARFQ01": {
          "lat": -5.932338,
          "lng": -47.388583
        },
        "MARIH01": {
          "lat": -7.360417,
          "lng": -46.619028
        },
        "MARIH02": {
          "lat": -7.3605,
          "lng": -46.6191
        },
        "MARIH03": {
          "lat": -7.223338,
          "lng": -46.451945
        },
        "MARIH04": {
          "lat": -7.4095,
          "lng": -46.371
        },
        "MARIH90": {
          "lat": -7.44645,
          "lng": -46.325252
        },
        "MARPO01": {
          "lat": -2.425778,
          "lng": -44.1009
        },
        "MARPO02": {
          "lat": -2.446,
          "lng": -44.1021
        },
        "MARPO03": {
          "lat": -2.47005,
          "lng": -44.16663
        },
        "MARPO04": {
          "lat": -2.44288,
          "lng": -44.1129
        },
        "MARPO05": {
          "lat": -2.44875,
          "lng": -44.13321
        },
        "MARPT1E": {
          "lat": -4.72353,
          "lng": -43.73308
        },
        "MARSI01": {
          "lat": -2.94344,
          "lng": -44.24974
        },
        "MARSI02": {
          "lat": -2.938889,
          "lng": -44.238889
        },
        "MARSI03": {
          "lat": -2.932583,
          "lng": -44.246806
        },
        "MASAA01": {
          "lat": -2.500408,
          "lng": -43.253919
        },
        "MASAM01": {
          "lat": -2.500331,
          "lng": -43.25385
        },
        "MASAR01": {
          "lat": -6.41787,
          "lng": -43.54177
        },
        "MASBP01": {
          "lat": -3.261008,
          "lng": -43.724263
        },
        "MASBP02": {
          "lat": -3.34066,
          "lng": -43.53572
        },
        "MASBP90": {
          "lat": -3.51397,
          "lng": -43.60691
        },
        "MASBW01": {
          "lat": -3.368211,
          "lng": -42.420562
        },
        "MASBW02": {
          "lat": -3.36723,
          "lng": -42.42121
        },
        "MASCF01": {
          "lat": -2.89059,
          "lng": -44.87786
        },
        "MASDB01": {
          "lat": -7.084028,
          "lng": -44.815417
        },
        "MASDH01": {
          "lat": -5.58278,
          "lng": -44.3806
        },
        "MASDH02": {
          "lat": -5.58819,
          "lng": -44.37975
        },
        "MASDH03": {
          "lat": -5.732559,
          "lng": -44.546771
        },
        "MASDH04": {
          "lat": -5.582611,
          "lng": -44.380528
        },
        "MASDH05": {
          "lat": -5.579083,
          "lng": -44.386469
        },
        "MASDH90": {
          "lat": -5.436996,
          "lng": -44.562186
        },
        "MASDH91": {
          "lat": -5.58,
          "lng": -44.374444
        },
        "MASDM01": {
          "lat": -6.56845,
          "lng": -43.453337
        },
        "MASDM02": {
          "lat": -6.42,
          "lng": -43.54
        },
        "MASDZ01": {
          "lat": -6.8195,
          "lng": -44.65377
        },
        "MASDZ02": {
          "lat": -6.8174,
          "lng": -44.5194
        },
        "MASDZ90": {
          "lat": -6.86416,
          "lng": -44.818
        },
        "MASEN01": {
          "lat": -5.25945,
          "lng": -44.05538
        },
        "MASEN90": {
          "lat": -5.206049,
          "lng": -43.985775
        },
        "MASEO01": {
          "lat": -2.702956,
          "lng": -44.836625
        },
        "MASEO02": {
          "lat": -2.85602,
          "lng": -45.081529
        },
        "MASEO03": {
          "lat": -2.7022,
          "lng": -44.8277
        },
        "MASFB01": {
          "lat": -7.09347,
          "lng": -44.81936
        },
        "MASFB02": {
          "lat": -5.125554,
          "lng": -47.390532
        },
        "MASFB03": {
          "lat": -5.09322,
          "lng": -47.26296
        },
        "MASFB04": {
          "lat": -5.2408,
          "lng": -47.20985
        },
        "MASFB05": {
          "lat": -5.12092,
          "lng": -47.54758
        },
        "MASFD01": {
          "lat": -5.49515,
          "lng": -44.55603
        },
        "MASFM01": {
          "lat": -6.42271,
          "lng": -42.88051
        },
        "MASFM02": {
          "lat": -6.356158,
          "lng": -43.080943
        },
        "MASFM03": {
          "lat": -6.17496,
          "lng": -43.10595
        },
        "MASFM04": {
          "lat": -6.248785,
          "lng": -42.858038
        },
        "MASFR02": {
          "lat": -5.121956,
          "lng": -47.387489
        },
        "MASFR90": {
          "lat": -5.01518,
          "lng": -47.40733
        },
        "MASHE01": {
          "lat": -2.232611,
          "lng": -45.306167
        },
        "MASHE02": {
          "lat": -2.1554,
          "lng": -45.01655
        },
        "MASHE03": {
          "lat": -2.239444,
          "lng": -45.306139
        },
        "MASHE04": {
          "lat": -2.23258,
          "lng": -45.3061
        },
        "MASHE90": {
          "lat": -2.30697,
          "lng": -45.27124
        },
        "MASIL01": {
          "lat": -4.87015,
          "lng": -44.3603
        },
        "MASIL02": {
          "lat": -4.85047,
          "lng": -44.63653
        },
        "MASIL03": {
          "lat": -4.848257,
          "lng": -44.639546
        },
        "MASIS01": {
          "lat": -3.6575,
          "lng": -45.378889
        },
        "MASIS02": {
          "lat": -3.67349,
          "lng": -45.39032
        },
        "MASIS03": {
          "lat": -3.672633,
          "lng": -45.3669
        },
        "MASIS04": {
          "lat": -3.662,
          "lng": -45.3936
        },
        "MASIS05": {
          "lat": -3.6594,
          "lng": -45.3853
        },
        "MASIS06": {
          "lat": -3.668,
          "lng": -45.3808
        },
        "MASJB01": {
          "lat": -5.043611,
          "lng": -44.586667
        },
        "MASJB90": {
          "lat": -5.108306,
          "lng": -44.5425
        },
        "MASJC01": {
          "lat": -3.55558,
          "lng": -46.25639
        },
        "MASJC02": {
          "lat": -3.57015,
          "lng": -46.374
        },
        "MASJC90": {
          "lat": -3.567675,
          "lng": -46.025208
        },
        "MASJE01": {
          "lat": -2.554722,
          "lng": -44.056944
        },
        "MASJE02": {
          "lat": -2.47139,
          "lng": -44.2031
        },
        "MASJE03": {
          "lat": -2.57214,
          "lng": -44.1829
        },
        "MASJE04": {
          "lat": -2.56506,
          "lng": -44.19268
        },
        "MASJE05": {
          "lat": -2.495083,
          "lng": -44.19
        },
        "MASJE06": {
          "lat": -2.517548,
          "lng": -44.207763
        },
        "MASJE07": {
          "lat": -2.49194444444444,
          "lng": -44.0369444444444
        },
        "MASJE08": {
          "lat": -2.546025,
          "lng": -44.083217
        },
        "MASJE09": {
          "lat": -2.507956,
          "lng": -44.190105
        },
        "MASJE10": {
          "lat": -2.544985,
          "lng": -44.069506
        },
        "MASJE11": {
          "lat": -2.47139,
          "lng": -44.2031
        },
        "MASJE12": {
          "lat": -2.519504,
          "lng": -44.04681
        },
        "MASJE13": {
          "lat": -2.515233,
          "lng": -44.042515
        },
        "MASJE14": {
          "lat": -2.562028,
          "lng": -44.096361
        },
        "MASJE15": {
          "lat": -2.545327,
          "lng": -44.070775
        },
        "MASJE16": {
          "lat": -2.546944,
          "lng": -44.0825
        },
        "MASJE17": {
          "lat": -2.57361,
          "lng": -44.14875
        },
        "MASJE18": {
          "lat": -2.51497,
          "lng": -44.03137
        },
        "MASJO01": {
          "lat": -5.112778,
          "lng": -43.811389
        },
        "MASJO02": {
          "lat": -4.995699,
          "lng": -43.591545
        },
        "MASJO03": {
          "lat": -4.89354,
          "lng": -43.74309
        },
        "MASJY01": {
          "lat": -2.95703,
          "lng": -44.7979
        },
        "MASJY02": {
          "lat": -2.954258,
          "lng": -44.810822
        },
        "MASKB01": {
          "lat": -7.134472,
          "lng": -45.348111
        },
        "MASLI01": {
          "lat": -2.691472,
          "lng": -44.306278
        },
        "MASLI02": {
          "lat": -2.50347,
          "lng": -44.293359
        },
        "MASLI03": {
          "lat": -2.508624,
          "lng": -44.298428
        },
        "MASLI04": {
          "lat": -2.503379,
          "lng": -44.293528
        },
        "MASLI05": {
          "lat": -2.58453,
          "lng": -44.33898
        },
        "MASLI15": {
          "lat": -2.49395,
          "lng": -44.256499
        },
        "MASLR01": {
          "lat": -5.36166,
          "lng": -47.12081
        },
        "MASLR02": {
          "lat": -5.4444,
          "lng": -47.28889
        },
        "MASLS01": {
          "lat": -2.573889,
          "lng": -44.242222
        },
        "MASLS02": {
          "lat": -2.567794,
          "lng": -44.227222
        },
        "MASLS02_001": {
          "lat": -2.559847,
          "lng": -44.225237
        },
        "MASLS03": {
          "lat": -2.600743,
          "lng": -44.226634
        },
        "MASLS04": {
          "lat": -2.598277,
          "lng": -44.19852
        },
        "MASLS05": {
          "lat": -2.57791,
          "lng": -44.19759
        },
        "MASLS06": {
          "lat": -2.4975,
          "lng": -44.3083333333333
        },
        "MASLS06_001": {
          "lat": -2.49945,
          "lng": -44.3122
        },
        "MASLS06_002": {
          "lat": -2.499735,
          "lng": -44.311863
        },
        "MASLS06_003": {
          "lat": -2.499464,
          "lng": -44.312158
        },
        "MASLS07": {
          "lat": -2.659444,
          "lng": -44.286111
        },
        "MASLS08": {
          "lat": -2.559722,
          "lng": -44.203611
        },
        "MASLS09": {
          "lat": -2.55218,
          "lng": -44.2205
        },
        "MASLS10": {
          "lat": -2.552322,
          "lng": -44.187944
        },
        "MASLS10_001": {
          "lat": -2.55137,
          "lng": -44.192047
        },
        "MASLS11": {
          "lat": -2.554933,
          "lng": -44.2398
        },
        "MASLS11_001": {
          "lat": -2.558,
          "lng": -44.246
        },
        "MASLS12": {
          "lat": -2.56107,
          "lng": -44.27449
        },
        "MASLS13": {
          "lat": -2.545278,
          "lng": -44.283056
        },
        "MASLS14": {
          "lat": -2.54527,
          "lng": -44.26788
        },
        "MASLS15": {
          "lat": -2.55416666666667,
          "lng": -44.2575
        },
        "MASLS16": {
          "lat": -2.53355,
          "lng": -44.279
        },
        "MASLS17": {
          "lat": -2.5306,
          "lng": -44.294
        },
        "MASLS18": {
          "lat": -2.544444,
          "lng": -44.2525
        },
        "MASLS19": {
          "lat": -2.53073,
          "lng": -44.2521
        },
        "MASLS20": {
          "lat": -2.540833,
          "lng": -44.239167
        },
        "MASLS21": {
          "lat": -2.534683,
          "lng": -44.227003
        },
        "MASLS22": {
          "lat": -2.543346,
          "lng": -44.209979
        },
        "MASLS23": {
          "lat": -2.535,
          "lng": -44.195278
        },
        "MASLS24": {
          "lat": -2.522098,
          "lng": -44.22656
        },
        "MASLS25": {
          "lat": -2.52831,
          "lng": -44.30336
        },
        "MASLS26": {
          "lat": -2.508743,
          "lng": -44.298975
        },
        "MASLS27": {
          "lat": -2.50904,
          "lng": -44.286864
        },
        "MASLS28": {
          "lat": -2.51583333333333,
          "lng": -44.2588888888889
        },
        "MASLS29": {
          "lat": -2.517303,
          "lng": -44.241255
        },
        "MASLS30": {
          "lat": -2.505322,
          "lng": -44.243247
        },
        "MASLS31": {
          "lat": -2.510833,
          "lng": -44.225645
        },
        "MASLS32": {
          "lat": -2.487778,
          "lng": -44.298889
        },
        "MASLS33": {
          "lat": -2.497332,
          "lng": -44.288526
        },
        "MASLS33_001": {
          "lat": -2.501634,
          "lng": -44.288562
        },
        "MASLS34": {
          "lat": -2.49388888888889,
          "lng": -44.2802777777778
        },
        "MASLS35": {
          "lat": -2.505506,
          "lng": -44.267258
        },
        "MASLS36": {
          "lat": -2.48363,
          "lng": -44.2586
        },
        "MASLS36_001": {
          "lat": -2.483656,
          "lng": -44.249805
        },
        "MASLS36_002": {
          "lat": -2.48218,
          "lng": -44.2434
        },
        "MASLS36_003": {
          "lat": -2.483656,
          "lng": -44.249805
        },
        "MASLS36_004": {
          "lat": -2.483704,
          "lng": -44.254386
        },
        "MASLS37": {
          "lat": -2.486709,
          "lng": -44.24434
        },
        "MASLS37_001": {
          "lat": -2.483563,
          "lng": -44.248351
        },
        "MASLS37_002": {
          "lat": -2.482033,
          "lng": -44.243053
        },
        "MASLS38": {
          "lat": -2.497237,
          "lng": -44.227978
        },
        "MASLS39": {
          "lat": -2.486944,
          "lng": -44.22
        },
        "MASLS40": {
          "lat": -2.59515,
          "lng": -44.24955
        },
        "MASLS41": {
          "lat": -2.636278,
          "lng": -44.268833
        },
        "MASLS42": {
          "lat": -2.564457,
          "lng": -44.312316
        },
        "MASLS43": {
          "lat": -2.559338,
          "lng": -44.3297
        },
        "MASLS44": {
          "lat": -2.554297,
          "lng": -44.348929
        },
        "MASLS45": {
          "lat": -2.57416666666667,
          "lng": -44.3655555555556
        },
        "MASLS46": {
          "lat": -2.54178,
          "lng": -44.29795
        },
        "MASLS47": {
          "lat": -2.733667,
          "lng": -44.333556
        },
        "MASLS48": {
          "lat": -2.70952,
          "lng": -44.31681
        },
        "MASLS49": {
          "lat": -2.615377,
          "lng": -44.320648
        },
        "MASLS50": {
          "lat": -2.540078,
          "lng": -44.290238
        },
        "MASLS51": {
          "lat": -2.591667,
          "lng": -44.185536
        },
        "MASLS52": {
          "lat": -2.549647,
          "lng": -44.247334
        },
        "MASLS53": {
          "lat": -2.489972,
          "lng": -44.210528
        },
        "MASLS53_001": {
          "lat": -2.5033611,
          "lng": -44.209
        },
        "MASLS54": {
          "lat": -2.532529,
          "lng": -44.209283
        },
        "MASLS55": {
          "lat": -2.534847,
          "lng": -44.228749
        },
        "MASLS56": {
          "lat": -2.554561,
          "lng": -44.264845
        },
        "MASLS57": {
          "lat": -2.571510925331512,
          "lng": -44.24267489944152
        },
        "MASLS58": {
          "lat": -2.514814,
          "lng": -44.218647
        },
        "MASLS59": {
          "lat": -2.516751,
          "lng": -44.300255
        },
        "MASLS60": {
          "lat": -2.530621,
          "lng": -44.298501
        },
        "MASLS61": {
          "lat": -2.572707,
          "lng": -44.211458
        },
        "MASLS62": {
          "lat": -2.559338,
          "lng": -44.3297
        },
        "MASLS63": {
          "lat": -2.503276,
          "lng": -44.233285
        },
        "MASLS64": {
          "lat": -2.528777,
          "lng": -44.258585
        },
        "MASLS65": {
          "lat": -2.563917,
          "lng": -44.236278
        },
        "MASLS66": {
          "lat": -2.568484,
          "lng": -44.194178
        },
        "MASLS67": {
          "lat": -2.561687,
          "lng": -44.217783
        },
        "MASLS68": {
          "lat": -2.542165585024513,
          "lng": -44.23944381661701
        },
        "MASLS69": {
          "lat": -2.559272,
          "lng": -44.279157
        },
        "MASLS70": {
          "lat": -2.544667,
          "lng": -44.293415
        },
        "MASLS71": {
          "lat": -2.539678,
          "lng": -44.282995
        },
        "MASLS72": {
          "lat": -2.5297,
          "lng": -44.28526
        },
        "MASLS73": {
          "lat": -2.541944,
          "lng": -44.231944
        },
        "MASLS74": {
          "lat": -2.494246,
          "lng": -44.25584
        },
        "MASLS75": {
          "lat": -2.54375,
          "lng": -44.199183
        },
        "MASLS76": {
          "lat": -2.52546,
          "lng": -44.18982
        },
        "MASLS77": {
          "lat": -2.517751,
          "lng": -44.231686
        },
        "MASLS78": {
          "lat": -2.521342,
          "lng": -44.248499
        },
        "MASLS79": {
          "lat": -2.510965,
          "lng": -44.235296
        },
        "MASLS80": {
          "lat": -2.558296,
          "lng": -44.306727
        },
        "MASLS81": {
          "lat": -2.545968,
          "lng": -44.329983
        },
        "MASLS82": {
          "lat": -2.535385,
          "lng": -44.286275
        },
        "MASLS83": {
          "lat": -2.543282,
          "lng": -44.260972
        },
        "MASLS84": {
          "lat": -2.528412,
          "lng": -44.226542
        },
        "MASLS85": {
          "lat": -2.50213,
          "lng": -44.25254
        },
        "MASLS86": {
          "lat": -2.60697,
          "lng": -44.18204
        },
        "MASLS87": {
          "lat": -2.54648,
          "lng": -44.31406
        },
        "MASLS88": {
          "lat": -2.50455,
          "lng": -44.31583
        },
        "MASLS89": {
          "lat": -2.519812,
          "lng": -44.246718
        },
        "MASLS90": {
          "lat": -2.53936,
          "lng": -44.269624
        },
        "MASLS91": {
          "lat": -2.61722,
          "lng": -44.2535
        },
        "MASLS92": {
          "lat": -2.52974,
          "lng": -44.23837
        },
        "MASLS93": {
          "lat": -2.511836,
          "lng": -44.236418
        },
        "MASLS94": {
          "lat": -2.567977,
          "lng": -44.311373
        },
        "MASLS95": {
          "lat": -2.75454,
          "lng": -44.349434
        },
        "MASLS96": {
          "lat": -2.55479,
          "lng": -44.23284
        },
        "MASLS97": {
          "lat": -2.60139,
          "lng": -44.308
        },
        "MASLS98": {
          "lat": -2.530624,
          "lng": -44.256749
        },
        "MASLS99": {
          "lat": -2.530861,
          "lng": -44.299061
        },
        "MASLS99_001": {
          "lat": -2.5306,
          "lng": -44.294
        },
        "MASLS99_002": {
          "lat": -2.530678,
          "lng": -44.300645
        },
        "MASLSA0": {
          "lat": -2.642353,
          "lng": -44.302745
        },
        "MASLSA1": {
          "lat": -2.510568,
          "lng": -44.243204
        },
        "MASLSA2": {
          "lat": -2.545701,
          "lng": -44.312529
        },
        "MASLSA3": {
          "lat": -2.58232,
          "lng": -44.178
        },
        "MASLSA4": {
          "lat": -2.66989,
          "lng": -44.296898
        },
        "MASLSA5": {
          "lat": -2.48406,
          "lng": -44.22723
        },
        "MASLSA6": {
          "lat": -2.592,
          "lng": -44.21761
        },
        "MASLSA7": {
          "lat": -2.509583,
          "lng": -44.190667
        },
        "MASLSA8": {
          "lat": -2.478508,
          "lng": -44.189225
        },
        "MASLSA9": {
          "lat": -2.57094549817055,
          "lng": -44.1519988877864
        },
        "MASLSB0": {
          "lat": -2.57232,
          "lng": -44.296399
        },
        "MASLSB1": {
          "lat": -2.453003,
          "lng": -44.146794
        },
        "MASLSB2": {
          "lat": -2.55504,
          "lng": -44.128185
        },
        "MASLSB3": {
          "lat": -2.547917,
          "lng": -44.098333
        },
        "MASLSB4": {
          "lat": -2.536139,
          "lng": -44.068833
        },
        "MASLSB5": {
          "lat": -2.515380199,
          "lng": -44.03155244
        },
        "MASLSB6": {
          "lat": -2.58996,
          "lng": -44.31199
        },
        "MASLSB7": {
          "lat": -2.61488,
          "lng": -44.25732
        },
        "MASLSB8": {
          "lat": -2.57149,
          "lng": -44.26395
        },
        "MASLSB9": {
          "lat": -2.514888,
          "lng": -44.303223
        },
        "MASLSC0": {
          "lat": -2.518211,
          "lng": -44.242062
        },
        "MASLSC0_001": {
          "lat": -2.515783,
          "lng": -44.245372
        },
        "MASLSC1": {
          "lat": -2.50412,
          "lng": -44.30668
        },
        "MASLSC2": {
          "lat": -2.492745,
          "lng": -44.269177
        },
        "MASLSC2_001": {
          "lat": -2.486297,
          "lng": -44.269117
        },
        "MASLSC2_002": {
          "lat": -2.48587,
          "lng": -44.265636
        },
        "MASLSC3": {
          "lat": -2.509086,
          "lng": -44.258214
        },
        "MASLSC4": {
          "lat": -2.607,
          "lng": -44.18146
        },
        "MASLSC5": {
          "lat": -2.63739,
          "lng": -44.25284
        },
        "MASLSC6": {
          "lat": -2.637456,
          "lng": -44.252744
        },
        "MASLSC7": {
          "lat": -2.5357,
          "lng": -44.29657
        },
        "MASLSC8": {
          "lat": -2.58679,
          "lng": -44.20634
        },
        "MASLSC9": {
          "lat": -2.60623,
          "lng": -44.24674
        },
        "MASLSD1": {
          "lat": -2.565,
          "lng": -44.242528
        },
        "MASLSD2": {
          "lat": -2.695194,
          "lng": -44.218444
        },
        "MASLSD3": {
          "lat": -2.50056,
          "lng": -44.21521
        },
        "MASLSD4": {
          "lat": -2.746055,
          "lng": -44.34239
        },
        "MASLSD5": {
          "lat": -2.67966,
          "lng": -44.18899
        },
        "MASLSD6": {
          "lat": -2.60702,
          "lng": -44.17691
        },
        "MASLSD7": {
          "lat": -2.50472,
          "lng": -44.27847
        },
        "MASLSD8": {
          "lat": -2.57584,
          "lng": -44.30302
        },
        "MASLSD9": {
          "lat": -2.52392,
          "lng": -44.24775
        },
        "MASLSE1": {
          "lat": -2.49444,
          "lng": -44.21222
        },
        "MASLSE2": {
          "lat": -2.49361,
          "lng": -44.30306
        },
        "MASLSE3": {
          "lat": -2.51494,
          "lng": -44.29778
        },
        "MASLSE4": {
          "lat": -2.50336,
          "lng": -44.209
        },
        "MASLSE5": {
          "lat": -2.62,
          "lng": -44.25861
        },
        "MASLSE6": {
          "lat": -2.504639,
          "lng": -44.316167
        },
        "MASLSE7": {
          "lat": -2.600806,
          "lng": -44.307694
        },
        "MASLSE8": {
          "lat": -2.535056,
          "lng": -44.289333
        },
        "MASLSE9": {
          "lat": -2.57944,
          "lng": -44.24361
        },
        "MASLSF1": {
          "lat": -2.550096,
          "lng": -44.226475
        },
        "MASLSF2": {
          "lat": -2.48806,
          "lng": -44.24972
        },
        "MASLSF3": {
          "lat": -2.49028,
          "lng": -44.30389
        },
        "MASLSF4": {
          "lat": -2.632499,
          "lng": -44.270497
        },
        "MASLSF5": {
          "lat": -2.553889,
          "lng": -44.305
        },
        "MASLSF6": {
          "lat": -2.50261,
          "lng": -44.22285
        },
        "MASLSF7": {
          "lat": -2.61177,
          "lng": -44.2518
        },
        "MASLSF8": {
          "lat": -2.55778,
          "lng": -44.31289
        },
        "MASLSF9": {
          "lat": -2.543856,
          "lng": -44.222589
        },
        "MASLSG1": {
          "lat": -2.506517,
          "lng": -44.21441
        },
        "MASLSG2": {
          "lat": -2.559439,
          "lng": -44.2789
        },
        "MASLSG3": {
          "lat": -2.680667,
          "lng": -44.357611
        },
        "MASLSG4": {
          "lat": -2.728139,
          "lng": -44.25175
        },
        "MASLSG5": {
          "lat": -2.665333,
          "lng": -44.186
        },
        "MASLSG6": {
          "lat": -2.568461,
          "lng": -44.199681
        },
        "MASLSG7": {
          "lat": -2.501558,
          "lng": -44.285566
        },
        "MASLSG8": {
          "lat": -2.67395,
          "lng": -44.279839
        },
        "MASLSG9": {
          "lat": -2.494811,
          "lng": -44.240518
        },
        "MASLSH1": {
          "lat": -2.491804,
          "lng": -44.293337
        },
        "MASLSH2": {
          "lat": -2.500735,
          "lng": -44.275401
        },
        "MASLSH3": {
          "lat": -2.624533,
          "lng": -44.263775
        },
        "MASLSH4": {
          "lat": -2.626011,
          "lng": -44.308582
        },
        "MASLSH5": {
          "lat": -2.724722,
          "lng": -44.325
        },
        "MASLSH6": {
          "lat": -2.711056,
          "lng": -44.3415
        },
        "MASLSH7": {
          "lat": -2.509107,
          "lng": -44.303625
        },
        "MASLSH8": {
          "lat": -2.563,
          "lng": -44.362708
        },
        "MASLSH9": {
          "lat": -2.647056,
          "lng": -44.275028
        },
        "MASLSI1": {
          "lat": -2.527561,
          "lng": -44.255554
        },
        "MASLSI2": {
          "lat": -2.583414,
          "lng": -44.236156
        },
        "MASLSI3": {
          "lat": -2.533922,
          "lng": -44.224894
        },
        "MASLSI4": {
          "lat": -2.510996,
          "lng": -44.285294
        },
        "MASLSI5": {
          "lat": -2.534708,
          "lng": -44.199747
        },
        "MASLSI6": {
          "lat": -2.490761,
          "lng": -44.26348
        },
        "MASLSI7": {
          "lat": -2.50859,
          "lng": -44.26243
        },
        "MASLSI8": {
          "lat": -2.523153,
          "lng": -44.245098
        },
        "MASLSI9": {
          "lat": -2.509612,
          "lng": -44.287353
        },
        "MASLSIA": {
          "lat": -2.530602,
          "lng": -44.294021
        },
        "MASLSIB": {
          "lat": -2.530702,
          "lng": -44.300427
        },
        "MASLSIC": {
          "lat": -2.559847,
          "lng": -44.225237
        },
        "MASLSID": {
          "lat": -2.483704,
          "lng": -44.254386
        },
        "MASLSIE": {
          "lat": -2.501634,
          "lng": -44.288562
        },
        "MASLSIF": {
          "lat": -2.51576,
          "lng": -44.24535
        },
        "MASLSIG": {
          "lat": -2.55137,
          "lng": -44.192047
        },
        "MASLSIH": {
          "lat": -2.5306,
          "lng": -44.294
        },
        "MASLSJ1": {
          "lat": -2.48491,
          "lng": -44.26587
        },
        "MASLSJ2": {
          "lat": -2.533446,
          "lng": -44.279157
        },
        "MASLSJ3": {
          "lat": -2.562928,
          "lng": -44.363012
        },
        "MASLSJ4": {
          "lat": -2.491528,
          "lng": -44.302528
        },
        "MASLSJ5": {
          "lat": -2.604639,
          "lng": -44.234469
        },
        "MASLSJ6": {
          "lat": -2.535464,
          "lng": -44.2197
        },
        "MASLSJ7": {
          "lat": -2.56125,
          "lng": -44.28032
        },
        "MASLSJ8": {
          "lat": -2.564,
          "lng": -44.327
        },
        "MASLSJ9": {
          "lat": -2.506,
          "lng": -44.223361
        },
        "MASLSK1": {
          "lat": -2.562798,
          "lng": -44.2216
        },
        "MASLSK2": {
          "lat": -2.497217,
          "lng": -44.242331
        },
        "MASLSK3": {
          "lat": -2.492,
          "lng": -44.292083
        },
        "MASLSK4": {
          "lat": -2.558361,
          "lng": -44.2265
        },
        "MASLSK5": {
          "lat": -2.510743,
          "lng": -44.236596
        },
        "MASLSK6": {
          "lat": -2.604,
          "lng": -44.235
        },
        "MASLSK7": {
          "lat": -2.561389,
          "lng": -44.2665
        },
        "MASLSK8": {
          "lat": -2.561,
          "lng": -44.28
        },
        "MASLSK9": {
          "lat": -2.564,
          "lng": -44.327
        },
        "MASLSL1": {
          "lat": -2.5026,
          "lng": -44.2229
        },
        "MASLSL2": {
          "lat": -2.561,
          "lng": -44.222
        },
        "MASLSL3": {
          "lat": -2.497,
          "lng": -44.242
        },
        "MASLSL4": {
          "lat": -2.4951,
          "lng": -44.2923
        },
        "MASLSL5": {
          "lat": -2.559,
          "lng": -44.231
        },
        "MASLSL6": {
          "lat": -2.51,
          "lng": -44.234
        },
        "MASLSL7": {
          "lat": -2.58731,
          "lng": -44.2009
        },
        "MASLSL8": {
          "lat": -2.561,
          "lng": -44.267
        },
        "MASLSL9": {
          "lat": -2.490056,
          "lng": -44.27264
        },
        "MASLSM1": {
          "lat": -2.585441,
          "lng": -44.193145
        },
        "MASLSM2": {
          "lat": -2.5356333,
          "lng": -44.300915
        },
        "MASLSM3": {
          "lat": -2.513028,
          "lng": -44.250868
        },
        "MASLSM4": {
          "lat": -2.4861,
          "lng": -44.25232
        },
        "MASLSM5": {
          "lat": -2.524409,
          "lng": -44.234639
        },
        "MASLSM6": {
          "lat": -2.535553,
          "lng": -44.248058
        },
        "MASLSM7": {
          "lat": -2.526278,
          "lng": -44.262361
        },
        "MASLSM8": {
          "lat": -2.53575,
          "lng": -44.20384
        },
        "MASLSM9": {
          "lat": -2.579288,
          "lng": -44.221095
        },
        "MASLSN1": {
          "lat": -2.601839,
          "lng": -44.186531
        },
        "MASLSN2": {
          "lat": -2.547031,
          "lng": -44.313886
        },
        "MASLSN3": {
          "lat": -2.573533,
          "lng": -44.296947
        },
        "MASLSN4": {
          "lat": -2.500951,
          "lng": -44.284905
        },
        "MASLSN5": {
          "lat": -2.606486,
          "lng": -44.247519
        },
        "MASLSN6": {
          "lat": -2.606194,
          "lng": -44.207116
        },
        "MASLSN7": {
          "lat": -2.56713,
          "lng": -44.214975
        },
        "MASLSN8": {
          "lat": -2.546811,
          "lng": -44.290831
        },
        "MASLSN9": {
          "lat": -2.536972,
          "lng": -44.293556
        },
        "MASLSO1": {
          "lat": -2.569709,
          "lng": -44.236818
        },
        "MASLSO2": {
          "lat": -2.641469,
          "lng": -44.30133
        },
        "MASLSO3": {
          "lat": -2.535722,
          "lng": -44.352278
        },
        "MASLSO4": {
          "lat": -2.494383,
          "lng": -44.248675
        },
        "MASLSO5": {
          "lat": -2.60661,
          "lng": -44.32628
        },
        "MASLSO6": {
          "lat": -2.56225,
          "lng": -44.34
        },
        "MASLSO7": {
          "lat": -2.501141,
          "lng": -44.311565
        },
        "MASLSO8": {
          "lat": -2.501611,
          "lng": -44.274583
        },
        "MASLSO9": {
          "lat": -2.5307,
          "lng": -44.3006
        },
        "MASLSP1": {
          "lat": -2.5598,
          "lng": -44.2252
        },
        "MASLSP2": {
          "lat": -2.4837,
          "lng": -44.2544
        },
        "MASLSP3": {
          "lat": -2.5016,
          "lng": -44.2886
        },
        "MASLSP4": {
          "lat": -2.530602,
          "lng": -44.294021
        },
        "MASLSP5": {
          "lat": -2.515783,
          "lng": -44.245372
        },
        "MASLSP6": {
          "lat": -2.55137,
          "lng": -44.192047
        },
        "MASLSP7": {
          "lat": -2.5306,
          "lng": -44.2943
        },
        "MASLSP8": {
          "lat": -2.5306,
          "lng": -44.294
        },
        "MASLSP9": {
          "lat": -2.554,
          "lng": -44.321
        },
        "MASLSQ1": {
          "lat": -2.5235,
          "lng": -44.2667
        },
        "MASLSQ2": {
          "lat": -2.521,
          "lng": -44.263
        },
        "MASLSQ3": {
          "lat": -2.565068,
          "lng": -44.192687
        },
        "MASLSQ4": {
          "lat": -2.4836111,
          "lng": -44.2330556
        },
        "MASLZ01": {
          "lat": -25.29842,
          "lng": -44.294461
        },
        "MASMH01": {
          "lat": -4.042298,
          "lng": -44.470291
        },
        "MASMH02": {
          "lat": -4.0264,
          "lng": -44.4632
        },
        "MASMN01": {
          "lat": -7.02116,
          "lng": -45.48185
        },
        "MASPA01": {
          "lat": -5.08534,
          "lng": -48.43153
        },
        "MASPC01": {
          "lat": -6.82309,
          "lng": -46.53074
        },
        "MASPC90": {
          "lat": -6.885331,
          "lng": -46.317831
        },
        "MASPQ01": {
          "lat": -2.54457,
          "lng": -45.77835
        },
        "MASPQ02": {
          "lat": -2.544633,
          "lng": -45.778415
        },
        "MASQH01": {
          "lat": -3.503528,
          "lng": -42.562569
        },
        "MASQH02": {
          "lat": -3.36977,
          "lng": -42.68462
        },
        "MASRB01": {
          "lat": -5.02407,
          "lng": -44.993
        },
        "MASRB90": {
          "lat": -5.02214,
          "lng": -45.019
        },
        "MASRI01": {
          "lat": -5.10299,
          "lng": -45.088
        },
        "MASRI90": {
          "lat": -5.109139,
          "lng": -45.076583
        },
        "MASRR01": {
          "lat": -1.85298,
          "lng": -45.1205
        },
        "MASRR02": {
          "lat": -1.666813,
          "lng": -44.860872
        },
        "MASSS01": {
          "lat": -6.490139,
          "lng": -43.703611
        },
        "MASSS90": {
          "lat": -6.46975,
          "lng": -43.951667
        },
        "MASTM01": {
          "lat": -3.11269,
          "lng": -42.41763
        },
        "MASTM02": {
          "lat": -3.07926,
          "lng": -42.61503
        },
        "MASTU01": {
          "lat": -4.03677,
          "lng": -45.23924
        },
        "MASTY01": {
          "lat": -3.1452,
          "lng": -44.32591
        },
        "MASTY02": {
          "lat": -3.138361,
          "lng": -44.306444
        },
        "MASTY03": {
          "lat": -3.13,
          "lng": -44.3244
        },
        "MASUA01": {
          "lat": -3.96806,
          "lng": -45.6611
        },
        "MASUA02": {
          "lat": -4.707242,
          "lng": -46.206002
        },
        "MASUA03": {
          "lat": -4.189281,
          "lng": -45.735917
        },
        "MASUA04": {
          "lat": -4.437077,
          "lng": -45.69155
        },
        "MASUA05": {
          "lat": -4.13551,
          "lng": -45.74043
        },
        "MASUA06": {
          "lat": -3.963806,
          "lng": -45.674889
        },
        "MASUA07": {
          "lat": -4.08822,
          "lng": -45.87317
        },
        "MASUA08": {
          "lat": -3.9678,
          "lng": -45.6611
        },
        "MASUA09": {
          "lat": -3.9675,
          "lng": -45.6567
        },
        "MASUA90": {
          "lat": -3.962389,
          "lng": -45.663806
        },
        "MASUC01": {
          "lat": -6.477,
          "lng": -44.188667
        },
        "MASUC02": {
          "lat": -6.477,
          "lng": -44.18867
        },
        "MASYV01": {
          "lat": -5.879694,
          "lng": -46.702028
        },
        "MASYV01_001": {
          "lat": -5.868179,
          "lng": -46.700878
        },
        "MASYV02": {
          "lat": -5.99695,
          "lng": -46.47139
        },
        "MASYV03": {
          "lat": -5.802716,
          "lng": -46.701447
        },
        "MASZH01": {
          "lat": -4.37923,
          "lng": -44.66997
        },
        "MATDV01": {
          "lat": -4.538,
          "lng": -44.627998
        },
        "MATIM01": {
          "lat": 0,
          "lng": 0
        },
        "MATIM02": {
          "lat": -5.515384,
          "lng": -47.482848
        },
        "MATMN01": {
          "lat": -5.095192,
          "lng": -42.842813
        },
        "MATMN02": {
          "lat": -5.095056,
          "lng": -42.824278
        },
        "MATMN03": {
          "lat": -5.111351,
          "lng": -42.829537
        },
        "MATMN04": {
          "lat": -5.28245,
          "lng": -42.99488
        },
        "MATMN05": {
          "lat": -5.278884,
          "lng": -42.922524
        },
        "MATMN06": {
          "lat": -5.12423,
          "lng": -43.1214
        },
        "MATMN07": {
          "lat": -5.00971,
          "lng": -42.99532
        },
        "MATMN08": {
          "lat": -5.11568035,
          "lng": -42.8542319
        },
        "MATMN09": {
          "lat": -5.132,
          "lng": -42.83415
        },
        "MATMN10": {
          "lat": -5.075533,
          "lng": -42.88164
        },
        "MATMN11": {
          "lat": -5.15105,
          "lng": -42.83958
        },
        "MATMN12": {
          "lat": -5.098,
          "lng": -42.869
        },
        "MATMN13": {
          "lat": -5.08698,
          "lng": -42.85498
        },
        "MATMN14": {
          "lat": -5.11968,
          "lng": -42.89711
        },
        "MATMN15": {
          "lat": -5.11556,
          "lng": -42.84179
        },
        "MATMN16": {
          "lat": -5.09104,
          "lng": -42.83294
        },
        "MATMN17": {
          "lat": -5.10207,
          "lng": -42.85327
        },
        "MATMN18": {
          "lat": -5.120539,
          "lng": -42.8301
        },
        "MATMN19": {
          "lat": -5.09958,
          "lng": -42.83208
        },
        "MATMNU1": {
          "lat": -5.162861,
          "lng": -42.850444
        },
        "MATMR01": {
          "lat": -4.253333,
          "lng": -43.940556
        },
        "MATMR02": {
          "lat": -4.10234,
          "lng": -43.80007
        },
        "MATMR03": {
          "lat": -4.245107,
          "lng": -43.929946
        },
        "MATMR90": {
          "lat": -4.25032,
          "lng": -43.92638
        },
        "MATSF01": {
          "lat": -8.472611,
          "lng": -45.746528
        },
        "MATSF02": {
          "lat": -8.478815,
          "lng": -45.90037
        },
        "MATTM01": {
          "lat": -5.9992,
          "lng": -44.82794
        },
        "MATTM02": {
          "lat": -5.262528,
          "lng": -44.650972
        },
        "MATTM03": {
          "lat": -5.411949,
          "lng": -44.68329
        },
        "MATTM04": {
          "lat": -5.977662,
          "lng": -44.836945
        },
        "MATTM90": {
          "lat": -5.267056,
          "lng": -44.584111
        },
        "MATUC01": {
          "lat": -1.66473,
          "lng": -45.3705
        },
        "MATUC02": {
          "lat": -1.671111,
          "lng": -45.368056
        },
        "MATUC03": {
          "lat": -1.738826,
          "lng": -45.516194
        },
        "MATUC04": {
          "lat": -1.56648,
          "lng": -45.46012
        },
        "MATUC05": {
          "lat": -1.66493,
          "lng": -45.38493
        },
        "MATUF01": {
          "lat": -3.67158,
          "lng": -45.63511
        },
        "MATUR01": {
          "lat": -2.035944,
          "lng": -45.447028
        },
        "MATUT01": {
          "lat": -2.76303,
          "lng": -42.27591
        },
        "MATUT02": {
          "lat": -2.89506,
          "lng": -42.31168
        },
        "MATUT03": {
          "lat": -2.78817,
          "lng": -42.3103
        },
        "MATUT04": {
          "lat": -2.84054,
          "lng": -42.30892
        },
        "MAUBS01": {
          "lat": -3.095679,
          "lng": -43.257198
        },
        "MAUSS02": {
          "lat": -3.434127,
          "lng": -43.278346
        },
        "MAUSS03": {
          "lat": -3.20415,
          "lng": -43.39687
        },
        "MAVCM01": {
          "lat": -2.533695,
          "lng": -44.283231
        },
        "MAVCM02": {
          "lat": -2.534322,
          "lng": -44.288809
        },
        "MAVFR01": {
          "lat": -4.28867,
          "lng": -45.24462
        },
        "MAVFR02": {
          "lat": -4.2973,
          "lng": -45.2444
        },
        "MAVGE01": {
          "lat": -3.53762,
          "lng": -43.91082
        },
        "MAVGE02": {
          "lat": -3.859538,
          "lng": -43.974378
        },
        "MAVGE03": {
          "lat": -3.592725,
          "lng": -43.705666
        },
        "MAVGE04": {
          "lat": -3.541583,
          "lng": -43.915333
        },
        "MAVGE90": {
          "lat": -3.48133,
          "lng": -44.07653
        },
        "MAVGE91": {
          "lat": -3.608167,
          "lng": -43.675778
        },
        "MAVIV01": {
          "lat": -2.508697,
          "lng": -44.298812
        },
        "MAVLN01": {
          "lat": -5.187722,
          "lng": -48.139028
        },
        "MAVLN90": {
          "lat": -5.21285,
          "lng": -47.9372
        },
        "MAVMM01": {
          "lat": -3.465722,
          "lng": -44.873556
        },
        "MAVMM02": {
          "lat": -3.482077,
          "lng": -44.872763
        },
        "MAVMM03": {
          "lat": -3.575026,
          "lng": -44.960283
        },
        "MAVNA01": {
          "lat": -3.21503,
          "lng": -45.0041
        },
        "MAVNM01": {
          "lat": -5.000831,
          "lng": -47.999997
        },
        "MAWRH01": {
          "lat": -2.619918,
          "lng": -44.257804
        },
        "MAZED01": {
          "lat": -3.269722,
          "lng": -45.653056
        },
        "MAZED02": {
          "lat": -3.377101,
          "lng": -46.299979
        },
        "MAZED03": {
          "lat": -3.233624,
          "lng": -45.806245
        },
        "MAZED04": {
          "lat": -3.273117,
          "lng": -45.654667
        },
        "MAZED05": {
          "lat": -3.2623,
          "lng": -45.6509
        },
        "NAC0001": {
          "lat": -9.972424,
          "lng": -67.808817
        },
        "NAM0001": {
          "lat": -3.1125,
          "lng": -60.018611
        },
        "NAM0002": {
          "lat": -3.1125,
          "lng": -60.01861111
        },
        "NMA0001": {
          "lat": -2.530478,
          "lng": -44.294197
        },
        "NMA0002": {
          "lat": -2.530278,
          "lng": -44.294444
        },
        "NPA0001": {
          "lat": -1.40866667,
          "lng": -48.44063889
        },
        "NRO0001": {
          "lat": -8.763444,
          "lng": -63.908917
        },
        "PA0001F": {
          "lat": -1.390254,
          "lng": -48.465199
        },
        "PA0001R": {
          "lat": -1.375752,
          "lng": -48.352413
        },
        "PA0001S": {
          "lat": -1.448112,
          "lng": -48.483314
        },
        "PA0002F": {
          "lat": -6.091548,
          "lng": -49.856068
        },
        "PA0002R": {
          "lat": -1.451735,
          "lng": -48.477434
        },
        "PA0002S": {
          "lat": -1.447771,
          "lng": -48.49945
        },
        "PA0003F": {
          "lat": -5.35668,
          "lng": -49.085794
        },
        "PA0003R": {
          "lat": -1.289756,
          "lng": -47.959785
        },
        "PA0003S": {
          "lat": -1.433843,
          "lng": -48.464877
        },
        "PA0004F": {
          "lat": -2.470754,
          "lng": -54.727418
        },
        "PA0004S": {
          "lat": -1.45299,
          "lng": -48.47769
        },
        "PA0005F": {
          "lat": -1.462713,
          "lng": -48.487724
        },
        "PA0005S": {
          "lat": -0.888692,
          "lng": -47.328308
        },
        "PA0006F": {
          "lat": -1.349763,
          "lng": -48.216972
        },
        "PA0006S": {
          "lat": -2.946917,
          "lng": -46.747556
        },
        "PA0007F": {
          "lat": -6.148515,
          "lng": -49.872326
        },
        "PA0007S": {
          "lat": -2.20325,
          "lng": -47.227806
        },
        "PA0008F": {
          "lat": -1.334963,
          "lng": -48.452162
        },
        "PA0008S": {
          "lat": -1.561243,
          "lng": -48.505791
        },
        "PA0009F": {
          "lat": -1.316539,
          "lng": -48.297112
        },
        "PA0009S": {
          "lat": -3.060298,
          "lng": -47.411546
        },
        "PA0010F": {
          "lat": -5.365745,
          "lng": -49.02346
        },
        "PA0010S": {
          "lat": -0.943699,
          "lng": -47.735056
        },
        "PA0011F": {
          "lat": -1.437296,
          "lng": -48.459172
        },
        "PA0011S": {
          "lat": -2.190915,
          "lng": -49.32759
        },
        "PA0012F": {
          "lat": -1.384319,
          "lng": -48.409592
        },
        "PA0012S": {
          "lat": -5.416283,
          "lng": -49.080777
        },
        "PA0013F": {
          "lat": -1.434173,
          "lng": -48.465229
        },
        "PA0014F": {
          "lat": -1.431183,
          "lng": -48.4539
        },
        "PA0015F": {
          "lat": -1.330675,
          "lng": -48.23517
        },
        "PA0016F": {
          "lat": -2.42386,
          "lng": -54.699943
        },
        "PA00288": {
          "lat": 0,
          "lng": 0
        },
        "PA00289": {
          "lat": 0,
          "lng": 0
        },
        "PA00290": {
          "lat": 0,
          "lng": 0
        },
        "PAAAJ01": {
          "lat": -0.98955,
          "lng": -49.93641
        },
        "PAAAJ02": {
          "lat": -0.9874,
          "lng": -49.9386
        },
        "PAAAJ90": {
          "lat": -0.797921,
          "lng": -49.5428
        },
        "PAABT01": {
          "lat": -1.724418,
          "lng": -48.887043
        },
        "PAABT02": {
          "lat": -1.72615,
          "lng": -48.87365
        },
        "PAABT03": {
          "lat": -1.7717000246048,
          "lng": -48.7865982055664
        },
        "PAABT04": {
          "lat": -1.624761,
          "lng": -48.803661
        },
        "PAABT05": {
          "lat": -1.726389,
          "lng": -48.8745
        },
        "PAABT06": {
          "lat": -1.71416667,
          "lng": -48.8808333
        },
        "PAABT07": {
          "lat": -1.72847,
          "lng": -48.87008
        },
        "PAABT08": {
          "lat": -1.72075,
          "lng": -48.86708
        },
        "PAABT09": {
          "lat": -1.739631,
          "lng": -48.856438
        },
        "PAABT10": {
          "lat": -1.7321065,
          "lng": -48.857856
        },
        "PAABT11": {
          "lat": -1.735457051,
          "lng": -48.89273853
        },
        "PAABT12": {
          "lat": -1.738667,
          "lng": -48.875778
        },
        "PAABT13": {
          "lat": -1.710596,
          "lng": -48.873162
        },
        "PAABT14": {
          "lat": -1.72611,
          "lng": -48.87417
        },
        "PAABT15": {
          "lat": -1.736331,
          "lng": -48.865569
        },
        "PAABT16": {
          "lat": -1.730311,
          "lng": -48.880008
        },
        "PAABT17": {
          "lat": -1.624,
          "lng": -48.813
        },
        "PAABT18": {
          "lat": -1.7338,
          "lng": -48.8892
        },
        "PAADP01": {
          "lat": -1.369189,
          "lng": -48.387675
        },
        "PAAFG01": {
          "lat": -4.954167,
          "lng": -48.411943
        },
        "PAAFG90": {
          "lat": -4.917417,
          "lng": -48.330528
        },
        "PAAFU01": {
          "lat": -0.159111,
          "lng": -50.386833
        },
        "PAAFU02": {
          "lat": -0.27571,
          "lng": -50.18648
        },
        "PAAFU03": {
          "lat": -0.29235,
          "lng": -50.47669
        },
        "PAAFU04": {
          "lat": -0.1552,
          "lng": -50.3909
        },
        "PAAFU90": {
          "lat": -0.062778,
          "lng": -50.65053
        },
        "PAAGA01": {
          "lat": -6.806921,
          "lng": -50.482949
        },
        "PAAGA02": {
          "lat": -6.74894,
          "lng": -50.666496
        },
        "PAAGA90": {
          "lat": -6.70422,
          "lng": -50.79495
        },
        "PAAGU01": {
          "lat": -1.022528,
          "lng": -46.639944
        },
        "PAAGU02": {
          "lat": -1.154028,
          "lng": -46.356
        },
        "PAAGU03": {
          "lat": -1.098919,
          "lng": -46.472369
        },
        "PAAGU04": {
          "lat": -1.022742542543893,
          "lng": -46.63952557539292
        },
        "PAAGU05": {
          "lat": -1.066946,
          "lng": -46.553414
        },
        "PAAGU06": {
          "lat": -1.018694,
          "lng": -46.639944
        },
        "PAAIU01": {
          "lat": -1.38494,
          "lng": -48.40733
        },
        "PAAIU02": {
          "lat": -1.387713,
          "lng": -48.382003
        },
        "PAAIU02_001": {
          "lat": -1.377803,
          "lng": -48.391349
        },
        "PAAIU03": {
          "lat": -1.366098,
          "lng": -48.375582
        },
        "PAAIU03_001": {
          "lat": -1.36694,
          "lng": -48.37529
        },
        "PAAIU04": {
          "lat": -1.34135,
          "lng": -48.35696
        },
        "PAAIU04_001": {
          "lat": -1.339806,
          "lng": -48.367722
        },
        "PAAIU05": {
          "lat": -1.337472,
          "lng": -48.384722
        },
        "PAAIU05_001": {
          "lat": -1.33847,
          "lng": -48.37503
        },
        "PAAIU05_002": {
          "lat": -1.34289,
          "lng": -48.38797
        },
        "PAAIU06": {
          "lat": -1.350833,
          "lng": -48.388056
        },
        "PAAIU07": {
          "lat": -1.369166,
          "lng": -48.395
        },
        "PAAIU07_001": {
          "lat": -1.3775,
          "lng": -48.39222
        },
        "PAAIU08": {
          "lat": -1.360894,
          "lng": -48.402173
        },
        "PAAIU08_001": {
          "lat": -1.359427,
          "lng": -48.407083
        },
        "PAAIU09": {
          "lat": -1.36517,
          "lng": -48.41165
        },
        "PAAIU09_001": {
          "lat": -1.36619,
          "lng": -48.41853
        },
        "PAAIU10": {
          "lat": -1.351841,
          "lng": -48.402201
        },
        "PAAIU11": {
          "lat": -1.350762,
          "lng": -48.419321
        },
        "PAAIU12": {
          "lat": -1.380187,
          "lng": -48.426589
        },
        "PAAIU12_001": {
          "lat": -1.388019,
          "lng": -48.430612
        },
        "PAAIU13": {
          "lat": -1.39124,
          "lng": -48.42112
        },
        "PAAIU14": {
          "lat": -1.399623,
          "lng": -48.423055
        },
        "PAAIU15": {
          "lat": -1.37439,
          "lng": -48.41675
        },
        "PAAIU16": {
          "lat": -1.332047,
          "lng": -48.416858
        },
        "PAAIU17": {
          "lat": -1.41062,
          "lng": -48.39267
        },
        "PAAIU18": {
          "lat": -1.367015,
          "lng": -48.352374
        },
        "PAAIU19": {
          "lat": -1.37739,
          "lng": -48.39212
        },
        "PAAIU20": {
          "lat": -1.341566,
          "lng": -48.396426
        },
        "PAAIU20_001": {
          "lat": -1.342264,
          "lng": -48.401078
        },
        "PAAIU20_002": {
          "lat": -1.343472,
          "lng": -48.405861
        },
        "PAAIU21": {
          "lat": -1.37166666666667,
          "lng": -48.4055555555556
        },
        "PAAIU22": {
          "lat": -1.388113,
          "lng": -48.342856
        },
        "PAAIU23": {
          "lat": -1.391906,
          "lng": -48.368381
        },
        "PAAIU24": {
          "lat": -1.3814402,
          "lng": -48.3747687
        },
        "PAAIU25": {
          "lat": -1.357217,
          "lng": -48.393826
        },
        "PAAIU25_001": {
          "lat": -1.35894,
          "lng": -48.38567
        },
        "PAAIU25_002": {
          "lat": -1.376739,
          "lng": -48.36809
        },
        "PAAIU26": {
          "lat": -1.346491,
          "lng": -48.367205
        },
        "PAAIU27": {
          "lat": -1.324658,
          "lng": -48.352272
        },
        "PAAIU28": {
          "lat": -1.380858,
          "lng": -48.362244
        },
        "PAAIU28_001": {
          "lat": -1.376739,
          "lng": -48.36809
        },
        "PAAIU29": {
          "lat": -1.35876,
          "lng": -48.37707
        },
        "PAAIU30": {
          "lat": -1.361956,
          "lng": -48.434955
        },
        "PAAIU31": {
          "lat": -1.32831,
          "lng": -48.37669
        },
        "PAAIU31_001": {
          "lat": -1.32925,
          "lng": -48.3695
        },
        "PAAIU31_002": {
          "lat": -1.333512,
          "lng": -48.370824
        },
        "PAAIU31_003": {
          "lat": -1.329251,
          "lng": -48.369544
        },
        "PAAIU31_004": {
          "lat": -1.325539,
          "lng": -48.369196
        },
        "PAAIU32": {
          "lat": -1.32972,
          "lng": -48.40064
        },
        "PAAIU32_001": {
          "lat": -1.323795,
          "lng": -48.400131
        },
        "PAAIU32_002": {
          "lat": -1.32053,
          "lng": -48.400961
        },
        "PAAIU32_003": {
          "lat": -1.317899,
          "lng": -48.401261
        },
        "PAAIU33": {
          "lat": -1.359056,
          "lng": -48.416917
        },
        "PAAIU33_001": {
          "lat": -1.363697,
          "lng": -48.421461
        },
        "PAAIU34": {
          "lat": -1.325122,
          "lng": -48.351839
        },
        "PAAIU35": {
          "lat": -1.3393,
          "lng": -48.41174
        },
        "PAAIU36": {
          "lat": -1.324972,
          "lng": -48.383472
        },
        "PAAIU37": {
          "lat": -1.378611,
          "lng": -48.375194
        },
        "PAAIU38": {
          "lat": -1.336014,
          "lng": -48.40127
        },
        "PAAIU38_001": {
          "lat": -1.33806,
          "lng": -48.40694
        },
        "PAAIU39": {
          "lat": -1.36419,
          "lng": -48.39987
        },
        "PAAIU40": {
          "lat": -1.339806,
          "lng": -48.417083
        },
        "PAAIU41": {
          "lat": -1.3455,
          "lng": -48.396416666
        },
        "PAAIU42": {
          "lat": -1.385,
          "lng": -48.41
        },
        "PAAIU42_001": {
          "lat": -1.3956567,
          "lng": -48.41871049
        },
        "PAAIU42_002": {
          "lat": -1.391997,
          "lng": -48.411861
        },
        "PAAIU43": {
          "lat": -1.36789,
          "lng": -48.373
        },
        "PAAIU44": {
          "lat": -1.36517,
          "lng": -48.41165
        },
        "PAAIU45": {
          "lat": -1.39124,
          "lng": -48.42112
        },
        "PAAIU46": {
          "lat": -1.371667,
          "lng": -48.405556
        },
        "PAAIU47": {
          "lat": -1.365350339500563,
          "lng": -48.37531460118787
        },
        "PAAIU48": {
          "lat": -1.346137046148179,
          "lng": -48.36755905158913
        },
        "PAAIU49": {
          "lat": -1.39124,
          "lng": -48.42112
        },
        "PAAIU50": {
          "lat": -1.371667,
          "lng": -48.405556
        },
        "PAAIU51": {
          "lat": -1.36871,
          "lng": -48.38327
        },
        "PAAIU52": {
          "lat": -1.34001,
          "lng": -48.35395
        },
        "PAAIU52_001": {
          "lat": -1.345754,
          "lng": -48.348188
        },
        "PAAIU53": {
          "lat": -1.39919,
          "lng": -48.4103
        },
        "PAAIU53_001": {
          "lat": -1.399862,
          "lng": -48.407717
        },
        "PAAIU54": {
          "lat": -1.38431,
          "lng": -48.40987
        },
        "PAAIU55": {
          "lat": -1.3251,
          "lng": -48.35232
        },
        "PAAIU56": {
          "lat": -1.323111,
          "lng": -48.388019
        },
        "PAAIU57": {
          "lat": -1.355175,
          "lng": -48.36492
        },
        "PAAIU58": {
          "lat": -1.33847,
          "lng": -48.37503
        },
        "PAAIU59": {
          "lat": -1.32536,
          "lng": -48.41569
        },
        "PAAIU60": {
          "lat": -1.34228,
          "lng": -48.40111
        },
        "PAAIU61": {
          "lat": -1.35894,
          "lng": -48.38567
        },
        "PAAIU62": {
          "lat": -1.39139,
          "lng": -48.40111
        },
        "PAAIU63": {
          "lat": -1.33417,
          "lng": -48.38861
        },
        "PAAIU64": {
          "lat": -1.33806,
          "lng": -48.40694
        },
        "PAAIU65": {
          "lat": -1.33417,
          "lng": -48.36028
        },
        "PAAIU66": {
          "lat": -1.34289,
          "lng": -48.38797
        },
        "PAAIU67": {
          "lat": -1.38333,
          "lng": -48.38833
        },
        "PAAIU68": {
          "lat": -1.3512275,
          "lng": -48.4087863
        },
        "PAAIU69": {
          "lat": -1.35786,
          "lng": -48.401
        },
        "PAAIU70": {
          "lat": -1.39697,
          "lng": -48.38645
        },
        "PAAIU71": {
          "lat": -1.355767,
          "lng": -48.371853
        },
        "PAAIU72": {
          "lat": -1.382878,
          "lng": -48.417599
        },
        "PAAIU73": {
          "lat": -1.351706,
          "lng": -48.394668
        },
        "PAAIU74": {
          "lat": -1.37611,
          "lng": -48.38194
        },
        "PAAIU75": {
          "lat": -1.345556,
          "lng": -48.412083
        },
        "PAAIU76": {
          "lat": -1.34436,
          "lng": -48.42817
        },
        "PAAIU77": {
          "lat": -1.342944,
          "lng": -48.381167
        },
        "PAAIU78": {
          "lat": -1.38417,
          "lng": -48.39944
        },
        "PAAIU79": {
          "lat": -1.36594,
          "lng": -48.40586
        },
        "PAAIU80": {
          "lat": -1.357788,
          "lng": -48.410752
        },
        "PAAIU81": {
          "lat": -1.36619,
          "lng": -48.41853
        },
        "PAAIU82": {
          "lat": -1.3251026881383,
          "lng": -48.35250255297959
        },
        "PAAIU83": {
          "lat": -1.35647,
          "lng": -48.42475
        },
        "PAAIU84": {
          "lat": -1.35647,
          "lng": -48.39222
        },
        "PAAIU85": {
          "lat": -1.38975,
          "lng": -48.41406
        },
        "PAAIU86": {
          "lat": -1.40072,
          "lng": -48.37087
        },
        "PAAIU87": {
          "lat": -1.400869,
          "lng": -48.386811
        },
        "PAAIU88": {
          "lat": -1.34436,
          "lng": -48.42817
        },
        "PAAIU89": {
          "lat": -1.3864,
          "lng": -48.397919
        },
        "PAAIU90": {
          "lat": -1.376528,
          "lng": -48.38925
        },
        "PAAIU91": {
          "lat": -1.321239,
          "lng": -48.409739
        },
        "PAAIU92": {
          "lat": -1.352205,
          "lng": -48.376667
        },
        "PAAIU93": {
          "lat": -1.384972,
          "lng": -48.370139
        },
        "PAAIU94": {
          "lat": -1.350177,
          "lng": -48.359071
        },
        "PAAIU95": {
          "lat": -1.378031,
          "lng": -48.4101
        },
        "PAAIU96": {
          "lat": -1.365083,
          "lng": -48.40625
        },
        "PAAIU97": {
          "lat": -1.350181,
          "lng": -48.35907
        },
        "PAAIU98": {
          "lat": -1.323132,
          "lng": -48.41881
        },
        "PAAIU99": {
          "lat": -1.3458,
          "lng": -48.3482
        },
        "PAAIUA1": {
          "lat": -1.3999,
          "lng": -48.4077
        },
        "PAAIUA2": {
          "lat": -1.36694,
          "lng": -48.37529
        },
        "PAAIUA3": {
          "lat": -1.377803,
          "lng": -48.391349
        },
        "PAAIUA4": {
          "lat": -1.359427,
          "lng": -48.407083
        },
        "PAAIUA5": {
          "lat": -1.368505,
          "lng": -48.376201
        },
        "PAAIUA6": {
          "lat": -1.386718,
          "lng": -48.407662
        },
        "PAAIUA7": {
          "lat": -1.38017,
          "lng": -48.42658
        },
        "PAAIUA8": {
          "lat": -1.3804,
          "lng": -48.3896
        },
        "PAAIUI1": {
          "lat": -1.385581,
          "lng": -48.407553
        },
        "PAAIUI2": {
          "lat": -1.38432,
          "lng": -48.40959
        },
        "PAAIUI3": {
          "lat": -1.36694,
          "lng": -48.37529
        },
        "PAAIUI4": {
          "lat": -1.377803,
          "lng": -48.391349
        },
        "PAAIUI5": {
          "lat": -1.359427,
          "lng": -48.407083
        },
        "PAAIUI6": {
          "lat": -1.345754,
          "lng": -48.348188
        },
        "PAAIUI7": {
          "lat": -1.399862,
          "lng": -48.407717
        },
        "PAAKA01": {
          "lat": -1.95971,
          "lng": -48.19738
        },
        "PAAKA02": {
          "lat": -2.134042,
          "lng": -48.285891
        },
        "PAAKA03": {
          "lat": -1.824541,
          "lng": -48.203223
        },
        "PAAKA04": {
          "lat": -1.962861,
          "lng": -48.3507
        },
        "PAAKA05": {
          "lat": -1.800333,
          "lng": -48.260861
        },
        "PAAKA06": {
          "lat": -1.959522355172171,
          "lng": -48.19685965145035
        },
        "PAALQ01": {
          "lat": -1.950786,
          "lng": -54.741436
        },
        "PAALQ02": {
          "lat": -1.66418,
          "lng": -54.67992
        },
        "PAALQ03": {
          "lat": -1.54631,
          "lng": -55.1599
        },
        "PAALQ04": {
          "lat": -1.54631,
          "lng": -55.1599
        },
        "PAALQ1L": {
          "lat": -1.949722,
          "lng": -54.740833
        },
        "PAAMC01": {
          "lat": -1.446405,
          "lng": -48.494296
        },
        "PAAMM01": {
          "lat": -1.527528,
          "lng": -52.582194
        },
        "PAAMM02": {
          "lat": -1.523694,
          "lng": -52.572083
        },
        "PAAMM03": {
          "lat": -1.495342,
          "lng": -52.603231
        },
        "PAAMM04": {
          "lat": -1.546944,
          "lng": -52.773528
        },
        "PAAMM05": {
          "lat": -0.92139,
          "lng": -52.44139
        },
        "PAAMM06": {
          "lat": -1.495472,
          "lng": -52.603583
        },
        "PAAMM07": {
          "lat": -0.830167,
          "lng": -52.757747
        },
        "PAAMM08": {
          "lat": -0.863,
          "lng": -52.5366
        },
        "PAAMM09": {
          "lat": -0.8716,
          "lng": -52.5428
        },
        "PAAMM1L": {
          "lat": -1.545056,
          "lng": -52.767361
        },
        "PAAMM90": {
          "lat": -1.71389,
          "lng": -53.0799
        },
        "PAANJ01": {
          "lat": -0.985019,
          "lng": -49.938897
        },
        "PAANP01": {
          "lat": -3.470211,
          "lng": -51.204461
        },
        "PAANP02": {
          "lat": -3.104772,
          "lng": -51.689447
        },
        "PAANP03": {
          "lat": -3.373362,
          "lng": -51.320901
        },
        "PAANP04": {
          "lat": -3.326736,
          "lng": -51.457389
        },
        "PAANP05": {
          "lat": -3.13203876695237,
          "lng": -51.5907549914798
        },
        "PAANP1L": {
          "lat": -3.46805,
          "lng": -51.20414
        },
        "PAATM01": {
          "lat": -3.205,
          "lng": -52.213333
        },
        "PAATM02": {
          "lat": -3.19667,
          "lng": -52.18778
        },
        "PAATM03": {
          "lat": -3.213516,
          "lng": -52.226042
        },
        "PAATM04": {
          "lat": -3.194444,
          "lng": -52.220278
        },
        "PAATM05": {
          "lat": -3.434179,
          "lng": -52.123346
        },
        "PAATM06": {
          "lat": -3.394629,
          "lng": -52.39528
        },
        "PAATM07": {
          "lat": -3.194444,
          "lng": -52.22
        },
        "PAATM08": {
          "lat": -3.163369,
          "lng": -52.219011
        },
        "PAATM09": {
          "lat": -3.184395,
          "lng": -52.215204
        },
        "PAATM10": {
          "lat": -3.173547,
          "lng": -52.190005
        },
        "PAATM11": {
          "lat": -3.175576,
          "lng": -52.174265
        },
        "PAATM12": {
          "lat": -3.192778,
          "lng": -52.203778
        },
        "PAATM13": {
          "lat": -3.20588,
          "lng": -52.2144
        },
        "PAATM14": {
          "lat": -3.18498,
          "lng": -52.22936
        },
        "PAATM15": {
          "lat": -3.239444,
          "lng": -52.265528
        },
        "PAATM16": {
          "lat": -3.19959,
          "lng": -52.25674
        },
        "PAATM17": {
          "lat": -3.41288,
          "lng": -52.091666
        },
        "PAATM18": {
          "lat": -8.622542,
          "lng": -55.056786
        },
        "PAATM99": {
          "lat": -3.20689,
          "lng": -52.2088
        },
        "PAAUP01": {
          "lat": -2.13474,
          "lng": -47.556987
        },
        "PAAUP02": {
          "lat": -2.135861,
          "lng": -47.556861
        },
        "PAAUP03": {
          "lat": -2.132972222,
          "lng": -47.559361111
        },
        "PAAUP04": {
          "lat": -2.038,
          "lng": -47.750806
        },
        "PAAVE01": {
          "lat": -3.60494,
          "lng": -55.32361
        },
        "PAAVE02": {
          "lat": -3.333765,
          "lng": -55.322778
        },
        "PAAVE03": {
          "lat": -3.605,
          "lng": -55.3289
        },
        "PAAVE04": {
          "lat": -3.826561,
          "lng": -55.492731
        },
        "PAAVE05": {
          "lat": -3.639972,
          "lng": -55.374694
        },
        "PAAVE06": {
          "lat": -3.946194,
          "lng": -55.582528
        },
        "PAAVE07": {
          "lat": -3.334952,
          "lng": -55.32396
        },
        "PAAVE08": {
          "lat": -3.968477,
          "lng": -55.803301
        },
        "PABBO01": {
          "lat": -3.783889,
          "lng": -49.570278
        },
        "PABBO02": {
          "lat": -3.55663,
          "lng": -49.025863
        },
        "PABCC01": {
          "lat": -1.449355556,
          "lng": -48.49009444
        },
        "PABCN01": {
          "lat": -1.510833,
          "lng": -48.613056
        },
        "PABCN02": {
          "lat": -1.51706,
          "lng": -48.69362
        },
        "PABCN03": {
          "lat": -1.55611,
          "lng": -48.730598
        },
        "PABCN04": {
          "lat": -1.56586,
          "lng": -48.7666
        },
        "PABCN05": {
          "lat": -1.494722,
          "lng": -48.708056
        },
        "PABCN06": {
          "lat": -1.52472,
          "lng": -48.677145
        },
        "PABCN07": {
          "lat": -1.50408,
          "lng": -48.69834
        },
        "PABCN08": {
          "lat": -1.502781,
          "lng": -48.618831
        },
        "PABCN09": {
          "lat": -1.556944,
          "lng": -48.728333
        },
        "PABCN10": {
          "lat": -1.516722,
          "lng": -48.717222
        },
        "PABCN11": {
          "lat": -1.53305,
          "lng": -48.68147
        },
        "PABCN12": {
          "lat": -1.525371,
          "lng": -48.622347
        },
        "PABCN13": {
          "lat": -1.520635,
          "lng": -48.663449
        },
        "PABCN14": {
          "lat": -1.50729,
          "lng": -48.62478
        },
        "PABCN15": {
          "lat": -1.523634,
          "lng": -48.706449
        },
        "PABCN16": {
          "lat": -1.550472,
          "lng": -48.738528
        },
        "PABCN17": {
          "lat": -1.51832,
          "lng": -48.69068
        },
        "PABCN18": {
          "lat": -1.51967,
          "lng": -48.70454
        },
        "PABCN19": {
          "lat": -1.54015,
          "lng": -48.72761
        },
        "PABCN20": {
          "lat": -1.5641,
          "lng": -48.76127
        },
        "PABCN21": {
          "lat": -1.560683,
          "lng": -48.507206
        },
        "PABCN22": {
          "lat": -1.51,
          "lng": -48.685
        },
        "PABCNS1": {
          "lat": -1.561243,
          "lng": -48.505791
        },
        "PABEL01": {
          "lat": -1.445817,
          "lng": -48.455928
        },
        "PABEL02": {
          "lat": -1.40488,
          "lng": -48.44744
        },
        "PABEL03": {
          "lat": -1.356917,
          "lng": -48.450027
        },
        "PABEL04": {
          "lat": -1.458403,
          "lng": -48.4778
        },
        "PABEL05": {
          "lat": -1.46223,
          "lng": -48.4919
        },
        "PABEL06": {
          "lat": -1.45187,
          "lng": -48.48085
        },
        "PABEL07": {
          "lat": -1.429521,
          "lng": -48.46871
        },
        "PABEL08": {
          "lat": -1.446404,
          "lng": -48.458198
        },
        "PABEL09": {
          "lat": -1.421239,
          "lng": -48.464244
        },
        "PABEL10": {
          "lat": -1.417258,
          "lng": -48.472595
        },
        "PABEL11": {
          "lat": -1.417688,
          "lng": -48.471049
        },
        "PABEL12": {
          "lat": -1.167339,
          "lng": -48.466289
        },
        "PABEL13": {
          "lat": -1.352701,
          "lng": -48.447396
        },
        "PABEL14": {
          "lat": -1.361616,
          "lng": -48.476876
        },
        "PABEL15": {
          "lat": -1.456263,
          "lng": -48.490647
        },
        "PABEL16": {
          "lat": -1.303833,
          "lng": -48.470669
        },
        "PABEL17": {
          "lat": -1.3063,
          "lng": -48.481433
        },
        "PABEL18": {
          "lat": -1.30969,
          "lng": -48.484605
        },
        "PABEL19": {
          "lat": -1.35044,
          "lng": -48.44928
        },
        "PABEL20": {
          "lat": -1.45316,
          "lng": -48.48194
        },
        "PABEL21": {
          "lat": -1.46223,
          "lng": -48.4919
        },
        "PABEL22": {
          "lat": -1.458596056482943,
          "lng": -48.4782774332038
        },
        "PABEL23": {
          "lat": -1.265575,
          "lng": -48.452113
        },
        "PABEL24": {
          "lat": -1.40725,
          "lng": -48.445639
        },
        "PABEL25": {
          "lat": -1.257,
          "lng": -48.4516
        },
        "PABEL27": {
          "lat": -1.1322,
          "lng": -48.4484
        },
        "PABEL30": {
          "lat": -1.259083,
          "lng": -48.452611
        },
        "PABEL31": {
          "lat": -1.12825,
          "lng": -48.446444
        },
        "PABELX2": {
          "lat": -1.40775,
          "lng": -48.44607
        },
        "PABET01": {
          "lat": -2.63953,
          "lng": -54.93825
        },
        "PABET02": {
          "lat": -2.637722,
          "lng": -54.936806
        },
        "PABET03": {
          "lat": -3.204,
          "lng": -54.954
        },
        "PABGG01": {
          "lat": -5.701608,
          "lng": -48.404721
        },
        "PABGG02": {
          "lat": -5.580222,
          "lng": -48.19294
        },
        "PABGN01": {
          "lat": -1.064037,
          "lng": -46.767205
        },
        "PABGN02": {
          "lat": -0.827639,
          "lng": -46.605999
        },
        "PABGN03": {
          "lat": -1.05025,
          "lng": -46.77141
        },
        "PABGN04": {
          "lat": -1.276056,
          "lng": -46.933111
        },
        "PABGN05": {
          "lat": -1.0629,
          "lng": -46.78201
        },
        "PABGN06": {
          "lat": -0.82768,
          "lng": -46.6058
        },
        "PABGN07": {
          "lat": -1.037222,
          "lng": -46.7725
        },
        "PABGN08": {
          "lat": -1.05605,
          "lng": -46.76369
        },
        "PABGN09": {
          "lat": -1.0683098,
          "lng": -46.7724766
        },
        "PABGN10": {
          "lat": -1.062631825238798,
          "lng": -46.78240696693338
        },
        "PABGN11": {
          "lat": -1.062320742486634,
          "lng": -46.78195099140088
        },
        "PABGN12": {
          "lat": -0.990012,
          "lng": -46.749911
        },
        "PABGN13": {
          "lat": -0.992342,
          "lng": -46.671484
        },
        "PABGN14": {
          "lat": -1.284553,
          "lng": -46.882333
        },
        "PABGN15": {
          "lat": -0.967,
          "lng": -46.748
        },
        "PABGN16": {
          "lat": -1.02612,
          "lng": -46.71793
        },
        "PABGN17": {
          "lat": -0.987166,
          "lng": -46.750138
        },
        "PABGN18": {
          "lat": -1.057474,
          "lng": -46.704991
        },
        "PABGN19": {
          "lat": -0.851944,
          "lng": -46.601194
        },
        "PABGN20": {
          "lat": -0.987941097447986,
          "lng": -46.7425230816616
        },
        "PABGN21": {
          "lat": -1.321917,
          "lng": -46.854667
        },
        "PABGX01": {
          "lat": -1.897222,
          "lng": -50.214444
        },
        "PABGX02": {
          "lat": -2.12674,
          "lng": -50.230481
        },
        "PABGX03": {
          "lat": -1.89722,
          "lng": -50.21444
        },
        "PABGX04": {
          "lat": -1.89719,
          "lng": -50.2099
        },
        "PABIO01": {
          "lat": -2.79587,
          "lng": -49.66785
        },
        "PABIO02": {
          "lat": -3.096947,
          "lng": -49.682219
        },
        "PABIO03": {
          "lat": -3.032199,
          "lng": -49.64071
        },
        "PABIO04": {
          "lat": -2.85134,
          "lng": -49.76745
        },
        "PABIO05": {
          "lat": -2.7884,
          "lng": -49.67462
        },
        "PABIO06": {
          "lat": -2.813498,
          "lng": -49.533108
        },
        "PABJT01": {
          "lat": -5.04759,
          "lng": -48.600012
        },
        "PABJT02": {
          "lat": -5.13333,
          "lng": -48.80889
        },
        "PABJT03": {
          "lat": -4.95928,
          "lng": -48.87282
        },
        "PABJT90": {
          "lat": -5.087481,
          "lng": -48.695772
        },
        "PABJT91": {
          "lat": -5.210275,
          "lng": -49.039181
        },
        "PABL100": {
          "lat": -1.452988,
          "lng": -48.495851
        },
        "PABLI50": {
          "lat": -1.450736,
          "lng": -48.496884
        },
        "PABLI51": {
          "lat": -1.454735,
          "lng": -48.487644
        },
        "PABLI52": {
          "lat": -1.449291,
          "lng": -48.497193
        },
        "PABLM01": {
          "lat": -1.469584,
          "lng": -48.493802
        },
        "PABLM02": {
          "lat": -1.466613,
          "lng": -48.497249
        },
        "PABLM03": {
          "lat": -1.4625,
          "lng": -48.500769
        },
        "PABLM04": {
          "lat": -1.457527,
          "lng": -48.504862
        },
        "PABLM05": {
          "lat": -1.4525,
          "lng": -48.500307
        },
        "PABLM05_001": {
          "lat": -1.451081,
          "lng": -48.501062
        },
        "PABLM05_002": {
          "lat": -1.452114,
          "lng": -48.501999
        },
        "PABLM05_003": {
          "lat": -1.453371,
          "lng": -48.50333
        },
        "PABLM05_004": {
          "lat": -1.453252,
          "lng": -48.502134
        },
        "PABLM05_005": {
          "lat": -1.451986,
          "lng": -48.501001
        },
        "PABLM05_006": {
          "lat": -1.450079,
          "lng": -48.498776
        },
        "PABLM06": {
          "lat": -1.459029,
          "lng": -48.495897
        },
        "PABLM07": {
          "lat": -1.465555,
          "lng": -48.486666
        },
        "PABLM08": {
          "lat": -1.472108,
          "lng": -48.478293
        },
        "PABLM09": {
          "lat": -1.47461,
          "lng": -48.46124
        },
        "PABLM10": {
          "lat": -1.461451,
          "lng": -48.470801
        },
        "PABLM11": {
          "lat": -1.463119,
          "lng": -48.478938
        },
        "PABLM12": {
          "lat": -1.45433,
          "lng": -48.48589
        },
        "PABLM13": {
          "lat": -1.446388,
          "lng": -48.494444
        },
        "PABLM13_001": {
          "lat": -1.444573,
          "lng": -48.492335
        },
        "PABLM14": {
          "lat": -1.44044,
          "lng": -48.4854
        },
        "PABLM15": {
          "lat": -1.44694,
          "lng": -48.47781
        },
        "PABLM16": {
          "lat": -1.452417,
          "lng": -48.467222
        },
        "PABLM17": {
          "lat": -1.458386,
          "lng": -48.45718
        },
        "PABLM18": {
          "lat": -1.464672,
          "lng": -48.44896
        },
        "PABLM19": {
          "lat": -1.448807,
          "lng": -48.449164
        },
        "PABLM20": {
          "lat": -1.43,
          "lng": -48.4830555555556
        },
        "PABLM21": {
          "lat": -1.435085,
          "lng": -48.473461
        },
        "PABLM22": {
          "lat": -1.439633,
          "lng": -48.465832
        },
        "PABLM23": {
          "lat": -1.4455,
          "lng": -48.42624
        },
        "PABLM24": {
          "lat": -1.438007,
          "lng": -48.457842
        },
        "PABLM25": {
          "lat": -1.42802,
          "lng": -48.46162
        },
        "PABLM26": {
          "lat": -1.42306,
          "lng": -48.468324
        },
        "PABLM27": {
          "lat": -1.419162,
          "lng": -48.477336
        },
        "PABLM28": {
          "lat": -1.417296,
          "lng": -48.49255
        },
        "PABLM29": {
          "lat": -1.413056,
          "lng": -48.468056
        },
        "PABLM30": {
          "lat": -1.426833,
          "lng": -48.455742
        },
        "PABLM31": {
          "lat": -1.431722,
          "lng": -48.446917
        },
        "PABLM32": {
          "lat": -1.41799,
          "lng": -48.44876
        },
        "PABLM33": {
          "lat": -1.408854,
          "lng": -48.441308
        },
        "PABLM33_001": {
          "lat": -1.408914,
          "lng": -48.440842
        },
        "PABLM34": {
          "lat": -1.400299,
          "lng": -48.453944
        },
        "PABLM35": {
          "lat": -1.396383,
          "lng": -48.434581
        },
        "PABLM36": {
          "lat": -1.407832,
          "lng": -48.427695
        },
        "PABLM37": {
          "lat": -1.39041,
          "lng": -48.48102
        },
        "PABLM38": {
          "lat": -1.40034,
          "lng": -48.49065
        },
        "PABLM39": {
          "lat": -1.39944,
          "lng": -48.4744
        },
        "PABLM40": {
          "lat": -1.384603,
          "lng": -48.458991
        },
        "PABLM41": {
          "lat": -1.37885,
          "lng": -48.43845
        },
        "PABLM42": {
          "lat": -1.372138,
          "lng": -48.479349
        },
        "PABLM43": {
          "lat": -1.361121,
          "lng": -48.46743
        },
        "PABLM44": {
          "lat": -1.36625,
          "lng": -48.45757
        },
        "PABLM45": {
          "lat": -1.36204,
          "lng": -48.4462
        },
        "PABLM46": {
          "lat": -1.40499,
          "lng": -48.48263
        },
        "PABLM47": {
          "lat": -1.35179,
          "lng": -48.47651
        },
        "PABLM48": {
          "lat": -1.330226,
          "lng": -48.475768
        },
        "PABLM49": {
          "lat": -1.347742,
          "lng": -48.457834
        },
        "PABLM50": {
          "lat": -1.351389,
          "lng": -48.433611
        },
        "PABLM51": {
          "lat": -1.33388888888889,
          "lng": -48.4483333333333
        },
        "PABLM52": {
          "lat": -1.32599,
          "lng": -48.43853
        },
        "PABLM53": {
          "lat": -1.31251,
          "lng": -48.45086
        },
        "PABLM54": {
          "lat": -1.310377,
          "lng": -48.474493
        },
        "PABLM55": {
          "lat": -1.30181,
          "lng": -48.48661
        },
        "PABLM56": {
          "lat": -1.300278,
          "lng": -48.465833
        },
        "PABLM57": {
          "lat": -1.291648,
          "lng": -48.452897
        },
        "PABLM58": {
          "lat": -1.277411,
          "lng": -48.474038
        },
        "PABLM59": {
          "lat": -1.259958,
          "lng": -48.465696
        },
        "PABLM60": {
          "lat": -1.1618,
          "lng": -48.46738
        },
        "PABLM61": {
          "lat": -1.142912,
          "lng": -48.459946
        },
        "PABLM62": {
          "lat": -1.120793,
          "lng": -48.428473
        },
        "PABLM63": {
          "lat": -1.100556,
          "lng": -48.400833
        },
        "PABLM64": {
          "lat": -1.070083,
          "lng": -48.392194
        },
        "PABLM65": {
          "lat": -1.065972,
          "lng": -48.33766
        },
        "PABLM66": {
          "lat": -1.454444,
          "lng": -48.473055
        },
        "PABLM66_001": {
          "lat": -1.45279,
          "lng": -48.477897
        },
        "PABLM67": {
          "lat": -1.450195,
          "lng": -48.488361
        },
        "PABLM68": {
          "lat": -1.438006,
          "lng": -48.491884
        },
        "PABLM69": {
          "lat": -1.466868,
          "lng": -48.46811
        },
        "PABLM70": {
          "lat": -1.436958,
          "lng": -48.487976
        },
        "PABLM71": {
          "lat": -1.4483,
          "lng": -48.46168
        },
        "PABLM72": {
          "lat": -1.461037,
          "lng": -48.485887
        },
        "PABLM73": {
          "lat": -1.4425,
          "lng": -48.473055
        },
        "PABLM74": {
          "lat": -1.42386,
          "lng": -48.48739
        },
        "PABLM75": {
          "lat": -1.45222,
          "lng": -48.4964
        },
        "PABLM75_001": {
          "lat": -1.44844,
          "lng": -48.49851
        },
        "PABLM75_002": {
          "lat": -1.450392,
          "lng": -48.497081
        },
        "PABLM75_003": {
          "lat": -1.451596,
          "lng": -48.496601
        },
        "PABLM75_004": {
          "lat": -1.452711,
          "lng": -48.495377
        },
        "PABLM75_005": {
          "lat": -1.453733,
          "lng": -48.493263
        },
        "PABLM75_006": {
          "lat": -1.453675,
          "lng": -48.491014
        },
        "PABLM76": {
          "lat": -1.4425,
          "lng": -48.488055
        },
        "PABLM77": {
          "lat": -1.446475,
          "lng": -48.471595
        },
        "PABLM78": {
          "lat": -1.393333,
          "lng": -48.394806
        },
        "PABLM79": {
          "lat": -1.36696,
          "lng": -48.427919
        },
        "PABLM80": {
          "lat": -1.429278,
          "lng": -48.475125
        },
        "PABLM81": {
          "lat": -1.43395,
          "lng": -48.46507
        },
        "PABLM81_001": {
          "lat": -1.433843,
          "lng": -48.464877
        },
        "PABLM82": {
          "lat": -1.38995,
          "lng": -48.429399
        },
        "PABLM83": {
          "lat": -1.466758,
          "lng": -48.479067
        },
        "PABLM84": {
          "lat": -1.32213,
          "lng": -48.454704
        },
        "PABLM85": {
          "lat": -1.440069,
          "lng": -48.448189
        },
        "PABLM86": {
          "lat": -1.438613,
          "lng": -48.48048
        },
        "PABLM87": {
          "lat": -1.452099,
          "lng": -48.477735
        },
        "PABLM88": {
          "lat": -1.425132,
          "lng": -48.452512
        },
        "PABLM89": {
          "lat": -1.4086,
          "lng": -48.4405
        },
        "PABLM90": {
          "lat": -1.40369,
          "lng": -48.432
        },
        "PABLM91": {
          "lat": -1.29501,
          "lng": -48.4756
        },
        "PABLM92": {
          "lat": -1.473584,
          "lng": -48.485804
        },
        "PABLM93": {
          "lat": -1.445739,
          "lng": -48.48381
        },
        "PABLM94": {
          "lat": -1.37472222222222,
          "lng": -48.4522222222222
        },
        "PABLM95": {
          "lat": -1.45695,
          "lng": -48.500698
        },
        "PABLM96": {
          "lat": -1.455227,
          "lng": -48.495923
        },
        "PABLM97": {
          "lat": -1.456712,
          "lng": -48.495498
        },
        "PABLM98": {
          "lat": -1.341848,
          "lng": -48.468131
        },
        "PABLM99": {
          "lat": -1.371358,
          "lng": -48.443592
        },
        "PABLMA1": {
          "lat": -1.455295,
          "lng": -48.504366
        },
        "PABLMA2": {
          "lat": -1.472394,
          "lng": -48.468638
        },
        "PABLMA3": {
          "lat": -1.466848,
          "lng": -48.458238
        },
        "PABLMA4": {
          "lat": -1.471744,
          "lng": -48.452209
        },
        "PABLMA5": {
          "lat": -1.454253,
          "lng": -48.44896
        },
        "PABLMA6": {
          "lat": -1.442711,
          "lng": -48.45897
        },
        "PABLMA7": {
          "lat": -1.432778,
          "lng": -48.454616
        },
        "PABLMA8": {
          "lat": -1.423791,
          "lng": -48.477146
        },
        "PABLMA9": {
          "lat": -1.427892,
          "lng": -48.469005
        },
        "PABLMAA": {
          "lat": -1.385461,
          "lng": -48.442651
        },
        "PABLMAB": {
          "lat": -1.463253,
          "lng": -48.504599
        },
        "PABLMAC": {
          "lat": -1.474696,
          "lng": -48.45373648
        },
        "PABLMAD": {
          "lat": -1.405027664,
          "lng": -48.46966068
        },
        "PABLMAE": {
          "lat": -1.412135,
          "lng": -48.45612978
        },
        "PABLMAF": {
          "lat": -1.395689,
          "lng": -48.4489999
        },
        "PABLMAG": {
          "lat": -1.419267,
          "lng": -48.4437111
        },
        "PABLMAH": {
          "lat": -1.471944,
          "lng": -48.49725
        },
        "PABLMAJ": {
          "lat": -1.395958,
          "lng": -48.488981
        },
        "PABLMAK": {
          "lat": -1.455918,
          "lng": -48.505746
        },
        "PABLMAL": {
          "lat": -1.446543,
          "lng": -48.498291
        },
        "PABLMAM": {
          "lat": -1.39267,
          "lng": -48.484561
        },
        "PABLMB1": {
          "lat": -1.407957,
          "lng": -48.473448
        },
        "PABLMB2": {
          "lat": -1.415512,
          "lng": -48.487316
        },
        "PABLMB3": {
          "lat": -1.407541,
          "lng": -48.49181
        },
        "PABLMB4": {
          "lat": -1.34014,
          "lng": -48.479146
        },
        "PABLMB5": {
          "lat": -1.353367,
          "lng": -48.465036
        },
        "PABLMB6": {
          "lat": -1.401998,
          "lng": -48.462456
        },
        "PABLMB7": {
          "lat": -1.364494,
          "lng": -48.468815
        },
        "PABLMB8": {
          "lat": -1.327902,
          "lng": -48.464993
        },
        "PABLMB9": {
          "lat": -1.295171,
          "lng": -48.480138
        },
        "PABLMC0": {
          "lat": -1.29248,
          "lng": -48.47995
        },
        "PABLMC1": {
          "lat": -1.28995,
          "lng": -48.46409
        },
        "PABLMC2": {
          "lat": -1.301936,
          "lng": -48.453664
        },
        "PABLMC3": {
          "lat": -1.271868,
          "lng": -48.435722
        },
        "PABLMC4": {
          "lat": -1.250602,
          "lng": -48.445657
        },
        "PABLMC5": {
          "lat": -1.40098,
          "lng": -48.437139
        },
        "PABLMC6": {
          "lat": -1.338364,
          "lng": -48.457643
        },
        "PABLMC7": {
          "lat": -1.379062,
          "lng": -48.460344
        },
        "PABLMC8": {
          "lat": -1.12613,
          "lng": -48.438145
        },
        "PABLMC9": {
          "lat": -1.132753,
          "lng": -48.455694
        },
        "PABLMD0": {
          "lat": -1.314436,
          "lng": -48.463128
        },
        "PABLMD1": {
          "lat": -1.108448,
          "lng": -48.418612
        },
        "PABLMD2": {
          "lat": -1.151449,
          "lng": -48.468921
        },
        "PABLMD3": {
          "lat": -1.084821,
          "lng": -48.366926
        },
        "PABLMD4": {
          "lat": -1.377618778,
          "lng": -48.44401078
        },
        "PABLMD5": {
          "lat": -1.407406,
          "lng": -48.454084
        },
        "PABLMD6": {
          "lat": -1.388464,
          "lng": -48.468178
        },
        "PABLMD7": {
          "lat": -1.415158,
          "lng": -48.442413
        },
        "PABLMD8": {
          "lat": -1.438877,
          "lng": -48.478264
        },
        "PABLMD9": {
          "lat": -1.424815,
          "lng": -48.447686
        },
        "PABLME0": {
          "lat": -1.30091,
          "lng": -48.45327
        },
        "PABLME1": {
          "lat": -1.466988,
          "lng": -48.502383
        },
        "PABLME2": {
          "lat": -1.462152,
          "lng": -48.495596
        },
        "PABLME3": {
          "lat": -1.459389,
          "lng": -48.488704
        },
        "PABLME4": {
          "lat": -1.453647,
          "lng": -48.489394
        },
        "PABLME5": {
          "lat": -1.450175,
          "lng": -48.474312
        },
        "PABLME6": {
          "lat": -1.434251,
          "lng": -48.459359
        },
        "PABLME7": {
          "lat": -1.35738,
          "lng": -48.454331
        },
        "PABLME8": {
          "lat": -1.456095,
          "lng": -48.503709
        },
        "PABLME9": {
          "lat": -1.469123,
          "lng": -48.485794
        },
        "PABLMF0": {
          "lat": -1.10574,
          "lng": -48.41692
        },
        "PABLMF1": {
          "lat": -1.466249,
          "lng": -48.492077
        },
        "PABLMF2": {
          "lat": -1.460089,
          "lng": -48.505083
        },
        "PABLMF3": {
          "lat": -1.457184,
          "lng": -48.467728
        },
        "PABLMF4": {
          "lat": -1.461388,
          "lng": -48.463854
        },
        "PABLMF5": {
          "lat": -1.434121,
          "lng": -48.483678
        },
        "PABLMF6": {
          "lat": -1.414154,
          "lng": -48.451912
        },
        "PABLMF7": {
          "lat": -1.395577,
          "lng": -48.449509
        },
        "PABLMF8": {
          "lat": -1.408447,
          "lng": -48.434674
        },
        "PABLMF9": {
          "lat": -1.456064,
          "lng": -48.505953
        },
        "PABLMFA": {
          "lat": -1.4597,
          "lng": -48.4452
        },
        "PABLMG0": {
          "lat": -1.0676,
          "lng": -48.35447
        },
        "PABLMG1": {
          "lat": -1.338114,
          "lng": -48.450847
        },
        "PABLMG2": {
          "lat": -1.43992,
          "lng": -48.467174
        },
        "PABLMG3": {
          "lat": -1.42579,
          "lng": -48.450387
        },
        "PABLMG4": {
          "lat": -1.45065,
          "lng": -48.46317
        },
        "PABLMG5": {
          "lat": -1.44216,
          "lng": -48.44783
        },
        "PABLMG6": {
          "lat": -1.4368333,
          "lng": -48.454666
        },
        "PABLMG7": {
          "lat": -1.468311,
          "lng": -48.454969
        },
        "PABLMG8": {
          "lat": -1.40442,
          "lng": -48.43972
        },
        "PABLMG9": {
          "lat": -1.404444,
          "lng": -48.42556
        },
        "PABLMH1": {
          "lat": -1.455527,
          "lng": -48.498382
        },
        "PABLMH2": {
          "lat": -1.43316,
          "lng": -48.4704
        },
        "PABLMH3": {
          "lat": -1.44885,
          "lng": -48.47727
        },
        "PABLMH4": {
          "lat": -1.45253,
          "lng": -48.47107
        },
        "PABLMH5": {
          "lat": -1.455,
          "lng": -48.49
        },
        "PABLMH6": {
          "lat": -1.45885,
          "lng": -48.4853
        },
        "PABLMH7": {
          "lat": -1.442271,
          "lng": -48.461862
        },
        "PABLMH8": {
          "lat": -1.34996,
          "lng": -48.45764
        },
        "PABLMH9": {
          "lat": -1.38029,
          "lng": -48.45641
        },
        "PABLMI1": {
          "lat": -1.40392,
          "lng": -48.4308
        },
        "PABLMI2": {
          "lat": -1.45804,
          "lng": -48.495
        },
        "PABLMI3": {
          "lat": -1.44611111111111,
          "lng": -48.4891666666667
        },
        "PABLMI4": {
          "lat": -1.421808,
          "lng": -48.456642
        },
        "PABLMI5": {
          "lat": -1.370177,
          "lng": -48.44635
        },
        "PABLMI6": {
          "lat": -1.38979,
          "lng": -48.46458
        },
        "PABLMI7": {
          "lat": -1.423775,
          "lng": -48.489811
        },
        "PABLMI8": {
          "lat": -1.421825,
          "lng": -48.456725
        },
        "PABLMI9": {
          "lat": -1.338235,
          "lng": -48.449145
        },
        "PABLMIA": {
          "lat": -1.448112,
          "lng": -48.483314
        },
        "PABLMIB": {
          "lat": -1.437391,
          "lng": -48.458955
        },
        "PABLMIC": {
          "lat": -1.450585,
          "lng": -48.488979
        },
        "PABLMID": {
          "lat": -1.433843,
          "lng": -48.464877
        },
        "PABLMIE": {
          "lat": -1.408914,
          "lng": -48.440842
        },
        "PABLMIF": {
          "lat": -1.4319,
          "lng": -48.455091
        },
        "PABLMIG": {
          "lat": -1.413733,
          "lng": -48.442109
        },
        "PABLMIH": {
          "lat": -1.45279,
          "lng": -48.477897
        },
        "PABLMIJ": {
          "lat": -1.40939,
          "lng": -48.43703
        },
        "PABLMIK": {
          "lat": -1.433843,
          "lng": -48.464877
        },
        "PABLMIL": {
          "lat": -1.381239,
          "lng": -48.44394
        },
        "PABLMJ1": {
          "lat": -1.361,
          "lng": -48.468
        },
        "PABLMJ2": {
          "lat": -1.34219,
          "lng": -48.47806
        },
        "PABLMJ3": {
          "lat": -1.45142,
          "lng": -48.49958
        },
        "PABLMJ4": {
          "lat": -1.14193,
          "lng": -48.46243
        },
        "PABLMJ5": {
          "lat": -1.09764,
          "lng": -48.406188
        },
        "PABLMJ6": {
          "lat": -1.33925,
          "lng": -48.437778
        },
        "PABLMJ7": {
          "lat": -1.30576,
          "lng": -48.460876
        },
        "PABLMJ8": {
          "lat": -1.108905,
          "lng": -48.427383
        },
        "PABLMJ9": {
          "lat": -1.425169,
          "lng": -48.482973
        },
        "PABLMK1": {
          "lat": -1.426364,
          "lng": -48.47039
        },
        "PABLMK2": {
          "lat": -1.414277,
          "lng": -48.47777
        },
        "PABLMK3": {
          "lat": -1.45052,
          "lng": -48.49549
        },
        "PABLMK4": {
          "lat": -1.453764,
          "lng": -48.494317
        },
        "PABLMK5": {
          "lat": -1.31777,
          "lng": -48.43797
        },
        "PABLMK6": {
          "lat": -1.31772,
          "lng": -48.43746
        },
        "PABLMK7": {
          "lat": -1.47034,
          "lng": -48.47827
        },
        "PABLMK8": {
          "lat": -1.46682,
          "lng": -48.48606
        },
        "PABLMK9": {
          "lat": -1.44424,
          "lng": -48.47055
        },
        "PABLML1": {
          "lat": -1.41427,
          "lng": -48.46745
        },
        "PABLML2": {
          "lat": -1.44812,
          "lng": -48.482444
        },
        "PABLML3": {
          "lat": -1.45102,
          "lng": -48.50105
        },
        "PABLML4": {
          "lat": -1.072392,
          "lng": -48.392221
        },
        "PABLML5": {
          "lat": -1.41062,
          "lng": -48.39267
        },
        "PABLML6": {
          "lat": -1.465556,
          "lng": -48.486667
        },
        "PABLML7": {
          "lat": -1.47194,
          "lng": -48.47813
        },
        "PABLML8": {
          "lat": -1.46459,
          "lng": -48.44895
        },
        "PABLML9": {
          "lat": -1.426833,
          "lng": -48.455742
        },
        "PABLMM1": {
          "lat": -1.431722,
          "lng": -48.446917
        },
        "PABLMM2": {
          "lat": -1.35176,
          "lng": -48.476917
        },
        "PABLMM3": {
          "lat": -1.27745,
          "lng": -48.47397
        },
        "PABLMM4": {
          "lat": -1.47263492379822,
          "lng": -48.49329739881051
        },
        "PABLMM5": {
          "lat": -1.459538574071346,
          "lng": -48.49664113624489
        },
        "PABLMM6": {
          "lat": -1.446764389586527,
          "lng": -48.49397829563064
        },
        "PABLMM7": {
          "lat": -1.458513651763715,
          "lng": -48.45731457672035
        },
        "PABLMM8": {
          "lat": -1.438126577365678,
          "lng": -48.4580730429908
        },
        "PABLMM9": {
          "lat": -1.428347127846177,
          "lng": -48.46128204166335
        },
        "PABLMN1": {
          "lat": -1.405343219509986,
          "lng": -48.48218349933545
        },
        "PABLMN2": {
          "lat": -1.30216396018157,
          "lng": -48.48691577182686
        },
        "PABLMN3": {
          "lat": -1.450462134975037,
          "lng": -48.48798012631911
        },
        "PABLMN4": {
          "lat": -1.32240569400039,
          "lng": -48.45057159391702
        },
        "PABLMN5": {
          "lat": -1.374680097007628,
          "lng": -48.45273261971197
        },
        "PABLMN6": {
          "lat": -1.293151962334374,
          "lng": -48.46892655952371
        },
        "PABLMN7": {
          "lat": -1.41062,
          "lng": -48.39267
        },
        "PABLMN8": {
          "lat": -1.465556,
          "lng": -48.486667
        },
        "PABLMN9": {
          "lat": -1.47194,
          "lng": -48.47813
        },
        "PABLMO1": {
          "lat": -1.426833,
          "lng": -48.455742
        },
        "PABLMO2": {
          "lat": -1.27745,
          "lng": -48.47397
        },
        "PABLMO3": {
          "lat": -1.433168,
          "lng": -48.455921
        },
        "PABLMO3_001": {
          "lat": -1.4319,
          "lng": -48.455091
        },
        "PABLMO4": {
          "lat": -1.299454,
          "lng": -48.480692
        },
        "PABLMO5": {
          "lat": -1.31976,
          "lng": -48.43679
        },
        "PABLMO6": {
          "lat": -1.37281,
          "lng": -48.45972
        },
        "PABLMO7": {
          "lat": -1.477563,
          "lng": -48.485481
        },
        "PABLMO8": {
          "lat": -1.46165,
          "lng": -48.463945
        },
        "PABLMO9": {
          "lat": -1.293060790117983,
          "lng": -48.46839548261429
        },
        "PABLMP1": {
          "lat": -1.460611,
          "lng": -48.469461
        },
        "PABLMP2": {
          "lat": -1.45337,
          "lng": -48.50333
        },
        "PABLMP3": {
          "lat": -1.45644,
          "lng": -48.5044
        },
        "PABLMP4": {
          "lat": -1.4424,
          "lng": -48.45014
        },
        "PABLMP5": {
          "lat": -1.34996,
          "lng": -48.45764
        },
        "PABLMP6": {
          "lat": -1.47158,
          "lng": -48.46174
        },
        "PABLMP7": {
          "lat": -1.41121,
          "lng": -48.44117
        },
        "PABLMP8": {
          "lat": -1.40242,
          "lng": -48.45243
        },
        "PABLMP9": {
          "lat": -1.29814,
          "lng": -48.47084
        },
        "PABLMQ1": {
          "lat": -1.43393,
          "lng": -48.45435
        },
        "PABLMQ2": {
          "lat": -1.43247,
          "lng": -48.45883
        },
        "PABLMQ3": {
          "lat": -1.3837,
          "lng": -48.44915
        },
        "PABLMQ4": {
          "lat": -1.46649,
          "lng": -48.48287
        },
        "PABLMQ5": {
          "lat": -1.30262,
          "lng": -48.45419
        },
        "PABLMQ6": {
          "lat": -1.45528,
          "lng": -48.4625
        },
        "PABLMQ7": {
          "lat": -1.3762,
          "lng": -48.48336
        },
        "PABLMQ8": {
          "lat": -1.447334,
          "lng": -48.489834
        },
        "PABLMQ9": {
          "lat": -1.442271,
          "lng": -48.461862
        },
        "PABLMU1": {
          "lat": -1.33925,
          "lng": -48.437778
        },
        "PABLMU2": {
          "lat": -1.314113,
          "lng": -48.463
        },
        "PABLMU3": {
          "lat": -1.411133,
          "lng": -48.467029
        },
        "PABLMU4": {
          "lat": -1.120291,
          "lng": -48.429738
        },
        "PABLMU5": {
          "lat": -1.457056,
          "lng": -48.433417
        },
        "PABLMU6": {
          "lat": -1.36157,
          "lng": -48.47598
        },
        "PABLMU7": {
          "lat": -1.39941,
          "lng": -48.481049
        },
        "PABLMU8": {
          "lat": -1.2945,
          "lng": -48.437
        },
        "PABLMU9": {
          "lat": -1.391293,
          "lng": -48.46956
        },
        "PABLMV1": {
          "lat": -1.416111,
          "lng": -48.492556
        },
        "PABLMV2": {
          "lat": -1.4338,
          "lng": -48.4649
        },
        "PABLMV3": {
          "lat": -1.4089,
          "lng": -48.4408
        },
        "PABLMV4": {
          "lat": -1.4319,
          "lng": -48.4551
        },
        "PABLMV5": {
          "lat": -1.4137,
          "lng": -48.4421
        },
        "PABLMV6": {
          "lat": -1.4528,
          "lng": -48.4779
        },
        "PABLMV7": {
          "lat": -1.409879,
          "lng": -48.437874
        },
        "PABLMV8": {
          "lat": -1.169121,
          "lng": -48.334226
        },
        "PABLMV9": {
          "lat": -1.1534,
          "lng": -48.4693
        },
        "PABLMW1": {
          "lat": -1.44806,
          "lng": -48.4875
        },
        "PABLMW2": {
          "lat": -1.452401,
          "lng": -48.475485
        },
        "PABLMW3": {
          "lat": -1.415889,
          "lng": -48.462966
        },
        "PABLMW4": {
          "lat": -1.421266,
          "lng": -48.458228
        },
        "PABLMW5": {
          "lat": -1.50322,
          "lng": -48.46168
        },
        "PABLMW6": {
          "lat": -1.423958,
          "lng": -48.474379
        },
        "PABLMW7": {
          "lat": -1.427666,
          "lng": -48.443136
        },
        "PABLMW8": {
          "lat": -1.446422,
          "lng": -48.466313
        },
        "PABLMW9": {
          "lat": -1.443224,
          "lng": -48.493745
        },
        "PABLMX1": {
          "lat": -1.472324,
          "lng": -48.484822
        },
        "PABLMX2": {
          "lat": -1.455069,
          "lng": -48.500567
        },
        "PABLMX3": {
          "lat": -1.458441,
          "lng": -48.501943
        },
        "PABLMX4": {
          "lat": -1.450786,
          "lng": -48.497578
        },
        "PABLMX5": {
          "lat": -1.430412,
          "lng": -48.488339
        },
        "PABLMX6": {
          "lat": -1.422432,
          "lng": -48.479353
        },
        "PABLMX7": {
          "lat": -1.39947,
          "lng": -48.46154
        },
        "PABLMX8": {
          "lat": -1.425117,
          "lng": -48.470836
        },
        "PABLMX9": {
          "lat": -1.450514,
          "lng": -48.487525
        },
        "PABLMY0": {
          "lat": -1.320389,
          "lng": -48.458339
        },
        "PABLMY1": {
          "lat": -1.35358,
          "lng": -48.46294
        },
        "PABLMY2": {
          "lat": -1.469999,
          "lng": -48.459175
        },
        "PABLMY3": {
          "lat": -1.454925,
          "lng": -48.449455
        },
        "PABLMY4": {
          "lat": -1.41125,
          "lng": -48.48514
        },
        "PABLMY5": {
          "lat": -1.415167,
          "lng": -48.442944
        },
        "PABLMY5_001": {
          "lat": -1.413733,
          "lng": -48.442109
        },
        "PABLMY5_002": {
          "lat": -1.409879,
          "lng": -48.437874
        },
        "PABLMY6": {
          "lat": -1.39698,
          "lng": -48.40855
        },
        "PABLMY7": {
          "lat": -1.338589,
          "lng": -48.457994
        },
        "PABLMY8": {
          "lat": -1.29364,
          "lng": -48.46883
        },
        "PABLMY9": {
          "lat": -1.26516,
          "lng": -48.43966
        },
        "PABLMZ0": {
          "lat": -1.344398,
          "lng": -48.445019
        },
        "PABLMZ1": {
          "lat": -1.32375,
          "lng": -48.46711
        },
        "PABLMZ2": {
          "lat": -1.338056,
          "lng": -48.479194
        },
        "PABLMZ3": {
          "lat": -1.3711,
          "lng": -48.43559
        },
        "PABLMZ4": {
          "lat": -1.340389,
          "lng": -48.423361
        },
        "PABLMZ5": {
          "lat": -1.28416,
          "lng": -48.45825
        },
        "PABLMZ6": {
          "lat": -1.2492,
          "lng": -48.45315
        },
        "PABLMZ7": {
          "lat": -1.12687,
          "lng": -48.44576
        },
        "PABLMZ8": {
          "lat": -1.26102,
          "lng": -48.55957
        },
        "PABLMZ9": {
          "lat": -1.223899,
          "lng": -48.547739
        },
        "PABNC01": {
          "lat": -7.536207,
          "lng": -50.434154
        },
        "PABNC02": {
          "lat": -7.628665,
          "lng": -50.715957
        },
        "PABNC03": {
          "lat": -7.348168,
          "lng": -50.410559
        },
        "PABNX01": {
          "lat": -1.36153,
          "lng": -47.3073
        },
        "PABNX02": {
          "lat": -1.472428,
          "lng": -47.411525
        },
        "PABNX03": {
          "lat": -1.4716,
          "lng": -47.4113
        },
        "PABRE01": {
          "lat": 0,
          "lng": 0
        },
        "PABRV01": {
          "lat": -1.68322,
          "lng": -50.4807
        },
        "PABRV02": {
          "lat": -1.65203332901001,
          "lng": -50.4458122253418
        },
        "PABRV03": {
          "lat": -1.176047,
          "lng": -50.001344
        },
        "PABSN01": {
          "lat": -3.291785,
          "lng": -52.545788
        },
        "PABSN02": {
          "lat": -2.963337,
          "lng": -52.384168
        },
        "PABSN03": {
          "lat": -3.46822,
          "lng": -52.598369
        },
        "PABSN04": {
          "lat": -3.323284,
          "lng": -52.684485
        },
        "PABSN05": {
          "lat": -3.290556,
          "lng": -52.545556
        },
        "PABSN06": {
          "lat": -3.30586,
          "lng": -52.5388
        },
        "PABSN07": {
          "lat": -3.356889,
          "lng": -52.631306
        },
        "PABSN08": {
          "lat": -3.316553,
          "lng": -52.688642
        },
        "PABUB90": {
          "lat": -3.767222,
          "lng": -49.278057
        },
        "PABUJ01": {
          "lat": -1.514333,
          "lng": -48.042111
        },
        "PABUJ02": {
          "lat": -1.519445,
          "lng": -48.035279
        },
        "PABVR01": {
          "lat": -1.680944,
          "lng": -50.477778
        },
        "PABVR02": {
          "lat": -1.691472,
          "lng": -50.48075
        },
        "PABVR03": {
          "lat": -1.683585018824762,
          "lng": -50.48099794113835
        },
        "PABVR04": {
          "lat": -1.675517,
          "lng": -50.475306
        },
        "PABVR05": {
          "lat": -1.00466,
          "lng": -50.88122
        },
        "PABVR06": {
          "lat": -1.625891462,
          "lng": -50.53771426
        },
        "PABVR07": {
          "lat": -1.66552,
          "lng": -50.46328
        },
        "PABVR08": {
          "lat": -1.67699,
          "lng": -50.49235
        },
        "PABVR09": {
          "lat": -1.69168,
          "lng": -50.47182
        },
        "PABVR10": {
          "lat": -1.68273,
          "lng": -50.46879
        },
        "PABVR11": {
          "lat": -1.67455,
          "lng": -50.4761
        },
        "PABVR12": {
          "lat": -1.684,
          "lng": -50.48828
        },
        "PABVR13": {
          "lat": -1.666935,
          "lng": -50.472891
        },
        "PABVS01": {
          "lat": -1.362859,
          "lng": -48.241848
        },
        "PABVS02": {
          "lat": -1.36005,
          "lng": -48.2606
        },
        "PABVS03": {
          "lat": -1.30197,
          "lng": -48.30932
        },
        "PABVS04": {
          "lat": -1.363439,
          "lng": -48.275362
        },
        "PABVS05": {
          "lat": -1.3405,
          "lng": -48.24665
        },
        "PABVS06": {
          "lat": -1.31392,
          "lng": -48.22725
        },
        "PABVS07": {
          "lat": -1.28265,
          "lng": -48.32195
        },
        "PABVS08": {
          "lat": -1.352719,
          "lng": -48.258531
        },
        "PABVS09": {
          "lat": -1.368998,
          "lng": -48.294263
        },
        "PABVS10": {
          "lat": -1.373278,
          "lng": -48.245917
        },
        "PABVS11": {
          "lat": -1.27977,
          "lng": -48.3236
        },
        "PABVS1E": {
          "lat": -1.360306,
          "lng": -48.260417
        },
        "PACAH01": {
          "lat": -1.293689,
          "lng": -47.892189
        },
        "PACAH02": {
          "lat": -1.29445,
          "lng": -47.9239
        },
        "PACAH03": {
          "lat": -1.27865,
          "lng": -47.92291
        },
        "PACAH04": {
          "lat": -1.305833,
          "lng": -47.938889
        },
        "PACAH05": {
          "lat": -1.295,
          "lng": -47.9469444444444
        },
        "PACAH06": {
          "lat": -1.30572,
          "lng": -48.00058
        },
        "PACAH07": {
          "lat": -1.303889,
          "lng": -47.778056
        },
        "PACAH08": {
          "lat": -1.28747,
          "lng": -47.92919
        },
        "PACAH09": {
          "lat": -1.287843,
          "lng": -47.937065
        },
        "PACAH10": {
          "lat": -1.31266,
          "lng": -47.89641
        },
        "PACAH11": {
          "lat": -1.298139,
          "lng": -47.980917
        },
        "PACAH12": {
          "lat": -1.282123,
          "lng": -47.949821
        },
        "PACAH13": {
          "lat": -1.2936,
          "lng": -47.90748
        },
        "PACAH14": {
          "lat": -1.27791,
          "lng": -47.90686
        },
        "PACAH15": {
          "lat": -1.292089,
          "lng": -47.904498
        },
        "PACAH16": {
          "lat": -1.303333333,
          "lng": -47.91583333
        },
        "PACAH17": {
          "lat": -1.313833,
          "lng": -47.8929
        },
        "PACAH18": {
          "lat": -1.28775,
          "lng": -47.921111
        },
        "PACAH19": {
          "lat": -1.295,
          "lng": -47.946945
        },
        "PACAH1E": {
          "lat": -1.293457,
          "lng": -47.926141
        },
        "PACAH20": {
          "lat": -1.28429,
          "lng": -47.94319
        },
        "PACAH21": {
          "lat": -1.274555,
          "lng": -47.903037
        },
        "PACAH22": {
          "lat": -1.2998889,
          "lng": -47.9143056
        },
        "PACAH23": {
          "lat": -1.2957,
          "lng": -47.9354
        },
        "PACAH24": {
          "lat": -1.308331,
          "lng": -47.914669
        },
        "PACAH25": {
          "lat": -1.269842,
          "lng": -47.940352
        },
        "PACAH50": {
          "lat": -1.297333,
          "lng": -47.922132
        },
        "PACAH51": {
          "lat": -1.28429,
          "lng": -47.94319
        },
        "PACHI01": {
          "lat": -1.75611111111111,
          "lng": -46.5436111111111
        },
        "PACHI02": {
          "lat": -1.93881,
          "lng": -46.55641
        },
        "PACHI03": {
          "lat": -1.83626,
          "lng": -46.523883
        },
        "PACHR01": {
          "lat": -1.012784,
          "lng": -48.960819
        },
        "PACHR02": {
          "lat": -1.016817,
          "lng": -48.964575
        },
        "PACHV01": {
          "lat": -0.160444,
          "lng": -49.988278
        },
        "PACHV02": {
          "lat": -0.32519,
          "lng": -49.90378
        },
        "PACIR01": {
          "lat": -8.26206,
          "lng": -49.2649
        },
        "PACIR02": {
          "lat": -8.21083,
          "lng": -49.6161
        },
        "PACIR03": {
          "lat": -8.290285,
          "lng": -49.275881
        },
        "PACIR90": {
          "lat": -8.26333332061768,
          "lng": -49.410831451416
        },
        "PACKJ01": {
          "lat": -6.537574,
          "lng": -49.855201
        },
        "PACKJ02": {
          "lat": -6.51923,
          "lng": -49.85178
        },
        "PACKJ03": {
          "lat": -6.50971984863281,
          "lng": -49.8527984619141
        },
        "PACKJ04": {
          "lat": -6.52443981170654,
          "lng": -50.1575012207031
        },
        "PACKJ05": {
          "lat": -6.54939,
          "lng": -49.84219
        },
        "PACKJ06": {
          "lat": -6.53373,
          "lng": -49.87485
        },
        "PACKJ07": {
          "lat": -6.521,
          "lng": -49.832
        },
        "PACKJ90": {
          "lat": -6.509917,
          "lng": -49.852917
        },
        "PACKV01": {
          "lat": -0.168472,
          "lng": -49.981944
        },
        "PACKV02": {
          "lat": -0.163,
          "lng": -49.9865
        },
        "PACKV90": {
          "lat": -0.40776,
          "lng": -49.58508
        },
        "PACLK01": {
          "lat": -0.931611,
          "lng": -48.28525
        },
        "PACLR01": {
          "lat": -0.932194,
          "lng": -48.28525
        },
        "PACLZ01": {
          "lat": -6.095974,
          "lng": -49.599357
        },
        "PACLZ02": {
          "lat": -5.95759,
          "lng": -49.65659
        },
        "PACLZ03": {
          "lat": -6.184282,
          "lng": -49.705105
        },
        "PACLZ04": {
          "lat": -6.100278,
          "lng": -49.610611
        },
        "PACLZ90": {
          "lat": 0,
          "lng": 0
        },
        "PACME01": {
          "lat": -2.227278,
          "lng": -49.488242
        },
        "PACME02": {
          "lat": -2.245823,
          "lng": -49.50032
        },
        "PACME03": {
          "lat": -2.39265,
          "lng": -49.549681
        },
        "PACME04": {
          "lat": -2.131391,
          "lng": -49.631116
        },
        "PACME05": {
          "lat": -2.235553,
          "lng": -49.353058
        },
        "PACME06": {
          "lat": -2.07104,
          "lng": -49.4609
        },
        "PACME07": {
          "lat": -2.253539,
          "lng": -49.50863
        },
        "PACME08": {
          "lat": -2.239053,
          "lng": -49.494396
        },
        "PACME09": {
          "lat": -2.243563,
          "lng": -49.50998
        },
        "PACME10": {
          "lat": -2.434991,
          "lng": -49.438516
        },
        "PACME11": {
          "lat": -2.178694,
          "lng": -49.451972
        },
        "PACME12": {
          "lat": -2.088778,
          "lng": -49.467167
        },
        "PACME13": {
          "lat": -2.190472,
          "lng": -49.327528
        },
        "PACME14": {
          "lat": -1.963778,
          "lng": -49.392389
        },
        "PACME15": {
          "lat": -2.436278,
          "lng": -49.725639
        },
        "PACME16": {
          "lat": -2.256694,
          "lng": -49.523389
        },
        "PACME17": {
          "lat": -2.237143,
          "lng": -49.504586
        },
        "PACME90": {
          "lat": -2.226298,
          "lng": -49.489318
        },
        "PACMES1": {
          "lat": -2.190915,
          "lng": -49.32759
        },
        "PACOW01": {
          "lat": -1.366437,
          "lng": -48.274955
        },
        "PACOW02": {
          "lat": -1.425132,
          "lng": -48.452512
        },
        "PACOW03": {
          "lat": -1.425132,
          "lng": -48.452512
        },
        "PACOW04": {
          "lat": -1.425132,
          "lng": -48.452512
        },
        "PACOW05": {
          "lat": -0.425132,
          "lng": -48.452512
        },
        "PACOW06": {
          "lat": -1.450195,
          "lng": -48.488361
        },
        "PACOW07": {
          "lat": -1.450195,
          "lng": -48.488361
        },
        "PACOW08": {
          "lat": -1.450195,
          "lng": -48.488361
        },
        "PACPC01": {
          "lat": -1.748602,
          "lng": -47.060693
        },
        "PACPC02": {
          "lat": -1.75418,
          "lng": -47.06889
        },
        "PACPC03": {
          "lat": -1.748056,
          "lng": -47.06
        },
        "PACPC04": {
          "lat": -1.576722,
          "lng": -47.033111
        },
        "PACPC05": {
          "lat": -2.20367,
          "lng": -47.22699
        },
        "PACPC06": {
          "lat": -1.65248,
          "lng": -47.11465
        },
        "PACPC07": {
          "lat": -2.483667,
          "lng": -47.183667
        },
        "PACPC90": {
          "lat": -1.749667,
          "lng": -47.070056
        },
        "PACPCS1": {
          "lat": -2.20367,
          "lng": -47.22699
        },
        "PACPN01": {
          "lat": -1.196111,
          "lng": -47.183056
        },
        "PACPN02": {
          "lat": -1.19153,
          "lng": -47.173504
        },
        "PACPN03": {
          "lat": -1.13023,
          "lng": -47.06255
        },
        "PACPN04": {
          "lat": -1.18875,
          "lng": -47.16678
        },
        "PACPN05": {
          "lat": -1.193297,
          "lng": -47.170345
        },
        "PACPN06": {
          "lat": -1.19299,
          "lng": -47.17975
        },
        "PACPN07": {
          "lat": -1.20666667,
          "lng": -47.17638889
        },
        "PACPN08": {
          "lat": -1.181028,
          "lng": -47.187389
        },
        "PACPN09": {
          "lat": -1.20742,
          "lng": -47.18367
        },
        "PACPN1E": {
          "lat": -1.190333,
          "lng": -47.1803055
        },
        "PACPZ01": {
          "lat": -1.98593,
          "lng": -47.93887
        },
        "PACPZ02": {
          "lat": -1.79689,
          "lng": -47.89425
        },
        "PACPZ03": {
          "lat": -1.985278,
          "lng": -47.941111
        },
        "PACPZ04": {
          "lat": -2.00092,
          "lng": -47.94533
        },
        "PACPZ05": {
          "lat": -1.991105,
          "lng": -47.947421
        },
        "PACUN01": {
          "lat": -7.81157,
          "lng": -50.76422
        },
        "PACUN90": {
          "lat": -7.8686,
          "lng": -50.54687
        },
        "PACUN91": {
          "lat": -7.88061,
          "lng": -50.35111
        },
        "PACUR01": {
          "lat": -1.889007,
          "lng": -55.110492
        },
        "PACUR02": {
          "lat": -1.888028,
          "lng": -55.12575
        },
        "PACUU01": {
          "lat": -0.7361,
          "lng": -47.85273
        },
        "PACUU02": {
          "lat": -0.713565,
          "lng": -47.873018
        },
        "PACUU03": {
          "lat": -0.72945,
          "lng": -47.85207
        },
        "PACUU04": {
          "lat": -0.822747,
          "lng": -47.857353
        },
        "PACUU05": {
          "lat": -0.926444,
          "lng": -47.859167
        },
        "PACUU06": {
          "lat": -0.684697,
          "lng": -47.936956
        },
        "PACUU07": {
          "lat": -0.6823,
          "lng": -47.937
        },
        "PACUU08": {
          "lat": -0.667569,
          "lng": -47.909586
        },
        "PACUU09": {
          "lat": -0.7237,
          "lng": -47.8596
        },
        "PACVK01": {
          "lat": -0.168472,
          "lng": -49.981944
        },
        "PACYH01": {
          "lat": -1.808331,
          "lng": -49.792692
        },
        "PACYH02": {
          "lat": -1.80833,
          "lng": -49.79269
        },
        "PACYH03": {
          "lat": -1.813839,
          "lng": -49.798956
        },
        "PADEP01": {
          "lat": -1.386473,
          "lng": -48.408258
        },
        "PADEP02": {
          "lat": -1.312751,
          "lng": -48.4552
        },
        "PADEP03": {
          "lat": -1.312751,
          "lng": -48.4552
        },
        "PADEU01": {
          "lat": -4.28719,
          "lng": -47.55494
        },
        "PADEU02": {
          "lat": -4.3031,
          "lng": -47.552006
        },
        "PADEU03": {
          "lat": -4.322481,
          "lng": -47.733871
        },
        "PADEU04": {
          "lat": -4.079723,
          "lng": -47.693055
        },
        "PADEU05": {
          "lat": -4.438916,
          "lng": -47.535418
        },
        "PADEU06": {
          "lat": -4.274444,
          "lng": -47.558611
        },
        "PADEU07": {
          "lat": -4.35492,
          "lng": -47.76012
        },
        "PADEU08": {
          "lat": -4.31081,
          "lng": -47.54828
        },
        "PADEU09": {
          "lat": -3.953716,
          "lng": -48.02751
        },
        "PAEBT01": {
          "lat": -2.99495,
          "lng": -47.3556
        },
        "PAEBT02": {
          "lat": -1.584064,
          "lng": -46.853108
        },
        "PAEBT03": {
          "lat": -1.338006,
          "lng": -47.584533
        },
        "PAEBT04": {
          "lat": -6.0711,
          "lng": -49.9054
        },
        "PAEBT05": {
          "lat": -6.069237,
          "lng": -50.066466
        },
        "PAEBT06": {
          "lat": -3.054167,
          "lng": -47.470833
        },
        "PAEBT07": {
          "lat": -3.20691,
          "lng": -52.20925
        },
        "PAEBT08": {
          "lat": -4.158333,
          "lng": -47.533333
        },
        "PAEDR01": {
          "lat": -6.106081,
          "lng": -49.352722
        },
        "PAEDR02": {
          "lat": -5.997093,
          "lng": -49.250079
        },
        "PAEDR03": {
          "lat": -6.105667,
          "lng": -49.347361
        },
        "PAEDR04": {
          "lat": -6.232064,
          "lng": -49.359633
        },
        "PAEDR05": {
          "lat": -6.103861,
          "lng": -49.374777
        },
        "PAEDR90": {
          "lat": -6.427219,
          "lng": -49.419436
        },
        "PAEDR91": {
          "lat": 0,
          "lng": 0
        },
        "PAEDR92": {
          "lat": 0,
          "lng": 0
        },
        "PAFRA01": {
          "lat": -7.364605,
          "lng": -49.580047
        },
        "PAFRA02": {
          "lat": -7.660288,
          "lng": -49.519227
        },
        "PAFRA03": {
          "lat": -7.559032,
          "lng": -49.70367
        },
        "PAFRO01": {
          "lat": -2.066247,
          "lng": -56.709106
        },
        "PAFRO02": {
          "lat": -1.946896,
          "lng": -56.864372
        },
        "PAFRO03": {
          "lat": -2.18042,
          "lng": -56.6122
        },
        "PAFRS01": {
          "lat": -7.732010045,
          "lng": -49.43330016
        },
        "PAFRS03": {
          "lat": -7.556361,
          "lng": -49.705111
        },
        "PAGFN01": {
          "lat": -1.93013,
          "lng": -47.0506
        },
        "PAGFN02": {
          "lat": -1.937229,
          "lng": -47.045686
        },
        "PAGFN03": {
          "lat": -2.31117,
          "lng": -47.16966
        },
        "PAGFN04": {
          "lat": -2.139382,
          "lng": -47.182477
        },
        "PAGFN05": {
          "lat": -2.1177,
          "lng": -46.96489
        },
        "PAGFN06": {
          "lat": -1.919714,
          "lng": -46.979612
        },
        "PAGMA01": {
          "lat": -1.460412,
          "lng": -48.468837
        },
        "PAGOP90": {
          "lat": -4.148903,
          "lng": -49.064531
        },
        "PAGPA01": {
          "lat": -3.84888888888889,
          "lng": -49.0969444444444
        },
        "PAGPA02": {
          "lat": -3.85006,
          "lng": -48.89176
        },
        "PAGPA03": {
          "lat": -3.64432,
          "lng": -49.04334
        },
        "PAGPA1L": {
          "lat": -3.843497,
          "lng": -49.09202
        },
        "PAGRW01": {
          "lat": -1.408278,
          "lng": -51.647139
        },
        "PAGRW02": {
          "lat": -1.4079,
          "lng": -51.6452
        },
        "PAGRW03": {
          "lat": -0.624483451,
          "lng": -51.20806257
        },
        "PAIAB01": {
          "lat": -4.266587,
          "lng": -55.992545
        },
        "PAIAB02": {
          "lat": -4.24696,
          "lng": -56.0273
        },
        "PAIAB03": {
          "lat": -4.501181,
          "lng": -55.878966
        },
        "PAIAB04": {
          "lat": -4.33077,
          "lng": -56.145671
        },
        "PAIAB05": {
          "lat": -4.08905,
          "lng": -55.924376
        },
        "PAIAB06": {
          "lat": -4.083384,
          "lng": -56.129738
        },
        "PAIAB07": {
          "lat": -4.762062,
          "lng": -56.073785
        },
        "PAIAB08": {
          "lat": -4.09122,
          "lng": -55.68984
        },
        "PAIAB09": {
          "lat": -4.334722,
          "lng": -56.219222
        },
        "PAIAB10": {
          "lat": -4.46056,
          "lng": -56.24899
        },
        "PAIAB11": {
          "lat": -4.25316,
          "lng": -55.98965
        },
        "PAIAB12": {
          "lat": -4.269528,
          "lng": -55.981917
        },
        "PAIAB13": {
          "lat": -4.276357,
          "lng": -56.025283
        },
        "PAIAB14": {
          "lat": -4.24277,
          "lng": -55.97942
        },
        "PAIAB15": {
          "lat": -6.839,
          "lng": -56.5841
        },
        "PAIAB16": {
          "lat": -6.414974,
          "lng": -55.968551
        },
        "PAIAB17": {
          "lat": -6.965355,
          "lng": -56.475535
        },
        "PAIAB18": {
          "lat": -6.421906,
          "lng": -56.050466
        },
        "PAIAB1E": {
          "lat": -4.26951,
          "lng": -55.98844
        },
        "PAIABF1": {
          "lat": -4.2669,
          "lng": -55.9916
        },
        "PAIGC01": {
          "lat": -1.12736,
          "lng": -47.62559
        },
        "PAIGC02": {
          "lat": -1.12736,
          "lng": -47.62559
        },
        "PAIGC03": {
          "lat": -1.006631,
          "lng": -47.4182
        },
        "PAIGC04": {
          "lat": -1.0061,
          "lng": -47.4171
        },
        "PAIGM01": {
          "lat": -1.981306,
          "lng": -48.964889
        },
        "PAIGM02": {
          "lat": -1.973111,
          "lng": -48.953694
        },
        "PAIGM03": {
          "lat": -1.858338,
          "lng": -49.015324
        },
        "PAIGM04": {
          "lat": -2.12069,
          "lng": -49.05357
        },
        "PAIGM05": {
          "lat": -1.984451,
          "lng": -48.961614
        },
        "PAIGM06": {
          "lat": -1.857531,
          "lng": -49.015772
        },
        "PAIGM07": {
          "lat": -2.125297,
          "lng": -49.064931
        },
        "PAIHG01": {
          "lat": -1.4297,
          "lng": -47.9105
        },
        "PAINK01": {
          "lat": -5.127805,
          "lng": -49.33383
        },
        "PAINK02": {
          "lat": -5.13893,
          "lng": -49.33284
        },
        "PAINK03": {
          "lat": -5.021133,
          "lng": -49.420792
        },
        "PAINK04": {
          "lat": -5.185557,
          "lng": -49.564392
        },
        "PAINK05": {
          "lat": -5.2643,
          "lng": -50.4614
        },
        "PAINK06": {
          "lat": -4.96558,
          "lng": -49.44786
        },
        "PAINK07": {
          "lat": -5.165312125,
          "lng": -50.00896232
        },
        "PAIPP01": {
          "lat": -2.561767,
          "lng": -47.498444
        },
        "PAIPP02": {
          "lat": -2.55545,
          "lng": -47.50323
        },
        "PAIPP03": {
          "lat": -2.3895,
          "lng": -47.54191
        },
        "PAIPP04": {
          "lat": -2.724413,
          "lng": -47.463308
        },
        "PAIPP05": {
          "lat": -2.37168,
          "lng": -47.80189
        },
        "PAIPP06": {
          "lat": -2.3975,
          "lng": -47.547778
        },
        "PAIPP07": {
          "lat": -2.561767,
          "lng": -47.498444
        },
        "PAIPP08": {
          "lat": -3.484,
          "lng": -48.95944
        },
        "PAIPP1E": {
          "lat": -2.558611,
          "lng": -47.493889
        },
        "PAITX01": {
          "lat": -2.421111111111,
          "lng": -54.716944444444
        },
        "PAITX02": {
          "lat": -2.439167,
          "lng": -54.716667
        },
        "PAIYT01": {
          "lat": -1.771699,
          "lng": -47.440121
        },
        "PAIYT02": {
          "lat": -1.803,
          "lng": -47.32657
        },
        "PAIYT03": {
          "lat": -1.419201,
          "lng": -48.462193
        },
        "PAIYT04": {
          "lat": -1.771699,
          "lng": -47.440121
        },
        "PAIYT05": {
          "lat": -1.742325,
          "lng": -47.499062
        },
        "PAIYT06": {
          "lat": -1.802253,
          "lng": -47.330321
        },
        "PAJAC01": {
          "lat": -6.221956,
          "lng": -57.765375
        },
        "PAJAC02": {
          "lat": -6.131418,
          "lng": -57.401275
        },
        "PAJUN01": {
          "lat": -4.448333,
          "lng": -49.113333
        },
        "PAJUN02": {
          "lat": -4.62156,
          "lng": -49.09419
        },
        "PAJUN1L": {
          "lat": -4.54,
          "lng": -49.09
        },
        "PAJUN90": {
          "lat": -4.537169,
          "lng": -49.091581
        },
        "PAJUT01": {
          "lat": -2.154328,
          "lng": -56.094275
        },
        "PAJUT90": {
          "lat": -2.45919,
          "lng": -56.41033
        },
        "PALAJ90": {
          "lat": 0,
          "lng": 0
        },
        "PALJU01": {
          "lat": -1.898737,
          "lng": -49.382736
        },
        "PALMB01": {
          "lat": -5.370413,
          "lng": -49.125933
        },
        "PALMB02": {
          "lat": -5.367023,
          "lng": -49.127769
        },
        "PALSM01": {
          "lat": -2.42,
          "lng": -54.71
        },
        "PALST01": {
          "lat": -2.46,
          "lng": -52.42
        },
        "PAMAC01": {
          "lat": -5.369416,
          "lng": -49.134979
        },
        "PAMAR10": {
          "lat": -5.37604,
          "lng": -49.1509
        },
        "PAMBA01": {
          "lat": -5.34881,
          "lng": -49.13239
        },
        "PAMBA02": {
          "lat": -5.36501,
          "lng": -49.1147
        },
        "PAMBA03": {
          "lat": -5.349906,
          "lng": -49.085086
        },
        "PAMBA04": {
          "lat": -5.338591,
          "lng": -49.091716
        },
        "PAMBA05": {
          "lat": -5.212778,
          "lng": -49.043333
        },
        "PAMBA06": {
          "lat": -5.417784,
          "lng": -49.090642
        },
        "PAMBA07": {
          "lat": -5.3826,
          "lng": -49.13547
        },
        "PAMBA08": {
          "lat": -5.349392,
          "lng": -49.108077
        },
        "PAMBA09": {
          "lat": -5.371958,
          "lng": -49.12787
        },
        "PAMBA10": {
          "lat": -5.35728,
          "lng": -49.08262
        },
        "PAMBA11": {
          "lat": -5.329444,
          "lng": -49.094831
        },
        "PAMBA12": {
          "lat": -5.291491,
          "lng": -49.071674
        },
        "PAMBA13": {
          "lat": -5.084167,
          "lng": -49.090278
        },
        "PAMBA14": {
          "lat": -5.016389,
          "lng": -49.084722
        },
        "PAMBA15": {
          "lat": -5.37063,
          "lng": -49.10544
        },
        "PAMBA16": {
          "lat": -5.38163,
          "lng": -49.1206
        },
        "PAMBA17": {
          "lat": -5.337294,
          "lng": -49.095781
        },
        "PAMBA18": {
          "lat": -5.391677,
          "lng": -49.133766
        },
        "PAMBA19": {
          "lat": -5.36572,
          "lng": -49.11483
        },
        "PAMBA20": {
          "lat": -5.42562,
          "lng": -49.27009
        },
        "PAMBA21": {
          "lat": -5.33351,
          "lng": -49.23128
        },
        "PAMBA22": {
          "lat": -5.39368,
          "lng": -49.079439
        },
        "PAMBA23": {
          "lat": -5.388044,
          "lng": -49.147761
        },
        "PAMBA24": {
          "lat": -5.37118,
          "lng": -49.16844
        },
        "PAMBA25": {
          "lat": -5.367822,
          "lng": -49.185498
        },
        "PAMBA26": {
          "lat": -5.365533,
          "lng": -49.122313
        },
        "PAMBA27": {
          "lat": -5.338499,
          "lng": -49.103015
        },
        "PAMBA28": {
          "lat": -5.28928,
          "lng": -49.07594
        },
        "PAMBA29": {
          "lat": -5.268182,
          "lng": -49.073649
        },
        "PAMBA30": {
          "lat": -5.340113,
          "lng": -49.078413
        },
        "PAMBA31": {
          "lat": -5.354178,
          "lng": -49.068394
        },
        "PAMBA32": {
          "lat": -5.37111,
          "lng": -49.04571
        },
        "PAMBA33": {
          "lat": -5.372358,
          "lng": -49.029216
        },
        "PAMBA34": {
          "lat": -5.381897,
          "lng": -49.077941
        },
        "PAMBA35": {
          "lat": -5.3499,
          "lng": -49.08496
        },
        "PAMBA36": {
          "lat": -5.4177,
          "lng": -49.08609
        },
        "PAMBA37": {
          "lat": -5.64005,
          "lng": -49.10651
        },
        "PAMBA38": {
          "lat": -5.3317,
          "lng": -49.1086
        },
        "PAMBA90": {
          "lat": -5.727794,
          "lng": -49.143074
        },
        "PAMBA91": {
          "lat": 0,
          "lng": 0
        },
        "PAMBAI1": {
          "lat": -5.356831,
          "lng": -49.086367
        },
        "PAMBAU1": {
          "lat": -5.2235,
          "lng": -49.032472
        },
        "PAMBAX1": {
          "lat": -5.33829,
          "lng": -49.09252
        },
        "PAMCA01": {
          "lat": -0.763615,
          "lng": -47.461876
        },
        "PAMCA02": {
          "lat": -0.77647,
          "lng": -47.449429
        },
        "PAMCA03": {
          "lat": -0.82884,
          "lng": -47.448451
        },
        "PAMCA04": {
          "lat": -0.839567,
          "lng": -47.431804
        },
        "PAMCA05": {
          "lat": -0.815339,
          "lng": -47.514081
        },
        "PAMDW01": {
          "lat": -3.45927,
          "lng": -52.888721
        },
        "PAMDW02": {
          "lat": -3.460278,
          "lng": -52.8875
        },
        "PAMDW03": {
          "lat": -3.44933,
          "lng": -52.89236
        },
        "PAMDW04": {
          "lat": -3.48189,
          "lng": -52.97295
        },
        "PAMDW05": {
          "lat": -3.38971,
          "lng": -52.72066
        },
        "PAMDW06": {
          "lat": -3.36305,
          "lng": -52.81824
        },
        "PAMDW07": {
          "lat": -3.49197,
          "lng": -52.78841
        },
        "PAMDW08": {
          "lat": -3.51308,
          "lng": -52.91968
        },
        "PAMDW09": {
          "lat": -3.430268,
          "lng": -52.805571
        },
        "PAMEC01": {
          "lat": -1.80359,
          "lng": -50.71557
        },
        "PAMEC02": {
          "lat": -1.80264,
          "lng": -50.71403
        },
        "PAMGH01": {
          "lat": -0.800917,
          "lng": -47.603389
        },
        "PAMGH02": {
          "lat": -0.830631,
          "lng": -47.565989
        },
        "PAMGH03": {
          "lat": -0.88213,
          "lng": -47.58838
        },
        "PAMJB01": {
          "lat": -2.58226,
          "lng": -49.50203
        },
        "PAMJB02": {
          "lat": -2.61265,
          "lng": -49.3136
        },
        "PAMJB03": {
          "lat": -2.613,
          "lng": -49.622
        },
        "PAMJB04": {
          "lat": -2.535972,
          "lng": -49.555444
        },
        "PAMNA01": {
          "lat": -2.002513,
          "lng": -54.071584
        },
        "PAMNG01": {
          "lat": -2.00235,
          "lng": -54.07157
        },
        "PAMNG02": {
          "lat": -1.76518,
          "lng": -54.72111
        },
        "PAMNG03": {
          "lat": -1.93156,
          "lng": -54.26236
        },
        "PAMNG04": {
          "lat": -2.118389,
          "lng": -54.223333
        },
        "PAMNG05": {
          "lat": -2.117806,
          "lng": -54.203139
        },
        "PAMNG06": {
          "lat": -2.197917,
          "lng": -54.374694
        },
        "PAMNG07": {
          "lat": -1.570361,
          "lng": -53.903078
        },
        "PAMNG90": {
          "lat": -1.98655,
          "lng": -54.41391
        },
        "PAMNG91": {
          "lat": -1.927833,
          "lng": -54.272222
        },
        "PAMOJ01": {
          "lat": -1.89211,
          "lng": -48.7637
        },
        "PAMOJ02": {
          "lat": -1.95987,
          "lng": -48.55123
        },
        "PAMOJ03": {
          "lat": -2.91521,
          "lng": -49.12314
        },
        "PAMOJ04": {
          "lat": -1.70058,
          "lng": -48.49923
        },
        "PAMOJ05": {
          "lat": -2.9411,
          "lng": -49.53418
        },
        "PAMOJ06": {
          "lat": -2.09846,
          "lng": -48.80461
        },
        "PAMOJ07": {
          "lat": -2.80412,
          "lng": -49.44507
        },
        "PAMOJ08": {
          "lat": -1.91288,
          "lng": -48.76879
        },
        "PAMOJ09": {
          "lat": -1.88811,
          "lng": -48.76547
        },
        "PAMOJ1L": {
          "lat": -1.90733,
          "lng": -48.76965
        },
        "PAMOJ90": {
          "lat": -3.175375,
          "lng": -48.957905
        },
        "PAMPM01": {
          "lat": -0.633889,
          "lng": -47.653056
        },
        "PAMPM02": {
          "lat": -0.713055555555556,
          "lng": -47.6930555555556
        },
        "PAMPM03": {
          "lat": -0.71,
          "lng": -47.69
        },
        "PAMPM04": {
          "lat": -0.88679,
          "lng": -47.80078
        },
        "PAMPM05": {
          "lat": -0.71509,
          "lng": -47.69718
        },
        "PAMPM06": {
          "lat": -0.6260083,
          "lng": -47.63368
        },
        "PAMPM07": {
          "lat": -0.88331,
          "lng": -47.64784
        },
        "PAMPM08": {
          "lat": -0.944222,
          "lng": -47.733667
        },
        "PAMPM09": {
          "lat": -0.9425,
          "lng": -47.645444
        },
        "PAMPM90": {
          "lat": -0.88502,
          "lng": -47.64957
        },
        "PAMPM91": {
          "lat": -0.633333,
          "lng": -47.653333
        },
        "PAMPMS1": {
          "lat": -0.943699,
          "lng": -47.735056
        },
        "PAMRB01": {
          "lat": 0,
          "lng": 0
        },
        "PAMRB02": {
          "lat": -5.370591,
          "lng": -49.136052
        },
        "PAMRB03": {
          "lat": -5.34861,
          "lng": -49.085
        },
        "PAMRB04": {
          "lat": -5.37001,
          "lng": -49.05085
        },
        "PAMRB05": {
          "lat": -5.339603,
          "lng": -49.091581
        },
        "PAMRB06": {
          "lat": -5.74625,
          "lng": -49.14881
        },
        "PAMRB1V": {
          "lat": -5.348056,
          "lng": -49.084722
        },
        "PAMRK01": {
          "lat": -2.047129,
          "lng": -47.553226
        },
        "PAMRK02": {
          "lat": -1.980625,
          "lng": -47.522699
        },
        "PAMSM01": {
          "lat": -2.422161,
          "lng": -54.718107
        },
        "PAMTB01": {
          "lat": -1.37167,
          "lng": -48.3297
        },
        "PAMTB02": {
          "lat": -1.351879,
          "lng": -48.335809
        },
        "PAMTB03": {
          "lat": -1.36091,
          "lng": -48.3114
        },
        "PAMTB04": {
          "lat": -1.36106,
          "lng": -48.33941
        },
        "PAMTB05": {
          "lat": -1.38081,
          "lng": -48.31633
        },
        "PAMTB06": {
          "lat": -1.368501,
          "lng": -48.363638
        },
        "PAMTB07": {
          "lat": -1.38705,
          "lng": -48.33338
        },
        "PAMTB08": {
          "lat": -1.387056,
          "lng": -48.333472
        },
        "PAMTB09": {
          "lat": -1.3661,
          "lng": -48.33907
        },
        "PAMTB10": {
          "lat": -1.359166,
          "lng": -48.34139
        },
        "PAMTB11": {
          "lat": -1.36452,
          "lng": -48.30963
        },
        "PAMTB12": {
          "lat": -1.351879,
          "lng": -48.335809
        },
        "PAMTB13": {
          "lat": -1.351879,
          "lng": -48.335809
        },
        "PAMTB14": {
          "lat": -1.3751,
          "lng": -48.32298
        },
        "PAMTB15": {
          "lat": -1.375,
          "lng": -48.3403
        },
        "PAMUA01": {
          "lat": -1.529411,
          "lng": -49.220303
        },
        "PAMUA02": {
          "lat": -1.536944,
          "lng": -49.496305
        },
        "PANEP01": {
          "lat": -2.27222,
          "lng": -46.971
        },
        "PANEP02": {
          "lat": -2.267222,
          "lng": -46.973056
        },
        "PANEP03": {
          "lat": -2.278353,
          "lng": -46.975667
        },
        "PANEP04": {
          "lat": -2.24991,
          "lng": -46.77656
        },
        "PANEP05": {
          "lat": -2.36092,
          "lng": -47.06618
        },
        "PANEP06": {
          "lat": -2.48,
          "lng": -46.998
        },
        "PANMB01": {
          "lat": -1.2075,
          "lng": -47.3891666666667
        },
        "PANMB02": {
          "lat": -1.033011,
          "lng": -47.3513
        },
        "PANMB03": {
          "lat": -1.19695,
          "lng": -47.37739
        },
        "PANMB04": {
          "lat": -1.19695,
          "lng": -47.37739
        },
        "PANPS01": {
          "lat": -7.0375,
          "lng": -55.4166666666667
        },
        "PANPS02": {
          "lat": -7.0378,
          "lng": -55.41738
        },
        "PANPS03": {
          "lat": -7.2975,
          "lng": -55.312089
        },
        "PANPX01": {
          "lat": -4.919846,
          "lng": -49.087241
        },
        "PANPX02": {
          "lat": -5.015,
          "lng": -49.132222
        },
        "PANPX03": {
          "lat": -4.85538,
          "lng": -49.26265
        },
        "PANPX90": {
          "lat": 0,
          "lng": 0
        },
        "PANPX91": {
          "lat": 0,
          "lng": 0
        },
        "PANRP01": {
          "lat": -4.24417,
          "lng": -49.944698
        },
        "PANVR01": {
          "lat": -4.252389,
          "lng": -49.947083
        },
        "PANVR02": {
          "lat": -4.14417,
          "lng": -50.21306
        },
        "PANVR03": {
          "lat": -4.53579,
          "lng": -50.76303
        },
        "PANVR04": {
          "lat": -4.426585,
          "lng": -50.655417
        },
        "PANVR05": {
          "lat": -4.699311,
          "lng": -49.679101
        },
        "PANVR90": {
          "lat": -4.20575,
          "lng": -49.935472
        },
        "PAOAN01": {
          "lat": -6.74532,
          "lng": -51.08236
        },
        "PAOAN02": {
          "lat": -6.88129,
          "lng": -50.9941
        },
        "PAOAN03": {
          "lat": -6.75335,
          "lng": -51.06862
        },
        "PAOAN04": {
          "lat": -6.7533,
          "lng": -51.0686
        },
        "PAOAN05": {
          "lat": -6.7448,
          "lng": -51.0694
        },
        "PAOAN06": {
          "lat": -6.762102,
          "lng": -51.075041
        },
        "PAOEA01": {
          "lat": -2.00383,
          "lng": -49.86407
        },
        "PAOEA02": {
          "lat": -2.61918,
          "lng": -49.78114
        },
        "PAOIF01": {
          "lat": -1.453188,
          "lng": -48.491096
        },
        "PAOIF02": {
          "lat": -1.407784,
          "lng": -48.445865
        },
        "PAOIF03": {
          "lat": -2.4226,
          "lng": -54.7178
        },
        "PAOIS01": {
          "lat": -1.904,
          "lng": -55.519333
        },
        "PAOIS02": {
          "lat": -1.895541,
          "lng": -55.517116
        },
        "PAOIS90": {
          "lat": -1.919889,
          "lng": -55.177528
        },
        "PAOUM01": {
          "lat": -1.54512,
          "lng": -47.11432
        },
        "PAOXA01": {
          "lat": -1.753469,
          "lng": -55.863746
        },
        "PAOXA02": {
          "lat": -1.768611,
          "lng": -55.854944
        },
        "PAOXA03": {
          "lat": -1.47082996368408,
          "lng": -56.3791999816895
        },
        "PAOXA04": {
          "lat": -1.084635,
          "lng": -57.046655
        },
        "PAOXA05": {
          "lat": -1.7686,
          "lng": -55.8617
        },
        "PAOXA06": {
          "lat": -1.7742,
          "lng": -55.8567
        },
        "PAOXA07": {
          "lat": -1.7614,
          "lng": -55.8638
        },
        "PAOXA1L": {
          "lat": -1.76233,
          "lng": -55.86247
        },
        "PAPAH01": {
          "lat": -1.80284,
          "lng": -53.4788
        },
        "PAPAH02": {
          "lat": -1.793906,
          "lng": -53.480185
        },
        "PAPAH03": {
          "lat": -1.807498,
          "lng": -53.479282
        },
        "PAPAH04": {
          "lat": -1.62727,
          "lng": -53.66198
        },
        "PAPAH05": {
          "lat": -1.62291,
          "lng": -53.40966
        },
        "PAPAH06": {
          "lat": -1.801556,
          "lng": -53.476972
        },
        "PAPAH07": {
          "lat": -1.549778,
          "lng": -53.681111
        },
        "PAPAO01": {
          "lat": -7.829833,
          "lng": -50.045194
        },
        "PAPAO90": {
          "lat": -7.7598,
          "lng": -50.064675
        },
        "PAPAO91": {
          "lat": -7.54422,
          "lng": -50.042709
        },
        "PAPCJ01": {
          "lat": -3.840243,
          "lng": -50.639534
        },
        "PAPCJ02": {
          "lat": -3.841222,
          "lng": -50.639314
        },
        "PAPCJ03": {
          "lat": -3.533278,
          "lng": -51.136527
        },
        "PAPCJ04": {
          "lat": -3.686712382,
          "lng": -50.20523094
        },
        "PAPCJ1L": {
          "lat": -3.84056,
          "lng": -50.639167
        },
        "PAPGN01": {
          "lat": -3.000861,
          "lng": -47.358306
        },
        "PAPGN02": {
          "lat": -2.984917,
          "lng": -47.45185
        },
        "PAPGN03": {
          "lat": -2.94694,
          "lng": -47.4442
        },
        "PAPGN04": {
          "lat": -3.24693989753723,
          "lng": -47.7374992370605
        },
        "PAPGN05": {
          "lat": -2.981989,
          "lng": -47.348527
        },
        "PAPGN06": {
          "lat": -2.44368,
          "lng": -46.92368
        },
        "PAPGN07": {
          "lat": -3.013521,
          "lng": -47.356122
        },
        "PAPGN08": {
          "lat": -2.996944,
          "lng": -47.35667
        },
        "PAPGN09": {
          "lat": -2.981989,
          "lng": -47.348527
        },
        "PAPGN10": {
          "lat": -2.99166,
          "lng": -47.37615
        },
        "PAPGN11": {
          "lat": -2.978056,
          "lng": -47.363611
        },
        "PAPGN12": {
          "lat": -3.246833,
          "lng": -47.737444
        },
        "PAPGN13": {
          "lat": -3.058736,
          "lng": -47.411411
        },
        "PAPGN14": {
          "lat": -2.94683,
          "lng": -46.747576
        },
        "PAPGN15": {
          "lat": -3.321194,
          "lng": -47.460869
        },
        "PAPGN16": {
          "lat": -3.45045,
          "lng": -47.27129
        },
        "PAPGN17": {
          "lat": -3.422546,
          "lng": -48.336561
        },
        "PAPGN18": {
          "lat": -3.36507,
          "lng": -47.25715
        },
        "PAPGN19": {
          "lat": -3.722549,
          "lng": -48.064765
        },
        "PAPGN20": {
          "lat": -2.989278,
          "lng": -47.35972
        },
        "PAPGN21": {
          "lat": -2.979130149,
          "lng": -47.33682664
        },
        "PAPGN22": {
          "lat": -2.993861,
          "lng": -47.342583
        },
        "PAPGNS1": {
          "lat": -2.94683,
          "lng": -46.747576
        },
        "PAPGNS2": {
          "lat": -3.060298,
          "lng": -47.411546
        },
        "PAPLK01": {
          "lat": -3.869906,
          "lng": -54.213112
        },
        "PAPLK02": {
          "lat": -3.869842,
          "lng": -54.216542
        },
        "PAPLK03": {
          "lat": -3.8687,
          "lng": -54.21638
        },
        "PAPMZ01": {
          "lat": -1.75447,
          "lng": -52.23283
        },
        "PAPMZ02": {
          "lat": -1.7608,
          "lng": -52.234867
        },
        "PAPMZ03": {
          "lat": -1.749261,
          "lng": -52.231121
        },
        "PAPMZ04": {
          "lat": -1.755972,
          "lng": -52.231833
        },
        "PAPMZ05": {
          "lat": -1.617402,
          "lng": -52.066541
        },
        "PAPOR01": {
          "lat": -1.932111,
          "lng": -50.819222
        },
        "PAPOR02": {
          "lat": -1.94875,
          "lng": -50.811528
        },
        "PAPPD01": {
          "lat": -1.38954,
          "lng": -48.86915
        },
        "PAPPD02": {
          "lat": -1.396985,
          "lng": -48.87033
        },
        "PAPPD03": {
          "lat": -1.401045,
          "lng": -48.863206
        },
        "PAPPD04": {
          "lat": -1.366279,
          "lng": -48.804389
        },
        "PAPRB01": {
          "lat": -6.080588,
          "lng": -49.880331
        },
        "PAPRI01": {
          "lat": -1.454009,
          "lng": -48.492987
        },
        "PAPTP01": {
          "lat": -5.7445,
          "lng": -48.316167
        },
        "PAPTP02": {
          "lat": -6.12091,
          "lng": -48.328327
        },
        "PAPTP03": {
          "lat": -5.6936,
          "lng": -48.19592
        },
        "PAPUP01": {
          "lat": -6.06614,
          "lng": -49.8951
        },
        "PAPUP02": {
          "lat": -6.06466,
          "lng": -49.90789
        },
        "PAPUP03": {
          "lat": -6.06972,
          "lng": -50.0625
        },
        "PAPUP04": {
          "lat": -6.05788993835449,
          "lng": -50.1575012207031
        },
        "PAPUP05": {
          "lat": -6.11528015136719,
          "lng": -50.2888984680176
        },
        "PAPUP06": {
          "lat": -6.11417,
          "lng": -50.002201
        },
        "PAPUP07": {
          "lat": -6.057781,
          "lng": -49.885269
        },
        "PAPUP08": {
          "lat": -6.086111,
          "lng": -49.8875
        },
        "PAPUP09": {
          "lat": -6.56353,
          "lng": -51.096
        },
        "PAPUP10": {
          "lat": -6.06819444444444,
          "lng": -50.0690555555556
        },
        "PAPUP11": {
          "lat": -6.114339,
          "lng": -50.002394
        },
        "PAPUP12": {
          "lat": -6.060712,
          "lng": -50.053364
        },
        "PAPUP13": {
          "lat": -6.07931,
          "lng": -49.90099
        },
        "PAPUP14": {
          "lat": -6.08906,
          "lng": -49.854705
        },
        "PAPUP15": {
          "lat": -6.036661,
          "lng": -49.890933
        },
        "PAPUP16": {
          "lat": -6.07036,
          "lng": -49.86361
        },
        "PAPUP17": {
          "lat": -6.10331,
          "lng": -49.842236
        },
        "PAPUP18": {
          "lat": -6.112194,
          "lng": -49.902508
        },
        "PAPUP19": {
          "lat": -6.09806,
          "lng": -49.89167
        },
        "PAPUP20": {
          "lat": -6.100694,
          "lng": -49.863667
        },
        "PAPUP21": {
          "lat": -6.10303,
          "lng": -49.84213
        },
        "PAPUP22": {
          "lat": -6.072152,
          "lng": -49.879188
        },
        "PAPUP23": {
          "lat": -6.017564,
          "lng": -49.888355
        },
        "PAPUP24": {
          "lat": -6.074147,
          "lng": -49.854218
        },
        "PAPUP25": {
          "lat": -6.05416,
          "lng": -49.85505
        },
        "PAPUP26": {
          "lat": -6.055368,
          "lng": -49.872521
        },
        "PAPUP27": {
          "lat": -6.08345,
          "lng": -49.91276
        },
        "PAPUP28": {
          "lat": -6.089253,
          "lng": -49.870815
        },
        "PAPUP29": {
          "lat": -6.082625,
          "lng": -49.789574
        },
        "PAPUP30": {
          "lat": -6.0558,
          "lng": -50.1569
        },
        "PAPUP90": {
          "lat": -6.08405,
          "lng": -49.78887
        },
        "PAPUP91": {
          "lat": -6.064076,
          "lng": -49.916346
        },
        "PAPUP92": {
          "lat": -5.9611,
          "lng": -49.8645
        },
        "PAPUPI1": {
          "lat": -6.09156,
          "lng": -49.856015
        },
        "PAPUPL1": {
          "lat": -6.091981,
          "lng": -49.856171
        },
        "PAPVR01": {
          "lat": -0.943722,
          "lng": -47.123306
        },
        "PAPXB01": {
          "lat": -1.19204,
          "lng": -47.3202
        },
        "PAQUA01": {
          "lat": -0.89507,
          "lng": -47.0074
        },
        "PARDO01": {
          "lat": -8.04154,
          "lng": -50.0417
        },
        "PARDO02": {
          "lat": -8.05505,
          "lng": -50.0414
        },
        "PARDO03": {
          "lat": -8.03456,
          "lng": -50.019462
        },
        "PARDO04": {
          "lat": -8.01972,
          "lng": -50.03851
        },
        "PARDO05": {
          "lat": -8.045611,
          "lng": -50.029
        },
        "PARDO06": {
          "lat": -8.04325,
          "lng": -50.006277
        },
        "PARDO07": {
          "lat": -8.032444,
          "lng": -50.04525
        },
        "PARDO10": {
          "lat": -8.031431,
          "lng": -50.032866
        },
        "PARDO1V": {
          "lat": -8.035833,
          "lng": -50.019444
        },
        "PARMA01": {
          "lat": -7.315409,
          "lng": -50.045292
        },
        "PARMA02": {
          "lat": -7.26917,
          "lng": -49.62256
        },
        "PARMA03": {
          "lat": -7.42152,
          "lng": -49.87756
        },
        "PARNP01": {
          "lat": -4.781631,
          "lng": -48.070608
        },
        "PARNP02": {
          "lat": -4.48378,
          "lng": -48.91442
        },
        "PARNP03": {
          "lat": -4.78943,
          "lng": -48.26909
        },
        "PARNP04": {
          "lat": -4.73774,
          "lng": -48.42494
        },
        "PARNP05": {
          "lat": -4.57377,
          "lng": -48.01812
        },
        "PARNP06": {
          "lat": -4.39577,
          "lng": -48.2134
        },
        "PARNP90": {
          "lat": -4.585086,
          "lng": -47.854756
        },
        "PARRA01": {
          "lat": -6.441973,
          "lng": -48.860168
        },
        "PARRA02": {
          "lat": -6.623869,
          "lng": -48.954267
        },
        "PARRA03": {
          "lat": -6.77237,
          "lng": -48.9732
        },
        "PARRI01": {
          "lat": -4.098822,
          "lng": -54.907902
        },
        "PARRI02": {
          "lat": -4.10114,
          "lng": -54.9094
        },
        "PARRI03": {
          "lat": -4.10192,
          "lng": -54.91045
        },
        "PARRI04": {
          "lat": -4.17904,
          "lng": -55.43319
        },
        "PASAF01": {
          "lat": -1.17164,
          "lng": -47.79709
        },
        "PASAF02": {
          "lat": -1.121917,
          "lng": -47.698333
        },
        "PASAN01": {
          "lat": -14.239424,
          "lng": -53.186502
        },
        "PASAS01": {
          "lat": -0.615577,
          "lng": -47.359444
        },
        "PASAS02": {
          "lat": -0.622556,
          "lng": -47.345568
        },
        "PASAS03": {
          "lat": -0.59954,
          "lng": -47.31141
        },
        "PASAS04": {
          "lat": -0.637432,
          "lng": -47.333253
        },
        "PASAS05": {
          "lat": -0.59539,
          "lng": -47.31881
        },
        "PASAS06": {
          "lat": -0.62302,
          "lng": -47.35917
        },
        "PASAS07": {
          "lat": -0.65645,
          "lng": -47.26915
        },
        "PASAS08": {
          "lat": -0.622222,
          "lng": -47.345556
        },
        "PASAS09": {
          "lat": -0.637432,
          "lng": -47.333253
        },
        "PASAS10": {
          "lat": -0.711744,
          "lng": -47.300703
        },
        "PASAS11": {
          "lat": -0.614861,
          "lng": -47.300144
        },
        "PASAS12": {
          "lat": -0.70325,
          "lng": -47.3649
        },
        "PASAS13": {
          "lat": -0.6529,
          "lng": -47.325
        },
        "PASBJ01": {
          "lat": -0.906667,
          "lng": -47.240556
        },
        "PASBJ02": {
          "lat": -0.769167,
          "lng": -47.173333
        },
        "PASBJ03": {
          "lat": -0.779333,
          "lng": -47.182154
        },
        "PASBJ04": {
          "lat": -0.813316667,
          "lng": -47.22217778
        },
        "PASBJ05": {
          "lat": -0.8569,
          "lng": -47.17501111
        },
        "PASBJ90": {
          "lat": 0,
          "lng": 0
        },
        "PASBK90": {
          "lat": -6.73006,
          "lng": -49.50692
        },
        "PASBK91": {
          "lat": -6.94217,
          "lng": -49.7
        },
        "PASBQ01": {
          "lat": -8.87104,
          "lng": -49.71766
        },
        "PASBQ02": {
          "lat": -8.547761332,
          "lng": -50.05798676
        },
        "PASBQ03": {
          "lat": -8.440051,
          "lng": -50.04486
        },
        "PASCO01": {
          "lat": -0.742667,
          "lng": -48.023383
        },
        "PASDA01": {
          "lat": -5.53805,
          "lng": -48.73398
        },
        "PASDA02": {
          "lat": -5.56836,
          "lng": -48.860167
        },
        "PASDA03": {
          "lat": -5.566178,
          "lng": -48.539019
        },
        "PASDA04": {
          "lat": -5.78013,
          "lng": -48.7432
        },
        "PASDA05": {
          "lat": -5.649113,
          "lng": -48.836285
        },
        "PASDA06": {
          "lat": -5.5519,
          "lng": -48.731
        },
        "PASED01": {
          "lat": -1.458239,
          "lng": -48.477994
        },
        "PASET01": {
          "lat": -1.71506,
          "lng": -49.53244
        },
        "PASET12": {
          "lat": -1.72139,
          "lng": -49.52806
        },
        "PASFX01": {
          "lat": -6.64328,
          "lng": -51.991601
        },
        "PASFX02": {
          "lat": -6.640503,
          "lng": -51.975397
        },
        "PASFX03": {
          "lat": -6.644678,
          "lng": -51.961043
        },
        "PASFX04": {
          "lat": -6.649872,
          "lng": -51.995746
        },
        "PASFX05": {
          "lat": -6.655867,
          "lng": -51.952417
        },
        "PASFX06": {
          "lat": -6.63339,
          "lng": -51.96672
        },
        "PASFX07": {
          "lat": -6.638598,
          "lng": -51.983933
        },
        "PASFX08": {
          "lat": -6.672849,
          "lng": -51.94719
        },
        "PASFX09": {
          "lat": -6.662018,
          "lng": -51.967428
        },
        "PASFX10": {
          "lat": -6.67089,
          "lng": -51.981234
        },
        "PASFX11": {
          "lat": -6.631031,
          "lng": -51.985464
        },
        "PASFX12": {
          "lat": -6.648727,
          "lng": -51.966053
        },
        "PASFX13": {
          "lat": -6.510892,
          "lng": -51.935569
        },
        "PASFX14": {
          "lat": -6.72071,
          "lng": -51.595992
        },
        "PASFX90": {
          "lat": -6.690093,
          "lng": -51.601147
        },
        "PASGU01": {
          "lat": -9.33611,
          "lng": -50.340599
        },
        "PASGU02": {
          "lat": -9.339917,
          "lng": -50.329242
        },
        "PASGU03": {
          "lat": -9.33528,
          "lng": -50.34725
        },
        "PASGU04": {
          "lat": -9.336153,
          "lng": -50.340714
        },
        "PASGU05": {
          "lat": -9.538307,
          "lng": -50.857281
        },
        "PASGU06": {
          "lat": -9.29493,
          "lng": -50.04517
        },
        "PASGU07": {
          "lat": -9.53883,
          "lng": -50.86097
        },
        "PASGZ01": {
          "lat": -6.394444,
          "lng": -48.563611
        },
        "PASID01": {
          "lat": -1.35005,
          "lng": -47.57426
        },
        "PASID02": {
          "lat": -1.35005,
          "lng": -47.57426
        },
        "PASID03": {
          "lat": -1.311924,
          "lng": -47.431195
        },
        "PASIP01": {
          "lat": -1.29593,
          "lng": -48.05212
        },
        "PASIP02": {
          "lat": -1.29056,
          "lng": -48.1503
        },
        "PASIP03": {
          "lat": -1.29593,
          "lng": -48.05212
        },
        "PASIP04": {
          "lat": -1.296139,
          "lng": -48.171722
        },
        "PASIP05": {
          "lat": -1.29871,
          "lng": -48.16248
        },
        "PASIP06": {
          "lat": -1.293581,
          "lng": -48.1542
        },
        "PASIP07": {
          "lat": -1.31472222,
          "lng": -48.1622222
        },
        "PASJF01": {
          "lat": -2.58097,
          "lng": -51.92457
        },
        "PASJF02": {
          "lat": -2.877032,
          "lng": -51.89366
        },
        "PASJF03": {
          "lat": -3.576247,
          "lng": -51.936918
        },
        "PASJF04": {
          "lat": -3.580583,
          "lng": -51.921583
        },
        "PASJF05": {
          "lat": -3.643506,
          "lng": -51.891466
        },
        "PASJF06": {
          "lat": -3.56354106,
          "lng": -51.92234738
        },
        "PASJP01": {
          "lat": -0.84917,
          "lng": -47.92149
        },
        "PASKN01": {
          "lat": -0.93021,
          "lng": -47.39552
        },
        "PASKN02": {
          "lat": -0.88869,
          "lng": -47.3283
        },
        "PASKN03": {
          "lat": -0.946497,
          "lng": -47.334444
        },
        "PASKN04": {
          "lat": -0.888444,
          "lng": -47.327472
        },
        "PASKNS1": {
          "lat": -0.888692,
          "lng": -47.328308
        },
        "PASLP01": {
          "lat": -1.531667,
          "lng": -46.893333
        },
        "PASLP02": {
          "lat": -1.85666,
          "lng": -46.89894
        },
        "PASLP03": {
          "lat": -1.52064,
          "lng": -46.90252
        },
        "PASLP04": {
          "lat": -1.632098,
          "lng": -46.800588
        },
        "PASLV01": {
          "lat": -0.756667,
          "lng": -48.521111
        },
        "PASLV02": {
          "lat": -0.772114,
          "lng": -48.53046
        },
        "PASLV03": {
          "lat": -0.752989,
          "lng": -48.51211
        },
        "PASMG01": {
          "lat": -1.618889,
          "lng": -47.483611
        },
        "PASMG02": {
          "lat": -1.602361,
          "lng": -47.476278
        },
        "PASMG03": {
          "lat": -1.618889,
          "lng": -47.483611
        },
        "PASNB01": {
          "lat": -1.226077,
          "lng": -48.29468
        },
        "PASNB02": {
          "lat": -1.24765,
          "lng": -48.26995
        },
        "PASNB03": {
          "lat": -1.138317,
          "lng": -48.292254
        },
        "PASNB04": {
          "lat": -1.138317,
          "lng": -48.292254
        },
        "PASOG01": {
          "lat": -5.360451,
          "lng": -48.790385
        },
        "PASRM01": {
          "lat": -2.42111111111111,
          "lng": -54.7169444444444
        },
        "PASRM02": {
          "lat": -2.44347,
          "lng": -54.70454
        },
        "PASRM03": {
          "lat": -2.43304,
          "lng": -54.73198
        },
        "PASRM04": {
          "lat": -2.43927,
          "lng": -54.71832
        },
        "PASRM05": {
          "lat": -2.447869,
          "lng": -54.752655
        },
        "PASRM06": {
          "lat": -2.425248,
          "lng": -54.787644
        },
        "PASRM07": {
          "lat": -2.47441,
          "lng": -54.705834
        },
        "PASRM08": {
          "lat": -2.51055555555556,
          "lng": -54.9536111111111
        },
        "PASRM09": {
          "lat": -2.424503,
          "lng": -54.735782
        },
        "PASRM10": {
          "lat": -2.439725,
          "lng": -54.719753
        },
        "PASRM11": {
          "lat": -2.43055555555556,
          "lng": -54.7052777777778
        },
        "PASRM12": {
          "lat": -2.456028,
          "lng": -54.726917
        },
        "PASRM13": {
          "lat": -2.690727,
          "lng": -54.642341
        },
        "PASRM14": {
          "lat": -2.456084,
          "lng": -54.705609
        },
        "PASRM15": {
          "lat": -2.424101,
          "lng": -54.738269
        },
        "PASRM16": {
          "lat": -2.43801,
          "lng": -54.69067
        },
        "PASRM17": {
          "lat": -2.457833,
          "lng": -54.7175
        },
        "PASRM18": {
          "lat": -2.4706,
          "lng": -54.72569
        },
        "PASRM19": {
          "lat": -2.446642,
          "lng": -54.728916
        },
        "PASRM20": {
          "lat": -2.46025,
          "lng": -54.75195
        },
        "PASRM21": {
          "lat": -2.487381,
          "lng": -54.675048
        },
        "PASRM22": {
          "lat": -2.476028,
          "lng": -54.684503
        },
        "PASRM23": {
          "lat": -2.45442,
          "lng": -54.6863
        },
        "PASRM24": {
          "lat": -2.456322,
          "lng": -54.765835
        },
        "PASRM25": {
          "lat": -2.433092,
          "lng": -54.755768
        },
        "PASRM26": {
          "lat": -2.474958,
          "lng": -54.707128
        },
        "PASRM27": {
          "lat": -2.507222,
          "lng": -54.952639
        },
        "PASRM28": {
          "lat": -2.429167,
          "lng": -54.701678
        },
        "PASRM29": {
          "lat": -2.457103,
          "lng": -55.242348
        },
        "PASRM30": {
          "lat": -2.578168,
          "lng": -54.634385
        },
        "PASRM31": {
          "lat": -2.231837,
          "lng": -54.849575
        },
        "PASRM32": {
          "lat": -2.12954262480329,
          "lng": -54.7112976233229
        },
        "PASRM33": {
          "lat": -2.62447,
          "lng": -54.67784
        },
        "PASRM34": {
          "lat": -2.95572,
          "lng": -54.54627
        },
        "PASRM35": {
          "lat": -2.334319,
          "lng": -55.4413
        },
        "PASRM36": {
          "lat": -2.585144,
          "lng": -55.451858
        },
        "PASRM37": {
          "lat": -2.270256,
          "lng": -55.220803
        },
        "PASRM38": {
          "lat": -2.883595985,
          "lng": -55.17918655
        },
        "PASRM39": {
          "lat": -2.813321113,
          "lng": -54.2967361
        },
        "PASRM40": {
          "lat": -2.621828,
          "lng": -54.732738
        },
        "PASRM41": {
          "lat": -2.425214,
          "lng": -54.727514
        },
        "PASRM42": {
          "lat": -2.4216759,
          "lng": -54.7060665
        },
        "PASRM43": {
          "lat": -2.483231,
          "lng": -54.727161
        },
        "PASRM44": {
          "lat": -2.44973,
          "lng": -54.727983
        },
        "PASRM45": {
          "lat": -2.448306,
          "lng": -54.741472
        },
        "PASRM46": {
          "lat": -2.464722,
          "lng": -54.681947
        },
        "PASRM47": {
          "lat": -2.45008,
          "lng": -54.71347
        },
        "PASRM48": {
          "lat": -2.28322,
          "lng": -55.47735
        },
        "PASRM49": {
          "lat": -2.5017,
          "lng": -54.9565
        },
        "PASRM50": {
          "lat": -2.4652,
          "lng": -54.7106
        },
        "PASRM51": {
          "lat": -2.4496,
          "lng": -54.696
        },
        "PASRM52": {
          "lat": -2.416,
          "lng": -54.7117
        },
        "PASRMI5": {
          "lat": -2.424214,
          "lng": -54.786531
        },
        "PASTM01": {
          "lat": -2.422161,
          "lng": -54.718107
        },
        "PASTMX1": {
          "lat": -2.421099,
          "lng": -54.726344
        },
        "PASTT01": {
          "lat": -1.15215,
          "lng": -48.13093
        },
        "PASTT02": {
          "lat": -1.1506,
          "lng": -48.1394
        },
        "PASUR01": {
          "lat": -0.725331,
          "lng": -48.519409
        },
        "PASUR02": {
          "lat": -0.699322,
          "lng": -48.512391
        },
        "PASXL01": {
          "lat": -1.686944,
          "lng": -47.765
        },
        "PASXL02": {
          "lat": -1.6869,
          "lng": -47.765
        },
        "PASXL03": {
          "lat": -1.67507,
          "lng": -47.77076
        },
        "PASXU01": {
          "lat": -6.645,
          "lng": -51.994999
        },
        "PASZR01": {
          "lat": -0.670494,
          "lng": -49.17306
        },
        "PASZR90": {
          "lat": 0,
          "lng": 0
        },
        "PATAR01": {
          "lat": -4.703721,
          "lng": -55.996912
        },
        "PATAR02": {
          "lat": -4.57032,
          "lng": -56.26176
        },
        "PATAR03": {
          "lat": -4.70768,
          "lng": -55.74203
        },
        "PATAR04": {
          "lat": -5.01822,
          "lng": -56.18475
        },
        "PATCA01": {
          "lat": -6.745292,
          "lng": -51.156461
        },
        "PATCA02": {
          "lat": -6.75514,
          "lng": -51.13972
        },
        "PATCA03": {
          "lat": -6.75078,
          "lng": -51.17494
        },
        "PATCA04": {
          "lat": -6.87667,
          "lng": -51.22111
        },
        "PATEA01": {
          "lat": -1.03946,
          "lng": -47.9085
        },
        "PATEA02": {
          "lat": -0.983944,
          "lng": -47.881694
        },
        "PATIM01": {
          "lat": -1.414673,
          "lng": -48.471014
        },
        "PATIM02": {
          "lat": -2.422675,
          "lng": -54.733873
        },
        "PATIM03": {
          "lat": -3.824583,
          "lng": -49.65675
        },
        "PATLA01": {
          "lat": -2.93,
          "lng": -48.949167
        },
        "PATLA02": {
          "lat": -2.465,
          "lng": -48.744722
        },
        "PATLA03": {
          "lat": -2.944083,
          "lng": -48.954528
        },
        "PATLA04": {
          "lat": -2.98697,
          "lng": -48.79862
        },
        "PATLA05": {
          "lat": -2.541222,
          "lng": -48.704583
        },
        "PATLA06": {
          "lat": -2.525222,
          "lng": -48.796389
        },
        "PATLA07": {
          "lat": -2.959525,
          "lng": -48.935228
        },
        "PATLA08": {
          "lat": -2.960167,
          "lng": -48.948
        },
        "PATLA09": {
          "lat": -2.941866,
          "lng": -48.944361
        },
        "PATLA10": {
          "lat": -2.919722,
          "lng": -48.958333
        },
        "PATLA11": {
          "lat": -2.933214,
          "lng": -48.966081
        },
        "PATLA12": {
          "lat": -2.948442,
          "lng": -48.980553
        },
        "PATLA13": {
          "lat": -2.931111,
          "lng": -48.936278
        },
        "PATLA14": {
          "lat": -2.66383,
          "lng": -48.83361
        },
        "PATLA15": {
          "lat": -3.38333,
          "lng": -48.94111
        },
        "PATLA16": {
          "lat": -2.54821,
          "lng": -48.76753
        },
        "PATLA90": {
          "lat": -3.383333,
          "lng": -48.941113
        },
        "PATLA91": {
          "lat": -2.66175,
          "lng": -48.8322
        },
        "PATLA92": {
          "lat": -2.21542,
          "lng": -48.79756
        },
        "PATOU01": {
          "lat": -2.41781,
          "lng": -48.1525
        },
        "PATOU02": {
          "lat": -2.410271,
          "lng": -48.257167
        },
        "PATOU03": {
          "lat": -2.41346,
          "lng": -48.15397
        },
        "PATOU04": {
          "lat": -2.48244,
          "lng": -48.33178
        },
        "PATOU05": {
          "lat": -2.53307,
          "lng": -48.08667
        },
        "PATOU06": {
          "lat": -2.41917,
          "lng": -48.2425
        },
        "PATOU07": {
          "lat": -2.25751,
          "lng": -48.07856
        },
        "PATOU08": {
          "lat": -2.41875,
          "lng": -48.24193
        },
        "PATOU09": {
          "lat": -2.850222,
          "lng": -48.231583
        },
        "PATOU90": {
          "lat": -2.506611,
          "lng": -48.387806
        },
        "PATOU91": {
          "lat": -2.49664,
          "lng": -48.5056
        },
        "PATRA01": {
          "lat": -1.07793,
          "lng": -46.9025
        },
        "PATRA02": {
          "lat": -1.081669,
          "lng": -46.908439
        },
        "PATRA03": {
          "lat": -1.39661,
          "lng": -47.18508
        },
        "PATRA04": {
          "lat": -0.97751,
          "lng": -46.89817
        },
        "PATSA01": {
          "lat": -2.104,
          "lng": -56.487
        },
        "PATSA02": {
          "lat": -2.163114,
          "lng": -56.602116
        },
        "PATSA03": {
          "lat": -2.106067,
          "lng": -56.491531
        },
        "PATSA04": {
          "lat": -2.09356,
          "lng": -56.4852
        },
        "PATSA05": {
          "lat": -2.101917,
          "lng": -56.48017
        },
        "PATUU01": {
          "lat": -3.76547,
          "lng": -49.66999
        },
        "PATUU02": {
          "lat": -3.76392,
          "lng": -49.68269
        },
        "PATUU03": {
          "lat": -3.83359,
          "lng": -49.68646
        },
        "PATUU04": {
          "lat": -3.761141,
          "lng": -49.684522
        },
        "PATUU05": {
          "lat": -3.739,
          "lng": -49.688
        },
        "PATUU06": {
          "lat": -3.779836,
          "lng": -49.664078
        },
        "PATUU07": {
          "lat": -3.790772,
          "lng": -49.66925
        },
        "PATUU08": {
          "lat": -3.82593,
          "lng": -49.66594
        },
        "PATUU09": {
          "lat": -3.794377,
          "lng": -49.686083
        },
        "PATUU10": {
          "lat": -3.780276,
          "lng": -49.67535
        },
        "PATUU11": {
          "lat": -3.755396,
          "lng": -49.669174
        },
        "PATUU12": {
          "lat": -3.8965,
          "lng": -49.68892
        },
        "PATUU1E": {
          "lat": -3.766486,
          "lng": -49.669322
        },
        "PATUU1L": {
          "lat": -3.8241,
          "lng": -49.65679
        },
        "PATUUEL": {
          "lat": -3.82194,
          "lng": -49.67222
        },
        "PATUUF1": {
          "lat": -3.8219,
          "lng": -49.6722
        },
        "PAUAA01": {
          "lat": -3.721108,
          "lng": -53.733881
        },
        "PAUAA02": {
          "lat": -3.706694,
          "lng": -53.714722
        },
        "PAUAA03": {
          "lat": -3.79621,
          "lng": -53.91008
        },
        "PAUAA04": {
          "lat": -3.649706,
          "lng": -53.486555
        },
        "PAUAA05": {
          "lat": -3.74653,
          "lng": -53.82822
        },
        "PAUAAEL": {
          "lat": -3.720278,
          "lng": -53.74444
        },
        "PAUAAF1": {
          "lat": -3.7197,
          "lng": -53.74444
        },
        "PAULN01": {
          "lat": -3.74722,
          "lng": -47.4969
        },
        "PAULN02": {
          "lat": -3.92967,
          "lng": -47.53444
        },
        "PAULN03": {
          "lat": -4.0909,
          "lng": -47.46245
        },
        "PAULN04": {
          "lat": -3.59861,
          "lng": -47.34241
        },
        "PAULN05": {
          "lat": -3.82055,
          "lng": -47.71759
        },
        "PAULN06": {
          "lat": -3.75207,
          "lng": -47.60011
        },
        "PAULN07": {
          "lat": -3.59514,
          "lng": -47.52397
        },
        "PAULN08": {
          "lat": -3.745278,
          "lng": -47.494722
        },
        "PAULN90": {
          "lat": -3.814778,
          "lng": -47.513611
        },
        "PAVGI01": {
          "lat": -0.849653,
          "lng": -48.139529
        },
        "PAVGI02": {
          "lat": -0.863869,
          "lng": -48.131161
        },
        "PAVGI03": {
          "lat": -0.934989,
          "lng": -48.164836
        },
        "PAVGI04": {
          "lat": -0.870111,
          "lng": -48.115919
        },
        "PAVGI05": {
          "lat": -0.85672,
          "lng": -48.14118
        },
        "PAVGI06": {
          "lat": -0.962811,
          "lng": -48.089363
        },
        "PAVIV01": {
          "lat": -1.450673,
          "lng": -48.493438
        },
        "PAVIV02": {
          "lat": -4.786135,
          "lng": -48.594651
        },
        "PAVSU01": {
          "lat": -1.204722,
          "lng": -46.137778
        },
        "PAVSU02": {
          "lat": -1.303416,
          "lng": -46.334247
        },
        "PAVSU03": {
          "lat": -1.116972,
          "lng": -46.308006
        },
        "PAVSU04": {
          "lat": -1.54381,
          "lng": -46.36854
        },
        "PAVSU05": {
          "lat": -1.205098401230479,
          "lng": -46.1380535360757
        },
        "PAVSU06": {
          "lat": -1.192028,
          "lng": -46.215944
        },
        "PAVSU07": {
          "lat": -1.18513083,
          "lng": -46.30384457
        },
        "PAVSU08": {
          "lat": -1.68144,
          "lng": -46.71037
        },
        "PAVSU09": {
          "lat": -1.42958,
          "lng": -46.47236
        },
        "PAVTX01": {
          "lat": -2.892592,
          "lng": -52.016256
        },
        "PAVTX02": {
          "lat": -3.128203,
          "lng": -51.69917
        },
        "PAVTX03": {
          "lat": -3.12028,
          "lng": -51.7898
        },
        "PAVTX04": {
          "lat": -3.12028,
          "lng": -51.7898
        },
        "PAVTX90": {
          "lat": -3.092167,
          "lng": -52.184361
        },
        "PAWRH01": {
          "lat": -1.364983,
          "lng": -48.353478
        },
        "PAXGA01": {
          "lat": -7.089681,
          "lng": -49.936321
        },
        "PAXGA02": {
          "lat": -7.10169,
          "lng": -49.95091
        },
        "PAXGA03": {
          "lat": -6.87658,
          "lng": -49.85408
        },
        "PAXGA04": {
          "lat": -7.0929,
          "lng": -49.9472
        },
        "PAXGA90": {
          "lat": -6.897642,
          "lng": -50.231274
        },
        "PAXGA91": {
          "lat": -6.80105,
          "lng": -50.43183
        },
        "PAXGA92": {
          "lat": -6.69819450378418,
          "lng": -50.7999992370605
        },
        "PAXGA93": {
          "lat": -2.1253,
          "lng": -49.0649
        },
        "PAXGAR1": {
          "lat": -6.993089,
          "lng": -49.760839
        },
        "PAXGAR2": {
          "lat": -1.367890688694659,
          "lng": -48.37634961871785
        },
        "RR0001F": {
          "lat": 2.850241,
          "lng": -60.706844
        },
        "RR00024": {
          "lat": 2.846047,
          "lng": -60.663092
        },
        "RR0002F": {
          "lat": 2.849625,
          "lng": -60.705245
        },
        "RRAER01": {
          "lat": 2.98593,
          "lng": -61.31007
        },
        "RRAER02": {
          "lat": 3.04417,
          "lng": -61.43078
        },
        "RRAER03": {
          "lat": 2.86772,
          "lng": -61.28342
        },
        "RRAER04": {
          "lat": 2.986306,
          "lng": -61.309194
        },
        "RRAER05": {
          "lat": 3.2878868693,
          "lng": -61.089498981
        },
        "RRAER90": {
          "lat": 2.905742,
          "lng": -60.99839
        },
        "RRAJR01": {
          "lat": 3.655678,
          "lng": -61.416328
        },
        "RRAJR02": {
          "lat": 3.6951,
          "lng": -61.19719
        },
        "RRAJR03": {
          "lat": 3.38929,
          "lng": -61.41033
        },
        "RRAJR04": {
          "lat": 3.73202,
          "lng": -61.6261
        },
        "RRAJR05": {
          "lat": 3.648121,
          "lng": -60.9771546
        },
        "RRAMA01": {
          "lat": 3.65333,
          "lng": -61.41733
        },
        "RRAMA90": {
          "lat": 3.286528,
          "lng": -61.088917
        },
        "RRAMC01": {
          "lat": 2.822237,
          "lng": -60.674572
        },
        "RRBFI01": {
          "lat": 3.35681,
          "lng": -59.837
        },
        "RRBFI02": {
          "lat": 2.81568787,
          "lng": -60.13849308
        },
        "RRBFI90": {
          "lat": 3.19131,
          "lng": -60.19047
        },
        "RRBFI91": {
          "lat": 3.015558,
          "lng": -60.497209
        },
        "RRBVA01": {
          "lat": 2.849722,
          "lng": -60.654167
        },
        "RRBVA02": {
          "lat": 2.835556,
          "lng": -60.666111
        },
        "RRBVA02_001": {
          "lat": 2.842793,
          "lng": -60.668476
        },
        "RRBVA03": {
          "lat": 2.82298,
          "lng": -60.67345
        },
        "RRBVA03_001": {
          "lat": 2.823046,
          "lng": -60.673553
        },
        "RRBVA04": {
          "lat": 2.815029,
          "lng": -60.671499
        },
        "RRBVA05": {
          "lat": 2.807647,
          "lng": -60.692164
        },
        "RRBVA06": {
          "lat": 2.8272,
          "lng": -60.7006
        },
        "RRBVA07": {
          "lat": 2.83308,
          "lng": -60.73062
        },
        "RRBVA07_001": {
          "lat": 2.849822,
          "lng": -60.741325
        },
        "RRBVA07_002": {
          "lat": 2.850345,
          "lng": -60.706361
        },
        "RRBVA07_003": {
          "lat": 2.836152,
          "lng": -60.715348
        },
        "RRBVA08": {
          "lat": 2.79944,
          "lng": -60.7103
        },
        "RRBVA08_001": {
          "lat": 2.79813,
          "lng": -60.705793
        },
        "RRBVA09": {
          "lat": 2.771778,
          "lng": -60.725722
        },
        "RRBVA09_001": {
          "lat": 2.759398,
          "lng": -60.729196
        },
        "RRBVA10": {
          "lat": 2.803333,
          "lng": -60.744167
        },
        "RRBVA11": {
          "lat": 2.8175,
          "lng": -60.717778
        },
        "RRBVA12": {
          "lat": 2.78291,
          "lng": -60.70903
        },
        "RRBVA13": {
          "lat": 2.786944,
          "lng": -60.732778
        },
        "RRBVA14": {
          "lat": 2.819389,
          "lng": -60.753944
        },
        "RRBVA14_001": {
          "lat": 2.81,
          "lng": -60.767
        },
        "RRBVA15": {
          "lat": 2.805011,
          "lng": -60.7418
        },
        "RRBVA15_001": {
          "lat": 2.810582,
          "lng": -60.735333
        },
        "RRBVA16": {
          "lat": 2.81681,
          "lng": -60.70156
        },
        "RRBVA17": {
          "lat": 0,
          "lng": 0
        },
        "RRBVA18": {
          "lat": 2.816261,
          "lng": -60.739931
        },
        "RRBVA19": {
          "lat": 2.85693,
          "lng": -60.66082
        },
        "RRBVA20": {
          "lat": 2.8635,
          "lng": -60.6681
        },
        "RRBVA21": {
          "lat": 2.85083,
          "lng": -60.71833
        },
        "RRBVA22": {
          "lat": 2.850778,
          "lng": -60.649944
        },
        "RRBVA22_001": {
          "lat": 2.855192,
          "lng": -60.644929
        },
        "RRBVA23": {
          "lat": 2.930381,
          "lng": -60.566308
        },
        "RRBVA24": {
          "lat": 2.826667,
          "lng": -60.669277
        },
        "RRBVA25": {
          "lat": 2.847617,
          "lng": -60.719167
        },
        "RRBVA26": {
          "lat": 2.802944,
          "lng": -60.723194
        },
        "RRBVA27": {
          "lat": 2.815889,
          "lng": -60.73997
        },
        "RRBVA28": {
          "lat": 2.843725,
          "lng": -60.744656
        },
        "RRBVA29": {
          "lat": 2.83185,
          "lng": -60.714867
        },
        "RRBVA30": {
          "lat": 2.75445,
          "lng": -60.738783
        },
        "RRBVA31": {
          "lat": 2.8047,
          "lng": -60.7569
        },
        "RRBVA32": {
          "lat": 2.800778,
          "lng": -60.774926
        },
        "RRBVA33": {
          "lat": 2.863551,
          "lng": -60.668023
        },
        "RRBVA34": {
          "lat": 2.834683,
          "lng": -60.678867
        },
        "RRBVA35": {
          "lat": 2.811764,
          "lng": -60.701933
        },
        "RRBVA36": {
          "lat": 2.81658,
          "lng": -60.75844
        },
        "RRBVA37": {
          "lat": 2.79858,
          "lng": -60.68606
        },
        "RRBVA38": {
          "lat": 2.83175,
          "lng": -60.72028
        },
        "RRBVA39": {
          "lat": 2.84864,
          "lng": -60.70225
        },
        "RRBVA40": {
          "lat": 2.83061,
          "lng": -60.67083
        },
        "RRBVA41": {
          "lat": 2.75841,
          "lng": -60.74422
        },
        "RRBVA42": {
          "lat": 2.83661,
          "lng": -60.67997
        },
        "RRBVA43": {
          "lat": 2.7843,
          "lng": -60.70554
        },
        "RRBVA44": {
          "lat": 2.848,
          "lng": -60.71779
        },
        "RRBVA45": {
          "lat": 2.81892,
          "lng": -60.73584
        },
        "RRBVA46": {
          "lat": 2.832072,
          "lng": -60.714603
        },
        "RRBVA47": {
          "lat": 2.805872,
          "lng": -60.758861
        },
        "RRBVA48": {
          "lat": 2.83242,
          "lng": -60.67997
        },
        "RRBVA49": {
          "lat": 2.83502,
          "lng": -60.68307
        },
        "RRBVA50": {
          "lat": 2.820965,
          "lng": -60.668887
        },
        "RRBVA51": {
          "lat": 2.80777805,
          "lng": -60.67762667
        },
        "RRBVA52": {
          "lat": 2.81371,
          "lng": -60.77109
        },
        "RRBVA53": {
          "lat": 2.79388,
          "lng": -60.75694
        },
        "RRBVA54": {
          "lat": 2.820027,
          "lng": -60.697333
        },
        "RRBVA55": {
          "lat": 2.828153,
          "lng": -60.691739
        },
        "RRBVA56": {
          "lat": 2.82932,
          "lng": -60.66615
        },
        "RRBVA57": {
          "lat": 2.80306,
          "lng": -60.68153
        },
        "RRBVA58": {
          "lat": 2.82364,
          "lng": -60.75194
        },
        "RRBVA59": {
          "lat": 2.82697,
          "lng": -60.66306
        },
        "RRBVA60": {
          "lat": 2.818275,
          "lng": -60.687747
        },
        "RRBVA61": {
          "lat": 2.84294,
          "lng": -60.66842
        },
        "RRBVA62": {
          "lat": 2.789,
          "lng": -60.6993
        },
        "RRBVA63": {
          "lat": 2.82044,
          "lng": -60.74658
        },
        "RRBVA64": {
          "lat": 2.85444,
          "lng": -60.66383
        },
        "RRBVA65": {
          "lat": 2.83672,
          "lng": -60.67078
        },
        "RRBVA66": {
          "lat": 2.764363,
          "lng": -60.712921
        },
        "RRBVA67": {
          "lat": 2.884238,
          "lng": -60.689943
        },
        "RRBVA68": {
          "lat": 2.811764,
          "lng": -60.701933
        },
        "RRBVA69": {
          "lat": 2.818166,
          "lng": -60.671472
        },
        "RRBVA70": {
          "lat": 2.86181,
          "lng": -60.66108
        },
        "RRBVA71": {
          "lat": 2.8007778,
          "lng": -60.7749167
        },
        "RRBVA72": {
          "lat": 2.843778,
          "lng": -60.744583
        },
        "RRBVA73": {
          "lat": 2.81583,
          "lng": -60.68972
        },
        "RRBVA74": {
          "lat": 2.838806,
          "lng": -60.654686
        },
        "RRBVA75": {
          "lat": 2.824519,
          "lng": -60.662456
        },
        "RRBVA76": {
          "lat": 2.790228,
          "lng": -60.746844
        },
        "RRBVA77": {
          "lat": 2.803111,
          "lng": -60.68152
        },
        "RRBVA78": {
          "lat": 2.812845,
          "lng": -60.70818
        },
        "RRBVA79": {
          "lat": 2.796916,
          "lng": -60.76075
        },
        "RRBVA80": {
          "lat": 2.808975,
          "lng": -60.722586
        },
        "RRBVA81": {
          "lat": 2.825362,
          "lng": -60.723813
        },
        "RRBVA82": {
          "lat": 2.8378833,
          "lng": -60.7225833
        },
        "RRBVA83": {
          "lat": 2.816298,
          "lng": -60.762733
        },
        "RRBVA84": {
          "lat": 2.798,
          "lng": -60.75
        },
        "RRBVA85": {
          "lat": 2.847549,
          "lng": -60.71518
        },
        "RRBVA86": {
          "lat": 2.830277,
          "lng": -60.738805
        },
        "RRBVA87": {
          "lat": 2.766258,
          "lng": -60.71607
        },
        "RRBVA88": {
          "lat": 2.84765,
          "lng": -60.704722
        },
        "RRBVA89": {
          "lat": 2.75762,
          "lng": -60.741566
        },
        "RRBVA90": {
          "lat": 2.853806,
          "lng": -60.633125
        },
        "RRBVA91": {
          "lat": 2.8635,
          "lng": -60.668
        },
        "RRBVA92": {
          "lat": 2.8321,
          "lng": -60.6832
        },
        "RRBVA93": {
          "lat": 2.82,
          "lng": -60.697
        },
        "RRBVA94": {
          "lat": 2.819,
          "lng": -60.683
        },
        "RRBVA95": {
          "lat": 2.818,
          "lng": -60.671
        },
        "RRBVA96": {
          "lat": 2.857817,
          "lng": -60.783597
        },
        "RRBVA97": {
          "lat": 2.8,
          "lng": -60.724
        },
        "RRBVA98": {
          "lat": 2.814627,
          "lng": -60.775948
        },
        "RRBVA99": {
          "lat": 2.77921111,
          "lng": -60.7055
        },
        "RRBVAA1": {
          "lat": 2.886277,
          "lng": -60.693083
        },
        "RRBVAA2": {
          "lat": 2.766023,
          "lng": -60.70689
        },
        "RRBVAA3": {
          "lat": 2.816694,
          "lng": -60.668417
        },
        "RRBVAA4": {
          "lat": 2.759566,
          "lng": -60.709143
        },
        "RRBVAA5": {
          "lat": 2.823,
          "lng": -60.6736
        },
        "RRBVAA6": {
          "lat": 2.8362,
          "lng": -60.7153
        },
        "RRBVAA7": {
          "lat": 2.7981,
          "lng": -60.7058
        },
        "RRBVAA8": {
          "lat": 2.8552,
          "lng": -60.6449
        },
        "RRBVAA9": {
          "lat": 2.850345,
          "lng": -60.706361
        },
        "RRBVAB1": {
          "lat": 2.850345,
          "lng": -60.706361
        },
        "RRBVAB2": {
          "lat": 2.8118,
          "lng": -60.7019
        },
        "RRBVAB3": {
          "lat": 2.838,
          "lng": -60.712
        },
        "RRBVAB4": {
          "lat": 2.8412,
          "lng": -60.6921
        },
        "RRBVAI1": {
          "lat": 2.850381,
          "lng": -60.706308
        },
        "RRBVAI2": {
          "lat": 2.850241,
          "lng": -60.706844
        },
        "RRBVAI3": {
          "lat": 2.850345,
          "lng": -60.706361
        },
        "RRBVAI4": {
          "lat": 2.823046,
          "lng": -60.673553
        },
        "RRBVAI5": {
          "lat": 2.836152,
          "lng": -60.715348
        },
        "RRBVAI6": {
          "lat": 2.79813,
          "lng": -60.705793
        },
        "RRBVAI7": {
          "lat": 2.85536,
          "lng": -60.64494
        },
        "RRBVAX1": {
          "lat": 2.823116,
          "lng": -60.673176
        },
        "RRCEB01": {
          "lat": 0.88226,
          "lng": -59.69606
        },
        "RRCKR01": {
          "lat": 1.81568,
          "lng": -61.13016
        },
        "RRCKR02": {
          "lat": 1.735039,
          "lng": -61.140155
        },
        "RRCKR90": {
          "lat": 1.974867,
          "lng": -61.070988
        },
        "RRCKRR1": {
          "lat": 1.56362,
          "lng": -60.98658
        },
        "RRCNT01": {
          "lat": 2.611694,
          "lng": -60.600389
        },
        "RRCNT02": {
          "lat": 1.867806,
          "lng": -60.581722
        },
        "RRCNT03": {
          "lat": 2.110293637,
          "lng": -60.6167148
        },
        "RRCNT04": {
          "lat": 2.23370662765116,
          "lng": -60.6779106652439
        },
        "RRCOW01": {
          "lat": -1.450585,
          "lng": -48.488979
        },
        "RRCRB01": {
          "lat": 0.802515,
          "lng": -59.428934
        },
        "RRCRB02": {
          "lat": 0.810256,
          "lng": -59.425973
        },
        "RRIRC01": {
          "lat": 2.164192,
          "lng": -61.050397
        },
        "RRIRC02": {
          "lat": 2.37333,
          "lng": -61.438393
        },
        "RRITL01": {
          "lat": 0,
          "lng": 0
        },
        "RRLBV01": {
          "lat": 2.820967,
          "lng": -60.668885
        },
        "RRMJI01": {
          "lat": 2.445435,
          "lng": -60.915606
        },
        "RRMJI02": {
          "lat": 2.553830304,
          "lng": -61.30825447
        },
        "RRMJI90": {
          "lat": 2.675,
          "lng": -60.91256
        },
        "RRNRD01": {
          "lat": 3.88075,
          "lng": -59.63018
        },
        "RRNRD90": {
          "lat": 3.56446,
          "lng": -59.888814
        },
        "RROIF01": {
          "lat": 0,
          "lng": 0
        },
        "RRPAC01": {
          "lat": 4.48334,
          "lng": -61.138853
        },
        "RRRLI01": {
          "lat": 0.94207,
          "lng": -60.42588
        },
        "RRRLI90": {
          "lat": 1.226817,
          "lng": -60.388628
        },
        "RRRLI91": {
          "lat": 1.39959,
          "lng": -60.64926
        },
        "RRRLI92": {
          "lat": 1.48016,
          "lng": -60.81197
        },
        "RRRLI93": {
          "lat": 1.67525,
          "lng": -61.08438
        },
        "RRRNP01": {
          "lat": 0.133023,
          "lng": -60.569433
        },
        "RRRNP02": {
          "lat": -0.208378,
          "lng": -60.695115
        },
        "RRRNP03": {
          "lat": 1.055875,
          "lng": -60.387775
        },
        "RRSBZ01": {
          "lat": 0.94632,
          "lng": -59.91385
        },
        "RRSZW01": {
          "lat": 1.016096,
          "lng": -60.040202
        },
        "RRSZW90": {
          "lat": 1.18219,
          "lng": -60.1909
        },
        "RRTIM01": {
          "lat": -1.411111,
          "lng": -60.673028
        }, 
        "RRURM01": {
          "lat": 4.595861,
          "lng": -60.164167
        },
        "RRURM02": {
          "lat": 4.415824,
          "lng": -60.078167
        },
        "RRURM03": {
          "lat": 4.737228,
          "lng": -60.361333
        },
        "RRVIV01": {
          "lat": 2.828334,
          "lng": -60.676342
        },
        "RRVIV02": {
          "lat": 2.828611,
          "lng": -60.675833
        },
        "RRVIV03": {
          "lat": 2.82308,
          "lng": -60.673442
        }
      }

    const site = document.getElementById('site-search').value.toUpperCase();
    const coords = coordenadas[site];

    if (coords) {
      const url = `https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=15`;
      window.open(url, '_blank');
  } else {
      alert('Coordenadas não encontradas para o site selecionado.');
  }
}

document.addEventListener('click', function(event) {
    const dropdownContent = document.getElementById('dropdown-content');
    if (!event.target.matches('#site-search')) {
        dropdownContent.classList.remove('show');
    }
});

// Função para limpar campos UC e Endereço antes de preencher novos dados
function limparCampos() {
    document.getElementById('uc').value = '';
    document.getElementById('endereco').value = '';
}



// Adiciona a chamada para limparCampos antes de preencher novos dados
document.getElementById('site-search').addEventListener('input', function() {
    limparCampos();
    const searchValue = this.value.toLowerCase();
    const select = document.getElementById('site');
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.innerHTML = '';

    if (searchValue.length >= 1) {
        for (let i = 0; i < select.options.length; i++) {
            const option = select.options[i];
            if (option.text.toLowerCase().includes(searchValue)) {
                const div = document.createElement('div');
                div.textContent = option.text;
                div.addEventListener('click', function() {
                    document.getElementById('site-search').value = option.text;
                    dropdownContent.classList.remove('show');
                    preencherDados(option.value);
                });
                dropdownContent.appendChild(div);
            }
        }
        dropdownContent.classList.add('show');
    } else {
        dropdownContent.classList.remove('show');
    }
}); 


