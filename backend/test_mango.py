import requests

# Backend API endpoint
API_ENDPOINT = "http://127.0.0.1:8000/predict"
  
# Path to the image you want to test
IMAGE_PATH = "C:/Users/MIER_MIDS/Downloads/Mango/backend/(Mango)_Calcium Carbide/1668958760576.jpg"

def test_backend(api_endpoint, image_path):
    """
    Send an image to the backend API and print the response.

    :param api_endpoint: URL of the backend API
    :param image_path: Path to the image file to upload
    """
    try:
        # Open the image file in binary mode
        with open(image_path, "rb") as image_file:
            # Prepare the file for the request
            files = {"file": image_file}

            # Send POST request to the backend
            response = requests.post(api_endpoint, files=files)

            # Check if the request was successful
            if response.status_code == 200:
                print("Response from API:", response.json())
            else:
                print(f"Failed to get a response. HTTP Status Code: {response.status_code}")
                print("Error details:", response.text)

    except FileNotFoundError:
        print(f"Error: The file at {image_path} was not found.")
    except requests.RequestException as e:
        print(f"Error: Could not connect to the API. Details: {e}")

# Test the backend
test_backend(API_ENDPOINT, IMAGE_PATH)
