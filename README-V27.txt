MEINE VERWALTUNG V27 – UPDATE-FIX FÜR IPHONE-PWA

Ziel:
Die installierte iPhone-Web-App soll neue GitHub-Pages-Versionen zuverlässiger übernehmen.

Geändert:
- Service Worker verwendet eine neue Cache-Version.
- Alte statische App-Caches werden beim Aktivieren entfernt.
- Beim App-Start wird aktiv nach einer neuen Service-Worker-Version gesucht.
- updateViaCache ist deaktiviert, damit nicht unnötig eine alte Service-Worker-Datei verwendet wird.
- Seitenaufrufe und statische App-Dateien bevorzugen online die aktuelle GitHub-Version.
- Offline bleibt die App über den lokalen Cache nutzbar.
- Ein kleines „V27“ unten rechts hilft zu prüfen, welche Oberfläche tatsächlich geladen ist.

WICHTIG:
Die lokale Datenbank für Personen/Anwesenheit bleibt unverändert:
DB: meine_verwaltung_v16_db
Store: state
Key: main

Dadurch werden vorhandene lokale Daten nicht absichtlich gelöscht oder migriert.

UPDATE:
1. Alle V27-Dateien in dasselbe GitHub-Repository hochladen/ersetzen.
2. Dieselbe GitHub-Pages-Adresse verwenden.
3. Auf dem iPhone Safari öffnen und die Pages-Adresse einmal aufrufen.
4. Danach die Home-Screen-App vollständig schließen und neu öffnen.
5. Unten rechts sollte „V27“ sichtbar sein.
