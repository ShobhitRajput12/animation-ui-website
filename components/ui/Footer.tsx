import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-bg-secondary py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold text-[10px]">
            A
          </div>
          <span className="font-bold text-white tracking-tight">Animation UI</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-white/50">
          <Link href="/components" className="hover:text-white transition-colors">Components</Link>
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="https://github.com/ShobhitRajput12/animation-ui-web" className="hover:text-white transition-colors">GitHub</Link>
        </div>
        
        <div className="text-sm text-white/30">
          © {new Date().getFullYear()} Animation UI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
