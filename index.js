const svg = d3.select('body').append('svg')
              .attr('height', 500)
              .attr('width', 800)

const xAxisGroup = svg.append('g')

function renderBars(data) {
  const color = randomColor()
  const boxes = svg.selectAll('rect')
                    .data(data)


boxes.exit()
      .transition()
      .attr('opacity', 0)
      .remove()

boxes.transition()
      .attr('height', d => {
        return d.value
      })
      .style('fill', color)

boxes.enter()
      .append('rect')
      .attr('width', 100)
      .attr('height', d => {
        return d.value
      })
      .attr('x', (d, i) => {
        return i * 110
      })

}