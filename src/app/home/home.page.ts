import { Component } from '@angular/core';

interface Note {
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes: Note[] = [];

  ionViewWillEnter() {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  addNote() {
    this.notes.push({ content: '' });
  }

  deleteNote(note: Note) {
    const index = this.notes.indexOf(note);
    if (index > -1) {
      this.notes.splice(index, 1);
      this.saveNotes();
    }
  }
}
