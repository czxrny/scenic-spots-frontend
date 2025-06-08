import React from 'react';

export default function Home() {
    return (
        <div className="max-w-3xl mx-auto p-6 text-[var(--color-text)]">
            <h1 className="text-4xl font-bold mb-4 text-center">
                Ciekawe miejsca w Twojej okolicy
            </h1>
            <p className="text-lg leading-relaxed text-center">
                Aplikacja webowa do odkrywania interesujących i mniej znanych miejsc w Twoim otoczeniu.
                Korzysta z autorskiego API oraz pozwala użytkownikom dodawać i przeglądać lokalizacje warte odwiedzenia.
            </p>
        </div>
    );
}
