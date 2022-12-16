 export default function AnimateNumbers(numeros: NodeListOf<Element>) {
  numeros.forEach((numero) => {
    const total1 = numero.innerHTML
    const total = +numero.innerHTML
    const incremento = Math.floor(total / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      numero.innerHTML = `${start}`;
      if(start > total) {
        numero.innerHTML = total1
        clearInterval(timer)
      }
    }, 25 * Math.random())
  })
 }