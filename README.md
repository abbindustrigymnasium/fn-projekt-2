# FN-projekt
## Databasen
- Hur är den uppbyggd?

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

### Hur är den uppbyggd?


# README filen i originella projektet
## fn-projekt-sql

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).