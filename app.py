import os
import cv2
import uuid
from flask import Flask, render_template, request, redirect, url_for, send_from_directory
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads'
app.config['OUTPUT_FOLDER'] = 'static/output'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB limit
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'webp'}

# Ensure folders exist
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
os.makedirs(app.config['OUTPUT_FOLDER'], exist_ok=True)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def sketch_image(image_path, output_path):
    """
    Converts an image to a pencil sketch and saves it.
    """
    # Read the image
    image = cv2.imread(image_path)
    if image is None:
        return False

    # Convert to grayscale
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Invert the grayscale image
    inverted_gray_image = 255 - gray_image

    # Apply GaussianBlur
    blurred_image = cv2.GaussianBlur(inverted_gray_image, (21, 21), 0)

    # Invert blurred image
    inverted_blurred_image = 255 - blurred_image

    # Create sketch by division
    sketch = cv2.divide(gray_image, inverted_blurred_image, scale=256.0)

    # Save the output directly using OpenCV (much faster than pygame)
    cv2.imwrite(output_path, sketch)
    return True

@app.route('/')
def upload_form():
    return render_template('upload.html')

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return redirect(request.url)
    
    file = request.files['file']
    if file.filename == '':
        return redirect(request.url)
    
    if file and allowed_file(file.filename):
        # Generate unique filenames to prevent collisions
        ext = file.filename.rsplit('.', 1)[1].lower()
        unique_id = str(uuid.uuid4())
        filename = secure_filename(f"{unique_id}.{ext}")
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        output_filename = f"sketch_{unique_id}.png"
        output_path = os.path.join(app.config['OUTPUT_FOLDER'], output_filename)

        # Process the image
        if sketch_image(filepath, output_path):
            return redirect(url_for('display_output', filename=output_filename))
        else:
            return "Error processing image", 500
            
    return "Invalid file type. Allowed: png, jpg, jpeg, webp", 400

@app.route('/output/<filename>')
def display_output(filename):
    return render_template('output.html', filename=filename)

@app.route('/static/output/<filename>')
def send_output(filename):
    return send_from_directory(app.config['OUTPUT_FOLDER'], filename)

if __name__ == "__main__":
    app.run(debug=True)
