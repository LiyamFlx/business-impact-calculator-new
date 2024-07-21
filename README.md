# Business Impact Calculator

This repository contains a step-based form designed to help users assess the business impact of various opportunities. The form features a clean, black-and-white style and smooth microinteractions to enhance the user experience.

## Features

- **Step-Based Form**: The form guides users through several steps, each focusing on a single question.
- **Microinteractions**: Smooth transitions between steps to keep users engaged.
- **Keyboard Navigation**: Users can use the Enter key to move to the next step.
- **Progress Control**: Forward and backward buttons allow users to navigate through the form and make changes as needed.
- **Progress Indicator**: Displays the current step and estimated completion time.
- **Large Selection Buttons**: Makes answer choices easy to click and accessible.

## Form Structure

1. **Introduction Step**: Welcome message, estimated completion time, and start button.
2. **Step 1: Assessing the Market**:
    - Question 1: What is the potential market size for this opportunity?
    - Question 2: How would you rate the growth potential of this market?
    - Question 3: What is the potential market cap for this opportunity?
3. **Step 2: Impact and Execution**:
    - Question 4: How important is seizing new opportunities?
    - Question 5: How important is the potential impact?
    - Question 6: How important is the difficulty of execution?
    - Question 7: How important are challenges in construction and operation?
4. **Summary and Submission**: Displays user inputs for review and a submit button.

## Getting Started

### Prerequisites

- Web browser (latest version recommended)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/business-impact-calculator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd business-impact-calculator
    ```

### Usage

1. Open `index.html` in a web browser to view the form.
2. Follow the on-screen instructions to complete the form.

## Files

- `index.html`: The main HTML file containing the form structure.
- `styles.css`: The CSS file for styling the form.
- `script.js`: The JavaScript file for handling form interactions and navigation.
- `images/`: Directory containing icon images used in the form.

## Customization

You can customize the form by editing the HTML, CSS, and JavaScript files. Here are some ways you can modify the form:

### Adding or Removing Questions

1. **Add a New Question**:
    - Copy one of the existing question containers (`<div class="question-container" data-step="N">`).
    - Update the `data-step` attribute to the next number.
    - Modify the content as needed.

2. **Remove a Question**:
    - Delete the corresponding question container (`<div class="question-container" data-step="N">`).

3. **Update Total Steps**:
    - Update the `totalSteps` variable in `script.js` to match the number of questions.

### Changing the Design

1. **Update CSS**:
    - Modify `styles.css` to change the look and feel of the form.
    - Update colors, fonts, and layout as needed.

2. **Update Images**:
    - Replace images in the `images/` directory with your own icons.
    - Ensure the new images have the same names or update the image paths in `index.html`.

### Modifying the Results Page

1. **Update Results Content**:
    - Modify the `displayResults` function in `script.js` to change the content of the results page.
    - Add or remove result cards, update links, and change text as needed.

## Contributing

We welcome contributions to improve this project! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [Liyam](mailto:liyamflexer@gmail.com).
