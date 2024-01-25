<script lang="ts">
	/**
	 * 按钮的类型
	 */
	export let types: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'gradient' =
		'primary';
	/**
	 * 按钮是否是圆角
	 */
	export let round: boolean = true;
	/**
	 * 按钮的背景颜色
	 */
	export let backgroundColor: string | undefined = undefined;
	export let backgroundColorClass: string | undefined = undefined;
	export let textColorClass: string | undefined = undefined;
	/**
	 * 按钮的背景渐变
	 */
	export let backgroundGradient: string | undefined = undefined;
	/**
	 * 按钮的大小
	 */
	export let size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md';
	/**
	 * 按钮的文本
	 */
	export let label: string = '';

	$: bgColorClass = backgroundColorClass
		? backgroundColorClass
		: {
				primary: 'bg-primary',
				secondary: 'bg-secondary',
				tertiary: 'border-solid border border-outline',
				ghost: '',
				danger: 'bg-error',
				gradient: 'shadow'
			}[types];
	$: textColorClass = textColorClass
		? textColorClass
		: {
				primary: 'text-onPrimary',
				secondary: 'text-onSecondary',
				tertiary: 'text-primary',
				ghost: 'text-primary',
				danger: 'text-onError',
				gradient: 'text-white'
			}[types];
	$: roundedClass = round
		? `rounded-full ${
				{
					sm: 'px-4',
					md: 'pl-4 pr-6',
					lg: 'px-6',
					xl: 'px-7',
					'2xl': 'px-8'
				}[size]
			}`
		: {
				sm: 'rounded-lg px-3.5',
				md: 'rounded-lg px-4',
				lg: 'rounded-[10px] px-[18px]',
				xl: 'rounded-xl px-5',
				'2xl': 'rounded-xl px-7'
			}[size];
	$: sizeClass = {
		sm: 'py-2 text-xs',
		md: 'py-2.5 text-sm',
		lg: 'py-2.5 text-sm',
		xl: 'py-3 text-base',
		'2xl': 'py-4 text-base'
	}[size];
	$: styleClass = `flex shrink-0 items-center tracking-[.1px] whitespace-nowrap ${bgColorClass} ${textColorClass} ${roundedClass} ${sizeClass}`;

	$: bgGradientStyle =
		types == 'gradient'
			? backgroundGradient
				? `background-image: ${backgroundGradient}`
				: 'background-image: var(--gradient)'
			: '';
	$: bgColorstyle = backgroundColor ? `background-color: ${backgroundColor};` : '';
	$: style = `${bgColorstyle} ${bgGradientStyle}`;
</script>

<button class={styleClass} on:click {style} type="button">
	<slot name="icon" />
	<div class="pl-2">
		{label}
	</div>
</button>
