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
About Page | `/about` | Informational page |

<!-- Reviews | `/vendors/:id/reviews` | All reviews for a vendor | -->
<!-- Videos | `/vendors/:id/videos` | All videos related to a vendor | -->

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
├── admin/ # 🔐 Admin-specific features
│ ├── components/ # Admin-only components
│ │ ├── AdminSidebar.jsx
│ │ ├── AdminHeader.jsx
│ │ ├── VendorTable.jsx
│ │ ├── UserTable.jsx
│ │ └── ...
│ │
│ ├── pages/ # Admin panel routes
│ │ ├── Dashboard.jsx # /admin
│ │ ├── ManageVendors.jsx # /admin/vendors
│ │ ├── ManageUsers.jsx # /admin/users
│ │ ├── AddVendor.jsx # /admin/vendors/new
│ │ └── Settings.jsx # /admin/settings
│ │
│ ├── hooks/ # Custom admin hooks
│ │ └── useAdminAuth.js
│ │
│ └── utils/ # Admin-specific utilities
│ └── adminApi.js
│
├── pages/ # Route-based views (Client side)
│ ├── Home.jsx # /
│ ├── Vendors.jsx # /wedding-venues
│ ├── VendorDetail.jsx # /vendors/:id
│ ├── About.jsx # /about
│ └── ...
│
├── hooks/ # Custom React hooks
│ └── useVendorData.js
│
├── utils/ # Helper functions
│ ├── api.js # API calls for frontend
│ ├── seo.js # Meta tags
│ └── format.js # Formatters
│
├── App.jsx # All routes incl. admin + client
└── index.jsx # Entry point
