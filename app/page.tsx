"use client"

import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Summary />
            <Skills />
            <Experience />
            <Education />
            <Footer />
        </main>
    );
}





