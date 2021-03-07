# Frontend Manufaktúra - SendMail
## Egyszerű e-mail küldés html űrlapról

Ebben a repóban a címben említett problémára találhattok megoldást.
Az e-mail küldéshez szükségünk lesz egy szerver oldali nyelvre. Itt és most a php-t hívjuk segítségül.
A repó két megoldást is kínál, amelyek lényegében egymásra épülnek.
Lássuk!

### Űrlap vezérelt küldés
Az első megoldásban az index.html fájlban található űrlap a submit típusú gomb megnyomásakor átadja az űrlap beviltei elemeinek értékét a sendmail.php fájlnak.
A php kódunkban a php beépített mail() függvényének adjuk át a szokséges paramétereket a megfelelő sorrendben.
A megoldás két levelet is küld.
- levél a weblap üzemeltetőjének az űrlapon megadott email címről, az ott megadott tárggyal és üzenettel
- visszaigazoló levél az űrlap kitöltőjének a weblap üzemelteteőjétől

### jQuery/Ajax vezérelt küldés
A második megoldásban az index_ajax.html-t alkalmazzuk, amely az első verziós űrlaphoz képest annyiban változott, hogy eltávolítottuk róla a form action-t és a gomb típust átállítottuk button-ra (a submit ugyanis frissíti az oldalt).
Eltérés továbbá, hogy a html-ben bekötésre került a jQuery (head-ben) és a main.js (/body előtt).
A main.js-ben natív javascript helyett jQuery-t használunk. Az értelmeztés segítése érdekében komment formájában megtalálható a natív javascript megoldás is.

#### Mi is az a jQuery?
A jQuery lényegében egy pehelysúlyú javascript könyvtár, amelyet azzal a céllal alkottak meg, hogy egyszerűbbé tegyék a JavaScript használatát.
A jQuery-vel képesek vagyunk:
- a DOM elemeinek manipulálására
- animációk létrehozására
- ajax hívások küldésére a szerver irányába

Visszatérve a második megoldás magyarázatához, a levél küldéséhez ugyanúgy a sendmail.php-t használjuk, ezen nem végeztünk módosítást.
A változás a már jelzett módon történt a html-ben, az adatok átadását és a sendmail.php meghívását a main.js fájlban valósítjuk meg tehát jQuery-vel egy ajax kérés által.

### Alkalmazott eszközök, kódrészletek
A mini projekt során az űrlap formázását Bootstrap 4 bekötésével oldottuk meg.
A php levélküldés során a mail() függvény hivatalos leírásában található példakódokra alapoztunk. https://www.php.net/manual/en/function.mail.php
A jQuery kódjaink ajax kérésre vonatkozó részében a jQuery hivatalos dokumentációjára támaszkodtunk. https://api.jquery.com/jquery.ajax/

Bobby from Geminus - 2021.03.06.
