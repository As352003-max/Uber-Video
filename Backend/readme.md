# User Registration Endpoint

## Endpoint

`POST /users/register`

## Description

Registers a new user with the provided details.

## Request Body

- `fullname.firstname` (string, required): First name (minimum 3 characters).
- `fullname.lastname` (string, required): Last name (minimum 3 characters).
- `email` (string, required): Valid email address (minimum 6 characters).
- `password` (string, required): Password (minimum 6 characters).

## Responses

- **201 Created**
  - **Description**: User registered successfully.
  - **Body**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation errors.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - **Description**: Server encountered an error.

---

# User Login Endpoint

## Endpoint

`POST /users/login`

## Description

Logs in a user with the provided credentials.

## Request Body

- `email` (string, required): Valid email address.
- `password` (string, required): Password.

## Responses

- **200 OK**
  - **Description**: User logged in successfully.
  - **Body**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation errors.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        }
      ]
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid email or password.
  - **Body**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **500 Internal Server Error**
  - **Description**: Server encountered an error.

---

# User Profile Endpoint

## Endpoint

`GET /users/profile`

## Description

Retrieves the profile information of the authenticated user.

## Headers

- `Authorization` (string, required): Bearer token received during login/registration.

## Responses

- **200 OK**
  - **Description**: Profile retrieved successfully.
  - **Body**:
    ```json
    {
      "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid or missing authentication token.
  - **Body**:
    ```json
    {
      "message": "Authentication required"
    }
    ```

---

# User Logout Endpoint

## Endpoint

`POST /users/logout`

## Description

Logs out the currently authenticated user by invalidating their token.

## Headers

- `Authorization` (string, required): Bearer token received during login/registration.

## Responses

- **200 OK**
  - **Description**: User logged out successfully.
  - **Body**:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid or missing authentication token.
  - **Body**:
    ```json
    {
      "message": "Authentication required"
    }
    ```

---

# Captain Endpoints Documentation

## Register Captain

### `POST /captains/register`

**Request Body:**
```json
{
  "fullname": {
    "firstname": "Jane",    // required, min 3 characters
    "lastname": "Doe"       // required, min 3 characters
  },
  "email": "jane@example.com",         // required, valid email format
  "password": "secure123",             // required, min 6 characters
  "vehicle": {
    "color": "Red",                    // required, min 3 characters
    "plate": "ABC123",                 // required, min 3 characters
    "capacity": 4,                     // required, must be numeric
    "vehicleType": "car"              // required, enum: "car" or "motorcycle"
  }
}
```

**Success Response (201 Created):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",  // JWT authentication token
  "captain": {
    "_id": "60d0fe4f5311236168a109ca", // MongoDB generated ID
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null                    // assigned when captain connects via WebSocket
  }
}
```

## Login Captain

### `POST /captains/login`

**Request Body:**
```json
{
  "email": "jane@example.com",    // required, valid email format
  "password": "secure123"         // required, min 6 characters
}
```

**Success Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",  // JWT authentication token
  "captain": {
    // same captain object structure as register response
  }
}
```

## Get Captain Profile

### `GET /captains/profile`

**Headers Required:**
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."  // JWT token from login/register
}
```

**Success Response (200 OK):**
```json
{
  "captain": {
    // same captain object structure as register response
  }
}
```

## Logout Captain

### `GET /captains/logout`

**Headers Required:**
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."  // JWT token to invalidate
}
```

**Success Response (200 OK):**
```json
{
  "message": "Logged out successfully"
}
```

**Common Error Responses:**

**400 Bad Request:**
```json
{
  "errors": [
    {
      "msg": "Invalid email",           // descriptive error message
      "param": "email",                 // field causing the error
      "location": "body"               // location of the error (body, query, params)
    }
  ]
}
```

**401 Unauthorized:**
```json
{
  "message": "Authentication required"  // returned when token is missing or invalid
}
```

**500 Internal Server Error:**
```json
{
  "message": "Internal server error"   // generic server error message
}
```



# Ride Fare Endpoint

## Endpoint

`GET /rides/get-fare`

## Description

Calculates the fare for a ride based on the provided pickup and destination addresses. The fare is computed using the distance and duration returned from the map services and includes fares for different vehicle types (auto, car, motorcycle).

## Request Query Parameters

- `pickup` (string, required): The starting location address (minimum 3 characters).
- `destination` (string, required): The destination address (minimum 3 characters).

## Responses

- **200 OK**
  - **Description**: Fare calculated successfully.
  - **Body**:
    ```json
    {
      "auto": 123.45,
      "car": 234.56,
      "motorcycle": 89.12
    }
    ```
- **400 Bad Request**
  - **Description**: Validation errors or error while calculating fare.
  - **Body (Validation Errors Example)**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid pickup address",
          "param": "pickup",
          "location": "query"
        }
      ]
    }
    ```
  - **Body (Other Errors Example)**:
    ```json
    {
      "message": "Error message detailing the problem"
    }
    ``` 