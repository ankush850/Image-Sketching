Image Sketching Web Application
This is a simple Flask web application that allows users to upload an image and convert it into a sketch. The application uses OpenCV for image processing and Pygame for rendering the output sketch.

Features
Upload an image file (JPEG, PNG, etc.)
Convert the uploaded image into a sketch
Display the resulting sketch on a new page
Requirements
Python 3.x
Flask
OpenCV
Pygame
Installation
Clone the repository:


Run
Copy code
git clone <repository-url>
cd <repository-directory>
Create a virtual environment (optional but recommended):

Run
Copy code
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install the required packages:


Run
Copy code
pip install Flask opencv-python pygame
Create necessary directories:

Make sure to create the static/uploads and static/output directories in your project folder:


Run

Copy code
mkdir -p static/uploads static/output
Usage
Run the application:


Run

Copy code
python app.py
Open your web browser and go to:

Run

Copy code
http://127.0.0.1:5000/
Upload an image:

Use the upload form to select an image file from your computer and submit it.

View the sketch:

After processing, you will be redirected to a new page displaying the sketch of the uploaded image.


Code Overview


app.py: The main application file containing the Flask app and the logic for image processing.
upload.html: The HTML template for the upload form.
output.html: The HTML template for displaying the output sketch.
Key Functions
sketch_image(image_path): Reads an image from the specified path, processes it, and returns the sketch.
draw_sketch_pygame(sketch_image, output_path): Renders the sketch using Pygame and saves it to the specified output path.
Contributing
Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.


Acknowledgments


Flask for the web framework.
OpenCV for image processing.
Pygame for rendering images.