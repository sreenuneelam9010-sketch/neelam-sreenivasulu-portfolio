export interface FarmFeature {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  details: string[];
  roleAccess: ('Owner' | 'Worker' | 'Customer')[];
}

export interface WorkflowStep {
  step: number;
  title: string;
  shortDesc: string;
  details: string;
  iconName: string;
}

export interface ArchitectureLayer {
  layer: string;
  subtitle: string;
  components: string[];
  description: string;
  iconName: string;
  color: string;
}

export const FARM_PROJECT_META = {
  id: "farm-management-system",
  title: "Sri Venkateswara Lakshmi Venkateswara Farm Management System",
  subtitle: "Real-Time Farm Management & Livestock Management Application",
  heroTagline: "Centralized Digital Platform for Farm Operations, Livestock, Inventory & Multi-Role Workflows",
  contributionRate: "~90%",
  contributionStatement: "I personally developed approximately 90% of the application and worked extensively on its core functionality, user workflows, backend logic, database integration, and management features.",
  introQuote: "Sri Venkateswara Lakshmi Venkateswara Farm Management System is a real-world full-stack application designed to simplify and manage day-to-day farm operations through a centralized digital platform. I developed approximately 90% of the application and worked extensively on its core functionality, user workflows, backend logic, database integration, and management features.",
  realWorldStatement: "Rather than building the application only as a demonstration, I worked on the system with practical farm-management requirements in mind. The application was designed around real operational workflows and provides a centralized way to manage farm-related information.",
  githubRepoUrl: "https://github.com/sreenuneelam9010-sketch/Farm-management-system",
  githubProfileUrl: "https://github.com/sreenuneelam9010-sketch",
  badges: [
    "Real-World Application",
    "Full Stack Development",
    "Farm Management",
    "Role-Based Access",
    "Database Management",
    "My Contribution: ~90%"
  ],
  stats: [
    { label: "My Contribution", value: "~90%", helper: "Core Architecture & Logic" },
    { label: "User Roles", value: "3", helper: "Owner, Worker, Customer" },
    { label: "Core Modules", value: "7+", helper: "Livestock, Stock, Orders, etc." },
    { label: "Database Model", value: "Relational", helper: "MySQL Normalized Schema" }
  ]
};

export const FARM_PROBLEM_POINTS = [
  {
    title: "Livestock Tracking",
    description: "Manual head counts, individual health monitoring, breed tracking, and categorization are prone to discrepancies without a digital record.",
    icon: "ShieldAlert"
  },
  {
    title: "Farm Inventory & Feeds",
    description: "Tracking cattle feeds, nutrients, medicines, and supplies across sheds without real-time reorder thresholds leads to stockouts or wastage.",
    icon: "Boxes"
  },
  {
    title: "Customer Records",
    description: "Customer contacts, purchase histories, and custom delivery preferences were scattered across manual logbooks.",
    icon: "Users"
  },
  {
    title: "Order Fulfillment",
    description: "Processing farm product orders, managing fulfillment status (Pending, Processing, Completed), and coordinating dispatches was uncoordinated.",
    icon: "ShoppingBag"
  },
  {
    title: "Worker Duties & Access",
    description: "Farm workers require quick entry for daily logs without accessing confidential financial records or system-wide user credentials.",
    icon: "Briefcase"
  },
  {
    title: "Operational Records & Audit",
    description: "Consolidating day-to-day farm activities, expense records, and product availability into one reliable relational database.",
    icon: "FileSpreadsheet"
  }
];

export const MY_CONTRIBUTIONS_LIST = [
  {
    title: "Application Architecture",
    desc: "Designed the full-stack system architecture, routing protocols, and separation of presentation, business, and data persistence layers."
  },
  {
    title: "Frontend Development",
    desc: "Authored semantic HTML, clean CSS styling, and interactive JavaScript UI components tailored for responsive desktop and tablet use."
  },
  {
    title: "Backend Development",
    desc: "Implemented core server-side request routing, business logic engines, session controllers, and validation rules."
  },
  {
    title: "Database Integration",
    desc: "Engineered normalized MySQL relational tables with foreign key constraints, indexing, and optimized CRUD query logic."
  },
  {
    title: "Authentication & Security",
    desc: "Built secure credential verification, session token validation, and password handling safeguards."
  },
  {
    title: "Role-Based Access Control (RBAC)",
    desc: "Structured granular access tiers enforcing strict boundaries between Owner (full admin), Worker (operational logs), and Customer."
  },
  {
    title: "Livestock Management Module",
    desc: "Implemented centralized livestock registry with breed classification, count updates, health status tags, and detail logs."
  },
  {
    title: "Inventory Management Engine",
    desc: "Developed stock tracking for feeds, medical supplies, and farm materials with automated low-stock warnings."
  },
  {
    title: "Customer Management System",
    desc: "Built directory of farm clients, purchase histories, contact details, and customer relationship records."
  },
  {
    title: "Order Management & Pipeline",
    desc: "Engineered end-to-end order workflow from order submission, status changes, quantity validation, to final fulfillment."
  },
  {
    title: "Application Workflows",
    desc: "Designed seamless state transitions and error handlers across multi-step farm processes."
  },
  {
    title: "Testing, Debugging & Refinements",
    desc: "Conducted extensive manual testing, edge-case debugging, database query optimization, and UI polish."
  }
];

export const FARM_FEATURES: FarmFeature[] = [
  {
    id: "livestock-mgmt",
    title: "Livestock Management",
    category: "Operations",
    iconName: "Trees",
    description: "Centralized management of livestock-related records, categorizations, and health attributes.",
    details: [
      "Categorized tracking by livestock type, breed, age, and shed allocation",
      "Individual health status logging and vaccination history maintenance",
      "Head count monitoring and real-time livestock distribution analytics",
      "Quick update actions for farm hands during morning/evening inspections"
    ],
    roleAccess: ["Owner", "Worker"]
  },
  {
    id: "farm-mgmt",
    title: "Farm Operations Management",
    category: "Core Engine",
    iconName: "Activity",
    description: "Digitally organize day-to-day farm activities, operational schedules, and resource allocation.",
    details: [
      "Centralized daily activity schedule and task assignments",
      "Shed and paddock capacity monitoring",
      "Operational log audit trails recording date, user, and action taken",
      "Summary metrics on overall farm productivity and status"
    ],
    roleAccess: ["Owner", "Worker"]
  },
  {
    id: "inventory-mgmt",
    title: "Inventory & Feed Tracking",
    category: "Supply Chain",
    iconName: "Boxes",
    description: "Track and manage farm inventory, feeds, medical supplies, and equipment in real-time.",
    details: [
      "Live feed stock quantity tracking (fodder, concentrates, supplements)",
      "Automated low-inventory thresholds and replenishment alerts",
      "Medical inventory logs with expiry monitoring",
      "Consumption logging linked to livestock counts"
    ],
    roleAccess: ["Owner", "Worker"]
  },
  {
    id: "customer-mgmt",
    title: "Customer Management",
    category: "CRM",
    iconName: "Users",
    description: "Maintain comprehensive customer-related information, contact directories, and interaction logs.",
    details: [
      "Unified customer directory with phone, email, and delivery addresses",
      "Historic order logs and purchase frequency tracking",
      "Customer inquiry handling and communication records",
      "Dedicated portal view for registered customers"
    ],
    roleAccess: ["Owner", "Customer"]
  },
  {
    id: "order-mgmt",
    title: "Order Management & Pipeline",
    category: "Commerce",
    iconName: "ShoppingBag",
    description: "Manage farm product orders, verification workflows, status transitions, and delivery schedules.",
    details: [
      "End-to-end lifecycle management: Pending → Approved → In Transit → Completed",
      "Automatic inventory reservation and stock deduction upon order approval",
      "Order invoice generation and pricing calculations",
      "Customer-facing real-time order tracking"
    ],
    roleAccess: ["Owner", "Worker", "Customer"]
  },
  {
    id: "user-mgmt",
    title: "User Management",
    category: "Administration",
    iconName: "ShieldCheck",
    description: "Provide controlled access, user onboarding, and secure account management.",
    details: [
      "User profile provisioning and credential verification",
      "Session management and activity tracking",
      "Password reset and profile attribute updating",
      "Secure credential hashing and storage standards"
    ],
    roleAccess: ["Owner"]
  },
  {
    id: "rbac-mgmt",
    title: "Role-Based Access Control (RBAC)",
    category: "Security",
    iconName: "Lock",
    description: "Support distinct operational roles with customized views and strict permission barriers.",
    details: [
      "Owner: Complete administrative authority over finances, users, stock, and reports",
      "Worker: Operational read/write access for livestock logs and inventory updates",
      "Customer: Restricted portal access for placing orders and tracking personal purchases",
      "Server-side route gating preventing unauthorized role elevation"
    ],
    roleAccess: ["Owner", "Worker", "Customer"]
  }
];

export const FARM_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "User Login",
    shortDesc: "Authentication Check",
    details: "User submits credentials; system validates password hashes and establishes an active session.",
    iconName: "Key"
  },
  {
    step: 2,
    title: "Role Verification",
    shortDesc: "RBAC Gating",
    details: "Backend inspects the authenticated role (Owner, Worker, or Customer) and determines view privileges.",
    iconName: "Shield"
  },
  {
    step: 3,
    title: "Dashboard View",
    shortDesc: "Role-Tailored Hub",
    details: "Loads customized interface displaying relevant stats, quick actions, and urgent notifications.",
    iconName: "LayoutDashboard"
  },
  {
    step: 4,
    title: "Farm Management",
    shortDesc: "Operational Router",
    details: "User navigates between livestock logs, feed inventories, customer accounts, and order queues.",
    iconName: "Compass"
  },
  {
    step: 5,
    title: "Module Actions",
    shortDesc: "Livestock / Stock / Orders",
    details: "Actions such as logging new livestock, adjusting feed stock, or approving customer orders.",
    iconName: "Layers"
  },
  {
    step: 6,
    title: "Database Commit",
    shortDesc: "Relational Transactions",
    details: "Backend processes SQL queries with foreign keys and ACID constraints to prevent inconsistent states.",
    iconName: "Database"
  },
  {
    step: 7,
    title: "Real-Time UI Update",
    shortDesc: "Live Application Data",
    details: "Client receives updated state, refreshing counters, inventory badges, and order statuses instantly.",
    iconName: "Sparkles"
  }
];

export const FARM_ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    layer: "Frontend Layer",
    subtitle: "Client Presentation & UI",
    components: ["HTML5 Semantic Structure", "CSS3 Responsive Grid", "Vanilla JavaScript Event Handlers", "Interactive Forms & Modals"],
    description: "Provides responsive views across mobile and desktop devices with dynamic validation and immediate user feedback.",
    iconName: "Monitor",
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    layer: "Backend / Application Logic",
    subtitle: "Controllers & HTTP Router",
    components: ["Request Router", "Session Controller", "Input Validation Middleware", "Response Serializers"],
    description: "Handles HTTP requests, coordinates workflow state transitions, and sanitizes input data before business operations.",
    iconName: "Server",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    layer: "Authentication & RBAC",
    subtitle: "Security & Role Filter",
    components: ["Session Token Validator", "Owner Access Gate", "Worker Operational Filter", "Customer Portal Gating"],
    description: "Ensures every API endpoint and view enforces strict role authorization barriers.",
    iconName: "Lock",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    layer: "Business Logic Engine",
    subtitle: "Domain Rules & Workflow",
    components: ["Livestock Manager", "Inventory & Stock Allocator", "Order State Machine", "Customer Data Handler"],
    description: "Executes business calculations, automated reorder flags, order status lifecycles, and livestock health history.",
    iconName: "Cpu",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    layer: "Database Layer",
    subtitle: "Relational Persistence",
    components: ["MySQL Tables", "Foreign Key Constraints", "Indexed Queries", "ACID Transactions"],
    description: "Stores normalized operational records with relational integrity across users, livestock, stock, and orders.",
    iconName: "Database",
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

export const FARM_PROJECT_STORY = [
  {
    step: "01",
    phase: "Real-World Requirement",
    desc: "Identified the challenges of decentralized paper ledgers and multi-channel farm operations across livestock and feed supplies."
  },
  {
    step: "02",
    phase: "Understanding the Workflow",
    desc: "Mapped the day-to-day operational routines of farm owners, hands, and buyers to identify core entities and access needs."
  },
  {
    step: "03",
    phase: "System Design",
    desc: "Drafted the full-stack architecture, defining module boundaries, state transitions, and role-based permissions."
  },
  {
    step: "04",
    phase: "Database Design",
    desc: "Designed normalized relational schemas with foreign key relationships linking users, livestock categories, inventory, and orders."
  },
  {
    step: "05",
    phase: "Frontend Development",
    desc: "Constructed intuitive user interfaces with clean responsive layouts, interactive forms, and quick-filter tables."
  },
  {
    step: "06",
    phase: "Backend Development",
    desc: "Built the server-side logic to handle HTTP endpoints, calculate inventory deductions, and process transactional updates."
  },
  {
    step: "07",
    phase: "Authentication & Authorization",
    desc: "Implemented secure login validation and RBAC middleware to strictly segregate Owner, Worker, and Customer capabilities."
  },
  {
    step: "08",
    phase: "Feature Implementation",
    desc: "Delivered livestock records, stock alerts, customer profiles, and the live order management pipeline."
  },
  {
    step: "09",
    phase: "Testing & Debugging",
    desc: "Extensively verified edge cases in order status transitions, concurrent stock reservations, and cross-browser responsiveness."
  },
  {
    step: "10",
    phase: "Working Application",
    desc: "Completed a reliable, unified digital farm management platform ready for practical day-to-day record keeping."
  }
];

export const FARM_CHALLENGES = [
  {
    title: "Relational Database Schema Design",
    challenge: "Modeling complex farm relationships between livestock categories, health records, dynamic feed stock levels, and multi-item customer orders.",
    solution: "Structured normalized relational tables with explicit foreign keys and cascade rules to preserve data integrity."
  },
  {
    title: "Granular Role-Based Access Control",
    challenge: "Ensuring workers can swiftly log daily livestock counts without viewing sensitive financial or administrative data.",
    solution: "Engineered role-gating middleware that filters API payloads and renders tailored navigation menus per authenticated role."
  },
  {
    title: "Inventory Synchronization & Order States",
    challenge: "Preventing stock inconsistencies when orders are placed, modified, or canceled.",
    solution: "Implemented transactional validation logic that checks stock thresholds before order confirmation and updates inventory atomically."
  },
  {
    title: "Practical User-Centric Workflow",
    challenge: "Translating practical farm routines into intuitive, low-friction digital UI screens that don't require technical training to operate.",
    solution: "Designed clean form layouts, distinct status tags, and clear visual indicators for quick operational scanning."
  }
];

export const FARM_SIMULATED_DATA = {
  livestock: [
    { id: "LS-101", tag: "Cattle #42", category: "Milking Cow", breed: "Holstein Friesian", health: "Healthy", shed: "Shed A-1", vaccination: "Up to Date" },
    { id: "LS-102", tag: "Cattle #43", category: "Milking Cow", breed: "Jersey Cross", health: "Healthy", shed: "Shed A-2", vaccination: "Up to Date" },
    { id: "LS-103", tag: "Cattle #44", category: "Calf", breed: "Gir Breed", health: "Under Observation", shed: "Nursery 1", vaccination: "Scheduled" },
    { id: "LS-104", tag: "Cattle #45", category: "Milking Cow", breed: "Sahiwal", health: "Healthy", shed: "Shed B-1", vaccination: "Up to Date" }
  ],
  inventory: [
    { id: "INV-01", item: "Organic Cattle Feed (Grade A)", category: "Feed", stock: "45 Bags", status: "In Stock", minLevel: "15 Bags" },
    { id: "INV-02", item: "Silage & Green Fodder", category: "Feed", stock: "1.2 Tons", status: "In Stock", minLevel: "0.5 Tons" },
    { id: "INV-03", item: "Mineral & Calcium Mixture", category: "Supplements", stock: "4 Bags", status: "Low Stock", minLevel: "8 Bags" },
    { id: "INV-04", item: "Sanitizing Udder Wash", category: "Medical/Hygiene", stock: "12 Liters", status: "In Stock", minLevel: "5 Liters" }
  ],
  orders: [
    { id: "ORD-891", customer: "Ramesh Dairy Dist.", product: "Fresh Farm Milk (200L)", amount: "₹11,000", status: "Completed", date: "Today, 08:30 AM" },
    { id: "ORD-892", customer: "Sri Krishna Sweets", product: "Desi Ghee (25kg)", amount: "₹18,500", status: "In Transit", date: "Today, 10:15 AM" },
    { id: "ORD-893", customer: "Anitha Organic Store", product: "Organic Butter (15kg)", amount: "₹9,200", status: "Processing", date: "Today, 11:45 AM" },
    { id: "ORD-894", customer: "Green Valley Mart", product: "Fresh Farm Milk (100L)", amount: "₹5,500", status: "Pending", date: "Today, 01:20 PM" }
  ],
  customers: [
    { id: "CUST-01", name: "Ramesh Dairy Dist.", phone: "+91 98480 XXXXX", type: "Wholesale Partner", ordersCount: 28 },
    { id: "CUST-02", name: "Sri Krishna Sweets", phone: "+91 94401 XXXXX", type: "Commercial Bulk", ordersCount: 19 },
    { id: "CUST-03", name: "Anitha Organic Store", phone: "+91 93912 XXXXX", type: "Retail Partner", ordersCount: 12 },
    { id: "CUST-04", name: "Green Valley Mart", phone: "+91 99890 XXXXX", type: "Local Retailer", ordersCount: 7 }
  ]
};
