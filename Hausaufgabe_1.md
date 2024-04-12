# Aufgabe 1: Statuscode verstehen (15 Punkte)

Erstelle eine Liste von fünf häufig verwendeten HTTP-Statuscodes und erkläre für jeden, in welcher Situation er normalerweise vom Server zurückgegeben wird und welche Bedeutung er hat.

# Antwort:

# 201 Created:
Bedeutung: Dieser Statuscode wird zurückgegeben, wenn eine neue Ressource erfolgreich erstellt wurde. Es zeigt an, dass die Anfrage des Clients erfolgreich war und dass die angeforderte Ressource erstellt und auf dem Server gespeichert wurde.

# 401 Unauthorized:
Bedeutung: Dieser Statuscode wird zurückgegeben, wenn die Anfrage des Clients nicht bearbeitet werden kann, weil der Client nicht über die erforderlichen Authentifizierungsdaten verfügt oder diese ungültig sind. Der Client muss sich authentifizieren, um Zugriff zu erhalten.

# 405 Method Not Allowed:
Bedeutung: Dieser Statuscode wird zurückgegeben, wenn die vom Client verwendete HTTP-Methode nicht für die angeforderte Ressource zulässig ist. Zum Beispiel kann dies auftreten, wenn ein GET-Request für eine Ressource gesendet wird, die nur POST-Requests akzeptiert.

# 503 Service Unavailable:
Bedeutung: Dieser Statuscode wird zurückgegeben, wenn der Server vorübergehend nicht in der Lage ist, die Anfrage des Clients zu bearbeiten, oft aufgrund von Überlastung oder Wartungsarbeiten. Der Server gibt an, dass er vorübergehend nicht verfügbar ist, und der Client kann später erneut versuchen, die Anfrage zu senden.

# 400 Bad Request:
Bedeutung: Dieser Statuscode wird zurückgegeben, wenn die Anfrage des Clients fehlerhaft ist und vom Server nicht verstanden werden kann. Dies kann auf eine fehlerhafte Syntax in der Anfrage hinweisen, wie fehlende oder ungültige Parameter.


# Aufgabe 2: HTTP-Methoden (10 Punkte)

Erkläre die Unterschiede zwischen den vier Haupt-HTTP-Methoden: GET, POST, PUT und DELETE. Gib für jede Methode an, wann sie normalerweise verwendet wird und welchen Effekt sie auf den Server hat.

# Antwort

# GET:
Verwendung: Zum Abrufen von Daten vom Server, ohne den Serverzustand zu ändern.
Effekt auf den Server: Keine direkte Änderung des Serverzustands, nur Datenabruf.

# POST:
Verwendung: Zum Senden neuer Daten an den Server oder zum Erstellen von Ressourcen.
Effekt auf den Server: Erzeugt oder aktualisiert Ressourcen auf dem Server, indem neue Daten hinzugefügt werden.

# PUT:
Verwendung: Zum Aktualisieren oder Erstellen von Ressourcen auf dem Server.
Effekt auf den Server: Aktualisiert oder erstellt die angegebene Ressource auf dem Server basierend auf den bereitgestellten Daten.

# DELETE:
Verwendung: Zum Löschen von Ressourcen auf dem Server.
Effekt auf den Server: Entfernt die angegebene Ressource vom Server.

# Aufgabe 3: Beispiele aus dem Alltag (5 Punkte je Beispiel --> 35 Punkte)

Zu jeder Anfrage folgt eine Antwort. Wandle die folgenden alltäglichen Aktionen in HTTP-Anfragen und -Antworten um. Füge den Requests eine passende Methode und den Responses eine passenden Code hinzu. Hier ein kleines Beispiel:

**Request:** Ich möchte ein Formular bei einer Behörde einreichen. --> POST
**Response:** Sie haben vergessen das Formular zu unterschreiben. Bitte füllen Sie das Formular vollständig aus. --> 400 Bad Request

Vervollständige die folgenden Beispiele:

**Request:** Können Sie mir bitte die Informationen zu Produkt XYZ geben?
**Response:** Hier sind die Informationen zu Produkt XYZ.

# Request: GET
# Respond: 200 OK

**Request:** Ich möchte gerne mein Passwort ändern.
**Response:** Das hat leider nicht funktioniert. Ihr neues Passwort muss mindestens 8 Zeichen lang sein und mindestens einen Buchstaben und eine Zahl enthalten.

# POST
# 400 Bad Request

**Request:** Ich möchte gerne mein Profilbild aktualisieren.
**Response:** Ihr Bild wurde erfolgreich hochgeladen.

# POST
# 200 OK

**Request:** Bitte löschen Sie meinen Benutzeraccount.
**Response:** Entschuldigung, Benutzeraccount kann nicht gelöscht werden. Es gibt noch offene Bestellungen in Ihrem Konto.

# DELETE
# 403 Forbidden

**Request:** Ich möchte gerne den Artikel mit der ID 12345 in meinem Warenkorb haben.
**Response:** Artikel mit der ID 12345 wurde erfolgreich in Ihrem Warenkorb hinzugefügt.

# POST
# 201 Created

**Request:** Ich möchte gerne den Artikel mit der ID 12345 aus meinem Warenkorb entfernen.
**Response:** Artikel mit der ID 12345 wurde erfolgreich aus Ihrem Warenkorb entfernt.

# DELETE
# 200 OK

**Request:** Ich möchte gerne eine Übersicht über alle Shampoos in Ihrem Sortiment.
**Response:** Hier sind alle Shampoos in unserem Sortiment.

# GET
# 200 OK



# Aufgabe 5: URL-Struktur (5 Punkte)

Erkläre, was eine URL ist und wie sie aufgebaut ist. Nenne die Hauptbestandteile einer URL und erkläre, was sie bedeuten.

# Antwort:


Eine URL (Uniform Resource Locator) ist eine Adresse im Internet, die eine Ressource eindeutig identifiziert. Sie besteht aus folgenden Hauptbestandteilen:

Schema: Das Schema gibt das verwendete Protokoll an, z.B. "http", "https", "ftp", usw.

Host: Der Host ist die Adresse des Servers, auf dem die Ressource gehostet ist, z.B. "www.example.com" oder eine IP-Adresse wie "192.0.2.1".

Port: Der Port ist die numerische Kennung des Kommunikationskanals auf dem Server, z.B. 80 für HTTP und 443 für HTTPS. Portangaben sind optional.

Pfad: Der Pfad gibt den spezifischen Ort der Ressource auf dem Server an, z.B. "/blog/artikel/index.html".

Query-Parameter: Optionale Schlüssel-Wert-Paare, die zusätzliche Informationen an den Server übermitteln, z.B. "?suchbegriff=URL".

Fragment: Identifiziert normalerweise einen bestimmten Abschnitt innerhalb der Ressource, z.B. "#abschnitt2".


# Aufgabe 6: URL-Beispiele (5 Punkte je URL --> 25 Punkte)

Teile die folgenden URLs in ihre Bestandteile auf:

1. https://www.example.com:8080/products/category?id=12345&page=2
    Schema: https
    Host: www.example.com
    Port: 8080
    Pfad: /products/category
    Query-Parameter: id=12345&page=2
2. http://subdomain.example.org/login?redirect=/dashboard
    Schema: http
    Host: subdomain.example.org
    Pfad: /login
    Query-Parameter: redirect=/dashboard
3. https://api.example.com/v1/users/123/edit?lang=en
    Schema: https
    Host: api.example.com
    Pfad: /v1/users/123/edit
    Query-Parameter: lang=en
4. ftp://ftp.example.net/public/files/document.pdf
    Schema: ftp
    Host: ftp.example.net
    Pfad: /public/files/document.pdf
5. https://www.example.com:443/about_us?utm_source=google&utm_medium=cpc&utm_campaign=spring_sale
    Schema: https
    Host: www.example.com
    Port: 443 (Standardport für HTTPS)
    Pfad: /about_us
    Query-Parameter: utm_source=google&utm_medium=cpc&utm_campaign=spring_sale

# Aufgabe 6: REST-Prinzipien (10 Punkte fürs Durchlesen und 30 Zusatzpunkte fürs Erklären)

Recherchiere die sechs REST-Prinzipien und erkläre, was sie bedeuten und warum sie wichtig sind.

# Antwort:

Client-Server-Trennung: Dies bedeutet, dass die Client- und Serverkomponenten voneinander unabhängig entwickelt und skalierbar sein sollten. Dadurch wird die Struktur klarer und die Skalierbarkeit verbessert.

Zustandslosigkeit: Der Server speichert keine Informationen über den Zustand des Clients zwischen Anfragen. Dadurch wird die Skalierbarkeit erleichtert und die Systeme werden einfacher.

Cachebarkeit: Server sollten Daten so kennzeichnen, dass sie zwischengespeichert werden können. Das beschleunigt zukünftige Anfragen und reduziert die Netzwerklast.

Einheitliche Schnittstelle: Die Interaktion zwischen Client und Server erfolgt über einheitliche und eindeutige Schnittstellen. Das erleichtert die Entwicklung und verbessert die Interoperabilität.

Schichtung (Layered System): Ein System kann aus mehreren Schichten bestehen, die sich um verschiedene Funktionen kümmern. Dies ermöglicht eine flexible Architektur und erleichtert die Skalierung und Wartung.

Code auf Anfrage (optional): Clients können ihre Funktionalität durch das Herunterladen und Ausführen von Code vom Server erweitern. Dies ermöglicht eine flexible Erweiterung von Clients ohne vorherige Installation von Software.

Dies ist eine Quelle, die du nutzen kannst: [RESTful Web Services](https://restfulapi.net/rest-architectural-constraints/). In Deutsch und ausführlicher: [RESTful Web Services](https://it-talents.de/it-wissen/rest-representational-state-transfer/).
