# AI Interview Grader

A tool designed to help users practice interview skills by scoring responses and providing feedback. Built with simplicity and practicality in mind.

---

## Features

- **Mock API Functionality**: Simulates OpenAI API responses to eliminate costs during development and testing.
- **Simple Integration**: Easy to use and extend for future features.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ai_interview_grader.git
   cd ai_interview_grader

2. **Install Dependencies**:
   ```bash
   npm install

---

## Configuring OpenAI API Key

The tool uses a mock API by default. to enable OpenAI's API functionality:

1. **Obtain an API key from OpenAI**.


  
2. **Create a .env file in the root directory**:
   ```bash
   OPENAI_API_KEY=enter_your_api_key_right_here

   
3. **Update the index.js file to use OpenAI's API instead of the mock API function. Instructions for this are included in the code commments.**


---


## Usage Instructions

### Default Mock API Functionality
1. Run the app locally:
   ```bash
   node index.js

2. Enter sample interview responses when prompted.
   
3. the tool will return a score and feedback. For example:
   ```bash
   "score": 8,
   "feedback": "Great response! Adding specific examples will make it even stronger."

### Using OpenAI's API (Optional)
1. Configure the .env file as described above.
2. Ensure the index.js file uses OpenAI's API logic.
3. Run the app as usual:
   ```bash
   node index.js

