import React from 'react';

function App() {
    return (
        <div>
            <h1>Welcome to BIDEc!</h1>
            <p>A message from Hassan bhai and Waheed bhai:</p>
            <p>"Welcome to BIDEc! We are excited to have you on board."</p>
        </div>
    );
}

export default App;
```

**Run the application**

1. Run `python manage.py runserver` in the `bidec` directory to start the Django backend.
2. Run `npm start` in the `frontend` directory to start the React frontend.
3. Open `http://localhost:3000` in your browser to see the welcome message.