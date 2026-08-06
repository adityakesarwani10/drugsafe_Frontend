import { Link, useLocation } from "react-router-dom";
import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useLocation().pathname;

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-105">
              <Shield className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <div className="text-base font-bold tracking-tight leading-none">DrugSafe</div>
              <div className="text-[11px] text-muted-foreground leading-tight mt-0.5 hidden sm:block">
                Smart Drug Interaction Checker
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {pathname === "/" ? (
              <a href="#about" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </a>
            ) : (
              <Link to="/#about" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            )}
            <ThemeToggle />
            <Link to="/dashboard">
              <Button className="gradient-primary text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all">
                Dashboard
              </Button>
            </Link>
          </nav>

          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetTitle className="text-left">Menu</SheetTitle>
                <div className="mt-8 flex flex-col gap-3">
                  <a href="/#about" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl hover:bg-muted text-sm font-medium">
                    About Us
                  </a>
                  <Link to="/dashboard" onClick={() => setOpen(false)}>
                    <Button className="w-full gradient-primary text-white">Dashboard</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
