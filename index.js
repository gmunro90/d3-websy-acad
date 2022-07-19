const svg = d3.select('body')
              .append('svg')
              .attr('height', 500)
              .attr('width', 800)

const data = [
                {category: "a", value: 100},
                {category: "b", value: 200},
                {category: "c", value: 50},
                {category: "d", value: 150},
                {category: "e", value: 250},
                {category: "f", value: 100}
            ]

const boxes = svg.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('width', 100)
                .attr('height', d => {
                  return d.value
                })
                .attr('x', (d, i) => {
                  return i * 110
                })