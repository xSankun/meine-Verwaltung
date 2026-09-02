MEINE VERWALTUNG V16 – GITHUB PAGES / IPHONE LOKAL

WAS AUF GITHUB LIEGT
- index.html (Oberfläche und Programmlogik)
- manifest.webmanifest
- sw.js
- App-Icons

WAS NICHT AUF GITHUB LIEGT
- Namen
- Geburtsdaten
- Adressen
- Elterninformationen / Telefonnummern
- Notfallkontakte
- Module
- Religion / Lebenskunde / Integration
- Anwesenheitsdaten / Ankunfts- und Abholzeiten

Diese eingegebenen Daten werden lokal im IndexedDB-Speicher des jeweiligen iPhones abgelegt.
Die App enthält keine Funktion, die diese Daten an GitHub oder einen anderen Server sendet.

INSTALLATION ÜBER GITHUB PAGES
1. Neues GitHub-Repository erstellen.
2. Den INHALT dieses Ordners hochladen (index.html muss oben im Repository liegen).
3. In GitHub: Settings > Pages.
4. Deploy from a branch wählen.
5. Branch: main, Ordner: / (root), speichern.
6. Die von GitHub Pages angezeigte HTTPS-Adresse auf dem iPhone in Safari öffnen.
7. Teilen > Zum Home-Bildschirm.
8. App einmal bei bestehender Internetverbindung öffnen.
9. Danach Flugmodus testen.

WICHTIG
- Löschen der PWA oder Website-Daten kann die lokale Datenbank löschen.
- Regelmäßige lokale Backups sind sinnvoll.
- Bei Updates der App bleiben IndexedDB-Daten normalerweise erhalten, solange dieselbe GitHub-Pages-Adresse (Origin) verwendet wird.
- Wenn du Repository/Benutzernamen oder Pages-Adresse änderst, entsteht aus Sicht des Browsers ein anderer Speicherbereich.

DATENSCHUTZ
Die App lädt keine externen Schriftarten, Analytics, APIs oder Bilder nach.
Die Service-Worker-Datei cached nur die statischen App-Dateien.
