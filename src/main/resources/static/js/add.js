
const apiurl="http://localhost:8087/api/student";

document.getElementById("add-form").addEventListener("submit",async (e)=>{
	e.preventDefault();
	
	const id=document.getElementById("id").value;
	const name=document.getElementById("name").value;
	const email=document.getElementById("email").value;
	const department=document.getElementById("course").value;
	
	const student={
		id:parseInt(id),
		name:name,
		email:email,
		department:department
	};
	try{
		const res=await fetch(apiurl,{
			method:"POST",
			headers:{"Content-Type":"application/json"
				
			},
			body:JSON.stringify(student)
		});
	
		if(res.ok){
			alert("Stuudent added successfully...");
			e.target.reset();
		}
		else{
			alert("Student Not Added..!");
		}
	} catch(err){
		console.error("error occured:",err);
		alert("failedto connect to backend..");
	}

});
