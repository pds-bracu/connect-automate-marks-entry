// Go to CONNECT --> Login --> Exam Controller --> Exam Marks Entry --> 3-dot menu --> #FINAL
// Developer Tools (Ctrl+Shift+I) -> Sources -> Left Pane (may be hidden) -> Snippets -> New Snipptes

// paste and overwrite the following line with the cell content copied from gsheet
var grades = [211011, 40.56, 211013, 49.67, 223011, 64.8, 223015, 74.97, 231012, 69.03, 233011];

// Ctrl + Enter to run

var data = document.querySelectorAll('input[placeholder="StudentId"]');
var marks_field = document.querySelectorAll('input[placeholder="Marks"]');
var student_ids = [];

for (let i=0; i<data.length; i++) {
    student_ids.push(data[i].value);
    for(let j=0; j<grades.length; j+=2) {
        if(student_ids[i] == grades[j]) {
            marks_field[i].value = grades[j+1];
            marks_field[i].dispatchEvent(new Event('input', {bubbles: true}));
            marks_field[i].scrollIntoView({behavior: "smooth", block: "center"});
            await sleep(500);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
