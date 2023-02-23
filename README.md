# FN-projekt

## Websidans syfte
Vi har skapat en websida för att försöka uppmärksamma om elkonsumtionen i olika länder. Vi har valt mål 11, vilket är hållbara städer.

## Databasen
- Hur är den uppbyggd?

Vi har använt prisma för databasen

(bild på relationsdatabasen?)

Prisma-servern ligger i ett annat repository: https://github.com/abbindustrigymnasium/FN-Projekt-2-backend/tree/master

För att starta servern så skriver man följade text i terminalen:
```
node server.js
```


## Webbsidan
### Hur kör man den?
Man skriver "npm run serve" i konsollen
Om det inte fungerar och man får felmeddelandet:
```
 Syntax Error: Error: Loading PostCSS Plugin failed: Cannot find module 'tailwindcss' 
```

så behöver man skriva: 

```
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9"
```
Om det inte fungerar och man får felmeddelandet:

```
 Error ... carousel 
```
så behöver man skriva: 

```
npm install --save vue3-carousel
```



## Hur är websidan uppbyggd?
Våran websida är gjord med vue 3 och tailwindcss v.2.2.17  

Vi valde just de två för att vue 3 gör det enkelt att skapa en reaktiv websida, medans tailwind erbjuder ett stort css-bilbiotek som gör det lätt att designa fina websidor.
