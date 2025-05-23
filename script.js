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

var grades = [21101183, 40.56, 21101317, 49.67, 22301165, 64.8, 22301511, 74.97, 23101219, 69.03, 23301125, 70.29, 23301550, 58.58, 23201145, 91.59, 23201341, 66.93, 23201445, 53.81, 23201152, 64.35, 24101399, 62, 22101256, 66.99, 22201860, 63.15, 22201878, 79.59, 24101673, 83.05, 22299416, 80.28, 23301075, 79.71, 24101659, 92.34, 23201003, 81.87, 23201103, 60.77, 23201360, 65.38];

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
