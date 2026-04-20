# ⚡ Quick Setup: Google Maps API Key

## 5-Minute Setup Guide

### Step 1: Create Google Cloud Project (2 min)
```
1. Visit: https://console.cloud.google.com/
2. Click the project dropdown at the top
3. Click "NEW PROJECT"
4. Name: "Mobile Tyre Service"
5. Click "CREATE"
6. Wait for the project to load
```

### Step 2: Enable APIs (2 min)
```
1. Go to: APIs & Services > Library
2. Search for "Maps JavaScript API"
   - Click Result
   - Click "ENABLE"
   - Wait for it to enable
3. Go back to Library
4. Search for "Geocoding API"
   - Click Result
   - Click "ENABLE"
```

### Step 3: Create API Key (1 min)
```
1. Go to: APIs & Services > Credentials
2. Click "Create Credentials" (top left)
3. Select "API Key"
4. A popup appears with your key
5. Copy the entire key (it starts with "AIza...")
6. Click "Close"
```

### Step 4: Add to Project (.env.local)
```bash
# Edit this file in your project:
.env.local

# Add this line:
VITE_GOOGLE_MAPS_API_KEY=AIza...paste_your_key_here...
```

### Step 5: Test It
```bash
npm run dev
```
Visit `http://localhost:5173` and test the booking form!

---

## ✅ Verification Checklist

- [ ] Google Cloud project created
- [ ] Maps JavaScript API enabled
- [ ] Geocoding API enabled
- [ ] API key generated and copied
- [ ] `.env.local` file updated with key
- [ ] Development server running (`npm run dev`)
- [ ] Hero section shows new booking form
- [ ] Postcode autocomplete works
- [ ] Map appears and is interactive
- [ ] "My Location" button appears

---

## 🔐 Security: Restrict Your Key (Recommended)

### Why Restrict?
- Prevents API quota abuse
- Prevents unauthorized use from other sites

### How to Restrict:
```
1. In Google Cloud Console, go to: Credentials
2. Find your API key in the list
3. Click on it (or the pencil icon)
4. Under "Application restrictions":
   - Select: "HTTP referrers (web sites)"
   - Add your domain: yoursite.com, www.yoursite.com
5. Under "API restrictions":
   - Select: "Restrict key"
   - Choose APIs: "Maps JavaScript API" and "Geocoding API"
6. Click "SAVE"
```

---

## 📊 Free Tier Information

### Google Maps: Free Tier Limits
- **Maps Load**: $7/1000 after $200/month free credit
- **Geocoding**: $5/1000 after $200/month free credit
- **Typical site**: ~100-500 requests/month = **FREE**

### Postcodes.io: Always Free
- Rate limit: 100 requests/second
- No API key needed
- UK postcodes only

---

## 🚫 Common Mistakes

❌ **Don't**: Commit `.env.local` to git
✅ **Do**: Add `.env.local` to `.gitignore`

❌ **Don't**: Share your API key
✅ **Do**: Use environment variables only

❌ **Don't**: Leave API key unrestricted
✅ **Do**: Set HTTP referrer restrictions

❌ **Don't**: Use API key in mobile apps
✅ **Do**: Use this for web only (frontend is OK with restrictions)

---

## 🐛 If It Doesn't Work

### Map Shows Gray Area
```
✓ Restart dev server (npm run dev)
✓ Check browser console for errors
✓ Verify API key is correct
✓ Verify Maps JavaScript API is ENABLED
```

### Postcode Autocomplete Not Working
```
✓ Check network tab in DevTools
✓ Verify it's calling api.postcodes.io
✓ Try a different postcode (e.g., "GU11" or "SW1A1AA")
✓ Only works for UK postcodes
```

### "My Location" Not Working
```
✓ Must be HTTPS (or localhost)
✓ Check browser location permissions
✓ Try allowing location access
✓ Some browsers need HTTPS even for localhost
```

---

## 📞 Need Help?

### API Key Issues
- Google Cloud Support: https://cloud.google.com/support

### Maps API Questions
- Stack Overflow tag: `google-maps-api-3`
- Official docs: https://developers.google.com/maps

### Postcode Issues
- Postcodes.io Status: https://postcodes.io/

---

**That's it! You're ready to go! 🎉**
