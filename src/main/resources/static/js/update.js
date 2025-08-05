const apiUrl = "http://localhost:8087/api/student";

async function updateStudent() {
    const id = document.getElementById("id").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value.trim();
    const messageDiv = document.getElementById("message");

    if (!id || !name || !email || !department) {
        messageDiv.innerHTML = `<p style="color:red;">⚠️ Please fill all fields.</p>`;
        return;
    }

    const updatedStudent = { name, email, department };

    try {
        const res = await fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedStudent)
        });

        if (!res.ok) {
            throw new Error("Update failed");
        }

        const result = await res.json();

        messageDiv.innerHTML = `
            <p style="color:green;">✅ Student updated successfully!</p>
            <p><strong>ID:</strong> ${result.id}</p>
            <p><strong>Name:</strong> ${result.name}</p>
            <p><strong>Email:</strong> ${result.email}</p>
            <p><strong>Department:</strong> ${result.department}</p>
        `;
    } catch (err) {
        console.error(err);
        messageDiv.innerHTML = `<p style="color:red;">❌ Failed to update student.</p>`;
    }
}
