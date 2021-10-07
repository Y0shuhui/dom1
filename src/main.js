const div = dom.find('#test>.red')[0] 
console.log(div)
dom.style(div, 'color', 'red') 

const div1 = dom.find('#test>.blue')[0] 
console.log(div1)
dom.style(div1, 'color', 'blue')

const divList = dom.find('.red1')
dom.each(divList,(n) => console.log(n))
dom.each(divList,(n) => dom.style(n,'color','pink'))