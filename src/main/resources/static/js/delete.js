const apiurl = "http://localhost:8087/api/student";

async function deleteStudent() {
    const id = document.getElementById("student-id").value.trim();
    const messageDiv = document.getElementById("message");

    messageDiv.innerHTML = "";

    if (!id) {
        messageDiv.innerHTML = `<p class="error">⚠️ Please enter a student ID.</p>`;
        return;
    }

    const confirmDelete = confirm(`Are you sure you want to delete student with ID ${id}?`);
    if (!confirmDelete) return;

    messageDiv.innerHTML = `<p class="loading">Processing request...</p>`;

    try {
        const res = await fetch(`${apiurl}/${id}`, {
            method: "DELETE"
        });

        if (res.status === 200 || res.status === 204) {
            messageDiv.innerHTML = `<p class="success">✅ Student with ID ${id} deleted successfully.</p>`;
            document.getElementById("student-id").value = "";
        } else if (res.status === 404) {
            messageDiv.innerHTML = `<p class="error">❌ Student not found.</p>`;
        } else {
            messageDiv.innerHTML = `<p class="error">❌ Failed to delete student. Try again.</p>`;
        }
    } catch (error) {
        console.error(error);
        messageDiv.innerHTML = `<p class="error">❌ Server error. Please try again later.</p>`;
    }
}
