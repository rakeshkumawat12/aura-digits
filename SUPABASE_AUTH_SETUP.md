# Supabase Authentication Setup Guide

## Overview
Your Next.js app now has complete Supabase authentication with:
- ✅ Email/Password authentication
- ✅ Google OAuth sign-in
- ✅ Protected routes (Dashboard, Results)
- ✅ Auth state management
- ✅ Automatic session refresh

## 🔧 Configuration Files Created

### 1. Supabase Clients
- `src/lib/supabase/client.ts` - Browser client for client components
- `src/lib/supabase/server.ts` - Server client for server components
- `src/lib/supabase/middleware.ts` - Middleware for session management

### 2. Middleware
- `middleware.ts` - Route protection and session refresh

### 3. Auth Pages
- `src/app/auth/login/page.tsx` - Login with email/password + Google
- `src/app/auth/signup/page.tsx` - Signup with email/password + Google
- `src/app/auth/callback/route.ts` - OAuth callback handler
- `src/app/auth/actions.ts` - Server actions for logout

### 4. Updated Components
- `src/components/layout/Navbar/Navbar.tsx` - Shows auth state, user info, logout button

## 🚀 How to Use

### Testing Email/Password Auth

1. **Sign Up**:
   - Go to `http://localhost:3001/auth/signup`
   - Enter your name, email, and password
   - Check your email for verification link
   - Click the link to verify

2. **Sign In**:
   - Go to `http://localhost:3001/auth/login`
   - Enter email and password
   - You'll be redirected to `/dashboard`

3. **Sign Out**:
   - Click the "Logout" button in the navbar

### Testing Google OAuth

1. **Ensure Google OAuth is configured** in Supabase:
   - Go to Supabase Dashboard > Authentication > Providers > Google
   - Make sure it's enabled with Client ID and Secret

2. **Click "Continue with Google"**:
   - On login or signup page
   - Select your Google account
   - You'll be redirected back to your app

## 🔒 Protected Routes

The following routes are protected (require authentication):
- `/dashboard`
- `/results`

If a user tries to access these routes without being logged in, they'll be redirected to `/auth/login`.

## 📝 Important Supabase Settings

### Redirect URLs (Add these in Supabase Dashboard)

Go to: **Authentication** > **URL Configuration** > **Redirect URLs**

Add:
```
http://localhost:3001/auth/callback
http://localhost:3001/**
```

For production, also add:
```
https://yourdomain.com/auth/callback
https://yourdomain.com/**
```

### Email Templates (Optional)

Go to: **Authentication** > **Email Templates**

You can customize:
- Confirmation email
- Magic Link email
- Change email confirmation
- Reset password email

## 🎯 How Authentication Works

### 1. Sign Up Flow
```
User fills form → Supabase creates account → Sends verification email → User clicks link → Account verified → Auto login
```

### 2. Sign In Flow
```
User enters credentials → Supabase validates → Creates session → Sets cookies → Redirects to dashboard
```

### 3. Google OAuth Flow
```
User clicks Google button → Redirects to Google → User authorizes → Google redirects to /auth/callback → Session created → Redirects to dashboard
```

### 4. Session Management
```
Middleware runs on every request → Checks session → Refreshes if needed → Protects routes
```

## 🛡️ Security Features

1. **Secure Cookies**: Sessions stored in httpOnly cookies
2. **Auto Refresh**: Sessions automatically refreshed
3. **Route Protection**: Middleware blocks unauthorized access
4. **CSRF Protection**: Built into Supabase
5. **Rate Limiting**: Configurable in Supabase dashboard

## 📊 User Data Structure

When a user signs up, their data includes:

```typescript
{
  id: string;           // UUID
  email: string;
  user_metadata: {
    full_name: string;  // From signup form
  };
  created_at: string;
  // ... other Supabase fields
}
```

## 🔍 Accessing User Data

### In Client Components
```typescript
import { createClient } from '@/lib/supabase/client';

const supabase = createClient();
const { data: { user } } = await supabase.auth.getUser();
```

### In Server Components
```typescript
import { createClient } from '@/lib/supabase/server';

const supabase = await createClient();
const { data: { user } } = await supabase.auth.getUser();
```

## 🐛 Troubleshooting

### Email not sending?
- Check Supabase email provider settings
- For development, check the Supabase logs
- Consider using a custom SMTP provider for production

### Google OAuth not working?
- Verify Client ID and Secret in Supabase
- Check redirect URIs match exactly
- Ensure Google OAuth consent screen is configured

### Session not persisting?
- Check that cookies are enabled
- Verify middleware is running
- Check browser console for errors

### "Invalid Credentials" error?
- User might not be verified yet
- Password might be incorrect
- Email might not exist

## 📚 Next Steps

1. **Disable Email Confirmation** (for development only):
   - Supabase Dashboard > Authentication > Providers > Email
   - Turn off "Confirm email"

2. **Add More OAuth Providers**:
   - GitHub, Facebook, Twitter, etc.
   - Configure in Supabase Dashboard

3. **Customize Email Templates**:
   - Add your branding
   - Customize messaging

4. **Add Password Reset**:
   - Create `/auth/forgot-password` page
   - Use `supabase.auth.resetPasswordForEmail()`

5. **Add Profile Management**:
   - Create user profiles table
   - Add profile update functionality

## 🎉 You're All Set!

Your authentication system is fully functional. Users can:
- Sign up with email/password
- Sign in with email/password
- Sign in with Google
- Access protected pages
- Log out

The system automatically:
- Manages sessions
- Refreshes tokens
- Protects routes
- Shows auth state in navbar
