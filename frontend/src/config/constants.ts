export const API_CONFIG = {
  // Replace this with your actual API endpoint
  ENDPOINT: 'http://127.0.0.1:8000/predict',
  ACCEPTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
};

export const RESULT_MESSAGES = {
  HEALTHY: {
    title: 'Natural Ripening Detected',
    description: 'This mango appears to be naturally ripened without calcium carbide contamination.',
  },
  CONTAMINATED: {
    title: 'Calcium Carbide Detected',
    description: 'Warning: This mango shows signs of artificial ripening with calcium carbide.',
  },
};