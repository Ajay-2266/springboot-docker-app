/*const apiurl="http//localhost:8087/api/student";

async function loadStudents(){
	const res=await fetch(apiurl);
	const students=await res.json();
	
	const list=document.getElementById("student-list");
	list.innerHTML="";
	
	students.forEach(s=>{
		const li=document.createElement("li");
		li.textContent=`${s.id}:${s.name} - ${s.email} - ${s.department}`;
		list.appendChild(li);
    });
}
loadStudents();
*/
const apiurl="http://localhost:8087/api/student";

async function loadStudents(){
	
	const res=await fetch(apiurl);
	const students=await res.json();
	
	const list=document.getElementById("student-list");
	list.innerHTML="";
	
	if(students.length===0){
		list.innerHTML="<p>NO students found.</P>";
		return;
	}
	students.forEach(s => {
	       const div = document.createElement("div");
	       div.className = "student-card";
	       div.innerHTML = `
	           <h3>${s.name}</h3>
	           <p><strong>ID:</strong> ${s.id}</p>
	           <p><strong>Email:</strong> ${s.email}</p>
	           <p><strong>Department:</strong> ${s.department}</p>
	       `;
	       list.appendChild(div);
	   });
}
window.addEventListener("DOMContentLoaded",loadStudents);