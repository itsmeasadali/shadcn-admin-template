
# React shadcn/ui Admin Template

A comprehensive CRM admin dashboard built with Next.js 14, TypeScript, and shadcn/ui components. This template provides a complete admin interface with workspace switching, modern design, and all the features needed for a professional CRM application.

## 🚀 Features

- **Modern UI**: Built with shadcn/ui components following the official design system
- **Workspace Switching**: Multi-tenant support with easy workspace switching
- **Responsive Design**: Fully responsive design that works on all devices
- **Dark Mode Ready**: Built-in dark mode support with next-themes
- **TypeScript**: Full TypeScript support for better development experience
- **CRM Functionality**: Complete CRM pages including:
  - Dashboard with metrics and charts
  - Contacts management
  - Companies management
  - Tasks and project management
  - Calendar and scheduling
  - Reports and analytics

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-shadcn-admin-template
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard layout and pages
│   ├── contacts/          # Contacts management
│   ├── companies/         # Companies management
│   ├── tasks/             # Task management
│   ├── calendar/          # Calendar and scheduling
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (redirects to dashboard)
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── app-sidebar.tsx   # Main application sidebar
├── hooks/                # Custom React hooks
│   └── use-mobile.tsx    # Mobile detection hook
└── lib/                  # Utilities
    └── utils.ts          # Utility functions
```

## 🎨 shadcn/ui Components Used

This template uses the following shadcn/ui components:

- **Layout**: Sidebar, Separator
- **Navigation**: Button, Avatar, Dropdown Menu
- **Data Display**: Card, Table, Badge
- **Form**: Input, Skeleton
- **Feedback**: Tooltip, Sheet
- **And many more...**

All components follow the official shadcn/ui design system and are fully customizable.

## 🔧 Customization

### Adding New Pages

1. Create a new page in the `src/app/` directory
2. Add the route to the sidebar navigation in `src/components/app-sidebar.tsx`
3. Follow the existing patterns for consistency

### Styling

The project uses Tailwind CSS with the shadcn/ui design tokens. You can customize:

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Components**: Extend component variants in `src/components/ui/`
- **Layout**: Adjust spacing and layout in page components

### Workspace Configuration

Workspaces are configured in `src/components/app-sidebar.tsx`. To add new workspaces:

```typescript
const workspaces = [
  {
    name: "Your Workspace",
    logo: YourIcon,
    plan: "Enterprise",
  },
  // ... more workspaces
]
```

## 📱 Responsive Design

The template is fully responsive with:

- **Mobile-first approach**: Optimized for mobile devices
- **Sidebar behavior**: Collapsible sidebar on mobile, persistent on desktop
- **Grid layouts**: Responsive grid systems for cards and tables
- **Touch-friendly**: Optimized for touch interactions

## 🎯 CRM Features

### Dashboard
- Revenue metrics and KPIs
- Recent sales activity
- Activity timeline
- Quick action buttons

### Contacts Management
- Contact list with search and filtering
- Contact details with company information
- Bulk actions and export functionality
- Contact statistics

### Companies Management
- Company profiles with industry information
- Revenue tracking and employee count
- Contact associations
- Company statistics

### Task Management
- Task assignment and tracking
- Priority levels and status management
- Due date tracking
- Team collaboration

### Calendar
- Event scheduling and management
- Meeting types and locations
- Attendee management
- Quick actions for calls and meetings

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with the template, please open an issue on GitHub.

---

Built with ❤️ using [shadcn/ui](https://ui.shadcn.com) and [Next.js](https://nextjs.org) 