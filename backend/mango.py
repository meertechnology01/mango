from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import numpy as np
import tensorflow as tf
import os
import uvicorn

app = FastAPI()

# Enable CORS for frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with the frontend's origin for better security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model
MODEL_PATH = "C:/Users/MIER_MIDS/Downloads/Mango/backend/calcium_carbide_model.h5"

try:
    model = tf.keras.models.load_model(MODEL_PATH)
except Exception as e:
    raise HTTPException(status_code=500, detail=f"Failed to load model: {str(e)}")

# Class labels (adjust these if different in your dataset)
CLASS_NAMES = ["Calcium Carbide", "Healthy"]

# Function to preprocess image using Pillow
def preprocess_image(image_path: str, target_size=(150, 150)):
    try:
        # Load the image with Pillow
        image = Image.open(image_path).convert('RGB')  # Ensure RGB format
        image = image.resize(target_size)  # Resize image to target size
        image_array = np.array(image) / 255.0  # Normalize pixel values to [0, 1]
        image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension
        return image_array
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to preprocess image: {str(e)}")

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Save uploaded file temporarily
        file_path = f"temp_{file.filename}"
        with open(file_path, "wb") as temp_file:
            temp_file.write(await file.read())
        
        # Preprocess the image
        image_array = preprocess_image(file_path)

        # Make prediction
        prediction = model.predict(image_array)
        os.remove(file_path)  # Remove temp file after prediction

        # Output 0 for Calcium Carbide, 1 for Healthy
        predicted_class = int(prediction[0][0] <= 0.5)  # 0 for Calcium Carbide, 1 for Healthy
        confidence = 1 - float(prediction[0][0]) if predicted_class == 0 else float(prediction[0][0])

        # Return a standardized response including "result"
        response = {
            "result": predicted_class,  # Change "data.predicted_class" to "result"
            "confidence": confidence,
            "message": "Prediction completed successfully",
            "success": True
        }
        print(response)  # Print the response in the terminal
        return JSONResponse(response)

    except Exception as e:
        response = {
            "result": None,
            "message": f"Error during prediction: {str(e)}",
            "success": False
        }
        print(response)  # Print the response in the terminal
        return JSONResponse(response, status_code=500)

# Run the app
if __name__ == "__main__":
    print("Server is running on http://127.0.0.1:8000")
    uvicorn.run(app, host="127.0.0.1", port=8000)

