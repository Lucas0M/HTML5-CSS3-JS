let nome = window.prompt('Qual seu nome:')

document.writeln(`Ola <strong>${nome}</strong> seu nome tem ${nome.length} letras<br>`)
document.writeln(`E seu nome em maiusculas e ${nome.toUpperCase()}<br>`)
document.writeln(`E seu nome em minusculas e ${nome.toLowerCase()}`)