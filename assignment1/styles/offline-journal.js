document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("note");
    const saveButton = document.getElementById("save");
    const notesList = document.getElementById("notes");
    const statusText = document.getElementById("status");

    function updateStatus() {
        if (navigator.onLine) {
            statusText.textContent = "Online";
            statusText.style.color = "green";
        } else {
            statusText.textContent = "Offline";
            statusText.style.color = "red";
        }
    }

    saveButton.addEventListener("click", () => {
        const note = noteInput.value;
        if (note) {
            const notes = JSON.parse(localStorage.getItem("notes")) || [];
            notes.push(note);
            localStorage.setItem("notes", JSON.stringify(notes));
            noteInput.value = "";
            displayNotes();
        }
    });

    function displayNotes() {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notesList.innerHTML = notes.map(note => `<li>${note}</li>`).join("");
    }

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    updateStatus();
    displayNotes();
});
