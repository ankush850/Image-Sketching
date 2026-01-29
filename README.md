# 🎨 Image to Sketch Converter

A professional web application built with Flask and OpenCV that transforms your photos into beautiful pencil sketches. 

## 🚀 Features

- **Pencil Sketch Effect**: Advanced image processing using Gaussian Blur and Division normalization.
- **Modern UI**: Clean, responsive dashboard with a professional dark theme.
- **Drag & Drop**: Intuitive file upload with drag-and-drop support.
- **Fast Processing**: Optimized backend using OpenCV for near-instant transformations.
- **Downloadable Art**: Easily download your generated sketches with a single click.
- **Secure**: Unique filename generation and file type validation.

## 🛠️ Technology Stack

- **Backend**: Python, Flask
- **Image Processing**: OpenCV (Open Source Computer Vision Library)
- **Frontend**: HTML5, CSS3 (Modern Flexbox/Grid), JavaScript (ES6+)
- **Storage**: Local filesystem with unique UUID mapping

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Image-Sketching.git
   cd Image-Sketching
   ```

2. **Set up a virtual environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install flask opencv-python werkzeug
   ```

## 🎮 Usage

1. **Start the Flask server**:
   ```bash
   python app.py
   ```
2. **Open your browser** and navigate to `http://127.0.0.1:5000`.
3. **Upload an image** (PNG, JPG, JPEG, or WEBP).
4. Click **"Sketch-ify"** and wait for the magic to happen!
5. **Download** your masterpiece from the output page.

## 📂 Project Structure

```text
Image-Sketching/
├── static/
│   ├── css/           # Styled with modern, responsive CSS
│   ├── js/            # Client-side interactivity and UX
│   ├── uploads/       # Temporary storage for uploaded images
│   └── output/        # Generated sketch results
├── templates/         # Jinja2 HTML templates
├── app.py             # Flask backend & Image processing logic
└── README.md          # Project documentation
```

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).

---
*Created with ❤️ for Art and Technology.*
