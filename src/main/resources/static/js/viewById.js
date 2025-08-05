const apiurl = "http://localhost:8087/api/student"; // ✅ Fixed URL

async function findStudent() {
    const id = document.getElementById("search-id").value;
    const resultDiv = document.getElementById("result");

    if (!id) {
        resultDiv.textContent = "Please enter a student ID.";
        return;
    }

    try {
        const res = await fetch(`${apiurl}/${id}`);

        if (!res.ok) {
            resultDiv.textContent = "Student not found.";
            return;
        }

        const student = await res.json();

        resultDiv.textContent = `${student.name} - ${student.email} - ${student.department}`;
    } catch (error) {
        console.error("Error fetching student:", error);
        resultDiv.textContent = "An error occurred while fetching the student.";
    }
}
