const courses = [

{code:"WDD130", credits:3, subject:"WDD", completed:true},
{code:"WDD131", credits:3, subject:"WDD", completed:true},
{code:"WDD231", credits:3, subject:"WDD", completed:false},
{code:"CSE110", credits:2, subject:"CSE", completed:true},
{code:"CSE210", credits:2, subject:"CSE", completed:true}

];

const container = document.querySelector("#courses");
const creditSpan = document.querySelector("#credits");

function displayCourses(courseList){

container.innerHTML="";

courseList.forEach(course => {

const card = document.createElement("div");

card.classList.add("course-card");

if(course.completed){
card.classList.add("completed");
}

card.innerHTML = `
<h3>${course.code}</h3>
<p>${course.credits} Credits</p>
`;

container.appendChild(card);

});

const totalCredits = courseList.reduce(
(sum, course) => sum + course.credits,0
);

creditSpan.textContent = totalCredits;

}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {

const wddCourses = courses.filter(course => course.subject === "WDD");

displayCourses(wddCourses);

});

document.querySelector("#cse").addEventListener("click", () => {

const cseCourses = courses.filter(course => course.subject === "CSE");

displayCourses(cseCourses);

});