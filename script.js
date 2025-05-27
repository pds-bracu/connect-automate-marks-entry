// Go to CONNECT --> Login --> Exam Controller --> Exam Marks Entry --> 3-dot menu --> #FINAL
// Developer Tools (Ctrl+Shift+I) -> Sources -> Left Pane (may be hidden) -> Snippets -> New Snipptes

// paste and overwrite the following line with the cell content copied from gsheet
var grades = [21101183, 0, 21101317, 0, 22101256, 41.84, 22201860, 56.9, 22201878, 56.63, 22299416, 64.78, 22301165, 66.49, 22301511, 14.04, 23101219, 50.84, 23201003, 86.93, 23201103, 64.59, 23201145, 74.95, 23201152, 97.41, 23201341, 84.93, 23201360, 58.21, 23201430, 89.71, 23201458, 49.61, 23201654, 96.31, 23301075, 87.24, 23301125, 87.52, 23301550, 64.52, 24101399, 81.33, 24101659, 91.43, 24101673, 92.56, 23201445, 97.89];

// Ctrl + Enter to run

var data = document.querySelectorAll('input[placeholder="Student"]');
var marks_field = document.querySelectorAll('input[placeholder="Marks"]');
var student_ids = [];

for (let i=0; i<data.length; i++) {
    student_ids.push(data[i].value.slice(0, 8));
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
