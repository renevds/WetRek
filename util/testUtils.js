function testContent(m, c){
  m.content.forEach((a, i) => {
    expect(a).toBeCloseTo(c[i])
  })
}

module.exports = {testContent}