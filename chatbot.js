document.addEventListener("DOMContentLoaded", function () {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotContainer = document.querySelector(".chatbot-container");
    const closeChatbotButton = document.getElementById("close-chatbot");
    const sendButton = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatbotBody = document.querySelector(".chatbot-body");

    // Toggle chatbot visibility
    chatbotToggle.addEventListener("click", () => {
        chatbotContainer.style.display = "flex";
    });

    closeChatbotButton.addEventListener("click", () => {
        chatbotContainer.style.display = "none";
    });

    // Send user message and get a response
    sendButton.addEventListener("click", () => {
        sendMessage();
    });

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        // Display the user's message
        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "user-message");
        userMessage.textContent = message;
        chatbotBody.appendChild(userMessage);

        // Scroll to the latest message
        chatbotBody.scrollTop = chatbotBody.scrollHeight;

        // Clear the input field
        userInput.value = "";

        // Static bot response (Placeholder)
        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot-message");
            botMessage.textContent = "This is a placeholder response. Connect to a backend to get dynamic responses.";
            chatbotBody.appendChild(botMessage);
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }, 1000);
    }
});
