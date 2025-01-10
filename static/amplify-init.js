import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json'; // Adjust the path if needed

Amplify.configure(outputs);

console.log("Amplify initialized with storage backend.");
