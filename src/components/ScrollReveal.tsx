import { useRef, ReactNode } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

// Snappy expo ease-out — the "premium" easing
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

// ─── Reveal: fade + rise for any block element ───────────────────────────────
interface RevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  style?: React.CSSProperties
  once?: boolean
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 48,
  className,
  style,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

// ─── RevealStagger: children animate in sequence ─────────────────────────────
interface RevealStaggerProps {
  children: ReactNode[]
  stagger?: number
  delay?: number
  y?: number
  className?: string
  style?: React.CSSProperties
}

const staggerContainer: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export function RevealStagger({
  children,
  stagger = 0.07,
  delay = 0,
  className,
  style,
}: RevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      custom={stagger}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      transition={{ delayChildren: delay }}
      className={className}
      style={style}
    >
      {(children as ReactNode[]).map((child, i) => (
        <motion.div key={i} variants={staggerChild}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// ─── RevealText: splits headline text word-by-word ───────────────────────────
interface RevealTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
  stagger?: number
  style?: React.CSSProperties
  className?: string
}

export function RevealText({
  text,
  as: Tag = 'h2',
  delay = 0,
  stagger = 0.06,
  style,
  className,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const words = text.split(' ')

  return (
    // @ts-ignore - polymorphic ref
    <Tag
      ref={ref}
      className={className}
      style={{ ...style, overflow: 'hidden', display: 'block' }}
      aria-label={text}
    >
      <span
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0 0.25em',
          overflow: 'hidden',
        }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{ overflow: 'hidden', display: 'inline-block' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: '110%', opacity: 0 }}
              animate={isInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{
                duration: 0.75,
                delay: delay + i * stagger,
                ease: EASE_OUT_EXPO,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  )
}

// ─── RevealLine: single line rise (eyebrows, labels) ─────────────────────────
interface RevealLineProps {
  children: ReactNode
  delay?: number
  style?: React.CSSProperties
  className?: string
}

export function RevealLine({ children, delay = 0, style, className }: RevealLineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} style={{ overflow: 'hidden', ...style }} className={className}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{ duration: 0.6, delay, ease: EASE_OUT_EXPO }}
      >
        {children}
      </motion.div>
    </div>
  )
}
