import React from 'react';

export default function About() {
    return (
        <div className="max-w-4xl mx-auto p-8 text-[var(--color-text)] space-y-10">
            <section>
                <h2 className="text-3xl font-semibold mb-4 border-b border-[var(--color-border)] pb-2">
                    O projekcie
                </h2>
                <p className="text-lg leading-relaxed">
                    Scenic Spots to aplikacja webowa stworzona z myślą o użytkownikach chcących odkrywać ciekawe i mniej znane miejsca w swojej okolicy.
                    Łączy prostotę obsługi z możliwością eksplorowania lokalnych atrakcji dodawanych przez społeczność.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
                    Jak to działa
                </h2>
                <p className="text-base leading-relaxed">
                    Aplikacja korzysta z autorskiego REST API do pobierania oraz dodawania lokalizacji. Frontend zbudowany w React komunikuje się z backendem,
                    umożliwiając użytkownikowi przeglądanie, wyszukiwanie i udostępnianie miejsc. Duży nacisk położony jest na wygodę użytkownika — w tym dopracowany interfejs,
                    możliwość zmiany języka, regulację rozmiaru czcionki oraz wsparcie dla różnych trybów wyświetlania.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
                    Technologie
                </h2>
                <ul className="list-disc list-inside space-y-1 text-base">
                    <li><span className="text-[var(--color-accent)]">React + TailwindCSS</span> – frontend</li>
                    <li><span className="text-[var(--color-accent)]">GO Lang</span> – backend</li>
                    <li><span className="text-[var(--color-accent)]">Google Firestore NoSQL Database</span> – baza danych</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
                    Kod źródłowy
                </h2>
                <ul className="space-y-2 text-base">
                    <li>
                        Backend: <a
                            href="https://github.com/czxrny/scenic-spots-api"
                            className="text-[var(--color-secondary)] hover:underline"
                            target="_blank" rel="noopener noreferrer"
                        >czxrny/scenic-spots-api</a>
                    </li>
                    <li>
                        Frontend: <a
                            href="https://github.com/czxrny/scenic-spots-frontend"
                            className="text-[var(--color-secondary)] hover:underline"
                            target="_blank" rel="noopener noreferrer"
                        >czxrny/scenic-spots-frontend</a>
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
                    Autor
                </h2>
                <p className="text-base">
                    Projekt stworzony przez <a
                        href="https://github.com/czxrny"
                        className="text-[var(--color-secondary)] hover:underline"
                        target="_blank" rel="noopener noreferrer"
                    >@czxrny</a>. Aplikacja powstała z potrzeby tworzenia czegoś wartościowego i estetycznego, co łączy technologię z eksploracją świata.
                </p>
            </section>
        </div>
    );
}
