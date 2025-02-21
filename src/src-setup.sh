#!/bin/bash

echo "🚀 Initializing AutoStore Next.js project structure..."

# Base directories
mkdir -p src/{app,components,layouts,hooks,context,lib,services,store,styles,types,utils}

# Pages & Layouts
mkdir -p src/app/{home,shop,product,cart,checkout,order,account,about,contact,blog,faq,returns,terms,privacy,affiliate,vendor,admin,compare,wishlist,support,loyalty,careers,shipping,sitemap}

# API Routes
mkdir -p src/app/api/{auth,products,orders,users,payments,vendors}

# Create necessary files
touch src/app/layout.tsx  # Root layout

# Initialize the homepage (root page)
cat <<EOF > src/app/page.tsx
export default function HomePage() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">Welcome to AutoStore</h1>
            <p className="text-lg mt-4">Your #1 Marketplace for Auto Parts.</p>
        </div>
    );
}
EOF

# Initialize all sub-pages with content
pages=(
    "home" "shop" "product" "cart" "checkout" "order" "account" "about" "contact"
    "blog" "faq" "returns" "terms" "privacy" "affiliate" "vendor" "admin" "compare"
    "wishlist" "support" "loyalty" "careers" "shipping" "sitemap"
)

for page in "${pages[@]}"; do
    mkdir -p src/app/$page
    echo "export default function Page() { return <h1>Welcome to the ${page^} Page</h1>; }" > src/app/$page/page.tsx
done

# Initialize API routes
api_routes=("auth" "products" "orders" "users" "payments" "vendors")

for route in "${api_routes[@]}"; do
    mkdir -p src/app/api/$route
    echo "export default function handler(req, res) { res.status(200).json({ message: 'API route: $route' }); }" > src/app/api/$route/route.ts
done

# Initialize global layout file
cat <<EOF > src/app/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <h1>AutoStore</h1>
            </header>
            <main>{children}</main>
            <footer>Footer content</footer>
        </div>
    );
}
EOF

# Set up initial component structure
mkdir -p src/components/{ui,layout,common,buttons,forms,modals}

touch src/components/ui/Button.tsx
touch src/components/ui/Input.tsx
touch src/components/layout/Header.tsx
touch src/components/layout/Footer.tsx
touch src/components/common/Loader.tsx

echo "export default function Header() { return <header>Header</header>; }" > src/components/layout/Header.tsx
echo "export default function Footer() { return <footer>Footer</footer>; }" > src/components/layout/Footer.tsx
echo "export default function Button() { return <button>Click me</button>; }" > src/components/ui/Button.tsx
echo "export default function Input() { return <input type='text' />; }" > src/components/ui/Input.tsx

# Set up hooks folder
touch src/hooks/useAuth.ts
touch src/hooks/useCart.ts

# Set up context
mkdir -p src/context
touch src/context/AuthContext.tsx
touch src/context/CartContext.tsx

# Set up utilities
mkdir -p src/utils
touch src/utils/helpers.ts
touch src/utils/constants.ts

# Set up services folder
mkdir -p src/services
touch src/services/api.ts
touch src/services/auth.ts

# Set up styles
mkdir -p src/styles
touch src/styles/global.css

echo "🎉 AutoStore Next.js project structure initialized successfully!"
