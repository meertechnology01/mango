# 🍋 Mango Calcium Carbide Detection System

This is an AI-powered mango analysis system designed to detect artificial ripening of mangoes using calcium carbide. It leverages a deep learning model served through a FastAPI backend and a modern React frontend to enable users to upload mango images and analyze them for calcium carbide contamination.

## 🚀 Features

- Upload mango images for analysis.
- Get predictions on whether a mango is artificially ripened with calcium carbide or naturally ripened.
- Confidence scores for each prediction.
- User-friendly web interface with real-time feedback.

## 🛠️ Tech Stack

### Frontend

- **React** with TypeScript
- Tailwind CSS (for styling)
- Fetch API for backend communication

### Backend

- **FastAPI** (Python web framework)
- TensorFlow/Keras for the AI model
- Pillow for image processing

### Model

- Pre-trained deep learning model (`calcium_carbide_model.h5`) to detect calcium carbide contamination.

## 🏗️ Project Structure

```
project-root/
│
├── backend/                  # FastAPI backend
│   ├── calcium_carbide_model.h5   # Trained ML model
│   ├── main.py               # FastAPI server script
│   ├── requirements.txt      # Python dependencies
│   └── ...
│
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # DetectionPage logic
│   │   ├── config/constants.ts   # API endpoint config
│   │   └── ...
│   ├── package.json          # Node.js dependencies
│   └── ...
│
└── README.md                 # Project documentation
```

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/mango-analysis.git
cd mango-analysis
```

### 2. Backend Setup

#### Install Dependencies:

Make sure you have Python >=3.8 installed.

```bash
cd backend
pip install -r requirements.txt
```

#### Run the Backend Server:

Ensure the `calcium_carbide_model.h5` model file is placed in the `backend` directory.

```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

The server will be available at `http://127.0.0.1:8000`.

### 3. Frontend Setup

#### Install Dependencies:

Ensure **Node.js** and **npm** are installed.

```bash
cd frontend
npm install
```

#### Start the Frontend:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite development port).

## 🖥️ How It Works

1. Users upload an image of a mango on the web interface.
2. The frontend sends the image to the FastAPI backend via a POST request.
3. The backend:
   - Preprocesses the image.
   - Runs the AI model to predict if calcium carbide is present.
   - Returns the result (`predicted_class`) and a confidence score.
4. The frontend displays the result (natural ripening or calcium carbide detected).

## 📦 API Endpoint

**URL:** `POST /predict`

### Request:

- Content-Type: `multipart/form-data`
- Payload: An image file with the field name `file`.

### Response:

```json
{
  "result": 1, // 1 = Calcium Carbide, 0 = No Calcium Carbide
  "confidence": 0.93,
  "message": "Prediction completed successfully",
  "success": true
}
```

## 🎨 Screenshots

### 1. Landing Page

![Landing Page](https://via.placeholder.com/600x300.png?text=Landing+Page)

### 2. Image Upload and Prediction Result

![Prediction Result](https://via.placeholder.com/600x300.png?text=Prediction+Result)

## 🧪 Testing the Backend Independently

If you want to test the backend API without the frontend:

1. Run the backend server.
2. Use tools like **Postman** or `curl`:

```bash
curl -X POST "http://127.0.0.1:8000/predict" -F "file=@path_to_your_image.jpg"
```

## 📝 Notes

- Ensure the AI model file (`calcium_carbide_model.h5`) is in the correct directory.
- Supported image formats: **JPEG**, **PNG**, **WEBP**.
- The threshold for prediction is `0.5`:
  - `confidence > 0.5` → Calcium carbide detected.
  - `confidence <= 0.5` → Natural ripening.

## 🐛 Troubleshooting

### Frontend: "Failed to fetch" error

- Ensure the backend server is running at the correct endpoint (`http://127.0.0.1:8000`).
- Check CORS settings if accessing from a different origin.

### Backend: "Model not loaded" error

- Verify that `calcium_carbide_model.h5` exists and is correctly placed in the backend folder.
- Ensure TensorFlow is correctly installed.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the project:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request.

## 🛡️ License

This project is licensed under the MIT License.

## 💡 Acknowledgments

- TensorFlow for deep learning.
- FastAPI for backend development.
- React and Tailwind CSS for building the user interface.

## 🌟 Contact

For any issues or questions, feel free to reach out:

**Email**: [your-email@example.com](mailto:your-email@example.com)

**GitHub**: [Meertech INC](https://github.com/meertechnology01)

Enjoy detecting calcium carbide! 🥭
