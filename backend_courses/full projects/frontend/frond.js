const dataForm = document.getElementById("data-form");
const TitleInput = document.getElementById("title");
const BodyInput = document.getElementById("body");
const dataList = document.getElementById("data-list");

const apiUrl = "http://localhost:1000/get";

// Function to fetch and render data
function fetchData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            dataList.innerHTML = "";
            data.forEach(item => {
                const itemDiv = document.createElement("div");
                itemDiv.innerHTML = `
                <p><strong>Title:</strong> ${item.Title}</p>
                <p><strong>Body:</strong> ${item.Body}</p>
                <button onclick="editItem('${item._id}')">Edit</button>
                <button onclick="deleteItem('${item._id}')">Delete</button>
            `;
                dataList.appendChild(itemDiv);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Function to add a new item
function addItem() {
    const Title = TitleInput.value;
    const Body = BodyInput.value;
    const data = { Title, Body };
console.log(data);
    fetch('http://localhost:1000/post', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(() => {
        fetchData();
        clearForm();
    })
    .catch(error => console.error("Error adding data:", error));
}

// // Function to edit an existing item
// function editItem(id) {
//     const updatedTitle = prompt("Enter updated title:");
//     const updatedBody = prompt("Enter updated body:");
//     if (updatedTitle !== null && updatedBody !== null) {
//         const data = { title: updatedTitle, body: updatedBody };

//         fetch(`http://localhost:2000/put/${id}`, {
//             method: "PUT",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//         .then(response => response.json())
//         .then(() => fetchData())
//         .catch(error => console.error("Error editing data:", error));
//     }
// }

// // Function to delete an item
// function deleteItem(id) {
//     console.log(id);
//     fetch(`http://localhost:2000/delete/${id}`, {
//         method: "DELETE"
//     })
//     .then(() => fetchData())
//     .catch(error => console.error("Error deleting data:", error));
// }

// Function to clear the form
function clearForm() {
    TitleInput.value = "";
    BodyInput.value = "";
}

// Event listener for form submission
dataForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addItem();
});

// Initial fetching of data
fetchData();