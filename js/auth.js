import { Auth } from 'aws-amplify';

// Check if the user is authenticated
export async function checkAuth() {
    try {
        const user = await Auth.currentAuthenticatedUser();
        console.log('User is authenticated:', user);
        return user;
    } catch (error) {
        console.error('User not authenticated:', error);
        window.location.href = 'index.html'; // Redirect to login page
    }
}

// Sign up
export async function signUp(username, password, email) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: { email },
        });
        console.log('Sign up successful:', user);
    } catch (error) {
        console.error('Sign up error:', error);
    }
}

// Login
export async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        console.log('Login successful:', user);
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } catch (error) {
        console.error('Login error:', error);
    }
}

// Logout
export async function signOut() {
    try {
        await Auth.signOut();
        console.log('Logout successful');
        window.location.href = 'index.html'; // Redirect to login page
    } catch (error) {
        console.error('Logout error:', error);
    }
}
