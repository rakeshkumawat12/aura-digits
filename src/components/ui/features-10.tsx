import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { LucideIcon, Sparkles, Grid3x3 } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
    return (
        <section className="bg-bg-secondary py-12 md:py-20">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-4xl">
                <div className="mx-auto grid gap-4 lg:grid-cols-2">
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Sparkles}
                                title="Mulank Analysis"
                                description="Discover your core number and unlock deep insights into your personality."
                            />
                        </CardHeader>

                        <div className="relative mb-4 border-t border-dashed border-white/10 sm:mb-0">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,hsl(var(--muted)),#0A0A0F_125%)]"></div>
                            <div className="aspect-[76/59] p-1 px-6 flex items-center justify-center">
                                <div className="text-5xl font-display text-gradient">1-9</div>
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Grid3x3}
                                title="Lu Shu Grid"
                                description="Ancient Chinese numerology grid revealing your life's patterns."
                            />
                        </CardHeader>

                        <CardContent>
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                                <div className="aspect-[76/59] border border-white/10 rounded-lg p-4 bg-bg-tertiary">
                                    <div className="grid grid-cols-3 gap-2 h-full">
                                        {[4, 9, 2, 3, 5, 7, 8, 1, 6].map((num, i) => (
                                            <div
                                                key={i}
                                                className="border border-primary/30 rounded flex items-center justify-center text-2xl font-bold text-primary"
                                            >
                                                {num}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </FeatureCard>

                    <FeatureCard className="p-5 lg:col-span-2">
                        <p className="mx-auto my-4 max-w-md text-balance text-center text-lg font-semibold text-white">
                            Comprehensive numerology readings with destiny number insights.
                        </p>

                        <div className="flex justify-center gap-6 overflow-hidden">
                            <CircularUI
                                label="Life Path"
                                circles={[{ pattern: 'border' }, { pattern: 'border' }]}
                            />

                            <CircularUI
                                label="Destiny"
                                circles={[{ pattern: 'none' }, { pattern: 'primary' }]}
                            />

                            <CircularUI
                                label="Mulank"
                                circles={[{ pattern: 'teal' }, { pattern: 'none' }]}
                            />

                            <CircularUI
                                label="Soul"
                                circles={[{ pattern: 'primary' }, { pattern: 'none' }]}
                                className="hidden sm:block"
                            />
                        </div>
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}

interface FeatureCardProps {
    children: ReactNode
    className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
    <Card className={cn('group relative rounded-lg shadow-2xl bg-bg-tertiary/50 backdrop-blur-sm border-white/10', className)}>
        <CardDecorator />
        {children}
    </Card>
)

const CardDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

interface CardHeadingProps {
    icon: LucideIcon
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-5">
        <span className="text-white/60 flex items-center gap-2 text-sm">
            <Icon className="size-4 text-primary" />
            {title}
        </span>
        <p className="mt-4 text-lg font-semibold text-white">{description}</p>
    </div>
)

interface CircleConfig {
    pattern: 'none' | 'border' | 'primary' | 'teal'
}

interface CircularUIProps {
    label: string
    circles: CircleConfig[]
    className?: string
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
    <div className={className}>
        <div className="bg-gradient-to-b from-primary/20 size-fit rounded-2xl to-transparent p-px">
            <div className="bg-gradient-to-b from-bg-tertiary to-bg-secondary relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
                {circles.map((circle, i) => (
                    <div
                        key={i}
                        className={cn('size-7 rounded-full border sm:size-8',
                            circle.pattern === 'none' && 'border-primary',
                            circle.pattern === 'border' && 'border-primary bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_1px,transparent_1px,transparent_4px)]',
                            circle.pattern === 'primary' && 'border-primary bg-bg-primary bg-[repeating-linear-gradient(-45deg,#0D9488,#0D9488_1px,transparent_1px,transparent_4px)]',
                            circle.pattern === 'teal' && 'bg-bg-primary z-1 border-primary bg-[repeating-linear-gradient(-45deg,#14B8A6,#14B8A6_1px,transparent_1px,transparent_4px)]'
                        )}></div>
                ))}
            </div>
        </div>
        <span className="text-white/60 mt-1.5 block text-center text-sm">{label}</span>
    </div>
)
