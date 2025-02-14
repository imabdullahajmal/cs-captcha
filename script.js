let captchaText = "";
        function generateCaptcha() {
            const canvas = document.getElementById("captchaCanvas");
            const ctx = canvas.getContext("2d");
            canvas.width = 200;
            canvas.height = 80;
            captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();
            ctx.fillStyle = "#333";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.font = "bold 30px Arial";
            ctx.filter = "blur(2px)";
            ctx.fillText(captchaText, 30, 50);
            ctx.filter = "none";
        }
        
        function verifyCaptcha() {
            const userInput = document.getElementById("captchaInput").value.toUpperCase();
            const result = document.getElementById("result");
            if (userInput === captchaText) {
                result.innerText = "✅ Correct!";
                result.style.color = "green";
            } else {
                result.innerText = "Verification Failed.";
                result.style.color = "red";
                generateCaptcha();
            }
        }

        generateCaptcha();