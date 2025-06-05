# ai-expermients
This repository contains projects generated entirely by AI.

## ai-calc

### ai used
- Github Copilot
- Anthropic Claude Sonnet v3.5

### description
A simple web application that implements the four primary mathematical operations of addition, multiplication, subtraction, and division.

This codebase was generated from the `ai-calc/docs/requirements.md` file. 

The following steps were taken to generate this codebase:
1. Prompt the AI to generate design documents from the `requirements.md` file. These were placed in the `ai-calc/docs/` folder by the AI.
2. Prompt the AI to generate the codebase based on the `requirements.md` file and the generated design documentation including deployment files for testing and running the code in the development and production environments. These were placed in the `ai-calc/implementation` folder by the AI.
3. Prompt the AI for the rationale on the maximum integer limit used when validating the inputs. This was raised from `1e6` to `1e15` based on the decisions commented in the code by the AI.
4. Prompted the AI to discuss the security implications of having no login for the web service and allowing anyone to POST requests freely to the web service.

### observations
- The AI managed to generate reasonable design documentation that included the tech stack, architecture, considerations for security and deployment, etc...
- The AI then managed, using the design documents and requirements as context to generate an initial implementation that implemented most of the requirements and design.
- The AI raised serious discussion regarding security concerns around the application, proposed modifications to address them, then implemented them.

I should clarify that I am not a JS developer, I am a Python/R developer. While I have used Node and Express in the past and this code looks correct to me, I can not guarantee its correctness.
