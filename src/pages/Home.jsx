import { MapPin, Users, Camera, Star, ArrowRight, Menu } from "lucide-react"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors">
            {/* Skip to main content link for keyboard users */}
            <a href="#main-content" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-primary text-white px-4 py-2 rounded z-50">Skip to main content</a>

            <section className="relative py-20 px-4 hero-section overflow-hidden" aria-label="Hero section">
                <div className="absolute inset-0 bg-cover bg-center opacity-25 z-0 bg-[url('/background.png')] overflow-hidden high-contrast:hidden bg-img" aria-hidden="true"></div>

                <div className="relative container mx-auto text-center max-w-4xl z-10">
                    <div className="inline-flex items-center space-x-2 bg-[var(--color-muted)] px-4 py-2 rounded-full text-sm mb-6">
                        <Star className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
                        <span>Odkryj ukryte skarby w Twojej okolicy</span>
                    </div>

                    <h1 id="main-content" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Ciekawe miejsca w <span className="text-[var(--color-primary)]">Twojej okolicy</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[var(--color-text)]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Aplikacja webowa do odkrywania interesujących i mniej znanych miejsc w Twoim otoczeniu. Dziel się swoimi
                        odkryciami i poznawaj lokalizacje warte odwiedzenia.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="btn btn-primary btn-lg flex flex-row items-center" aria-label="Rozpocznij odkrywanie">
                            Rozpocznij odkrywanie
                            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                        </button>
                        <button className="btn btn-outline btn-lg" aria-label="Zobacz jak to działa">Zobacz jak to działa</button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 features-section" aria-label="Funkcje aplikacji">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Dlaczego warto wybrać <span className="text-[var(--color-secondary)]">Scenic Spots</span>?
                        </h2>
                        <p className="text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto">
                            Nasza platforma łączy pasjonatów odkrywania nowych miejsc i pomaga budować społeczność lokalnych
                            odkrywców.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card" tabIndex={0} aria-label="Odkrywaj lokalne skarby">
                            <div className="card-content">
                                <div className="w-12 h-12 bg-[var(--color-primary)]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-6 h-6 text-[var(--color-primary)]" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Odkrywaj lokalne skarby</h3>
                                <p className="text-[var(--color-text)]/70">
                                    Znajdź ukryte perły w swojej okolicy dzięki naszemu autorskiemu API i rekomendacjom społeczności.
                                </p>
                            </div>
                        </div>

                        <div className="card" tabIndex={0} aria-label="Dziel się odkryciami">
                            <div className="card-content">
                                <div className="w-12 h-12 bg-[var(--color-secondary)]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6 text-[var(--color-secondary)]" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Dziel się odkryciami</h3>
                                <p className="text-[var(--color-text)]/70">
                                    Dodawaj swoje ulubione miejsca i pomagaj innym odkrywać niesamowite lokalizacje.
                                </p>
                            </div>
                        </div>

                        <div className="card" tabIndex={0} aria-label="Dokumentuj przygody">
                            <div className="card-content">
                                <div className="w-12 h-12 bg-[var(--color-accent)]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Camera className="w-6 h-6 text-[var(--color-accent)]" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Dokumentuj przygody</h3>
                                <p className="text-[var(--color-text)]/70">
                                    Zachowaj wspomnienia z odwiedzonych miejsc i inspiruj innych do eksploracji.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4" aria-label="Statystyki społeczności">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="stat-item" tabIndex={0} aria-label="Odkrytych miejsc: 2,500+">
                            <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2">2,500+</div>
                            <div className="text-[var(--color-text)]/70">Odkrytych miejsc</div>
                        </div>
                        <div className="stat-item" tabIndex={0} aria-label="Aktywnych użytkowników: 1,200+">
                            <div className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-2">1,200+</div>
                            <div className="text-[var(--color-text)]/70">Aktywnych użytkowników</div>
                        </div>
                        <div className="stat-item" tabIndex={0} aria-label="Miast w Polsce: 50+">
                            <div className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-2">50+</div>
                            <div className="text-[var(--color-text)]/70">Miast w Polsce</div>
                        </div>
                        <div className="stat-item" tabIndex={0} aria-label="Średnia ocena: 4.8 gwiazdki">
                            <div className="text-3xl md:text-4xl font-bold text-[var(--color-success)] mb-2">4.8★</div>
                            <div className="text-[var(--color-text)]/70">Średnia ocena</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 cta-section" aria-label="Wezwanie do działania">
                <div className="container mx-auto text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Gotowy na swoją następną przygodę?</h2>
                    <p className="text-lg text-[var(--color-text)]/70 mb-8">
                        Dołącz do tysięcy odkrywców, którzy już korzystają z Scenic Spots. Zacznij odkrywać niesamowite miejsca w
                        swojej okolicy już dziś.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn btn-primary btn-lg" aria-label="Rozpocznij za darmo">Rozpocznij za darmo</button>
                        <button className="btn btn-outline btn-lg" aria-label="Dowiedz się więcej">Dowiedz się więcej</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-[var(--color-border)] bg-[var(--color-muted)]/30" aria-label="Stopka">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <div className="w-6 h-6 bg-[var(--color-primary)] rounded flex items-center justify-center">
                                <MapPin className="w-4 h-4 text-white" aria-hidden="true" />
                            </div>
                            <span className="font-semibold">Scenic Spots</span>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-[var(--color-text)]/70">
                            <a href="#" className="footer-link" aria-label="Polityka prywatności">
                                Polityka prywatności
                            </a>
                            <a href="#" className="footer-link" aria-label="Regulamin">
                                Regulamin
                            </a>
                            <a href="#" className="footer-link" aria-label="Kontakt">
                                Kontakt
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-text)]/60">
                        © 2024 Scenic Spots. Wszystkie prawa zastrzeżone.
                    </div>
                </div>
            </footer>
        </div>
    )
}
