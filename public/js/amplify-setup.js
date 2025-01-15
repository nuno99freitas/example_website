import { Amplify } from 'aws-amplify';
import amplifyConfig from '../amplify_outputs.json'; // Make sure the path is correct

// Configure Amplify with your Amplify outputs
Amplify.configure(amplifyConfig);

// Example: Using Auth and API
import { Auth } from 'aws-amplify';

// Sign in a user
async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        console.log('Successfully signed in:', user);
    } catch (error) {
        console.log('Error signing in:', error);
    }
}

// Other services (API, Storage, etc.) can be added here
