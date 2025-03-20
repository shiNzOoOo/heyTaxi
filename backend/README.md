# HeyTaxi API Documentation

## User Registration Endpoint

### POST `/users/register`

Registers a new user in the system.

#### Request Body

```json
{
  "fullname": {
    "firstname": "string", // required
    "lastname": "string"  // optional
  },
  "email": "string",      // required, must be a valid email format
  "password": "string"    // required, minimum 6 characters
}
```

#### Validation Rules

-   `fullname.firstname` is required and cannot be empty. See [`body`](https://express-validator.github.io/docs/api/body) in [user.route.js](backend/routes/user.route.js).
-   `email` is required and must be a valid email address. See [`isEmail`](https://express-validator.github.io/docs/api/validator-chain#isemail) in [user.route.js](backend/routes/user.route.js).
-   `password` is required and must be at least 6 characters long. See [`isLength`](https://express-validator.github.io/docs/api/body) in [user.route.js](backend/routes/user.route.js).

#### Success Response

**Status Code**: 201 Created

```json
{
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string",
        "socketID": "string"
    },
    "token": "JWT_TOKEN"
}
```

#### Error Responses

**Status Code**: 400 Bad Request

*   When validation fails, returns an array of errors.

```json
{
    "errors": [
        {
            "type": "field",
            "value": "",
            "msg": "Error message",
            "path": "field_name",
            "location": "body"
        }
    ]
}
```

**Status Code**: 500 Internal Server Error

*   When required fields are missing or if a database operation fails.

#### Example Request

```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

## User Login Endpoint

### POST `/users/login`

Authenticates an existing user and returns a JWT token.

#### Request Body

```json
{
  "email": "string",      // required, must be a valid email format
  "password": "string"    // required, minimum 6 characters
}
```

#### Validation Rules

-   `email` is required and must be a valid email address. See [`isEmail`](https://express-validator.github.io/docs/api/body) in [user.route.js](backend/routes/user.route.js).
-   `password` is required and must be at least 6 characters long. See [`isLength`](https://express-validator.github.io/docs/api/body) in [user.route.js](backend/routes/user.route.js).

#### Success Response

**Status Code**: 200 OK

```json
{
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string",
        "socketID": "string"
    },
    "token": "JWT_TOKEN"
}
```

#### Error Responses

**Status Code**: 400 Bad Request

*   When validation fails, returns an array of errors.

```json
{
    "errors": [
        {
            "type": "field",
            "value": "",
            "msg": "Error message",
            "path": "field_name",
            "location": "body"
        }
    ]
}
```

**Status Code**: 401 Unauthorized

*   When invalid credentials are provided.

```json
{
    "message": "Invalid email or password"
}
```

#### Example Request

```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

## Get User Profile Endpoint

### GET `/users/profile`

Retrieves the authenticated user's profile information.

#### Headers Required

```
Authorization: Bearer <JWT_TOKEN>
```

#### Success Response

**Status Code**: 200 OK

```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "_id": "string",
    "socketID": "string"
}
```

#### Error Response

**Status Code**: 401 Unauthorized

*   When no token is provided or token is invalid

```json
{
    "message": "Authentication required"
}
```

## User Logout Endpoint

### GET `/users/logout`

Logs out the current user and invalidates their JWT token.

#### Headers Required

```
Authorization: Bearer <JWT_TOKEN>
```

#### Success Response

**Status Code**: 200 OK

```json
{
    "message": "Logout successfully"
}
```

#### Error Responses

**Status Code**: 401 Unauthorized

*   When no token is provided or token is invalid

```json
{
    "message": "Authentication required"
}
```

**Status Code**: 500 Internal Server Error

*   When token blacklisting fails

### Notes

*   Both endpoints require authentication via JWT token
*   The token must be included in the Authorization header using the Bearer scheme
*   Upon logout, the token is blacklisted and can no longer be used
*   The server also clears the authentication cookie if present