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
-   `email` is required and must be a valid email address. See [`isEmail`](https://express-validator.github.io/docs/api/body) in [user.route.js](backend/routes/user.route.js).
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

## Captain Registration Endpoint

### POST   `/captains/register`

Registers a new captain in the system.

#### Request Body

```json
{
    "fullname": {
        "firstname": "string", // required, minimum 3 characters
        "lastname": "string"  // optional
    },
    "email": "string",      // required, must be a valid email format
    "password": "string",   // required, minimum 6 characters
    "vehicle": {
        "plate": "string",        // required, minimum 6 characters
        "color": "string",        // required, minimum 3 characters
        "capacity": "number",     // required, must be an integer greater than 0
        "vehicleType": "string"   // required, must be either "car" or "motorcycle"
    }
}
```

#### Validation Rules

-   `fullname.firstname` is required and must be at least 3 characters long. See [`body`](https://express-validator.github.io/docs/api/body) in [captain.route.js](backend/routes/captain.route.js).
-   `email` is required and must be a valid email address. See [`isEmail`](https://express-validator.github.io/docs/api/body) in [captain.route.js](backend/routes/captain.route.js).
-   `password` is required and must be at least 6 characters long. See [`isLength`](https://express-validator.github.io/docs/api/body) in [captain.route.js](backend/routes/captain.route.js).
-   `vehicle.color` is required and must be at least 3 characters long. See [`body`](https://express-validator.github.io/docs/api/body) in [captain.route.js](backend/routes/captain.route.js).
-   `vehicle.plate` is required and must be at least 6 characters long. See [`body`](https://express-validator.github.io/docs/api/body) in [captain.route.js](backend/routes/captain.route.js).
-   `vehicle.capacity` is required and must be an integer greater than 0. See [`isInt`](https://express-validator.github.io/docs/api/validator-chain#isint) in [captain.route.js](backend/routes/captain.route.js).
-   `vehicle.vehicleType` is required and must be either "car" or "motorcycle". See [`isIn`](https://express-validator.github.io/docs/api/validator-chain#isin) in [captain.route.js](backend/routes/captain.route.js).

#### Success Response

**Status Code**: 201 Created

```json
{
    "captain": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string",
        "vehicle": {
            "plate": "string",
            "color": "string",
            "capacity": "number",
            "vehicleType": "string"
        }
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
    "password": "password123",
    "vehicle": {
        "plate": "ABC-123",
        "color": "red",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

## Captain Login Endpoint

### POST `/captains/login`

Authenticates an existing captain and returns a JWT token.

#### Request Body

```json
{
  "email": "string",      // required, must be a valid email format
  "password": "string"    // required, minimum 6 characters
}
```

#### Validation Rules

-   `email` is required and must be a valid email address. See [`isEmail`](https://express-validator.github.io/docs/api/body) in [captain.route.js](backend/routes/captain.route.js).
-   `password` is required and must be at least 6 characters long. See [`isLength`](https://express-validator.github.io/docs/api/body) in [captain.route.js](backend/routes/captain.route.js).

#### Success Response

**Status Code**: 200 OK

```json
{
    "captain": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string",
        "vehicle": {
            "plate": "string",
            "color": "string",
            "capacity": "number",
            "vehicleType": "string"
        }
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

## Get Captain Profile Endpoint

### GET `/captains/profile`

Retrieves the authenticated captain's profile information.

#### Headers Required

```
Authorization: Bearer <JWT_TOKEN>
```

#### Success Response

**Status Code**: 200 OK

```json
{
    "captain": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string",
        "vehicle": {
            "plate": "string",
            "color": "string",
            "capacity": "number",
            "vehicleType": "string"
        }
    }
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

## Captain Logout Endpoint

### GET `/captains/logout`

Logs out the current captain and invalidates their JWT token.

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

*   All captain endpoints require authentication via JWT token
*   The token must be included in the Authorization header using the Bearer scheme
*   Upon logout, the token is blacklisted and can no longer be used
*   The server also clears the authentication cookie if present

## Ride Endpoints

### POST `/rides/create`

Creates a new ride request.

#### Headers Required

```
Authorization: Bearer <JWT_TOKEN>
```

#### Request Body

```json
{
    "pickup": "string",       // required, minimum 3 characters
    "destination": "string",  // required, minimum 3 characters
    "vehicleType": "string"   // required, must be one of: "auto", "car", "moto"
}
```

#### Validation Rules

-   `pickup` is required and must be at least 3 characters long. See [`body`](https://express-validator.github.io/docs/api/body) in [ride.routes.js](backend/routes/ride.routes.js).
-   `destination` is required and must be at least 3 characters long. See [`body`](https://express-validator.github.io/docs/api/body) in [ride.routes.js](backend/routes/ride.routes.js).
-   `vehicleType` is required and must be one of "auto", "car", or "moto". See [`isIn`](https://express-validator.github.io/docs/api/body) in [ride.routes.js](backend/routes/ride.routes.js).

#### Success Response

**Status Code**: 201 Created

```json
{
    "user": "string",         // User ID
    "pickup": "string",
    "destination": "string",
    "vehicleType": "string",
    "status": "string"        // Ride status (e.g., "pending")
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

*   When a server error occurs.

#### Example Request

```json
{
    "pickup": "1600 Amphitheatre Parkway, Mountain View, CA",
    "destination": "San Francisco International Airport",
    "vehicleType": "car"
}
```

## Maps Endpoints

### GET `/maps/get-coordinates`

Retrieves the coordinates (latitude and longitude) for a given address.

#### Headers Required

```
Authorization: Bearer <JWT_TOKEN>
```

#### Query Parameters

-   `address`: string (required, minimum 3 characters) - The address to geocode.

#### Validation Rules

-   `address` is required and must be at least 3 characters long. See [`query`](https://express-validator.github.io/docs/api/query) in [maps.routes.js](backend/routes/maps.routes.js).

#### Success Response

**Status Code**: 200 OK

```json
{
    "coordinates": {
        "latitude": "number",
        "longitude": "number"
    }
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
            "location": "query"
        }
    ]
}
```

**Status Code**: 404 Not Found

*   When the address is not found.

#### Example Request

```
/maps/get-coordinates?address=1600 Amphitheatre Parkway, Mountain View, CA
```

### GET `/maps/get-distance-time`

Retrieves the distance and time between two locations.

#### Headers Required

```
Authorization: Bearer <JWT_TOKEN>
```

#### Query Parameters

-   `origin`: string (required, minimum 3 characters) - The starting address.
-   `destination`: string (required, minimum 3 characters) - The destination address.

#### Validation Rules

-   `origin` is required and must be at least 3 characters long. See [`query`](https://express-validator.github.io/docs/api/query) in [maps.routes.js](backend/routes/maps.routes.js).
-   `destination` is required and must be at least 3 characters long. See [`query`](https://express-validator.github.io/docs/api/query) in [maps.routes.js](backend/routes/maps.routes.js).

#### Success Response

**Status Code**: 200 OK

```json
{
    "distanceAndTime": {
        "distance": "number", // Distance in meters
        "duration": "number"  // Duration in seconds
    }
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
            "location": "query"
        }
    ]
}
```

**Status Code**: 404 Not Found

*   When the route between the origin and destination is not found.

#### Example Request

```
/maps/get-distance-time?origin=1600 Amphitheatre Parkway, Mountain View, CA&destination=San Francisco International Airport
```

### GET `/maps/get-suggestions`

Retrieves autocomplete suggestions for a given input string.

#### Headers Required

```
Authorization: Bearer <JWT_TOKEN>
```

#### Query Parameters

-   `input`: string (required, minimum 3 characters) - The input string to get suggestions for.

#### Validation Rules

-   `input` is required and must be at least 3 characters long. See [`query`](https://express-validator.github.io/docs/api/query) in [maps.routes.js](backend/routes/maps.routes.js).

#### Success Response

**Status Code**: 200 OK

```json
{
    "suggestions": [
        "string",
        "string",
        ...
    ]
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
            "location": "query"
        }
    ]
}
```

**Status Code**: 404 Not Found

*   When no suggestions are found for the given input.

#### Example Request

```
/maps/get-suggestions?input=San
```
### GET `/rides/get-fare`

Gets the estimated fare for a ride between two locations.

#### Headers Required


#### Query Parameters
- `pickup`: string (required) - Pickup location address, minimum 3 characters
- `destination`: string (required) - Destination location address, minimum 3 characters

#### Validation Rules
- `pickup` must be a string with minimum 3 characters
- `destination` must be a string with minimum 3 characters
- Requires valid JWT token in Authorization header

#### Success Response

**Status Code**: 200 OK

```json
{
    "auto": "number",    // Fare for auto ride
    "car": "number",     // Fare for car ride 
    "moto": "number"     // Fare for bike ride
}

```

#### Error Response

**Status Code**: 400 Bad Request


```json
{
    "errors": [
        {
            "type": "field",
            "value": "",
            "msg": "Error message", 
            "path": "field_name",
            "location": "query"
        }
    ]
}

```

**Status Code**: 401 Unauthorized

- When no token provided or token is invalid

```json
{
    "message": "Authentication required"
}
```
**Status Code**: 500 Internal Server Error

- When server encounters an error calculating fare

#### Example Request

- GET /rides/get-fare?pickup=Central Park, New York&destination=Times Square, New York

#### Example Response

```json
{
    "auto": 150,
    "car": 250,
    "moto": 100
}
```
