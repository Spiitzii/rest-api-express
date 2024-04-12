# Aufgabe 1: Routing in Express (20 Punkte)

**Achtung - hypothethisches Beispiel**
In dem folgenden Codebeispiel findest du in der Datei `index.ts` folgenden Codeausschnitt:

```typescript
import express from "express";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express();

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

In der Datei `user.ts` findest du folgenden Codeausschnitt:

```typescript
import { Router } from "express";

export const userRouter = Router();

userRouter.get("/friends", (req: Request, res: Response) => {
  res.send("List of all users");
});

userRouter.get("/login", (req: Request, res: Response) => {
  res.send(`User with ID ${req.params.id}`);
});

userRouter.get("/logout", (req: Request, res: Response) => {
  res.send(`User with ID ${req.params.id}`);
});
```

In der Datei `product.ts` findest du folgenden Codeausschnitt:

```typescript
import { Router } from "express";

export const productRouter = Router();

productRouter.get("/list", (req: Request, res: Response) => {
  res.send("List of all products");
});

productRouter.get("/search", (req: Request, res: Response) => {
  res.send(`Product with name ${req.params.name}`);
});

productRouter.get("/details", (req: Request, res: Response) => {
  res.send(`Product with ID ${req.params.id}`);
});
```

Welche URLs mit welchen HTTP-Methoden kannst du in diesem Beispiel aufrufen?

# Antwort:

GET /users/friends: Listet alle Benutzer auf.
GET /users/login: Zeigt die Login-Seite für einen Benutzer an.
GET /users/logout: Zeigt die Logout-Seite für einen Benutzer an.
GET /products/list: Listet alle Produkte auf.
GET /products/search: Zeigt die Suchseite für Produkte an.
GET /products/details: Zeigt die Detailseite für Produkte an.

# Aufgabe 2: Error Handling in Express (20 Punkte)

Was ist Error Handling und wie wird es in Express verwendet?
Wie helfen Statuscodes bei der Fehlerbehandlung?

#Antwort:

Error Handling in Express bezieht sich auf die Behandlung von Fehlern, die während des Request-Response-Zyklus auftreten können. Dies wird durch spezielle Middleware-Funktionen erreicht, die Fehler abfangen und darauf reagieren. 

Statuscodes werden verwendet, um den Status einer HTTP-Anfrage zu beschreiben, was die Fehlerbehandlung erleichtert, indem sie dem Client klare Informationen darüber geben, was schief gelaufen ist.

# Aufgabe 3: Anwendung erweitern (60 Punkte)

## Teil 1: Code aufräumen (20 Punkte)

Erstelle eine Funktion in `services/data.ts`, dessen Aufgabe es ist eine neue Notiz zu erstellen und diese Notiz in der `notes.json`-Datei zu speichern. Sie soll selbstständig eine neue ID erreichen. Die Funktion soll folgende Signatur haben:

```typescript
import fs from 'fs';

const notesFilePath = 'notes.json';

// Funktion zum Hinzufügen einer neuen Notiz
export function addNote(title: string, content: string, user: string): void {
  // Alle Notizen aus der Datei lesen
  const notes = getAllNotes();
  // Neue Notiz erstellen mit einer inkrementellen ID
  const newNote = {
    id: notes.length + 1,
    title,
    content,
    user
  };
  // Neue Notiz hinzufügen
  notes.push(newNote);
  // Notizen zurück in die Datei schreiben
  fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
}

// Funktion zum Lesen aller Notizen aus der Datei
function getAllNotes() {
  // Versucht, die Datei zu lesen, oder gibt ein leeres Array zurück, falls sie nicht existiert
  try {
    return JSON.parse(fs.readFileSync(notesFilePath, 'utf8'));
  } catch (error) {
    return [];
  }
}

```

## Teil 2: Methode selbstständig implementieren (40 Punkte)

Implementiere den Endpunkt `DELETE /notes/:id` selbstständig. Der Endpunkt soll eine Notiz mit der ID `:id` löschen.
Wenn die Notiz mit der ID `:id` nicht existiert, soll ein Fehler mit dem Statuscode `404` zurückgegeben werden.
Wenn die Notiz erfolgreich gelöscht wurde, soll ein Statuscode `204` zurückgegeben werden.

**Hinweise:**

1. Überlege dir, wie du diese Aufgabe in kleinere Unterschritte aufteilen kannst.
2. Implementiere zuerst die Funktion in `services/data.ts`, die die Notiz löscht. Arrays stellen eine Funktion namens `filter` zur Verfügung, die dir dabei helfen könnte.
3. Implementiere dann den Endpunkt in `routes/notes.ts`.
4. Teste den Endpunkt mit Postman.

Probiere so weit wie du kommst. Wenn du nicht weiterkommst, ist das auch kein Problem. Schreibe einfach auf, wo du festhängst und warum.

```Typescript

//Löschen einer Notiz 

import fs from 'fs';

const notesFilePath = 'notes.json';

// Funktion zum Löschen einer Notiz anhand ihrer ID
export function deleteNote(id: string): boolean {
  // Alle Notizen aus der Datei lesen
  let notes = getAllNotes();
  // Löschung der Notiz mit der angegebenen ID
  const filteredNotes = notes.filter((note: { id: string }) => note.id !== id);
  // Überprüfen, ob eine Notiz gelöscht wurde
  if (filteredNotes.length !== notes.length) {
    // Notizen zurück in die Datei schreiben
    fs.writeFileSync(notesFilePath, JSON.stringify(filteredNotes, null, 2));
    return true; // Rückgabe true, wenn eine Notiz gelöscht wurde
  }
  return false; // Rückgabe false, wenn keine Notiz gelöscht wurde
}

// Funktion zum Lesen aller Notizen aus der Datei
function getAllNotes() {
  // Versucht, die Datei zu lesen, oder gibt ein leeres Array zurück, falls sie nicht existiert
  try {
    return JSON.parse(fs.readFileSync(notesFilePath, 'utf8'));
  } catch (error) {
    return [];
  }
}

// Endpunkt routes/notes.ts
import express, { Request, Response } from 'express';
import { deleteNote } from '../services/data';

export const notesRouter = express.Router();

// Endpunkt zum Löschen einer Notiz
notesRouter.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const noteDeleted = deleteNote(id);
  if (noteDeleted) {
    // Wenn die Notiz erfolgreich gelöscht wurde, sende Statuscode 204 zurück
    res.status(204).send();
  } else {
    // Wenn die Notiz nicht gefunden wurde, sende Statuscode 404 zurück
    res.status(404).send('Note not found');
  }
});


```

# Aufgabe 4: Ausblick: Logging in Express (freiwillig 10 Punkte)

Was ist Logging und warum ist es wichtig?

# Antwort

Logging ist der Prozess des Erfassens und Protokollierens von Informationen über das Verhalten einer Softwareanwendung während ihrer Laufzeit. Es ist wichtig, um Fehler zu diagnostizieren, die Leistung zu überwachen, Compliance-Anforderungen zu erfüllen, Sicherheitsbedrohungen zu erkennen und das Benutzerverhalten zu verstehen. Insgesamt ist Logging ein entscheidendes Instrument für Entwickler, um die Funktionalität und Effizienz ihrer Anwendungen sicherzustellen.

# Aufgabe 5: Ausblick: Middleware in Express (freiwillig 10 Punkte)

Was ist Middleware und wie wird es in Express verwendet?

Middleware in Express sind Funktionen, die den HTTP-Request-Response-Zyklus beeinflussen. Sie haben Zugriff auf Anfrage- und Antwortobjekte und können verschiedene Aufgaben wie Authentifizierung, Logging und Datenvalidierung ausführen. Middleware werden mit der use()-Methode registriert und in der Reihenfolge ihres Aufrufs ausgeführt. Sie bieten eine modulare Möglichkeit, um Funktionalitäten in Express-Anwendungen zu implementieren und zu organisieren.