'use client'
import { MotionProps, motion } from 'framer-motion'
import React from 'react'
interface MyMotionDivProps extends MotionProps {
	className?: string
}
export default function Anim({
	children,
	className,
	tag = 'div',
	isOneTime = true,
}: {
	children: React.ReactNode
	className?: string
	tag?: keyof typeof motion
	isOneTime?: boolean
}) {
	const Tag = motion[tag] as React.ElementType<MyMotionDivProps>
	return (
		<Tag
			className={className}
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: isOneTime, amount: 0.8 }}
			variants={{
				offscreen: {
					y: 50,
					opacity: 0,
				},
				onscreen: {
					y: 0,
					opacity: 1,
					transition: {
						type: 'spring',
						bounce: 0.4,
						duration: 0.8,
					},
				},
			}}
		>
			{children}
		</Tag>
	)
}
