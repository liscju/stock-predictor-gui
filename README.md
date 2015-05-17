Development

Po sciagnieciu zrodel:
* npm install
* bower install

Uruchomienie:
* node server.js

ale polecam uruchomienie przy pomocy nodemon,
wtedy samodzielnie wczytuje od nowa stronke
jak zmieniasz kod zrodlowy i nie musisz od nowa
uruchamiac tego node.server.js itp
instalujesz nodemon w ten sposob:

* npm install -g nodemon

jak juz zainstaluje uruchamiasz apke:

* nodemon server.js

i cieszysz sie ze przy zmianie plikow zrodlowych
przeladowuje ci apke samodzielnie

Dodanie nowej strony:
*  Umiesc swoje przekierowanie do tej strony gdzie tam sobie chcesz
*  Dodaj kontroler w public/js/controllers
*  Dodaj strone w public/views
*  Umiesc skrypt z kontrolerem w index.html
*  Dodaj plik kontrolera w public/js/app.js
*  Dodaj przekierowanie do strony w public/js/appRoute.js

Dodanie nowego serwisu:
*  Dodaj swoj serwis w public/js/services na wzor StockService
*  Dodaj nazwe modulu z serwisem w public/js/app.js
*  Dodaj do kontrolera odwolanie do serwisu,masz wzor w WelcomeStockCtrl w deklaracji kontrolera

Baza danych:
Do testów korzystam z bazy ze swojej bazy w mongolab,jeżeli chcialbys
uzyc innej zmien url w /config/db.js

Kalendarz:
- angular-bootstrap https://angular-ui.github.io/bootstrap/

Wykres:
- http://www.amcharts.com/
