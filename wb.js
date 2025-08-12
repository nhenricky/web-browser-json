{
"componentes_navegador": {
"motor_renderizacao": {
"descricao": "Interpreta HTML, CSS e JavaScript",
"exemplos": ["Blink (Chrome)", "Gecko (Firefox)", "WebKit (Safari)"]
},
"motor_javascript": {
"descricao": "Executa código JavaScript",
"exemplos": ["V8 (Chrome)", "SpiderMonkey (Firefox)", "JavaScriptCore (Safari)"]
},
"interface_usuario": {
"descricao": "Barra de endereços, botões, menus",
"elementos": ["barra_navegacao", "abas", "favoritos", "historico"]
},
"rede": {
"descricao": "Gerencia requisições HTTP/HTTPS",
"funcoes": ["dns_lookup", "ssl_handshake", "cache_management"]
}
}
},

{
"sistema_favoritos":{
  "estrutura_dados":{
    "favorito":{
"id": "string - identificador único",
  "titulo": "string - título da página",
"url": "string - endereço da página",
"favicon": "string - ícone da página",
"dataAdicao": "date - quando foi adicionado",
"categoria": "string - categoria do favorito"
}
}
