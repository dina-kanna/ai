
import { useCallback, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import FashionCategories from "./components/FashionCategories";
import OutfitCard from "./components/OutfitCard";
import StyleStudio from "./components/StyleStudio";
import OutfitModal from "./components/OutfitModal";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

import { outfits } from "./data/outfits";

export default function App() {
  const [page, setPage] = useState("loading");
  const [user, setUser] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All Looks");
  const [savedIds, setSavedIds] = useState([]);
  const [selectedOutfit, setSelectedOutfit] = useState(null);

  // Show the loading screen initially.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPage("home");
    }, 1600);

    return () => window.clearTimeout(timer);
  }, []);

  // Scroll to the top whenever the page changes.
  // Keep this hook above all conditional returns.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [page]);

  // Navigate between pages.
  const navigate = useCallback((nextPage) => {
    setSelectedOutfit(null);
    setPage(nextPage);
  }, []);

  // Handle successful demo login or signup.
  const handleSuccess = useCallback(
    (data) => {
      setUser({
        name: data.name || data.email.split("@")[0],
        email: data.email,
      });

      navigate("profile");
    },
    [navigate]
  );

  // Log out.
  const handleLogout = useCallback(() => {
    setUser(null);
    setSavedIds([]);
    navigate("home");
  }, [navigate]);

  // Save or unsave an outfit.
  const toggleSave = useCallback((id) => {
    setSavedIds((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id]
    );
  }, []);

  // Filter outfits by category.
  const filteredOutfits =
    activeCategory === "All Looks"
      ? outfits
      : outfits.filter(
          (outfit) => outfit.category === activeCategory
        );

  // Find the user's saved outfits.
  const savedOutfits = outfits.filter((outfit) =>
    savedIds.includes(outfit.id)
  );

  // Loading page.
  if (page === "loading") {
    return <LoadingScreen />;
  }

  // Login page.
  if (page === "login") {
    return (
      <Login
        onNavigate={navigate}
        onSuccess={handleSuccess}
      />
    );
  }

  // Signup page.
  if (page === "signup") {
    return (
      <Signup
        onNavigate={navigate}
        onSuccess={handleSuccess}
      />
    );
  }

  // Profile page.
  if (page === "profile") {
    return (
      <Profile
        user={user}
        favorites={savedOutfits}
        onNavigate={navigate}
        onLogout={handleLogout}
      />
    );
  }

  // Home page.
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#252820]">
      <Navbar
        onNavigate={navigate}
        user={user}
      />

      <main>
        <Hero />

        <HowItWorks />

        {/* Discover outfits */}
        <section
          id="discover"
          className="mx-auto max-w-full px-4 py-16 sm:px-8 sm:py-20 lg:py-24"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#899779]">
                The style journal
              </p>

              <h2 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
                Looks for every{" "}
                <span className="font-serif italic text-[#899779]">
                  version of you.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#77796f]">
                From everyday ease to your next big entrance.
                Find a starting point, then make it yours.
              </p>
            </div>

            <a
              href="#stylist"
              className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-[#899779]"
            >
              Personalize your edit →
            </a>
          </div>

          <FashionCategories
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          {filteredOutfits.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filteredOutfits.map((outfit) => (
                <OutfitCard
                  key={outfit.id}
                  outfit={outfit}
                  saved={savedIds.includes(outfit.id)}
                  onToggleSave={toggleSave}
                  onOpen={setSelectedOutfit}
                />
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-[#77796f]">
              No outfits found in this category.
            </p>
          )}
        </section>

        <CallToAction />

        {/* Personalized style studio */}
        <StyleStudio
          savedIds={savedIds}
          onToggleSave={toggleSave}
          onOpen={setSelectedOutfit}
        />
      </main>

      <Footer onNavigate={navigate} />

      {/* Outfit details modal */}
      <OutfitModal
        outfit={selectedOutfit}
        onClose={() => setSelectedOutfit(null)}
      />
    </div>
  );
}
