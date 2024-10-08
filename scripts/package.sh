#!/bin/sh

set -e; # exit on error

printf "JS... "
cat src/js/index.js | babel -f bundle.min.js | esbuild --bundle --minify > bundle/script.js
printf "OK\n"

printf "CSS... "
css-minify -o bundle -f src/styles.css

printf "HTML... "
cat src/index.html | html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype > bundle/index.html
printf "OK\n"

cp -r assets bundle/assets
cp -r coolassfx bundle/coolassfx

cp assets/favicon.ico bundle/favicon.ico
