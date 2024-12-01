# Backend API Documentation

## `/users/register` Endpoint

## Description

Register a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"     // optional
    },
    "email": "john@example.com",
    "password": "password123"
}
```

### Validation Rules
- **firstname**: 
  - Required
  - Minimum 3 characters
- **lastname**: 
  - Optional
  - If provided, minimum 3 characters
- **email**: 
  - Required
  - Must be a valid email format
  - Must be unique in the system
  - Minimum 5 characters
- **password**:
  - Required
  - Minimum 6 characters

### Responses

#### Success Response
**Code**: `201 Created`

**Content example**:
```json
{
    "token": "jwt_token_here",
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "_id": "user_id_here"
    }
}
```

#### Error Responses

**Condition**: Validation errors (invalid input)  
**Code**: `400 Bad Request`
```json
{
    "errors": [
        {
            "msg": "Fullname must be at least 3 characters long",
            "param": "fullname"
        }
    ]
}
```

**Condition**: Email already exists  
**Code**: `400 Bad Request`
```json
{
    "message": "User already exist"
}
```

### Security
- Password is hashed using bcrypt before storage
- JWT token is generated upon successful registration
- Token expires in 24 hours

### Notes
- The password field is excluded from query results by default
- The response includes both the user object and an authentication token
- Socket ID field is optional and used for real-time communication
```

This README provides a clear documentation of the registration endpoint, including request format, validation rules, possible responses, and security measures. It follows standard REST API documentation practices and includes all the relevant information from your implementation.