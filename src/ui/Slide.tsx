import Anim from '@/components/ScrollAnim/Anim'
import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
const slide = cva('m-auto sm:max-w-md lg:max-w-2xl max-w-xs mt-56 flex', {
	variants: {
		intent: {
			primary: ['bg-[#621276]'],
			secondary: ['bg-[#F8ABB6]'],
		},
	},
	compoundVariants: [{ intent: 'primary' }],
	defaultVariants: {
		intent: 'primary',
	},
})

export interface SlideProps
	extends React.ButtonHTMLAttributes<HTMLDivElement>,
		VariantProps<typeof slide> {
	imageUrl?: string
	imagePosition?: 'left' | 'right'
}

export const Slide: React.FC<SlideProps> = ({
	className,
	title,
	intent,
	children,
	imageUrl,
	imagePosition = 'left',
	...props
}) => (
	<Anim className={slide({ intent, className })} {...props}>
		{imagePosition === 'left' && imageUrl ? (
			<Image
				src={imageUrl}
				width={300}
				height={1}
				alt='Picture of the author'
				className='sm:max-w-xs md: lg: xl: 2xl:'
			/>
		) : null}
		<div className='md:m-4 m-2'>
			{title ? <h1 className='font-bold text-center'>{title}</h1> : ''}
			{children}
		</div>
		{imagePosition === 'right' && imageUrl ? (
			<Image
				src={imageUrl}
				width={300}
				height={1}
				alt='Picture of the author'
				className='sm:max-w-xs md: lg: xl: 2xl:'
			/>
		) : null}
	</Anim>
)
