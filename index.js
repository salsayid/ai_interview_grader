/**
 * Mocked AI Interview Grader
 * This script simulates grading interview responses by providing a score and feedback.
 */

require('dotenv').config();

/**
 * Mocked Wrapper Function to Grade Interview Responses
 * @param {string} question - The interview question
 * @param {string} response - The user's response
 * @returns {Promise<void>}
 */
async function gradeResponse(question, response) {
  try {
    // Mocked response to simulate OpenAI API
    const mockedResult = {
      score: 8,
      feedback: "Your response is clear and concise but could benefit from a real-world example to add depth.",
    };

    console.log("Grading Result (Mocked):");
    console.log(`Score: ${mockedResult.score}`);
    console.log(`Feedback: ${mockedResult.feedback}`);
  } catch (error) {
    console.error("Error grading response:", error.message);
  }
}

// Example usage
const exampleQuestion = "Explain the difference between a process and a thread.";
const exampleResponse =
  "A process is an independent program execution unit, while a thread is a lightweight execution unit within a process.";

// Call the mocked grading function
gradeResponse(exampleQuestion, exampleResponse);
