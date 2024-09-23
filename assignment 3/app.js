// Simple Offline Note App

// DOM Elements
const statusEl = document.getElementById('status');
const noteEl = document.getElementById('note');
const saveButton = document.getElementById('save');
const notesList = document.getElementById('notes');

// Local Storage Key
const STORAGE_KEY = 'simpleNotes';

// Load saved notes from local storage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    notesList.innerHTML = '';
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });
}

// Save the current note to local storage
function saveNote() {
    const notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    notes.push(noteEl.value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    noteEl.value = '';
    loadNotes();
}

// WebSocket setup (for simplicity, no actual server connection)
function setupWebSocket() {
    // Placeholder to demonstrate where WebSocket code would go
    statusEl.textContent = navigator.onLine ? 'Online' : 'Offline';
}

// Event Listeners
saveButton.addEventListener('click', saveNote);
window.addEventListener('online', setupWebSocket);
window.addEventListener('offline', setupWebSocket);

// Initial Load
loadNotes();
setupWebSocket();
