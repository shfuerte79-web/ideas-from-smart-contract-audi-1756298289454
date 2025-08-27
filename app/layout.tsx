import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Interactive Smart Contract Simulator",
    "one_liner": "Simulate potential vulnerabilities in smart contracts using AI-driven scenarios.",
    "why_now": "With the rise in DeFi applications, there's an urgent need for robust security mechanisms.",
    "novel_mechanism": "Utilizing AI to generate attack vectors based on existing vulnerabilities in real-time.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Agents",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Training developers on secure coding practices",
      "Running security drills for firms",
      "Visualizing contract vulnerabilities dynamically"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Basic contract simulation",
        "Vulnerability generation",
        "User feedback collection"
      ],
      "tools": [
        "Next.js",
        "Supabase"
      ],
      "data_bootstrap": [
        "public dataset of smart contract vulnerabilities",
        "synthetic scenarios using LLM"
      ],
      "risk": [
        "Technical feasibility of simulation",
        "User engagement low"
      ],
      "mitigation": [
        "Rapid prototyping and user testing",
        "Incorporate gamification to enhance engagement"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Interactive demo showcases the tool's capabilities",
        "Before/after security audit case studies"
      ],
      "channels": [
        "ProductHunt",
        "Telegram",
        "Developer forums"
      ],
      "pricing": {
        "free": "Basic features with limited simulations",
        "pro": "Full access to advanced simulations",
        "business": "Enterprise features with team training modules"
      }
    },
    "moat": [
      "Unique simulation models",
      "Building a community of developers around security best practices",
      "Network effects from user-generated tests"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 8
    },
    "total_score": 29,
    "reasoning": "Offers a unique approach to learning about vulnerabilities while being engaging, unlike standard audit tools."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}