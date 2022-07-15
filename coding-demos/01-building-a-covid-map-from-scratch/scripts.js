const URL_BASE = 'http://localhost:4000/api'

const REGION_KEY = 'ADM1_EN'
const PROVINCE_KEY = 'ADM2_EN'
const MUNICITY_KEY = 'ADM3_EN'
const PCODE_KEY = 'ADM2_PCODE' // e.g: "PH112500000"
const COVID_MAPPING_KEY = 'ADM3_PCODE'

const fetchPHTopoJsons = async () => {
    const countryUrl = 'http://localhost:4000/country_topojson'
    const minicityBaseUrl = 'http://localhost:4000/municities_topojson?file'
    const covidDataUrl = 'http://localhost:4000/covid_data'
    const municities = [
        {
            object: 'municities-province-ph012800000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph012800000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph012900000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph012900000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph013300000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph013300000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph015500000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph015500000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph020900000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph020900000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph021500000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph021500000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph023100000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph023100000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph025000000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph025000000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph025700000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph025700000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph030800000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph030800000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph031400000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph031400000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph034900000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph034900000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph035400000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph035400000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph036900000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph036900000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph037100000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph037100000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph037700000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph037700000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph041000000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph041000000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph042100000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph042100000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph043400000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph043400000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph045600000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph045600000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph045800000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph045800000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph050500000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph050500000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph051600000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph051600000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph051700000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph051700000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph052000000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph052000000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph054100000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph054100000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph056200000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph056200000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph060400000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph060400000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph060600000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph060600000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph061900000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph061900000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph063000000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph063000000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph067900000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph067900000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph071200000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph071200000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph072200000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph072200000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph076100000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph076100000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph082600000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph082600000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph083700000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph083700000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph045800000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph045800000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph084800000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph084800000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph086000000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph086000000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph086400000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph086400000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph087800000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph087800000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph097200000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph097200000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph097300000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph097300000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph098300000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph098300000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph099700000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph099700000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph101300000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph101300000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph101800000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph101800000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph103500000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph103500000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph104200000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph104200000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph104300000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph104300000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph112300000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph112300000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph112400000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph112400000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph112500000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph112500000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph118200000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph118200000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph118600000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph118600000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph124700000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph124700000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph126300000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph126300000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph126300000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph126300000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph126500000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph126500000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph128000000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph128000000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph129800000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph129800000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph133900000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph133900000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph137400000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph137400000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph137500000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph137500000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph137600000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph137600000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph140100000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph140100000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph141100000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph141100000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph142700000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph142700000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph143200000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph143200000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph144400000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph144400000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph148100000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph148100000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph150700000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph150700000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph153600000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph153600000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph153800000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph153800000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph156600000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph156600000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph157000000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph157000000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph160200000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph160200000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph160300000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph160300000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph166700000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph166700000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph166800000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph166800000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph168500000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph168500000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph174000000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph174000000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph175100000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph175100000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph175200000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph175200000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph175300000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph175300000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph175900000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph175900000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph184500000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph184500000.topo.0.01.json`
        },
        {
            object: 'municities-province-ph184600000.0.01',
            url: `${minicityBaseUrl}=municities-province-ph184600000.topo.0.01.json`
        },
    ]

    const promises = []
    let municitiesPromises = []

    promises.push(d3.json(countryUrl))
    municitiesPromises = municities.map(municity => d3.json(municity.url))

    promises.push(Promise.all(municitiesPromises))
    promises.push(d3.json(covidDataUrl))

    return Promise.all(promises)
        .then(data => {
            console.log(data)
            return data
        })
        .catch(error => { throw(error) })

}

const fetchSampleData = async () => {
    const url = `${URL_BASE}/sample_data`

    d3.json(url)
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
}

const displayMap = async () => {
    const dimensions = {
        width: 768,
        height: 840
    }

    const topojsons = await fetchPHTopoJsons()
    const [ countryTJ, municitiesTJ, covidSummary ] = topojsons
    covidSummary.sort((a, b) => b.covidSummary.covidCasesCount - a.covidSummary.covidCasesCount)
    displayCovidData(covidSummary);

    // CREATE SCALE
    const max = d3.max(covidSummary, data => {
        if (!data.municityPSGC) return 0;
        return data.covidSummary.covidCasesCount
    })
    console.log('MAX', max)
    const sum = d3.sum(covidSummary, data => data.covidSummary.covidCasesCount)

    const choroplethScale = d3.scaleLinear()
        .domain([0, 10, 100, 500, 1000, max])
        .range(['white', 'lightgrey', 'orange', 'red'])

    // PROCESS GEOJSONS
    countryGJ = topojson.feature(countryTJ, countryTJ.objects['country.0.01'])
    municitiesGJ = municitiesTJ.map(municity => {
        const keys = Object.keys(municity.objects)
        const [key] = keys
        return topojson.feature(municity, municity.objects[key])
    })

    // MAP PROJECTIONS
    const projection = d3.geoMercator()
        .translate([dimensions.width / 2, dimensions.height / 2])
        .scale(3000)
        .center([122.427150, 12.499176])
    const path = d3.geoPath()
        .projection(projection)

    const svg = d3.select('#d3-ph-map')
        .append('svg')
        .attr('id', 'map')
        .attr('width', dimensions.width)
        .attr('height', dimensions.height)
        .attr('viewBox', `0 0 ${dimensions.width} ${dimensions.height}`)
        .style('overflow', 'auto')


    // ADD TOOLTIP
    svg.append('div')
        .attr('id', 'tooltip')
        .classed('hidden', true)

    // DEFINE GROUP CONTAINERS
    const country = svg
        .append('g')
        .attr('id', 'country')
        .selectAll('path')
        .data(countryGJ.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('stroke', 'black')
        .attr('fill', '#c9c9c9')


    const municities = svg.append('g')
        .attr('id', 'municities')

    // APPEND MUNICITIES
    municities.selectAll('g')
        .data(municitiesGJ)
        .enter()
        .append('g')
        .selectAll('path')
                // Add each MUNICITY
        .data(featureCollection => {
            return featureCollection.features
        })
        .enter()
        .append('path')
        .attr('id', feature => feature.properties[PCODE_KEY])
        .attr('class', 'municity')
        .attr('data-region', feature => feature.properties[REGION_KEY].toString().toLowerCase())
        .attr('data-province', feature => feature.properties[PROVINCE_KEY].toString().toLowerCase())
        .attr('data-municity', feature => feature.properties[MUNICITY_KEY].toString().toLowerCase())
        .attr('data-psgc', feature => feature.properties[COVID_MAPPING_KEY])
        .attr('d', path)
        .attr('stroke', '#595959')
        .attr('stroke-width', '0.5')
        .attr('fill', feature => {
            const municityPSGC = feature.properties[COVID_MAPPING_KEY]

            if (municityPSGC === 'PH133900000') console.log(feature)
            const summary = covidSummary.find(summary => summary.municityPSGC == municityPSGC)
            if (summary) {
                return choroplethScale(summary.covidSummary.covidCasesCount)
            }
            return choroplethScale(0)
        })
        .on('mouseover', function(feature) {
            console.log(feature);
            updateDetails(feature, covidSummary)

            document.querySelector(`li[data-psgc="${feature.properties['ADM3_PCODE']}"]`).style.backgroundColor='black';
        })

    // ZOOM HANDLER
    let scale = 1;
    const zoom = d3.zoom()
        .scaleExtent([1, 8])
        .on('zoom', () => {
            // get scale used when zooming map
            scale = d3.event.transform.k;
            // scale all map components
            country
                .attr('transform', d3.event.transform)
            municities
                .attr('transform', d3.event.transform)
        })

    svg.call(zoom)

}

const displayCovidData = (covidSummary) => {
    const data = document.getElementById('distribution')
    const lis = covidSummary.map(summary => {
        let municityPSGC = summary.covidSummary.municityPSGC
        municityPSGC = municityPSGC ? municityPSGC : 'Unidentified'
        return `<li data-psgc="${summary.municityPSGC}">
            <span class="psgc">${municityPSGC}</span>
            <span class="covid-count">${summary.covidSummary.covidCasesCount}</span>
            <span class="municity">${summary.covidSummary.municity}</span>
        </li>`
    })

    console.log('LIS', lis.join(' '))
    data.innerHTML = `
        <ul>
            ${lis.join(' ')}
        </ul>
    `
}

const displayTooltip = (feature, regionName, provinceName, municityName, municityPSGC, cases) => {
    const tooltip = d3.select('#tooltip')
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");

    if (!feature) {
        tooltip.classed('hidden', true)
        return
    }

    const innerHtml = `
        <div class="covid-cases">${cases}</div>
        <div>PSGC: ${municityPSGC}</div>
        <div>Municipality / City: ${municityName}</div>
        <div>Province: ${provinceName}</div>
        <div>Region: ${regionName}</div>
    `


    tooltip.html(innerHtml)
        .classed('hidden', false)
}

const updateDetails = (feature, covidSummary) => {
    let caseCount = 0
    const region = document.getElementById('region')
    const province = document.getElementById('province')
    const municity = document.getElementById('municity')
    const cases = document.getElementById('cases')

    const regionName = feature.properties[REGION_KEY]
    const provinceName = feature.properties[PROVINCE_KEY]
    const municityName = feature.properties[MUNICITY_KEY]
    const municityPSGC = feature.properties[COVID_MAPPING_KEY]

    region.textContent = regionName
    province.textContent = provinceName
    municity.textContent = municityName

    const summary = covidSummary.find(summary => summary.municityPSGC == municityPSGC)
    if (summary) {
        caseCount = summary.covidSummary.covidCasesCount
        cases.textContent = caseCount
    }

    displayTooltip(feature, regionName, provinceName, municityName, municityPSGC, caseCount)
}

displayMap()
