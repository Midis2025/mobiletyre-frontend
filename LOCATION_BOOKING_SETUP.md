# 📍 Location Booking System - Setup Guide

## 🎯 Overview

This is a complete location picker + booking form system for the Mobile Tyre service website. It replaces the static location dropdown with:

- **Postcode Autocomplete**: UK postcode search with suggestions from postcodes.io
- **Interactive Map**: Google Maps with draggable marker
- **Reverse Geocoding**: Automatic address conversion from coordinates
- **Booking Form**: Complete form with validation and Strapi integration

---

## 🚀 Quick Start

### 1. Install Google Maps API Key

#### Step 1: Create Google Cloud Project
```
1. Go to: https://console.cloud.google.com/
2. Click on the project dropdown and create a new project
3. Name it: "Mobile Tyre Service" (or similar)
4. Wait for project creation to complete
```

#### Step 2: Enable Required APIs
```
1. Go to "APIs & Services" > "Library"
2. Search for "Maps JavaScript API"
   - Click it and press "ENABLE"
3. Search for "Geocoding API"
   - Click it and press "ENABLE"
4. Search for "Places API" (optional, for advanced features)
   - Click it and press "ENABLE"
```

#### Step 3: Create API Key
```
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key
4. Paste it in your .env.local file:
   VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

#### Step 4: Restrict API Key (Optional but Recommended)
```
1. In Credentials, find your API key
2. Click on it to edit
3. Under "Application restrictions":
   - Select "HTTP referrers (web sites)"
   - Add your domain: example.com
4. Under "API restrictions":
   - Select "Restrict key"
   - Choose only Maps JavaScript API & Geocoding API
5. Save
```

---

### 2. Project Setup

#### Clone/Install Dependencies
```bash
npm install
```

#### Add Google Maps API Key
```bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Edit .env.local and add your API key
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

#### Run Development Server
```bash
npm run dev
```

Navigate to `http://localhost:5173` and you should see the new booking form in the Hero section.

---

## 🧩 Components

### 1. **PostcodeAutocomplete** 
**Location**: `src/components/PostcodeAutocomplete.jsx`

Handles UK postcode autocomplete using postcodes.io API.

**Features**:
- Debounced input (300ms delay)
- Real-time suggestions with district information
- Keyboard navigation (arrow keys, Enter, Escape)
- Click outside to close suggestions
- Loading and error states

**Usage**:
```jsx
<PostcodeAutocomplete
  onSelect={(data) => {
    console.log(data.postcode, data.latitude, data.longitude);
  }}
  placeholder="Enter UK postcode"
/>
```

**API Used**: 
- https://api.postcodes.io/postcodes?q={query}

---

### 2. **MapPicker**
**Location**: `src/components/MapPicker.jsx`

Google Maps integration with location selection.

**Features**:
- Displays map centered on selected location
- Draggable marker (orange with white border)
- Click on map to set location
- "Use My Location" button (browser geolocation)
- Reverse geocoding to convert coordinates → readable address
- Mobile responsive (350px height)
- Shows current coordinates and address

**Usage**:
```jsx
<MapPicker
  initialLat={51.5074}
  initialLng={-0.1278}
  onLocationChange={(location) => {
    console.log(location.latitude, location.longitude, location.address);
  }}
  googleMapsApiKey={apiKey}
/>
```

**APIs Used**:
- Google Maps JavaScript API
- Google Geocoding API (reverse geocoding)
- Browser Geolocation API

---

### 3. **LocationBookingForm**
**Location**: `src/components/LocationBookingForm.jsx`

Complete booking form combining PostcodeAutocomplete + MapPicker.

**Features**:
- Personal information section (name, phone)
- Location selection with postcode autocomplete
- Interactive map for refinement
- Service details (service type, tyre size, timing)
- Form validation
- Strapi backend integration
- Success/error notifications

**Form Fields**:
- Full Name (required)
- Phone Number (required, validated)
- UK Postcode (required, via autocomplete)
- Address (auto-filled from postcode/map)
- Latitude, Longitude (auto-filled from map)
- Service Type (dropdown)
- Tyre Size (required)
- Timing Slot (dropdown)

**Strapi Submission**:
```
Endpoint: POST /api/bookings
Payload: {
  data: {
    fullName: "John Doe",
    phoneNumber: "+44 207 101 3856",
    postcode: "GU11 3HY",
    address: "123 Main Street, Aldershot...",
    latitude: 51.1476,
    longitude: -0.7488,
    serviceType: "Emergency Tyre Fitting",
    tyreSize: "225/45 R17",
    timingSlot: "As Soon As Possible",
    bookingStatus: "Pending"
  }
}
```

---

### 4. **Hero Component** (Updated)
**Location**: `src/components/Hero.jsx`

Updated to use LocationBookingForm instead of static form.

**Changes**:
- Replaced hardcoded location dropdowns with dynamic LocationBookingForm
- Maintains original hero text and CTAs
- Uses Google Maps API key from environment variables

---

## 🔌 API Integrations

### External APIs Used

| API | Purpose | Endpoint | Free Tier |
|-----|---------|----------|-----------|
| **Postcodes.io** | UK postcode lookup | `https://api.postcodes.io/postcodes?q=...` | ✅ Yes |
| **Google Maps JS** | Map display & interaction | Google Cloud | ✅ Free tier available |
| **Google Geocoding** | Reverse geocoding | Google Cloud | ✅ Free tier available |
| **Browser Geolocation** | User's current location | Browser API | ✅ Built-in |
| **Strapi** | Backend data submission | `/api/bookings` | Depends on your setup |

### Postcodes.io API
- **Free to use**: No API key required
- **Rate limit**: ~100 requests per second
- **Documentation**: https://postcodes.io

### Google Maps APIs
- **Free tier**: 
  - Maps JavaScript API: $7 per 1000 loads (after $200 monthly free credit)
  - Geocoding API: $5 per 1000 requests (after $200 monthly free credit)
- **Documentation**: https://developers.google.com/maps
- **Console**: https://console.cloud.google.com/

---

## 📝 Strapi Backend Configuration

### Required Collection
Create a "Booking" collection in Strapi with these fields:

```
fullName          (Text) - Required
phoneNumber       (Text) - Required
postcode          (Text) - Required
address           (Text) - Required
latitude          (Decimal) - Required
longitude         (Decimal) - Required
serviceType       (Text) - Required
tyreSize          (Text) - Required
timingSlot        (Text) - Required
bookingStatus     (Text) - Default: "Pending"
createdAt         (DateTime) - Auto
```

### API Endpoint
```
POST /api/bookings
```

### Example Request
```bash
curl -X POST \
  https://enduring-morning-cf86e59201.strapiapp.com/api/bookings \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "fullName": "John Doe",
      "phoneNumber": "+44 207 101 3856",
      "postcode": "GU11 3HY",
      "address": "123 Main Street, Aldershot, Hampshire GU11 3HY",
      "latitude": 51.1476,
      "longitude": -0.7488,
      "serviceType": "Emergency Tyre Fitting",
      "tyreSize": "225/45 R17",
      "timingSlot": "As Soon As Possible",
      "bookingStatus": "Pending"
    }
  }'
```

---

## 🎨 UI/UX Features

### Postcode Autocomplete
- **Debouncing**: 300ms delay to reduce API calls
- **Suggestions**: Shows up to 8 matching postcodes
- **Info Display**: Shows postcode + district + region
- **Keyboard Nav**: Arrow keys to navigate, Enter to select, Escape to close
- **Loading State**: Spinner while fetching
- **Error Handling**: User-friendly error messages

### Map Picker
- **Responsive**: Works on mobile, tablet, desktop
- **Height**: 350px (adjustable)
- **Marker**: Orange with white border, draggable
- **Geolocation**: One-click current location button
- **Address Display**: Shows full address and coordinates
- **Reverse Geocoding**: Updates address on marker move

### Booking Form
- **Organized Sections**: Personal Info, Location, Service Details
- **Visual Hierarchy**: Icons and color coding for different sections
- **Validation**: Real-time validation with error messages
- **Loading State**: Spinner during submission
- **Success Feedback**: Green success message after submission
- **Mobile Responsive**: Stacks on small screens

---

## 🐛 Troubleshooting

### Map Not Displaying
**Issue**: Map shows blank/gray area

**Solutions**:
1. Check API key is valid in `.env.local`
2. Ensure Maps JavaScript API is enabled in Google Cloud
3. Check browser console for errors
4. Verify API key restrictions allow your domain

### Postcode Not Found
**Issue**: "No postcodes found" message

**Solutions**:
1. Check postcode spelling (UK postcodes are specific)
2. Try a different postcode format (e.g., "GU11" or "GU11 3HY")
3. Postcodes.io has UK postcodes only - check if postcode exists

### Geolocation Not Working
**Issue**: "My Location" button doesn't work

**Solutions**:
1. Browser geolocation requires HTTPS (or localhost)
2. User must grant location permission
3. Check browser's location settings
4. Some browsers require HTTPS even for localhost in some cases

### API Key Errors
**Issue**: "Failed to load Google Maps" or 403 error

**Solutions**:
1. Check API key is correct in `.env.local`
2. Ensure APIs are enabled: Maps JavaScript API, Geocoding API
3. Check API key restrictions (if set)
4. Try removing all restrictions temporarily for testing
5. Regenerate API key if unsure

### Form Not Submitting
**Issue**: Form submission fails silently

**Solutions**:
1. Check browser console for errors
2. Verify Strapi endpoint URL is correct
3. Check Strapi collection exists and has correct fields
4. Verify postcode is selected (not just typed)
5. Check all required fields are filled

---

## 📦 Dependencies

```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "react-router-dom": "^7.13.2",
  "lucide-react": "^1.6.0"
}
```

**External Services** (no npm package needed):
- Google Maps JavaScript API (loaded dynamically)
- Postcodes.io API (fetch API)
- Strapi Backend (fetch API)
- Browser Geolocation API

---

## 🚀 Deployment Checklist

### Before Deploying to Production

- [ ] Google Maps API key set in environment variables
- [ ] Maps JavaScript API & Geocoding API enabled
- [ ] API key restrictions set to your domain
- [ ] Strapi backend URL configured correctly
- [ ] Strapi "Booking" collection created with all required fields
- [ ] `.env.local` NOT committed to git (add to .gitignore)
- [ ] `.env.example` has all required variables (with no secrets)
- [ ] Test postcode autocomplete with real postcodes
- [ ] Test map functionality in different browsers
- [ ] Test form submission to Strapi backend
- [ ] Test on mobile devices (responsive)
- [ ] Error messages are user-friendly
- [ ] Success messages are clear

### .gitignore Update
```
.env
.env.local
.env.*.local
```

---

## 📚 Additional Resources

### Google Maps API Docs
- https://developers.google.com/maps/documentation/javascript
- https://developers.google.com/maps/documentation/geocoding

### Postcodes.io Docs
- https://postcodes.io/

### Strapi Docs
- https://docs.strapi.io/dev-docs/api/rest

### Browser APIs
- Geolocation: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

---

## 💡 Tips & Best Practices

1. **API Key Security**: Never expose API keys in frontend code. Always use environment variables.

2. **Rate Limiting**: Postcodes.io is very generous but respect rate limits in production.

3. **User Privacy**: Only request geolocation when necessary. Inform users why you need it.

4. **Fallback**: Have fallback UI if Google Maps fails to load.

5. **Testing**: Test with invalid inputs, network failures, and edge cases.

6. **Accessibility**: All form fields have labels, keyboard navigation works, error messages are clear.

7. **Performance**: PostcodeAutocomplete uses debouncing to minimize API calls.

8. **Mobile**: All components are mobile-responsive. Test on actual devices.

---

## 🆘 Support

For issues with:
- **Postcodes.io**: https://postcodes.io/
- **Google Maps**: https://issuetracker.google.com/issues?q=componentid:187190
- **Strapi**: https://discord.gg/strapi

---

## 📄 License

This implementation is part of the Mobile Tyre Service website project.

---

**Last Updated**: April 2026
**Version**: 1.0.0
