import SkillsGrid from "@/components/skills/SkillsGrid";

export default function SkillPage () {
    return (
        <main className="min-h-screen bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Page Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Skills & Technologies
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Technologies and tools I use to build scalable, maintainable and modern web application.
                    </p>
                </div>

                {/* Skills Grid */}
                <SkillsGrid />
            </div>
        </main>
    )
}