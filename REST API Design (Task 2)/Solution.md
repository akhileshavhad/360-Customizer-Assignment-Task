# Task 2: REST API Design

## Scenario:

You need to design a REST API endpoint to retrieve user profile information. The endpoint should support fetching a user's profile by their username and include optional query parameters for filtering the results.
Requirements: 
●Define the endpoint URL and HTTP method.
●Specify the expected request parameters and response structure.
●Explain how you would handle errors (e.g., user not found) and validate input.


## Solution :

#### 1. Endpoint URL: `api/users/:username` using the GET method.

#### 2. Request params:
-   path params: username
- query params: fields and expand

#### 3. Error handling:
- If the user is not found in userDB, a 404 error is returned.

#### 4. Field filtering:
- If fields query parameter is provided, only the specified fields are included in the response.

#### 5. Response Structure:

```json

{
    "username": "Akhilesh_Avhad",
    "name": "Akhilesh Avhad",
    "email": "akhileshavhad47@gmail.com",
    "age": "20",
    "location": "pune",
    "active_status": true,
    "additionalFields": {
        "field1": "value1", 
        "field2": "value2"
    }
}
```