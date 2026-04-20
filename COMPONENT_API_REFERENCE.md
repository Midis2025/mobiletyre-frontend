# 📚 Component API Reference

## Components Overview

| Component | Purpose | Location |
|-----------|---------|----------|
| `PostcodeAutocomplete` | UK postcode lookup with suggestions | `src/components/PostcodeAutocomplete.jsx` |
| `MapPicker` | Google Maps with location selection | `src/components/MapPicker.jsx` |
| `LocationBookingForm` | Complete booking form (combines both) | `src/components/LocationBookingForm.jsx` |

---

## 1. PostcodeAutocomplete

**Purpose**: Input field for UK postcode search with autocomplete suggestions.

### Props

```typescript
interface PostcodeAutocompleteProps {
  // Callback when user selects a postcode
  onSelect: (data: PostcodeData) => void;
  
  // Callback when location text changes (optional)
  onLocationChange?: (district: string) => void;
  
  // Currently selected postcode (optional, for controlled component)
  selectedPostcode?: string | null;
  
  // Placeholder text for input
  placeholder?: string; // Default: "Enter UK postcode (e.g., GU11)"
}
```

### PostcodeData Return Value

```typescript
interface PostcodeData {
  postcode: string;              // e.g., "GU11 3HY"
  district: string;              // e.g., "East Hampshire"
  region?: string;               // e.g., "Hampshire"
  latitude: number;              // e.g., 51.1476
  longitude: number;             // e.g., -0.7488
}
```

### Example Usage

```jsx
import PostcodeAutocomplete from '@/components/PostcodeAutocomplete';

function MyComponent() {
  const handleSelect = (data) => {
    console.log(`Selected: ${data.postcode} at ${data.latitude}, ${data.longitude}`);
  };

  return (
    <PostcodeAutocomplete
      onSelect={handleSelect}
      placeholder="Find your location"
    />
  );
}
```

### Features

- ✅ Debounced input (300ms)
- ✅ Real-time suggestions from postcodes.io
- ✅ Keyboard navigation (↑↓, Enter, Esc)
- ✅ Click outside to close
- ✅ Loading and error states
- ✅ Shows up to 8 suggestions
- ✅ Mobile responsive

### Styling

Uses Tailwind CSS with color scheme:
- Primary: `#FB7E10` (Orange)
- Secondary: `#8A95AF` (Gray-blue)
- Background: `#EAEEF3` (Light gray)

---

## 2. MapPicker

**Purpose**: Interactive Google Maps with draggable marker and location selection.

### Props

```typescript
interface MapPickerProps {
  // Initial latitude (center of map)
  initialLat?: number; // Default: 51.5074 (London)
  
  // Initial longitude (center of map)
  initialLng?: number; // Default: -0.1278 (London)
  
  // Callback when location is changed
  onLocationChange: (location: LocationData) => void;
  
  // Google Maps API key (required if map not already initialized)
  googleMapsApiKey: string;
  
  // Disable marker dragging and geolocation
  disabled?: boolean; // Default: false
}
```

### LocationData Return Value

```typescript
interface LocationData {
  latitude: number;           // e.g., 51.1476
  longitude: number;          // e.g., -0.7488
  address: string;            // Full address from reverse geocoding
                              // e.g., "123 Main Street, Aldershot GU11 3HY"
}
```

### Example Usage

```jsx
import MapPicker from '@/components/MapPicker';

function MyComponent() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const handleLocationChange = (data) => {
    console.log(`New location: ${data.address}`);
    console.log(`Coordinates: ${data.latitude}, ${data.longitude}`);
  };

  return (
    <MapPicker
      initialLat={51.5074}
      initialLng={-0.1278}
      onLocationChange={handleLocationChange}
      googleMapsApiKey={apiKey}
    />
  );
}
```

### Features

- ✅ Displays Google Map
- ✅ Draggable orange marker (with white border)
- ✅ Click on map to set location
- ✅ "My Location" button (browser geolocation)
- ✅ Reverse geocoding (coordinates → address)
- ✅ Shows current coordinates
- ✅ Mobile responsive (350px height)
- ✅ Error handling

### Events

#### 1. Marker Drag
- Fires during dragging: real-time location updates
- Fires on drag end: final location confirmation

#### 2. Map Click
- Clicking anywhere on the map sets that location
- Marker moves to clicked position

#### 3. Geolocation
- "My Location" button triggers browser geolocation
- Updates map and marker to user's current position

### Styling

Uses Tailwind CSS with custom styling:
- Marker color: `#FB7E10` (Orange)
- Marker border: White
- Map height: `350px`
- Border: Gray 100 with shadow

---

## 3. LocationBookingForm

**Purpose**: Complete booking form with location selection and validation.

### Props

```typescript
interface LocationBookingFormProps {
  // Google Maps API key (required)
  googleMapsApiKey: string;
}
```

### Form Fields

```typescript
interface BookingFormData {
  fullName: string;           // Required, min 2 chars
  phoneNumber: string;        // Required, validated
  postcode: string;           // Required, via autocomplete
  address: string;            // Auto-filled from postcode/map
  latitude: number;           // Auto-filled from map
  longitude: number;          // Auto-filled from map
  serviceType: string;        // Selected from dropdown
  tyreSize: string;           // Required, e.g., "225/45 R17"
  timingSlot: string;         // Selected from dropdown
}
```

### Form Sections

#### 1. Your Details
- Full Name (text input, required)
- Phone Number (tel input, required, validated)

#### 2. Location Selection
- Postcode Autocomplete (required)
- Selected Address Display (auto-filled)
- Interactive Map (for refinement)

#### 3. Service Details
- Service Type (dropdown)
- Tyre Size (text input, required)
- Preferred Timing (dropdown)

### Form Validation

```
✓ Full name: Required, min 1 character
✓ Phone: Required, basic phone format validation
✓ Postcode: Must be selected (not just typed)
✓ Tyre Size: Required, min 1 character
```

### Strapi Submission

**Endpoint**: `POST /api/bookings`

**Payload**:
```json
{
  "data": {
    "fullName": "John Doe",
    "phoneNumber": "+44 207 101 3856",
    "postcode": "GU11 3HY",
    "address": "123 Main Street, Aldershot...",
    "latitude": 51.1476,
    "longitude": -0.7488,
    "serviceType": "Emergency Tyre Fitting",
    "tyreSize": "225/45 R17",
    "timingSlot": "As Soon As Possible",
    "bookingStatus": "Pending"
  }
}
```

### Example Usage

```jsx
import LocationBookingForm from '@/components/LocationBookingForm';

function BookingPage() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className="bg-white rounded-lg p-8">
      <LocationBookingForm googleMapsApiKey={apiKey} />
    </div>
  );
}
```

### Features

- ✅ Real-time validation
- ✅ Organized sections with icons
- ✅ Loading state during submission
- ✅ Success/error notifications
- ✅ Auto-filled address from location
- ✅ Responsive on mobile
- ✅ Accessible form labels
- ✅ Strapi backend integration

---

## Common Usage Patterns

### Pattern 1: Use Only Postcode Search

```jsx
import PostcodeAutocomplete from '@/components/PostcodeAutocomplete';

<PostcodeAutocomplete
  onSelect={(data) => {
    console.log('Postcode:', data.postcode);
    console.log('Coordinates:', data.latitude, data.longitude);
  }}
/>
```

### Pattern 2: Use Only Map

```jsx
import MapPicker from '@/components/MapPicker';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

<MapPicker
  initialLat={51.5074}
  initialLng={-0.1278}
  onLocationChange={(data) => {
    console.log('Address:', data.address);
  }}
  googleMapsApiKey={apiKey}
/>
```

### Pattern 3: Combined - Multi-Step Form

```jsx
import PostcodeAutocomplete from '@/components/PostcodeAutocomplete';
import MapPicker from '@/components/MapPicker';

const [location, setLocation] = useState(null);

return (
  <>
    {!location ? (
      <PostcodeAutocomplete
        onSelect={(data) => {
          setLocation(data);
        }}
      />
    ) : (
      <MapPicker
        initialLat={location.latitude}
        initialLng={location.longitude}
        onLocationChange={(refined) => {
          console.log('Final location:', refined);
        }}
        googleMapsApiKey={apiKey}
      />
    )}
  </>
);
```

### Pattern 4: Complete Form (Recommended for Most Cases)

```jsx
import LocationBookingForm from '@/components/LocationBookingForm';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

<LocationBookingForm googleMapsApiKey={apiKey} />
```

---

## Error Handling

### PostcodeAutocomplete Errors

```
"No postcodes found. Please check and try again."
  - User typed invalid postcode
  - Postcode doesn't exist in UK
  
"Error fetching postcodes. Please try again."
  - Network error
  - API temporarily unavailable
```

### MapPicker Errors

```
"Failed to load Google Maps. Please check your API key."
  - API key invalid or not provided
  - Maps JavaScript API not enabled
  
"Geolocation is not supported by your browser"
  - Old browser without geolocation
  
"Location permission denied..."
  - User denied location access
  - Check browser settings
```

### LocationBookingForm Errors

```
"Full name is required"
  - User didn't enter name
  
"Phone number is required"
  - User didn't enter phone
  
"Please enter a valid phone number"
  - Phone format validation failed
  
"Please select a valid postcode"
  - User typed postcode without selecting from suggestions
  
"Tyre size is required"
  - User didn't enter tyre size
  
"Failed to submit booking..."
  - Strapi endpoint error
  - Network error
  - Backend validation failed
```

---

## Styling & Customization

### Color Scheme

```
Primary:        #FB7E10 (Orange)
Secondary:      #0B1528 (Dark Navy)
Light Gray:     #EAEEF3
Text Gray:      #8A95AF
Background:     White (#FFFFFF)
Success:        #22C55E (Green)
Error:          #EF4444 (Red)
```

### Responsive Breakpoints

```
Mobile:  < 640px
Tablet:  640px - 1024px
Desktop: > 1024px
```

### Map Height

```
MapPicker: 350px (fixed)
Form container: 90vh max height (scrollable)
```

---

## Performance Tips

1. **Debounce Postcode Input**: Already done (300ms)
2. **Lazy Load Google Maps**: Loaded only when MapPicker mounts
3. **Cache Geocoding Results**: Consider caching reverse geocoding
4. **Limit Suggestions**: Only shows 8 suggestions max
5. **Optimize Bundle**: Only load when needed on Hero section

---

## Accessibility Features

✅ Form labels for all inputs
✅ ARIA labels where needed
✅ Keyboard navigation throughout
✅ Color not sole means of identification
✅ Error messages clearly displayed
✅ Success feedback provided
✅ Loading states indicated
✅ Touch-friendly button sizes (44px+)

---

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| PostcodeAutocomplete | ✅ | ✅ | ✅ | ✅ |
| Google Maps | ✅ | ✅ | ✅ | ✅ |
| Geolocation | ✅ | ✅ | ✅ | ✅ |
| Fetch API | ✅ | ✅ | ✅ | ✅ |

---

## Dependencies

```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "lucide-react": "^1.6.0"  // Icons
}
```

**External Libraries** (No npm packages):
- Google Maps JavaScript API (dynamically loaded)
- Postcodes.io API (REST)
- Strapi Backend (REST)

---

## FAQ

**Q: Do I need to pass API key to every component?**
A: Only MapPicker needs it. PostcodeAutocomplete uses free postcodes.io.

**Q: Can I use these components without Strapi?**
A: Yes! LocationBookingForm sends to Strapi, but you can use PostcodeAutocomplete and MapPicker independently.

**Q: Is postcodes.io free?**
A: Yes, completely free. No API key needed. Rate limit: 100 requests/second.

**Q: How do I restrict the Google Maps key?**
A: Set HTTP referrer restrictions to your domain. See GOOGLE_MAPS_SETUP.md

**Q: Can I customize colors/styling?**
A: Yes, all components use Tailwind CSS. Modify the className props or override with custom CSS.

**Q: How do I handle form submission without Strapi?**
A: Modify LocationBookingForm to call your own endpoint instead of Strapi.

---

**Last Updated**: April 2026
**Version**: 1.0.0
