interface UserInput {
    email: string;
    password: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MIN_PASSWORD_LENGTH = 6;

function validateUserInput(input: UserInput): boolean {

   
    if (!emailRegex.test(input.email)) {
      throw new Error('Invalid email format');
    }
  
    
    if (input.password.length < MIN_PASSWORD_LENGTH) {
      throw new Error(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long`);
    }
  
    return true;
}
  
const userInput: UserInput = { email: 'bhangaleprathamesh744@gmail.com', password: 'pass123' };
  
try {
    validateUserInput(userInput);
    console.log('User input is valid!');
} catch (error) {
    console.error(error.message);
}


