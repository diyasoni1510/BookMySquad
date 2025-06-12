Header – contains navigation, logo, and possibly login/register buttons

HeaderFilter – filters for cities, price range, categories, etc.

Footer – contact info, social links, legal, etc.

ClickableIcons

VendorCards – reusable cards for vendor listings

redButton

---

Home | `/` | Landing page |
Service Listing | `/wedding-venues` | Category-wise listings |
City + Category | `/wedding-venues/delhi/farmhouse` | Filtered vendors (city + venue type) |
Vendor Profile | `/vendors/:id` | Vendor detail page |
Reviews | `/vendors/:id/reviews` | All reviews for a vendor |
Videos | `/vendors/:id/videos` | All videos related to a vendor |
About Page | `/about` | Informational page |

---

/src
├── components/ # Reusable UI Components
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── HeaderFilter.jsx
│ ├── VendorCard.jsx
│ ├── ClickableIcon.jsx
│ └── ...
│
├── pages/ # Route-based views
│ ├── Home.jsx # /
│ ├── Vendors.jsx # /wedding-venues
│ ├── VendorDetail.jsx # /vendors/:id
│ ├── About.jsx # /about
│ ├── Reviews.jsx # /vendors/:id/reviews
│ ├── Videos.jsx # /vendors/:id/videos
│ └── ...
│
├── hooks/ # Custom React hooks
│ └── useVendorData.js
│
├── utils/ # Helper functions
│ ├── api.js # API calls
│ ├── seo.js # Dynamic meta titles & descriptions
│ └── format.js # Date/price formatting etc.
│
├── App.jsx # App routes and layout
└── index.jsx # Entry point
