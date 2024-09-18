document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let birthdate = new Date(document.getElementById("birthdate").value);
    let today = new Date();

    if (birthdate > today) {
        document.getElementById("result").textContent = "Invalid birthdate!";
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    let monthDiff = today.getMonth() - birthdate.getMonth();
    let dayDiff = today.getDate() - birthdate.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById("result").textContent = `You are ${age} years old.`;
});
