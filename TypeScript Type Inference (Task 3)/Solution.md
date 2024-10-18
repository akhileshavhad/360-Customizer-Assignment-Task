# Task 3: TypeScript Type Inference


## 3.1 : TypeScript feature is being used to specify the return type of function
Solution:

The function getUserInfo uses TypeScript's type annotations to specify the return type of the function as a Promise<{ name: string; age: number }>. This means that the function returns a promise, and when that promise resolves, it will return an object containing name (string) and age (number).
This annotation ensures that TypeScript enforces the structure and types of the resolved value, providing type safety.


## 3.2: handle missing the age property
Solution:

To handle cases where the age property might be missing in the API response, we can modify the return type and introduce a fallback mechanism in the function.

Approach:
-Modify the return type to make the age property optional using ?.
-Add a fallback for the age property when it is missing (e.g., assign null or another default value).

Key Changes:

Return Type:
The type is changed to Promise<{ name: string; age?: number }>, making the age property optional (?).

Handling the Response:
Inside the then block, we check if data.age is undefined. If it is, we assign null or any default value of your choice. This ensures that the function works even if the age field is missing.

```typescript
function getUserInfo(userId: number): Promise<{ name: string; age?: number }> {
  // Simulate an async API call
  return fetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then(data => ({
      name: data.name,
      age: data.age !== undefined ? data.age : null // Handling missing age property
    }));
}
