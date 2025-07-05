# Backend Project - YouTube Transcript & Membership System

This backend handles:
- Fetching YouTube transcripts from links
- User membership & premium features
- Authentication and token management

---

## Tasks & Features

### User Authentication
- [x] Add login functionality
- [x] Add registration (sign up)
- [x] Implement password reset
- [x] User logout endpoint ( server side token )
- [x] Refresh JWT tokens ( refresh token in cookie and database )

### User Profile
- [x] Update user profile info
- [x] Change password

### Membership & Subscription
- [x] Track membership type (free, premium)
- [x] Track membership duration
- [x] Cron job to reduce membership duration daily
- [x] Auto downgrade membership when duration reaches 0
- [ ] Payment integration for premium upgrades

### YouTube Transcript
- [x] Fetch transcript from YouTube video URL
- [x] Handle transcript errors / invalid URLs
- [ ] Cache transcripts for faster access

### Security & Middleware
- [x] JWT token verification middleware
- [x] Rate limiting for API endpoints
- [ ] Input validation and sanitization
- [x] Error handling middleware

### DevOps & Testing
- [ ] Write unit tests for authentication
- [ ] Write integration tests for API routes
- [ ] Setup environment configuration management
- [ ] Dockerize backend app

---

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install