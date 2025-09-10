# GitHub Actions
Think of GitHub Actions as a robot assistant living inside your repository. You give it a recipe (a workflow file), and it automatically follows the instructions whenever something specific happens (like a push or a pull request).

Key Terminology
Let's use an analogy: Making a pizza. 🍕

- Workflow: The entire recipe from start to finish. It's triggered by an Event. A workflow is defined in a YAML file inside the .github/workflows/ directory of your repository.
- Event: The trigger that starts the recipe. For example, on: push (when someone pushes code) or on: pull_request (when a pull request is opened).
- Job: A major section of the recipe, like "Prepare Toppings" or "Bake Pizza." Jobs can run in parallel (at the same time) or sequentially (one after the other).
- Step: A single instruction within a job, like "Chop onions" or "Preheat the oven."
- Action: A pre-made, reusable command that you can plug into a step. Think of it as a specialized kitchen tool. For example, actions/checkout is an official action that "gets your code" from the repository, and actions/setup-node is an action that "installs Node.js."
- Runner: The server (the "kitchen") where your recipe is executed. GitHub provides runners with different operating systems (Ubuntu, Windows, macOS).