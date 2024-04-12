import { Request, Response, Router } from 'express'
import * as fs from 'node:fs'
// const fs = require('fs')

export const notesRouter = Router()

// CRUD - Create Read Update Delete
// PUT/PATCH, POST, GET, DELETE

// Create - POST
notesRouter.post('/', (req: Request, res: Response) => { })

// Read - GET
// '/' return all saved notes
notesRouter.get('/', (req: Request, res: Response) => {

  // 1. Inhalte aus der Datei auslesen

  const notesRaw = fs.readFileSync('data/notes.json', 'utf8')
  const notes = JSON.parse(notesRaw)

  console.log(notes)

  // 2. Daten zwischenspeichern und verarbeiten und vorbereiten
  // Es soll nur das Array zurückgegeben werden

  // const array = 

  // 3. Inhalte ausliefern

  // 4. auf Postman Anfrage senden -> überprüfen, ob alles funktioniert

  res.send()
})

// Update - PUT/PATCH -> TODO: Beispiel
notesRouter.put('/', (req: Request, res: Response) => { })

// Delete - DELETE
notesRouter.delete('/', (req: Request, res: Response) => { })