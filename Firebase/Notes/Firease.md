# Firebase Interview Questions and Answers

## 1. What is Firebase?
Firebase is a platform developed by Google that provides backend-as-a-service (BaaS) for building web and mobile applications. It includes features like real-time databases, authentication, cloud functions, analytics, and hosting.

## 2. Is Firebase frontend or backend?
Firebase provides backend services like databases, authentication, and cloud functions. However, it also offers frontend SDKs that allow direct interaction with the backend services. So, it's mainly a backend solution with frontend support.

## 3. What is Firebase architecture?
Firebase architecture consists of multiple services:
- **Firebase Authentication** for user management
- **Cloud Firestore and Realtime Database** for data storage
- **Cloud Functions** for serverless backend logic
- **Firebase Hosting** for web app deployment
- **Firebase Cloud Messaging** for push notifications
- **Firebase Analytics** for app usage tracking

## 4. What are the features of Firebase? / What are the tasks you can accomplish with Firebase?
- Real-time database (Cloud Firestore & Realtime Database)
- User authentication (Email/Password, Google, Facebook, etc.)
- Cloud Storage for files and images
- Hosting for web applications
- Cloud Messaging for push notifications
- Machine Learning APIs
- Remote Config for A/B testing and personalization

## 5. Differences between Firebase and MongoDB

| Feature | Firebase (Firestore) | MongoDB |
|---------|----------------------|---------|
| Type | NoSQL (Document-based) | NoSQL (Document-based) |
| Hosting | Fully managed by Google | Self-hosted or managed via Atlas |
| Querying | Limited queries, real-time sync | Rich queries with indexing |
| Offline Support | Built-in | Requires additional setup |
| Scaling | Automatic | Manual or via Atlas |

## 6. Have you ever used Firebase Database (Realtime Database)?
This is a subjective question. If you have, mention your experience, such as working with real-time data updates, synchronization across devices, and how you structured your database.

## 7. Can you briefly explain the GitHub authentication process with Firebase?
- Enable GitHub authentication in Firebase Authentication settings.
- Register the application on GitHub and obtain Client ID and Secret.
- Configure OAuth redirect URI in GitHub settings.
- Use Firebase SDK to authenticate users via GitHub.

## 8. Which method is used to Sign-in the user in Firebase Email/Password authentication?
```javascript
firebase.auth().signInWithEmailAndPassword(email, password)
```

## 9. Authentication vs Authorization
- **Authentication**: Verifies user identity (e.g., login via email/password).
- **Authorization**: Determines access permissions (e.g., user vs. admin roles).

## 10. Can you tell me names of 3 authentication methods?
- Email/Password authentication
- Google Sign-in
- Fingerprint authentication

## 11. Which authentication methods have you ever used for your project purpose?
This depends on personal experience. Possible answers include Email/Password, Google Sign-in, Facebook Login, Phone Authentication, or biometric authentication.
