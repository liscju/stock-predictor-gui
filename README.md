Development

Po sciagnieciu zrodel:
npm install
bower install

Uruchomienie:
node server.js

ale polecam uruchomienie przy pomocy nodemon,
wtedy samodzielnie wczytuje od nowa stronke
jak zmieniasz kod zrodlowy i nie musisz od nowa
uruchamiac tego node.server.js itp
instalujesz nodemon w ten sposob:

npm install -g nodemon

jak juz zainstaluje uruchamiasz apke:

nodemon server.js

i cieszysz sie ze przy zmianie plikow zrodlowych
przeladowuje ci apke samodzielnie

Dodanie nowej strony:
1. Dodaj kontroler w public/js/controllers
2. Dodaj strone w public/views
3. Umiesc skrypt z kontrolerem w index.html
4. Dodaj plik kontrolera w public/js/app.js
5. Dodaj przekierowanie do strony w public/js/appRoute.js
6. Umiesc swoje przekierowanie do tej strony gdzie tam sobie chcesz

Dodanie nowego serwisu:
1. Dodaj swoj serwis w public/js/services na wzor StockService
2. Dodaj nazwe modulu z serwisem w public/js/app.js
3. Dodaj do kontrolera odwolanie do serwisu,masz wzor w WelcomeStockCtrl w deklaracji kontrolera

