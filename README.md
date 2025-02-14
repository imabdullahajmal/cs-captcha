# Client-Side CAPTCHA System

A lightweight, client-side CAPTCHA system built with HTML, JavaScript, and CSS to prevent automated form submissions.

## Features
- Simple and lightweight
- No server required
- Customizable difficulty
- Refresh button for new CAPTCHA
- Easy to integrate with any form

## Technologies Used
- HTML
- CSS
- JavaScript

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/client-side-captcha.git
   ```
2. Navigate to the project folder:
   ```sh
   cd client-side-captcha
   ```
3. Open `index.html` in your browser.

## Usage
1. Enter the CAPTCHA code displayed in the image.
2. Click "Verify" to check if the entered code is correct.
3. Click "Refresh" to generate a new CAPTCHA if needed.

## Example Code
```html
<form>
  <label for="captcha-input">Enter CAPTCHA:</label>
  <input type="text" id="captcha-input" />
  <canvas id="captcha-canvas"></canvas>
  <button type="button" onclick="verifyCaptcha()">Verify</button>
  <button type="button" onclick="generateCaptcha()">Refresh</button>
</form>
```

## License
This project is licensed under the MIT License.

## Contributing
Feel free to fork the project and submit pull requests with improvements!

## Contact
For any issues or feature requests, open an issue on GitHub.

