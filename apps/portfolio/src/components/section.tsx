import { cn } from '@/lib/utils'

/** https://getpublii.com/blog/one-line-css-solution-to-prevent-anchor-links-from-scrolling-behind-a-sticky-header.html */
export const Section = ({
	className,
	...props
}: React.ComponentProps<'section'>) => {
	return (
		<section className={cn('border-t-2 px-4 py-8', className)} {...props}>
			<h2 className="box-shadow mx-auto mb-8 w-fit rounded-md border-2 border-border bg-background p-2 py-2 text-center font-bold text-5xl">
				{props.title}
			</h2>
			<div className="flex items-center justify-center">{props.children}</div>
		</section>
	)
}
