<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mango Calcium Carbide Detection System</title>
</head>
<body>
    <h1>🍋 Mango Calcium Carbide Detection System</h1>
    <p>This is an AI-powered mango analysis system designed to detect artificial ripening of mangoes using calcium carbide. It leverages a deep learning model served through a FastAPI backend and a modern React frontend to enable users to upload mango images and analyze them for calcium carbide contamination.</p>

    <h2>🚀 Features</h2>
    <ul>
        <li>Upload mango images for analysis.</li>
        <li>Get predictions on whether a mango is artificially ripened with calcium carbide or naturally ripened.</li>
        <li>Confidence scores for each prediction.</li>
        <li>User-friendly web interface with real-time feedback.</li>
    </ul>

    <h2>🛠️ Tech Stack</h2>
    <h3>Frontend</h3>
    <ul>
        <li><strong>React</strong> with TypeScript</li>
        <li>Tailwind CSS (for styling)</li>
        <li>Fetch API for backend communication</li>
    </ul>
    <h3>Backend</h3>
    <ul>
        <li><strong>FastAPI</strong> (Python web framework)</li>
        <li>TensorFlow/Keras for the AI model</li>
        <li>Pillow for image processing</li>
    </ul>
    <h3>Model</h3>
    <ul>
        <li>Pre-trained deep learning model (<code>calcium_carbide_model.h5</code>) to detect calcium carbide contamination.</li>
    </ul>

    <h2>🏗️ Project Structure</h2>
    <pre>

<code>
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
</code>
    </pre>

    <h2>🔧 Setup Instructions</h2>
    <h3>1. Clone the Repository</h3>
    <pre>

<code>
git clone https://github.com/your-repo/mango-analysis.git
cd mango-analysis
</code>
    </pre>

    <h3>2. Backend Setup</h3>
    <h4>Install Dependencies:</h4>
    <p>Make sure you have Python >=3.8 installed.</p>
    <pre>

<code>
cd backend
pip install -r requirements.txt
</code>
    </pre>

    <h4>Run the Backend Server:</h4>
    <p>Ensure the <code>calcium_carbide_model.h5</code> model file is placed in the <code>backend</code> directory.</p>
    <pre>

<code>
uvicorn main:app --reload --host 127.0.0.1 --port 8000
</code>
    </pre>
    <p>The server will be available at <code>http://127.0.0.1:8000</code>.</p>

    <h3>3. Frontend Setup</h3>
    <h4>Install Dependencies:</h4>
    <p>Ensure <strong>Node.js</strong> and <strong>npm</strong> are installed.</p>
    <pre>

<code>
cd frontend
npm install
</code>
    </pre>

    <h4>Start the Frontend:</h4>
    <pre>

<code>
npm run dev
</code>
    </pre>
    <p>The frontend will run on <code>http://localhost:5173</code> (default Vite development port).</p>

    <h2>🖥️ How It Works</h2>
    <ol>
        <li>Users upload an image of a mango on the web interface.</li>
        <li>The frontend sends the image to the FastAPI backend via a POST request.</li>
        <li>The backend:
            <ul>
                <li>Preprocesses the image.</li>
                <li>Runs the AI model to predict if calcium carbide is present.</li>
                <li>Returns the result (<code>predicted_class</code>) and a confidence score.</li>
            </ul>
        </li>
        <li>The frontend displays the result (natural ripening or calcium carbide detected).</li>
    </ol>

    <h2>📦 API Endpoint</h2>
    <p><strong>URL:</strong> <code>POST /predict</code></p>
    <h4>Request:</h4>
    <ul>
        <li>Content-Type: <code>multipart/form-data</code></li>
        <li>Payload: An image file with the field name <code>file</code>.</li>
    </ul>
    <h4>Response:</h4>
    <pre>

<code>
{
  "result": 1,  // 1 = Calcium Carbide, 0 = No Calcium Carbide
  "confidence": 0.93,
  "message": "Prediction completed successfully",
  "success": true
}
</code>
    </pre>

    <h2>🎨 Screenshots</h2>
    <h4>1. Landing Page</h4>
    <img src="https://via.placeholder.com/600x300.png?text=Landing+Page" alt="Landing Page">
    <h4>2. Image Upload and Prediction Result</h4>
    <img src="https://via.placeholder.com/600x300.png?text=Prediction+Result" alt="Prediction Result">

    <h2>🧪 Testing the Backend Independently</h2>
    <p>If you want to test the backend API without the frontend:</p>
    <ol>
        <li>Run the backend server.</li>
        <li>Use tools like <strong>Postman</strong> or <code>curl</code>:</li>
    </ol>
    <pre>

<code>
curl -X POST "http://127.0.0.1:8000/predict" -F "file=@path_to_your_image.jpg"
</code>
    </pre>

    <h2>📝 Notes</h2>
    <ul>
        <li>Ensure the AI model file (<code>calcium_carbide_model.h5</code>) is in the correct directory.</li>
        <li>Supported image formats: <strong>JPEG</strong>, <strong>PNG</strong>, <strong>WEBP</strong>.</li>
        <li>The threshold for prediction is <code>0.5</code>:
            <ul>
                <li><code>confidence > 0.5</code> → Calcium carbide detected.</li>
                <li><code>confidence <= 0.5</code> → Natural ripening.</li>
            </ul>
        </li>
    </ul>

    <h2>🐛 Troubleshooting</h2>
    <h4>Frontend: "Failed to fetch" error</h4>
    <ul>
        <li>Ensure the backend server is running at the correct endpoint (<code>http://127.0.0.1:8000</code>).</li>
        <li>Check CORS settings if accessing from a different origin.</li>
    </ul>
    <h4>Backend: "Model not loaded" error</h4>
    <ul>
        <li>Verify that <code>calcium_carbide_model.h5</code> exists and is correctly placed in the backend folder.</li>
        <li>Ensure TensorFlow is correctly installed.</li>
    </ul>

    <h2>🤝 Contributing</h2>
    <p>Contributions are welcome! If you'd like to improve the project:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a feature branch.</li>
        <li>Submit a pull request.</li>
    </ol>

    <h2>🛡️ License</h2>
    <p>This project is licensed under the MIT License.</p>

    <h2>💡 Acknowledgments</h2>
    <ul>
        <li>TensorFlow for deep learning.</li>
        <li>FastAPI for backend development.</li>
        <li>React and Tailwind CSS for building the user interface.</li>
    </ul>

    <h2>🌟 Contact</h2>
    <p>For any issues or questions, feel free to reach out:</p>
    <p><strong>Email</strong>: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
    <p><strong>GitHub</strong>: <a href="https://github.com/meertechnology01">Meertech INC</a></p>

    <p>Enjoy detecting calcium carbide! 🥭</p>

</body>
</html>
